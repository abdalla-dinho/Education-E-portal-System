function Student_payment({ payment, balance }) {
  const { entered_by, particulars, refr_no, date, paid_amount } = payment;

  console.log(balance);
  return (
    <>
      <span>{date}</span>
      <span>00{refr_no}</span>
      <span>{particulars}</span>
      <span>{entered_by}</span>
      <span>{paid_amount}</span>
      <span></span>
      <span>{balance}</span>
    </>
  );
}

export default Student_payment;
