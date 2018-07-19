import React from "react";
import {Navbar, NavItem} from "reactstrap";
import "./ScoreNav.css";
import ScoreDisplay from "./ScoreDisplay";

// class ScoreNav extends React.Component {

//     // state = {
//     //     user: {
//     //         score: 0
//     //     },
//     //     // characters: shuffleCards(cardData)
//     // }

//     render() {
//         return(

            // <Navbar className="fixed-top" color="success">
            //     {/* <ul>
            //         <li>Clicky Game</li>
            //         <li>Click an Image to Begin!</li>
            //         <li className="score-display"></li>
            //     </ul> */}
            //     {/* <Nav navbar> */}
            //         <NavItem>Clicky Game</NavItem>
            //         <NavItem id="feedback">Click an Image to Begin!</NavItem>
            //         <ScoreDisplay 
            //             score = {this.props.score}
            //         />
            //     {/* </Nav> */}
                
            // </Navbar>




//         )
//     }
    


const ScoreNav = (props) => (
    <Navbar className="fixed-top" color="success">
        <NavItem>Clicky Game</NavItem>
        <NavItem id="feedback">Click an Image to Begin!</NavItem>
        <ScoreDisplay 
            score = {props.score}
            topscore = {props.topscore}
        />
        
    </Navbar>
)

export default ScoreNav;