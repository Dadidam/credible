import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import '@progress/kendo-theme-bootstrap/dist/all.css';

// Import the Button component.
import { Button } from '@progress/kendo-react-buttons';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: 'Welcome to React!'
    }
  }
  onButtonClick = () => {
    this.setState({title: 'Hello from Kendo UI!'})
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{this.state.title}</h1>
        </header>
        <p className="App-intro">
          <Button
            onClick={this.onButtonClick}
            primary={true}
          >
            My Kendo UI Button
          </Button>
        </p>
      </div>
    );
  }
}

export default App;