import React from "react";
import { ReactDOM } from "react";
import { Button, Table, Text, Thead, Tr, Th, Td, Tbody } from '@chakra-ui/react';
import { placeholder_headlines, placeholder_scores } from "./Data";

const StockHeadlineTable = (props) => {
    return (
        <Table variant='striped' border='1px' borderColor='gray.200'>
            <Thead>
                <Tr>
                <Th>Headline</Th>
                <Th>Sentiment Scores</Th>
                </Tr>
            </Thead>
            <Tbody>
                {placeholder_headlines[props.index].map((line) => (
                    <Tr>
                    <Td>{line[0]}</Td>
                    <Td>
                        <Text as={'span'} fontFamily={"Arial"} color={"gray.500"}>
                        { `positive: ${line[1][0]}, neutral: ${line[1][1]}, negative: ${line[1][2]}` }
                        </Text>
                    </Td>
                    </Tr>
                ))}
            </Tbody>
        </Table>
    )
}

export default StockHeadlineTable;