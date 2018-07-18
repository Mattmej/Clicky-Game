import React, { Component } from "react";
import ClickCard from "./ClickCard";
// import CardData from "./CardData";

class CardDisplay extends Component {

    // shuffleCards = (array) => {
    //     for (let i = 0; i < array.length; i++) {

    //         // selects random number from 0 to array.length - 1
    //         const randomNum = Math.floor(Math.random() * array.length);
    //         // const shuffledArray = array[randomNum];
    //         array[i] = array[randomNum];


    //     }
    //     return array;
    // }

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

    handleIncrement = () => {
        this.setState({score: this.state.score += 1});
    };

    render() {
        return(
            <div className="row">
                {/* <div className="col-12 col-sm-" */}


                {/* This displays a bunch of cards */}
                {/* {this.props.cardData.map((card) => {

                    // Returns a card with props.card = [an object in the array]
                    return <ClickCard card={card} onClick={this.handleIncrement}/>
                })
                } */}

                {this.shuffleCards(this.props.cardData).map((card) => {
                    return <ClickCard card={card} onClick={this.handleIncrement}/>
                })}

            </div>
        )
    }
}

export default CardDisplay;
