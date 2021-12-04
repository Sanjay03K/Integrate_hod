//Class Advisor PD Courses TableRow
import {
    Button,
    Flex,
    Input,
    Td,
    Text,
    Tr,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useColorModeValue,
    useDisclosure,
  } from "@chakra-ui/react";
  import axios from "axios";
  import React from "react";
  
  var server_URL = "http://localhost:5000/";
  
  function ProfessionalDevelopmentTableRow(props) {
    const { isOpen, onOpen, onClose } = useDisclosure();
  
    const { id, row1, row2, row3, row4, row5} = props;
    const textColor = useColorModeValue("gray.700", "white");
  
    function funedit() {
      let cid = { id };
      let params = new URLSearchParams();
      params.append("columnid", cid.id);
      params.append("topic", document.getElementById("TopicID").value);
      params.append("resource_person", document.getElementById("RsprID").value);
      params.append("outcome", document.getElementById("OutcomeID").value);
      params.append("credits", document.getElementById("CreditsID").value);
      axios.post(server_URL + "PdGuest_edit", params);
    }
  
    function fundelete() {
      let cid = { id };
      let params = new URLSearchParams();
      params.append("columnid", cid.id);
      axios.post(server_URL + "PdGuest_delete", params);
    }
  
    function funverify() {
      let cid = { id };
      let params = new URLSearchParams();
      params.append("columnid", cid.id);
      params.append("verify", "Verified");
      axios.post(server_URL + "PdGuest_verify", params);
    }
  
    return (
      <Tr>
        <Td minWidth={{ sm: "10em" }}>
          <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
            <Flex direction="column">
              <Text fontSize="md" color={textColor} minWidth="100%">
                {row1}
              </Text>
            </Flex>
          </Flex>
        </Td>
        <Td minWidth={{ sm: "10em" }}>
          <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
            <Flex direction="column">{row2}</Flex>
          </Flex>
        </Td>
        <Td minWidth={{ sm: "10em" }}>
          <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
            <Flex direction="column">{row3}</Flex>
          </Flex>
        </Td>
        <Td minWidth={{ sm: "10em" }}>
          <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
            <Flex direction="column">{row4}</Flex>
          </Flex>
        </Td>
        <Td minWidth={{ sm: "5em" }}>
          <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
            <Flex direction="column">{row5}</Flex>
          </Flex>
        </Td>
        
        <Td>
          <Button
            onClick={onOpen}
            bg="orange.300"
            alignSelf="flex-end"
            width="fit-content"
          >
            Edit
          </Button>
          <Modal size="xl" isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Edit Details</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Tr>
                  <Td>
                    <Text m="1em">Topic of the Lecture</Text>
                  </Td>
                  <Td>
                    <Input
                      minWidth="20em"
                      borderRadius="5px"
                      fontSize="sm"
                      type="text"
                      defaultValue={row1}
                      id="TopicID"
                    />
                  </Td>
                </Tr>
                
                <Tr>
                  <Td>
                    <Text m="1em">Resource Person</Text>
                  </Td>
  
                  <Td>
                    <Input
                      minWidth="20em"
                      borderRadius="5px"
                      fontSize="sm"
                      type="text"
                      defaultValue={row2}
                      id="DateID"
                    />
                  </Td>
                </Tr>
                <Tr>
                  <Td>
                    <Text m="1em">Outcome</Text>
                  </Td>
                  <Td>
                    <Input
                      minWidth="20em"
                      borderRadius="5px"
                      fontSize="sm"
                      type="text"
                      defaultValue={row3}
                      id="RsprID"
                    />
                  </Td>
                </Tr>
                <Tr>
                  <Td>
                    <Text m="1em">Credits</Text>
                  </Td>
                  <Td>
                    <Input
                      minWidth="20em"
                      borderRadius="5px"
                      fontSize="sm"
                      type="text"
                      defaultValue={row4}
                      id="CreditsID"
                    />
                  </Td>
                </Tr>
              </ModalBody>
  
              <ModalFooter>
                <Button
                  colorScheme="blue"
                  mr={3}
                  onClick={() => {
                    funedit();
                    onClose();
                  }}
                >
                  Submit
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Td>
        <Td>
          <Button
            onClick={fundelete}
            bg="orange.300"
            alignSelf="flex-end"
            width="fit-content"
          >
            Delete
          </Button>
        </Td>
        <Td>
          <Button
            onClick={funverify}
            bg="orange.300"
            alignSelf="flex-end"
            width="fit-content"
            disabled={{ row5 }.row5 == "Verified" ? true : false}
          >
            Verify
          </Button>
        </Td>
      </Tr>
    );
  }
  
  export default ProfessionalDevelopmentTableRow;
  