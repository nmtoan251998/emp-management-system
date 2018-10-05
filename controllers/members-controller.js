let members = [
    {
        name: "Nguyễn Minh Toàn",
        dob: "02/05/1998",
        phone: "0123123123",
        email: "toandeptrai@gmail.com",
        facebook: "facebook.com/minton.2598",
        location: "Cần Thơ"
    },
    {
        name: "Trần Thị Mỹ Đen",
        dob: "10/11/1996",
        phone: "0321321321",
        email: "mydendepgai@gmail.com",
        facebook: "facebook.com/mydensodep",
        location: "Cần Tiền"
    }
]

module.exports.getMembers = (req,res) => {
    res.render('../views/members/members-view', {
        members: members
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
    members.push(req.body);
    res.redirect('/members');
};