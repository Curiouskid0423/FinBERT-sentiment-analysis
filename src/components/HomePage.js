import React from 'react';
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
} from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';

import Portfolio from "./Portfolio";

export default function Success() {
  return (
    <Box textAlign="center" py={10} px={6} m={"3rem"}>
      <CheckCircleIcon boxSize={'50px'} color={"blue.500"} />
      <Heading as="h2" size="xl" mt={6} mb={2}>
        Financial News Headline <Text as={'span'} color={"blue.500"}>Sentiment Analysis</Text> Demo
      </Heading>
      <Grid p={9}>
        <GridItem>
            <Text color={'gray.500'}>
                Your Portfolio
            </Text>
        </GridItem>
        <GridItem py={2}>
            <Grid
                templateRows='repeat(1, 1fr)'
                templateColumns='repeat(5, 1fr)'
                gap={4}
            >
                <GridItem colSpan={4}>
                    <InputGroup>
                        <Input placeholder='Search' />
                    </InputGroup>
                </GridItem>
                <GridItem colSpan={1}>
                    <Button variant={"solid"} bg={"blue.300"} color={"white"}>
                        Add Stock
                    </Button>
                </GridItem>
            </Grid>
        </GridItem>
        <GridItem py={2}>
            <Portfolio />
        </GridItem>
      </Grid>
    </Box>
  );
}