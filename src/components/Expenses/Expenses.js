import { useState } from "react";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [year, setYear] = useState("2019");

  const changeYearHandler = (data) => {
    setYear(data);
    console.log(year);
  };

  const filteredExpenses = props.expenses.filter((item) => {
    return item.date.getFullYear().toString() === year;
  });

  return (
    <Card className="expenses">
      {filteredExpenses.length === 0 ? (
        <p>No Expenses found !</p>
      ) : (
        filteredExpenses.map((expense, index) => (
          <ExpenseItem
            key={index}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))
      )}
      <ExpensesChart expenses={filteredExpenses} />
      <ExpenseFilter selected={year} sendToExpenses={changeYearHandler} />
    </Card>
  );
};

export default Expenses;
