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
bodyParser.urlencoded({extended: true});


//get index-view
app.get('/', (req,res) => {
    res.render('./index-view')
});

//get home main-view
app.get('/main', (req,res) => {
    res.render('./home/main-view')
});


app.listen(port, () => console.log('Server started!'))