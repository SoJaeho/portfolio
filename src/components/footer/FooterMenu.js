import styled from "styled-components";

function FooterMenu(){
    const scrollupdown=(e)=>{
        document.getElementById(e).scrollIntoView({behavior:"smooth"});
    };
    return(
        <>
            <Div>
                <div className="Header">
                    <img src="annoy.png" alt="avatar"/>
                    <span>소재호</span>
                </div>
                <div className="Body">
                    <div className="menu_left">
                        <div className="ico_link" onClick={()=>scrollupdown("Intro")}>
                            <img src="A.png" alt="A"/>
                            <div><span>Intro</span></div>
                        </div>
                        <div className="ico_link" onClick={()=>scrollupdown("Profile")}>
                            <img src="B.png" alt="B"/>
                            <div><span>Profile</span></div>
                        </div>
                        <div className="ico_link" onClick={()=>scrollupdown("Skills")}>
                            <img src="C.png" alt="C"/>
                            <div><span>Skills</span></div>
                        </div>
                        <div className="ico_link" onClick={()=>scrollupdown("Projects")}>
                            <img src="D.png" alt="D"/>
                            <div><span>Projects</span></div>
                        </div>
                        <div className="ico_link" onClick={()=>scrollupdown("Archiving")}>
                            <img src="E.png" alt="E"/>
                            <div><span>Archiving</span></div>
                        </div>
                        
                    </div>
                    <div className="menu_right"></div>
                </div>
                <div className="Footer">

                </div>
            </Div>
        </>
    );
}
export default FooterMenu;

const Div = styled.div`
    position: absolute;
    left: 0px;
    box-shadow: rgba(0, 0, 0, 0.5) 2px 4px 2px;
    bottom: 35px;
    font-size: 11px;
    line-height: 14px;
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    background-color: rgb(66, 130, 214);
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    .ico_link{
        display:flex;
        font-size: 16px;
        color: #202020;
        padding: 10px 10px 10px 0;
        img{
            width:25px;
        }
        div{
            padding-left:5px;
            line-height:23px;
        }
        &:hover{
            background-color: rgb(66, 130, 214);
        }
    }
    .Header{
        position: relative;
        align-self: flex-start;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        
        color: rgb(255, 255, 255);
        height: 54px;
        padding: 6px 0px 5px ;
        margin-top: 2px;
        width: 100%;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        background: linear-gradient(rgb(24, 104, 206) 0%, rgb(14, 96, 203) 12%, rgb(14, 96, 203) 20%, rgb(17, 100, 207) 32%, rgb(22, 103, 207) 33%, rgb(27, 108, 211) 47%, rgb(30, 112, 217) 54%, rgb(36, 118, 220) 60%, rgb(41, 122, 224) 65%, rgb(52, 130, 227) 77%, rgb(55, 134, 229) 79%, rgb(66, 142, 233) 90%, rgb(71, 145, 235) 100%);
        overflow: hidden;
        img{
            width: 42px;
            height: 42px;
            margin-right: 5px;
            margin-left:5px;
            border-radius: 3px;
            border: 2px solid rgba(222, 222, 222, 0.8);
        }
        span{
            font-size: 14px;
            font-weight: 700;
            text-shadow: rgba(0, 0, 0, 0.7) 1px 1px;
        }
    }
    .Body{
        display: flex;
        margin: 0px 2px;
        position: relative;
        border-top: 1px solid rgb(56, 93, 231);
        box-shadow: rgb(56, 93, 231) 0px 1px;
        .menu_left{
            background-color: rgb(255, 255, 255);
            padding: 1px 5px 70px;
            width: 190px;
            display: flex;
            flex-direction: column;
        }
        .menu_right{
           
            background-color: rgb(203, 227, 255);
            border-left: 1px solid rgba(58, 58, 255, 0.37);
            padding: 6px 5px 5px;
            width: 190px;
            color: rgb(0, 19, 107);
            
        }
    }
    .Footer{
        display: flex;
        align-self: flex-end;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: end;
        justify-content: flex-end;
        color: rgb(255, 255, 255);
        height: 36px;
        width: 100%;
        background: linear-gradient(rgb(66, 130, 214) 0%, rgb(59, 133, 224) 3%, rgb(65, 138, 227) 5%, rgb(65, 138, 227) 17%, rgb(60, 135, 226) 21%, rgb(55, 134, 228) 26%, rgb(52, 130, 227) 29%, rgb(46, 126, 225) 39%, rgb(35, 116, 223) 49%, rgb(32, 114, 219) 57%, rgb(25, 110, 219) 62%, rgb(23, 107, 216) 72%, rgb(20, 104, 213) 75%, rgb(17, 101, 210) 83%, rgb(15, 97, 203) 88%);
    }
`;
