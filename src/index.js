import { initMobgoConnection } from './db/initMongoConnection.js';
import { setupServer } from './server.js';

const bootstrap = async () => {
  await initMobgoConnection();
  setupServer();
};
bootstrap();
