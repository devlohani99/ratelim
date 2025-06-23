const { MongoMemoryServer } = require('mongodb-memory-server');

(async () => {
  const mongod = await MongoMemoryServer.create();
  console.log('MongoDB binary downloaded to:', mongod.getUri());
  await mongod.stop();
})(); 