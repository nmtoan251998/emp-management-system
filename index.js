//globally require
const port = 3000;
const path = require('path');
const pug = require('pug');
const express = require('express');

//locally require
const memberRouter = require('./routes/members/members-routes');

//use express
const app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

//set public path
app.use(express.static('public'));

/*GET*/ 
//get index-view
app.get('/', (req,res) => {
    res.render('./index-view')
});

//get home main-view
app.get('/main', (req,res) => {
    res.render('./home/main-view')
});

//get members route
app.use('/members', memberRouter);

app.listen(port, () => console.log(`Server started on port ${port}!`))