import React from "react";
import "./App.css";

import HomeHeader from "./components/header/header";
import HomeFooter from "./components/footer/footer";
import ProductSelection from "./components/productSelection";
import CurrencyStockDisplay from "./components/currencyStockDisplay";
import ChangeDispenser from "./components/changeReturnMoney";
import InsertCoinAndBankSection from "./components/insertCoinAndBank";

const App = () => {
  return (
    <div className="App">
      <div className="home-container">
        <HomeHeader />
        <InsertCoinAndBankSection />
        <ChangeDispenser />
        <ProductSelection />
        <HomeFooter />
        <CurrencyStockDisplay />
      </div>
    </div>
  );
};

export default App;
