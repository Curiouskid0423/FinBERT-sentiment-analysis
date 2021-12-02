import React from "react";
import { ReactDOM } from "react";
import { Button, Table, Text, Thead, Tr, Th, Td, Tbody } from '@chakra-ui/react';
import { placeholder_headlines } from "./Data";

const StockHeadlineTable = () => {
    return (
        <Table variant='striped' border='1px' borderColor='gray.200'>
            <Thead>
                <Tr>
                <Th>Headline</Th>
                <Th>Sentiment Scores</Th>
                </Tr>
            </Thead>
            <Tbody>
                {placeholder_headlines.map((line) => (
                    <Tr>
                    <Td>{line}</Td>
                    <Td>
                        <Text as={'span'} fontFamily={"Arial"} color={"gray.500"}>
                        positive: 0.0294, neutral: 0.0261, negative: 0.9444
                        </Text>
                    </Td>
                    </Tr>
                ))}
            </Tbody>
        </Table>
    )
}

export default StockHeadlineTable;