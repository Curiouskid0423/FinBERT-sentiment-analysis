// Action providers for portfolio items

export const addStock = (stockObj) => {
    return {
        type: "ADD_STOCK",
        ticker: stockObj.ticker,
        amount: stockObj.amount,
        sentiment: stockObj.sentiment,
    };
};

export const startAddStock = (stockObj) => {
    return (dispatch, getState) => {
        dispatch(addStock(stockObj));
        console.log("Successfully dispatched ADD_STOCK");
    };
};

export const setStocks = () => ({ type: "SET_STOCKS" });

export const startSetStocks = () => {
    // Load from database in later development.
    return (dispatch, getState) => {
        dispatch(setStocks());
        console.log("Successfully dispatched SET_STOCKS");
    };
};