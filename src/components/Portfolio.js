import React from 'react';
import ReactDOM from 'react-dom';

import { Button, Table, Thead, Tr, Th, Td, Tbody } from '@chakra-ui/react';
import { InfoIcon } from '@chakra-ui/icons';

const demo_stocks = ['AAPL', 'MSFT', 'AMZN']

const Portfolio = () => {
    return (
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
            {demo_stocks.map((name) => (
                <Tr>
                <Td><b>{name}</b></Td>
                <Td>To be edited</Td>
                <Td isNumeric>1000</Td>
                <Td>
                <Button leftIcon={<InfoIcon />} colorScheme='blue' variant='solid' size='xs'>
                    Check
                </Button>
                </Td>
                </Tr>
            ))}
        </Tbody>
        
        </Table>
    )
}
export default Portfolio;