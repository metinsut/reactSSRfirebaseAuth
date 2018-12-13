import { Link } from "react-router-dom";
import styled from "styled-components";

export const Header = styled.header`
  display:flex;
  align-items:center;
  justify-content:space-between;
  flex-wrap:wrap;
  padding:10px;
  background-color: #a76139;
`;

export const HeaderLeft = styled.div`
display:flex;
align-items:center;
padding:10px;
`
export const HeaderMid = styled.div`
display:flex;
align-items:center;
padding:10px;
`

export const HeaderRight = styled.div`
display:flex;
align-items:center;
padding:10px;
`

export const Button = styled.button`
padding:5px 10px;
color:white;
font-size:1.6rem;
border:0;
background-color:${props => props.primary ? "#654369" : "#433f80"};
cursor:pointer;
&:not(:first-child) {
    margin-left:10px;
}
&:hover, &:focus {
outline:0;
}
`

export const StyledLink = styled(Link)`
    cursor:pointer;
    color:transparent;
    background-color: transparent;
        &:not(:first-child) {
            margin-left:10px;
        }
        &:focus, &:active {
            color:transparent;
            background-color: transparent;
        }
`;