import React from "react";

import styled from "styled-components";
import { Button } from "antd";

import { useDispatch, useSelector } from "react-redux";
import { dispenseChange } from "../redux/ducks/vendingMachine";

const StyledWrapper = styled.div`
  .change-title-text {
    font-weight: bold;
  }

  .change-amount-text {
    font-size: 20px;
  }

  .change-button {
    font-weight: bolder;
    color: ghostwhite;
    background: #0077b6;
  }
`;

const ChangeDispenser = () => {
  const dispatch = useDispatch();
  const changeToReturn = useSelector((state) => state.changeToReturn);

  const handleDispenseChange = () => {
    dispatch(dispenseChange());
  };

  return (
    <StyledWrapper>
      {changeToReturn > 0 && (
        <>
          <h2>Change to Return</h2>
          <p className="change-title-text">
            <span className="change-amount-text">{changeToReturn} </span> THB
          </p>
          <Button className="change-button" onClick={handleDispenseChange}>
            Change Return
          </Button>
        </>
      )}
    </StyledWrapper>
  );
};

export default ChangeDispenser;
