import express = require('express');
// eslint-disable-next-line import/first
import { dbConfig } from './models';

const app = express();
const PORT = 8000;

async function testDbConnection() {
  try {
    await dbConfig.authenticate();
    return 'db authenticate ok';
  } catch (error) {
    console.log(error);
    return error;
  }
}

async function synchronizeDBModels() {
  try {
    await dbConfig.sync({ force: true }); // force = drop tables
    return 'db model sync ok';
  } catch (error) {
    console.error(error);
    return error;
  }
}

app.get('/', (req, res) => res.send(
  'Express + TypeScript Server',
));

app.get('/api/initdb', async (req, res) => {
  const jsonResponse: object[] = [];
  try {
    jsonResponse.push({ msg: await testDbConnection() });
    jsonResponse.push({ msg: await synchronizeDBModels() });
    // todo: insertExampleData()
    res.send(jsonResponse);
  } catch (error) {
    res.status(400).json({ msg: error });
  }
});

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});

// module.exports = app; // for mocha
export default app;
