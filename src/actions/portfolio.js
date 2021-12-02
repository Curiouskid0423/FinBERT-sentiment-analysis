// Action providers for portfolio items

export const addStock = (stockObj) => {
    return {
        type: "ADD_STOCK",
        ticker: stockObj.ticker,
        amount: stockObj.amount,
    };
};

export const startAddStock = (stockObj) => {
    return (dispatch, getState) => {
        dispatch(addStock(stockObj));
        console.log("Successfully dispatched ADD_STOCK");
    };
};