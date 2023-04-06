import { useState } from "react";
import "./AddExpense.css";
import ExpenseForm from "./ExpenseForm";

const AddExpense = (props) => {
  const [showForm, setShowForm] = useState(false);

  const ExpenseSaveDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    console.log(expenseData);
    props.onSaveExpenseData(expenseData);
  };

  const showFormHandle = () => {
    setShowForm(true);
  };

  const stausOfcanel = (data) => {
    setShowForm(data);
  };
  return (
    <div className="new-expense">
      {showForm ? (
        <ExpenseForm
          cancelStatus={stausOfcanel}
          onSaveExpenseData={ExpenseSaveDataHandler}
        />
      ) : (
        <button onClick={showFormHandle}>Add New Expenses</button>
      )}
    </div>
  );
};

export default AddExpense;
