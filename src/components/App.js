import React from "react";
import Nav from "./Nav";
import HogCardList from './HogCardList'

import hogs from "../porkers_data";

function App() {
  return (
    <div className="App">
      <Nav />
      <HogCardList hogs = {hogs}/>
    </div>
  );
}

export default App;
