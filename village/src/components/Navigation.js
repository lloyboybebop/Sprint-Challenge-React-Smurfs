import React from 'react';
import {NavLink} from 'react-router-dom';

const Navigation = () => {
    return (
        <div className = 'Navigation'>
            <NavLink to = '/'>The Smurfs' Village</NavLink>
            <NavLink to = '/smurf-form'>Add A Smurf</NavLink>
        </div>
    );
}

export default Navigation;