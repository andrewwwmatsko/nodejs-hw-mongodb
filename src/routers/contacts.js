import { Router } from 'express';
import {
  createContactController,
  getAllContactsController,
  getContactByIDController,
} from '../controllers/contacts.js';

import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const router = Router();

router.get('/', ctrlWrapper(getAllContactsController));

router.get('/:contactId', ctrlWrapper(getContactByIDController));

router.post('/', ctrlWrapper(createContactController));

export default router;
