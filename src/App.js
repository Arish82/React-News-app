import './App.css';

import React, { Component }  from 'react'
import Navbar from './Compnents/Navbar';
import News from './Compnents/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Spinner from './Compnents/Spinner';

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar/>
          <Switch>
            <Route path="/">
              <News pageSize={15} country="in" category="general" />
            </Route>
            {/* <Route path="/b">
              <Spinner/>
            </Route> */}
            <Route exact path="/business">
              <News pageSize={15} country="in" category="business" />
            </Route>
            <Route path="/entertainment">
              <News pageSize={15} country="in" category="entertainment" />
            </Route>
            <Route path="/general">
              <News pageSize={15} country="in" category="general" />
            </Route>
            <Route path="/health">
              <News pageSize={15} country="in" category="health" />
            </Route>
            <Route path="/science">
              <News pageSize={15} country="in" category="science" />
            </Route>
            <Route path="/sports">
              <News pageSize={15} country="in" category="sports" />
            </Route>
            <Route path="/technology">
              <News pageSize={15} country="in" category="technology" />
            </Route>
          </Switch>
        </Router>
      </div>
    )
  }
}

