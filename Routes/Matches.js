const router = require('express').Router();
let Match = require('../Models/Match.model');

router.route('/').get((req, res)=> {
    Match.find()
    .then(Match => res.json(Match))
    .catch(err => res.status(400).json('Error: ' + err));

});

router.route('/add').post((req, res) => {
    const email = req.body.email;
    const opponent = req.body.opponent;
    const matchLoc = req.body.matchLoc;
    const matchDate = req.body.matchDate;
    const winner = req.body.winner;

    const newMatch = new Match ({
        email,
       opponent,
       matchLoc,
       matchDate,
       winner
    });
    newMatch.save()
     .then(() => res.json('Added Match'))
    .catch(err => res.status(400).json('Error: ' + err));
})
module.exports = router;