/* eslint-disable react/no-unknown-property */
// Write your code here
import './index.css'

const TransactionItem = props => {
  const {details, deletingTransaction} = props
  const {title, amount, type, id} = details

  const onClickDelete = () => {
    deletingTransaction(id)
  }

  return (
    <li className="lis" key={id}>
      <div className="liss">
        <p className="addedListItem">{title}</p>
        <p className="addedListItem">Rs {amount}</p>
        <p className="addedListItem">{type}</p>
        <button
          className="b"
          type="button"
          testid="delete"
          onClick={onClickDelete}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
            alt="delete"
            className="imgge"
          />
        </button>
      </div>
    </li>
  )
}

export default TransactionItem
