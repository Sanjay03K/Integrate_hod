//Student International Exposure Data

import React, { useState, useEffect } from "react";
import axios from "axios";
// Chakra imports
import {
  Flex,
  Table,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
  Td,
  Input,
  useColorModeValue,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  SimpleGrid,
  Collapse,
  SlideFade,
  Box,
} from "@chakra-ui/react";

import { AddIcon } from "@chakra-ui/icons";
// Custom components
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";

import TableRow7 from "components/Tables/TableRow7";

var resul;

function InternationalData() {
  function substudinter() {
    let params = new URLSearchParams();
    params.append("Campus", document.getElementById("CampusID").value);
    params.append("DateYear", document.getElementById("DYID").value);
    params.append("Project", document.getElementById("ProjectID").value);
    params.append("Outcome", document.getElementById("OutcomeID").value);
    params.append("PersD", document.getElementById("PDID").value);
    params.append("ForLCC", document.getElementById("FLCCID").value);
    params.append("StudentDetails", localStorage.getItem("StudentRoll"));
    params.append("status", "Pending");
    axios
      .post("http://localhost:5000/insertstudinter", params)
      .then((items) => {
        if (items.data == "Inserted") {
          resul = "Sucessfully Added!!";
          onOpen(resul);
        } else if (items.data == "NotInserted") {
          resul = "Error Occured!!";
          onOpen(resul);
        }
      });
  }

  const textColor = useColorModeValue("gray.700", "white");
  const [data, setData] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();

  let params = new URLSearchParams();
  params.append("StudentDetails", localStorage.getItem("StudentRoll"));
  useEffect(async () => {
    axios
      .post("http://localhost:5000/InternationalExposureStudent", params)
      .then((items) => {
        setData(items.data);
      });
  });
  const [show, setShow] = useState(false);
  const handleToggle = () => setShow(!show);

  return (
    <Flex direction="column" pt={{ base: "500px", md: "75px" }}>
      <SimpleGrid columns={{ sm: 1, md: 1, xl: 1 }} gap={5}>
        <Card>
          <CardHeader p="6px 0px 22px 0px">
            <Text fontSize="xl" color={textColor} fontWeight="bold">
              Summer Program Details
            </Text>
          </CardHeader>
          <Box overflowX={{ sm: "scroll" }}>
            <CardBody>
              <Table variant="simple" color={textColor}>
                <Thead>
                  <Tr my=".8rem" pl="0px" color="gray.400">
                    <Th color="gray.400">Campus</Th>
                    <Th color="gray.400">Date and Year</Th>
                    <Th color="gray.400">Project</Th>
                    <Th color="gray.400">Outcome</Th>
                    <Th color="gray.400">Personal Development</Th>
                    <Th color="gray.400">
                      Foreign Language Courses Completed or Pursuing
                    </Th>
                    <Th color="gray.400">Credits</Th>
                    <Th color="gray.400">Verify Status</Th>
                  </Tr>
                </Thead>

                <Tbody>
                  {data.map((item) => {
                    return (
                      <TableRow7
                        id={item.s_no}
                        row1={item.foreign_campus}
                        row2={item.duration}
                        row3={item.project}
                        row4={item.outcome}
                        row5={item.personal_development}
                        row6={item.foreign_language_courses}
                        row7={item.credits}
                        row8={item.verify}
                      />
                    );
                  })}
                </Tbody>
              </Table>
            </CardBody>
            <Collapse in={show} animateOpacity>
              <Table variant="simple" color={textColor}>
                <Tbody>
                  <Tr>
                    <Td minWidth="15em">
                      <Flex
                        align="center"
                        py=".8rem"
                        minWidth="100%"
                        flexWrap="nowrap"
                      >
                        <Flex direction="column">
                          <Input
                            borderRadius="5px"
                            fontSize="sm"
                            type="text"
                            placeholder="Enter Campus"
                            id="CampusID"
                          />
                        </Flex>
                      </Flex>
                    </Td>
                    <Td minWidth="15em">
                      <Flex
                        align="center"
                        py=".8rem"
                        minWidth="100%"
                        flexWrap="nowrap"
                      >
                        <Input
                          borderRadius="5px"
                          fontSize="sm"
                          style={{
                            backgroundColor: "rgb(31 39 51)",
                          }}
                          type="date"
                          placeholder="Enter Date and Year"
                          id="DYID"
                        />
                      </Flex>
                    </Td>
                    <Td minWidth="15em">
                      <Flex
                        align="center"
                        py=".8rem"
                        minWidth="100%"
                        flexWrap="nowrap"
                      >
                        <Input
                          borderRadius="5px"
                          fontSize="sm"
                          type="text"
                          placeholder="Project"
                          id="ProjectID"
                        />
                      </Flex>
                    </Td>
                    <Td minWidth="15em">
                      <Flex
                        align="center"
                        py=".8rem"
                        minWidth="100%"
                        flexWrap="nowrap"
                      >
                        <Input
                          borderRadius="5px"
                          fontSize="sm"
                          type="text"
                          placeholder="Outcome"
                          id="OutcomeID"
                        />
                      </Flex>
                    </Td>
                    <Td minWidth="15em">
                      <Flex
                        align="center"
                        py=".8rem"
                        minWidth="100%"
                        flexWrap="nowrap"
                      >
                        <Input
                          borderRadius="5px"
                          fontSize="sm"
                          type="text"
                          placeholder="Personal Development"
                          id="PDID"
                        />
                      </Flex>
                    </Td>
                    <Td minWidth="15em">
                      <Flex
                        align="center"
                        py=".8rem"
                        minWidth="100%"
                        flexWrap="nowrap"
                      >
                        <Input
                          borderRadius="5px"
                          fontSize="sm"
                          type="text"
                          placeholder="Foreign Language Courses Completed or Pursuing"
                          id="FLCCID"
                        />
                      </Flex>
                    </Td>

                    <Td>
                      <Modal
                        isOpen={isOpen}
                        onClose={() => {
                          onClose();
                          window.location.reload(false);
                        }}
                      >
                        <ModalOverlay />
                        <ModalContent>
                          <ModalHeader>Result</ModalHeader>
                          <ModalCloseButton />
                          <ModalBody>{resul}</ModalBody>

                          <ModalFooter>
                            <Button
                              colorScheme="blue"
                              mr={3}
                              onClick={() => {
                                onClose();
                                window.location.reload(false);
                              }}
                            >
                              Close
                            </Button>
                          </ModalFooter>
                        </ModalContent>
                      </Modal>
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </Collapse>
          </Box>
        </Card>
      </SimpleGrid>
      <SimpleGrid
        alignSelf="flex-end"
        mt="1rem"
        width="10em"
        me="2.5rem"
        columns={{ sm: 2, md: 2, xl: 2 }}
        gap={5}
      >
        <div>
          <SlideFade in={show}>
            <Button onClick={substudinter} bg="orange.300" width="fit-content">
              Submit
            </Button>
          </SlideFade>
        </div>
        <Button
          ms="5"
          bg="orange.300"
          width="fit-content"
          onClick={handleToggle}
        >
          <AddIcon w={4} h={4} me="3" />
          Add
        </Button>
      </SimpleGrid>
    </Flex>
  );
}

export default InternationalData;
