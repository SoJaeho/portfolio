import { useContext} from "react";
import styled from "styled-components";
import { scrollContext } from "../../App";

function Chrome(){
    const {scrollY} = useContext(scrollContext);
    return(
        <div style={{background:"black",position: "sticky",top:"0"}}>
            <Div>
                <div className="tab" style={scrollY>=0&&scrollY<720?{backgroundColor: "rgb(45,45,45)"}:{}} onClick={()=>document.getElementById("Intro").scrollIntoView({behavior:"smooth"})}><div><img src="A.png" alt="intro_window"/><span> Intro</span></div></div>
                <div className="tab" style={scrollY>=720&&scrollY<1550?{backgroundColor: "rgb(45,45,45)"}:{}} onClick={()=>document.getElementById("Profile").scrollIntoView({behavior:"smooth"})}><img src="B.png" alt="intro_window"/><span> Profile</span></div>
                <div className="tab" style={scrollY>=1550&&scrollY<2380?{backgroundColor: "rgb(45,45,45)"}:{}} onClick={()=>document.getElementById("Skills").scrollIntoView({behavior:"smooth"})}><img src="C.png" alt="intro_window"/><span> Skills</span></div>
                <div className="tab" style={scrollY>=2380&&scrollY<3210?{backgroundColor: "rgb(45,45,45)"}:{}} onClick={()=>document.getElementById("Projects").scrollIntoView({behavior:"smooth"})}><img src="D.png" alt="intro_window"/><span> Projects</span></div>
                <div className="tab" style={scrollY>=3210?{backgroundColor: "rgb(45,45,45)"}:{}} onClick={()=>document.getElementById("Archiving").scrollIntoView({behavior:"smooth"})}><img src="E.png" alt="intro_window"/><span> Archiving</span></div>
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
