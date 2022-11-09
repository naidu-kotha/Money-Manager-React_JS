/* eslint-disable react/no-unknown-property */
import './index.css'

const MoneyDetails = props => {
  const {newBalance = 0, income = 0, expenses = 0} = props

  return (
    <div className="money-details-container">
      <div className="amount-container bg-balance">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="balance-image"
        />
        <div className="money-container">
          <p className="amount-type">Your Balance</p>
          <p className="amount" testid="balanceAmount">
            Rs {newBalance}
          </p>
        </div>
      </div>
      <div className="amount-container bg-income">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="balance-image"
        />
        <div className="money-container">
          <p className="amount-type">Your Income</p>
          <p className="amount" testid="incomeAmount">
            Rs {income}
          </p>
        </div>
      </div>
      <div className="amount-container bg-expenses">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="balance-image"
        />
        <div className="money-container">
          <p className="amount-type">Your Expenses</p>
          <p className="amount" testid="expensesAmount">
            Rs {expenses}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
