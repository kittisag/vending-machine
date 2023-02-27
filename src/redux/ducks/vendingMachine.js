// Constants
const INSERT_COIN = "vendingMachine/INSERT_COIN";
const INSERT_BANKNOTE = "vendingMachine/INSERT_BANKNOTE";
const SELECT_PRODUCT = "vendingMachine/SELECT_PRODUCT";
const DISPENSE_PRODUCT = "vendingMachine/DISPENSE_PRODUCT";
const DISPENSE_CHANGE = "vendingMachine/DISPENSE_CHANGE";

const initialState = {
  coinStock: {
    1: 100,
    2: 50,
    5: 50,
    10: 20,
  },
  banknoteStock: {
    20: 10,
    50: 5,
    100: 3,
    500: 1,
    1000: 1,
  },
  productStock: {
    Coke: 10,
    Pepsi: 5,
    Water: 20,
  },
  selectedProduct: null,
  moneyInserted: 0,
  changeToReturn: 0,
};

export const PRODUCT_PRICES = {
  Coke: 15,
  Pepsi: 18,
  Soda: 12,
  Water: 8,
};
export const COIN_VALUES = [10, 5, 2, 1];
export const BANKNOTE_VALUES = [1000, 500, 100, 50, 20];
// Action Creators
export const insertCoin = (coinValue) => ({
  type: INSERT_COIN,
  payload: coinValue,
});

export const insertBanknote = (banknoteValue) => ({
  type: INSERT_BANKNOTE,
  payload: banknoteValue,
});

export const selectProduct = (productName) => ({
  type: SELECT_PRODUCT,
  payload: productName,
});

export const dispenseProduct = () => ({
  type: DISPENSE_PRODUCT,
});

export const dispenseChange = () => ({
  type: DISPENSE_CHANGE,
});

// Reducer
export const vendingMachineReducer = (state = initialState, action) => {
  let changeToReturn = 0;
  let moneyLeft = 0;
  switch (action.type) {
    case INSERT_COIN:
      return {
        ...state,
        coinStock: {
          ...state.coinStock,
          [action.payload]: state.coinStock[action.payload] + 1,
        },
        moneyInserted: state.moneyInserted + action.payload,
      };
    case INSERT_BANKNOTE:
      return {
        ...state,
        banknoteStock: {
          ...state.banknoteStock,
          [action.payload]: state.banknoteStock[action.payload] + 1,
        },
        moneyInserted: state.moneyInserted + action.payload,
      };
    case SELECT_PRODUCT:
      return {
        ...state,
        selectedProduct: action.payload,
      };
    case DISPENSE_PRODUCT:
      changeToReturn =
        state.moneyInserted - PRODUCT_PRICES[state.selectedProduct];
      return {
        ...state,
        productStock: {
          ...state.productStock,
          [state.selectedProduct]:
            state.productStock[state.selectedProduct] - 1,
        },
        moneyInserted: changeToReturn,
        changeToReturn,
        selectedProduct: null,
      };
    case DISPENSE_CHANGE:
      moneyLeft = state.moneyInserted;
      return {
        ...state,
        coinStock: calculateCoinStock(state.coinStock, moneyLeft),
        banknoteStock: calculateBanknoteStock(state.banknoteStock, moneyLeft),
        moneyInserted: 0,
        changeToReturn: 0,
      };
    default:
      return state;
  }
};

const calculateCoinStock = (coinStock, moneyLeft) => {
  const newCoinStock = { ...coinStock };
  let remainingChange = moneyLeft;

  COIN_VALUES.forEach((coinValue) => {
    const numCoinsToDispense = Math.floor(remainingChange / coinValue);
    if (numCoinsToDispense > 0 && newCoinStock[coinValue] > 0) {
      const numCoinsToDispenseWithAvailableStock = Math.min(
        numCoinsToDispense,
        newCoinStock[coinValue]
      );
      newCoinStock[coinValue] -= numCoinsToDispenseWithAvailableStock;
      remainingChange -= numCoinsToDispenseWithAvailableStock * coinValue;
    }
  });

  return newCoinStock;
};

const calculateBanknoteStock = (banknoteStock, moneyLeft) => {
  const newBanknoteStock = { ...banknoteStock };
  let remainingChange = moneyLeft;

  BANKNOTE_VALUES.forEach((banknoteValue) => {
    const numBanknotesToDispense = Math.floor(remainingChange / banknoteValue);
    if (numBanknotesToDispense > 0 && newBanknoteStock[banknoteValue] > 0) {
      const numBanknotesToDispenseWithAvailableStock = Math.min(
        numBanknotesToDispense,
        newBanknoteStock[banknoteValue]
      );
      newBanknoteStock[banknoteValue] -=
        numBanknotesToDispenseWithAvailableStock;
      remainingChange -=
        numBanknotesToDispenseWithAvailableStock * banknoteValue;
    }
  });

  return newBanknoteStock;
};
