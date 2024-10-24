import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ActivePartners from './ActivePartners';
import NotConcluded from './NotConcluded';
import UnpaidYear from './UnpaidYear';
import TotalPaidInvoices from './TotalPaidInvoices';
import DebtRepayment from './DebtRepayment';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/active-partners" element={<ActivePartners/>} />
        <Route path="/non-concluded" element={<NotConcluded/>} />
        <Route path="/unpaid-year" element={<UnpaidYear/>} />
        <Route path="/total-paid-invoices" element={<TotalPaidInvoices/>} />
        <Route path="/debt-payment" element={<DebtRepayment/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
