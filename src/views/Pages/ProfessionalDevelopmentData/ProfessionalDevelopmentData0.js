/** @format */

//Professional Development Data Student

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

// import { IndustrialVist } from "variables/general";
import TableRow5 from "components/Tables/TableRow/TableRow5";
import TableRow6 from "components/Tables/TableRow/TableRow6";
import TableRow7 from "components/Tables/TableRow/TableRow7";

var server_URL = "http://localhost:5000/";

function ProfessionalDevelopmentData0() {
  function substudinter() {
    let params = new URLSearchParams();
    params.append("Industry", document.getElementById("IndustryID").value);
    params.append("DateYear", document.getElementById("Date_and_year").value);
    params.append("Outcome", document.getElementById("OutcomeID").value);
    params.append("status", "Pending");

    params.append("Industry", document.getElementById("IndustryID2").value);
    params.append("DateYear", document.getElementById("Date_and_year2").value);
    params.append("Outcome", document.getElementById("OutcomeID2").value);
    params.append("status", "Pending");

    params.append("Topic", document.getElementById("Topic").value);
    params.append("DateYear", document.getElementById("Date_and_year3").value);
    params.append(
      "Resource Person",
      document.getElementById("Resource_perason").value
    );
    params.append("Outcome", document.getElementById("OutcomeID3").value);
    params.append("status", "Pending");

    params.append("Topic", document.getElementById("Topic2").value);
    params.append("DateYear", document.getElementById("Date_and_year4").value);
    params.append(
      "Resource Person",
      document.getElementById("Resource_perason2").value
    );
    params.append("Outcome", document.getElementById("OutcomeID4").value);
    params.append("status", "Pending");

    params.append("Company", document.getElementById("Company").value);
    params.append("Duration", document.getElementById("Duration").value);
    params.append("Date", document.getElementById("Date").value);
    params.append("Reference", document.getElementById("Reference").value);
    params.append("status", "Pending");

    params.append("Course Name", document.getElementById("Course_name").value);
    params.append("Platform", document.getElementById("Platform").value);
    params.append(
      "Date and Year",
      document.getElementById("Date_and_year5").value
    );
    params.append("Outcome", document.getElementById("OutcomeID5").value);
    params.append("status", "Pending");

    params.append("Topic", document.getElementById("Topic3").value);
    params.append("DateYear", document.getElementById("Date_and_year6").value);
    params.append(
      "Resource Person",
      document.getElementById("Resource_perason3").value
    );
    params.append("Outcome", document.getElementById("OutcomeID6").value);
    params.append("status", "Pending");

    params.append("Topic", document.getElementById("Topic4").value);
    params.append("DateYear", document.getElementById("Date_and_year7").value);
    params.append(
      "Resource Person",
      document.getElementById("Resource_perason4").value
    );
    params.append("Outcome", document.getElementById("OutcomeID7").value);
    params.append("status", "Pending");

    params.append("Name", document.getElementById("Name").value);
    params.append("Type of Event", document.getElementById("Type").value);
    params.append(
      "Date and Year",
      document.getElementById("Date_and_year8").value
    );
    params.append(
      "Position Secured",
      document.getElementById("Position").value
    );
    params.append("status", "Pending");

    params.append("Aptitude", document.getElementById("Aptitude").value);
    params.append("Soft Skills", document.getElementById("Soft_skill").value);
    params.append("Reasoning", document.getElementById("Reasoning").value);
    params.append(
      "Technical skill",
      document.getElementById("Tech_skill").value
    );
    params.append("status", "Pending");

    params.append("Title", document.getElementById("Title").value);
    params.append("Objective", document.getElementById("Objective").value);
    params.append("Duration", document.getElementById("Duration2").value);
    params.append("Outcome", document.getElementById("OutcomeID8").value);
    params.append("status", "Pending");

    params.append("Topic", document.getElementById("Topic4").value);
    params.append("DateYear", document.getElementById("Date_and_year9").value);
    params.append(
      "Resource Person",
      document.getElementById("Resource_perason5").value
    );
    params.append("Outcome", document.getElementById("OutcomeID9").value);
    params.append("status", "Pending");

    params.append("Conference", document.getElementById("Conference").value);
    params.append("Name", document.getElementById("Name2").value);
    params.append("Title", document.getElementById("Title2").value);
    params.append("Impact factor", document.getElementById("Impact").value);
    params.append("Indexed in", document.getElementById("Indexed").value);
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
  let params = new URLSearchParams();
  params.append("StudentDetails", localStorage.getItem("StudentRoll"));
  useEffect(async () => {
    axios
      .all([
        axios.post(server_URL + "comp_stud_display", params),
        axios.post(server_URL + "cour_Stud_display", params),
        axios.post(server_URL + "finpro_Stud_display", params),
        axios.post(server_URL + "guest_stud_display", params),
        axios.post(server_URL + "Industrialv_display", params),
        axios.post(server_URL + "Inplant_display", params),
        axios.post(server_URL + "intern_stud_display", params),
        axios.post(server_URL + "Miniproj_display", params),
        axios.post(server_URL + "Motivational_display", params),
        axios.post(server_URL + "placement_display", params),
        axios.post(server_URL + "publication_display", params),
        axios.post(server_URL + "webinar_display", params),
        axios.post(server_URL + "workshop_studisplay", params),  
      ])
      .then(
        axios.spread((data1, data2, data3, data4, data5,data6, data7, data8, data9, data10, data11, data12, data13) => {
          setp1data(data1.data);
          setp2data(data2.data);
          setp3data(data3.data);
          setp4data(data4.data);
          setp5data(data5.data);
          setp6data(data6.data);
          setp7data(data7.data);
          setp8data(data8.data);
          setp9data(data9.data);
          setp10data(data10.data);
          setp11data(data11.data);
          setp12data(data12.data);
          setp13data(data13.data);
        })
      );
  }, []);

  const textColor = useColorModeValue("gray.700", "white");

  const { isOpen, onOpen, onClose } = useDisclosure();

  const [drop1, setDrop1] = useState(false);
  const [drop2, setDrop2] = useState(false);
  const [drop3, setDrop3] = useState(false);
  const [drop4, setDrop4] = useState(false);
  const [drop5, setDrop5] = useState(false);
  const [drop6, setDrop6] = useState(false);
  const [drop7, setDrop7] = useState(false);
  const [drop8, setDrop8] = useState(false);
  const [drop9, setDrop9] = useState(false);
  const [drop10, setDrop10] = useState(false);
  const [drop11, setDrop11] = useState(false);
  const [drop12, setDrop12] = useState(false);
  const [drop13, setDrop13] = useState(false);

  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [show5, setShow5] = useState(false);
  const [show6, setShow6] = useState(false);
  const [show7, setShow7] = useState(false);
  const [show8, setShow8] = useState(false);
  const [show9, setShow9] = useState(false);
  const [show10, setShow10] = useState(false);
  const [show11, setShow11] = useState(false);
  const [show12, setShow12] = useState(false);
  const [show13, setShow13] = useState(false);

  const handleToggle = () => setShow(!show);
  const handleToggle2 = () => setShow2(!show2);
  const handleToggle3 = () => setShow3(!show3);
  const handleToggle4 = () => setShow4(!show4);
  const handleToggle5 = () => setShow5(!show5);
  const handleToggle6 = () => setShow6(!show6);
  const handleToggle7 = () => setShow7(!show7);
  const handleToggle8 = () => setShow8(!show8);
  const handleToggle9 = () => setShow9(!show9);
  const handleToggle10 = () => setShow10(!show10);
  const handleToggle11 = () => setShow11(!show11);
  const handleToggle12 = () => setShow12(!show12);
  const handleToggle13 = () => setShow13(!show13);

  
  const [p1data, setp1data] = useState([]);
  const [p2data, setp2data] = useState([]);
  const [p3data, setp3data] = useState([]);
  const [p4data, setp4data] = useState([]);
  const [p5data, setp5data] = useState([]);
  const [p6data, setp6data] = useState([]);
  const [p7data, setp7data] = useState([]);
  const [p8data, setp8data] = useState([]);
  const [p9data, setp9data] = useState([]);
  const [p10data, setp10data] = useState([]);
  const [p11data, setp11data] = useState([]);
  const [p12data, setp12data] = useState([]);
  const [p13data, setp13data] = useState([]);
  
  return (
    <Flex direction="column" pt={{ base: "120px", md: "65px" }}>
      <SimpleGrid columns={{ sm: 1, md: 1, xl: 1 }} gap={5}>
        <Card>
          <CardHeader>
            <Text fontSize="xl" color={textColor} fontWeight="bold">
              Industrial Visit
            </Text>

            <Button
              ms="auto"
              bg="orange.400"
              width="fit-content"
              height="2em"
              onClick={() => setDrop1(!drop1)}
            >
              {drop1 ? "Hide" : "Show"}
            </Button>
          </CardHeader>
          <Collapse in={drop1}>
            <CardBody mt="1em" overflowX={{ sm: "scroll" }}>
              <Table variant="simple" color={textColor}>
                <Thead>
                  <Tr my=".8rem" pl="0px" color="gray.400">
                    <Th color="gray.400">Industry</Th>
                    <Th color="gray.400">Date and Year</Th>
                    <Th color="gray.400">Outcome</Th>
                    <Th color="gray.400">Credits</Th>
                    <Th color="gray.400">Verify Status</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {p1data.map((item1) => {
                    return (
                      <TableRow5
                        row1={item1.IndustryID}
                        row2={item1.Date_and_year}
                        row3={item1.OutcomeID}
                        row4={item1.credits}
                        row5={item1.verified}
                      />
                    );
                  })}
                </Tbody>
              </Table>
            </CardBody>
          </Collapse>
        </Card>

        <Collapse in={show && drop1}>
          <Card>
            <CardBody overflowX={{ sm: "scroll" }}>
              <Table variant="simple" color={textColor}>
                <Thead>
                  <Tr>
                    <Th color="gray.400">Industry</Th>
                    <Th color="gray.400">Date and Year</Th>
                    <Th color="gray.400">Outcome</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td minWidth={{ sm: "20em" }}>
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
                          placeholder="Enter Industry"
                          id="IndustryID2"
                        />
                      </Flex>
                    </Td>
                    <Td minWidth={{ sm: "20em" }}>
                      <Flex
                        align="center"
                        py=".8rem"
                        minWidth="100%"
                        flexWrap="nowrap"
                      >
                        <Input
                          borderRadius="5px"
                          fontSize="sm"
                          type="date"
                          placeholder="Enter Date and Year"
                          id="Date_and_year2"
                        />
                      </Flex>
                    </Td>

                    <Td minWidth={{ sm: "20em" }}>
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
                          id="OutcomeID2"
                        />
                      </Flex>
                    </Td>
                    <Td>
                      <Flex
                        align="center"
                        py=".8rem"
                        minWidth="100%"
                        flexWrap="nowrap"
                      >
                        <SlideFade in={show}>
                          <Button
                            onClick={substudinter}
                            bg="orange.300"
                            width="fit-content"
                          >
                            Submit
                          </Button>
                        </SlideFade>
                      </Flex>
                    </Td>
                  </Tr>

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
                </Tbody>
              </Table>
            </CardBody>
          </Card>
        </Collapse>

        <Collapse in={drop1}>
          <SimpleGrid
            marginLeft="auto"
            width="13em"
            me="2.5rem"
            columns={{ sm: 2, md: 2, xl: 2 }}
            gap={5}
          >
            <div></div>
            <Button
              ms="5"
              bg="orange.300"
              width="fit-content"
              onClick={handleToggle}
            >
              <AddIcon w={4} h={4} me="3" />
              {show ? "Cancel" : "Add"}
            </Button>
          </SimpleGrid>
        </Collapse>

        <Card>
          <CardHeader>
            <Text fontSize="xl" color={textColor} fontWeight="bold">
              Inplant Training
            </Text>
            <Button
              ms="auto"
              bg="orange.400"
              width="fit-content"
              height="2em"
              onClick={() => setDrop2(!drop2)}
            >
              {drop2 ? "Hide" : "Show"}
            </Button>
          </CardHeader>
          <Collapse in={drop2}>
            <CardBody mt="1em" overflowX={{ sm: "scroll" }}>
              <Table variant="simple" color={textColor}>
                <Thead>
                  <Tr my=".8rem" pl="0px" color="gray.400">
                    <Th color="gray.400">Industry</Th>
                    <Th color="gray.400">Date and Year</Th>
                    <Th color="gray.400">Outcome</Th>
                    <Th color="gray.400">Credits</Th>
                    <Th color="gray.400">Verify Status</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {p2data.map((item2) => {
                    return (
                      <TableRow5
                        row1={item2.IndustryID}
                        row2={item2.Date_and_year}
                        row3={item2.OutcomeID}
                        row4={item2.credits}
                        row5={item2.verified}
                      />
                    );
                  })}
                </Tbody>
              </Table>
            </CardBody>
          </Collapse>
        </Card>

        <Collapse in={show2 && drop2}>
          <Card>
            <CardBody overflowX={{ sm: "scroll" }}>
              <Table variant="simple" color={textColor}>
                <Thead>
                  <Tr my=".8rem" pl="0px" color="gray.400">
                    <Th color="gray.400">Industry</Th>
                    <Th color="gray.400">Date and Year</Th>
                    <Th color="gray.400">Outcome</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td minWidth={{ sm: "20em" }}>
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
                          placeholder="Enter Industry"
                          id="IndustryID"
                        />
                      </Flex>
                    </Td>
                    <Td minWidth={{ sm: "20em" }}>
                      <Flex
                        align="center"
                        py=".8rem"
                        minWidth="100%"
                        flexWrap="nowrap"
                      >
                        <Input
                          borderRadius="5px"
                          fontSize="sm"
                          type="date"
                          placeholder="Enter Date and Year"
                          id="Date_and_year"
                        />
                      </Flex>
                    </Td>

                    <Td minWidth={{ sm: "20em" }}>
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
                    <Td>
                      <SlideFade in={show2}>
                        <SlideFade in={show2}>
                          <Button
                            onClick={substudinter}
                            bg="orange.300"
                            width="fit-content"
                          >
                            Submit
                          </Button>
                        </SlideFade>
                      </SlideFade>
                    </Td>

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
                  </Tr>
                </Tbody>
              </Table>
            </CardBody>
          </Card>
        </Collapse>

        <Collapse in={drop2}>
          <SimpleGrid
            marginLeft="auto"
            width="13em"
            me="2.5rem"
            columns={{ sm: 2, md: 2, xl: 2 }}
            gap={5}
          >
            <div></div>
            <Button
              ms="5"
              bg="orange.300"
              width="fit-content"
              onClick={handleToggle2}
            >
              <AddIcon w={4} h={4} me="3" />
              {show2 ? "Cancel" : "Add"}
            </Button>
          </SimpleGrid>
        </Collapse>

        <Card>
          <CardHeader>
            <Text fontSize="xl" color={textColor} fontWeight="bold">
              Guest Lecture
            </Text>
            <Button
              ms="auto"
              bg="orange.400"
              width="fit-content"
              height="2em"
              onClick={() => setDrop3(!drop3)}
            >
              {drop3 ? "Hide" : "Show"}
            </Button>
          </CardHeader>
          <Collapse mt="1em" in={drop3}>
            <CardBody overflowX={{ sm: "scroll" }}>
              <Table variant="simple" color={textColor}>
                <Thead>
                  <Tr my=".8rem" pl="0px" color="gray.400">
                    <Th color="gray.400">Topic</Th>
                    <Th color="gray.400">Date and Year</Th>
                    <Th color="gray.400">Resource Person</Th>
                    <Th color="gray.400">Outcome</Th>
                    <Th color="gray.400">Credits</Th>
                    <Th color="gray.400">Verify Status</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {p3data.map((item3) => {
                    return (
                      <TableRow6
                        row1={item3.Topic}
                        row2={item3.Date_and_year3}
                        row3={item3.Resorce_person}
                        row4={item3.OutcomeID3}
                        row5={item3.credits}
                        row6={item3.verified}
                      />
                    );
                  })}
                </Tbody>
              </Table>
            </CardBody>
          </Collapse>
        </Card>

        <Collapse in={show3 && drop3}>
          <Card>
            <CardBody overflowX={{ sm: "scroll" }}>
              <Table variant="simple" color={textColor}>
                <Thead>
                  <Tr>
                    <Th color="gray.400">Topic</Th>
                    <Th color="gray.400">Date and Year</Th>
                    <Th color="gray.400">Resource Person</Th>
                    <Th color="gray.400">Outcome</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td minWidth={{ sm: "14em" }}>
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
                          placeholder="Topic"
                          id="Topic"
                        />
                      </Flex>
                    </Td>
                    <Td minWidth={{ sm: "14em" }}>
                      <Flex
                        align="center"
                        py=".8rem"
                        minWidth="100%"
                        flexWrap="nowrap"
                      >
                        <Input
                          borderRadius="5px"
                          fontSize="sm"
                          type="date"
                          placeholder="Enter Date and Year"
                          id="Date_and_year3"
                        />
                      </Flex>
                    </Td>
                    <Td minWidth={{ sm: "14em" }}>
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
                          placeholder="Resource Person"
                          id="OutcomeID3"
                        />
                      </Flex>
                    </Td>
                    <Td minWidth={{ sm: "14em" }}>
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
                          id="Topic"
                        />
                      </Flex>
                    </Td>
                    <Td>
                      <SlideFade in={show3}>
                        <Button
                          onClick={substudinter}
                          bg="orange.300"
                          width="fit-content"
                        >
                          Submit
                        </Button>
                      </SlideFade>
                    </Td>
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
                  </Tr>
                </Tbody>
              </Table>
            </CardBody>
          </Card>
        </Collapse>

        <Collapse in={drop3}>
          <SimpleGrid
            marginLeft="auto"
            width="13em"
            me="2.5rem"
            columns={{ sm: 2, md: 2, xl: 2 }}
            gap={5}
          >
            <div></div>
            <Button
              ms="5"
              bg="orange.300"
              width="fit-content"
              onClick={handleToggle3}
            >
              <AddIcon w={4} h={4} me="3" />
              {show3 ? "Cancel" : "Add"}
            </Button>
          </SimpleGrid>
        </Collapse>

        <Card>
          <CardHeader>
            <Text fontSize="xl" color={textColor} fontWeight="bold">
              Motivational Talks
            </Text>
            <Button
              ms="auto"
              bg="orange.400"
              width="fit-content"
              height="2em"
              onClick={() => setDrop4(!drop4)}
            >
              {drop4 ? "Hide" : "Show"}
            </Button>
          </CardHeader>
          <Collapse in={drop4}>
            <CardBody mt="1em" overflowX={{ sm: "scroll" }}>
              <Table variant="simple" color={textColor}>
                <Thead>
                  <Tr my=".8rem" pl="0px" color="gray.400">
                    <Th color="gray.400">Topic</Th>
                    <Th color="gray.400">Date and Year</Th>
                    <Th color="gray.400">Resource Person</Th>
                    <Th color="gray.400">Outcome</Th>
                    <Th color="gray.400">Credits</Th>
                    <Th color="gray.400">Verify Status</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {p4data.map((item4) => {
                    return (
                      <TableRow6
                        row1={item4.Topic}
                        row2={item4.Date_and_year3}
                        row3={item4.Resorce_person}
                        row4={item4.OutcomeID3}
                        row5={item4.credits}
                        row6={item4.verified}
                      />
                    );
                  })}
                </Tbody>
              </Table>
            </CardBody>
          </Collapse>
        </Card>

        <Collapse in={show4 && drop4}>
          <Card>
            <CardBody overflowX={{ sm: "scroll" }}>
              <Table variant="simple" color={textColor}>
                <Thead>
                  <Tr>
                    <Th color="gray.400">Topic</Th>
                    <Th color="gray.400">Date and Year</Th>
                    <Th color="gray.400">Resource Person</Th>
                    <Th color="gray.400">Outcome</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td minWidth={{ sm: "14em" }}>
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
                          placeholder="Topic"
                          id="Topic"
                        />
                      </Flex>
                    </Td>
                    <Td minWidth={{ sm: "14em" }}>
                      <Flex
                        align="center"
                        py=".8rem"
                        minWidth="100%"
                        flexWrap="nowrap"
                      >
                        <Input
                          borderRadius="5px"
                          fontSize="sm"
                          type="date"
                          placeholder="Enter Date and Year"
                          id="Date_and_year3"
                        />
                      </Flex>
                    </Td>

                    <Td minWidth={{ sm: "14em" }}>
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
                          placeholder="Resource Person"
                          id="OutcomeID3"
                        />
                      </Flex>
                    </Td>
                    <Td minWidth={{ sm: "14em" }}>
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
                          id="Topic"
                        />
                      </Flex>
                    </Td>
                    <Td>
                      <SlideFade in={show4}>
                        <Button
                          onClick={substudinter}
                          bg="orange.300"
                          width="fit-content"
                        >
                          Submit
                        </Button>
                      </SlideFade>
                    </Td>
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
                  </Tr>
                </Tbody>
              </Table>
            </CardBody>
          </Card>
        </Collapse>

        <Collapse in={drop4}>
          <SimpleGrid
            marginLeft="auto"
            width="13em"
            me="2.5rem"
            columns={{ sm: 2, md: 2, xl: 2 }}
            gap={5}
          >
            <div></div>
            <Button
              ms="5"
              bg="orange.300"
              width="fit-content"
              onClick={handleToggle4}
            >
              <AddIcon w={4} h={4} me="3" />
              {show4 ? "Cancel" : "Add"}
            </Button>
          </SimpleGrid>
        </Collapse>

        <Card>
          <CardHeader>
            <Text fontSize="xl" color={textColor} fontWeight="bold">
              Internships
            </Text>
            <Button
              ms="auto"
              bg="orange.400"
              width="fit-content"
              height="2em"
              onClick={() => setDrop5(!drop5)}
            >
              {drop5 ? "Hide" : "Show"}
            </Button>
          </CardHeader>
          <Collapse in={drop5}>
            <CardBody mt="1em" overflowX={{ sm: "scroll" }}>
              <Table variant="simple" color={textColor}>
                <Thead>
                  <Tr my=".8rem" pl="0px" color="gray.400">
                    <Th color="gray.400">Company</Th>
                    <Th color="gray.400">Date and Year</Th>
                    <Th color="gray.400">Duration in months</Th>
                    <Th color="gray.400">Reference</Th>
                    <Th color="gray.400">Credits</Th>
                    <Th color="gray.400">Verify Status</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {p5data.map((item5) => {
                    return (
                      <TableRow6
                        row1={item5.Company}
                        row2={item5.Date}
                        row3={item5.Duration}
                        row4={item5.Reference}
                        row5={item5.credits}
                        row6={item5.verified}
                      />
                    );
                  })}
                </Tbody>
              </Table>
            </CardBody>
          </Collapse>
        </Card>

        <Collapse in={show5 && drop5}>
          <Card>
            <CardBody overflowX={{ sm: "scroll" }}>
              <Table variant="simple" color={textColor}>
                <Thead>
                  <Tr>
                    <Th color="gray.400">Company</Th>
                    <Th color="gray.400">Date and Year</Th>
                    <Th color="gray.400">duration in months</Th>
                    <Th color="gray.400">Reference</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td minWidth={{ sm: "14em" }}>
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
                          placeholder="Enter company"
                          id="Topic"
                        />
                      </Flex>
                    </Td>
                    <Td minWidth={{ sm: "14em" }}>
                      <Flex
                        align="center"
                        py=".8rem"
                        minWidth="100%"
                        flexWrap="nowrap"
                      >
                        <Input
                          borderRadius="5px"
                          fontSize="sm"
                          type="date"
                          placeholder="Date and Year"
                          id="Date_and_year3"
                        />
                      </Flex>
                    </Td>

                    <Td minWidth={{ sm: "14em" }}>
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
                          placeholder="Duration in months"
                          id="OutcomeID3"
                        />
                      </Flex>
                    </Td>
                    <Td minWidth={{ sm: "14em" }}>
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
                          placeholder="Reference"
                          id="Topic"
                        />
                      </Flex>
                    </Td>

                    <Td>
                      <SlideFade in={show5}>
                        <Button
                          onClick={substudinter}
                          bg="orange.300"
                          width="fit-content"
                        >
                          Submit
                        </Button>
                      </SlideFade>
                    </Td>
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
                  </Tr>
                </Tbody>
              </Table>
            </CardBody>
          </Card>
        </Collapse>
        <Collapse in={drop5}>
          <SimpleGrid
            marginLeft="auto"
            width="13em"
            me="2.5rem"
            columns={{ sm: 2, md: 2, xl: 2 }}
            gap={5}
          >
            <div></div>
            <Button
              ms="5"
              bg="orange.300"
              width="fit-content"
              onClick={handleToggle5}
            >
              <AddIcon w={4} h={4} me="3" />
              {show5 ? "Cancel" : "Add"}
            </Button>
          </SimpleGrid>
        </Collapse>

        <Card>
          <CardHeader>
            <Text fontSize="xl" color={textColor} fontWeight="bold">
              Value Added Course
            </Text>
            <Button
              ms="auto"
              bg="orange.400"
              width="fit-content"
              height="2em"
              onClick={() => setDrop6(!drop6)}
            >
              {drop6 ? "Hide" : "Show"}
            </Button>
          </CardHeader>
          <Collapse in={drop6}>
            <CardBody mt="1em" overflowX={{ sm: "scroll" }}>
              <Table variant="simple" color={textColor}>
                <Thead>
                  <Tr my=".8rem" pl="0px" color="gray.400">
                    <Th color="gray.400">Course Name</Th>
                    <Th color="gray.400">Date and Year</Th>
                    <Th color="gray.400">Platform</Th>
                    <Th color="gray.400">Outcome</Th>
                    <Th color="gray.400">Credits</Th>
                    <Th color="gray.400">Verify Status</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {p6data.map((item6) => {
                    return (
                      <TableRow6
                        row1={item6.Course_name}
                        row2={item6.Date_and_year5}
                        row3={item6.Platform}
                        row4={item6.Outcome5}
                        row5={item6.credits}
                        row6={item6.verified}
                      />
                    );
                  })}
                </Tbody>
              </Table>
            </CardBody>
          </Collapse>
        </Card>

        <Collapse in={show6 && drop6}>
          <Card>
            <CardBody overflowX={{ sm: "scroll" }}>
              <Table variant="simple" color={textColor}>
                <Thead>
                  <Tr>
                    <Th color="gray.400">Course Name</Th>
                    <Th color="gray.400">Date and Year</Th>
                    <Th color="gray.400">Platform</Th>
                    <Th color="gray.400">Outcome</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td minWidth={{ sm: "14em" }}>
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
                          placeholder="Enter Course Name"
                          id="Topic"
                        />
                      </Flex>
                    </Td>
                    <Td minWidth={{ sm: "14em" }}>
                      <Flex
                        align="center"
                        py=".8rem"
                        minWidth="100%"
                        flexWrap="nowrap"
                      >
                        <Input
                          borderRadius="5px"
                          fontSize="sm"
                          type="date"
                          placeholder="Date and Year"
                          id="Date_and_year3"
                        />
                      </Flex>
                    </Td>

                    <Td minWidth={{ sm: "14em" }}>
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
                          placeholder="Enter Platform"
                          id="OutcomeID3"
                        />
                      </Flex>
                    </Td>
                    <Td minWidth={{ sm: "14em" }}>
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
                          id="Topic"
                        />
                      </Flex>
                    </Td>

                    <Td>
                      <SlideFade in={show6}>
                        <Button
                          onClick={substudinter}
                          bg="orange.300"
                          width="fit-content"
                        >
                          Submit
                        </Button>
                      </SlideFade>
                    </Td>
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
                  </Tr>
                </Tbody>
              </Table>
            </CardBody>
          </Card>
        </Collapse>

        <Collapse in={drop6}>
          <SimpleGrid
            marginLeft="auto"
            width="13em"
            me="2.5rem"
            columns={{ sm: 2, md: 2, xl: 2 }}
            gap={5}
          >
            <div></div>
            <Button
              ms="5"
              bg="orange.300"
              width="fit-content"
              onClick={handleToggle6}
            >
              <AddIcon w={4} h={4} me="3" />
              {show6 ? "Cancel" : "Add"}
            </Button>
          </SimpleGrid>
        </Collapse>

        <Card>
          <CardHeader>
            <Text fontSize="xl" color={textColor} fontWeight="bold">
              Workshop
            </Text>
            <Button
              ms="auto"
              bg="orange.400"
              width="fit-content"
              height="2em"
              onClick={() => setDrop7(!drop7)}
            >
              {drop7 ? "Hide" : "Show"}
            </Button>
          </CardHeader>
          <Collapse in={drop7}>
            <CardBody mt="1em" overflowX={{ sm: "scroll" }}>
              <Table variant="simple" color={textColor}>
                <Thead>
                  <Tr my=".8rem" pl="0px" color="gray.400">
                    <Th color="gray.400">Topic</Th>
                    <Th color="gray.400">Date and Year</Th>
                    <Th color="gray.400">Resource Person</Th>
                    <Th color="gray.400">Outcome</Th>
                    <Th color="gray.400">Credits</Th>
                    <Th color="gray.400">Verify Status</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {p7data.map((item7) => {
                    return (
                      <TableRow6
                        row1={item7.Topic}
                        row2={item7.Date_and_year3}
                        row3={item7.Resorce_person}
                        row4={item7.OutcomeID3}
                        row5={item7.credits}
                        row6={item7.verified}
                      />
                    );
                  })}
                </Tbody>
              </Table>
            </CardBody>
          </Collapse>
        </Card>

        <Collapse in={show7 && drop7}>
          <Card>
            <CardBody overflowX={{ sm: "scroll" }}>
              <Table variant="simple" color={textColor}>
                <Thead>
                  <Tr>
                    <Th color="gray.400">Topic</Th>
                    <Th color="gray.400">Date and Year</Th>
                    <Th color="gray.400">Resource Person</Th>
                    <Th color="gray.400">Outcome</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td minWidth={{ sm: "14em" }}>
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
                          placeholder="Topic"
                          id="Topic"
                        />
                      </Flex>
                    </Td>
                    <Td minWidth={{ sm: "14em" }}>
                      <Flex
                        align="center"
                        py=".8rem"
                        minWidth="100%"
                        flexWrap="nowrap"
                      >
                        <Input
                          borderRadius="5px"
                          fontSize="sm"
                          type="date"
                          placeholder="Enter Date and Year"
                          id="Date_and_year3"
                        />
                      </Flex>
                    </Td>

                    <Td minWidth={{ sm: "14em" }}>
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
                          placeholder="Resource Person"
                          id="OutcomeID3"
                        />
                      </Flex>
                    </Td>
                    <Td minWidth={{ sm: "14em" }}>
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
                          id="Topic"
                        />
                      </Flex>
                    </Td>

                    <Td>
                      <SlideFade in={show7}>
                        <Button
                          onClick={substudinter}
                          bg="orange.300"
                          width="fit-content"
                        >
                          Submit
                        </Button>
                      </SlideFade>
                    </Td>
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
                  </Tr>
                </Tbody>
              </Table>
            </CardBody>
          </Card>
        </Collapse>
        <Collapse in={drop7}>
          <SimpleGrid
            marginLeft="auto"
            width="13em"
            me="2.5rem"
            columns={{ sm: 2, md: 2, xl: 2 }}
            gap={5}
          >
            <div></div>
            <Button
              ms="5"
              bg="orange.300"
              width="fit-content"
              onClick={handleToggle7}
            >
              <AddIcon w={4} h={4} me="3" />
              {show7 ? "Cancel" : "Add"}
            </Button>
          </SimpleGrid>
        </Collapse>

        <Card>
          <CardHeader>
            <Text fontSize="xl" color={textColor} fontWeight="bold">
              Webinar
            </Text>
            <Button
              ms="auto"
              bg="orange.400"
              width="fit-content"
              height="2em"
              onClick={() => setDrop8(!drop8)}
            >
              {drop8 ? "Hide" : "Show"}
            </Button>
          </CardHeader>
          <Collapse in={drop8}>
            <CardBody mt="1em" overflowX={{ sm: "scroll" }}>
              <Table variant="simple" color={textColor}>
                <Thead>
                  <Tr my=".8rem" pl="0px" color="gray.400">
                    <Th color="gray.400">Topic</Th>
                    <Th color="gray.400">Date and Year</Th>
                    <Th color="gray.400">Resource Person</Th>
                    <Th color="gray.400">Outcome</Th>
                    <Th color="gray.400">Credits</Th>
                    <Th color="gray.400">Verify Status</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {p8data.map((item8) => {
                    return (
                      <TableRow6
                        row1={item8.Topic}
                        row2={item8.Date_and_year3}
                        row3={item8.Resorce_person}
                        row4={item8.OutcomeID3}
                        row5={item8.credits}
                        row6={item8.verified}
                      />
                    );
                  })}
                </Tbody>
              </Table>
            </CardBody>
          </Collapse>
        </Card>

        <Collapse in={show8 && drop8}>
          <Card>
            <CardBody overflowX={{ sm: "scroll" }}>
              <Table variant="simple" color={textColor}>
                <Thead>
                  <Tr>
                    <Th color="gray.400">Topic</Th>
                    <Th color="gray.400">Date and Year</Th>
                    <Th color="gray.400">Resource Person</Th>
                    <Th color="gray.400">Outcome</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td minWidth={{ sm: "14em" }}>
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
                          placeholder="Topic"
                          id="Topic"
                        />
                      </Flex>
                    </Td>
                    <Td minWidth={{ sm: "14em" }}>
                      <Flex
                        align="center"
                        py=".8rem"
                        minWidth="100%"
                        flexWrap="nowrap"
                      >
                        <Input
                          borderRadius="5px"
                          fontSize="sm"
                          type="date"
                          placeholder="Enter Date and Year"
                          id="Date_and_year3"
                        />
                      </Flex>
                    </Td>

                    <Td minWidth={{ sm: "14em" }}>
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
                          placeholder="Resource Person"
                          id="OutcomeID3"
                        />
                      </Flex>
                    </Td>
                    <Td minWidth={{ sm: "14em" }}>
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
                          id="Topic"
                        />
                      </Flex>
                    </Td>
                    <Td>
                      <SlideFade in={show8}>
                        <Button
                          onClick={substudinter}
                          bg="orange.300"
                          width="fit-content"
                        >
                          Submit
                        </Button>
                      </SlideFade>
                    </Td>
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
                  </Tr>
                </Tbody>
              </Table>
            </CardBody>
          </Card>
        </Collapse>
        <Collapse in={drop8}>
          <SimpleGrid
            marginLeft="auto"
            width="13em"
            me="2.5rem"
            columns={{ sm: 2, md: 2, xl: 2 }}
            gap={5}
          >
            <div></div>
            <Button
              ms="5"
              bg="orange.300"
              width="fit-content"
              onClick={handleToggle8}
            >
              <AddIcon w={4} h={4} me="3" />
              {show8 ? "Cancel" : "Add"}
            </Button>
          </SimpleGrid>
        </Collapse>

        <Card>
          <CardHeader>
            <Text fontSize="xl" color={textColor} fontWeight="bold">
              Competition
            </Text>
            <Button
              ms="auto"
              bg="orange.400"
              width="fit-content"
              height="2em"
              onClick={() => setDrop9(!drop9)}
            >
              {drop9 ? "Hide" : "Show"}
            </Button>
          </CardHeader>
          <Collapse in={drop9}>
            <CardBody mt="1em" overflowX={{ sm: "scroll" }}>
              <Table variant="simple" color={textColor}>
                <Thead>
                  <Tr my=".8rem" pl="0px" color="gray.400">
                    <Th color="gray.400">Name</Th>
                    <Th color="gray.400">
                      Type of Competion (Coding / Project)
                    </Th>
                    <Th color="gray.400">Date and year</Th>
                    <Th color="gray.400">Position Secured</Th>
                    <Th color="gray.400">Credits</Th>
                    <Th color="gray.400">Verify Status</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {p9data.map((item9) => {
                    return (
                      <TableRow6
                        row1={item9.Name}
                        row2={item9.Type}
                        row3={item9.Date_and_year8}
                        row4={item9.Position}
                        row5={item9.credits}
                        row6={item9.verified}
                      />
                    );
                  })}
                </Tbody>
              </Table>
            </CardBody>
          </Collapse>
        </Card>

        <Collapse in={show9 && drop9}>
          <Card>
            <CardBody overflowX={{ sm: "scroll" }}>
              <Table variant="simple" color={textColor}>
                <Thead>
                  <Tr>
                    <Th color="gray.400">Name</Th>
                    <Th color="gray.400">
                      Type of Competion (Coding / Project)
                    </Th>
                    <Th color="gray.400">Date and year</Th>
                    <Th color="gray.400">Position Secured</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td minWidth={{ sm: "14em" }}>
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
                          placeholder="Enter Name"
                          id="Topic"
                        />
                      </Flex>
                    </Td>
                    <Td minWidth={{ sm: "14em" }}>
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
                          placeholder="Enter Type Of Competition"
                          id="type_Of_Competition"
                        />
                      </Flex>
                    </Td>

                    <Td minWidth={{ sm: "14em" }}>
                      <Flex
                        align="center"
                        py=".8rem"
                        minWidth="100%"
                        flexWrap="nowrap"
                      >
                        <Input
                          borderRadius="5px"
                          fontSize="sm"
                          type="date"
                          placeholder="Enter Date"
                          id="Date_and_year3"
                        />
                      </Flex>
                    </Td>
                    <Td minWidth={{ sm: "14em" }}>
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
                          placeholder="Enter Position"
                          id="Position"
                        />
                      </Flex>
                    </Td>

                    <Td>
                      <SlideFade in={show9}>
                        <Button
                          onClick={substudinter}
                          bg="orange.300"
                          width="fit-content"
                        >
                          Submit
                        </Button>
                      </SlideFade>
                    </Td>
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
                  </Tr>
                </Tbody>
              </Table>
            </CardBody>
          </Card>
        </Collapse>
        <Collapse in={drop9}>
          <SimpleGrid
            marginLeft="auto"
            width="13em"
            me="2.5rem"
            columns={{ sm: 2, md: 2, xl: 2 }}
            gap={5}
          >
            <div></div>
            <Button
              ms="5"
              bg="orange.300"
              width="fit-content"
              onClick={handleToggle9}
            >
              <AddIcon w={4} h={4} me="3" />
              {show9 ? "Cancel" : "Add"}
            </Button>
          </SimpleGrid>
        </Collapse>

        <Card>
          <CardHeader>
            <Text fontSize="xl" color={textColor} fontWeight="bold">
              Placement Training
            </Text>
            <Button
              ms="auto"
              bg="orange.400"
              width="fit-content"
              height="2em"
              onClick={() => setDrop10(!drop10)}
            >
              {drop10 ? "Hide" : "Show"}
            </Button>
          </CardHeader>
          <Collapse in={drop10}>
            <CardBody mt="1em" overflowX={{ sm: "scroll" }}>
              <Table variant="simple" color={textColor}>
                <Thead>
                  <Tr my=".8rem" pl="0px" color="gray.400">
                    <Th color="gray.400">Aptitude</Th>
                    <Th color="gray.400">Soft Skill</Th>
                    <Th color="gray.400">Reasoning</Th>
                    <Th color="gray.400">Technical Skill</Th>
                    <Th color="gray.400">Credits</Th>
                    <Th color="gray.400">Verify Status</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {p10data.map((item10) => {
                    return (
                      <TableRow6
                        row1={item10.Aptitude}
                        row2={item10.Soft_skill}
                        row3={item10.Reasoning}
                        row4={item10.Tech_skill}
                        row5={item10.credits}
                        row6={item10.verified}
                      />
                    );
                  })}
                </Tbody>
              </Table>
            </CardBody>
          </Collapse>
        </Card>

        <Collapse in={show10 && drop10}>
          <Card>
            <CardBody overflowX={{ sm: "scroll" }}>
              <Table variant="simple" color={textColor}>
                <Thead>
                  <Tr>
                    <Th color="gray.400">Aptitude</Th>
                    <Th color="gray.400">Soft Skill</Th>
                    <Th color="gray.400">Reasoning</Th>
                    <Th color="gray.400">Technical Skill</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td minWidth={{ sm: "14em" }}>
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
                          placeholder="Aptitude"
                          id="Aptitude"
                        />
                      </Flex>
                    </Td>
                    <Td minWidth={{ sm: "14em" }}>
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
                          placeholder="Soft Skills"
                          id="Soft Skill"
                        />
                      </Flex>
                    </Td>

                    <Td minWidth={{ sm: "14em" }}>
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
                          placeholder="Reasoning"
                          id="Reasoning"
                        />
                      </Flex>
                    </Td>
                    <Td minWidth={{ sm: "14em" }}>
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
                          placeholder="Technical Skill"
                          id="Technical Skill"
                        />
                      </Flex>
                    </Td>

                    <Td>
                      <SlideFade in={show10}>
                        <Button
                          onClick={substudinter}
                          bg="orange.300"
                          width="fit-content"
                        >
                          Submit
                        </Button>
                      </SlideFade>
                    </Td>
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
                  </Tr>
                </Tbody>
              </Table>
            </CardBody>
          </Card>
        </Collapse>
        <Collapse in={drop10}>
          <SimpleGrid
            marginLeft="auto"
            width="13em"
            me="2.5rem"
            columns={{ sm: 2, md: 2, xl: 2 }}
            gap={5}
          >
            <div></div>
            <Button
              ms="5"
              bg="orange.300"
              width="fit-content"
              onClick={handleToggle10}
            >
              <AddIcon w={4} h={4} me="3" />
              {show10 ? "Cancel" : "Add"}
            </Button>
          </SimpleGrid>
        </Collapse>

        <Card>
          <CardHeader>
            <Text fontSize="xl" color={textColor} fontWeight="bold">
              Mini Project
            </Text>
            <Button
              ms="auto"
              bg="orange.400"
              width="fit-content"
              height="2em"
              onClick={() => setDrop11(!drop11)}
            >
              {drop11 ? "Hide" : "Show"}
            </Button>
          </CardHeader>
          <Collapse in={drop11}>
            <CardBody mt="1em" overflowX={{ sm: "scroll" }}>
              <Table variant="simple" color={textColor}>
                <Thead>
                  <Tr my=".8rem" pl="0px" color="gray.400">
                    <Th color="gray.400">Title</Th>
                    <Th color="gray.400">Objective</Th>
                    <Th color="gray.400">Duration</Th>
                    <Th color="gray.400">Outcome</Th>
                    <Th color="gray.400">Credits</Th>
                    <Th color="gray.400">Verify Status</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {p11data.map((item11) => {
                    return (
                      <TableRow6
                        row1={item11.Title}
                        row2={item11.Objective}
                        row3={item11.Duration2}
                        row4={item11.OutcomeID8}
                        row5={item11.credits}
                        row6={item11.verified}
                      />
                    );
                  })}
                </Tbody>
              </Table>
            </CardBody>
          </Collapse>
        </Card>

        <Collapse in={show11 && drop11}>
          <Card>
            <CardBody overflowX={{ sm: "scroll" }}>
              <Table variant="simple" color={textColor}>
                <Thead>
                  <Tr>
                    <Th color="gray.400">Title</Th>
                    <Th color="gray.400">Objective</Th>
                    <Th color="gray.400">Duration</Th>
                    <Th color="gray.400">Outcome</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td minWidth={{ sm: "14em" }}>
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
                          placeholder="Title"
                          id="Aptitude"
                        />
                      </Flex>
                    </Td>
                    <Td minWidth={{ sm: "14em" }}>
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
                          placeholder="Objective"
                          id="Soft Skill"
                        />
                      </Flex>
                    </Td>

                    <Td minWidth={{ sm: "14em" }}>
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
                          placeholder="Duration"
                          id="Reasoning"
                        />
                      </Flex>
                    </Td>
                    <Td minWidth={{ sm: "14em" }}>
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
                          id="Technical Skill"
                        />
                      </Flex>
                    </Td>

                    <Td>
                      <SlideFade in={show11}>
                        <Button
                          onClick={substudinter}
                          bg="orange.300"
                          width="fit-content"
                        >
                          Submit
                        </Button>
                      </SlideFade>
                    </Td>
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
                  </Tr>
                </Tbody>
              </Table>
            </CardBody>
          </Card>
        </Collapse>
        <Collapse in={drop11}>
          <SimpleGrid
            marginLeft="auto"
            width="13em"
            me="2.5rem"
            columns={{ sm: 2, md: 2, xl: 2 }}
            gap={5}
          >
            <div></div>
            <Button
              ms="5"
              bg="orange.300"
              width="fit-content"
              onClick={handleToggle11}
            >
              <AddIcon w={4} h={4} me="3" />
              {show11 ? "Cancel" : "Add"}
            </Button>
          </SimpleGrid>
        </Collapse>

        <Card>
          <CardHeader p="6px 0px 22px 0px">
            <Text fontSize="xl" color={textColor} fontWeight="bold">
              Final Project
            </Text>
            <Button
              ms="auto"
              bg="orange.400"
              width="fit-content"
              height="2em"
              onClick={() => setDrop12(!drop12)}
            >
              {drop12 ? "Hide" : "Show"}
            </Button>
          </CardHeader>
          <Collapse in={drop12}>
            <CardBody mt="1em" overflowX={{ sm: "scroll" }}>
              <Table variant="simple" color={textColor}>
                <Thead>
                  <Tr my=".8rem" pl="0px" color="gray.400">
                    <Th color="gray.400">Title</Th>
                    <Th color="gray.400">Objective</Th>
                    <Th color="gray.400">Duration</Th>
                    <Th color="gray.400">Outcome</Th>
                    <Th color="gray.400">Credits</Th>
                    <Th color="gray.400">Verify Status</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {p12data.map((item12) => {
                    return (
                      <TableRow6
                        row1={item12.Title}
                        row2={item12.Objective}
                        row3={item12.Duration2}
                        row4={item12.OutcomeID8}
                        row5={item12.credits}
                        row6={item12.verified}
                      />
                    );
                  })}
                </Tbody>
              </Table>
            </CardBody>
          </Collapse>
        </Card>

        <Collapse in={show12 && drop12}>
          <Card>
            <CardBody overflowX={{ sm: "scroll" }}>
              <Table variant="simple" color={textColor}>
                <Thead>
                  <Tr>
                    <Th color="gray.400">Title</Th>
                    <Th color="gray.400">Objective</Th>
                    <Th color="gray.400">Duration</Th>
                    <Th color="gray.400">Outcome</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td minWidth={{ sm: "14em" }}>
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
                          placeholder="Title"
                          id="Aptitude"
                        />
                      </Flex>
                    </Td>
                    <Td minWidth={{ sm: "14em" }}>
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
                          placeholder="Objective"
                          id="Soft Skill"
                        />
                      </Flex>
                    </Td>

                    <Td minWidth={{ sm: "14em" }}>
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
                          placeholder="Duration"
                          id="Reasoning"
                        />
                      </Flex>
                    </Td>
                    <Td minWidth={{ sm: "14em" }}>
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
                          id="Technical Skill"
                        />
                      </Flex>
                    </Td>

                    <Td>
                      <SlideFade in={show12}>
                        <Button
                          onClick={substudinter}
                          bg="orange.300"
                          width="fit-content"
                        >
                          Submit
                        </Button>
                      </SlideFade>
                    </Td>
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
                  </Tr>
                </Tbody>
              </Table>
            </CardBody>
          </Card>
        </Collapse>
        <Collapse in={drop12}>
          <SimpleGrid
            marginLeft="auto"
            width="13em"
            me="2.5rem"
            columns={{ sm: 2, md: 2, xl: 2 }}
            gap={5}
          >
            <div></div>
            <Button
              ms="5"
              bg="orange.300"
              width="fit-content"
              onClick={handleToggle12}
            >
              <AddIcon w={4} h={4} me="3" />
              {show12 ? "Cancel" : "Add"}
            </Button>
          </SimpleGrid>
        </Collapse>

        <Card>
          <CardHeader>
            <Text fontSize="xl" color={textColor} fontWeight="bold">
              Publications
            </Text>
            <Button
              ms="auto"
              bg="orange.400"
              width="fit-content"
              height="2em"
              onClick={() => setDrop13(!drop13)}
            >
              {drop13 ? "Hide" : "Show"}
            </Button>
          </CardHeader>
          <Collapse in={drop13}>
            <CardBody mt="1em" overflowX={{ sm: "scroll" }}>
              <Table variant="simple" color={textColor}>
                <Thead>
                  <Tr my=".8rem" pl="0px" color="gray.400">
                    <Th color="gray.400">Conference / Journal</Th>
                    <Th color="gray.400">Name of Conference / Journal</Th>
                    <Th color="gray.400">Title Of the Article</Th>
                    <Th color="gray.400">Impact Factor</Th>
                    <Th color="gray.400">Indexed In</Th>
                    <Th color="gray.400">Credits</Th>
                    <Th color="gray.400">Verify Status</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {p13data.map((item13) => {
                    return (
                      <TableRow7
                        row1={item13.Conference}
                        row2={item13.Name2}
                        row3={item13.Title2}
                        row4={item13.Impact}
                        row5={item13.Indexed}
                        row6={item13.credits}
                        row7={item13.verified}
                      />
                    );
                  })}
                </Tbody>
              </Table>
            </CardBody>
          </Collapse>
        </Card>

        <Collapse in={show13 && drop13}>
          <Card>
            <CardBody overflowX={{ sm: "scroll" }}>
              <Table variant="simple" color={textColor}>
                <Thead>
                  <Tr>
                    <Th color="gray.400">Conference / Journal</Th>
                    <Th color="gray.400">Name of Conference / Journal</Th>
                    <Th color="gray.400">Title Of the Article</Th>
                    <Th color="gray.400">Impact Factor</Th>
                    <Th color="gray.400">Indexed In</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td minWidth={{ sm: "14em" }}>
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
                          placeholder="Conference / Journal"
                          id="Aptitude"
                        />
                      </Flex>
                    </Td>
                    <Td minWidth={{ sm: "14em" }}>
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
                          placeholder="Name of Conference / Journal"
                          id="Soft Skill"
                        />
                      </Flex>
                    </Td>

                    <Td minWidth={{ sm: "14em" }}>
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
                          placeholder="Title Of The Article"
                          id="Reasoning"
                        />
                      </Flex>
                    </Td>
                    <Td minWidth={{ sm: "14em" }}>
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
                          placeholder="Impact Factor"
                          id="Technical Skill"
                        />
                      </Flex>
                    </Td>
                    <Td minWidth={{ sm: "14em" }}>
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
                          placeholder="Indexed In"
                          id="Technical Skill"
                        />
                      </Flex>
                    </Td>

                    <Td>
                      <SlideFade in={show13}>
                        <Button
                          onClick={substudinter}
                          bg="orange.300"
                          width="fit-content"
                        >
                          Submit
                        </Button>
                      </SlideFade>
                    </Td>
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
                  </Tr>
                </Tbody>
              </Table>
            </CardBody>
          </Card>
        </Collapse>
        <Collapse in={drop13}>
          <SimpleGrid
            marginLeft="auto"
            width="13em"
            me="2.5rem"
            columns={{ sm: 2, md: 2, xl: 2 }}
            gap={5}
          >
            <div></div>
            <Button
              ms="5"
              bg="orange.300"
              width="fit-content"
              onClick={handleToggle13}
            >
              <AddIcon w={4} h={4} me="3" />
              {show13 ? "Cancel" : "Add"}
            </Button>
          </SimpleGrid>
        </Collapse>
      </SimpleGrid>
    </Flex>
  );
}

export default ProfessionalDevelopmentData0;
