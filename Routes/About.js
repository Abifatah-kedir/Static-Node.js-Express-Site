const express = require('express');
const router = express.Router();

//renders an about page.
router.get('/about', (req, res) => {
    res.render('about');
});

module.exports = router; 

