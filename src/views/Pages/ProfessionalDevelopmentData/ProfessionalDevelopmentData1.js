/** @format */

//Class Advisor ProfessionalDevelopment Data

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
  Grid,
  GridItem,
} from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import ProfessionalDevelopmentTableRow1 from "components/Tables/ProfessionalTableRow/ProfessionalTableRow1/PDIndustrialVisitTR1";


function ProfessionalDevelopmentData() {
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
  

  const textColor = useColorModeValue("gray.700", "white");
  var server_URL = "http://localhost:5000/";

  let params = new URLSearchParams();
  params.append("RollNumber", localStorage.getItem("generalStudent"));
  useState(async () => {
    axios
      .all([
        axios.post(server_URL + "Industrialv_cadisplay", params),
        
      ])
      .then(
        axios.spread((data1, data2, data3, data4) => {
          setp1data(data1.data);
         
        })
      );
  }, []);

  return (
    <Flex direction="column" pt={{ base: "120px", md: "65px" }}>
      <Grid columns={{ sm: 1, md: 2, xl: 2 }} gap={4}>
        <GridItem>
          <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
            <CardHeader p="6px 0px 22px 0px">
              <Text fontSize="xl" color={textColor} fontWeight="bold">
                Industrial Visit
              </Text>
            </CardHeader>
            <CardBody>
              <Table variant="simple" color={textColor}>
                <Thead>
                  <Tr my=".8rem" pl="0px" color="gray.400">
                  <Th color="gray.400">Industry</Th>
                    <Th color="gray.400">Date and Year</Th>
                    <Th color="gray.400">Outcome</Th>
                    <Th color="gray.400">Credits</Th>
                    <Th color="gray.400">Verify Status</Th>
                    <Th color="gray.400">Edit</Th>
                    <Th color="gray.400">Delete</Th>
                    <Th color="gray.400">Verify</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {p1data.map((item1) => {
                    return (
                      <ProfessionalDevelopmentTableRow1
                        id={item1.s_no}
                        row1={item1.industry_name}
                        row2={item1.date}
                        row3={item1.outcome}
                        row4={item1.credits}
                        row5={item1.verified}
                      />
                    );
                  })}
                </Tbody>
              </Table>
            </CardBody>
          </Card>
        </GridItem>
        
      </Grid>
    </Flex>
  );
}

export default ProfessionalDevelopmentData;
