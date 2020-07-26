const router = require('express').Router();
let User = require('../Models/User.model');

router.route('/Login').get((req, res) => {
    console.log('Inside/Login route')
    User.find({}, {email: 1, password: 1, name: 1})
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/Email').get((req, res) => {
    console.log('Inside/Email route')
    User.find({}, {email: 1, name:1})
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/quiz').get((req, res) => {
    console.log('Inside/Quiz route')
    const email = req.body.email;
    console.log('email=' + email)
    User.find({}, {email: 1, name: 1, age: 1, weight: 1, height: 1, gender: 1, experience: 1, style: 1, trainingHours: 1, weightClass: 1})
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/FindFight').get((req, res) => {
    console.log('Inside/FindFight route')
    const email = req.body.email;
    console.log('email=' + email)
    User.find({}, {email: 1, name: 1, age: 1, weight: 1, height: 1, gender: 1, experience: 1, style: 1, trainingHours: 1, weightClass: 1, ageGroup: 1, experienceLevel: 1})
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/add').post((req, res) => { //This is used for when you sign up.
    const email = req.body.email;
    const name = req.body.name;
    const password = req.body.password; 
    const newUser = new User ({
        email,
        name,
        password
    });
    console.log("This is in the router!");
    newUser.save()
     .then(() => res.json("Working!"))
    .catch(err => res.status(400).json('Error: ' + err));
})
router.route('/update').post((req, res) => { //This is used for when you take the quiz.
    const email = req.body.email;
    const name = req.body.name;
    const age = req.body.age;
    const weight = req.body.weight;
    const height = req.body.height;
    const gender = req.body.gender;
    const experience = req.body.experience;
    const trainingHours = req.body.trainingHours;
    const style = req.body.style;
    let ageGroup;
    let weightClass;
    let experienceLevel;
    
    if (age < 20){
       ageGroup = "Lower";

    } else if(age >= 20 && age <= 50){
        ageGroup = "Middle";

    } else(ageGroup = "Upper"); 

//This section starts the weight class breakdowns.    

    if (weight < 120){
        weightClass = 'Lightweight';

    } else if(weight >= 120 && weight <= 199){
        weightClass = "Middleweight";

    } else(weightClass = 'Heavyweight'); 

    //This starts the exp level categories

    if (experience < 5){
        experienceLevel = "Rookie";

    } else if (experience >= 5 && experience <= 10){
        experienceLevel = "Proficient";

    } else(experienceLevel = "Seasoned");
    console.log('style =' + style);

    console.log("This is in the router!");
    User.update(
        {email: email },
        {$set: {
            email: email,
            name: name,
            age: age,
            weight: weight,
            height: height,
            gender: gender,
            experience: experience,
            trainingHours: trainingHours,
            style: style,
            weightClass: weightClass,
            ageGroup:ageGroup,
            experienceLevel: experienceLevel 
        }
         }
    )
     .then(() => res.json("Munchkins!"))
    .catch(err => res.status(400).json('Error: ' + err));
})


module.exports = router;