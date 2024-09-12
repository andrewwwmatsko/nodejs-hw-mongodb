import { model, Schema } from 'mongoose';

import { contactTypeList } from '../../constants/index.js';

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    email: String,
    isFavourite: {
      type: Boolean,
      default: false,
    },
    contactType: {
      type: String,
      enum: contactTypeList,
      required: true,
      default: 'personal',
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const contactsCollection = model('contact', contactSchema);
