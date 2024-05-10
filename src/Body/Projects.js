import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import imageData from "../asset/img/imgAsset";
import imageData2 from "../asset/img/imgAsset2";
import { useState } from "react";
const renderSlides = imageData.map(image => (
    <div className="project_img_ele" key={image.alt}>
      <img src={image.url} alt={image.alt} />
  </div>
));
const renderSlides2 = imageData2.map(image => (
    <div className="project_img_ele" key={image.alt}>
      <img src={image.url} alt={image.alt} />
  </div>
));

function Projects(){
    const [currentIndex, setCurrentIndex] = useState();
    function handleChange(index) {
        setCurrentIndex(index);
    }
    return(
        <>
            <Div id="Projects">
                <div className="project_text">Projects</div>
                <div className="project_bg">
                    <div className="project_title">
                        부산 오페라하우스 
                    </div>
                    <div className="project_sub">
                        2023.11~2024.01 (5人 팀 프로젝트)
                    </div>
                    <div className="project_dtl">
                        <div className="project_imgs">
                            <Carousel
                                showArrows={false}
                                autoPlay={true}
                                infiniteLoop={true}
                                showThumbs={false}
                                selectedItem={imageData[currentIndex]}
                                onChange={handleChange} >
                                {renderSlides}
                            </Carousel>
                                
                           
                        </div>
                        <div className="project_cont">
                            <div className="project_cont_line">
                                <div className="project_cont_label">
                                    주요 기능
                                </div>
                                <div className="project_cont_value">
                                    <b>나라장터의 부산 오페라하우스의 요구사항 명세서를 기반으로 개발</b>하였으며 회원, 예매, 대관, 공연, 게시판 관리등의 기능이 들어갔으며,
                                    각종 api를 활용해 문자인증, qr코드를 통한 검표 시스템도 구축했다.
                                </div>
                            </div>
                            <div className="project_cont_line">
                                <div className="project_cont_label">
                                    GitHub
                                </div>
                                <div className="project_cont_value">
                                    <a href="https://github.com/Younglan/cantata">https://github.com/Younglan/cantata</a>
                                </div>
                            </div>
                            <div className="project_cont_line">
                                <div className="project_cont_label">
                                    Frontend
                                </div>
                                <div className="project_cont_value">
                                    React
                                </div>
                            </div>
                            <div className="project_cont_line">
                                <div className="project_cont_label">
                                    Backend
                                </div>
                                <div className="project_cont_value">
                                    Springboot
                                </div>
                            </div>
                            <div className="project_cont_line">
                                <div className="project_cont_label">
                                    Database
                                </div>
                                <div className="project_cont_value">
                                    mariaDB
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="project_bg">
                    <div className="project_title">
                        소재호의 포트폴리오 사이트 
                    </div>
                    <div className="project_sub">
                        2024.05 (1人 개인 프로젝트)
                    </div>
                    <div className="project_dtl">
                        <div className="project_imgs">
                            <Carousel
                                showArrows={false}
                                autoPlay={true}
                                infiniteLoop={true}
                                showThumbs={false}
                                selectedItem={imageData[currentIndex]}
                                onChange={handleChange}
                                style={{zIndex:"-1"}} >
                                {renderSlides2}
                            </Carousel>
                                
                           
                        </div>
                        <div className="project_cont">
                            <div className="project_cont_line">
                                <div className="project_cont_label">
                                    주요 기능
                                </div>
                                <div className="project_cont_value">
                                    <b>포트폴리오 작성 용도로 제작</b>했습니다. 프로필, 기술내역, 프로젝트목록 등이 기록되어 있습니다.
                                </div>
                            </div>
                            <div className="project_cont_line">
                                <div className="project_cont_label">
                                    URL
                                </div>
                                <div className="project_cont_value">
                                    <a href="">https://sjh-portfolio.com</a>
                                </div>
                            </div>
                            <div className="project_cont_line">
                                <div className="project_cont_label">
                                    GitHub
                                </div>
                                <div className="project_cont_value">
                                    <a href="https://github.com/SoJaeho/portfolio">https://github.com/SoJaeho/portfolio</a>
                                </div>
                            </div>
                            <div className="project_cont_line">
                                <div className="project_cont_label">
                                    Frontend
                                </div>
                                <div className="project_cont_value">
                                    React
                                </div>
                            </div>
                            <div className="project_cont_line">
                                <div className="project_cont_label">
                                    Deployment
                                </div>
                                <div className="project_cont_value">
                                    AWS (light seil)
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </Div>
        </>
    );
}

export default Projects;

const Div = styled.div`
    padding:20px;
    transition: all 0.2s ease 0s;
    .project_text{
        text-align:left;
        border-bottom: 4px solid rgb(253,200,58);
        margin: 20px 10%;
        width: 27%;
        min-width: 250px;
        padding: 0px;
        text-shadow: 5px 5px 1px white;
        color: transparent;
        font-size: 70px;
        font-weight: 600;
        -webkit-text-stroke-width: 3px;
        -webkit-text-stroke-color: rgb(253,200,58);
        
    }
    .project_title{
        padding-bottom: .5rem;
        font-family: Black Han Sans, sans-serif;
        font-weight: 900;
        font-size: 2.5rem;
        color: #222;
        text-align: center;
    }   
    .project_sub{
        margin-bottom: 2rem;
        font-weight: 400;
        font-size: 1rem;
        color: #6c757d;
        text-align: center;
       
    }
        
        
    .project_bg{
        margin: 10px auto 80px;
        padding: 30px 5% 50px 5%;
        
        width: 60%;
        text-align:center;
        background-color: white;
        border-radius: 30px;
        background-color:white;
       
        -webkit-box-shadow: 10px 10px 10px 0 rgba(68, 68, 68, 0.5);
    }
    
    .project_dtl{
        display:flex;
        flex-flow: row wrap;
        
        @media (max-width: 1200px) {
            .project_imgs{
                 width:100%;
             }

             .project_cont{
                width:100%;
             }
         }
    }
    .project_imgs{
       
        width:40%;
        margin-right:5%;
        padding-bottom: 50px;
    }
    .project_img_ele{
        background-color:black;
        width:70%;
        text-align: center;
        margin:0 auto;
    }
    .carousel{
        z-index:0;
    }
    .slide{
        background-color:black;
    }
    .project_cont{
        width:55%;
        text-align:left;
        .project_cont_label:before {
            content: "✔";
            display: inline;
            padding-right: .5rem;
        }
       .project_cont_line{
            display:flex;
            font-weight: 400;
            font-size: 1rem;
            padding-bottom: 20px;
            .project_cont_label{
               
                min-width:100px;
                padding-right:20px;
                font-weight: 900;
                font-size: 1rem;
            }
            .project_cont_value{
                width:100%;
                word-break: break-all;
            }
       }
        
    }
`;