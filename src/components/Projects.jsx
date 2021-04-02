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
            <h2>Those are some of the projects I've been part of!</h2>
            <div>
            {mouse ?  ProjectsInfo.map((p, index) => {
                return <ProjectLinks 
                    key={index} 
                    id={index}
                    name={p.name}
                    link={p.url} 
                />
            }) : <div className="projects-empty"></div>}
            </div>
        </div>
    );
}

export default Projects;