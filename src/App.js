import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './component/Header';
import Home from './component/Home';
import Footer from './component/Footer';
import ProtectedRoute from "./ProtectedRoute";
import DealForm from './component/dealForm';
import Policies from './component/Policies';
function App() {
  const [search, setSearch] = useState();
  return (
    <Router>
      <div className="App">
        <Switch>
          <ProtectedRoute path="/dealform" component={DealForm} />
          <Route path="/policies">
            <Header onSearchItem={setSearch} />
            <Policies />
            <Footer />
          </Route>
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
