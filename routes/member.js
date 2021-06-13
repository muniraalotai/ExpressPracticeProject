const express = require('express');
const router = express.Router();
const members = require('../members')

//Get all members 
router.get('/', (req,res) => res.json(members));

//Get member by ID
router.get('/:id', (req,res) => {
    if (members.some((member => member.id == req.params.id))){
        res.json(members.filter(member => member.id == req.params.id));
    } else {
        res.status(400).json({msg: 'No member found with this ID'});
    }
});

// Create a member
router.post('/', (req, res) =>{
    const newMember = {
        id : req.body.i,
        name : req.body.name,
        status : req.body.status
    }

    if(!newMember.id || !newMember.name){
        res.status(400).json({msg: 'Please enter id, name'});
    } else {
        members.push(newMember);
        res.json(members);
    }
});

module.exports = router;