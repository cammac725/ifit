import React from 'react'
import iFitCoach from "../assets/logos/ifit-coach-logo.svg";

function MainNav() {
  return (
    <nav className="main-nav">
      <div className="main-nav-logo">
        <img className="ifit-logo" src={iFitCoach} alt="iFit logo" />
      </div>

      <div className='main-nav-links'>
        <a href="#exercise">Excercise</a>
        <a href="#nutrition">Nutrition</a>
        <a href="#activity">Activity</a>
        <a href="#sleep">Sleep</a>
      </div>

      <button className="signup-btn">Sign Up</button>
    </nav>
  )
}

export default MainNav;