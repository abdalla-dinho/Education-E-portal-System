import BuilUfuture from "../../sections/feature sections/BuilUfuture";
import Community from "../../sections/feature sections/Community";
import Values from "../../sections/feature sections/Values";
import Statistics from "../../sections/feature sections/Statistics";
import HomePage from "../../sections/Hero/HomePage";
import Footer from "../../sections/feature sections/Footer";
import styled from "styled-components";

const StyledHome = styled.div`
  overflow: auto;
`;

function Home() {
  return (
    <StyledHome>
      <HomePage />
      <BuilUfuture />
      <Community />
      <Values />
      <Statistics />
      <Footer />
    </StyledHome>
  );
}

export default Home;
