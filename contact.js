const path = require("path")
const fs = require("fs")



const contactsPath = path.resolve("db/contacts.json")


// TODO: задокументировать каждую функцию
function listContacts() {
return fs.readFile(contactsPath, "utf-8", (err,data) => {
    if (err) {
        console.error(err)
    }
    console.log(data)
})
}

function getContactById(contactId) {
return fs.readFile(contactsPath, "utf-8", (err,data) => {
    if (err) {
        console.error(err)
    }
    contactId=data.id
    console.log(contactId)
})
}

function removeContact(contactId) {
return fs.unlink(contactsPath,{contactId}, "utf-8", (err,data) => {
    if (err) {
        console.error(err)
    }
    console.log(data)
} )
}

function addContact(name, email, phone) {
return fs.appendFile(contactsPath,{name, email,phone}, "utf-8", (err,data) => {
    if (err) {
        console.error(err)
    }
    console.log(data)
} )
}


module.exports = {
    listContacts,
    getContactById,
    removeContact,
    addContact,
}




console.log()