const { response } = require("express");
var express = require("express");
var router = express.Router();

// Load User model
const User = require("../models/Buyeruser");

// GET request 
// Getting all the users
router.get("/", function(req, res) {
    User.find(function(err, users) {
		if (err) {
			console.log(err);
		} else {
			res.json(users);
		}
	})
});

// NOTE: Below functions are just sample to show you API endpoints working, for the assignment you may need to edit them

// POST request 
// Register a user
router.post("/register", (req, res) => {
    const newUser = new User({
        firstName: req.body.firstName,
        lastName:req.body.lastName,
        age: req.body.age,
        contactname:req.body.contactname,
        batchname: req.body.batchname,
        email: req.body.email,
        password: req.body.password,
        date: req.body.date
    });

// console.log(newUser.firstName);
    newUser.save()
        .then(user => {
            res.status(200).json(user);
        })
        .catch(err => {
            console.log(err)
            res.status(400).send(err);
            
        });
});

// POST request 
// Login
router.post("/login", (req, res) => {
	const email = req.body.email;
    const password =req.body.password;
	// Find user by email
	User.findOne({ email }).then(user => {
		// Check if user email exists
		if (!user) {
			return res.send("Email not found");
        }
        else if(user.password !== password){
			return res.send("Incorrect Password");
        }
        else{
            // res.send("Login Successful!");
            res.json({ message: "Login Successful!", user: user})
            
            // console.log(response)
            // return user;
        }
	});
});

//User Detail

router.post('/user_detail', (req, res) => {
    User.findOne({ email: req.body.email }).then(user => {
        if (user) {
            res.json(user);
        } else {
            res.status(400).json({ error: "User does not exist" });
        }
    });
});

//User edit

router.post('/edit', (req, res) => {
    User.findOne({ email: req.body.email }).then(user => {
        if (user) {
        user.firstName=req.body.firstName,
        user.lastName=req.body.lastName,
        user.age=req.body.age,
        user.contactname=req.body.contactname,
        user.batchname= req.body.batchname,
        user.email= req.body.email,
        // user.date=user.date,
       
            user.save()
                .then(user => {
                    res.status(200).json(user);
                })
                .catch(err => {
                    res.status(400).send(err);
                });
        } else {
            res.status(404).json({ error: "User does not exist" });
        }
    });
});


router.post('/wallet', (req, res) => {
    User.findOne({ email: req.body.email }).then(user => {
        if (user) {
        user.wallet= parseInt(user.wallet) + parseInt(req.body.wallet)

        user.save()
                .then(user => {
                    res.status(200).json(user);
                })
                .catch(err => {
                    res.status(400).send(err);
                });
        }
        else {
            res.status(404).json({ error: "User does not exist" });
        }
    });

});
module.exports = router;

