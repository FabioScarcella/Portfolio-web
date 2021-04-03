import React from 'react';
import ProjectsInfo from '../ProjectsInfo';
import ProjectLinks from './ProjectLinks';


function Projects(){

    const [mouse, setMouse] = React.useState(false);

    function handleMouseEnter(){
        setMouse(true);
    }

    function handleMouseLeave(){
        setMouse(false);
    }

    return (
        <div className="projects-div" 
        id="projects-list"
        onMouseEnter={handleMouseEnter} 
        onMouseLeave={handleMouseLeave}>
            <h2>These are some of the projects I've been part of!</h2>
            <div>
            {ProjectsInfo.map((p, index) => {
                return <ProjectLinks 
                    key={index} 
                    id={index}
                    name={p.name}
                    link={p.url}
                    state = {mouse}
                 />
            })}
            </div>
        </div>
    );
}

export default Projects;