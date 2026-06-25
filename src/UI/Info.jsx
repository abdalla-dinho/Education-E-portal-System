import Row from "./Row";
import { HeaderTitle } from "./ReusableComp";
import styled from "styled-components";

const SubText = styled.p`
  margin-top: 0.1rem;
  font-size: var(--font-size-xs);
  font-weight: 400;
`;

function Info({ icon, text, subText }) {
  return (
    <Row>
      {icon}
      <HeaderTitle type="large">
        {text} <SubText>{subText}</SubText>
      </HeaderTitle>
    </Row>
  );
}

export default Info;
