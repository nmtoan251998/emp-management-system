let Members = require('../models/members-model');
let ObjectId = require('mongodb').ObjectId;

module.exports.getMembers = async (req,res) => {
    let newMember = await Members.find();
        res.render('../views/members/members-view', {
            members: newMember
        })    
};

module.exports.getCreateMembers = (req,res) => {
    res.render('../views/members/members-create-view')
};

module.exports.getModifyMembers = (req,res) => {
    res.render('../views/members/members-modify-view')
};

module.exports.getSearchMembers = async (req,res) => {
    //get query parameter
    let que = req.query.q;
    //query data
    let members = await Members.find();

    //filter by name
    let matchedMembers = members.filter(member => member.name.toLowerCase().indexOf(que.toLowerCase()) !== -1);

    res.render('../views/members/members-view', {
        members: matchedMembers
    })
};

module.exports.getDeleteMembers = async (req,res) => {
    
    //get id of onClicked member
    let id = req.params.membersId;
    // res.send("<h1>Hello Mother fucker</h1> <br/>" +id);

    let deletingMember = await Members.remove({_id: ObjectId(id)});
    res.redirect('/members');
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

module.exports.postModifyMembers = async (req,res) => {
    //get specific id
    let id = req.params.membersId;

    await Members.updateOne(
        {"_id": ObjectId(id)},
        {
            name: req.body.name,
            dob: req.body.dob,
            phone: req.body.phone,
            email: req.body.email,
            facebook: req.body.facebook,
            city: req.body.city,
        },
        { upsert: true }
    )
}