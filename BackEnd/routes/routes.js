const { response } = require('express');
const express = require('express');
const router = express.Router();
const signUpTemplateCopy = require('../models/SignUpModels');

router.post('/sign-up', (request, response) => {
  const signedUpUser = new signUpTemplateCopy({
    firstName: request.body.firstName,
    lastName: request.body.lastName,
    Email: request.body.Email,
    Password: request.body.Password,
    confirmPassword: request.body.confirmPassword,
  });
  signedUpUser
    .save()
    .then((data) => {
      response.json(data);
    })
    .catch((error) => {
      response.json(error);
    });
});

module.exports = router;
