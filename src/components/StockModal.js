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

    return (
        <Modal isOpen={isOpen} onClose={onClose} scrollBehavior={scrollBehavior} size={"xl"}>
            <ModalOverlay />
            <ModalContent>
            <ModalHeader>News Headlines </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <StockHeadlineTable />
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