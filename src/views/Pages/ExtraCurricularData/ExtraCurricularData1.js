//Class Advisor ExtraCurricularData

import React from "react";
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
import ExtraCurricualarTableRow1 from "components/Tables/ExtraCurricularTableRow/ExtraCurricularTableRow1/ExtraCurricularClubTableRow1";
import ExtraCurricualarTableRow2 from "components/Tables/ExtraCurricularTableRow/ExtraCurricularTableRow1/ExtraCurricularOutreachTableRow1";
import ExtraCurricualarTableRow3 from "components/Tables/ExtraCurricularTableRow/ExtraCurricularTableRow1/ExtraCurricularSportsTableRow1";
import ExtraCurricualarTableRow4 from "components/Tables/ExtraCurricularTableRow/ExtraCurricularTableRow1/ExtraCurricularCulturalsTableRow1";
import { IndustrialVist } from "variables/general";
import { InplantTraining } from "variables/general";
import { GuestLecture } from "variables/general";
import { Clubs } from "variables/general";
import { OutReachActivity } from "variables/general";
import { SportsAchievements } from "variables/general";
import { Culturals } from "variables/general";

function ExtraCurricularData() {
  const textColor = useColorModeValue("gray.700", "white");

  return (
    <Flex direction="column" pt={{ base: "400px", md: "75px" }}>
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
                  {Clubs.map((row) => {
                    return (
                      <ExtraCurricualarTableRow1
                        row1={row.row1}
                        row2={row.row2}
                        row3={row.row3}
                        row4={row.row4}
                        row5={row.row5}
                        row6={row.row6}
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
                  {OutReachActivity.map((row) => {
                    return (
                      <ExtraCurricualarTableRow2
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
                  {SportsAchievements.map((row) => {
                    return (
                      <ExtraCurricualarTableRow3
                        row1={row.row1}
                        row2={row.row2}
                        row3={row.row3}
                        row4={row.row4}
                        row5={row.row5}
                        row6={row.row6}
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
                  {Culturals.map((row) => {
                    return (
                      <ExtraCurricualarTableRow4
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
        </GridItem>
      </Grid>
    </Flex>
  );
}

export default ExtraCurricularData;
