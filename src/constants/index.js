import path from 'node:path';

export const SORT_ORDER = ['asc', 'desc'];

export const FIFTEEN_MINUTES = 1000 * 60 * 15;
export const THIRTY_DAYS = 1000 * 60 * 60 * 24 * 30;

export const SMTP = {
  SMTP_HOST: 'SMTP_HOST',
  SMTP_PORT: 'SMTP_PORT',
  SMTP_USER: 'SMTP_USER',
  SMTP_PASSWORD: 'SMTP_PASSWORD',
  SMTP_FROM: 'SMTP_FROM',
};

export const TEMPLATES_DIR = path.resolve('src', 'templates');
