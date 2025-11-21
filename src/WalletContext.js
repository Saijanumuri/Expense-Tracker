import App from "./App";
import React, { useState, createContext, useContext } from "react"
export const UserContext = createContext();
export default function WalletContext() {
    let [walbal, setWalbal] = useState(5000);
    let [expenses, setExpenses] = useState([]);
    let [fdata, setFdata] = useState([{
        price:0,
        category: "Food",
    },{
        price: 0,
        category: "Entertainment",
    },{
        price: 0,
        category: "Travel",
    }]);
    return (<>

        <UserContext.Provider value={{ walbal, setWalbal, expenses, setExpenses, fdata, setFdata }}>
            <App />
        </UserContext.Provider>

    </>)
}