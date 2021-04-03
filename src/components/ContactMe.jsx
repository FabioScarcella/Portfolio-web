import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import TelegramIcon from '@material-ui/icons/Telegram';

function ContactMe(){
    return (
        <div className="padding-ver" id="contact-me">
            <h2>Contact me!</h2>
            <div className="icons">
                <a aria-label="Linkedin" 
                href="https://www.linkedin.com/in/fabio-scarcella-g%C3%B3mez-5abb4512a/"
                className="contact-icon">
                    <LinkedInIcon />
                </a>
                <a aria-label="Github" 
                href="https://github.com/FabioScarcella"
                className="contact-icon">
                    <GitHubIcon />
                </a>
                <a aria-label="Curriculum vitae" 
                href="https://drive.google.com/file/d/10GsPzAtZp4ttL4qwp3Of0qlXoe1iHkGn/view?usp=sharing"
                className="contact-icon">
                    <NoteAddIcon />
                </a>
                <a aria-label="Telegram" 
                href="https://t.me/FabioScarcellaGomez"
                className="contact-icon">
                    <TelegramIcon />
                </a>
            </div>
        </div>
    );
}

export default ContactMe;