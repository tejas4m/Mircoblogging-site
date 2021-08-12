import React from"react";
import Sidebar from "./Sidebar";
import Feed from './Feed';
import Widgets from './Widgets'; 
import './App1.css';


function App1() {
  return (
    //BEM
    <div className="app1">
     
      {/*sidebar*/}
      <Sidebar />

      {/*feed*/}
      <Feed />

      {/*widget*/}
       <Widgets />

    </div>
  );
}

export default App1;
