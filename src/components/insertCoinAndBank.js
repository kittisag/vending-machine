import React from "react";
import { useDispatch, useSelector } from "react-redux";

import styled from "styled-components";
import { Button, Col, Collapse, Row } from "antd";
import AnimatedNumber from "animated-number-react";

import { insertBanknote, insertCoin } from "../redux/ducks/vendingMachine";

const { Panel } = Collapse;

const StyledWrapper = styled.div`
  margin-top: 24px;
  text-align: center;

  .title {
    font-size: 18px;
  }

  .ant-btn-primary:not(:disabled):hover {
    background-color: darkorange;
  }

  .coins-insert-sections {
    display: flex;
    justify-content: center;
    padding: 20px;
    margin-top: -20px;
  }

  .ant-collapse-expand-icon {
    color: white;
  }

  .collapse-header {
    font-weight: bold;
    background-color: #0096c7;
  }

  .ant-collapse-header-text {
    font-size: 16px;
    color: white;
  }

  .coin-button {
    font-weight: 800;
    color: white;
    background-color: #023e8a;
    margin-right: 12px;
  }

  .banknotes-button {
    font-weight: 800;
    color: white;
    background-color: #023e8a;
    margin-right: 12px;
  }

  .coins-icon {
    vertical-align: middle;
    width: 30px;
    margin-right: 8px;
  }

  .banknotes-icon {
    vertical-align: middle;
    width: 38px;
    margin-right: 8px;
  }

  .money-insert-amount {
    font-weight: bolder;
    font-size: 24px;
    color: #03045e;
  }

  .money-insert-title {
    color: #0096c7;
  }

  .banknotes-col {
    margin-top: 16px;
    margin-right: 8px;
  }

  @media only screen and (min-width: 768px) {
    .bank-insert-sections .ant-row {
      justify-content: center;
    }
  }

  @media only screen and (max-width: 450px) {
    .money-insert-title {
      font-size: 24px;
    }
    .coins-insert-sections {
      margin-top: 8px;
      padding: 0;
    }
    .ant-collapse {
      width: 350px;
    }

    .banknotes-col {
      margin-top: 6px;
    }

    .banknotes-button {
      margin-top: 8px;
    }
  }

  @media only screen and (max-width: 375px) {
    .ant-collapse {
      width: 310px;
    }

    .ant-collapse-content-box {
      padding: 0;
    }

    .coin-button {
      font-size: 11px;
    }

    .banknotes-button {
      font-size: 11px;
    }
  }
`;

const MoneyInsertion = () => {
  const dispatch = useDispatch();
  const moneyInserted = useSelector((state) => state.moneyInserted);

  const COINS = [
    { name: "1", value: 1 },
    { name: "2", value: 2 },
    { name: "5", value: 5 },
    { name: "10", value: 10 },
  ];

  const BANKNOTES = [
    { name: "20", value: 20 },
    { name: "50", value: 50 },
    { name: "100", value: 100 },
    { name: "500", value: 500 },
    { name: "1000", value: 1000 },
  ];

  const handleCoinInsertion = (value) => {
    dispatch(insertCoin(value));
  };

  const handleNoteInsertion = (value) => {
    dispatch(insertBanknote(value));
  };

  const formatValue = (value) => {
    return value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
  };

  return (
    <StyledWrapper>
      <Collapse className="collapse-header">
        <Panel header="CLICK TO INSERT MONEY" key="1">
          <h2 className="title">Please Select Coins or Banknotes to insert.</h2>
          <h2>
            <img
              src="/images/icons/coins.png"
              alt="coins-icon"
              className="coins-icon"
            />
            Coins:
          </h2>
          <div className="coins-insert-sections">
            {COINS.map((coinValue) => (
              <Row key={coinValue.value}>
                <Col span={6}>
                  <Button
                    type="primary"
                    className="coin-button"
                    onClick={() => handleCoinInsertion(coinValue.value)}
                  >
                    {coinValue.name} THB
                  </Button>
                </Col>
              </Row>
            ))}
          </div>
          <h2>
            <img
              src="/images/icons/bankNote.png"
              alt="banknotes-icon"
              className="banknotes-icon"
            />
            Banknotes:
          </h2>
          <div>
            <div className="bank-insert-sections">
              <Row>
                {BANKNOTES.map((banksnoteValue) => (
                  <Col
                    xs={8}
                    md={4}
                    key={banksnoteValue.value}
                    className="banknotes-col"
                  >
                    <Button
                      type="primary"
                      className="banknotes-button"
                      onClick={() => handleNoteInsertion(banksnoteValue.value)}
                    >
                      {banksnoteValue.name} THB
                    </Button>
                  </Col>
                ))}
              </Row>
            </div>
          </div>
        </Panel>
      </Collapse>
      <h3 className="money-insert-title">
        TOTAL MONEY INSERTED:{" "}
        <span className="money-insert-amount">
          <AnimatedNumber
            value={moneyInserted}
            formatValue={formatValue}
            duration="800"
          />
        </span>{" "}
        THB
      </h3>
    </StyledWrapper>
  );
};

export default MoneyInsertion;
