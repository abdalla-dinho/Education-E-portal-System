import {
  cloneElement,
  createContext,
  createElement,
  useContext,
  useState,
} from "react";
import styled, { keyframes } from "styled-components";

// Fade in animation
const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

// Slide in animation
const slideDown = keyframes`
  from { transform: translateY(-30px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;

  animation: ${fadeIn} 0.3s ease-out;
  justify-content: center;
  z-index: 1000;
  overflow: scroll;
`;

const ModalBox = styled.div`
  background: #fff;
  padding: 12rem 1rem 1rem 1rem;
  border-radius: 12px;
  width: 70%;
  max-width: 90%;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  animation: ${slideDown} 0.3s ease-out;
  position: relative;
`;

const StyledWindow = styled.div`
  margin-top: 50%;
`;

const CloseModal = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
  border: none;
  background: transparent;
  font-size: 1.5rem;
  cursor: pointer;
`;

const ModalContext = createContext();

export default function Modal({ children }) {
  const [open, setIsOpen] = useState("");

  return (
    <Overlay>
      <ModalContext.Provider
        value={{
          open,
          setIsOpen,
        }}
      >
        <ModalBox>{children}</ModalBox>
      </ModalContext.Provider>
    </Overlay>
  );
}

function Window({ children }) {
  return <StyledWindow>{children}</StyledWindow>;
}

function Open({ children }) {
  return children;
}
function Close({ children }) {
  return <CloseModal>{children}</CloseModal>;
}

Modal.Window = Window;
Modal.Open = Open;
Modal.Close = Close;
