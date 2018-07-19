import React, { Component } from "react";
import ClickCard from "./ClickCard";
// import CardData from "./CardData";

class CardDisplay extends Component {

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

                {this.shuffleCards(this.props.cardData).map((card) => {
                    return <ClickCard card={card} onClick={this.handleIncrement}/>
                })}

            </div>
        )
    }
}

export default CardDisplay;
