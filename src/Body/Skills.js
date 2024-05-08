import { useContext } from "react";
import styled from "styled-components";
import { scrollContext } from "../App";

function Skills(){
    const {scrollY} = useContext(scrollContext);
    return(
        <>
            <Div id="Skills" className={scrollY>=2350?"bgcAble":"bgcUnable"}>
                <p>Skills</p>
                
            </Div>
        </>
    );
}

export default Skills;

const Div = styled.div`
    position:relative;   
    transition: all 0.2s ease 0s;
    z-index: -1;
`;

