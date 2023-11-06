import styles from '../assets/BillSplitter.css'
export default function BillSplitter ({otherPerson}) {
    return (
        <div className="billSplitter">
            <h2>Split a Bill with {otherPerson}</h2>
            <form className='splitBillForm'>
                <label htmlFor="">💲 Bill Value</label>
                <input></input>
                <label htmlFor="">🕴 Your Expenses</label>
                <input></input>
                <label htmlFor="">💃 {otherPerson}'s Name  </label>
                <input></input>
                <label htmlFor="">🤑 Who's paying the bill </label>
                <select>
                    <option>
                        You
                    </option>
                    <option>
                        {otherPerson}
                    </option>
                </select>
            </form>
        </div>
    )
}