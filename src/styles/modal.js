import styled from "styled-components";

export const ModalRoot = styled.div`
position:fixed;
top:0;
left:0;
width: 100vw;
height: 100vh;
background-color:rgba(0,0,0,0.5);
display:flex;
justify-content:center;
padding:20px;

`


export const LoginRoot = styled.div`
position:relative;
padding:0 20px 0;
margin:7% 0 20px;
align-self:flex-start;

`

export const ExitButton = styled.div`
position:absolute;
left:100%;
cursor:pointer;

`

export const LoginWrapper = styled.div`
background-color:white;
padding:10px;
border-radius:5px;

`