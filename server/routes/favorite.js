
const express = require('express');
const router = express.Router();
const { Favorite } = require("../models/Favorite");

// const { auth } = require("../middleware/auth");

//find favorite inside favorite collection by movieId
router.post("/favoriteNumber", (req, res) => {

    Favorite.find({ "movieId": req.body.movieId })
        .exec((err, subscribe) => {
            if (err) return res.status(400).send(err)

            res.status(200).json({ success: true, subscribeNumber: subscribe.length })
        })

});



module.exports = router;


