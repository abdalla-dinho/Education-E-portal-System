import StudentFinancial from "../features/Financial/StudentFinancial";
import { FaFilePdf } from "react-icons/fa";
import styled from "styled-components";
// import PdfFile from "../utilities/PdfFile";
import Header from "../UI/Header";
import Modal from "../UI/Modal";
import { useState } from "react";
import html2pdf from "html2pdf.js";
import { usePayments } from "../features/Financial/usePayments";
import { useFinancial } from "../features/Financial/useFinancial";
import SpinnerFull from "../UI/SpinnerFull";

const StyledFinancial = styled.div`
  position: relative;
  > button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.3rem;
    margin-top: 1rem;
    padding: 0.6rem 1rem 0.6rem 1rem;
    background-color: var(--color-grey-300);
    color: var(--color-grey-600);
    border: 1px solid var(--color-grey-600);
    border-radius: 4px;
    position: absolute;
    top: -1%;
    right: 1%;
  }
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > button {
    background-color: var(--color-grey-200);

    border: 1px solid var(--color-grey-400);
    padding: 0.2rem 0.3rem;
    border-radius: 4px;
    position: absolute;
    top: 35%;
    right: 2%;
  }
`;

function Financial() {
  const [openModal, setOpenModal] = useState(false);

  const { isLoading } = useFinancial();
  const { isLoading: isLoading2 } = usePayments();
  if (isLoading || isLoading2) return <SpinnerFull />;

  const handleClick = () => {
    const element = document.getElementById("student_finance");
    const opt = {
      filename: "StudentLedger.pdf",
      html2canvas: { useCORS: true },
    };

    // html2pdf(element, { html2canvas: { useCORS: true } }).save("studentLedger");
    html2pdf().set(opt).from(element).save();
    setOpenModal((open) => !open);
  };
  return (
    <StyledFinancial>
      {/* <StudentFinancial /> */}
      <Header as="h1">student financial</Header>

      {openModal && (
        <Modal>
          <Modal.Open>
            <Row>
              <button onClick={handleClick}>
                <FaFilePdf />
              </button>
            </Row>
          </Modal.Open>
          <Modal.Window>
            {/* <PdfFile /> */}
            <p>pdf</p>
          </Modal.Window>
        </Modal>
      )}
      <button onClick={() => setOpenModal((op) => !op)}>
        <span>Print ledger</span>
        <FaFilePdf size={20} />
      </button>

      <StudentFinancial />
    </StyledFinancial>
  );
}

export default Financial;
