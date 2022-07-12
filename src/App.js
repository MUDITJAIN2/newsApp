//import logo from './logo.svg';
import './App.css';
import LoadingBar from 'react-top-loading-bar'
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export default class App extends Component {
  apikey=process.env.REACT_APP_NEWS_APIKEY
  state={
    progress:0
  }
  pageSize=10
  setprogress=(progress)=>{
    this.setState({progress:progress})
  }
  render() {
    return (
      <div>
        <Router>
        <Navbar />
        <LoadingBar
        height={3}
        color='#f11946'
        progress={this.state.progress}
        
      />
        <Switch>
          <Route exact path="/"><News setprogress={this.setprogress} apikey={this.apikey}  key="general"pageSize={this.pageSize}country='in' category='general'/></Route>
          <Route exact  path="/business"><News setprogress={this.setprogress} apikey={this.apikey}  key="business"pageSize={this.pageSize}country='in' category='business'/></Route>
          <Route exact  path="/entertainment"><News setprogress={this.setprogress} apikey={this.apikey}  key="entertainment"pageSize={this.pageSize}country='in' category='entertainment'/></Route>
          <Route exact  path="/health"><News setprogress={this.setprogress} apikey={this.apikey}  key="health"pageSize={this.pageSize}country='in' category='health'/></Route>
          <Route exact  path="/sports"><News setprogress={this.setprogress} apikey={this.apikey}  key="sports"pageSize={this.pageSize}country='in' category='sports'/></Route>
          <Route exact  path="/science"><News setprogress={this.setprogress} apikey={this.apikey}  key="science"pageSize={this.pageSize}country='in' category='science'/></Route>
          <Route exact path="/technology"><News setprogress={this.setprogress} apikey={this.apikey}  key="technology"pageSize={this.pageSize}country='in' category='technology'/></Route>
        </Switch>
        </Router>
      </div>
    )
  }
}



