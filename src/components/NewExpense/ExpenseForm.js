import { useState } from "react";

import "./ExpenseForm.css";

function ExpenseForm(props) {
  // title
  const [title, setTitle] = useState("");
  const changeTitleHandler = (event) => {
    setTitle(event.target.value);
  };
  // amount
  const [amount, setAmount] = useState("");
  const changeAmountHandler = (event) => {
    setAmount(event.target.value);
  };
  // date
  const [date, setDate] = useState("");
  const changeDateHandler = (event) => {
    setDate(event.target.value);
  };
  // form submit handler
  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: title,
      amount: +amount,
      date: new Date(date),
    };
    props.onSaveExpenseData(expenseData);
    setTitle("");
    setAmount("");
    setDate("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            placeholder="Enter Title Here..."
            value={title}
            onChange={changeTitleHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            placeholder="Enter Amount Here..."
            value={amount}
            onChange={changeAmountHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" value={date} onChange={changeDateHandler} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}
export default ExpenseForm;
