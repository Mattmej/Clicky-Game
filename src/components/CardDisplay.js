import React, { Component } from "react";
import ClickCard from "./ClickCard";
// import CardData from "./CardData";

class CardDisplay extends Component {



    render() {
        return(
            <div className="row">
                {/* <div className="col-12 col-sm-" */}
                {this.props.cards.map((card) => {
                    return <ClickCard card={card}/>
                })
                }
            </div>
        )
    }
}

export default CardDisplay;
