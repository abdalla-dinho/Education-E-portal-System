function Studentfee_structure({ studFinance }) {
  const { date, Fee_amount, decs, Entered_by, refr_no, balance } = studFinance;

  return (
    <>
      <span>{date}</span>
      <span>00{refr_no}</span>
      <span>{decs}</span>
      <span>{Entered_by}</span>
      <span></span>
      <span>{Fee_amount}</span>
      <span>{balance}</span>
    </>
  );
}

export default Studentfee_structure;
