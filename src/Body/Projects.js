import { useContext } from "react";
import styled from "styled-components";
import { scrollContext } from "../App";

function Projects(){
    const {scrollY} = useContext(scrollContext);
    return(
        <>
            <Div id="Projects" className={scrollY>=2350?"bgcAble":"bgcUnable"}>
                <p>Projects</p>
                <div className="full-wh">	
                    <div className="bg-animation">
                        <div id='stars'></div>
                        <div id='stars2'></div>
                        <div id='stars3'></div>
                        <div id='stars4'></div>
                    </div>
                </div> 
            </Div>
        </>
    );
}

export default Projects;

const Div = styled.div`
    position:relative;   
    transition: all 0.2s ease 0s;
    z-index: -1;
`;