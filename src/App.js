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

let cardData = [
  {
      name: "Charmander",
      picture: "https://cdn.bulbagarden.net/upload/thumb/7/73/004Charmander.png/250px-004Charmander.png"
  },

  {
      name: "Squirtle",
      picture: "https://cdn.bulbagarden.net/upload/thumb/3/39/007Squirtle.png/250px-007Squirtle.png"
  },

  {
      name: "Bulbasaur",
      picture: "https://cdn.bulbagarden.net/upload/thumb/2/21/001Bulbasaur.png/250px-001Bulbasaur.png"
  },

  {
      name: "Cyndaquil",
      picture: "https://cdn.bulbagarden.net/upload/thumb/9/9b/155Cyndaquil.png/250px-155Cyndaquil.png"
  },

  {
      name: "Totodile",
      picture: "https://cdn.bulbagarden.net/upload/thumb/d/df/158Totodile.png/250px-158Totodile.png"
  },

  {
      name: "Chikorita",
      picture: "https://cdn.bulbagarden.net/upload/thumb/b/bf/152Chikorita.png/250px-152Chikorita.png"
  },

  {
      name: "Torchic",
      picture: "https://cdn.bulbagarden.net/upload/thumb/9/91/255Torchic.png/250px-255Torchic.png"
  },

  {
      name: "Mudkip",
      picture: "https://cdn.bulbagarden.net/upload/thumb/6/60/258Mudkip.png/250px-258Mudkip.png"
  },

  {
      name: "Treecko",
      picture: "https://cdn.bulbagarden.net/upload/thumb/2/2c/252Treecko.png/250px-252Treecko.png"
  },

  {
      name: "Chimchar",
      picture: "https://cdn.bulbagarden.net/upload/thumb/7/76/390Chimchar.png/250px-390Chimchar.png"
  },

  {
      name: "Piplup",
      picture: "https://cdn.bulbagarden.net/upload/thumb/b/b1/393Piplup.png/250px-393Piplup.png"
  },

  {
      name: "Turtwig",
      picture: "https://cdn.bulbagarden.net/upload/thumb/5/5c/387Turtwig.png/250px-387Turtwig.png"
  },
];


class App extends React.Component {

    // Fisher-Yates shuffle
  shuffleCards = (array) => {
    let m = array.length, t, i;

    // While there remain elements to shuffle…
    while (m) {
  
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);
  
      // And swap it with the current element.
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
  
    return array;
  }


  render() {
    return(
      <Container>
        <ScoreNav></ScoreNav>
        <Jumbotron fluid>
          <h1 className="jumbotron-format">Clicky Game!</h1>
          <p className="jumbotron-format">Click on an image to earn points, but don't click on any more than once!</p>
        </Jumbotron>

        <CardDisplay cardData={cardData}/>
      </Container>

    )
  }
};
  
    

export default App;
