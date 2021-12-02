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
import { CheckCircleIcon } from '@chakra-ui/icons';

import Portfolio from "./Portfolio";

export default function HomePage() {

    const [headlineState, handleHeadlineState] = useState()

    const onCheckHeadline = (e) => {
        console.log(e.target.value);
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
                        <form onSubmit={onCheckHeadline}>
                        <FormControl id='headlineSearch'>
                            <Grid 
                                templateRows='repeat(1, 1fr)'
                                templateColumns='repeat(5, 1fr)'
                                gap={4}
                            >
                                <GridItem colSpan={4}>
                                    <InputGroup>
                                        <InputLeftAddon children="Headline"/>    
                                        <Input 
                                            placeholder={"e.g. BlackRock threatens buyers strike for Illinois debt"} 
                                            name={"headline"} onChange={handleHeadlineState}
                                        />
                                    </InputGroup>
                                </GridItem>
                                <GridItem colSpan={1}>
                                    <Button 
                                        variant={"solid"} colorScheme={"blue"} 
                                        bg={"blue.300"} type={"submit"}>
                                        Submit
                                    </Button>
                                </GridItem>
                            </Grid>
                        </FormControl>
                        </form>
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