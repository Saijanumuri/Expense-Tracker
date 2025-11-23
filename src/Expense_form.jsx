import React, { useState, createContext, useEffect, useContext } from "react";
import { UserContext } from "./WalletContext";
import Modal from "react-modal"
import Wallet_balance_display from "./wallet_balance_display"
Modal.setAppElement('#root');


function Expense_form() {
    let [isOpen, setIsOpen] = useState(false);
    let [amt, setAmt] = useState(0)
    const { walbal, setWalbal, expenses, setExpenses, fdata, setFdata } = useContext(UserContext);
    const totalExpense = expenses.reduce((sum, item) => sum + Number(item.price), 0);

    //localStorage.setItem("data", JSON.stringify({ bal: walbal, exp: expenses }));

    const [form, setForm] = useState({
        title: "",
        price: "",
        category: "",
        date: ""
    })
    
    
    // const [expenses, setExpenses] = useState([]);
    const handlechage = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };
    const handlesubmit = (e) => {
        e.preventDefault();
        if (Number(form.price) > walbal) {
            alert("Balance Exceed");
            return;
        }
        setExpenses([...expenses, {
            ...form,
            price: Number(form.price)
        }])
        setForm({
            title: "",
            price: "",
            category: "",
            date: ""
        })
        setFdata(prev =>
            prev.map(item =>
                item.category === form.category
                    ? { ...item, price: item.price + Number(form.price) }
                    : item
            )
        );

        setWalbal(w => w - Number(form.price));



        console.log("Form submitted:", form);
        setIsOpen(false);


    };

    return (
        <div className="Wallet_display">
            <p style={{ fontFamily: "Ubuntu", fontWeight: 400, fontSize: "30px" }}>
                Expenses: <span style={{ color: "#F4BB4A", fontFamily: "Ubuntu", fontWeight: 700, fontSize: "30px" }}>₹{totalExpense}</span>
            </p>
            <button onClick={() => setIsOpen(true)} style={{ width: "167.65px", height: "38px", borderRadius: "15px", fontFamily: "Ubuntu", fontWeight: 700, fontSize: "16px", color: "white", backgroundColor: "#FF4747", border: "none " }}>+ Add Expense</button>
            <Modal isOpen={isOpen}
                onRequestClose={() => setIsOpen(false)}
                style={{
                    content: {
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        borderRadius: "15px",
                        backgroundColor: "#D9D9D9",
                        width: "538px",
                        height: "335px"
                    },
                    overlay: {
                        backgroundColor: "rgba(0,0,0,0.5)"
                    }
                }}
            >
                <p style={{ fontFamily: "Ubuntu", fontWeight: 700, fontSize: "30px" }}>
                    Edit Expenses
                </p>
                <form style={{ display: "flex", gap: "40px", flexWrap: "wrap" }} onSubmit={handlesubmit}>
                    <input style={{ fontFamily: "Open Sans", fontSize: "16px", fontWeight: 400, width: "223px", height: "51px", borderRadius: "15px", border: "none" }} placeholder="Title" name="title" value={form.title} onChange={handlechage} />
                    <input style={{ fontFamily: "Open Sans", fontSize: "16px", fontWeight: 400, width: "223px", height: "51px", borderRadius: "15px", border: "none" }} placeholder="Price" name="price" value={form.price} onChange={handlechage} />
                    <select name="category" style={{ fontFamily: "Open Sans", fontSize: "16px", fontWeight: 400, width: "223px", height: "51px", borderRadius: "15px", border: "none" }} value={form.category} onChange={handlechage}>
                        <option value="" selected>Select Category</option>
                        <option value="Food">Food</option>
                        <option value="Entertainment">Entertainment</option>
                        <option value="Travel">Travel</option>
                    </select>
                    <input style={{ fontFamily: "Open Sans", fontSize: "16px", fontWeight: 400, width: "223px", height: "51px", borderRadius: "15px", border: "none" }} placeholder="dd/mm/yy" type="date" name="date" value={form.date} onChange={handlechage} />
                    <button type="submit" style={{ fontFamily: "Open Sans", fontSize: "16px", fontWeight: 400, width: "223px", height: "51px", borderRadius: "15px", border: "none", backgroundColor: "#F4BB4A", color: "white" }}  >Add Expense</button>
                    <button type="button" style={{ fontFamily: "Open Sans", fontSize: "16px", fontWeight: 400, width: "223px", height: "51px", borderRadius: "15px", border: "none", backgroundColor: "#F4BB4A", color: "white" }} onClick={() => setIsOpen(false)}>Cancel</button>
                </form>


            </Modal>

        </div>
    )
}
export default Expense_form;