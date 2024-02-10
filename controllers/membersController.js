
const mongodb= require('../db/connect');
const Member = require('../db/memberSchema');


//GETTERS

const getMembers = async (req, res) => {
    try {
        const allMembers = await Member.find();
         res.status(200).json(allMembers);
    } catch (error) {
        console.error('Error fetching members:', error);
        res.status(500).json({ error: 'Internal Server Error'});
    }
};

 const getMemberById = async (req, res) => {
    const memberId = req.params.id;
    try {
        const thisMember = await Member.findById(memberId);
        res.status(200).json(thisMember);
    } catch (error) {
        console.error('Error fetching member by ID:');
        res.status(500).json({error: 'Internal Server Error'});
    }
 };


 // POSTS
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


// PUTS

/* routes.put('/:id', controller.updateMemberRecord);    */

//DELETES

/* routes.delete('/:id', controller.deleteMember); */

module.exports = { 
    getMembers,
    getMemberById,
    addMember,
    /* updateMemberRecord, */
    /* deleteMember, */
 };