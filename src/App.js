import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './component/Header';
import Home from './component/Home';
import Footer from './component/Footer';
import DealForm from './component/dealForm';
//import { ProtectedRoute } from "./protected.route";

function App() {
  const [search, setSearch] = useState();
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/dealform">
            <DealForm />
          </Route>
          {/* 
          <ProtectedRoute exact path="/app" component={AppLayout} /> */}
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