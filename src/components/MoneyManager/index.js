import {Component} from 'react'
import {v4} from 'uuid'

import MoneyDetails from '../MoneyDetails'

import TransactionItem from '../TransactionItem'

import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here
class MoneyManager extends Component {
  state = {
    titleInput: '',
    amountInput: '',
    typeInput: transactionTypeOptions[0].optionId,
    list: [],
  }

  submittingTransaction = event => {
    event.preventDefault()
    const {titleInput, amountInput, typeInput} = this.state

    const typeOption = transactionTypeOptions.find(
      eachTransaction => eachTransaction.optionId === typeInput,
    )
    const {displayText} = typeOption

    const newItem = {
      id: v4(),
      title: titleInput,
      amount: parseInt(amountInput),
      type: displayText,
    }
    this.setState(prevState => ({
      list: [...prevState.list, newItem],
      titleInput: '',
      amountInput: '',
      typeInput: transactionTypeOptions[0].optionId,
    }))
  }

  getExpenses = () => {
    const {list} = this.state
    let expensesAmount = 0

    list.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[1].displayText) {
        expensesAmount += eachTransaction.amount
      }
    })

    return expensesAmount
  }

  getIncome = () => {
    const {list} = this.state
    let incomeAmount = 0
    list.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[0].displayText) {
        incomeAmount += eachTransaction.amount
      }
    })

    return incomeAmount
  }

  getBalance = () => {
    const {list} = this.state
    let balanceAmount = 0
    let incomeAmount = 0
    let expensesAmount = 0

    list.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[0].displayText) {
        incomeAmount += eachTransaction.amount
      } else {
        expensesAmount += eachTransaction.amount
      }
    })

    balanceAmount = incomeAmount - expensesAmount

    return balanceAmount
  }

  onChangeTitle = event => {
    this.setState({titleInput: event.target.value})
  }

  onChangeAmount = event => {
    this.setState({amountInput: event.target.value})
  }

  onChangeType = event => {
    this.setState({typeInput: event.target.value})
  }

  deletingTransaction = id => {
    const {list} = this.state
    const remainingList = list.filter(each => id !== each.id)
    this.setState({list: remainingList})
  }

  render() {
    const {list, titleInput, amountInput, typeInput} = this.state
    // console.log(list)
    const incomeAmount = this.getIncome()
    const balanceAmount = this.getBalance()
    const expensesAmount = this.getExpenses()

    return (
      <div className="bg">
        <div className="welcomeContainer">
          <h1 className="main_heading">Hi, Richard</h1>
          <p className="para">
            Welcome back to your
            <span className="highlighting"> Money Manager</span>
          </p>
        </div>
        <div className="moneyDetailsContainer">
          <MoneyDetails
            income={incomeAmount}
            expenses={expensesAmount}
            balance={balanceAmount}
          />
        </div>
        <div className="transactionSessions">
          <div className="transactionForm">
            <h1>Add Transaction</h1>
            <form onSubmit={this.submittingTransaction}>
              <div className="inputs">
                <label htmlFor="title">TITLE</label>
                <input
                  className="inputBox"
                  type="text"
                  value={titleInput}
                  id="title"
                  onChange={this.onChangeTitle}
                />
              </div>
              <div className="inputs">
                <label htmlFor="amount">Amount</label>
                <input
                  className="inputBox"
                  type="text"
                  value={amountInput}
                  id="amount"
                  onChange={this.onChangeAmount}
                />
              </div>
              <div className="inputs">
                <label htmlFor="type">TYPE</label>
                <select
                  className="inputBox"
                  id="type"
                  onChange={this.onChangeType}
                  value={typeInput}
                >
                  {transactionTypeOptions.map(each => (
                    <option key={each.optionId} value={each.optionId}>
                      {each.displayText}
                    </option>
                  ))}
                </select>
                <div>
                  <button type="submit" className="button">
                    Add
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="transaction-list-container">
            <h1 className="history-heading">History</h1>
            <div className="list">
              <ul className="transactions-container">
                <li className="listItems" key="header">
                  <p className="listHeadings">TITLE</p>
                  <p className="listHeadings">AMOUNT</p>
                  <p className="listHeadings">TYPE</p>
                </li>
                {/* <hr className="h" /> */}
                {list.map(each => (
                  <TransactionItem
                    key={each.id}
                    details={each}
                    deletingTransaction={this.deletingTransaction}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default MoneyManager
