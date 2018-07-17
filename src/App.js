// import React, { Component } from 'react';
import React from "react";
// import { Container, Row, Col } from 'reactstrap';
import { Container, Jumbotron, Row, Col } from "reactstrap";

// import logo from './logo.svg';
import './App.css';

import ClickCard from "./components/ClickCard";
import ScoreNav from "./components/ScoreNav";
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
    <ScoreNav></ScoreNav>
    <Jumbotron fluid>
      <h1 className="jumbotron-format">Clicky Game!</h1>
      <p className="jumbotron-format">Click on an image to earn points, but don't click on any more than once!</p>
    </Jumbotron>

    <Row>
      <Col xs="12" sm="6" lg="3">
        <ClickCard 
          name={cardNames[cardNames.indexOf("Charmander")]}
          image={cardImages.Charmander}
        />
      </Col>

      <Col xs="12" sm="6" lg="3">
        <ClickCard 
          name={cardNames[cardNames.indexOf("Squirtle")]}
          image={cardImages.Squirtle}
        />
      </Col>

      <Col xs="12" sm="6" lg="3">
        <ClickCard 
          name={cardNames[cardNames.indexOf("Bulbasaur")]}
          image={cardImages.Bulbasaur}
        />
      </Col>

      <Col xs="12" sm="6" lg="3">
        <ClickCard 
          name={cardNames[cardNames.indexOf("Cyndaquil")]}
          image={cardImages.Cyndaquil}
        />
      </Col>
    </Row>
    
    

    <Row>
      <Col xs="12" sm="6" lg="3">
        <ClickCard 
          name={cardNames[cardNames.indexOf("Totodile")]}
          image={cardImages.Totodile}
        />
      </Col>

      <Col xs="12" sm="6" lg="3">
        <ClickCard 
          name={cardNames[cardNames.indexOf("Chikorita")]}
          image={cardImages.Chikorita}
        />
      </Col>

      <Col xs="12" sm="6" lg="3">
        <ClickCard 
          name={cardNames[cardNames.indexOf("Torchic")]}
          image={cardImages.Torchic}
        />
      </Col>

      <Col xs="12" sm="6" lg="3">
        <ClickCard 
          name={cardNames[cardNames.indexOf("Mudkip")]}
          image={cardImages.Mudkip}
        />
      </Col>
    </Row>
    
    <Row>
      <Col xs="12" sm="6" lg="3">
        <ClickCard 
          name={cardNames[cardNames.indexOf("Treecko")]}
          image={cardImages.Treecko}
        />
      </Col>

      <Col xs="12" sm="6" lg="3">
        <ClickCard 
          name={cardNames[cardNames.indexOf("Chimchar")]}
          image={cardImages.Chimchar}
        />
      </Col>

      <Col xs="12" sm="6" lg="3">
        <ClickCard 
          name={cardNames[cardNames.indexOf("Piplup")]}
          image={cardImages.Piplup}
        />
      </Col>

      <Col xs="12" sm="6" lg="3">
        <ClickCard 
          name={cardNames[cardNames.indexOf("Turtwig")]}
          image={cardImages.Turtwig}
        />
      </Col>
    </Row>

  </Container>

);

export default App;
