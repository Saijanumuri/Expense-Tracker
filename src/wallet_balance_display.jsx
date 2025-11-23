import React, { useState, useContext } from "react";
import { UserContext } from "./WalletContext";
import Modal from "react-modal";
function Wallet_balance_display() {
    const { walbal, setWalbal } = useContext(UserContext);


    let [inbal, setInbal] = useState(0);
    let [isOpen, setIsOpen] = useState(false);





    return (

        <div className="Wallet_display" >
            <p style={{ fontFamily: "Ubuntu", fontWeight: 400, fontSize: "30px" }}>
                Wallet Balance: <span style={{ color: "#9DFF5B", fontFamily: "Ubuntu", fontWeight: 700, fontSize: "30px" }}>₹{walbal}</span>
            </p>
            <button id="add-income-btn" type="button" onClick={() => setIsOpen(true)} style={{ width: "167.65px", height: "38px", borderRadius: "15px", fontFamily: "Ubuntu", fontWeight: 700, fontSize: "16px", color: "white", backgroundColor: "#B5DC52", border: "none " }}>+ Add Income</button>

            <Modal
                isOpen={isOpen}
                onRequestClose={() => setIsOpen(false)}
                style={{
                    content: {
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        borderRadius: "15px",
                        backgroundColor: "white",
                        width: "538px",
                        height: "164px"
                    },
                    overlay: {
                        backgroundColor: "rgba(0,0,0,0.5)"
                    }
                }}
            >
                <p style={{ fontFamily: "Ubuntu", fontWeight: 700, fontSize: "30px", color: "black" }}>
                    Add Balance
                </p>

                {/* <div style={{ display: "flex", gap: "13px" }}>
                        <input type="number" placeholder="Income Amount" value={inbal} onChange={(e) => setInbal(e.target.value)}
                            style={{
                                width: "217px",
                                height: "51px",
                                borderRadius: "15px",
                                border: "none",
                                backgroundColor: "#FBFBFB",
                                fontSize: "16px",
                                fontFamily: "Open Sans"
                            }}
                        />

                        <button style={{
                            width: "145px",
                            height: "51px",
                            borderRadius: "15px",
                            border: "none",
                            backgroundColor: "#F4BB4a",
                            color: "white",
                            fontSize: "16px",
                            fontFamily: "Open Sans"
                        }} onClick={() => {
                            if (inbal == 0) {
                                alert("Please enter amount to add");
                                return;
                            }

                            setWalbal(w => w + Number(inbal));
                            setInbal(0);
                            setIsOpen(false);
                        }}>

                            Add Amount
                        </button>

                        <button
                            onClick={() => {
                                setIsOpen(false)

                            }}
                            style={{
                                width: "112px",
                                height: "51px",
                                borderRadius: "15px",
                                border: "none",
                                backgroundColor: "#FBFBFB",
                                fontSize: "16px",
                                fontFamily: "Open Sans"
                            }}
                        >
                            Cancel
                        </button>
                    </div> */}

                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        if (inbal == 0) {
                            alert("Please enter amount to add");
                            return;
                        }

                        setWalbal(w => w + Number(inbal));
                        setInbal(0);
                        setIsOpen(false);
                    }}
                    style={{ display: "flex", gap: "13px" }}
                >
                    <input
                        type="number"
                        placeholder="Income Amount"
                        value={inbal}
                        onChange={(e) => setInbal(e.target.value)}
                        style={{
                            width: "217px",
                            height: "51px",
                            borderRadius: "15px",
                            border: "none",
                            backgroundColor: "#FBFBFB",
                            fontSize: "16px",
                            fontFamily: "Open Sans"
                        }}
                    />

                    {/* ✔ REQUIRED BY CYPRESS */}
                    <button
                        type="submit"
                        style={{
                            width: "145px",
                            height: "51px",
                            borderRadius: "15px",
                            border: "none",
                            backgroundColor: "#F4BB4a",
                            color: "white",
                            fontSize: "16px",
                            fontFamily: "Open Sans"
                        }}
                    >
                        Add Balance
                    </button>

                    <button
                        type="button"
                        onClick={() => setIsOpen(false)}
                        style={{
                            width: "112px",
                            height: "51px",
                            borderRadius: "15px",
                            border: "none",
                            backgroundColor: "#FBFBFB",
                            fontSize: "16px",
                            fontFamily: "Open Sans"
                        }}
                    >
                        Cancel
                    </button>
                </form>
            </Modal >




        </div >


    )
}
export default Wallet_balance_display;