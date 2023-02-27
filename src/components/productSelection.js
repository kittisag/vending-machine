import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  dispenseChange,
  dispenseProduct,
  PRODUCT_PRICES,
  selectProduct,
} from "../redux/ducks/vendingMachine";

const ProductSelection = () => {
  const productStock = useSelector((state) => state.productStock);
  const coinStock = useSelector((state) => state.productStock);
  const selectedProduct = useSelector((state) => state.selectedProduct);
  const moneyInserted = useSelector((state) => state.moneyInserted);
  const dispatch = useDispatch();

  const handleProductSelection = (productName) => {
    dispatch(selectProduct(productName));
  };

  const handleDispenseProduct = () => {
    dispatch(dispenseProduct());
  };

  return (
    <div>
      <h2>Select Product</h2>
      <ul>
        {Object.entries(productStock).map(([productName, quantity]) => {
          const price = PRODUCT_PRICES[productName];
          const disabled = quantity === 0 || price > moneyInserted;
          const handleClick = () => {
            if (!disabled) {
              handleProductSelection(productName);
            }
          };
          return (
            <li key={productName}>
              <button onClick={handleClick} disabled={disabled}>
                {productName} ({price} THB) - {quantity} ea available
              </button>
            </li>
          );
        })}
      </ul>
      {selectedProduct && (
        <div>
          <h3>Selected Product</h3>
          <p>{selectedProduct}</p>
          <button onClick={handleDispenseProduct}>Dispense Product</button>
        </div>
      )}
    </div>
  );
};

export default ProductSelection;
