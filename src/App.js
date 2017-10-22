import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { database } from './firebase';
import Navigation from './component/navigation';
import Header from './component/header';
import TextArea from './component/TextArea';

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
        <TextArea cevaDiferit="good" st={this.salveazaTextul} tav={gigi.good} />
        <TextArea cevaDiferit="header" st={this.salveazaTextul} tav={gigi.header} />
        <TextArea cevaDiferit="kiki" st={this.salveazaTextul} tav={gigi.kiki} />
        <TextArea cevaDiferit="sping" st={this.salveazaTextul} tav={gigi.sping} />
      </div>
    );
  }
}

export default App;
