//sets up the express and router.
const express = require('express');
const router = express.Router();

//requires the data
const { projects } = require('../data.json');

// redirects homepage.
router.get('/project', (req, res) => {
    res.redirect('/');
}); 

//A dynamic 'project/id' using the json file to render ids for each page 
//& checks if the requested id is greater than the project array length
router.get('/project/:id', (req, res, next) => {
    
    const {id} = req.params;
    const project = projects[id];

    //if the id is greater than the project array length..
    if(id === "about"){
        res.redirect("/about");
    } else if(projects[req.params.id]){
        //the project page is rendered 
        res.render('project', {project});
    } else {
        const err = new Error();
        err.status = 404;
        next(err);
    }
});

module.exports = router;