import React from "react";
import "./ClickCard.css";



class ClickCard extends React.Component {
    render() {
        return (
            <div className="col-12 col-sm-6 col-lg-3">
                <div className = "card mx-auto" onClick={() => this.props.selectImg(this.props.card.name)}>
                    <div className = "img-container">
                        <img className = "image" alt = {this.props.card.name} src = {this.props.card.picture}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default ClickCard;