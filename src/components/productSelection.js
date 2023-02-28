import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { isEmpty } from "lodash";

import styled from "styled-components";
import { Button, Col, Row } from "antd";

import { dispenseProduct, selectProduct } from "../redux/ducks/vendingMachine";

const StyledWrapper = styled.div`
  .product-selection-button {
    width: 100%;
    height: auto;

    br {
      margin-top: -8px;
    }
  }

  .stock-status {
    font-weight: bolder;
  }

  .out-stock {
    color: red;
  }

  .available-stock {
    color: #99d98c;
  }

  .product-selection-button {
    border: 1px solid #0077b6;
    font-weight: bold;
    color: darkblue;
    background-color: ghostwhite;
  }

  .product-selection-button:disabled {
    background-color: lightgray;
    pointer-events: none;
  }

  .product-selection-button:hover {
    background-color: #023e8a;
  }

  .product-image {
    width: 80px;
  }

  .dispense-section {
    text-align: center;
    display: flex;
    justify-content: space-between;
  }

  .selected-product {
    margin-top: -20px;
  }

  .purchase-section {
    font-weight: bold;
    background: #caf0f8;
    color: darkblue;
    border-radius: 12px;
    border: 2px solid dodgerblue;
    padding: 8px;
    box-shadow: 1px 1px 1px 1px #0077b6;
  }

  .purchase-button {
    font-weight: bolder;
    color: ghostwhite;
    background-color: green;
  }
`;

const ProductSelection = () => {
  const selectedProduct = useSelector((state) => state.selectedProduct);
  const moneyInserted = useSelector((state) => state.moneyInserted);
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const handleProductSelection = (product) => {
    dispatch(selectProduct(product));
  };

  const handleDispenseProduct = () => {
    dispatch(dispenseProduct());
  };

  return (
    <StyledWrapper>
      <div>
        <div className="dispense-section">
          <h2>Please Select Product</h2>
          <div>
            {!isEmpty(selectedProduct) && (
              <div className="purchase-section">
                <h3>You Selected</h3>`
                <p className="selected-product">
                  {selectedProduct.name} <br />
                  Price {selectedProduct.price} THB
                </p>
                <Button
                  className="purchase-button"
                  onClick={handleDispenseProduct}
                >
                  Purchase
                </Button>
              </div>
            )}
          </div>
        </div>
        <br />

        <div className="container">
          <Row>
            {products.map((product) => {
              const price = product.price;
              const disabled = product.stock === 0 || price > moneyInserted;
              const handleClick = () => {
                if (!disabled) {
                  handleProductSelection(product);
                }
              };
              return (
                <>
                  <Col span={8}>
                    <Button
                      className="product-selection-button"
                      type="primary"
                      onClick={handleClick}
                      disabled={disabled}
                    >
                      <img
                        className="product-image"
                        src={product.image}
                        alt={product.name}
                      />
                      <br />
                      {product.name} <br />
                      {price} THB <br />
                      <span className="stock-status">
                        {!product.stock > 0 ? (
                          <span className="out-stock">Out of Stock</span>
                        ) : (
                          <span className="available-stock">Available</span>
                        )}
                      </span>
                      <br />
                      {product.stock} left
                    </Button>
                  </Col>
                </>
              );
            })}
          </Row>
        </div>
      </div>
    </StyledWrapper>
  );
};

export default ProductSelection;
