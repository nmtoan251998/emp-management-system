const express = require('express');
const router = express();

const bodyParser = require('body-parser');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));

//require controller
const controller = require('../controllers/members-controller');


router.get('/', controller.getMembers);
router.get('/members-create', controller.getCreateMembers);
router.get('/members-search', controller.getSearchMembers);
router.post('/members-create', controller.postCreateMembers);

module.exports = router;