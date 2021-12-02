// Reducers for stocks in the portfolio

import { placeholder_sentiment} from "../components/Data";

const defaultPortfolio = [{
        ticker: 'APPL',
        amount: 1500,
        sentiment: [0.0294, 0.0261, 0.9444],
    }, {
        ticker: 'MSFT',
        amount: 2000,
        sentiment: [0.7812, 0.2034, 0.0154],
    }, {
        ticker: 'AMZN',
        amount: 1650,
        sentiment: [0.1203, 0.6816, 0.1981],
    }
]

const portfolioReducers = (prevState=defaultPortfolio, action) => {
    switch (action.type) {
        case "ADD_STOCK":
            return [
                ...prevState, {
                    ticker: action.ticker,
                    amount: action.amount, 
                    sentiment: placeholder_sentiment, // to be edited later
                }
            ];
        case "REMOVE_STOCK":
            break;
        default:
            return prevState;
    }

}


export default portfolioReducers;

