
//express
const express = require('express');
const app = express();
const path = require('path');

//body-parser middleware 
const bodyParse = require('body-parser');

//set up 'view engine' to pug 
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(bodyParse.urlencoded({extended: false}));

//serves the static files 
app.use('/static', express.static(path.join(__dirname, 'public')));

//imported routers
const index = require('./Routes/index');
const project = require('./Routes/project');
const about = require('./Routes/About');
const error = require('./Routes/Error');

app.use(index);
app.use(project);
app.use(about)
// app.use(error);

/* ERROR HANDLERS */
/* 404 handler to catch undefined or non-existent route requests */ 
app.use((req, res, next) => {
    const err = new Error();
    err.status = 404;
    next(err);
});

/* Errror handler */
app.use((err, req, res, next) => {
    if(err.status === 404) {
      err.message = `SOrry! The project you looking is not available.`;
      res.render('page-not-found', {err});
    } else {
      err.message = `Oops! It looks like something went wrong on the server.`;
      err.status = 500;
      res.render('error', { err });
    }
  
  });

//app should listen to port 3000
app.listen(3000, () => {
    console.log('This application is running on localhost:3000')
});