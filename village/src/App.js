import React, { Component } from 'react';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      newSmurf: {name:'', age:'', height:''},
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
  
  render() {
    return (
      <div className="App">
        <SmurfForm />
        <Smurfs smurfs={this.state.smurfs} />
      </div>
    );
  }
}

export default App;
