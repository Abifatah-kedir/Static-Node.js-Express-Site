
const express = require('express');
const router = express.Router();


/* ERROR HANDLERS */
/* 404 handler to catch undefined or non-existent route requests */ 
// router.use((req, res, next) => {
//   console.log('404 - Page not found!');

//   const err = new Error();
//   err.status = 404;
//   err.message = 'Page not found!';
//   res.render('page-not-found', {err});

//   // res.status(404).message('404 - Local error handler called').render('page-not-found');

// });
  
/* Global error handler */
router.use((err, req, res, next) => {
  if(err.status === 404) {

    err.status = 404;
    err.message = 'Oops!, page not found! ';
    console.log('404');

    res.render('page-not-found', {err});
  } else {

    // console.log(`Oops! It looks like something went wrong on the server.`);
    // err.message = err.message || `Oops! It looks like something went wrong on the server.`;
    // err.status = err.status || 500;
    console.log("not 404");
    // res.render('error', {err});
  }
});

// Export error handlers
module.exports = router;