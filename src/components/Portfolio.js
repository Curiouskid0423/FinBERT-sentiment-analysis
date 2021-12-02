import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import { Button, Table, Text, Thead, Tr, Th, Td, Tbody, TableCaption, Link } from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/hooks';
import { InfoIcon } from '@chakra-ui/icons';
import StockModal from './StockModal';
import { connect } from 'react-redux';


const Portfolio = (props) => {

    const { isOpen, onOpen, onClose } = useDisclosure();
    const [demo_stocks, handleStocks] = useState(props.portfolio);
    console.log(demo_stocks);
    useEffect(() => { handleStocks(props.portfolio) })

    return (
        <div>
        <Table variant='striped' border='1px' borderColor='gray.200'>
            <Thead>
                <Tr>
                <Th>Company Ticker</Th>
                <Th>Market Sentiment</Th>
                <Th isNumeric>Amount</Th>
                <Th>Detail</Th>
                </Tr>
            </Thead>
            <Tbody>
                {demo_stocks.map((item) => (
                    <Tr>
                    <Td><b>{item['ticker']}</b></Td>
                    <Td>
                        <Text as={'span'} fontFamily={"Arial"} color={"gray.500"}>
                        positive: {item['sentiment'][0]}, neutral: {item['sentiment'][1]}, negative: {item['sentiment'][2]}
                        </Text>
                    </Td>
                    <Td isNumeric>{item['amount']}</Td>
                    <Td>
                    <Button 
                        leftIcon={<InfoIcon />} colorScheme='blue' variant='solid' 
                        size='xs' onClick={onOpen}>
                        Check
                    </Button>
                    </Td>
                    </Tr>
                ))}
            </Tbody>
            <TableCaption color={"gray.400"}>
                News headline last updated <i>15 hours</i> ago. 
                <Link color='gray.500' href='#'> Check out all news</Link>
            </TableCaption>
        </Table>

        <StockModal isOpen={isOpen} onClose={onClose} />

        </div>
    )
}

const mapStateToProps = (state) => ({
    // portfolio: state.portfolio,
});

const mapDispatchToProps = (dispatch) => ({
    // dispatchSetStocks: () => dispatch(startSetStocks()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Portfolio);