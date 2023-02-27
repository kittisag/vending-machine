import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";

import { Button, Modal } from "antd";

import { BANKNOTE_VALUES, COIN_VALUES } from "../redux/ducks/vendingMachine";

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
    <div>
      <Button type="primary" onClick={showModal}>
        Click to Show Coin and Banknote Stock
      </Button>
      <Modal
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
    </div>
  );
};

export default CoinBanknoteStockDisplay;
