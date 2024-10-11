import { useState } from "react";
import {
  Button,
  Input,
  Textarea,
  Box,
  Heading,
  Flex,
  FormControl,
  FormLabel,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import Table from "../components/Table";

const Home = () => {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleCreate = () => {
    // Function to handle the creation logic
    console.log("Input 1:", input1);
    console.log("Input 2:", input2);
    // You can add your logic here to handle the data
    // Reset inputs after submission if needed
    setInput1('');
    setInput2('');
    onClose();
  };

  return (
    <Box bg="black" color="white" p={6}>
      <Flex justify="space-between" align="center" mb={4}>
        <Heading size="lg">Your Projects</Heading>
        <Button
          onClick={onOpen}
          border={'1px solid'}
          borderColor={'gray.800'}
          bg={'black'}
          _hover={{ bg: "gray.900" }}
          color="white"
          fontWeight="bold"
          borderRadius={'3px'}
        >
          New Project
        </Button>
      </Flex>
      
      <Table />

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg="black" borderColor="gray.700" borderWidth="1px">
          <ModalHeader color="white">Create New Project</ModalHeader>
          <ModalCloseButton color="white" />
          <ModalBody>
            <FormControl mb={4}>
              <FormLabel color="gray.400" htmlFor="input1">Project Name</FormLabel>
              <Input
                id="input1"
                value={input1}
                onChange={(e) => setInput1(e.target.value)}
                placeholder="Enter first field"
                bg="gray.900"
                borderColor="gray.700"
                _focus={{ borderColor: "gray.600", boxShadow: "outline" }}
                color="white"
              />
            </FormControl>
            <FormControl>
              <FormLabel color="gray.400" htmlFor="input2">Description</FormLabel>
              <Textarea
                id="input2"
                value={input2}
                onChange={(e) => setInput2(e.target.value)}
                placeholder="Enter second field"
                rows={3}
                bg="gray.900"
                borderColor="gray.700"
                _focus={{ borderColor: "gray.600", boxShadow: "outline" }}
                color="white"
              />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose} mr={3} bg="gray.800" _hover={{ bg: "gray.700" }}>
              Cancel
            </Button>
            <Button
              onClick={handleCreate}
              bg="gray.800"
              _hover={{ bg: "gray.700" }}
              color="white"
              fontWeight="bold"
            >
              Create
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Home;
