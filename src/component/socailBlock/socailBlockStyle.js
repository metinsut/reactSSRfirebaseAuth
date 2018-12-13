import styled from "styled-components";

export const SocailBlock = styled.section`
  display:flex;
  flex-direction:column;
`;
export const Social = styled.section`
  background-color:${props => props.bc ? `${props.bc}` : "transparent"};
  border-radius:4px;
  cursor:pointer;
`;
