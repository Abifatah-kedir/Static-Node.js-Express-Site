
//Sets the express and router 
const express = require('express');
const router = express.Router();

//requires the data.
const {projects} = require('../data.json');


//renders the home page
router.get('/', (req, res) => {
    res.render('index', {projects});
});

//renders the home page
router.get('/index', (req, res) => {
    res.render('index', {projects});
});

//export the router.
module.exports = router;