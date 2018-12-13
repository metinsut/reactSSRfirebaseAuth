import styled from "styled-components";

export const FormRoot = styled.form`
width:500px;
display:flex;
flex-direction:column;

`

export const FormTitle = styled.div`
padding:10px;
`

export const FormBlock = styled.div`
padding:10px 0;

`
export const FormItem = styled.div`
padding:10px;
display:flex;
justify-content:${props => props.end ? "flex-end" : "flex-start"};

`


export const InputBlock = styled.div`
width:100%;

`

export const InputName = styled.div`
padding:0 0 3px 0;

`

export const InputItem = styled.div`
border:2px solid #9e9ea5;
border-radius:6px;
overflow:hidden;
width:100%;
`

export const Input = styled.input`
width:100%;
height: 40px;
border:0;
font-size:1.8rem;
padding:0 10px;
outline:0;
`
export const Submit = styled(Input)`
width:auto;
border-radius:6px;
background-color:#4b5fbf;
color:white;
cursor:pointer;
`

