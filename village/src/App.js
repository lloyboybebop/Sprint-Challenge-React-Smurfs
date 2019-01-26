import React, { Component } from 'react';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

import axios from 'axios';
import {Route} from 'react-router-dom';
import Navigation from './components/Navigation';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  
  componentDidMount() {
    console.log('mounted');

    axios.get('http://localhost:3333/smurfs')
    .then(response => {console.log('Initial GET: ' + response.statusText);
      this.setState({smurfs: response.data})})
    .catch(err => {console.log('Initital GET' + err)})
  }

  updateSmurfs = (smurf) => {
    axios.post('http://localhost:3333/smurfs', {...smurf})
    .then(response => {console.log('Smurf POST: ' + response.statusText);
      this.setState({smurfs: response.data})})
    .catch(err => {console.log('Smurf POST: ' + err)})
  }
  
  render() {
    return (
      <div className="App">
        <Navigation />

        <Route exact path = '/' render = {() => <Smurfs smurfs = {this.state.smurfs} />} />
        <Route path = '/smurf-form' render = {props => <SmurfForm {...props} updateSmurfs = {this.updateSmurfs} />} />
        
      </div>
    );
  }
}

export default App;
