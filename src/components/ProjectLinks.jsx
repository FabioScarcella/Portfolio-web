import React from 'react';
import Grow from '@material-ui/core/Grow';

function ProjectLinks(props){
    let time = 1000;
    let delay = (props.id + 1) * 50;

    return (<Grow in={props.state} style={{transitionDelay: delay}} {...( { timeout: time } )}>
        <a className="project-link" href={props.link}>{props.name}</a>
        </Grow>
    );
}
export default ProjectLinks;