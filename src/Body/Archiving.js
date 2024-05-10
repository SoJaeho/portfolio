import styled from "styled-components";

function Archiving(){
    
    return(
        <>
            <Div id="Archiving">
                <div className="arc_text">Archiving</div>
                <div className="arc_bg">
                    <div className="arc_bgr">
                        <div>
                            <img src="github.png" alt="github"/>
                        </div>
                        <div>
                            <a href="https://github.com/SoJaeho">https://github.com/SoJaeho</a>
                        </div>
                        <div>
                            <p><b>개발한 소스들을 공개</b>했습니다.<br/></p>
                        </div>
                    </div>
                    <div className="arc_bgr">
                        <div>
                            <img src="tistory.png" alt="tistory"/>
                        </div>
                        <div>
                            <a href="https://rairo.tistory.com">https://rairo.tistory.com</a>
                        </div>
                        <div>
                            <p><b>지식공유, 개발과정을 기록</b>했습니다.<br/></p>
                        </div>
                    </div>
                </div>
                
            </Div>
        </>
    );
}

export default Archiving;

const Div = styled.div`
   .arc_bg{
    display:flex;
    flex-flow: row wrap;
    justify-content: center;
    padding-bottom:100px;
   }
    
    .arc_text{
        text-align:left;
        border-bottom: 4px solid black;
        margin: 20px 10%;
        width: 27%;
        min-width: 250px;
        padding: 0px;
        text-shadow: 5px 5px 1px gray;
        color: transparent;
        font-size: 70px;
        font-weight: 600;
        -webkit-text-stroke-width: 3px;
        -webkit-text-stroke-color: black;
        
    }
    .arc_bgr{
        
        margin: 50px 5% 50px 5%;
        
        padding: 20px;
        min-width: 30%;
        
        text-align:left;
        border-radius: 30px;
        background-color:white;
        color: black;
        -webkit-box-shadow: 10px 10px 10px 0 rgba(68, 68, 68, 0.5);
        p:before {
            content: "✔";
            display: inline;
            padding-right: .5rem;
        }
        img{
            height:50px;
        }
        a{
            text-decoration-line: none;
            color: blue;
            font-size: 20px;
            &:hover{
                color: orange;
            }
        }
        div{
            margin:20px;
        }
    }
`