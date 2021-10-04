var express = require('express');
var router = express.Router();
const { createUser, login, getUsers, updateUser, deleteUser } = require('./controller/usersController');

const { checkIsEmpty } = require("./lib/authMiddleware/authCreateMiddleware/checkIsEmpty");
const { checkIsUndefined } = require("./lib/authMiddleware/authCreateMiddleware/checkIsUndefined");
const {
	validateCreateData,
} = require("./lib/authMiddleware/authCreateMiddleware/validateCreateData");

const {
	validateLoginData,
} = require("./lib/authMiddleware/authLoginMiddleware/validateLoginData");

/* GET users listing. */
router.get('/', getUsers);
router.post(
	"/create-user",
	checkIsEmpty,
	checkIsUndefined,
	validateCreateData,
	createUser
);
router.post(
	"/login",
	checkIsEmpty,
	checkIsUndefined,  
  validateLoginData,
	login
);
router.put('/update-user-by-id/:id', updateUser);
router.delete('/delete-user-by-id/:id', deleteUser);

module.exports = router;
