var express = require("express");
var router = express.Router();

const Product = require("../models/Product");

//get products

router.get("/", function (req, res) {
    Product.find(function (err, users) {
        if (err) {
            console.log(err);
        } else {
            res.json(users);
        }
    })
});

//get particular vendor's products

router.post("/view", (req, res) => {
    const filter = { email: req.body.email };

    Product.find({ email: req.body.email }).then(users => {
        if (users) {
            res.json(users);
        }
        else {
            res.status(404).json({ error: "User does not exist" });
        }
    });
});

//get particular products' attribute to show 

router.post("/viewprod", (req, res) => {
    // const filter = { ItemName: req.body.ItemName };

    Product.findOne({ ItemName: req.body.ItemName }).then(users => {
        if (users) {
            res.json(users);
        }
        else {
            res.status(404).json({ error: "User does not exist" });
        }
    });
});

//Product

router.post("/create", (req, res) => {
    const newProduct = new Product({
        ItemName: req.body.ItemName,
        price: req.body.price,
        type: req.body.type,
        description: req.body.description,
        email: req.body.email,
        tag: req.body.tag,
        addOnNames: req.body.addOnNames,
        addOnPrices: req.body.addOnPrices
    });


    newProduct.save()
        .then(user => {
            res.status(200).json(user);
        })
        .catch(err => {
            console.log(err)
            res.status(400).send(err);

        });
});

// delete

router.post("/delete", (req, res) => {

    const filter = { _id: req.body.id };
    Product.findOneAndDelete(filter)
        .then(item => {
            res.status(200);
        })
        .catch(err => {
            res.status(400);
        });
});

//edit


router.post('/edit', (req, res) => {
    Product.findOne({ ItemName: req.body.ItemName }).then(user => {
        if (user) {
            user.ItemName = req.body.ItemName,
                user.price = req.body.price,
                user.type = req.body.type,
                user.description = req.body.description,
                user.email = req.body.email,
                user.tag = req.body.tag,
                user.addOnNames = req.body.addOnNames,
                user.addOnPrices = req.body.addOnPrices
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