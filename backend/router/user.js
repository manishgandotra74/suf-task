const express = require('express');
const router = express.Router();
const controller = require('../main-controller');

// authentication login 
  router.post('/authenticate', controller.user.authenticate)
  // register user 
  router.post('/register', controller.user.register)
  // get all users
  router.get('/getallusers',controller.user.users);

  
  module.exports = router;