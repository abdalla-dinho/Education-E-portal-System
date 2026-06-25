import Table from "../../UI/Table";
import SpinnerFull from "../../UI/SpinnerFull";
import { useFinancial } from "./useFinancial";
import { usePayments } from "./usePayments";
import Studentfee_structure from "./Studentfee_structure";
import Student_payment from "./Student_payment";

function StudentFinanceRow() {
  const { student_finance } = useFinancial();
  const { payments } = usePayments();

  const totalFee = student_finance.at(-1).balance;
  const paidAmounts = payments.map((item) => item.paid_amount);

  let runningBalance = totalFee;
  const balance = [];

  for (const payment of paidAmounts) {
    runningBalance -= payment;

    balance.push(runningBalance);
  }

  console.log(balance);
  return (
    <div>
      <Table.Row>
        {student_finance.map((studFinance) => (
          <Studentfee_structure
            studFinance={studFinance}
            key={studFinance.id}
          />
        ))}

        {payments.map((payment, i) => (
          <Student_payment
            payment={payment}
            key={payment.id}
            balance={balance[i]}
          />
        ))}
      </Table.Row>
    </div>
  );
}

export default StudentFinanceRow;
