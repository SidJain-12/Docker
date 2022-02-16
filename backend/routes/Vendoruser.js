var express = require("express");
const Product = require("../models/Product");
var router = express.Router();

// Load Vendor model
const Vendor = require("../models/Vendoruser");

// GET request 
// Getting all the users
router.get("/", function(req, res) {
    Vendor.find(function(err, users) {
		if (err) {
			console.log(err);
		} else {
			res.json(users);
		}
	})
});


// POST request 
// Add a user to db
router.post("/register", (req, res) => {
    const newUser = new Vendor({
        firstName: req.body.firstName,
        lastName:req.body.lastName,
        shopname: req.body.shopname,
        contactname:req.body.contactname,
        copen: req.body.copen,
        cclose: req.body.cclose,
        email: req.body.email,
        password: req.body.password,
        date: req.body.date
    });


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
	Vendor.findOne({ email }).then(user => {
		// Check if user email exists
        if (!user) {
			return res.send("Email not found");
        }
        else if(user.password !== password){
			return res.send("Incorrect Password");
        }
        else{
            res.json({ message: "Login Successful!", user: user})
            // return user;
        }
	});
});

//Vendor Detail

router.post('/vendor_detail', (req, res) => {
    Vendor.findOne({ email: req.body.email }).then(user => {
        if (user) {
            res.json(user);
        } else {
            res.status(400).json({ error: "Vendor does not exist" });
        }
    });
});


//Vendor edit

router.post('/edit', (req, res) => {
    Vendor.findOne({ email: req.body.email }).then(user => {
        if (user) {
        user.firstName=req.body.firstName,
        user.lastName=req.body.lastName,
        user.shopname=req.body.shopname,
        user.contactname=req.body.contactname,
        user.copen= req.body.copen,
        user.cclose= req.body.cclose,
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



module.exports = router;

