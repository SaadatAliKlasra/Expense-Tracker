import { useState } from "react";
import "./Expenses.css";
import "./ExpenseItem.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "../Expenses/ExpensesChart";

const Expenses = (props) => {
  // filter
  const [filteredYear, setFilteredYear] = useState("all");
  // filter heandler
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpense = props.expenses.filter((expense) => {
    if (filteredYear === "all") {
      return expense;
    }
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesChart expenses={filteredExpense} />
      <ExpensesList items={filteredExpense} />
    </Card>
  );
};

export default Expenses;
