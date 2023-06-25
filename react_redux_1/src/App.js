import { Component } from 'react';
import './App.css';
import AddNumberRoot from './components/use_redux/AddNumberRoot';
import DisplayNumberRoot from './components/use_redux/DisplayNumberRoot';

class App extends Component {
  state = {number:0}
  render() {
    return (
      <div className="App">
        <h1>Root</h1>
        <AddNumberRoot></AddNumberRoot>
        <DisplayNumberRoot></DisplayNumberRoot>
      </div>
    );
  }
}

export default App;
