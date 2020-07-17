var User = require('../mongoose-models/user-model');

class UserController {

    async authenticate(req, res) {
        // check database if user exists
        User.find({
            email: req.body.email,
            password: req.body.password
        }).then(user => {
            console.log(user);
            //if user exists
            if (user.length > 0) {
                res.status(200).json({
                    message: 'Login Successfully'
                });

            } else {
                // error if user is not existing
                res.status(201).json({
                    message: 'Invalid Username or password'
                });
            }
        })
    }
    async register(req, res) {
        const user = new User({
            name:req.body.Name, 
            email:req.body.email, 
            password:req.body.password, 
            insertdate: new Date(),
          });
          // check if user with same email exists
          User.find({
            email: req.body.email
          }).then(createdPost => {
            if (createdPost.length === 1) {
    // if exists then give eror
              res.status(200).json({
                message: 'User Already Exists'
              });
            } else {
      //user will be added 
              user.save().then(createdPost => {
                User.find({
                  _id: createdPost._id
                }).then(data => {
                  res.send({
                    message: 'User added successfully',
                  })
                })
              });
            }
          });
    }
    async users(req, res) {
        User.find({}).then(data => {
            res.status(200).json({
                message: data,
            });
        })
    }
}
module.exports = UserController