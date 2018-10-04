//globally require
const port = 3000;
const path = require('path');
const express = require('express');
const pug = require('pug');
const bodyParser = require('body-parser');

//locally require

//use express
const app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

//set public path
app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

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

/*GET*/ 
//get index-view
app.get('/', (req,res) => {
    res.render('./index-view')
});

//get home main-view
app.get('/main', (req,res) => {
    res.render('./home/main-view')
});

//get members members-view
app.get('/members', (req,res) => {
    res.render('./members/members-view', {
        members: members
    })
});

//get members members-create-view
app.get('/members/members-create', (req,res) => {
    res.render('./members/members-create-view')
});

//get members members-search-view
app.get('/members/members-search', (req,res) => {
    let que = req.query.q;
    let matchedMembers = members.filter(member => member.name.toLowerCase().indexOf(que.toLowerCase()) !== -1);
    console.log(matchedMembers);

    res.render('./members/members-view', {
        members: matchedMembers
    })
});

/*POST*/ 
//get members members-create-view
app.post('/members/members-create', (req,res) => {    
    members.push(req.body);    
    res.redirect('/members')
});

app.listen(port, () => console.log(`Server started on port ${port}!`))