const contacs = require('./contacs');
const argv = require('yargs').argv;

function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
        contacs.listContacts();
      break;

    case "get":
      contacs.getContactById(id);
      break;

    case "add":
        contacs.addContact(name, email, phone);
      break;

    case "remove":
        contacs.removeContact(id);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);