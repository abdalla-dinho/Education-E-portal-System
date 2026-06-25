import styled from "styled-components";
import StudentFinancial from "../features/Financial/studentFinancial";
import Header from "../UI/Header";
import { useUser } from "../features/Authentication/useUser";

const StyledPdfFile = styled.div``;

const PdfFileRow = styled.div`
  display: flex;
  justify-content: space-between;

  > img {
    width: 15%;
    height: 15%;
    padding-right: 2rem;
  }
`;

const HeadingText = styled.div`
  padding: 0.5rem 0 1rem 2rem;

  > p {
    padding: 0.3rem 0 0.5rem 0.5rem;
  }
`;

function PdfFile() {
  const date = new Date().toDateString();
  const { user, isLoading } = useUser();

  if (isLoading) return null;

  const { avatar, fullname } = user.user_metadata;
  return (
    <StyledPdfFile id="student_finance">
      <PdfFileRow>
        <HeadingText>
          <Header>Edu University</Header>
          <p>Student ledger</p>
          <p>{fullname}</p>
          <p>BCSIT year 3 semester 3 </p>
          <p>Print Date: {date}</p>
        </HeadingText>
        <img src={avatar} />
      </PdfFileRow>
      <StudentFinancial />
    </StyledPdfFile>
  );
}

export default PdfFile;
