import { contactsCollection } from '../db/models/contact.js';

export const getAllContacts = async () => {
  const contacts = await contactsCollection.find();

  return contacts;
};

export const getContactByID = async (id) => {
  const contact = await contactsCollection.findById(id);

  return contact;
};

export const createContact = async (payload) => {
  const newContact = await contactsCollection.create(payload);

  return newContact;
};
