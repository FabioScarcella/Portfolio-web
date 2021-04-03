import React from 'react';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';

function Navbar(){
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#"><EmojiPeopleIcon/> - FSG</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
    
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <a className="nav-link" href="#introduction">Introduction</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#projects-list">Projects</a>
            </li>
            
            <li className="nav-item">
                <a className="nav-link" href="#contact-me">
                    Contact me
                </a>
            </li>
        </ul>
        </div>
    </nav> 
    );
}

export default Navbar;