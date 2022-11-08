// Write your code here
import './index.css'

const TransactionItems = props => {
  const {title, amount, type, details, deletingTransaction} = props
  const {id} = details

  const onClickDelete = () => {
    deletingTransaction(id)
  }

  return (
    <>
      <li className="lis">
        <div className="liss">
          <p className="addedListItem">{title}</p>
          <p className="addedListItem">{amount}</p>
          <p className="addedListItem">{type}</p>
        </div>
        <div>
          <button
            className="b"
            type="button"
            // testid="delete"
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
      <hr className="hr" />
    </>
  )
}

export default TransactionItems
