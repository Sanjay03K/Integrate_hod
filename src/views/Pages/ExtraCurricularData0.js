//Student ExtraCurricularData

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
} from "@chakra-ui/react";

import { AddIcon } from "@chakra-ui/icons";
// Custom components
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import TableRow5 from "components/Tables/TableRow5";
import TableRow4 from "components/Tables/TableRow4";

var resul;

function ExtraCurricularData() {
  function substudextraclub() {
    let params = new URLSearchParams();
    params.append("Clubname", document.getElementById("CLUBNID").value);
    params.append("ClubactivityID", document.getElementById("CLUBAID").value);
    params.append("Clubdateyear", document.getElementById("EDYEARID").value);
    params.append("Clubnoutcome", document.getElementById("OUTCOMID").value);
    params.append("StudentDetails", localStorage.getItem("StudentRoll"));
    params.append("status", "Pending");
    axios
      .post("http://localhost:5000/insertstudextraclub", params)
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
  function substudextraoutreach() {
    let params = new URLSearchParams();
    params.append("outreachname", document.getElementById("OUTREACTID").value);
    params.append(
      "outreachdateyear",
      document.getElementById("OUTREADAYID").value
    );
    params.append(
      "outreachoutcome",
      document.getElementById("OUTREAOUTCOMID").value
    );
    params.append("StudentDetails", localStorage.getItem("StudentRoll"));
    params.append("status", "Pending");
    axios
      .post("http://localhost:5000/insertstudextraoutreach", params)
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
  function substudextrasport() {
    let params = new URLSearchParams();
    params.append("sportname", document.getElementById("SSID").value);
    params.append("representation", document.getElementById("SRID").value);
    params.append("dateyear", document.getElementById("SDID").value);
    params.append("position", document.getElementById("SPID").value);
    params.append("StudentDetails", localStorage.getItem("StudentRoll"));
    params.append("status", "Pending");
    axios
      .post("http://localhost:5000/insertstudextrasports", params)
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

  function substudextracultural() {
    let params = new URLSearchParams();
    params.append("eventname", document.getElementById("ENID").value);
    params.append("eventdate", document.getElementById("EDAYID").value);
    params.append("eventposition", document.getElementById("EPSID").value);
    params.append("StudentDetails", localStorage.getItem("StudentRoll"));
    params.append("status", "Pending");
    axios
      .post("http://localhost:5000/insertstudextracultural", params)
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

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);

  const handleToggle1 = () => setShow(!show);
  const handleToggle2 = () => setShow2(!show2);
  const handleToggle3 = () => setShow3(!show3);
  const handleToggle4 = () => setShow4(!show4);

  const textColor = useColorModeValue("gray.700", "white");

  const [Cdata, setCdata] = useState([]);
  const [Odata, setOdata] = useState([]);
  const [Sdata, setSdata] = useState([]);
  const [Fdata, setFdata] = useState([]);

  let params = new URLSearchParams();
  params.append("StudentDetails", localStorage.getItem("StudentRoll"));
  useEffect(async () => {
    axios
      .all([
        axios.post("http://localhost:5000/ExtraClubStudentDisplay", params),
        axios.post("http://localhost:5000/ExtraOutreachStudentDisplay", params),
        axios.post("http://localhost:5000/ExtraSportsStudentDisplay", params),
        axios.post("http://localhost:5000/ExtraCulturalStudentDisplay", params),
      ])
      .then(
        axios.spread((data1, data2, data3, data4) => {
          setCdata(data1.data);
          setOdata(data2.data);
          setSdata(data3.data);
          setFdata(data4.data);
        })
      );
  }, []);

  return (
    <Flex direction="column" pt={{ base: "500px", md: "75px" }}>
      <SimpleGrid columns={{ sm: 1, md: 1, xl: 1 }} gap={5}>
        <Card overflowX={{ sm: "scroll" }}>
          <CardHeader p="6px 0px 22px 0px">
            <Text fontSize="xl" color={textColor} fontWeight="bold">
              Clubs
            </Text>
          </CardHeader>
          <CardBody>
            <Table variant="simple" color={textColor}>
              <Thead>
                <Tr my=".8rem" pl="0px" color="gray.400">
                  <Th color="gray.400">Name Of The Club</Th>
                  <Th color="gray.400">Activity</Th>
                  <Th color="gray.400">Date & Year</Th>
                  <Th color="gray.400">Outcome</Th>
                  <Th color="gray.400">Verify Status</Th>
                </Tr>
              </Thead>
              <Tbody>
                {Cdata.map((item1) => {
                  return (
                    <TableRow5
                      row1={item1.club_name}
                      row2={item1.activity_name}
                      row3={item1.date}
                      row4={item1.outcome}
                      row5={item1.verified}
                    />
                  );
                })}
              </Tbody>
            </Table>
          </CardBody>
          <Collapse in={show}>
            <Table variant="simple" color={textColor}>
              <Tbody>
                <Tr>
                  <Td width={{ sm: "21.5%" }}>
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
                        placeholder="Enter Club Name"
                        id="CLUBNID"
                      />
                    </Flex>
                  </Td>
                  <Td width={{ sm: "21.5%" }}>
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
                        placeholder="Enter Club Activity"
                        id="CLUBAID"
                      />
                    </Flex>
                  </Td>
                  <Td width={{ sm: "21.5%" }}>
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
                        placeholder="Enter Date and Year"
                        id="EDYEARID"
                      />
                    </Flex>
                  </Td>
                  <Td width={{ sm: "21.5%" }}>
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
                        placeholder="Enter Outcome"
                        id="OUTCOMID"
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
        </Card>
        <SimpleGrid
          marginLeft="auto"
          width="10em"
          me="2.5rem"
          columns={{ sm: 2, md: 2, xl: 2 }}
          gap={5}
        >
          <div>
            <SlideFade in={show}>
              <Button
                onClick={substudextraclub}
                bg="orange.300"
                width="fit-content"
              >
                Submit
              </Button>
            </SlideFade>
          </div>
          <Button
            ms="5"
            bg="orange.300"
            width="fit-content"
            onClick={handleToggle1}
          >
            <AddIcon w={4} h={4} me="3" />
            Add
          </Button>
        </SimpleGrid>
        <Card>
          <CardHeader p="6px 0px 22px 0px">
            <Text fontSize="xl" color={textColor} fontWeight="bold">
              Outreach Activity
            </Text>
          </CardHeader>
          <CardBody overflowX={{ sm: "scroll" }}>
            <Table variant="simple" color={textColor}>
              <Thead>
                <Tr my=".8rem" pl="0px" color="gray.400">
                  <Th color="gray.400">Activity</Th>
                  <Th color="gray.400">Date & Year</Th>
                  <Th color="gray.400">Outcome</Th>
                  <Th color="gray.400">Verify Status</Th>
                </Tr>
              </Thead>
              <Tbody>
                {Odata.map((item) => {
                  return (
                    <TableRow4
                      row1={item.outreach_activity_name}
                      row2={item.outreach_date}
                      row3={item.outreach_outcome}
                      row4={item.outreach_verified}
                    />
                  );
                })}
              </Tbody>
            </Table>
          </CardBody>
          <Collapse in={show2} animateOpacity>
            <Table variant="simple" color={textColor}>
              <Tbody>
                <Tr>
                  <Td width={{ sm: "28.8%" }}>
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
                        placeholder="Enter Outreach Activity"
                        id="OUTREACTID"
                      />
                    </Flex>
                  </Td>
                  <Td width={{ sm: "28.8%" }}>
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
                        placeholder="Enter Date and Year"
                        id="OUTREADAYID"
                      />
                    </Flex>
                  </Td>
                  <Td width={{ sm: "28.8%" }}>
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
                        placeholder="Enter Outcome"
                        id="OUTREAOUTCOMID"
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
        </Card>
        <SimpleGrid
          marginLeft="auto"
          width="10em"
          me="2.5rem"
          columns={{ sm: 2, md: 2, xl: 2 }}
          gap={5}
        >
          <div>
            <SlideFade in={show2}>
              <Button
                onClick={substudextraoutreach}
                bg="orange.300"
                width="fit-content"
              >
                Submit
              </Button>
            </SlideFade>
          </div>
          <Button
            ms="5"
            bg="orange.300"
            width="fit-content"
            onClick={handleToggle2}
          >
            <AddIcon w={4} h={4} me="3" />
            Add
          </Button>
        </SimpleGrid>
        <Card>
          <CardHeader p="6px 0px 22px 0px">
            <Text fontSize="xl" color={textColor} fontWeight="bold">
              Sports Achievements
            </Text>
          </CardHeader>
          <CardBody overflowX={{ sm: "scroll" }}>
            <Table variant="simple" color={textColor}>
              <Thead>
                <Tr my=".8rem" pl="0px" color="gray.400">
                  <Th color="gray.400">Name Of The Sport</Th>
                  <Th color="gray.400">
                    Representation <br />
                    (ZONES/DISTRICT/NATIONAL/INTER-NATIONAL)
                  </Th>
                  <Th color="gray.400">Date & Year</Th>
                  <Th color="gray.400">Position Secured</Th>
                  <Th color="gray.400">Verify Status</Th>
                </Tr>
              </Thead>
              <Tbody>
                {Sdata.map((item) => {
                  return (
                    <TableRow5
                      row1={item.sport_name}
                      row2={item.representation}
                      row3={item.date}
                      row4={item.position_secures}
                      row5={item.verified}
                    />
                  );
                })}
              </Tbody>
            </Table>
          </CardBody>
          <Collapse in={show3} animateOpacity>
            <Table variant="simple" color={textColor}>
              <Tbody>
                <Tr>
                  <Td width={{ sm: "19.2%" }}>
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
                        placeholder="Enter Sport Name"
                        id="SSID"
                      />
                    </Flex>
                  </Td>
                  <Td width={{ sm: "27.3%" }}>
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
                        placeholder="Enter Representation"
                        id="SRID"
                      />
                    </Flex>
                  </Td>
                  <Td width={{ sm: "20%" }}>
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
                        placeholder="Enter Date and Year"
                        id="SDID"
                      />
                    </Flex>
                  </Td>
                  <Td width={{ sm: "20%" }}>
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
                        placeholder="Enter Position Secured"
                        id="SPID"
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
        </Card>
        <SimpleGrid
          marginLeft="auto"
          width="10em"
          me="2.5rem"
          columns={{ sm: 2, md: 2, xl: 2 }}
          gap={5}
        >
          <div>
            <SlideFade in={show3}>
              <Button
                onClick={substudextrasport}
                bg="orange.300"
                width="fit-content"
              >
                Submit
              </Button>
            </SlideFade>
          </div>
          <Button
            ms="5"
            bg="orange.300"
            width="fit-content"
            onClick={handleToggle3}
          >
            <AddIcon w={4} h={4} me="3" />
            Add
          </Button>
        </SimpleGrid>
        <Card>
          <CardHeader p="6px 0px 22px 0px">
            <Text fontSize="xl" color={textColor} fontWeight="bold">
              Culturals
            </Text>
          </CardHeader>
          <CardBody overflowX={{ sm: "scroll" }}>
            <Table variant="simple" color={textColor}>
              <Thead>
                <Tr my=".8rem" pl="0px" color="gray.400">
                  <Th color="gray.400">Name Of The Event Participated</Th>
                  <Th color="gray.400">Date and Year</Th>
                  <Th color="gray.400">Position Secured</Th>
                  <Th color="gray.400">verify Status</Th>
                </Tr>
              </Thead>
              <Tbody>
                {Fdata.map((row) => {
                  return (
                    <TableRow4
                      row1={row.event_name}
                      row2={row.date}
                      row3={row.position_secures}
                      row4={row.verified}
                    />
                  );
                })}
              </Tbody>
            </Table>
          </CardBody>
          <Collapse in={show4} animateOpacity>
            <Table variant="simple" color={textColor}>
              <Tbody>
                <Tr>
                  <Td width={{ sm: "28.8%" }}>
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
                        placeholder="Enter Event Name"
                        id="ENID"
                      />
                    </Flex>
                  </Td>
                  <Td width={{ sm: "28.8%" }}>
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
                        placeholder="Enter Date and Year"
                        id="EDAYID"
                      />
                    </Flex>
                  </Td>
                  <Td width={{ sm: "28.8%" }}>
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
                        placeholder="Enter Position Secured"
                        id="EPSID"
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
        </Card>
        <SimpleGrid
          marginLeft="auto"
          width="10em"
          me="2.5rem"
          columns={{ sm: 2, md: 2, xl: 2 }}
          gap={5}
        >
          <div>
            <SlideFade in={show4}>
              <Button
                onClick={substudextracultural}
                bg="orange.300"
                width="fit-content"
              >
                Submit
              </Button>
            </SlideFade>
          </div>
          <Button
            ms="5"
            bg="orange.300"
            width="fit-content"
            onClick={handleToggle4}
          >
            <AddIcon w={4} h={4} me="3" />
            Add
          </Button>
        </SimpleGrid>
      </SimpleGrid>
    </Flex>
  );
}

export default ExtraCurricularData;
