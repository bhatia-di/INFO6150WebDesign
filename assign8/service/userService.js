const UserModel = require('../models/userModel');
const bcrypt = require('bcrypt');

exports.getAllUsers = (req, res) => {

    console.log("Fetching all users...");

    UserModel.find(function(error, users) {
        if (error) res.status(400).send(error);
        console.log(users);

        users = users.map(u =>({
            email: u.email,
            full_name: u.full_name,
            password: u.password
        
        }));

        res.status(200).send(users);
    });
}

exports.createUser = (req, res) => {

    console.log("Creating User...");

    var email = req.body.email || "";
    var password = req.body.password || "";
    var full_name = req.body.full_name || "";
    const emailRegex = /^\w+([\.-]?\w+)*@northeastern.edu$/;
    const passwordRegex = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    const full_nameRegex = /^[a-z ,.'-]+$/i;



    if (email === "") {
        res.status(400).send({"message": "NO email address provided in the request"});
        return;
    }
    if (password === "") {
        res.status(400).send({"message": "NO password provided in the request"});
        return;
    }

    if (full_name === "") {
        res.status(400).send({"message": "NO full name provided in the request"});
        return;
    }

      
        if( !email.trim().match(emailRegex)) {
            res.status(400).send({"message": "EMAIL should have a valid email doamin: northeastern.edu"});
            return;
        }

        if(!password.trim().match(passwordRegex)){
            res.status(400).send({"message": "Password should have atleast 1 special characrter and 1 number"});
            return;
        }

        if(!full_name.trim().match(full_nameRegex)){
            res.status(400).send({"message": "Bad request. Full Name should be of valid type"});
            return;
        }

    
        UserModel.findOne({email: email}, function(err, user){
            if(err) {
              console.log(err);
            }
            console.log(user);

            if(user === null || user === undefined) {

                var newUser = new UserModel(req.body);
                newUser.password = bcrypt.hashSync(req.body.password, 10);
                newUser.save(function(error, data) {
                    if (error) {
                        res.status(400).send({"message": "User create failed"});
                        return;
                    }

                    res.status(201).send({"message": "User account was created successfully"});

                });
                return;
                
            } 
            res.status(400).send({"message": "User account already exists with the same email"});

        });
    

    
}
exports.deleteUser = (req, res) => {

    let email = req.params.email;

    UserModel.findOne({email: email}, function(error, user) {
        if(error){
            res.status(500).send({"message": "Deletion failed with a error"});
            return;

        }
        if(user == null){
            res.status(500).send({"message": "User with email " + email + " does not exist"});
            return;
        }
        user.delete();
        res.status(204).send({"message": "User with email " + email + " was deleted successfully"});

    });

    
}

exports.deleteAllUser = (req, res) => {


    UserModel.deleteMany({});
    res.status(200).send({"message": "All records deleted successfully"});


    
}

exports.editUserAcount = (req, res) => {

    let { new_full_name, new_user_password} = req.body;
    let email = req.params.email;


    const emailRegex = /^\w+([\.-]?\w+)*@northeastern.edu$/;
    const passwordRegex = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    const full_nameRegex = /^[a-z ,.'-]+$/i;


   
    if (new_full_name === null  || new_full_name === undefined || new_full_name.trim() === "") {
        res.status(400).send({"message": "Invalid request parameters, it needs full_name"});
        return;

    }

    if (new_user_password === null  || new_user_password === undefined || new_user_password === "") {
        res.status(400).send({"message": "Invalid request parameters, it needs password"});
        return;
    }
   

    if(!new_user_password.trim().match(passwordRegex)){
        res.status(400).send({"message": "Password should have atleast 1 special characrter and 1 number"});
        return;
    }

    if(!new_full_name.trim().match(full_nameRegex)){
        res.status(400).send({"message": "Bad request. Full Name should be of valid type"});
        return;
    }

   

    let newPassword = bcrypt.hashSync(new_user_password, 10);


    UserModel.findOne({email: email}, function(error, user) {
        if(error){
            res.status(500).send({"message": "Update failed with a error"});
            return;

        }
        if(user === null){
            res.status(500).send({"message": "User with email " + email + " does not exist"});
            return;
        }

        user.full_name = new_full_name;
        user.password = newPassword;
        user.save();
        res.status(201).send({"message": "User is updated successfully"});


    });




}