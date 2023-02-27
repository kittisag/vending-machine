import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { dispenseChange } from "../redux/ducks/vendingMachine";

const ChangeDispenser = () => {
  const dispatch = useDispatch();
  const changeToReturn = useSelector((state) => state.changeToReturn);

  const handleDispenseChange = () => {
    dispatch(dispenseChange());
  };

  return (
    <div>
      <h2>Change to Return</h2>
      <p>{changeToReturn} THB</p>
      {changeToReturn > 0 && (
        <button onClick={handleDispenseChange}>Dispense Change</button>
      )}
    </div>
  );
};

export default ChangeDispenser;
