import React, { Component } from "react";
import ClickCard from "./ClickCard";
// import CardData from "./CardData";

// class CardDisplay extends Component {



//     handleIncrement = () => {
//         this.setState({score: this.state.score += 1});
//     };

//     render() {
//         return(
//             <div className="row">

//                 {props.shuffleCards(this.props.cardData).map((card) => {
//                     return <ClickCard card={card} onClick={this.handleIncrement}/>
//                 })}

//             </div>
//         )
//     }
// }

const CardDisplay = (props) => (
    
//     handleIncrement = () => {
//         this.setState({score: this.state.score += 1});
//     };    

    <div className="row">

        {props.shuffleCards(props.cardData).map((card) => {
            return <ClickCard card={card} selectImg={props.selectImg}/>
        })}

    </div>

);

export default CardDisplay;
