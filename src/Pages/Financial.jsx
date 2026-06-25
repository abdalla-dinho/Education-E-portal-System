import styled from "styled-components";

const StyledFinancial = styled.div`
  position: absolute;

  font-size: 38px;
  font-weight: bold;
  left: 50%;
  top: 40%;
  transform: translateX(-50%);
  color: rgb(211, 92, 45);
`;

export default function Financial() {
  return <StyledFinancial>Coming soon ..</StyledFinancial>;
}
