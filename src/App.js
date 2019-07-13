import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'reactstrap';
import ModalExample from './Modal'

class App extends Component{
  a = 0
  ola = (num) => {
    this.a += num
    console.log(this.a)
  }
  render(){
    console.log(this.a)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <ModalExample b={this.ola}/>
          <Button color="primary">primary</Button>
        </header>
      </div>
    );
  }

}

export default App;
