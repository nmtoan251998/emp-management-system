//globally require
const port = 3000;
const path = require('path');
const pug = require('pug');

//locally require
const memberRouter = require('./routes/members-routes');

//use express
const express = require('express');
const app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

//set public path
app.use(express.static('public'));

/*Routes*/ 
//get index-view
app.get('/', (req,res) => {
    res.render('./index-view')
});

//get main-view
app.get('/main', (req,res) => {
    res.render('./home/content-view')
});

//get members-views
app.use('/members', memberRouter);



app.listen(port, () => console.log(`Server started on port ${port}!`))