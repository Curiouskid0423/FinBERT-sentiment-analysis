import React from 'react';
import ReactDOM from 'react-dom';

import { Button, Table, Text, Thead, Tr, Th, Td, Tbody, TableCaption, Link } from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/hooks';
import { InfoIcon } from '@chakra-ui/icons';
import StockModal from './StockModal';

const demo_stocks = ['AAPL', 'MSFT', 'AMZN']

const Portfolio = () => {

    const { isOpen, onOpen, onClose } = useDisclosure();

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
                {demo_stocks.map((name) => (
                    <Tr>
                    <Td><b>{name}</b></Td>
                    <Td>
                        <Text as={'span'} fontFamily={"Arial"} color={"gray.500"}>
                        positive: 0.0294, neutral: 0.0261, negative: 0.9444
                        </Text>
                    </Td>
                    <Td isNumeric>1000</Td>
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
export default Portfolio;