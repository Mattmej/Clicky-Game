import React from "react";
import {Navbar, NavItem} from "reactstrap";
import "./ScoreNav.css";
import ScoreDisplay from "./ScoreDisplay";


const ScoreNav = (props) => (
    <Navbar className="fixed-top" color="success">
        <NavItem>Clicky Game</NavItem>
        <NavItem id="feedback">{props.message}</NavItem>
        <ScoreDisplay 
            score = {props.score}
            topscore = {props.topscore}
        />
        
    </Navbar>
)

export default ScoreNav;