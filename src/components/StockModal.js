import React from "react";
import { ReactDOM } from "react";
import { 
    Modal, 
    ModalOverlay, 
    ModalContent, 
    ModalHeader, 
    ModalBody, 
    ModalCloseButton,
    Button,
    ModalFooter, 
} from '@chakra-ui/react';

import StockHeadlineTable from "./StockHeadlineTable";

const StockModal = ({isOpen, onClose}) => {

    const [scrollBehavior, setScrollBehavior] = React.useState('inside')
    const demo_length = 3;

    return (
        <Modal isOpen={isOpen} onClose={onClose} scrollBehavior={scrollBehavior} size={"xl"}>
            <ModalOverlay />
            <ModalContent>
            <ModalHeader>News Headlines </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <StockHeadlineTable index={Math.floor(Math.random() * demo_length)}/>
            </ModalBody>

            <ModalFooter>
                <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
                </Button>
            </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

export default StockModal;