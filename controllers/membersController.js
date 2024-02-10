
const mongodb= require('../db/connect');
const ObjectId = require('mongodb').ObjectId;
const Member = require('../db/memberSchema');


const getMembers = async (req, res) => {
    try {
        const allMembers = await Member.find();
         res.status(200).json(allMembers);
    } catch (error) {
        console.error('Error fetching members:', error);
        res.status(500),json({ error: 'Internal Server Error'});
    }
};

const addMember = async (req, res) => {
    try {
        const { lname, fname, gender, age, lastPrayer, lastTalk } = req.body;
        const member = new Member ({
            lname,
            fname,
            gender,
            age,
            lastPrayer,
            lastTalk
         });

        const insertedMember = await member.save();
        res.status(201).json(insertedMember);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


module.exports = { 
    getMembers,
    addMember
 };