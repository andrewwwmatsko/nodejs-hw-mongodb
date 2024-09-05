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

export const upsertContact = async (studentId, payload, options = {}) => {
  const rawData = await contactsCollection.findOneAndUpdate(
    { _id: studentId },
    payload,
    {
      new: true,
      includeResultMetadata: true,
      ...options,
    },
  );

  if (!rawData || !rawData.value) return null;

  return {
    isNew: Boolean(rawData.lastErrorObject?.upserted),
    data: rawData.value,
  };
};

export const deleteContact = async (id) => {
  const deletedContact = await contactsCollection.findOneAndDelete({ _id: id });

  return deletedContact;
};
