import Wallet_balance_display from "./wallet_balance_display";
import Expense_form from "./Expense_form";
import ExpenseChart from "./ExpenseChart";
import Expense_list from "./Expense_list";
function App() {
  return (<>
    <h1>Expense Tracker</h1>
    <div className="balancediv">
      <Wallet_balance_display/>
      <Expense_form/>
      <ExpenseChart/>
      
     
    </div>
    <h2 style={{fontSize:"28px"}}>Recent Transactions</h2>
    <Expense_list/>
    
  </>
  );
}

export default App;
