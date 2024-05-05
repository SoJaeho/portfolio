import React, { useCallback, useRef, useState } from 'react';
import styled from 'styled-components';
import Typewriter from 'typewriter-effect';
import HeaderButtons from './HeaderButtons';

function Memo() {
    const [memoText, setMemoText] = useState('');
    const wrapRef = useRef(null);
    const headerRef = useRef(null);
    let lastX = 0;
    let lastY = 0;
    let startX = 0;
    let startY = 0;

    const onFocusout = useCallback(({ target }) => {
        setMemoText(target.value);
    }, [memoText]);

    const onMove = useCallback((e) => {
        e.preventDefault(); 
        lastX = startX - e.clientX;
        lastY = startY - e.clientY;

        startX = e.clientX;
        startY = e.clientY;

        wrapRef.current.style.top = `${wrapRef.current.offsetTop - lastY}px`;
        wrapRef.current.style.left = `${wrapRef.current.offsetLeft - lastX}px`;
    }, []);

    const removeEvent = useCallback(() => {
        document.removeEventListener('mouseup', removeEvent);
        document.removeEventListener('mousemove', onMove);
    }, []);

    const onMouseDown = useCallback((e) => {
        e.preventDefault(); 
        startX = e.clientX;
        startY = e.clientY;

        document.addEventListener('mouseup', removeEvent);
        document.addEventListener('mousemove', onMove);
    }, []);

    return (
        <Wrap ref={wrapRef}>
            <Header 
                ref={headerRef}
                onMouseDown={onMouseDown}
            >   
                <div><img src='327(16x16).png' alt="txt"/></div>
                    
                <div className='memo_name'>메모장</div>
                <HeaderButtons/>
            </Header>
            <Content>
             
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter
                        .typeString('안녕하세요')
                        .pauseFor(100)
                        .typeString('<br/>개발자')
                        .pauseFor(100)
                        .typeString('<br/>소재호입니다')
                        .start()
                        .pauseFor(100)
                    }}
                />
                
               
            </Content>
        </Wrap>
    );
};

export default Memo;

const Wrap = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 500px;

    background: white;
    border-radius: 5px;
    box-sizing: border-box;
`;
const Header = styled.div`
    display: flex;
    padding: 5px 5px 3px 5px;
    width: 190;
    font-size: 14px;
    font-weight: 700;
    font-family: "Noto-Sans";
    text-shadow: rgb(0, 0, 0) 1px 1px;
    
    color: white;
    border-radius: 5px 5px 0px 0px;
    background: linear-gradient(rgb(0, 88, 238) 0%, rgb(53, 147, 255) 4%, rgb(40, 142, 255) 6%, rgb(18, 125, 255) 8%, rgb(3, 111, 252) 10%, rgb(2, 98, 238) 14%, rgb(0, 87, 229) 20%, rgb(0, 84, 227) 24%, rgb(0, 85, 235) 56%, rgb(0, 91, 245) 66%, rgb(2, 106, 254) 76%, rgb(0, 98, 239) 86%, rgb(0, 82, 214) 92%, rgb(0, 64, 171) 94%, rgb(0, 48, 146) 100%);
    text-align: center;
    .memo_name{
        flex: 1 0 auto;
        text-align:left;
        margin-left:3px;
    }
`;
const Content = styled.div`
    text-align:left;
    padding: 5%;
    min-height: 100px;
    overflow:scroll;
    border: 3px solid rgb(8, 49, 217);
    border-top: 0px;
    
`;