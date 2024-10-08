import styled, { keyframes } from "styled-components"
import CasyImg from "./casy.jpg"

const animateContainer = keyframes`
    0% {
        transfrom: rotate(0deg);
    } 
    25% {
        transfrom: rotate(45deg);
    } 
    50% {
        transfrom: rotate(90deg);
    }
    75% {
        transfrom: rotate(180deg);
    }
    100% {
    }
    
`

export const LoginContainer = styled.div`
    margin: 0, auto;
    display: flex;
    flex-direction: column;
    &.animate {
        animation: ${animateContainer} 1s linear;
        transform: rotate(180deg) translateY(400px);
        transition: 1s linear;
    }
`

const animateLogo = keyframes`
    0% {
        border-radius: 0 0 0 0;
        transfrom: rotate(0deg);
    } 
    25% {
        border-radius: 25%;
        transfrom: rotate(45deg);
    } 
    50% {
        border-radius: 50%;
        transfrom: rotate(90deg);
    }
    75% {
        border-radius: 75%;
        transfrom: rotate(180deg);
    }
    100% {
        transform: scale(0)
    }
    
`

export const FormAnimation = styled.div`
    width: 250px;
    height: 250px;
    background: ${(props) => props.background || `url(${CasyImg}) center/cover`};
    margin: 0 auto;
    text-align: center;
    display: flex;
    flex-direction: column;
    margin-top: 75px;
    border: 10px solid ${(props) => props.borderColor || "#333"};
    border-radius: 5px;
    box-shadow: 15px 15px 15px rgba(0, 0, 0, 0.2);
    &.animate {
        animation: ${animateLogo} 1s linear;
        transform: rotate(180deg);
        border-radius: 50%;
        transform: scale(0);
        transition: 1s linear;
    }
    
`
