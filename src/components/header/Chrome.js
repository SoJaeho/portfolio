import { useContext} from "react";
import styled from "styled-components";
import { scrollContext } from "../../App";


function Chrome(){
    const {scrollY} = useContext(scrollContext);
    const scrollupdown=(e)=>{
        document.getElementById(e).scrollIntoView({behavior:"smooth"});
    };
    
    return(
        <div style={{background:"black",position: "sticky",top:"0",zIndex:"1"}}>
            <Div>
                <div className="tab tab_a" style={scrollY<360?{backgroundColor: "rgb(45,45,45)"}:{}} onClick={()=>scrollupdown("Intro")}><img src="A.png" alt="intro_window"/><span> Intro</span></div>
                <div className="tab tab_b" style={scrollY>=360&&scrollY<1400?{backgroundColor: "rgb(45,45,45)"}:{}} onClick={()=>scrollupdown("Profile")}><img src="B.png" alt="profile_window"/><span> Profile</span></div>
                <div className="tab tab_c" style={scrollY>=1400&&scrollY<2600?{backgroundColor: "rgb(45,45,45)"}:{}} onClick={()=>scrollupdown("Skills")}><img src="C.png" alt="skills_window"/><span> Skills</span></div>
                <div className="tab tab_d" style={scrollY>=2600&&scrollY<3600?{backgroundColor: "rgb(45,45,45)"}:{}} onClick={()=>scrollupdown("Projects")}><img src="D.png" alt="Projects_window"/><span> Projects</span></div>
                <div className="tab tab_e" style={scrollY>=3600?{backgroundColor: "rgb(45,45,45)"}:{}} onClick={()=>scrollupdown("Archiving")}><img src="E.png" alt="archiving_window"/><span> Archiving</span></div>
                <div className="control">
                    <div>ㅡ</div>
                    <div>□</div>
                    <div>Ⅹ</div>
                </div>
                
            </Div>
            <Div2>
                <div className="site_control"><img src="arrow.png" alt="left_arrow"/></div>
                <div className="site_control"><img src="arrow.png" alt="right_arrow" style={{transform: "rotate(180deg)"}}/></div>
                <div className="site_control"><img src="refresh.png" alt="refresh_arrow"/></div>
                <div className="address"></div>
            </Div2>
        </div>
    );
}

export default Chrome;




const Div = styled.div`
    display: flex;
    justify-content: left;
    align-items:flex-end;
    left: 0px;
    top: 0px;
    font-size: 15px;
    height: 45px;
    color:white;
    background-color: black;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    .tab{
        width:15%;
        height:80%;
        margin:0 0px 0px 10px;
        padding: 0px 0 0 10px;
        line-height: 35px;
        
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        text-align: left;
        &:hover{
            background-color: rgb(67, 67, 67);
            cursor: pointer;
        }
        
        
    }
    @media (max-width: 800px) {
        .tab > span{
             display:none;
         }
     }
    .control{
        display: flex;
        flex: 1 0 auto;
        justify-content: right;
        color: gray;
        line-height: 10px;
        align-items:center;
        margin-bottom:20px;
        div{
            padding:0px 10px 0px 20px;
        }
    }
    .abled{
        background-color: rgb(45,45,45);
    }
`;

const Div2 = styled.div`
    display: flex;
    
    justify-content: left;
    align-items: center;
    left: 0px;
    top: 0px;
    font-size: 11px;
    line-height: 14px;
    height: 60px;
    color:white;
    background-color: rgb(45,45,45);
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
    .site_control{
        
        padding:0 10px 0 15px;
    }
    .address{
        border-radius: 22px;
        height:70%;
        text-align:left;
        margin: 0px 50px 0px 10px;
        flex:1 0 auto;
        background-color: rgb(63,63,63);
    }
`;
