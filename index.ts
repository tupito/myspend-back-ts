// import * as express from 'express';
// import express from 'express';
import express = require('express');

const app = express();
const PORT = 8000;

app.get('/', (req, res) => res.send(
  'Express + TypeScript Server asdf',
));
app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});

// module.exports = app; // for mocha
export default app;
