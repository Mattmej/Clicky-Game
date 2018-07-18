import React from 'react';
import {NavItem} from "reactstrap"

const ScoreDisplay = (props) => (
    <NavItem>
        
        Score: {props.score}&nbsp;
        Top Score: {props.topscore}
    
    </NavItem>
);

export default ScoreDisplay;