const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');

let _db;

const initDb = async (callback) => {
  if (_db) {
    console.log('Db is already initialized!');
    return _db;
  }
  try {
    _db = await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');
    return callback(null, _db);
  } catch (err) {
    console.log('Error connecting to MongoDB', err);
    return callback(err);
  }
};

const getDb = () => {
  if (!_db) {
    throw Error('Db not initialized');
  }
  return _db;
};

module.exports = {
  initDb,
  getDb
};
