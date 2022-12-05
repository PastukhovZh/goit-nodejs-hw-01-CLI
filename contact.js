const path = require("path")
const fs = require("fs").promises



const contactsPath = path.resolve("db/contacts.json")

// TODO: задокументировать каждую функцию
async function listContacts() {
 try {
    const data = await fs.readFile(contactsPath);
    const result = JSON.parse(data);
    console.table(result);
  } catch (error) {
    console.log(error);
  }
}

async function getContactById(contactId) {
     try {
    const data = await fs.readFile(contactsPath);
    const result = JSON.parse(data);
    return console.table(result.find(contact => contact.id = contactId))
    } catch (error) {
    console.log(error);
  }
}

async function removeContact(contactId) {
    try {
        const data =await fs.readFile(contactsPath);
    const result =JSON.parse( data);
        const findDelete = result.findIndex(contact=>contact.id == contactId)
        result.splice(findDelete, 1)
        await fs.writeFile(contactsPath, JSON.stringify(result))
        console.table(result)
    } catch (error) {
    console.log(error);
        
    }
}

async function addContact(name, email, phone) {
try {
    const data =await fs.readFile(contactsPath);
    const result = JSON.parse(data);
    const uId= Math.random().toFixed(2)
    const newContact = { id:uId, name, email, phone }
    result.push(newContact)

    await fs.writeFile(contactsPath, JSON.stringify(result))
console.table(result)
} catch (error) {
    console.log(error);

}
}


module.exports = {
    listContacts,
    getContactById,
    removeContact,
    addContact,
}




console.log()