import styled from "styled-components";

import { createContext, useContext } from "react";

const StyledTable = styled.div`
  margin-top: 1rem;
  border: 1px solid var(--color-grey-200);

  font-size: var(--font-size-xs);
  background-color: var(--color-grey-0);
  border-radius: 7px;
  overflow: hidden;
`;

const CommonRow = styled.header`
  display: grid;
  grid-template-columns: ${(props) => props.columns};
  column-gap: 2rem;
  align-items: center;
  transition: none;
`;

const StyledHeader = styled(CommonRow)`
  padding: 1.2rem 2rem;

  background-color: var(--color-grey-50);
  border-bottom: 1px solid var(--color-grey-100);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-600);
`;

const StyledRow = styled(CommonRow)`
  padding: 1.2rem 2.4rem;
  gap: 1rem;

  > p {
    font-size: 1rem;
    color: var(--color-grey-700);
  }

  span {
    font-size: 1rem;
    color: var(--color-grey-700);
    font-family: var(--font-table);
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;

const StyledFooter = styled.footer`
  background-color: var(--color-grey-200);
  display: flex;
  padding: 1.2rem;
  gap: 8rem;

  > p {
    color: var(--color-grey-800);
    font-size: 1.1rem;
    font-weight: 700;

    > span {
      color: #f24e4e;
      padding-left: 0.1rem;
      font-size: 1rem;
    }
  }

  &:not(:has(*)) {
    display: none;
  }
`;

// const Empty = styled.p`
//   font-size: 1.6rem;
//   font-weight: 500;
//   text-align: center;
//   margin: 2.4rem;
// `;

const TableContext = createContext();

function Table({ children, columns }) {
  return (
    <StyledTable>
      <TableContext.Provider value={columns}>{children}</TableContext.Provider>
    </StyledTable>
  );
}

function Header({ children }) {
  const columns = useContext(TableContext);

  return <StyledHeader columns={columns}>{children}</StyledHeader>;
}

function Row({ children }) {
  const columns = useContext(TableContext);

  return <StyledRow columns={columns}>{children}</StyledRow>;
}

function Footer({ children }) {
  return <StyledFooter>{children}</StyledFooter>;
}

Table.Header = Header;
Table.Row = Row;
Table.Footer = Footer;

export default Table;
