// import React, { Component } from 'react';
import React from "react";
// import { Container, Row, Col } from 'reactstrap';
import { Container, Jumbotron} from "reactstrap";

// import logo from './logo.svg';
import './App.css';

// import ClickCard from "./components/ClickCard";
import ScoreNav from "./components/ScoreNav";
// import cardImages from "./cardImages";
// import cardNames from "./cardNames";
// import CardData from "./components/CardData";
import CardDisplay from "./components/CardDisplay";


class App extends React.Component {
  render() {
    return(
      <Container>
        <ScoreNav></ScoreNav>
        <Jumbotron fluid>
          <h1 className="jumbotron-format">Clicky Game!</h1>
          <p className="jumbotron-format">Click on an image to earn points, but don't click on any more than once!</p>
        </Jumbotron>

        <CardDisplay cards={this.props.cards}/>
      </Container>

    )
  }
};
  
    

export default App;
