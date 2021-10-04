var express = require('express');
var router = express.Router();
const { createUser, login, getUsers, updateUser, deleteUser } = require('./controller/usersController');


/* GET users listing. */
router.get('/', getUsers);
router.post(
	"/create-user",
	createUser
);
router.post(
	"/login",	
	login
);
router.put('/update-user-by-id/:id', updateUser);
router.delete('/delete-user-by-id/:id', deleteUser);

module.exports = router;
