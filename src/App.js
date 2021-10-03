import './App.css';

import React, { useState } from 'react'
import Navbar from './Compnents/Navbar';
import News from './Compnents/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

export default function App(){
  const [state, setState] = useState({progress: 0})
  const apiKey='bbd905525ebb46308ad8022d6b27b8e2';
  let setProgress=(progress)=>{
    setState({
      progress: progress
    })
  }
    return (
      <div>
        <Router>
        <LoadingBar
          height={3}
          color='#f11946'
          progress={state.progress}
        />
        <Navbar/> 
        <Switch>
          <Route exact path="/"><News setProgress={setProgress} apiKey={ apiKey} key="general" pageSize={5} country="in" category="general"/></Route> 
          <Route exact path="/business"><News setProgress={setProgress} apiKey={ apiKey} key="business" pageSize={5} country="in" category="business"/></Route> 
          <Route exact path="/entertainment"><News setProgress={setProgress} apiKey={ apiKey} key="entertainment" pageSize={5} country="in" category="entertainment"/></Route> 
          <Route exact path="/general"><News setProgress={setProgress} apiKey={ apiKey} key="general" pageSize={5} country="in" category="general"/></Route> 
          <Route exact path="/health"><News setProgress={setProgress} apiKey={ apiKey} key="health" pageSize={5} country="in" category="health"/></Route> 
          <Route exact path="/science"><News setProgress={setProgress} apiKey={ apiKey} key="science" pageSize={5} country="in" category="science"/></Route> 
          <Route exact path="/sports"><News setProgress={setProgress} apiKey={ apiKey} key="sports" pageSize={5} country="in" category="sports"/></Route> 
          <Route exact path="/technology"><News setProgress={setProgress} apiKey={ apiKey} key="technology" pageSize={5} country="in" category="technology"/></Route> 
        </Switch>
        </Router>
      </div> 
    )
}

