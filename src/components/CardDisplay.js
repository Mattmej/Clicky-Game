import React from "react";
import ClickCard from "./ClickCard";


const CardDisplay = (props) => (

    <div className="row">

        {props.shuffleCards(props.cardData).map((card) => {
            return <ClickCard card={card} selectImg={props.selectImg}/>
        })}

    </div>

);

export default CardDisplay;
