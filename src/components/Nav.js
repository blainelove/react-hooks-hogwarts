import React from "react";
import piggy from "../assets/porco.png";

import hogs from "../porkers_data";
const Nav = () => {
  return (
    <div className="navWrapper">
      <span className="headerText">Hogwarts</span>
      <div className="TwirlyPig">
        <img src={piggy} className="App-logo" alt="piggy" />
      </div>
      <span className="normalText">A React App for County Fair Hog Fans</span>
      <h1>{hogs.name}</h1>
    </div>
     
  );
};

export default Nav;
