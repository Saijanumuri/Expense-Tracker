import App from "./App";
import React, { useState, createContext, useEffect } from "react";

export const UserContext = createContext();

export default function WalletContext() {

  
    const [walbal, setWalbal] = useState(() => {
        const saved = localStorage.getItem("walbal");
        return saved ? JSON.parse(saved) : 5000;
    });

    const [expenses, setExpenses] = useState(() => {
        const saved = localStorage.getItem("expenses"); 
        return saved ? JSON.parse(saved) : [];
    });

    const [fdata, setFdata] = useState(() => {
        const saved = localStorage.getItem("fdata");
        return saved ? JSON.parse(saved) : [
            { price: 0, category: "Food" },
            { price: 0, category: "Entertainment" },
            { price: 0, category: "Travel" }
        ];
    });


  
    useEffect(() => {
        localStorage.setItem("walbal", JSON.stringify(walbal));
    }, [walbal]);

    useEffect(() => {
        localStorage.setItem("expenses", JSON.stringify(expenses));
    }, [expenses]);

    useEffect(() => {
        localStorage.setItem("fdata", JSON.stringify(fdata));
    }, [fdata]);

    return (
        <UserContext.Provider
            value={{ walbal, setWalbal, expenses, setExpenses, fdata, setFdata }}
        >
            <App />
        </UserContext.Provider>
    );
}
