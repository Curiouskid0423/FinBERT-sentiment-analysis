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
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    Progress,
} from '@chakra-ui/react';
import { connect } from 'react-redux';
import { CheckCircleIcon } from '@chakra-ui/icons';
import { useDisclosure } from '@chakra-ui/hooks';
import Portfolio from "./Portfolio";
import { startAddStock } from '../actions/portfolio';
import { placeholder_sentiment} from "../components/Data";

const HomePage = (props) => {

    const { isOpen, onOpen, onClose } = useDisclosure();
    const [demo_loaded, handleDemoLoaded] = useState(false);
    const [ticker, handleTicker] = useState("");
    const [tickerAmount, handleAmount] = useState(0);
    const [portfolio, handlePortfolio] = useState(props.portfolio);

    const onAddTicker = (e) => {
        e.preventDefault();
        handleDemoLoaded(false);
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
        onOpen();
        setTimeout(() => {
            handleDemoLoaded(true);
            handlePortfolio([...props.portfolio, stockObj]);
        }, 5000);
    }

    return (
        <div>
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
        
        { /** Modal section for `web scraping in progress`  */}
        <Modal isOpen={isOpen} onClose={onClose} size={"xl"}>
            <ModalOverlay />
            <ModalContent>
            <ModalHeader>Adding stock: {ticker} </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                {
                    !demo_loaded? (
                        <div>
                            <Text>News scraping in progress....</Text>
                            <Progress size='xs' isIndeterminate my={4} marginRight={"1rem"}/>
                        </div>
                    ) : (
                        <Text fontWeight={600} my={4}> Completed scraping news from Reuter. </Text>
                    )
                }
            </ModalBody>

            <ModalFooter>
                <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
                </Button>
            </ModalFooter>
            </ModalContent>
        </Modal>
        </div>
  );
}

const mapStateToProps = (state) => ({
    portfolio: state.portfolio,
});

const mapDispatchToProps = (dispatch) => ({
    dispatchAddStock: (stockObj) => dispatch(startAddStock(stockObj)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);