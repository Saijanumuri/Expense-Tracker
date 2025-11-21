import { PieChart, Pie, Cell, Tooltip } from "recharts";
import React, { useContext } from "react";
import { UserContext } from "./WalletContext";

export default function ExpenseChart() {
    //   let colors = ["#A000FF", "#FF9304", "#FDE006"];
    const categoryColors = {
        Food: "#A000FF",
        Entertainment: "#FF9304",
        Travel: "#FDE006"
    };

    const { fdata } = useContext(UserContext);
  

    return (
        <div>
            <PieChart width={199} height={199}>
                <Pie
                    data={fdata}
                    dataKey="price"
                    nameKey="category"
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    label
                >
                    {fdata.map((entry, index) => (
                        <Cell key={index} fill={categoryColors[entry.category] || "#ccc"}
                        />
                    ))}
                </Pie>

                <Tooltip />
            </PieChart>


            {/* Legend */}
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    fontFamily: "Open Sans",
                    fontWeight: 400,
                    fontSize: "12px",
                }}
            >
                <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                    <div
                        style={{ backgroundColor: "#A000FF", width: "26px", height: "8px" }}
                    ></div>
                    <p style={{ color: "white" }}>Food</p>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                    <div
                        style={{ backgroundColor: "#FF9304", width: "26px", height: "8px" }}
                    ></div>
                    <p style={{ color: "white" }}>Entertainment</p>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                    <div
                        style={{ backgroundColor: "#FDE006", width: "26px", height: "8px" }}
                    ></div>
                    <p style={{ color: "white" }}>Travel</p>
                </div>
            </div>
        </div>
    );
}
