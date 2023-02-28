import React from "react";
import styled from "styled-components";

import { useState } from "react";
import { useSelector } from "react-redux";

import { Button, Modal } from "antd";

import { BANKNOTE_VALUES, COIN_VALUES } from "../redux/ducks/vendingMachine";

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;

  .modal-content {
    text-align: center;
  }
`;

const CoinBanknoteStockDisplay = () => {
  const coinStock = useSelector((state) => state.coinStock);
  const banknoteStock = useSelector((state) => state.banknoteStock);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <StyledWrapper>
      <Button type="primary" onClick={showModal}>
        Check Coin and Banknote Stock
      </Button>
      <Modal
        className="modal-content"
        title="Coin and Banknote Stock"
        closable
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <p>Coins:</p>
        <ul>
          {COIN_VALUES.map((coinValue) => (
            <li key={coinValue}>
              {coinValue} THB: Stock Left : {coinStock[coinValue]}
            </li>
          ))}
        </ul>
        <p>Banknotes:</p>
        <ul>
          {BANKNOTE_VALUES.map((banknoteValue) => (
            <li key={banknoteValue}>
              {banknoteValue} THB: Stock Left : {banknoteStock[banknoteValue]}
            </li>
          ))}
        </ul>
      </Modal>
    </StyledWrapper>
  );
};

export default CoinBanknoteStockDisplay;
