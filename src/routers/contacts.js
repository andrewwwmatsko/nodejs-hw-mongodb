import { Router } from 'express';
import {
  createContactController,
  deleteContactController,
  getAllContactsController,
  getContactByIDController,
  patchContactController,
} from '../controllers/contacts.js';

import { ctrlWrapper } from '../utils/ctrlWrapper.js';

import { validateBody } from '../utils/validateBody.js';

import {
  addContactValidationSchema,
  patchContactValidationSchema,
} from '../validation/contacts.js';

const router = Router();

router.get('/', ctrlWrapper(getAllContactsController));

router.get('/:contactId', ctrlWrapper(getContactByIDController));

router.post(
  '/',
  validateBody(addContactValidationSchema),
  ctrlWrapper(createContactController),
);

router.patch(
  '/:contactId',
  validateBody(patchContactValidationSchema),
  ctrlWrapper(patchContactController),
);

router.delete('/:contactId', ctrlWrapper(deleteContactController));

export default router;
