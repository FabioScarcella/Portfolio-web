import React from 'react';
import Zoom from '@material-ui/core/zoom'

function Introduction(){
    return  (
        <Zoom in={true}>
        <div className="cta-container align-middle" id="introduction">
            <h1>Hi, I'm Fabio Scarcella</h1>
            <p>I'm a fullstack developer who's enthusiast about coding! 
                I have a strong knowledge about pure HTML CSS and JS, but also 
                I'm really confortable using and learning different frameworks, such as 
                Node.JS with Express.JS, React, Bootstrap among others.                
            </p>
        </div>
        </Zoom>
        
    );
}

export default Introduction;