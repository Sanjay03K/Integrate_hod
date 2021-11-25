/** @format */

//Student AcademicData

import React, { useState, useEffect } from "react";
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
  Stat,
  StatLabel,
  Box,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Select,
  SimpleGrid,
} from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import BarChart from "components/Charts/BarChart";
import LineChart from "components/Charts/LineChart";

import Academictablerow from "components/Tables/AcademicTableRow/Academictablerow0";
import Academicsummarytablerow from "components/Tables/AcademicTableRow/AcademicSummaryTableRow/Academicsummarytablerow0";

import { AcademicSummary } from "variables/general";
import { Academicinfo } from "variables/general";
import axios from "axios";
var server_URL = "http://localhost:5000/";

function Academicdata() {
  const textColor = useColorModeValue("gray.700", "white");
  let params = new URLSearchParams();
  const [data, setData] = useState([]);

  params.append("StudentDetails", localStorage.getItem("StudentRoll"));
  useEffect(async () => {
    axios.post(server_URL + "getColumnName", params).then((items) => {
      let filtered_data = items.data.filter(
        (header) =>
          header.COLUMN_NAME != "id" && header.COLUMN_NAME != "roll_no"
      );
      // console.log(filtered_data);
      setData(filtered_data);
    });
  });
  return (
    <Flex direction="column" pt={{ base: "120px", md: "65px" }}>
      <SimpleGrid columns={{ sm: 1, md: 1, xl: 1 }} gap={5}>
        <Card>
          <CardHeader p="6px 0px 22px 0px">
            <Text fontSize="xl" color={textColor} fontWeight="bold">
              Internal Exam Results
            </Text>
          </CardHeader>
          <CardBody overflowX={{ sm: "scroll" }}>
            <Table variant="simple" color={textColor}>
              <Thead>
                <Tr my=".8rem" pl="0px" color="gray.400">
                  {data.map((items) => {
                    return <Th color="gray.400">{items.COLUMN_NAME}</Th>;
                  })}
                </Tr>
              </Thead>

              <Tbody>
                {Academicinfo.map((row) => {
                  return (
                    <Academictablerow
                      row1={row.row1}
                      row2={row.row2}
                      row3={row.row3}
                      row4={row.row4}
                      row5={row.row5}
                    />
                  );
                })}
              </Tbody>
            </Table>
          </CardBody>
        </Card>
        <SimpleGrid columns={{ sm: 1, md: 2, xl: 2 }} gap={5}>
          <Card minH="300px">
            <CardBody>
              <Flex
                flexDirection="column"
                align="center"
                justify="center"
                w="100%"
              >
                <Stat mr="auto">
                  <StatLabel
                    fontSize="sm"
                    color="gray.400"
                    fontWeight="bold"
                    pb="1.5rem"
                  >
                    Academic Results
                  </StatLabel>
                </Stat>
                <BarChart />
              </Flex>
            </CardBody>
          </Card>
          <Card minH="300px">
            <CardBody>
              <Flex
                flexDirection="column"
                align="center"
                justify="center"
                w="100%"
              >
                <Stat mr="auto">
                  <StatLabel
                    fontSize="sm"
                    color="gray.400"
                    fontWeight="bold"
                    pb=".1rem"
                  >
                    Placement Statistics
                  </StatLabel>
                </Stat>
                <Box w="100%" h={{ sm: "225px" }} ps="8px">
                  <LineChart />
                </Box>
              </Flex>
            </CardBody>
          </Card>

          <Card>
            <CardHeader p="6px 0px 22px 0px">
              <Text fontSize="xl" color={textColor} fontWeight="bold">
                Academic Summary
              </Text>
            </CardHeader>
            <CardBody overflowX={{ sm: "scroll" }}>
              <Table variant="simple" color={textColor}>
                <Tbody>
                  {AcademicSummary.map((row) => {
                    return (
                      <Academicsummarytablerow
                        row1={row.row1}
                        row2={row.row2}
                      />
                    );
                  })}
                </Tbody>
              </Table>
            </CardBody>
          </Card>
        </SimpleGrid>
      </SimpleGrid>
    </Flex>
  );
}

export default Academicdata;
