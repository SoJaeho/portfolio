import { useState } from "react";
import styled from "styled-components";

function IntroFooter(){
   const [time, setTime] = useState(new Date()); 

   setInterval(() => setTime(new Date()), 1000);
    
    return(
        <>
           <Div>
             <div className="Start_btn" style={{marginTop : "2px"}}>
                <img src="start.png" alt="start_btn"></img>
             </div>
             <div className="IntroFooter_ico">
                <div className="Memo_ico">
                  <img src="327(16x16).png" alt="memo_ico"/>
                  인트로-메모장
                </div>
             </div>
             <Time>
               <img src="690(16x16).png" alt="sound_ico"></img>
                {time.toLocaleTimeString()}
             </Time>
           </Div>
        </>
    );
}

const Div = styled.div`
    display:flex;
    position:absolute;
    bottom:0;
    width:100%;
    height: 35px;
    color:white;
    align-items: center;
    background: linear-gradient(rgb(31, 47, 134) 0px, rgb(49, 101, 196) 3%, rgb(54, 130, 229) 6%, rgb(68, 144, 230) 10%, rgb(56, 131, 229) 12%, rgb(43, 113, 224) 15%, rgb(38, 99, 218) 18%, rgb(35, 91, 214) 20%, rgb(34, 88, 213) 23%, rgb(33, 87, 214) 38%, rgb(36, 93, 219) 54%, rgb(37, 98, 223) 86%, rgb(36, 95, 220) 89%, rgb(33, 88, 212) 92%, rgb(29, 78, 192) 95%, rgb(25, 65, 165) 98%);
    .IntroFooter_ico{
      flex: 1 0 auto;
    }
    .Memo_ico{
      flex: 1 1 0%;
      max-width: 150px;
      color: rgb(255, 255, 255);
      margin-left: 10px;
      border-radius: 2px;
      margin-top: 2px;
      padding: 0px 8px;
      height: 26px;
      font-size: 11px;
      background-color: rgb(30, 82, 183);
      box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 1px 1px inset, rgba(0, 0, 0, 0.7) 1px 0px 1px inset;
      
      position: relative;
      display: flex;
      -webkit-box-align: center;
      align-items: center;
    }
    
`;
const Time = styled.div`
    display:flex;
    background: linear-gradient(rgb(12, 89, 185) 1%, rgb(19, 158, 233) 6%, rgb(24, 181, 242) 10%, rgb(19, 155, 235) 14%, rgb(18, 144, 232) 19%, rgb(13, 141, 234) 63%, rgb(13, 159, 241) 81%, rgb(15, 158, 237) 88%, rgb(17, 155, 233) 91%, rgb(19, 146, 226) 94%, rgb(19, 126, 215) 97%, rgb(9, 91, 201) 100%);
    border-left: 1px solid rgb(16, 66, 175);
    width:100px;
    line-height: 33px;
    align-items: center; 
    font-size:13px;
    font-weight: lighter;
    box-shadow: rgb(24, 187, 255) 1px 0px 1px inset;
    padding: 0px 10px;
    img{
      margin:0 5px 0 5px;
    }
    
`;
export default IntroFooter;

