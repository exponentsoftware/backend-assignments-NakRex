const express = require('express');
let userRouter = express.Router();
let controller = require('../controller/user')
userRouter.post('/register', controller.signup);
