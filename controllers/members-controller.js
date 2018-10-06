let Members = require('../models/members-model');

module.exports.getMembers = async (req,res) => {
    let newMember = await Members.find();
        res.render('../views/members/members-view', {
            members: newMember
        })    
};

module.exports.getCreateMembers = (req,res) => {
    res.render('../views/members/members-create-view')
};

module.exports.getSearchMembers = (req,res) => {
    //get query parameter
    let que = req.query.q;
    //filter by name
    let matchedMembers = members.filter(member => member.name.toLowerCase().indexOf(que.toLowerCase()) !== -1);

    res.render('../views/members/members-view', {
        members: matchedMembers
    })
};

module.exports.postCreateMembers = async (req,res) => {
    let newMember = new Members({
        name: req.body.name,
        dob: req.body.dob,
        phone: req.body.phone,
        email: req.body.email,
        facebook: req.body.facebook,
        city: req.body.city,
    })
    await newMember.save(error => {
        console.log("new member added")

        if(error){
            console.log({error});
            return;
        }            
    });
    res.redirect('/members');
};