import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { database } from './firebase';
import Navigation from './component/navigation';
import Header from './component/header';
import TextArea from './component/text_area';
import About from './component/about';

class App extends Component {
  state = {
    gigi: {
      good: '',
      header: '',
      kiki: '',
      sping: ''
    }
  }
  salveazaTextul = (event, muje) => {
    const textul = event.target.value;
    const rootRef = database.ref('/');
    var o = {};
    o[muje] = textul;
    rootRef.update(o);
  }

  componentDidMount() {
    const headerRef = database.ref('/');
    headerRef.on('value', snapshot => {
      const gigi = snapshot.val();
      this.setState({ gigi });
    })
  }

  render() {
    const {gigi} = this.state;
    return (
      <div className="App">
        <Navigation />
        <Header />
        <About />
      </div>
    );
  }
}

export default App;
