// import React, { Component } from 'react';
import React from "react";
// import { Container, Row, Col } from 'reactstrap';
import { Container, Jumbotron } from "reactstrap";

// import logo from './logo.svg';
// import './App.css';

import ClickCard from "./components/ClickCard";
import cardImages from "./cardImages";
import cardNames from "./cardNames";

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }


const App = () => (
  <Container>
    <Jumbotron>Clicky Game!</Jumbotron>

    <ClickCard 
      name={cardNames[cardNames.indexOf("Charmander")]}
      image={cardImages.Charmander}
    />

    <ClickCard 
      name={cardNames[cardNames.indexOf("Squirtle")]}
      image={cardImages.Squirtle}
    />

    <ClickCard 
      name={cardNames[cardNames.indexOf("Bulbasaur")]}
      image={cardImages.Bulbasaur}
    />

    <ClickCard 
      name={cardNames[cardNames.indexOf("Cyndaquil")]}
      image={cardImages.Cyndaquil}
    />

    <ClickCard 
      name={cardNames[cardNames.indexOf("Totodile")]}
      image={cardImages.Totodile}
    />

    <ClickCard 
      name={cardNames[cardNames.indexOf("Chikorita")]}
      image={cardImages.Chikorita}
    />

    <ClickCard 
      name={cardNames[cardNames.indexOf("Torchic")]}
      image={cardImages.Torchic}
    />
    
    <ClickCard 
      name={cardNames[cardNames.indexOf("Mudkip")]}
      image={cardImages.Mudkip}
    />

    <ClickCard 
      name={cardNames[cardNames.indexOf("Treecko")]}
      image={cardImages.Treecko}
    />

    <ClickCard 
      name={cardNames[cardNames.indexOf("Chimchar")]}
      image={cardImages.Chimchar}
    />

    <ClickCard 
      name={cardNames[cardNames.indexOf("Piplup")]}
      image={cardImages.Piplup}
    />

    <ClickCard 
      name={cardNames[cardNames.indexOf("Turtwig")]}
      image={cardImages.Turtwig}
    />

  </Container>

);

export default App;
