import Wallet_balance_display from "./wallet_balance_display";
import Expense_form from "./Expense_form";
import ExpenseChart from "./ExpenseChart";
function App() {
  return (<>
    <h1>Expense Tracker</h1>
    <div className="balancediv">
      <Wallet_balance_display/>
      <Expense_form/>
      <ExpenseChart/>
     
    </div>
    
  </>
  );
}

export default App;
