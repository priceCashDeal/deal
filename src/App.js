import React from 'react';  
import './App.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Header from "./Header";



function App() {
  return (
    <Router>
      <div className="App">
       <Switch>
         <Route path ="/Visit">
           <h1>Visit Reatailer</h1>
         </Route>
         <Route path = "/Settings">
           <h1>Account Details</h1>
         </Route>
         <Route path = "/">
           <Header />
         </Route>
       </Switch>
      </div>
    </Router>
      
    );
  }

export default App;
