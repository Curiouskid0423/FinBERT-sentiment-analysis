import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { 
    Box, 
    Button, 
    Heading, 
    Text, 
    Grid, 
    GridItem, 
    Input, 
    InputGroup, 
    FormControl, 
    InputLeftAddon, 
} from '@chakra-ui/react';
import { connect } from 'react-redux';
import { CheckCircleIcon } from '@chakra-ui/icons';
import Portfolio from "./Portfolio";
import { startAddStock } from '../actions/portfolio';
import { placeholder_sentiment} from "../components/Data";

const HomePage = (props) => {

    const [ticker, handleTicker] = useState("");
    const [tickerAmount, handleAmount] = useState(0);
    const [portfolio, handlePortfolio] = useState(props.portfolio);

    const onAddTicker = (e) => {
        e.preventDefault();
        if (tickerAmount == 0) {
            alert("Cannot add amount of 0!");
            return;
        }
        const stockObj = {
            ticker: ticker,
            amount: tickerAmount,
            sentiment: placeholder_sentiment,
        };
        props.dispatchAddStock(stockObj);
        handleTicker("");
        handleAmount(0);
        handlePortfolio([...props.portfolio, stockObj]);
    }

    return (
        <Box textAlign="center" py={10} px={6} m={"3rem"}>
        <CheckCircleIcon boxSize={'50px'} color={"blue.500"} />
        <Heading as="h2" size="xl" mt={6} mb={2}>
            Financial News Headline <Text as={'span'} color={"blue.500"}>Sentiment Analysis</Text> Demo
        </Heading>
        <Grid p={9}>
            <GridItem>
                <Text color={'gray.500'} fontSize={"1.2rem"}>
                    Your Portfolio
                </Text>
            </GridItem>
            <GridItem py={2}>
                <Grid>
                    <GridItem colSpan={5}>
                        <form onSubmit={onAddTicker}>
                        <FormControl id='headlineSearch'>
                            <Grid 
                                templateRows='repeat(1, 1fr)'
                                templateColumns='repeat(7, 1fr)'
                                gap={4}
                            >
                                <GridItem colSpan={6}>
                                    <InputGroup>
                                        <InputLeftAddon children="Ticker"/>    
                                        <Input 
                                            placeholder={"e.g. TSLA, KO"} value={ticker}
                                            name={"headline"} onChange={(e) => {
                                                handleTicker(e.target.value);
                                            }}
                                        />
                                        <InputLeftAddon children="Amount" marginLeft={".5rem"}/>    
                                        <Input 
                                            placeholder={"e.g. 1000"} type={"number"}
                                            value={tickerAmount} name={"headline"} 
                                            onChange={(e) => {
                                                handleAmount(e.target.value);
                                            }}
                                        />
                                    </InputGroup>
                                </GridItem>
                                <GridItem colSpan={1}>
                                    <Button 
                                        variant={"solid"} colorScheme={"blue"} 
                                        bg={"blue.300"} type={"submit"}>
                                        Add Stock
                                    </Button>
                                </GridItem>
                            </Grid>
                        </FormControl>
                        </form>
                    </GridItem>
                </Grid>
            </GridItem>
            <GridItem py={2}>
                <Portfolio portfolio = {portfolio} />
            </GridItem>
        </Grid>
        </Box>
  );
}

const mapStateToProps = (state) => ({
    portfolio: state.portfolio,
});

const mapDispatchToProps = (dispatch) => ({
    dispatchAddStock: (stockObj) => dispatch(startAddStock(stockObj)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);