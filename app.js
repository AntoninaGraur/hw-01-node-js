import contactsServices from "./contacts/index.js";

const invokeAction = async ({ action, id, name, email, phone }) => {
  try {
    switch (action) {
      case "list":
        const allContacts = await contactsServices.listContacts();
        return console.log(allContacts);
      case "getById":
        const oneContact = await contactsServices.getContactsById(id);
        return console.log(oneContact);
      case "add":
        const newContact = await contactsServices.addContacts({
          name,
          email,
          phone,
        });
        return console.log(newContact);
      case "update":
        const updateContact = await contactsServices.updateContactsById(id, {
          name,
          email,
          phone,
        });
        return console.log(updateContact);
      case "remove":
        const removeContact = await contactsServices.removeContact(id);
        return console.log(removeContact);
      default:
        console.warn("\x1B[31m Unknown action type!");
    }
  } catch (error) {
    console.log(error);
  }
};
invokeAction({ action: "add" });
// const actionIndex = process.argv.indexOf("--action");

// if (actionIndex !== -1) {
//   const action = process.argv[actionIndex + 1];
//   invokeAction({ action });
// }
