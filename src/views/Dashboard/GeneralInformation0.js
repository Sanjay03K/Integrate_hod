import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
// Chakra imports
import {
  Flex,
  Table,
  Tbody,
  Text,
  Tr,
  Td,
  useColorModeValue,
  SimpleGrid,
  Button,
} from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import GeneralParticularstablerow from "components/Tables/GeneralParticularstablerow";

function GeneralInformationdata({ location }) {
  const [data, setData] = useState([]);

  let params = new URLSearchParams();
  params.append("StudentDetails", localStorage.getItem("StudentRoll"));
  console.log(localStorage);

  axios.post("http://localhost:5000/GeneralStudent", params).then((items) => {
    setData(items.data);
  });

  const textColor = useColorModeValue("gray.700", "white");
  const history = useHistory();

  const handleRoute = () => {
    history.push("/GeneralParticularsTableRowEdit", {
      from: GeneralInformationdata,
    });
  };
  var GData = GeneralParticularstablerow;

  return (
    <Flex direction="column" pt={{ base: "500px", md: "75px" }}>
      <SimpleGrid columns={{ sm: 1, md: 1, xl: 1 }} gap={4}>
        <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
          <CardHeader p="6px 0px 22px 0px">
            <Text fontSize="xl" color={textColor} fontWeight="bold">
              General Particulars
            </Text>
          </CardHeader>
          <CardBody>
            <Table variant="simple" color={textColor}>
              <Tbody>
                <Tr>
                  <Td minWidth={{ sm: "17rem" }}>
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Flex direction="column">
                        <Text
                          marginLeft="10em"
                          fontSize="md"
                          color={textColor}
                          fontWeight="bold"
                          minWidth="100%"
                        >
                          Student Name
                        </Text>
                      </Flex>
                    </Flex>
                  </Td>
                  {data.map((item) => {
                    return <GData data={item.sname} />;
                  })}
                </Tr>
                <Tr>
                  <Td minWidth={{ sm: "17rem" }}>
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Flex direction="column">
                        <Text
                          marginLeft="10em"
                          fontSize="md"
                          color={textColor}
                          fontWeight="bold"
                          minWidth="100%"
                        >
                          Roll No.
                        </Text>
                      </Flex>
                    </Flex>
                  </Td>
                  {data.map((item) => {
                    return <GData data={item.roll_no} />;
                  })}
                </Tr>
                <Tr>
                  <Td minWidth={{ sm: "17rem" }}>
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Flex direction="column">
                        <Text
                          marginLeft="10em"
                          fontSize="md"
                          color={textColor}
                          fontWeight="bold"
                          minWidth="100%"
                        >
                          Register No.
                        </Text>
                      </Flex>
                    </Flex>
                  </Td>
                  {data.map((item) => {
                    return <GData data={item.reg_no} />;
                  })}
                </Tr>
                <Tr>
                  <Td minWidth={{ sm: "17rem" }}>
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Flex direction="column">
                        <Text
                          marginLeft="10em"
                          fontSize="md"
                          color={textColor}
                          fontWeight="bold"
                          minWidth="100%"
                        >
                          Sex
                        </Text>
                      </Flex>
                    </Flex>
                  </Td>
                  {data.map((item) => {
                    return <GData data={item.gender} />;
                  })}
                </Tr>
                <Tr>
                  <Td minWidth={{ sm: "17rem" }}>
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Flex direction="column">
                        <Text
                          marginLeft="10em"
                          fontSize="md"
                          color={textColor}
                          fontWeight="bold"
                          minWidth="100%"
                        >
                          Date Of Birth
                        </Text>
                      </Flex>
                    </Flex>
                  </Td>
                  {data.map((item) => {
                    return <GData data={item.dob} />;
                  })}
                </Tr>
                <Tr>
                  <Td minWidth={{ sm: "17rem" }}>
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Flex direction="column">
                        <Text
                          marginLeft="10em"
                          fontSize="md"
                          color={textColor}
                          fontWeight="bold"
                          minWidth="100%"
                        >
                          Nationality
                        </Text>
                      </Flex>
                    </Flex>
                  </Td>
                  {data.map((item) => {
                    return <GData data={item.nationality} />;
                  })}
                </Tr>
                <Tr>
                  <Td minWidth={{ sm: "17rem" }}>
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Flex direction="column">
                        <Text
                          marginLeft="10em"
                          fontSize="md"
                          color={textColor}
                          fontWeight="bold"
                          minWidth="100%"
                        >
                          Religion
                        </Text>
                      </Flex>
                    </Flex>
                  </Td>
                  {data.map((item) => {
                    return <GData data={item.religion} />;
                  })}
                </Tr>
                <Tr>
                  <Td minWidth={{ sm: "17rem" }}>
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Flex direction="column">
                        <Text
                          marginLeft="10em"
                          fontSize="md"
                          color={textColor}
                          fontWeight="bold"
                          minWidth="100%"
                        >
                          If Catholic, Parish?
                        </Text>
                      </Flex>
                    </Flex>
                  </Td>
                  {data.map((item) => {
                    return <GData data={item.if_catholic_parish} />;
                  })}
                </Tr>
                <Tr>
                  <Td minWidth={{ sm: "17rem" }}>
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Flex direction="column">
                        <Text
                          marginLeft="10em"
                          fontSize="md"
                          color={textColor}
                          fontWeight="bold"
                          minWidth="100%"
                        >
                          Dalit Catholic
                        </Text>
                      </Flex>
                    </Flex>
                  </Td>
                  {data.map((item) => {
                    return <GData data={item.dalit_catholic_yn} />;
                  })}
                </Tr>
                <Tr>
                  <Td minWidth={{ sm: "17rem" }}>
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Flex direction="column">
                        <Text
                          marginLeft="10em"
                          fontSize="md"
                          color={textColor}
                          fontWeight="bold"
                          minWidth="100%"
                        >
                          Community
                        </Text>
                      </Flex>
                    </Flex>
                  </Td>
                  {data.map((item) => {
                    return <GData data={item.community} />;
                  })}
                </Tr>
                <Tr>
                  <Td minWidth={{ sm: "17rem" }}>
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Flex direction="column">
                        <Text
                          marginLeft="10em"
                          fontSize="md"
                          color={textColor}
                          fontWeight="bold"
                          minWidth="100%"
                        >
                          Blood Group
                        </Text>
                      </Flex>
                    </Flex>
                  </Td>
                  {data.map((item) => {
                    return <GData data={item.blood_group} />;
                  })}
                </Tr>
                <Tr>
                  <Td minWidth={{ sm: "17rem" }}>
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Flex direction="column">
                        <Text
                          marginLeft="10em"
                          fontSize="md"
                          color={textColor}
                          fontWeight="bold"
                          minWidth="100%"
                        >
                          Mother Tongue
                        </Text>
                      </Flex>
                    </Flex>
                  </Td>
                  {data.map((item) => {
                    return <GData data={item.mother_tongue} />;
                  })}
                </Tr>
                <Tr>
                  <Td minWidth={{ sm: "17rem" }}>
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Flex direction="column">
                        <Text
                          marginLeft="10em"
                          fontSize="md"
                          color={textColor}
                          fontWeight="bold"
                          minWidth="100%"
                        >
                          Contact Number
                        </Text>
                      </Flex>
                    </Flex>
                  </Td>
                  {data.map((item) => {
                    return <GData data={item.contant_no} />;
                  })}
                </Tr>
                <Tr>
                  <Td minWidth={{ sm: "17rem" }}>
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Flex direction="column">
                        <Text
                          marginLeft="10em"
                          fontSize="md"
                          color={textColor}
                          fontWeight="bold"
                          minWidth="100%"
                        >
                          Aadhar No.
                        </Text>
                      </Flex>
                    </Flex>
                  </Td>
                  {data.map((item) => {
                    return <GData data={item.aadhar_no} />;
                  })}
                </Tr>
                <Tr>
                  <Td minWidth={{ sm: "17rem" }}>
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Flex direction="column">
                        <Text
                          marginLeft="10em"
                          fontSize="md"
                          color={textColor}
                          fontWeight="bold"
                          minWidth="100%"
                        >
                          Official Email ID
                        </Text>
                      </Flex>
                    </Flex>
                  </Td>
                  {data.map((item) => {
                    return <GData data={item.licet_email} />;
                  })}
                </Tr>
                <Tr>
                  <Td minWidth={{ sm: "17rem" }}>
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Flex direction="column">
                        <Text
                          marginLeft="10em"
                          fontSize="md"
                          color={textColor}
                          fontWeight="bold"
                          minWidth="100%"
                        >
                          personal Email ID
                        </Text>
                      </Flex>
                    </Flex>
                  </Td>
                  {data.map((item) => {
                    return <GData data={item.email} />;
                  })}
                </Tr>
                <Tr>
                  <Td minWidth={{ sm: "17rem" }}>
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Flex direction="column">
                        <Text
                          marginLeft="10em"
                          fontSize="md"
                          color={textColor}
                          fontWeight="bold"
                          minWidth="100%"
                        >
                          Present Address
                        </Text>
                      </Flex>
                    </Flex>
                  </Td>
                  {data.map((item) => {
                    return <GData data={item.present_address} />;
                  })}
                </Tr>
                <Tr>
                  <Td minWidth={{ sm: "17rem" }}>
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Flex direction="column">
                        <Text
                          marginLeft="10em"
                          fontSize="md"
                          color={textColor}
                          fontWeight="bold"
                          minWidth="100%"
                        >
                          Permanent Address
                        </Text>
                      </Flex>
                    </Flex>
                  </Td>
                  {data.map((item) => {
                    return <GData data={item.permanent_address} />;
                  })}
                </Tr>
              </Tbody>
            </Table>
          </CardBody>
        </Card>

        <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
          <CardHeader p="6px 0px 22px 0px">
            <Text fontSize="xl" color={textColor} fontWeight="bold">
              Higher Secondary Details
            </Text>
          </CardHeader>
          <CardBody>
            <Table variant="simple" color={textColor}>
              <Tbody>
                <Tr>
                  <Td minWidth={{ sm: "17rem" }}>
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Flex direction="column">
                        <Text
                          marginLeft="10em"
                          fontSize="md"
                          color={textColor}
                          fontWeight="bold"
                          minWidth="100%"
                        >
                          Name of the school
                        </Text>
                      </Flex>
                    </Flex>
                  </Td>
                  {data.map((item) => {
                    return <GData data={item.hse_school_name} />;
                  })}
                </Tr>
                <Tr>
                  <Td minWidth={{ sm: "17rem" }}>
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Flex direction="column">
                        <Text
                          marginLeft="10em"
                          fontSize="md"
                          color={textColor}
                          fontWeight="bold"
                          minWidth="100%"
                        >
                          Board
                        </Text>
                      </Flex>
                    </Flex>
                  </Td>
                  {data.map((item) => {
                    return <GData data={item.hse_board} />;
                  })}
                </Tr>
                <Tr>
                  <Td minWidth={{ sm: "17rem" }}>
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Flex direction="column">
                        <Text
                          marginLeft="10em"
                          fontSize="md"
                          color={textColor}
                          fontWeight="bold"
                          minWidth="100%"
                        >
                          Medium Of Instruction
                        </Text>
                      </Flex>
                    </Flex>
                  </Td>
                  {data.map((item) => {
                    return <GData data={item.hse_medium} />;
                  })}
                </Tr>
                <Tr>
                  <Td minWidth={{ sm: "17rem" }}>
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Flex direction="column">
                        <Text
                          marginLeft="10em"
                          fontSize="md"
                          color={textColor}
                          fontWeight="bold"
                          minWidth="100%"
                        >
                          Second Language
                        </Text>
                      </Flex>
                    </Flex>
                  </Td>
                  {data.map((item) => {
                    return <GData data={item.hse_sec_lang} />;
                  })}
                </Tr>
                <Tr>
                  <Td minWidth={{ sm: "17rem" }}>
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Flex direction="column">
                        <Text
                          marginLeft="10em"
                          fontSize="md"
                          color={textColor}
                          fontWeight="bold"
                          minWidth="100%"
                        >
                          Group
                        </Text>
                      </Flex>
                    </Flex>
                  </Td>
                  {data.map((item) => {
                    return <GData data={item.hse_group} />;
                  })}
                </Tr>
                <Tr>
                  <Td minWidth={{ sm: "17rem" }}>
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Flex direction="column">
                        <Text
                          marginLeft="10em"
                          fontSize="md"
                          color={textColor}
                          fontWeight="bold"
                          minWidth="100%"
                        >
                          Total Marks
                        </Text>
                      </Flex>
                    </Flex>
                  </Td>
                  {data.map((item) => {
                    return <GData data={item.hse_marks} />;
                  })}
                </Tr>
                <Tr>
                  <Td minWidth={{ sm: "17rem" }}>
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Flex direction="column">
                        <Text
                          marginLeft="10em"
                          fontSize="md"
                          color={textColor}
                          fontWeight="bold"
                          minWidth="100%"
                        >
                          Overall Percentage
                        </Text>
                      </Flex>
                    </Flex>
                  </Td>
                  {data.map((item) => {
                    return <GData data={item.hse_percentage} />;
                  })}
                </Tr>
                <Tr>
                  <Td minWidth={{ sm: "17rem" }}>
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Flex direction="column">
                        <Text
                          marginLeft="10em"
                          fontSize="md"
                          color={textColor}
                          fontWeight="bold"
                          minWidth="100%"
                        >
                          Cut-Off Marks
                        </Text>
                      </Flex>
                    </Flex>
                  </Td>
                  {data.map((item) => {
                    return <GData data={item.hse_cutoff} />;
                  })}
                </Tr>
                <Tr>
                  <Td minWidth={{ sm: "17rem" }}>
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Flex direction="column">
                        <Text
                          marginLeft="10em"
                          fontSize="md"
                          color={textColor}
                          fontWeight="bold"
                          minWidth="100%"
                        >
                          No. Of Attempts
                        </Text>
                      </Flex>
                    </Flex>
                  </Td>
                  {data.map((item) => {
                    return <GData data={item.hse_attempts} />;
                  })}
                </Tr>
              </Tbody>
            </Table>
          </CardBody>
        </Card>

        <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
          <CardHeader p="6px 0px 22px 0px">
            <Text fontSize="xl" color={textColor} fontWeight="bold">
              10th Details
            </Text>
          </CardHeader>
          <CardBody>
            <Table variant="simple" color={textColor}>
              <Tbody>
                <Tr>
                  <Td minWidth={{ sm: "17rem" }}>
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Flex direction="column">
                        <Text
                          marginLeft="10em"
                          fontSize="md"
                          color={textColor}
                          fontWeight="bold"
                          minWidth="100%"
                        >
                          Name of the school
                        </Text>
                      </Flex>
                    </Flex>
                  </Td>
                  {data.map((item) => {
                    return <GData data={item.sslc_school_name} />;
                  })}
                </Tr>
                <Tr>
                  <Td minWidth={{ sm: "17rem" }}>
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Flex direction="column">
                        <Text
                          marginLeft="10em"
                          fontSize="md"
                          color={textColor}
                          fontWeight="bold"
                          minWidth="100%"
                        >
                          Board
                        </Text>
                      </Flex>
                    </Flex>
                  </Td>
                  {data.map((item) => {
                    return <GData data={item.sslc_board} />;
                  })}
                </Tr>
                <Tr>
                  <Td minWidth={{ sm: "17rem" }}>
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Flex direction="column">
                        <Text
                          marginLeft="10em"
                          fontSize="md"
                          color={textColor}
                          fontWeight="bold"
                          minWidth="100%"
                        >
                          Medium of Instruction
                        </Text>
                      </Flex>
                    </Flex>
                  </Td>
                  {data.map((item) => {
                    return <GData data={item.sslc_medium} />;
                  })}
                </Tr>
                <Tr>
                  <Td minWidth={{ sm: "17rem" }}>
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Flex direction="column">
                        <Text
                          marginLeft="10em"
                          fontSize="md"
                          color={textColor}
                          fontWeight="bold"
                          minWidth="100%"
                        >
                          Second Language
                        </Text>
                      </Flex>
                    </Flex>
                  </Td>
                  {data.map((item) => {
                    return <GData data={item.sslc_sec_lang} />;
                  })}
                </Tr>
                <Tr>
                  <Td minWidth={{ sm: "17rem" }}>
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Flex direction="column">
                        <Text
                          marginLeft="10em"
                          fontSize="md"
                          color={textColor}
                          fontWeight="bold"
                          minWidth="100%"
                        >
                          Total Marks
                        </Text>
                      </Flex>
                    </Flex>
                  </Td>
                  {data.map((item) => {
                    return <GData data={item.sslc_marks} />;
                  })}
                </Tr>
                <Tr>
                  <Td minWidth={{ sm: "17rem" }}>
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Flex direction="column">
                        <Text
                          marginLeft="10em"
                          fontSize="md"
                          color={textColor}
                          fontWeight="bold"
                          minWidth="100%"
                        >
                          Overall Percentage
                        </Text>
                      </Flex>
                    </Flex>
                  </Td>
                  {data.map((item) => {
                    return <GData data={item.sslc_percentage} />;
                  })}
                </Tr>
                <Tr>
                  <Td minWidth={{ sm: "17rem" }}>
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Flex direction="column">
                        <Text
                          marginLeft="10em"
                          fontSize="md"
                          color={textColor}
                          fontWeight="bold"
                          minWidth="100%"
                        >
                          Cut-Off Marks
                        </Text>
                      </Flex>
                    </Flex>
                  </Td>
                  {data.map((item) => {
                    return <GData data={item.sslc_cutoff} />;
                  })}
                </Tr>
                <Tr>
                  <Td minWidth={{ sm: "17rem" }}>
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Flex direction="column">
                        <Text
                          marginLeft="10em"
                          fontSize="md"
                          color={textColor}
                          fontWeight="bold"
                          minWidth="100%"
                        >
                          No. of Attempts
                        </Text>
                      </Flex>
                    </Flex>
                  </Td>
                  {data.map((item) => {
                    return <GData data={item.sslc_attempts} />;
                  })}
                </Tr>
              </Tbody>
            </Table>
          </CardBody>
        </Card>

        <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
          <CardHeader p="6px 0px 22px 0px">
            <Text fontSize="xl" color={textColor} fontWeight="bold">
              Father's Details
            </Text>
          </CardHeader>
          <CardBody>
            <Table variant="simple" color={textColor}>
              <Tbody>
                <Tr>
                  <Td minWidth={{ sm: "17rem" }}>
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Flex direction="column">
                        <Text
                          marginLeft="10em"
                          fontSize="md"
                          color={textColor}
                          fontWeight="bold"
                          minWidth="100%"
                        >
                          Father's Name
                        </Text>
                      </Flex>
                    </Flex>
                  </Td>
                  {data.map((item) => {
                    return <GData data={item.father_name} />;
                  })}
                </Tr>
                <Tr>
                  <Td minWidth={{ sm: "17rem" }}>
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Flex direction="column">
                        <Text
                          marginLeft="10em"
                          fontSize="md"
                          color={textColor}
                          fontWeight="bold"
                          minWidth="100%"
                        >
                          Father's Qualification
                        </Text>
                      </Flex>
                    </Flex>
                  </Td>
                  {data.map((item) => {
                    return <GData data={item.father_qualification} />;
                  })}
                </Tr>
                <Tr>
                  <Td minWidth={{ sm: "17rem" }}>
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Flex direction="column">
                        <Text
                          marginLeft="10em"
                          fontSize="md"
                          color={textColor}
                          fontWeight="bold"
                          minWidth="100%"
                        >
                          Father's Occupation
                        </Text>
                      </Flex>
                    </Flex>
                  </Td>
                  {data.map((item) => {
                    return <GData data={item.father_occupation} />;
                  })}
                </Tr>
                <Tr>
                  <Td minWidth={{ sm: "17rem" }}>
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Flex direction="column">
                        <Text
                          marginLeft="10em"
                          fontSize="md"
                          color={textColor}
                          fontWeight="bold"
                          minWidth="100%"
                        >
                          Father's Office Address
                        </Text>
                      </Flex>
                    </Flex>
                  </Td>
                  {data.map((item) => {
                    return <GData data={item.father_office_address} />;
                  })}
                </Tr>
                <Tr>
                  <Td minWidth={{ sm: "17rem" }}>
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Flex direction="column">
                        <Text
                          marginLeft="10em"
                          fontSize="md"
                          color={textColor}
                          fontWeight="bold"
                          minWidth="100%"
                        >
                          Father's Annual Income
                        </Text>
                      </Flex>
                    </Flex>
                  </Td>
                  {data.map((item) => {
                    return <GData data={item.father_annual_income} />;
                  })}
                </Tr>
                <Tr>
                  <Td minWidth={{ sm: "17rem" }}>
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Flex direction="column">
                        <Text
                          marginLeft="10em"
                          fontSize="md"
                          color={textColor}
                          fontWeight="bold"
                          minWidth="100%"
                        >
                          Father's Mobile No.
                        </Text>
                      </Flex>
                    </Flex>
                  </Td>
                  {data.map((item) => {
                    return <GData data={item.father_mob_no} />;
                  })}
                </Tr>
                <Tr>
                  <Td minWidth={{ sm: "17rem" }}>
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Flex direction="column">
                        <Text
                          marginLeft="10em"
                          fontSize="md"
                          color={textColor}
                          fontWeight="bold"
                          minWidth="100%"
                        >
                          Father's Email ID
                        </Text>
                      </Flex>
                    </Flex>
                  </Td>
                  {data.map((item) => {
                    return <GData data={item.father_email} />;
                  })}
                </Tr>
                <Tr>
                  <Td minWidth={{ sm: "17rem" }}>
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Flex direction="column">
                        <Text
                          marginLeft="10em"
                          fontSize="md"
                          color={textColor}
                          fontWeight="bold"
                          minWidth="100%"
                        >
                          Guardian Name
                        </Text>
                      </Flex>
                    </Flex>
                  </Td>
                  {data.map((item) => {
                    return <GData data={item.gaurdian_name} />;
                  })}
                </Tr>
                <Tr>
                  <Td minWidth={{ sm: "17rem" }}>
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Flex direction="column">
                        <Text
                          marginLeft="10em"
                          fontSize="md"
                          color={textColor}
                          fontWeight="bold"
                          minWidth="100%"
                        >
                          Guardian Qualification
                        </Text>
                      </Flex>
                    </Flex>
                  </Td>
                  {data.map((item) => {
                    return <GData data={item.gaurdian_qualification} />;
                  })}
                </Tr>
                <Tr>
                  <Td minWidth={{ sm: "17rem" }}>
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Flex direction="column">
                        <Text
                          marginLeft="10em"
                          fontSize="md"
                          color={textColor}
                          fontWeight="bold"
                          minWidth="100%"
                        >
                          Guardian Occupation
                        </Text>
                      </Flex>
                    </Flex>
                  </Td>
                  {data.map((item) => {
                    return <GData data={item.gaurdian_occupation} />;
                  })}
                </Tr>
                <Tr>
                  <Td minWidth={{ sm: "17rem" }}>
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Flex direction="column">
                        <Text
                          marginLeft="10em"
                          fontSize="md"
                          color={textColor}
                          fontWeight="bold"
                          minWidth="100%"
                        >
                          Guardian Office Address
                        </Text>
                      </Flex>
                    </Flex>
                  </Td>
                  {data.map((item) => {
                    return <GData data={item.gaurdian_office_address} />;
                  })}
                </Tr>
                <Tr>
                  <Td minWidth={{ sm: "17rem" }}>
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Flex direction="column">
                        <Text
                          marginLeft="10em"
                          fontSize="md"
                          color={textColor}
                          fontWeight="bold"
                          minWidth="100%"
                        >
                          Guardian Annual Income
                        </Text>
                      </Flex>
                    </Flex>
                  </Td>
                  {data.map((item) => {
                    return <GData data={item.gaurdian_annual_income} />;
                  })}
                </Tr>
                <Tr>
                  <Td minWidth={{ sm: "17rem" }}>
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Flex direction="column">
                        <Text
                          marginLeft="10em"
                          fontSize="md"
                          color={textColor}
                          fontWeight="bold"
                          minWidth="100%"
                        >
                          Guardian Mobile No.
                        </Text>
                      </Flex>
                    </Flex>
                  </Td>
                  {data.map((item) => {
                    return <GData data={item.gaurdian_mob_no} />;
                  })}
                </Tr>
                <Tr>
                  <Td minWidth={{ sm: "17rem" }}>
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Flex direction="column">
                        <Text
                          marginLeft="10em"
                          fontSize="md"
                          color={textColor}
                          fontWeight="bold"
                          minWidth="100%"
                        >
                          Guardian Email ID
                        </Text>
                      </Flex>
                    </Flex>
                  </Td>
                  {data.map((item) => {
                    return <GData data={item.gaurdian_email} />;
                  })}
                </Tr>
              </Tbody>
            </Table>
          </CardBody>
        </Card>

        <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
          <CardHeader p="6px 0px 22px 0px">
            <Text fontSize="xl" color={textColor} fontWeight="bold">
              Mother's Details
            </Text>
          </CardHeader>
          <CardBody>
            <Table variant="simple" color={textColor}>
              <Tbody>
                <Tr>
                  <Td minWidth={{ sm: "17rem" }}>
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Flex direction="column">
                        <Text
                          marginLeft="10em"
                          fontSize="md"
                          color={textColor}
                          fontWeight="bold"
                          minWidth="100%"
                        >
                          Mother's Name
                        </Text>
                      </Flex>
                    </Flex>
                  </Td>
                  {data.map((item) => {
                    return <GData data={item.mother_name} />;
                  })}
                </Tr>
                <Tr>
                  <Td minWidth={{ sm: "17rem" }}>
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Flex direction="column">
                        <Text
                          marginLeft="10em"
                          fontSize="md"
                          color={textColor}
                          fontWeight="bold"
                          minWidth="100%"
                        >
                          Mother's Qualification
                        </Text>
                      </Flex>
                    </Flex>
                  </Td>
                  {data.map((item) => {
                    return <GData data={item.mother_qualification} />;
                  })}
                </Tr>
                <Tr>
                  <Td minWidth={{ sm: "17rem" }}>
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Flex direction="column">
                        <Text
                          marginLeft="10em"
                          fontSize="md"
                          color={textColor}
                          fontWeight="bold"
                          minWidth="100%"
                        >
                          Mother's Occupation
                        </Text>
                      </Flex>
                    </Flex>
                  </Td>
                  {data.map((item) => {
                    return <GData data={item.mother_occupation} />;
                  })}
                </Tr>
                <Tr>
                  <Td minWidth={{ sm: "17rem" }}>
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Flex direction="column">
                        <Text
                          marginLeft="10em"
                          fontSize="md"
                          color={textColor}
                          fontWeight="bold"
                          minWidth="100%"
                        >
                          Mother's Office Address
                        </Text>
                      </Flex>
                    </Flex>
                  </Td>
                  {data.map((item) => {
                    return <GData data={item.mother_office_address} />;
                  })}
                </Tr>
                <Tr>
                  <Td minWidth={{ sm: "17rem" }}>
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Flex direction="column">
                        <Text
                          marginLeft="10em"
                          fontSize="md"
                          color={textColor}
                          fontWeight="bold"
                          minWidth="100%"
                        >
                          Mother's Annual Income
                        </Text>
                      </Flex>
                    </Flex>
                  </Td>
                  {data.map((item) => {
                    return <GData data={item.mother_annual_income} />;
                  })}
                </Tr>
                <Tr>
                  <Td minWidth={{ sm: "17rem" }}>
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Flex direction="column">
                        <Text
                          marginLeft="10em"
                          fontSize="md"
                          color={textColor}
                          fontWeight="bold"
                          minWidth="100%"
                        >
                          Mother's Mobile No.
                        </Text>
                      </Flex>
                    </Flex>
                  </Td>
                  {data.map((item) => {
                    return <GData data={item.mother_mob_no} />;
                  })}
                </Tr>
                <Tr>
                  <Td minWidth={{ sm: "17rem" }}>
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Flex direction="column">
                        <Text
                          marginLeft="10em"
                          fontSize="md"
                          color={textColor}
                          fontWeight="bold"
                          minWidth="100%"
                        >
                          Mother's Email ID
                        </Text>
                      </Flex>
                    </Flex>
                  </Td>
                  {data.map((item) => {
                    return <GData data={item.mother_email} />;
                  })}
                </Tr>
                <Tr>
                  <Td minWidth={{ sm: "17rem" }}>
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Flex direction="column">
                        <Text
                          marginLeft="10em"
                          fontSize="md"
                          color={textColor}
                          fontWeight="bold"
                          minWidth="100%"
                        >
                          No. of Sibilings
                        </Text>
                      </Flex>
                    </Flex>
                  </Td>
                  {data.map((item) => {
                    return <GData data={item.no_of_sibilings} />;
                  })}
                </Tr>
                <Tr>
                  <Td minWidth={{ sm: "17rem" }}>
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Flex direction="column">
                        <Text
                          marginLeft="10em"
                          fontSize="md"
                          color={textColor}
                          fontWeight="bold"
                          minWidth="100%"
                        >
                          Qualification Of Sibilings
                        </Text>
                      </Flex>
                    </Flex>
                  </Td>
                  {data.map((item) => {
                    return <GData data={item.qualification_sibilings} />;
                  })}
                </Tr>
                <Tr>
                  <Td minWidth={{ sm: "17rem" }}>
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Flex direction="column">
                        <Text
                          marginLeft="10em"
                          fontSize="md"
                          color={textColor}
                          fontWeight="bold"
                          minWidth="100%"
                        >
                          Occupation
                        </Text>
                      </Flex>
                    </Flex>
                  </Td>
                  {data.map((item) => {
                    return <GData data={item.occupation_sibilings} />;
                  })}
                </Tr>
                <Tr>
                  <Td minWidth={{ sm: "17rem" }}>
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Flex direction="column">
                        <Text
                          marginLeft="10em"
                          fontSize="md"
                          color={textColor}
                          fontWeight="bold"
                          minWidth="100%"
                        >
                          Alumni of LICET or LOYOLA
                        </Text>
                      </Flex>
                    </Flex>
                  </Td>
                  {data.map((item) => {
                    return <GData data={item.alumni_licet_loyola_yn} />;
                  })}
                </Tr>
              </Tbody>
            </Table>
          </CardBody>
        </Card>

        <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
          <CardHeader p="6px 0px 22px 0px">
            <Text fontSize="xl" color={textColor} fontWeight="bold">
              Admission Details
            </Text>
          </CardHeader>
          <CardBody>
            <Table variant="simple" color={textColor}>
              <Tbody>
                <Tr>
                  <Td minWidth={{ sm: "17rem" }}>
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Flex direction="column">
                        <Text
                          marginLeft="10em"
                          fontSize="md"
                          color={textColor}
                          fontWeight="bold"
                          minWidth="100%"
                        >
                          Application No.
                        </Text>
                      </Flex>
                    </Flex>
                  </Td>
                  {data.map((item) => {
                    return <GData data={item.application_no} />;
                  })}
                </Tr>
                <Tr>
                  <Td minWidth={{ sm: "17rem" }}>
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Flex direction="column">
                        <Text
                          marginLeft="10em"
                          fontSize="md"
                          color={textColor}
                          fontWeight="bold"
                          minWidth="100%"
                        >
                          Date Of Admission
                        </Text>
                      </Flex>
                    </Flex>
                  </Td>
                  {data.map((item) => {
                    return <GData data={item.date_of_ad} />;
                  })}
                </Tr>
                <Tr>
                  <Td minWidth={{ sm: "17rem" }}>
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Flex direction="column">
                        <Text
                          marginLeft="10em"
                          fontSize="md"
                          color={textColor}
                          fontWeight="bold"
                          minWidth="100%"
                        >
                          Quota
                        </Text>
                      </Flex>
                    </Flex>
                  </Td>
                  {data.map((item) => {
                    return <GData data={item.quota} />;
                  })}
                </Tr>
                <Tr>
                  <Td minWidth={{ sm: "17rem" }}>
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Flex direction="column">
                        <Text
                          marginLeft="10em"
                          fontSize="md"
                          color={textColor}
                          fontWeight="bold"
                          minWidth="100%"
                        >
                          Regular / Lateral Entry
                        </Text>
                      </Flex>
                    </Flex>
                  </Td>
                  {data.map((item) => {
                    return <GData data={item.regular_lateral_rl} />;
                  })}
                </Tr>
                <Tr>
                  <Td minWidth={{ sm: "17rem" }}>
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Flex direction="column">
                        <Text
                          marginLeft="10em"
                          fontSize="md"
                          color={textColor}
                          fontWeight="bold"
                          minWidth="100%"
                        >
                          Day Scholar / Hosteller
                        </Text>
                      </Flex>
                    </Flex>
                  </Td>
                  {data.map((item) => {
                    return <GData data={item.dayschl_hosteller_dh} />;
                  })}
                </Tr>
              </Tbody>
            </Table>
          </CardBody>
        </Card>

        <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
          <CardHeader p="6px 0px 22px 0px">
            <Text fontSize="xl" color={textColor} fontWeight="bold">
              Scholarship Details
            </Text>
          </CardHeader>
          <CardBody>
            <Table variant="simple" color={textColor}>
              <Tbody>
                <Tr>
                  <Td minWidth={{ sm: "17rem" }}>
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Flex direction="column">
                        <Text
                          marginLeft="10em"
                          fontSize="md"
                          color={textColor}
                          fontWeight="bold"
                          minWidth="100%"
                        >
                          Scholarship Name
                        </Text>
                      </Flex>
                    </Flex>
                  </Td>
                  {data.map((item) => {
                    return <GData data={item.scholarship_name} />;
                  })}
                </Tr>
                <Tr>
                  <Td minWidth={{ sm: "17rem" }}>
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Flex direction="column">
                        <Text
                          marginLeft="10em"
                          fontSize="md"
                          color={textColor}
                          fontWeight="bold"
                          minWidth="100%"
                        >
                          Scholarship Amount
                        </Text>
                      </Flex>
                    </Flex>
                  </Td>
                  {data.map((item) => {
                    return <GData data={item.scholarship_amount} />;
                  })}
                </Tr>
                <Tr>
                  <Td minWidth={{ sm: "17rem" }}>
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Flex direction="column">
                        <Text
                          marginLeft="10em"
                          fontSize="md"
                          color={textColor}
                          fontWeight="bold"
                          minWidth="100%"
                        >
                          First Graduate
                        </Text>
                      </Flex>
                    </Flex>
                  </Td>
                  {data.map((item) => {
                    return <GData data={item.first_graduate_yn} />;
                  })}
                </Tr>
                <Tr>
                  <Td minWidth={{ sm: "17rem" }}>
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Flex direction="column">
                        <Text
                          marginLeft="10em"
                          fontSize="md"
                          color={textColor}
                          fontWeight="bold"
                          minWidth="100%"
                        >
                          Economically Backward (Annual Income of Parents Less
                          than 1LPA)
                        </Text>
                      </Flex>
                    </Flex>
                  </Td>
                  {data.map((item) => {
                    return <GData data={item.eco_backward_yn} />;
                  })}
                </Tr>
              </Tbody>
            </Table>
          </CardBody>
        </Card>

        <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
          <CardHeader p="6px 0px 22px 0px">
            <Text fontSize="xl" color={textColor} fontWeight="bold">
              Technical and Non-Technical Skills
            </Text>
          </CardHeader>
          <CardBody>
            <Table variant="simple" color={textColor}>
              <Tbody>
                <Tr>
                  <Td minWidth={{ sm: "17rem" }}>
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Flex direction="column">
                        <Text
                          marginLeft="10em"
                          fontSize="md"
                          color={textColor}
                          fontWeight="bold"
                          minWidth="100%"
                        >
                          Programming Languages
                        </Text>
                      </Flex>
                    </Flex>
                  </Td>
                  {data.map((item) => {
                    return <GData data={item.programming_languages} />;
                  })}
                </Tr>
                <Tr>
                  <Td minWidth={{ sm: "17rem" }}>
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Flex direction="column">
                        <Text
                          marginLeft="10em"
                          fontSize="md"
                          color={textColor}
                          fontWeight="bold"
                          minWidth="100%"
                        >
                          Software Proficieny
                        </Text>
                      </Flex>
                    </Flex>
                  </Td>
                  {data.map((item) => {
                    return <GData data={item.software_proficiency} />;
                  })}
                </Tr>
                <Tr>
                  <Td minWidth={{ sm: "17rem" }}>
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Flex direction="column">
                        <Text
                          marginLeft="10em"
                          fontSize="md"
                          color={textColor}
                          fontWeight="bold"
                          minWidth="100%"
                        >
                          Department Related Skills
                        </Text>
                      </Flex>
                    </Flex>
                  </Td>
                  {data.map((item) => {
                    return <GData data={item.dept_related_proficiency} />;
                  })}
                </Tr>
                <Tr>
                  <Td minWidth={{ sm: "17rem" }}>
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Flex direction="column">
                        <Text
                          marginLeft="10em"
                          fontSize="md"
                          color={textColor}
                          fontWeight="bold"
                          minWidth="100%"
                        >
                          Certifications
                        </Text>
                      </Flex>
                    </Flex>
                  </Td>
                  {data.map((item) => {
                    return <GData data={item.certifications} />;
                  })}
                </Tr>

                <Tr>
                  <Td minWidth={{ sm: "17rem" }}>
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Flex direction="column">
                        <Text
                          marginLeft="10em"
                          fontSize="md"
                          color={textColor}
                          fontWeight="bold"
                          minWidth="100%"
                        >
                          Other Technical Skills
                        </Text>
                      </Flex>
                    </Flex>
                  </Td>
                  {data.map((item) => {
                    return <GData data={item.other_skills} />;
                  })}
                </Tr>

                <Tr>
                  <Td minWidth={{ sm: "17rem" }}>
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Flex direction="column">
                        <Text
                          marginLeft="10em"
                          fontSize="md"
                          color={textColor}
                          fontWeight="bold"
                          minWidth="100%"
                        >
                          Aptitude / Analytical Skills
                        </Text>
                      </Flex>
                    </Flex>
                  </Td>
                  {data.map((item) => {
                    return <GData data={item.apptitude_analytical_skills} />;
                  })}
                </Tr>

                <Tr>
                  <Td minWidth={{ sm: "17rem" }}>
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Flex direction="column">
                        <Text
                          marginLeft="10em"
                          fontSize="md"
                          color={textColor}
                          fontWeight="bold"
                          minWidth="100%"
                        >
                          Communication Skills
                        </Text>
                      </Flex>
                    </Flex>
                  </Td>
                  {data.map((item) => {
                    return <GData data={item.communication_skills} />;
                  })}
                </Tr>

                <Tr>
                  <Td minWidth={{ sm: "17rem" }}>
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Flex direction="column">
                        <Text
                          marginLeft="10em"
                          fontSize="md"
                          color={textColor}
                          fontWeight="bold"
                          minWidth="100%"
                        >
                          Social Media Exposure
                        </Text>
                      </Flex>
                    </Flex>
                  </Td>
                  {data.map((item) => {
                    return <GData data={item.social_media_exposure} />;
                  })}
                </Tr>

                <Tr>
                  <Td minWidth={{ sm: "17rem" }}>
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Flex direction="column">
                        <Text
                          marginLeft="10em"
                          fontSize="md"
                          color={textColor}
                          fontWeight="bold"
                          minWidth="100%"
                        >
                          Leadership Skills
                        </Text>
                      </Flex>
                    </Flex>
                  </Td>
                  {data.map((item) => {
                    return <GData data={item.leadership_skills} />;
                  })}
                </Tr>

                <Tr>
                  <Td minWidth={{ sm: "17rem" }}>
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Flex direction="column">
                        <Text
                          marginLeft="10em"
                          fontSize="md"
                          color={textColor}
                          fontWeight="bold"
                          minWidth="100%"
                        >
                          Other Interpersonal Skills
                        </Text>
                      </Flex>
                    </Flex>
                  </Td>
                  {data.map((item) => {
                    return <GData data={item.other_interpersonal_skills} />;
                  })}
                </Tr>
              </Tbody>
            </Table>
          </CardBody>
        </Card>

        <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
          <CardHeader p="6px 0px 22px 0px">
            <Text fontSize="xl" color={textColor} fontWeight="bold">
              Goals and Professional Membership
            </Text>
          </CardHeader>
          <CardBody>
            <Table variant="simple" color={textColor}>
              <Tbody>
                <Tr>
                  <Td minWidth={{ sm: "17rem" }}>
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Flex direction="column">
                        <Text
                          marginLeft="10em"
                          fontSize="md"
                          color={textColor}
                          fontWeight="bold"
                          minWidth="100%"
                        >
                          Short Term Goals
                        </Text>
                      </Flex>
                    </Flex>
                  </Td>
                  {data.map((item) => {
                    return <GData data={item.short_term_goal} />;
                  })}
                </Tr>
                <Tr>
                  <Td minWidth={{ sm: "17rem" }}>
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Flex direction="column">
                        <Text
                          marginLeft="10em"
                          fontSize="md"
                          color={textColor}
                          fontWeight="bold"
                          minWidth="100%"
                        >
                          Long Term Goals
                        </Text>
                      </Flex>
                    </Flex>
                  </Td>
                  {data.map((item) => {
                    return <GData data={item.long_term_goal} />;
                  })}
                </Tr>
                <Tr>
                  <Td minWidth={{ sm: "17rem" }}>
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Flex direction="column">
                        <Text
                          marginLeft="10em"
                          fontSize="md"
                          color={textColor}
                          fontWeight="bold"
                          minWidth="100%"
                        >
                          Membership Name
                        </Text>
                      </Flex>
                    </Flex>
                  </Td>
                  {data.map((item) => {
                    return <GData data={item.Professional_membership_name} />;
                  })}
                </Tr>
                <Tr>
                  <Td minWidth={{ sm: "17rem" }}>
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Flex direction="column">
                        <Text
                          marginLeft="10em"
                          fontSize="md"
                          color={textColor}
                          fontWeight="bold"
                          minWidth="100%"
                        >
                          Membership No.
                        </Text>
                      </Flex>
                    </Flex>
                  </Td>
                  {data.map((item) => {
                    return <GData data={item.membership_no} />;
                  })}
                </Tr>

                <Tr>
                  <Td minWidth={{ sm: "17rem" }}>
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Flex direction="column">
                        <Text
                          marginLeft="10em"
                          fontSize="md"
                          color={textColor}
                          fontWeight="bold"
                          minWidth="100%"
                        >
                          Membership Duration
                        </Text>
                      </Flex>
                    </Flex>
                  </Td>
                  {data.map((item) => {
                    return <GData data={item.membership_duration} />;
                  })}
                </Tr>
              </Tbody>
            </Table>
          </CardBody>
        </Card>
      </SimpleGrid>
    </Flex>
  );
}

export default GeneralInformationdata;
