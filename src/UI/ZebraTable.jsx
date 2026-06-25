import styled from "styled-components";

const StyledTable = styled.div`
  display: flex;
  flex-direction: column; /* stack rows vertically */
  background-color: #fff;
  margin-top: 1rem;

  border: 1px solid var(--color-grey-100);
`;

const StyledHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  background-color: var(--color-grey-200);
  padding: 1rem;
  width: 100%;
  font-size: var(--font-size-sm);
  column-gap: 3rem;
  border-bottom: 1px solid var(--color-grey-50);
  background-color: var(--color-grey-50);
`;

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-items: center;
  column-gap: 3rem;
  padding: 1rem;

  border: 1px solid var(--color-grey-200);

  /* Apply zebra striping to rows */

  &:nth-child(odd) {
    background-color: var(--color-grey-100);
  }

  &:nth-child(even) {
    background-color: var(--color-grey-200); /* light gray */
  }
`;

function ZebraTable({ children }) {
  return <StyledTable>{children}</StyledTable>;
}

function Header({ children }) {
  return <StyledHeader>{children}</StyledHeader>;
}

function Row({ children }) {
  return <TableRow>{children}</TableRow>;
}

ZebraTable.Header = Header;
ZebraTable.Row = Row;

export default ZebraTable;

// LmRghlN8TFrlzkur
