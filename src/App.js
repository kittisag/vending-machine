import React from "react";
import styled from "styled-components";

import ProductSelection from "./components/productSelection";
import CurrencyStockDisplay from "./components/currencyStockDisplay";
import ChangeDispenser from "./components/changeReturnMoney";
import InsertCoinAndBankSection from "./components/insertCoinAndBank";

const App = () => {
  return (
    <div>
      <ProductSelection />
      <InsertCoinAndBankSection />
      <ChangeDispenser />
      <CurrencyStockDisplay />
    </div>
  );
};

export default App;
