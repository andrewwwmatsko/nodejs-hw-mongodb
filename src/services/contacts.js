import { SORT_ORDER } from '../constants/index.js';
import { contactsCollection } from '../db/models/contact.js';
import { calculatePaginationData } from '../utils/calculatePaginationData.js';

export const getAllContacts = async ({
  page,
  perPage,
  sortBy = '_id',
  sortOrder = SORT_ORDER[0],
  filter = {},
}) => {
  const limit = perPage;
  const skip = (page - 1) * perPage;

  const contactsQuerry = contactsCollection.find();

  if (filter.contactType) {
    contactsQuerry.where('contactType').equals(filter.contactType);
  }

  if (filter.isFavourite) {
    contactsQuerry.where('isFavourite').equals(filter.isFavourite);
  }

  // const contacts = await contactsQuerry
  //   .skip(skip)
  //   .limit(limit)
  //   .sort({ [sortBy]: sortOrder })
  //   .exec();

  // const contactsCount = await contactsCollection
  //   .find()
  //   .merge(contactsQuerry)
  //   .countDocuments();

  const [contacts, contactsCount] = await Promise.all([
    contactsQuerry
      .skip(skip)
      .limit(limit)
      .sort({ [sortBy]: sortOrder })
      .exec(),
    contactsCollection.find().merge(contactsQuerry).countDocuments(),
  ]);

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
