/* eslint-disable react/no-unknown-property */
// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {income, expenses, balance} = props

  return (
    <>
      <div className="moneyCard1">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="img"
        />
        <div className="mc">
          <p className="moneyDetailsHeadings">Your Balance</p>
          <p className="moneyDetailsAmounts" testid="balanceAmount">
            Rs
            {balance}
          </p>
        </div>
      </div>
      <div className="moneyCard2">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="img"
        />
        <div className="mc">
          <p className="moneyDetailsHeadings">Your Income</p>
          <p className="moneyDetailsAmounts" testid="incomeAmount">
            Rs {income}
          </p>
        </div>
      </div>
      <div className="moneyCard3">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="img"
        />
        <div className="mc">
          <p className="moneyDetailsHeadings">Your Expenses</p>
          <p className="moneyDetailsAmounts" testid="expensesAmount">
            Rs {expenses}
          </p>
        </div>
      </div>
    </>
  )
}

export default MoneyDetails
