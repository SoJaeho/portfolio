import styled from "styled-components";

function Profile(){
    
    return(
        <>
            <Div id="Profile">
                <div className="pro_text">Profile</div>
                <div className="pro_bgr">
                <div className="pro_bg">
                    <div className="pro_bg_ele">
                        <div className="pro_bg_ele_div1"><img className="pro_bg_ele_img" src="name.svg" alt="name_img"/></div>
                        <div className="pro_bg_ele_div2">
                            <div className="pro_bg_ele_label">이름</div>
                            <div className="pro_bg_ele_value">소재호</div>
                        </div>
                    </div>
                    <div className="pro_bg_ele">
                        <div className="pro_bg_ele_div1"><img className="pro_bg_ele_img" src="age.svg" alt="age_img"/></div>
                        <div className="pro_bg_ele_div2">
                            <div className="pro_bg_ele_label">생년월일</div>
                            <div className="pro_bg_ele_value">2000.07.16</div>
                        </div>
                    </div>
                    <div className="pro_bg_ele">
                        <div className="pro_bg_ele_div1"><img className="pro_bg_ele_img" src="adress.svg" alt="adress_img"/></div>
                        <div className="pro_bg_ele_div2">
                            <div className="pro_bg_ele_label">주소</div>
                            <div className="pro_bg_ele_value">대전광역시</div>
                        </div>
                    </div>
                    <div className="pro_bg_ele">
                        <div className="pro_bg_ele_div1"><img className="pro_bg_ele_img" src="tel.svg" alt="tel_img"/></div>
                        <div className="pro_bg_ele_div2">
                            <div className="pro_bg_ele_label">전화번호</div>
                            <div className="pro_bg_ele_value"><a href="tel:01041620646">010-4162-0646</a></div>
                        </div>
                    </div>
                    <div className="pro_bg_ele">
                        <div className="pro_bg_ele_div1"><img className="pro_bg_ele_img" src="email.svg" alt="email_img"/></div>
                        <div className="pro_bg_ele_div2">
                            <div className="pro_bg_ele_label">이메일</div>
                            <div className="pro_bg_ele_value"><a href="mailto:sojh615@naver.com">sojh615@naver.com</a></div>
                        </div>
                    </div>
                    <div className="pro_bg_ele">
                        <div className="pro_bg_ele_div1"><img className="pro_bg_ele_img" src="study.svg" alt="study_img"/></div>
                        <div className="pro_bg_ele_div2">
                            <div className="pro_bg_ele_label">교육</div>
                            <div className="pro_bg_ele_value" style={{fontSize: "11px"}}>~2019.01 동아마이스터고 자동화과<br/>~2024.01 중앙능력개발원 풀스택 개발자 과정<br/>~2024.03 서울사이버대학 (컴퓨터 공학)</div>
                        </div>
                    </div>
                </div> 
                <div className="pro_notice">※ 문의 사항은 위 연락처로 부탁드립니다.</div>
                </div>
            </Div>
        </>
    );
}

export default Profile;

const Div = styled.div`
    text-align:left;
    padding:20px;
    .pro_text{
    
        border-bottom: 4px solid;
        margin: 20px 10%;
        width: 27%;
        min-width: 250px;
        padding: 0px;
        text-shadow: 3px 3px 5px white;
        color: #6ec6ca;
        font-size: 70px;
        font-weight: 600;
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: #43474b;
    }
    .pro_bgr{
        
        margin: 10px auto;
        padding: 80px 10% 50px 10%;
        
        width: 60%;
        text-align:center;
        border-radius: 30px;
        background-color:white;
        color: #495057;
        -webkit-box-shadow: 10px 10px 10px 0 rgba(68, 68, 68, 0.5);
    }
    .pro_bg{
        display:flex;
        text-align:left;
        
        flex-flow: row wrap;
        justify-content: center;
        margin-top:10px;
        margin-bottom:60px;
        -webkit-box-pack: justify;
    }
    .pro_bg_ele{
        display:flex;
        justify-content: left;
        width:300px;
    }
    .pro_bg_ele_div1{
        margin:0 15px 40px;
    }
    .pro_bg_ele_img{
        width:30px;
    }
    .pro_bg_ele_label{
        margin-bottom: 5px;
        font-weight: 800;
        font-size: 20px;
    }
    .pro_bg_ele_value{
        font-weight: 600;
        font-size: 16px;
        color:#202020;
        a{
            color:#202020;
            text-decoration-line: none;
            &:hover{
                color:orange;
            }
        }
    }
    .pro_notice{
        color: #424242;
        font-size:20px;
        font-weight: 700;
        border-radius: 5px;
        padding:25px 10px 25px 10px;
        margin: 0 auto;
        background-color:#f0b9c9;
       
    }
`;