import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Car Insurance",
    amount: 200,
    date: new Date(2022, 1, 2),
  },
  {
    id: "e2",
    title: "Grocery",
    amount: 320.3,
    date: new Date(2022, 3, 4),
  },
  {
    id: "e3",
    title: "Buying Stuff",
    amount: 42.32,
    date: new Date(2020, 2, 21),
  },
];
function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => [expense, ...prevExpenses]);
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
