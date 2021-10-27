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
  useColorModeValue,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Select,
  SimpleGrid,
  Button,
  ButtonGroup,
  useDisclosure,
  Collapse,
} from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import GeneralParticularstablerow from "components/Tables/GeneralParticularstablerow";
import Selection from "components/Select/Selection";
import { SearchBar } from "components/Navbars/SearchBar/SearchBar";

function GeneralInformation() {
  const [data, setData] = useState([]);
  let params = new URLSearchParams;

  params.append("department",localStorage.getItem("dept"))
  useEffect(async () => {
    axios.post("http://localhost:5000/GeneralHOD",params).then((items) => {
      setData(items.data);
    });
  });
  const { isOpen, onToggle } = useDisclosure();
  const textColor = useColorModeValue("gray.700", "white");

  return (
    <Flex direction="column" pt={{ base: "120px", md: "75px" }}>
      <Card mb="1rem">
        <CardBody>
          <Flex flexDirection="column" align="center" justify="center" w="100%">
            <Text fontSize="xl" color={textColor} fontWeight="bold" mr="auto">
              General Information
            </Text>
            <Selection />
            <Flex direction="column" align="flex-end" w="100%">
              <Button
                onClick={onToggle}
                marginTop="3rem"
                marginBottom="1rem"
                marginRight="1rem"
                colorScheme="orange"
                variant="solid"
              >
                View
              </Button>
            </Flex>
          </Flex>
        </CardBody>
        <Collapse in={isOpen} animateOpacity>
          <Card>
            <CardHeader>Search Student</CardHeader>
            <SearchBar />
            <br />
            <Button
              colorScheme="orange"
              alignSelf="flex-end"
              variant="solid"
              width="25%"
            >
              Download
            </Button>
          </Card>
        </Collapse>
      </Card>
      <Collapse in={isOpen} animateOpacity>
        <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
          <CardHeader p="6px 0px 22px 0px">
            <Text fontSize="xl" color={textColor} fontWeight="bold">
              Students List
            </Text>
          </CardHeader>
          <CardBody>
            <Table variant="simple" color={textColor}>
              <Thead>
                <Tr my=".8rem" pl="0px" color="gray.400">
                  <Th color="gray.400">Roll No.</Th>
                  <Th color="gray.400">Name</Th>
                  <Th color="gray.400">Register No</Th>
                  <Th color="gray.400">Batch</Th>
                  <Th color="gray.400">Email</Th>
                  <Th></Th>
                </Tr>
              </Thead>
              <Tbody>
                {data.map((item) => {
                  return (
                    <GeneralParticularstablerow
                    roll={item.roll_no}
                    name={item.sname}
                    reg={item.reg_no}
                    batch={item.batch}
                    email={item.licet_email}
                  />
                  );
                })}
              </Tbody>
            </Table>
          </CardBody>
        </Card>
      </Collapse>
    </Flex>
  );
}

export default GeneralInformation;
