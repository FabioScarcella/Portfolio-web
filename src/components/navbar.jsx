import React from 'react';

function Navbar(){
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">FSG</a>
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
                <a className="nav-link" href="#">Disabled</a>
            </li>
            
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Social newtworks
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="https://github.com/FabioScarcella">Github</a>
                    <a className="dropdown-item" href="https://www.linkedin.com/in/fabio-scarcella-g%C3%B3mez-5abb4512a/">Linkedin</a>
                </div>
            </li>
        </ul>
        </div>
    </nav> 
    );
}

export default Navbar;