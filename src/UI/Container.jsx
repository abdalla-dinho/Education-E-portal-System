import styled, { css } from "styled-components";
import { SubHeader } from "./ReusableComp";

{
  /* <Container>
  <div>
    <FaLeaf size={48} />
    <SubHeader>Grow together</SubHeader>
    <Pragraph type="small">
      Learning is most powerful when it’s shared. Our e-portal is designed to
      help students, teachers, and the wider community grow side by side
    </Pragraph>
  </div>
  <div>
    {/* <FaLeaf size={48} /> */
}
//     <GiWorld size={48} />
//     <SubHeader>A better place for All</SubHeader>
//     <Pragraph type="small">
//       Whether it’s learning, sharing, or supporting one another, this is a place
//       where every voice matters and every individual belongs.
//     </Pragraph>
//   </div>
//   <div>
//     {/* <FaLeaf size={48} /> */}
//     <FaEye size={48} />
//     <SubHeader>Shaping Tomorrow, Together</SubHeader>
//     <Pragraph type="small">
//       Whether it’s learning, sharing, or supporting one another, this is a place
//       where every voice matters and every individual belongs.
//     </Pragraph>
//   </div>
//   <div>4</div>
//   <div>5</div>
//   <div>6</div>
// </Container>; }

const Pragraph = styled.p`
  margin-top: 0.8rem;
  font-size: var(--font-size-xs);
  color: var(--color-grey-500);
  line-height: 1.6;
  font-family: "Open Sans", sans-serif;
`;

function Container({ Header, icon, children }) {
  return (
    <div>
      {icon}
      <SubHeader>{Header}</SubHeader>
      <Pragraph>
        {/* Learning is most powerful when it’s shared. Our e-portal is designed
          to help students, teachers, and the wider community grow side by side */}
        {children}
      </Pragraph>
    </div>
  );
}

export default Container;
