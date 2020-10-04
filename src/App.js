import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './component/Header';
import Home from './component/Home';
import Footer from './component/Footer';

function App() {
  const [search, setSearch] = useState();
  return (
    <Router>
      <div className="App">
        <Switch>
          {/* <Route path="/login">
            <h1>login</h1>
          </Route>
          <Route path="/newpost">
            <NewPost />
          </Route> */}
          <Route path="/">
            <Header onSearchItem={setSearch} />
            <Home search={search} />
            <Footer />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}


export default App;
