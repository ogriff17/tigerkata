import React from 'react';
import '../css/Home.css';

const Home =()=> {
  return (
    <div id="homePage">
    <h1>Welcome to TigerKata!</h1> 

    <div>
        <img src="../images/Tigerlogo_clipped_rev_11.png" alt="" width="500px" height="500px"></img>
    </div>
    <div id ="homeDiv"><p id="paragraph">Welcome to TigerKata ~ Who are we? We are a group of like-minded martial arts enthusiasts who love a good competition. Whether you're looking for friendly matches or some serious competition, our experts at TigerKata can help. Browse our page, sign up!
    We would love to go on this martial journey with you. It doesn't matter if you're a rookie or a pro, there is a match here for everyone! 
    <br></br>
    Follow us on Social Media:
    <br></br> 
    <img src="../images/githubcat.png" width="40"></img>
    <img src ="../images/facebook.png" width="40" id="facebook"></img>
    <img src="../images//twitter.png" width="40"></img>
    </p></div>

    </div>
  );
}

export default Home;
