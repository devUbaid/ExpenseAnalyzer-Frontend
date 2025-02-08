import React, { useEffect } from "react";
import { useGlobalContext } from "../../context/globalContext";
import { InnerLayout } from "../../styles/Layouts";
import IncomeItem from "../IncomeItem/IncomeItem.js";
import ExpenseForm from "../Expenses/ExpenseForm.js";
import "./Expenses.css"; // Import the CSS file

function Expenses() {
  const { addIncome, expenses, getExpenses, deleteExpense, totalExpenses } =
    useGlobalContext();

  useEffect(() => {
    getExpenses();
  }, []);

  return (
    <div className="expense-styled">
      <InnerLayout>
        <h1>EXPENSES</h1>
        <h2 className="total-incomes">
          Total Expense: <span>${totalExpenses()}</span>
        </h2>
        <div className="income-content">
          <div className="form-container">
            <ExpenseForm />
          </div>
          <div className="incomes">
            {expenses.map((income) => {
              const {
                _id,
                title,
                amount,
                date,
                category,
                description,
                type,
              } = income;
              console.log(income);
              return (
                <IncomeItem
                  key={_id}
                  id={_id}
                  title={title}
                  description={description}
                  amount={amount}
                  date={date}
                  type={type}
                  category={category}
                  indicatorColor="var(--color-green)"
                  deleteItem={deleteExpense}
                />
              );
            })}
          </div>
        </div>
      </InnerLayout>
    </div>
  );
}

export default Expenses;
