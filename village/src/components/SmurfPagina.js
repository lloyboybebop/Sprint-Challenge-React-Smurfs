import React from 'react';
import Smurf from './Smurf';

const SmurfPagina = (props) => {
    let oneSmurf = props.smurfs.find(smurf => (smurf.id === parseInt(props.match.params.smurfid, 10)));
    
    return (
        <Smurf {...oneSmurf} />
    )
}

export default SmurfPagina;