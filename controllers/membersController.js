
const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;


const getMembers = async (req, res) => {
  const cursor = await mongodb.getDb().db('cse341_proj2').collection('members').find();
  const allMembers = await cursor.toArray();
  res.setHeader('Content-Type', 'application/json');
  res.status(200).json(allMembers);
};



module.exports = { getMembers };