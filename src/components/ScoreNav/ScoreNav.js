import React from "react";
import {Navbar, NavItem} from "reactstrap";
import "./ScoreNav.css";

const ScoreNav = props => (
    <Navbar className="fixed-top" color="success">
        {/* <ul>
            <li>Clicky Game</li>
            <li>Click an Image to Begin!</li>
            <li className="score-display"></li>
        </ul> */}
        {/* <Nav navbar> */}
            <NavItem>Clicky Game</NavItem>
            <NavItem id="feedback">Click an Image to Begin!</NavItem>
            <NavItem id="score-display"></NavItem>
        {/* </Nav> */}
        
    </Navbar>
);

export default ScoreNav;