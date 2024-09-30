import { Command } from 'commander';
const program = new Command();

import {
  listContacts,
  getContactById,
  removeContact,
  addContact,
} from './contacts.js';

program
  .option('-a, --action <type>')
  .option('-i, --id <id>')
  .option('-n, --name <name>')
  .option('-e, --email <email>')
  .option('-p, --phone <phone>')
  .allowUnknownOption(true);

program.parse(process.argv);

const argv = program.opts();

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case 'list':
      const contacts = await listContacts();
      console.table(contacts);
      break;

    case 'get':
      const contactsById = await getContactById(id);
      console.log(contactsById);
      break;

    case 'add':
      const addNewContact = await addContact({ name, email, phone });
      console.log(addNewContact);
      break;

    case 'remove':
      const deleteContact = await removeContact(id);
      console.log(deleteContact);
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
};

invokeAction(argv);
