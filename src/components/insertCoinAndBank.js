import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { insertBanknote, insertCoin } from "../redux/ducks/vendingMachine";

const MoneyInsertion = () => {
  const dispatch = useDispatch();
  const moneyInserted = useSelector((state) => state.moneyInserted);

  const handleCoinInsertion = (value) => {
    dispatch(insertCoin(value));
  };

  const handleNoteInsertion = (value) => {
    dispatch(insertBanknote(value));
  };

  return (
    <div>
      <h2>Insert Money</h2>
      <div>
        <p>Coins:</p>
        <button onClick={() => handleCoinInsertion(1)}>1 THB</button>
        <button onClick={() => handleCoinInsertion(5)}>5 THB</button>
        <button onClick={() => handleCoinInsertion(10)}>10 THB</button>
      </div>
      <div>
        <p>Banknotes:</p>
        <button onClick={() => handleNoteInsertion(20)}>20 THB</button>
        <button onClick={() => handleNoteInsertion(50)}>50 THB</button>
        <button onClick={() => handleNoteInsertion(100)}>100 THB</button>
        <button onClick={() => handleNoteInsertion(500)}>500 THB</button>
        <button onClick={() => handleNoteInsertion(1000)}>1000 THB</button>
      </div>
      <h3>Money Inserted: {moneyInserted} THB</h3>
    </div>
  );
};

export default MoneyInsertion;
