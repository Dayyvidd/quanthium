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
        //await user.comparePassword(password);

        const token = jwt.sign({userId: user._id}, "MY_SECRET_KEY");
        res.send({token, email, balance: user.balance});
    } catch (err) {
        return res.status(422).send({ error: "Invalid email or password"});
    }
})

router.post("/logout", async (req, res) => {
    const {email} = req.body;

})

router.post("/lend", async (req, res) => {
    const {amount, borrower, currentUser} = req.body;

    try {
        console.log(req.body);
        const lender = User.findOne({email: currentUser});
        const borrow = User.findOne({email: borrower});

        const token = jwt.sign({userId: borrow._id}, "MY_SECRET_KEY");
        res.send({token});

        borrow.select('balance email');

        borrow.exec(async function (err, person) {
            if (err) return console.log(err);

            const borrowerBalance = person.balance + parseInt(amount);

            await User.updateOne({ email: borrower}, {balance: borrowerBalance})

            console.log("Borrower Email: " + person.email);
            console.log("Borrower Balance: " + person.balance);
            console.log("Amount: " + amount);
            console.log("\n");

        })

        lender.select("balance email");

        lender.exec(async function (err, person) {
            if (err) return console.log(err);

            console.log("BALANCE BEFORE: " + person.balance);
            const lenderBalance = person.balance - parseInt(amount);

            await User.updateOne({ email: currentUser}, {balance: lenderBalance});

            console.log("BALANCE AFTER: " + person.balance);
        })

    } catch (error) {
        console.log(error);
    }


});

module.exports = router;