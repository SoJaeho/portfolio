import styled from "styled-components";

function Skills(){
    
    return(
        <>
            <Div id="Skills">
                <div className="ski_text">Skills</div>
                <div className="ski_bgr">
                    <div className="ski_front">
                        <div className="ski_ele">
                            <div className="ski_ele_name">Frontend</div>
                            <div>
                                <div>
                                    <img src="html5.webp" alt="html5"/>
                                    <img src="css3.webp" alt="css3"/>
                                    <img src="js.jpg" alt="js"/>
                                </div>
                                <div>
                                    <img src="react.webp" alt="react"/>
                                    <img src="jsp.png" alt="jsp"/>
                                    <img src="thymeleaf.png" alt="thymeleaf"/>
                                </div>   
                            </div>         
                        </div>
                    </div>
                    <div className="ski_back">
                        <div className="ski_ele">
                            <div className="ski_ele_name">Backend</div>
                            <div>
                                <div>
                                    <img src="java.webp" alt="java"/>
                                    <img src="python.webp" alt="python"/>
                                    <img src="nodejs.png" alt="nodejs" style={{width:"100px"}}/>
                                </div>
                                <div>
                                    <img src="spring.png" alt="spring" style={{width:"120px"}}/>
                                    <img src="springboot.jpg" alt="springboot" style={{width:"100px"}}/>
                                    
                                </div>   
                            </div>         
                        </div>
                    </div>
                    <div className="ski_etc">
                        <div className="ski_ele">
                            <div className="ski_ele_name">Etc.</div>
                            <div>
                                <div>
                                    <img src="mysql.webp" alt="mysql"/>
                                    <img src="mariadb.webp" alt="maria"/>
                                    <img src="oracle.png" alt="oracle" style={{width:"120px"}}/>
                                </div>
                                <div>
                                    <img src="git.png" alt="git"/>
                                    <img src="aws.webp" alt="aws"/>
                                    <img src="photo.webp" alt="photos"/>
                                    <img src="premiere.png" alt="premiere"/>
                                </div>   
                            </div>         
                        </div>
                    </div>
                </div>
            </Div>
        </>
    );
}

export default Skills;

const Div = styled.div`
    text-align:left;
    padding:20px;
    .ski_bgr{
        margin:10px 10% 10px 10%;
    }
    .ski_text{
        border-bottom: 4px solid;
        margin: 20px 10%;
        width: 27%;
        min-width: 250px;
        padding: 0px;
        text-shadow: 5px 5px 1px rgb(191,11,84);
        color: rgb(191,11,84);
        font-size: 70px;
        font-weight: 600;
        -webkit-text-stroke-width: 3px;
        -webkit-text-stroke-color: rgb(253,200,58);
    }
    .ski_front{
        margin: 0;
        margin-bottom: 30px;
        max-width:800px;
        min-width:400px;
        
    }
    .ski_back{
        margin: 0 0 0 auto;
        margin-bottom: 30px;
        max-width:800px;
        min-width:400px;
    }
    .ski_etc{
        margin: 0;
        margin-bottom: 30px;
        max-width:800px;
        min-width:400px;
    }
    .ski_ele{
        background-color: white;
        border-radius: 5px;
        padding:10px;
        text-align:center;
        img{
            width:64px;
            height:64px;
            margin:10px;
        }
    }
    .ski_ele_name{
        font-weight: 800;
        font-size: 20px;
        color: orange;
        width: 40%;
        margin:0 auto;
        padding:0 0 8px 0;
        border-bottom: 1px solid gray;
    }
`;

