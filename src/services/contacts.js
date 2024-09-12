import { contactsCollection } from '../db/models/contact.js';
import { calculatePaginationData } from '../utils/calculatePaginationData.js';

export const getAllContacts = async ({ page, perPage }) => {
  const limit = perPage;
  const skip = (page - 1) * perPage;

  const contactsQuerry = contactsCollection.find();

  const contactsCount = await contactsCollection
    .find()
    .merge(contactsQuerry)
    .countDocuments();

  const contacts = await contactsQuerry.skip(skip).limit(limit).exec();

  const paginationData = calculatePaginationData(contactsCount, page, perPage);

  return {
    data: contacts,
    ...paginationData,
  };
};

export const getContactByID = async (id) => {
  const contact = await contactsCollection.findById(id);

  return contact;
};

export const createContact = async (payload) => {
  const newContact = await contactsCollection.create(payload);

  return newContact;
};

export const updateContact = async (studentId, payload, options = {}) => {
  const rawData = await contactsCollection.findOneAndUpdate(
    { _id: studentId },
    payload,
    {
      includeResultMetadata: true,
      ...options,
    },
  );

  if (!rawData || !rawData.value) return null;

  return {
    data: rawData.value,
  };
};

export const deleteContact = async (id) => {
  const deletedContact = await contactsCollection.findOneAndDelete({ _id: id });

  return deletedContact;
};
