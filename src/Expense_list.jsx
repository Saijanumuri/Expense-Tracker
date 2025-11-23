import React, { useContext } from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer
} from "recharts";
import { UserContext } from "./WalletContext";

export default function Expense_list() {
    const { expenses, fdata } = useContext(UserContext);

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "space-between",
                gap: "20px",
                padding: "20px"
            }}
        >

            
            <div
                style={{
                    width: "50%",
                    background: "white",
                    borderRadius: "20px",
                    padding: "20px",
                    boxShadow: "0px 4px 20px rgba(0,0,0,0.15)",
                    height:"max-content"
                }}
            >
                {expenses.length !== 0 ? (
                    expenses.map((item, index) => (
                        <div key={index} style={{ marginBottom: "15px" }}>
                            <h3 style={{ margin: "0", fontWeight: 600 ,color:"black"}}>
                                {item.title}
                            </h3>
                            <p style={{ margin: "3px 0 10px 0", color: "#666" }}>
                                {item.date}
                            </p>

                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center"
                                }}
                            >
                                <p
                                    style={{
                                        color: "#f6b406",
                                        fontWeight: "bold",
                                        fontSize: "18px",
                                        
                                    }}
                                >
                                    ₹{item.price}
                                </p>

                                
                                <div style={{ display: "flex", gap: "10px" }}>
                                    <button
                                        style={{
                                            background: "#ff6b6b",
                                            color: "white",
                                            border: "none",
                                            padding: "8px",
                                            borderRadius: "50%"
                                        }}
                                    >
                                        ✕
                                    </button>

                                    <button
                                        style={{
                                            background: "#f6b406",
                                            color: "white",
                                            border: "none",
                                            padding: "8px",
                                            borderRadius: "50%"
                                        }}
                                    >
                                        ✎
                                    </button>
                                </div>
                            </div>

                            <hr />
                        </div>
                    ))
                ) : (
                    <p style={{color:"black"}}>No Transactions</p>
                )}
            </div>

           
            <div
                style={{
                    width: "50%",
                    background: "white",
                    borderRadius: "20px",
                    padding: "20px",
                    boxShadow: "0px 4px 20px rgba(0,0,0,0.15)"
                }}
            >
                <h3 style={{ marginBottom: "15px" }}>Category Spending</h3>

                <div style={{ width: "100%", height: 300 }}>
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={fdata} layout="vertical">
                            <YAxis
                                type="category"
                                dataKey="category"
                                tick={{ fill: "#444", fontSize: 14 }}
                                width={120}
                            />
                            <XAxis type="number" />
                            <Tooltip />

                            <Bar
                                dataKey="price"
                                fill="#9a9ae6"
                                barSize={25}
                                radius={[10, 10, 10, 10]}
                            />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>

        </div>
    );
}
