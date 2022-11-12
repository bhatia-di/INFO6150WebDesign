const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const Sample = require('../models/userModel')
const UserService = require('../service/userService');

module.exports = (app) => {


    app.delete('/user/delete/:email', UserService.deleteUser);

    app.post('/user/create',UserService.createUser );

    app.get('/user/getAll', UserService.getAllUsers);

    app.put('/user/edit', UserService.updateUser);

}