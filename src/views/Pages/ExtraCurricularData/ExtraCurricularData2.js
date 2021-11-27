/** @format */

//HoD ExtraCurricularData

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

import ExtraCurricualarTableRow1 from "components/Tables/ExtraCurricularTableRow/ExtraCurricularTableRow2/ExtraCurricularClubTableRow2";
import ExtraCurricualarTableRow2 from "components/Tables/ExtraCurricularTableRow/ExtraCurricularTableRow2/ExtraCurricularOutreachTableRow2";
import ExtraCurricualarTableRow3 from "components/Tables/ExtraCurricularTableRow/ExtraCurricularTableRow2/ExtraCurricularSportsTableRow2";
import ExtraCurricualarTableRow4 from "components/Tables/ExtraCurricularTableRow/ExtraCurricularTableRow2/ExtraCurricularCulturalsTableRow2";

import { Clubs } from "variables/general";
import { OutReachActivity } from "variables/general";
import { SportsAchievements } from "variables/general";
import { Culturals } from "variables/general";

function ExtraCurricularData() {
  const textColor = useColorModeValue("gray.700", "white");
  const [Cdata, setCdata] = useState([]);
  const [Odata, setOdata] = useState([]);
  const [Sdata, setSdata] = useState([]);
  const [CUdata, setCudata] = useState([]);

  var server_URL = "http://localhost:5000/";

  let params = new URLSearchParams();
  params.append("RollNumber", localStorage.getItem("generalStudent"));
  params.append("StudentDetails", localStorage.getItem("generalStudent"));

  useEffect(async () => {
    axios
      .all([
        axios.post(server_URL + "ExtraClubCADisplay", params),
        axios.post(server_URL + "ExtraOutreachCADisplay", params),
        axios.post(server_URL + "ExtraSportsStudentDisplay", params),
        axios.post(server_URL + "ExtraCulturalStudentDisplay", params),
      ])
      .then(
        axios.spread((data1, data2, data3, data4) => {
          setCdata(data1.data);
          setOdata(data2.data);
          setSdata(data3.data);
          setCudata(data4.data);
        })
      );
  }, []);
  console.log(Cdata);

  return (
    <Flex direction="column" pt={{ base: "120px", md: "65px" }}>
      <Grid columns={{ sm: 1, md: 2, xl: 2 }} gap={4}>
        <GridItem>
          <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
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
                    <Th color="gray.400">Credits</Th>
                    <Th color="gray.400">Verify</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {Cdata.map((item) => {
                    return (
                      <ExtraCurricualarTableRow1
                        id={item.s_no}
                        row1={item.club_name}
                        row2={item.activity_name}
                        row3={item.date}
                        row4={item.outcome}
                        row5={item.credits}
                        row6={item.verified}
                      />
                    );
                  })}
                </Tbody>
              </Table>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem>
          <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
            <CardHeader p="6px 0px 22px 0px">
              <Text fontSize="xl" color={textColor} fontWeight="bold">
                Outreach Activity
              </Text>
            </CardHeader>
            <CardBody>
              <Table variant="simple" color={textColor}>
                <Thead>
                  <Tr my=".8rem" pl="0px" color="gray.400">
                    <Th color="gray.400">Activity</Th>
                    <Th color="gray.400">Date & Year</Th>
                    <Th color="gray.400">Outcome</Th>
                    <Th color="gray.400">Credits</Th>
                    <Th color="gray.400">Verify</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {Odata.map((item) => {
                    return (
                      <ExtraCurricualarTableRow2
                        id={item.s_no}
                        row1={item.outreach_activity_name}
                        row2={item.outreach_date}
                        row3={item.outreach_outcome}
                        row4={item.credits}
                        row5={item.outreach_verified}
                      />
                    );
                  })}
                </Tbody>
              </Table>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem>
          <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
            <CardHeader p="6px 0px 22px 0px">
              <Text fontSize="xl" color={textColor} fontWeight="bold">
                Sports Achievements
              </Text>
            </CardHeader>
            <CardBody>
              <Table variant="simple" color={textColor}>
                <Thead>
                  <Tr my=".8rem" pl="0px" color="gray.400">
                    <Th color="gray.400">Name Of The Sport</Th>
                    <Th color="gray.400">Representation</Th>
                    <Th color="gray.400">Position Secured</Th>
                    <Th color="gray.400">Date & Year</Th>
                    <Th color="gray.400">Credits</Th>
                    <Th color="gray.400">Verify</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {Sdata.map((row) => {
                    return (
                      <ExtraCurricualarTableRow3
                        row1={row.sport_name}
                        row2={row.representation}
                        row3={row.position_secures}
                        row4={row.date}
                        row5={row.credits}
                        row6={row.verified}
                      />
                    );
                  })}
                </Tbody>
              </Table>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem>
          <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
            <CardHeader p="6px 0px 22px 0px">
              <Text fontSize="xl" color={textColor} fontWeight="bold">
                Culturals
              </Text>
            </CardHeader>
            <CardBody>
              <Table variant="simple" color={textColor}>
                <Thead>
                  <Tr my=".8rem" pl="0px" color="gray.400">
                    <Th color="gray.400">Name Of The Event</Th>
                    <Th color="gray.400">Date and Year</Th>
                    <Th color="gray.400">Position Secured</Th>
                    <Th color="gray.400">Credits</Th>
                    <Th color="gray.400">Verify</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {CUdata.map((row) => {
                    return (
                      <ExtraCurricualarTableRow4
                        row1={row.event_name}
                        row2={row.date}
                        row3={row.position_secures}
                        row4={row.credits}
                        row5={row.verified}
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

export default ExtraCurricularData;
