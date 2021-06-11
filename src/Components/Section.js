import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

function Section({title, description, leftBtnText, rightBtntext, backgroundImg}) {
    return (
        <Wrap bgImage={backgroundImg}>
            <Fade bottom>
                <ItemText>
                    <h1>{title}</h1>
                    <p>{description}</p>
                </ItemText>
                <Buttons>
                    <ButtonGroup>
                        <LeftButton>
                            {leftBtnText}
                        </LeftButton>
                        {rightBtntext && 
                            <RightButton>
                                {rightBtntext}
                            </RightButton>
                        }
                        
                    </ButtonGroup>
                    <DownArrow src="/images/down-arrow.svg"/>
                </Buttons>
            </Fade>
        </Wrap>
    )
}

export default Section

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url('/images/model-3.jpg');
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center; 
    background-image: ${props => `url("/images/${props.bgImage}")`};

`
const ItemText = styled.div`
    z-index: 10;
    padding-top: 15vh;
    text-align: center;
`

const Buttons = styled.div`

`

const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 30px;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`

const LeftButton = styled.div`
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px;
    width: 256px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    margin: 8px;
`

const RightButton = styled.div`
    background: wheat;
    height: 40px;
    width: 256px;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.65;
    text-transform: uppercase;
    font-size: 12px; 
    cursor: pointer;
    margin: 8px;

`

const DownArrow = styled.img`
    margin-top: 20px;
    height: 40px;
    overflow-x: hidden;
    animation: animateDown infinite 1.5s;
    overflow: hidden;
`