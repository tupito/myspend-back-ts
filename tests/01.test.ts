// just to test configurations

import * as chai from 'chai';
import 'chai-http';
import app from '../src/index';
// const server = require('../app');

// Assertions
chai.should();

console.log(app.mountpath);

chai.use(require('chai-http'));
