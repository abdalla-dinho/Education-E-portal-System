import { SpinnerInfinity } from "spinners-react";
import styled from "styled-components";

const StyledSpinnerFull = styled.div`
  position: absolute;
  top: 50%;
  right: 40%;
  transform: translate(-50%, -50%);
`;

function SpinnerFull() {
  return (
    <StyledSpinnerFull>
      <SpinnerInfinity
        size={100}
        thickness={100}
        speed={200}
        color="#36ad47"
        secondaryColor="rgba(0, 0, 0, 0.44)"
      />
    </StyledSpinnerFull>
  );
}

export default SpinnerFull;
