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
        id: 1,
        name: "Charmander",
        picture: "https://cdn.bulbagarden.net/upload/thumb/7/73/004Charmander.png/250px-004Charmander.png"
    },

    {
        id: 2,
        name: "Squirtle",
        picture: "https://cdn.bulbagarden.net/upload/thumb/3/39/007Squirtle.png/250px-007Squirtle.png"
    },

    {
        id: 3,
        name: "Bulbasaur",
        picture: "https://cdn.bulbagarden.net/upload/thumb/2/21/001Bulbasaur.png/250px-001Bulbasaur.png"
    },

    {
        id: 4,
        name: "Cyndaquil",
        picture: "https://cdn.bulbagarden.net/upload/thumb/9/9b/155Cyndaquil.png/250px-155Cyndaquil.png"
    },

    {
        id: 5,

        name: "Totodile",
        picture: "https://cdn.bulbagarden.net/upload/thumb/d/df/158Totodile.png/250px-158Totodile.png"
    },

    {
        id: 6,
        name: "Chikorita",
        picture: "https://cdn.bulbagarden.net/upload/thumb/b/bf/152Chikorita.png/250px-152Chikorita.png"
    },

    {
        id: 7,
        name: "Torchic",
        picture: "https://cdn.bulbagarden.net/upload/thumb/9/91/255Torchic.png/250px-255Torchic.png"
    },

    {
        id: 8,
        name: "Mudkip",
        picture: "https://cdn.bulbagarden.net/upload/thumb/6/60/258Mudkip.png/250px-258Mudkip.png"
    },

    {
        id: 9,
        name: "Treecko",
        picture: "https://cdn.bulbagarden.net/upload/thumb/2/2c/252Treecko.png/250px-252Treecko.png"
    },

    {
        id: 10,
        name: "Chimchar",
        picture: "https://cdn.bulbagarden.net/upload/thumb/7/76/390Chimchar.png/250px-390Chimchar.png"
    },

    {
        id: 11,
        name: "Piplup",
        picture: "https://cdn.bulbagarden.net/upload/thumb/b/b1/393Piplup.png/250px-393Piplup.png"
    },

    {
        id: 12,
        name: "Turtwig",
        picture: "https://cdn.bulbagarden.net/upload/thumb/5/5c/387Turtwig.png/250px-387Turtwig.png"
    },
];


class App extends React.Component {

    state = {
        picked: [],
        score: 0,
        topscore: 0
    };

    selectImg = (name) => {
        
    }




  render() {
    return(
      <Container>
        <ScoreNav 
            score = {this.state.score}
            topscore = {this.state.topscore}
        />
        <Jumbotron fluid>
          <h1 className="jumbotron-format">Clicky Game!</h1>
          <p className="jumbotron-format">Click on an image to earn points, but don't click on any more than once!</p>
        </Jumbotron>

        <CardDisplay cardData={cardData} score = {this.state.score}/>
      </Container>

    )
  }
};
  
    

export default App;
