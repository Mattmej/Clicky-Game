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

    render() {
        return(
            <div className="row">
                {/* <div className="col-12 col-sm-" */}


                {/* This displays a bunch of cards */}
                {this.props.cardData.map((card) => {

                    // Returns a card with props.card = [an object in the array]
                    return <ClickCard card={card}/>
                })
                }

            </div>
        )
    }
}

export default CardDisplay;
