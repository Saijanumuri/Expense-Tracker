import React, { useContext } from "react"
import { UserContext } from "./WalletContext"
export default function Expense_list() {
    const { expenses } = useContext(UserContext);
    console.log(expenses)
    return (
        <div className="expenselist">
            {expenses.length!=0?expenses.map((item)=><><h2 style={{color:"black"}}>{item.title}</h2>
            <p>{item.price}</p><hr/></>):<p>No Transactions</p>}

        </div>
    )
}