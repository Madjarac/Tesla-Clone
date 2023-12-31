import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';



function Section({ title, description, backgroundImg, leftBtnText, rightBtnText, downImg  }) {

  return (
    <Wrap bgImage={backgroundImg}>

        <Fade bottom>
            <ItemText>
                <h1>{title}</h1>
                <p>{description}</p>
            </ItemText>
        </Fade>

        <Buttons>
            <Fade bottom>
                <ButtonGroup>
                    <LeftButton>
                        {leftBtnText}
                    </LeftButton>
                        {rightBtnText &&
                            <RightButton>
                            {rightBtnText}
                            </RightButton>
                        }
                </ButtonGroup>
            </Fade>
            <DownArrow src="images/down.png"/>
            {/* <KeyboardArrowDownIcon1 /> */}
        </Buttons>
    </Wrap>
  )
}

export default Section

// ------Style------//
const Wrap = styled.div`
    width: 100wv;
    height: 100vh;
    background-image: url("images/models2.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-image: ${props => `url("/images/${props.bgImage}")` }
    
`

const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
`

const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 30px;
    @media (max-width: 780px) {
        flex-direction: column;
    }
`

const LeftButton = styled.div`
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px;
    width: 256px;
    color: white;
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

const RightButton = styled(LeftButton)`
    background: white;
    opacity: 0.65;
    color: black;
`
const DownArrow = styled.img`
    margin-top: 20px;
    overflow-x: hidden;
    margin-bottom: 10px;
    height: 30px;
    animation: animateDown infinite 1.5s;
`

const Buttons = styled.div`

`


