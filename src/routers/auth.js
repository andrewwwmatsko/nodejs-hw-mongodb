import { Router } from 'express';
import {
  loginUserController,
  logOutUserController,
  refreshUserController,
  registerUserController,
  requestResetEmailController,
} from '../controllers/auth.js';

import { ctrlWrapper } from '../utils/ctrlWrapper.js';

import { validateBody } from '../utils/validateBody.js';

import {
  loginUserValidationSchema,
  registerUserValidationSchema,
  resetPasswordEmailValidationSchema,
} from '../validation/auth.js';

const authRouter = Router();

authRouter.post(
  '/register',
  validateBody(registerUserValidationSchema),
  ctrlWrapper(registerUserController),
);

authRouter.post(
  '/login',
  validateBody(loginUserValidationSchema),
  ctrlWrapper(loginUserController),
);

authRouter.post('/refresh', ctrlWrapper(refreshUserController));
authRouter.post('/logout', ctrlWrapper(logOutUserController));

authRouter.post(
  '/send-reset-email',
  validateBody(resetPasswordEmailValidationSchema),
  ctrlWrapper(requestResetEmailController),
);

export default authRouter;
