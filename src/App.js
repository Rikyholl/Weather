import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from './pages/Home/components/Home';
import MonthStatic from './pages/MonthStatic/components/MonthStatic';

function App() {
  return (
    <div className="container">

      <Header />
      <Routes>
        <Route path="/*" element={ <Home /> } />
        <Route path="monthStatic" element={ <MonthStatic /> } />
      </Routes>
    </div>
  );
}

export default App;
