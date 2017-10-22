import React, { Component } from 'react';
import TextArea from './component/TextArea';
import logo from './logo.svg';
import './App.css';
import { database } from './firebase';

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
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <TextArea cevaDiferit="good" st={this.salveazaTextul} tav={gigi.good} />
        <TextArea cevaDiferit="header" st={this.salveazaTextul} tav={gigi.header} />
        <TextArea cevaDiferit="kiki" st={this.salveazaTextul} tav={gigi.kiki} />
        <TextArea cevaDiferit="sping" st={this.salveazaTextul} tav={gigi.sping} />
      </div>
    );
  }
}

export default App;
