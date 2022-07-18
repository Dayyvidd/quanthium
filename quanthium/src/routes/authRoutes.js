const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const User = mongoose.model('User');

const jwt = require('jsonwebtoken');



router.post('/signup', async (req, res) => {
    const {email, password} = req.body;

    try {
        const user = new User({email, password});
        await user.save();

        const token = jwt.sign({ userId: user._id}, 'MY_SECRET_KEY');
        res.send({token});
    } catch (err) {
        return res.status(422).send(err.message);
    }

});

router.post("/signin", async (req, res) => {
    const {email, password} = req.body;

    if (!email || !password) {
        return res.status(422).send({error: "Must provide email and password."});
    }

    const user = await User.findOne({ email });

    if (!user) {
        return res.status(422).send({ error: "Invalid email or password"});
    }

    try {
        await user.comparePassword(password);
        const token = jwt.sign({userId: user._id}, "MY_SECRET_KEY");
        res.send({token});
    } catch (err) {
        return res.status(422).send({ error: "Invalid email or password"});
    }
})

router.post("/lend", async (req, res) => {
    const {amount, borrower} = req.body;

    try {
        console.log(req.body);
        //const lender = User.findOne({originator});
        const borrow = User.findOne({email: "test@test.com"});
        const token = jwt.sign({userId: borrow._id}, "MY_SECRET_KEY");
        res.send({token});

        borrow.select('balance email');
        borrow.exec(function (err, person) {
            if (err) return console.log(err);
            console.log("Borrower Email: " + person.email);
            console.log("Borrower Balance: " + person.balance);
            console.log("Amount: " + amount);
            console.log("\n");
            console.log("New Balance: " + (person.balance + parseInt(amount)));
        })
    } catch (error) {
        console.log(error);
    }


})


module.exports = router;