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

module.exports.postCreateMembers = (req,res) => {
    let newMember = req.body;
    Members.insert({
        name: newMember.name,
        dob: newMember.dob,
        phone: newMember.phone,
        email: newMember.email,
        facebook: newMember.facebook,
        city: newMember.city
    })
    res.redirect('/members');
};