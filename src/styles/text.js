import styled from "styled-components";

export const P = styled.p`
color:${props => props.color ? `${props.color}` : "#4a4a4a"};
font-size:20px;
padding:${props => props.p ? `${props.p}` : "0"};
`

export const H2 = styled.h2`
color: ${props => props.dark ? "#4a4a4a" : "#fafafa"};
font-size:40px;
`