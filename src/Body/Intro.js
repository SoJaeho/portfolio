import styled from "styled-components";
import Memo from "../components/memo/memo";
import IntroFooter from "../components/footer/IntroFooter";

function Intro(){
    
    return(
        <>
            <Div>
                <Memo/>
                <IntroFooter/>
            </Div>
        </>
    );
}

export default Intro;

const Div = styled.div`
   
    position:relative;
    background: url(https://i.imgur.com/Zk6TR5k.jpg) center center;
    ;
    
`;