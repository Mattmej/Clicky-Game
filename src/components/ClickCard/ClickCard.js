import React from "react";
import "./ClickCard.css";
// import CardData from "./CardData";

// const ClickCard = props => (
    // <div className = "card">
    //     <div className = "img-container">
    //         <img className = "image" alt = {props.name} src = {props.image}/>
    //     </div>
    // </div>
// );

class ClickCard extends React.Component {
    render() {
        return (
            <div className="col-12 col-sm-6 col-lg-3">
                <div className = "card">
                    <div className = "img-container">
                        <img className = "image" alt = {this.props.card.name} src = {this.props.card.picture}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default ClickCard;