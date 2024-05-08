import styled from "styled-components";
import Memo from "../components/memo/memo";
import IntroFooter from "../components/footer/IntroFooter";
import { createContext, useState } from "react";


export const MemoContext = createContext(null);
function Intro(){
    const [memo, setMemo] = useState(true);
    return(
        <>  
            <MemoContext.Provider value={{memo, setMemo}}>
                <Div id="Intro">
                    <Memo/>
                    <IntroFooter/>
                </Div>
            </MemoContext.Provider>
        </>
    );
}

export default Intro;

const Div = styled.div`
   
    position:relative;
    background: url(https://i.imgur.com/Zk6TR5k.jpg) center center;
    ;
    
`;