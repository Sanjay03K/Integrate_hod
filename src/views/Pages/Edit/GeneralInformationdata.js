import React from "react";
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
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Select,
  SimpleGrid,
  Grid,
  GridItem,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuIcon,
  MenuCommand,
  MenuDivider,
} from "@chakra-ui/react";

// Custom components
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import GeneralParticularstablerow from "components/Tables/GeneralParticularstablerow";
import { GeneralParticulars } from "variables/general";
import { HigherSecondaryDetails } from "variables/general";
import { SecondaryDetails } from "variables/general";
import { Father, Mother } from "variables/general";
import { AdmissionDetails } from "variables/general";
import { ScholarshipDetails } from "variables/general";
import { TechnicalSkills } from "variables/general";
import { NonTechnicalSkills } from "variables/general";
import { Goals } from "variables/general";
import { ProfessionalMembership } from "variables/general";
import { ChevronDownIcon } from "@chakra-ui/icons";

function GeneralInformationdata() {
  function logout() {
    window.location.href = "http://localhost:3000/student-portal#/auth/SignIn";
  }

  function funinsert() {
    let params = new URLSearchParams();
    params.append("name", document.getElementById("NID").value);
    params.append("rollno", document.getElementById("RID").value);
    params.append("registerno", document.getElementById("REID").value);
    params.append("sex", document.getElementById("SID").value);
    params.append("dateofbirth", document.getElementById("DOBID").value);
    params.append("department", document.getElementById("DEPT").value);
    params.append("batch", document.getElementById("BATCH").value);
    params.append("nationality", document.getElementById("NATIONID").value);
    params.append("religion", document.getElementById("RELIGIONID").value);
    params.append("parish", document.getElementById("PARISHID").value);
    params.append("dalit", document.getElementById("DALITID").value);
    params.append("community", document.getElementById("COMMUNITYID").value);
    params.append("bloodgroup", document.getElementById("BLOODID").value);
    params.append("mothertounge", document.getElementById("MOTHERID").value);
    params.append("contact", document.getElementById("CONTACTID").value);
    params.append("aadhar", document.getElementById("AADHARID").value);
    params.append("offemail", document.getElementById("OFFEMID").value);
    params.append("peremail", document.getElementById("PEREMID").value);
    params.append("preaddr", document.getElementById("PREADDRID").value);
    params.append("peraddr", document.getElementById("PERADDRID").value);
    params.append("langknown", document.getElementById("LANKNO").value);
    params.append("pan", document.getElementById("PAN").value);

    params.append("hsenos", document.getElementById("NOS1").value);
    params.append("hsebod", document.getElementById("BOARD1").value);
    params.append("hsemoi", document.getElementById("MOI1").value);
    params.append("hsesl", document.getElementById("SL1").value);
    params.append("hsegro", document.getElementById("GROUP1").value);
    params.append("hsetm", document.getElementById("TM1").value);
    params.append("hseop", document.getElementById("OP1").value);
    params.append("hsecom", document.getElementById("COM1").value);
    params.append("hsenoa", document.getElementById("NOA1").value);

    params.append("sslcnos", document.getElementById("NOS2").value);
    params.append("sslcbod", document.getElementById("BOARD2").value);
    params.append("sslcmoi", document.getElementById("MOI2").value);
    params.append("sslcsl", document.getElementById("SL2").value);
    params.append("sslctm", document.getElementById("TM2").value);
    params.append("sslcop", document.getElementById("OP2").value);
    params.append("sslcnoa", document.getElementById("NOA2").value);

    params.append("fanam", document.getElementById("FN").value);
    params.append("faqul", document.getElementById("FQ").value);
    params.append("faocc", document.getElementById("FO").value);
    params.append("faoffadd", document.getElementById("FOA").value);
    params.append("faanu", document.getElementById("FAI").value);
    params.append("famob", document.getElementById("FMN").value);
    params.append("faemail", document.getElementById("FEI").value);
    params.append("gunam", document.getElementById("GN").value);
    params.append("guqul", document.getElementById("GQ").value);
    params.append("guocc", document.getElementById("GO").value);
    params.append("guoffadd", document.getElementById("GOA").value);
    params.append("guanu", document.getElementById("GAI").value);
    params.append("gumob", document.getElementById("GMN").value);
    params.append("guemail", document.getElementById("GEI").value);

    params.append("manam", document.getElementById("MN").value);
    params.append("maqul", document.getElementById("MQ").value);
    params.append("maocc", document.getElementById("MO").value);
    params.append("maoffadd", document.getElementById("MOA").value);
    params.append("maanu", document.getElementById("MAI").value);
    params.append("mamob", document.getElementById("MMN").value);
    params.append("maemail", document.getElementById("MEI").value);
    params.append("sibnos", document.getElementById("NOS").value);
    params.append("sibnam", document.getElementById("NAS").value);
    params.append("sibqul", document.getElementById("QOS").value);
    params.append("sibocc", document.getElementById("SO").value);
    params.append("sibalum", document.getElementById("AOL").value);

    params.append("appno", document.getElementById("AN").value);
    params.append("doa", document.getElementById("DOA").value);
    params.append("quo", document.getElementById("QUO").value);
    params.append("reglat", document.getElementById("RL").value);
    params.append("dayhos", document.getElementById("DH").value);

    params.append("schlnam", document.getElementById("SN").value);
    params.append("schlamt", document.getElementById("SA").value);
    params.append("firgra", document.getElementById("FG").value);
    params.append("ecoback", document.getElementById("EB").value);

    params.append("prolan", document.getElementById("PL").value);
    params.append("softpro", document.getElementById("SP").value);
    params.append("deptrelpro", document.getElementById("DRP").value);
    params.append("cert", document.getElementById("CER").value);
    params.append("others", document.getElementById("OS").value);

    params.append("anaapt", document.getElementById("AAS").value);
    params.append("commu", document.getElementById("CS").value);
    params.append("social", document.getElementById("SME").value);
    params.append("lead", document.getElementById("LS").value);
    params.append("otherins", document.getElementById("OIS").value);

    params.append("stg", document.getElementById("STG").value);
    params.append("ltg", document.getElementById("LTG").value);

    params.append("promemnam", document.getElementById("PMNO").value);
    params.append("promemno", document.getElementById("PMNA").value);
    params.append("promemdur", document.getElementById("DUR").value);

    axios.post("http://localhost:5000/insertroll", params);
    axios.post("http://localhost:5000/studentinsert", params);
    window.location.href =
      "http://localhost:3000/student-portal#/admin/dashboard";
  }
  const textColor = useColorModeValue("gray.700", "white");

  return (
    <Flex direction="column" p="0rem 2rem 0rem 2rem">
      <Button
        onClick={logout}
        marginBottom="1rem"
        marginTop="1rem"
        marginRight="1rem"
        colorScheme="orange"
        variant="solid"
        alignSelf="flex-end"
      >
        log out
      </Button>
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
                  <Td minWidth={{ sm: "17rem" }}>
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Flex direction="column">
                        <FormControl>
                          <Input
                            id="NID"
                            borderRadius="5px"
                            fontSize="sm"
                            type="text"
                            placeholder="Enter your name"
                          />
                        </FormControl>
                      </Flex>
                    </Flex>
                  </Td>
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
                          fontSize="md"
                          color={textColor}
                          fontWeight="bold"
                          minWidth="100%"
                        >
                          Roll No
                        </Text>
                      </Flex>
                    </Flex>
                  </Td>
                  <Td minWidth={{ sm: "17rem" }}>
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Flex direction="column">
                        <FormControl>
                          <Input
                            id="RID"
                            borderRadius="5px"
                            fontSize="sm"
                            type="text"
                            placeholder="Enter your roll no"
                          />
                        </FormControl>
                      </Flex>
                    </Flex>
                  </Td>
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
                          fontSize="md"
                          color={textColor}
                          fontWeight="bold"
                          minWidth="100%"
                        >
                          Register No
                        </Text>
                      </Flex>
                    </Flex>
                  </Td>
                  <Td minWidth={{ sm: "17rem" }}>
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Flex direction="column">
                        <FormControl>
                          <Input
                            id="REID"
                            borderRadius="5px"
                            fontSize="sm"
                            type="text"
                            placeholder="Enter your register no"
                          />
                        </FormControl>
                      </Flex>
                    </Flex>
                  </Td>
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
                          fontSize="md"
                          color={textColor}
                          fontWeight="bold"
                          minWidth="100%"
                        >
                          Gender
                        </Text>
                      </Flex>
                    </Flex>
                  </Td>
                  <Td minWidth={{ sm: "17rem" }}>
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Flex direction="column">
                        <FormControl>

                        <Select  placeholder="Select Option" isRequired>      
                            <option value="option1">Male</option>
                            <option value="option2">Female</option>
                            <option value="option3">Other</option>
                        </Select>

                        </FormControl>
                      </Flex>
                    </Flex>
                  </Td>
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
                  <Td minWidth={{ sm: "17rem" }}>
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Flex direction="column">
                        <FormControl>
                        <Input
                            id="DOBID"
                            borderRadius="5px"
                            fontSize="sm"
                            type="text"
                            style={{
                              backgroundColor: "rgb(31 39 51)",
                            }}
                            type="date"
                          />
                        </FormControl>
                      </Flex>
                    </Flex>
                  </Td>
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
                          fontSize="md"
                          color={textColor}
                          fontWeight="bold"
                          minWidth="100%"
                        >
                          Department
                        </Text>
                      </Flex>
                    </Flex>
                  </Td>
                  <Td minWidth={{ sm: "17rem" }}>
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Flex direction="column">
                        <FormControl>
                          <Input
                            id="DEPT"
                            borderRadius="5px"
                            fontSize="sm"
                            type="text"
                            placeholder="Enter your Department"
                          />
                        </FormControl>
                      </Flex>
                    </Flex>
                  </Td>
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
                          fontSize="md"
                          color={textColor}
                          fontWeight="bold"
                          minWidth="100%"
                        >
                          Batch
                        </Text>
                      </Flex>
                    </Flex>
                  </Td>
                  <Td minWidth={{ sm: "17rem" }}>
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Flex direction="column">
                        <FormControl>
                          <Input
                            id="BATCH"
                            borderRadius="5px"
                            fontSize="sm"
                            type="text"
                            placeholder="Enter your Batch"
                          />
                        </FormControl>
                      </Flex>
                    </Flex>
                  </Td>
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
                  <Td minWidth={{ sm: "17rem" }}>
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Flex direction="column">
                        <FormControl>
                          <Input
                            id="NATIONID"
                            borderRadius="5px"
                            fontSize="sm"
                            type="text"
                            placeholder="Enter your nationality"
                          />
                        </FormControl>
                      </Flex>
                    </Flex>
                  </Td>
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
                  <Td minWidth={{ sm: "17rem" }}>
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Flex direction="column">
                        <FormControl>
                          <Input
                            id="RELIGIONID"
                            borderRadius="5px"
                            fontSize="sm"
                            type="text"
                            placeholder="Enter your religion"
                          />
                        </FormControl>
                      </Flex>
                    </Flex>
                  </Td>
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
                          fontSize="md"
                          color={textColor}
                          fontWeight="bold"
                          minWidth="100%"
                        >
                          If Catholic, Parish ? 
                        </Text>
                      </Flex>
                    </Flex>
                  </Td>
                  <Td minWidth={{ sm: "17rem" }}>
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Flex direction="column">
                        <FormControl>
                          <Input
                            id="PARISHID"
                            borderRadius="5px"
                            fontSize="sm"
                            type="text"
                            placeholder="Enter yes/no"
                          />
                        </FormControl>
                      </Flex>
                    </Flex>
                  </Td>
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
                  <Td minWidth={{ sm: "17rem" }}>
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Flex direction="column">
                        <FormControl>
                        <Select  placeholder="Select Option" isRequired>      
                            <option value="option1">Y</option>
                            <option value="option2">N</option>
                        </Select>
                        </FormControl>
                      </Flex>
                    </Flex>
                  </Td>
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
                  <Td minWidth={{ sm: "17rem" }}>
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Flex direction="column">
                        <FormControl>
                          <Input
                            id="COMMUNITYID"
                            borderRadius="5px"
                            fontSize="sm"
                            type="text"
                            placeholder="Enter your community"
                          />
                        </FormControl>
                      </Flex>
                    </Flex>
                  </Td>
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
                  <Td minWidth={{ sm: "17rem" }}>
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Flex direction="column">
                        <FormControl>
                          <Input
                            id="BLOODID"
                            borderRadius="5px"
                            fontSize="sm"
                            type="text"
                            placeholder="Enter your blood group"
                          />
                        </FormControl>
                      </Flex>
                    </Flex>
                  </Td>
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
                  <Td minWidth={{ sm: "17rem" }}>
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Flex direction="column">
                        <FormControl>
                          <Input
                            id="MOTHERID"
                            borderRadius="5px"
                            fontSize="sm"
                            type="text"
                            placeholder="Enter your mother tounge"
                          />
                        </FormControl>
                      </Flex>
                    </Flex>
                  </Td>
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
                  <Td minWidth={{ sm: "17rem" }}>
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Flex direction="column">
                        <FormControl>
                          <Input
                            id="CONTACTID"
                            borderRadius="5px"
                            fontSize="sm"
                            type="text"
                            placeholder="Enter your contact no."
                          />
                        </FormControl>
                      </Flex>
                    </Flex>
                  </Td>
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
                  <Td minWidth={{ sm: "17rem" }}>
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Flex direction="column">
                        <FormControl>
                          <Input
                            id="AADHARID"
                            borderRadius="5px"
                            fontSize="sm"
                            type="text"
                            placeholder="Enter your aadhar no."
                          />
                        </FormControl>
                      </Flex>
                    </Flex>
                  </Td>
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
                  <Td minWidth={{ sm: "17rem" }}>
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Flex direction="column">
                        <FormControl>
                          <Input
                            id="OFFEMID"
                            borderRadius="5px"
                            fontSize="sm"
                            type="text"
                            placeholder="Enter your official email"
                          />
                        </FormControl>
                      </Flex>
                    </Flex>
                  </Td>
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
                          fontSize="md"
                          color={textColor}
                          fontWeight="bold"
                          minWidth="100%"
                        >
                          Personal Email ID
                        </Text>
                      </Flex>
                    </Flex>
                  </Td>
                  <Td minWidth={{ sm: "17rem" }}>
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Flex direction="column">
                        <FormControl>
                          <Input
                            id="PEREMID"
                            borderRadius="5px"
                            fontSize="sm"
                            type="text"
                            placeholder="Enter your personal email"
                          />
                        </FormControl>
                      </Flex>
                    </Flex>
                  </Td>
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
                  <Td minWidth={{ sm: "17rem" }}>
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Flex direction="column">
                        <FormControl>
                          <Input
                            id="PREADDRID"
                            borderRadius="5px"
                            fontSize="sm"
                            type="text"
                            placeholder="Enter your present address"
                          />
                        </FormControl>
                      </Flex>
                    </Flex>
                  </Td>
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
                  <Td minWidth={{ sm: "17rem" }}>
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Flex direction="column">
                        <FormControl>
                          <Input
                            id="PERADDRID"
                            borderRadius="5px"
                            fontSize="sm"
                            type="text"
                            placeholder="Enter your Permanent address"
                          />
                        </FormControl>
                      </Flex>
                    </Flex>
                  </Td>
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
                          fontSize="md"
                          color={textColor}
                          fontWeight="bold"
                          minWidth="100%"
                        >
                          Languages Known
                        </Text>
                      </Flex>
                    </Flex>
                  </Td>
                  <Td minWidth={{ sm: "17rem" }}>
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Flex direction="column">
                        <FormControl>
                          <Input
                            id="LANKNO"
                            borderRadius="5px"
                            fontSize="sm"
                            type="text"
                            placeholder="Enter your Permanent address"
                          />
                        </FormControl>
                      </Flex>
                    </Flex>
                  </Td>
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
                          fontSize="md"
                          color={textColor}
                          fontWeight="bold"
                          minWidth="100%"
                        >
                          PAN
                        </Text>
                      </Flex>
                    </Flex>
                  </Td>
                  <Td minWidth={{ sm: "17rem" }}>
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Flex direction="column">
                        <FormControl>
                          <Input
                            id="PAN"
                            borderRadius="5px"
                            fontSize="sm"
                            type="text"
                            placeholder="Enter your PAN Number"
                          />
                        </FormControl>
                      </Flex>
                    </Flex>
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </CardBody>
        </Card>

        <SimpleGrid columns={{ sm: 1, md: 2, xl: 2 }} gap={4}>
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
                            fontSize="md"
                            color={textColor}
                            fontWeight="bold"
                            minWidth="100%"
                          >
                            Name of the School
                          </Text>
                        </Flex>
                      </Flex>
                    </Td>
                    <Td minWidth={{ sm: "17rem" }}>
                      <Flex
                        align="center"
                        py=".8rem"
                        minWidth="100%"
                        flexWrap="nowrap"
                      >
                        <Flex direction="column">
                          <FormControl>
                            <Input
                              id="NOS1"
                              borderRadius="5px"
                              fontSize="sm"
                              type="text"
                              placeholder="Enter your School name"
                            />
                          </FormControl>
                        </Flex>
                      </Flex>
                    </Td>
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
                    <Td minWidth={{ sm: "17rem" }}>
                      <Flex
                        align="center"
                        py=".8rem"
                        minWidth="100%"
                        flexWrap="nowrap"
                      >
                        <Flex direction="column">
                          <FormControl>
                            <Input
                              id="BOARD1"
                              borderRadius="5px"
                              fontSize="sm"
                              type="text"
                              placeholder="Enter the Board"
                            />
                          </FormControl>
                        </Flex>
                      </Flex>
                    </Td>
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
                    <Td minWidth={{ sm: "17rem" }}>
                      <Flex
                        align="center"
                        py=".8rem"
                        minWidth="100%"
                        flexWrap="nowrap"
                      >
                        <Flex direction="column">
                          <FormControl>
                            <Input
                              id="MOI1"
                              borderRadius="5px"
                              fontSize="sm"
                              type="text"
                              placeholder="Enter the Medium Of Instruction"
                            />
                          </FormControl>
                        </Flex>
                      </Flex>
                    </Td>
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
                    <Td minWidth={{ sm: "17rem" }}>
                      <Flex
                        align="center"
                        py=".8rem"
                        minWidth="100%"
                        flexWrap="nowrap"
                      >
                        <Flex direction="column">
                          <FormControl>
                            <Input
                              id="SL1"
                              borderRadius="5px"
                              fontSize="sm"
                              type="text"
                              placeholder="Enter your Second Language"
                            />
                          </FormControl>
                        </Flex>
                      </Flex>
                    </Td>
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
                    <Td minWidth={{ sm: "17rem" }}>
                      <Flex
                        align="center"
                        py=".8rem"
                        minWidth="100%"
                        flexWrap="nowrap"
                      >
                        <Flex direction="column">
                          <FormControl>
                            <Input
                              id="GROUP1"
                              borderRadius="5px"
                              fontSize="sm"
                              type="text"
                              placeholder="Enter your group"
                            />
                          </FormControl>
                        </Flex>
                      </Flex>
                    </Td>
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
                    <Td minWidth={{ sm: "17rem" }}>
                      <Flex
                        align="center"
                        py=".8rem"
                        minWidth="100%"
                        flexWrap="nowrap"
                      >
                        <Flex direction="column">
                          <FormControl>
                            <Input
                              id="TM1"
                              borderRadius="5px"
                              fontSize="sm"
                              type="text"
                              placeholder="Enter your total marks"
                            />
                          </FormControl>
                        </Flex>
                      </Flex>
                    </Td>
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
                    <Td minWidth={{ sm: "17rem" }}>
                      <Flex
                        align="center"
                        py=".8rem"
                        minWidth="100%"
                        flexWrap="nowrap"
                      >
                        <Flex direction="column">
                          <FormControl>
                            <Input
                              id="OP1"
                              borderRadius="5px"
                              fontSize="sm"
                              type="text"
                              placeholder="Enter your Overall Percentage"
                            />
                          </FormControl>
                        </Flex>
                      </Flex>
                    </Td>
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
                    <Td minWidth={{ sm: "17rem" }}>
                      <Flex
                        align="center"
                        py=".8rem"
                        minWidth="100%"
                        flexWrap="nowrap"
                      >
                        <Flex direction="column">
                          <FormControl>
                            <Input
                              id="COM1"
                              borderRadius="5px"
                              fontSize="sm"
                              type="text"
                              placeholder="Enter your Cut-Off Marks"
                            />
                          </FormControl>
                        </Flex>
                      </Flex>
                    </Td>
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
                    <Td minWidth={{ sm: "17rem" }}>
                      <Flex
                        align="center"
                        py=".8rem"
                        minWidth="100%"
                        flexWrap="nowrap"
                      >
                        <Flex direction="column">
                          <FormControl>
                            <Input
                              id="NOA1"
                              borderRadius="5px"
                              fontSize="sm"
                              type="text"
                              placeholder="Enter the No. Of Attempts"
                            />
                          </FormControl>
                        </Flex>
                      </Flex>
                    </Td>
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
                            fontSize="md"
                            color={textColor}
                            fontWeight="bold"
                            minWidth="100%"
                          >
                            Name of the School
                          </Text>
                        </Flex>
                      </Flex>
                    </Td>
                    <Td minWidth={{ sm: "17rem" }}>
                      <Flex
                        align="center"
                        py=".8rem"
                        minWidth="100%"
                        flexWrap="nowrap"
                      >
                        <Flex direction="column">
                          <FormControl>
                            <Input
                              id="NOS2"
                              borderRadius="5px"
                              fontSize="sm"
                              type="text"
                              placeholder="Enter your School name"
                            />
                          </FormControl>
                        </Flex>
                      </Flex>
                    </Td>
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
                    <Td minWidth={{ sm: "17rem" }}>
                      <Flex
                        align="center"
                        py=".8rem"
                        minWidth="100%"
                        flexWrap="nowrap"
                      >
                        <Flex direction="column">
                          <FormControl>
                            <Input
                              id="BOARD2"
                              borderRadius="5px"
                              fontSize="sm"
                              type="text"
                              placeholder="Enter the Board"
                            />
                          </FormControl>
                        </Flex>
                      </Flex>
                    </Td>
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
                    <Td minWidth={{ sm: "17rem" }}>
                      <Flex
                        align="center"
                        py=".8rem"
                        minWidth="100%"
                        flexWrap="nowrap"
                      >
                        <Flex direction="column">
                          <FormControl>
                            <Input
                              id="MOI2"
                              borderRadius="5px"
                              fontSize="sm"
                              type="text"
                              placeholder="Enter the Medium Of Instruction"
                            />
                          </FormControl>
                        </Flex>
                      </Flex>
                    </Td>
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
                    <Td minWidth={{ sm: "17rem" }}>
                      <Flex
                        align="center"
                        py=".8rem"
                        minWidth="100%"
                        flexWrap="nowrap"
                      >
                        <Flex direction="column">
                          <FormControl>
                            <Input
                              id="SL2"
                              borderRadius="5px"
                              fontSize="sm"
                              type="text"
                              placeholder="Enter your Second Language"
                            />
                          </FormControl>
                        </Flex>
                      </Flex>
                    </Td>
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
                    <Td minWidth={{ sm: "17rem" }}>
                      <Flex
                        align="center"
                        py=".8rem"
                        minWidth="100%"
                        flexWrap="nowrap"
                      >
                        <Flex direction="column">
                          <FormControl>
                            <Input
                              id="TM2"
                              borderRadius="5px"
                              fontSize="sm"
                              type="text"
                              placeholder="Enter your total marks"
                            />
                          </FormControl>
                        </Flex>
                      </Flex>
                    </Td>
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
                    <Td minWidth={{ sm: "17rem" }}>
                      <Flex
                        align="center"
                        py=".8rem"
                        minWidth="100%"
                        flexWrap="nowrap"
                      >
                        <Flex direction="column">
                          <FormControl>
                            <Input
                              id="OP2"
                              borderRadius="5px"
                              fontSize="sm"
                              type="text"
                              placeholder="Enter your Overall Percentage"
                            />
                          </FormControl>
                        </Flex>
                      </Flex>
                    </Td>
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
                    <Td minWidth={{ sm: "17rem" }}>
                      <Flex
                        align="center"
                        py=".8rem"
                        minWidth="100%"
                        flexWrap="nowrap"
                      >
                        <Flex direction="column">
                          <FormControl>
                            <Input
                              id="NOA2"
                              borderRadius="5px"
                              fontSize="sm"
                              type="text"
                              placeholder="Enter the No. Of Attempts"
                            />
                          </FormControl>
                        </Flex>
                      </Flex>
                    </Td>
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
                    <Td minWidth={{ sm: "17rem" }}>
                      <Flex
                        align="center"
                        py=".8rem"
                        minWidth="100%"
                        flexWrap="nowrap"
                      >
                        <Flex direction="column">
                          <FormControl>
                            <Input
                              id="FN"
                              borderRadius="5px"
                              fontSize="sm"
                              type="text"
                              placeholder="Enter your Father's Name"
                            />
                          </FormControl>
                        </Flex>
                      </Flex>
                    </Td>
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
                    <Td minWidth={{ sm: "17rem" }}>
                      <Flex
                        align="center"
                        py=".8rem"
                        minWidth="100%"
                        flexWrap="nowrap"
                      >
                        <Flex direction="column">
                          <FormControl>
                            <Input
                              id="FQ"
                              borderRadius="5px"
                              fontSize="sm"
                              type="text"
                              placeholder="Enter Father's Qualification"
                            />
                          </FormControl>
                        </Flex>
                      </Flex>
                    </Td>
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
                            fontSize="md"
                            color={textColor}
                            fontWeight="bold"
                            minWidth="100%"
                          >
                            Fathers Occupation
                          </Text>
                        </Flex>
                      </Flex>
                    </Td>
                    <Td minWidth={{ sm: "17rem" }}>
                      <Flex
                        align="center"
                        py=".8rem"
                        minWidth="100%"
                        flexWrap="nowrap"
                      >
                        <Flex direction="column">
                          <FormControl>
                            <Input
                              id="FO"
                              borderRadius="5px"
                              fontSize="sm"
                              type="text"
                              placeholder="Enter Fathers Occupation"
                            />
                          </FormControl>
                        </Flex>
                      </Flex>
                    </Td>
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
                    <Td minWidth={{ sm: "17rem" }}>
                      <Flex
                        align="center"
                        py=".8rem"
                        minWidth="100%"
                        flexWrap="nowrap"
                      >
                        <Flex direction="column">
                          <FormControl>
                            <Input
                              id="FOA"
                              borderRadius="5px"
                              fontSize="sm"
                              type="text"
                              placeholder="Enter Father's Office Address"
                            />
                          </FormControl>
                        </Flex>
                      </Flex>
                    </Td>
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
                    <Td minWidth={{ sm: "17rem" }}>
                      <Flex
                        align="center"
                        py=".8rem"
                        minWidth="100%"
                        flexWrap="nowrap"
                      >
                        <Flex direction="column">
                          <FormControl>
                            <Input
                              id="FAI"
                              borderRadius="5px"
                              fontSize="sm"
                              type="text"
                              placeholder="Enter Father's Annual Income"
                            />
                          </FormControl>
                        </Flex>
                      </Flex>
                    </Td>
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
                    <Td minWidth={{ sm: "17rem" }}>
                      <Flex
                        align="center"
                        py=".8rem"
                        minWidth="100%"
                        flexWrap="nowrap"
                      >
                        <Flex direction="column">
                          <FormControl>
                            <Input
                              id="FMN"
                              borderRadius="5px"
                              fontSize="sm"
                              type="text"
                              placeholder="Enter Father's Mobile No."
                            />
                          </FormControl>
                        </Flex>
                      </Flex>
                    </Td>
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
                    <Td minWidth={{ sm: "17rem" }}>
                      <Flex
                        align="center"
                        py=".8rem"
                        minWidth="100%"
                        flexWrap="nowrap"
                      >
                        <Flex direction="column">
                          <FormControl>
                            <Input
                              id="FEI"
                              borderRadius="5px"
                              fontSize="sm"
                              type="text"
                              placeholder="Enter Father's Email ID"
                            />
                          </FormControl>
                        </Flex>
                      </Flex>
                    </Td>
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
                            fontSize="md"
                            color={textColor}
                            fontWeight="bold"
                            minWidth="100%"
                          >
                            Guardian's Name
                          </Text>
                        </Flex>
                      </Flex>
                    </Td>
                    <Td minWidth={{ sm: "17rem" }}>
                      <Flex
                        align="center"
                        py=".8rem"
                        minWidth="100%"
                        flexWrap="nowrap"
                      >
                        <Flex direction="column">
                          <FormControl>
                            <Input
                              id="GN"
                              borderRadius="5px"
                              fontSize="sm"
                              type="text"
                              placeholder="Enter your Guardian Name"
                            />
                          </FormControl>
                        </Flex>
                      </Flex>
                    </Td>
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
                            fontSize="md"
                            color={textColor}
                            fontWeight="bold"
                            minWidth="100%"
                          >
                            Guardian's Qualification
                          </Text>
                        </Flex>
                      </Flex>
                    </Td>
                    <Td minWidth={{ sm: "17rem" }}>
                      <Flex
                        align="center"
                        py=".8rem"
                        minWidth="100%"
                        flexWrap="nowrap"
                      >
                        <Flex direction="column">
                          <FormControl>
                            <Input
                              id="GO"
                              borderRadius="5px"
                              fontSize="sm"
                              type="text"
                              placeholder="Enter Guardian Qualification"
                            />
                          </FormControl>
                        </Flex>
                      </Flex>
                    </Td>
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
                            fontSize="md"
                            color={textColor}
                            fontWeight="bold"
                            minWidth="100%"
                          >
                            Guardian's Occupation
                          </Text>
                        </Flex>
                      </Flex>
                    </Td>
                    <Td minWidth={{ sm: "17rem" }}>
                      <Flex
                        align="center"
                        py=".8rem"
                        minWidth="100%"
                        flexWrap="nowrap"
                      >
                        <Flex direction="column">
                          <FormControl>
                            <Input
                              id="FO"
                              borderRadius="5px"
                              fontSize="sm"
                              type="text"
                              placeholder="Enter Fathers Occupation"
                            />
                          </FormControl>
                        </Flex>
                      </Flex>
                    </Td>
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
                            fontSize="md"
                            color={textColor}
                            fontWeight="bold"
                            minWidth="100%"
                          >
                            Guardian's Office Address
                          </Text>
                        </Flex>
                      </Flex>
                    </Td>
                    <Td minWidth={{ sm: "17rem" }}>
                      <Flex
                        align="center"
                        py=".8rem"
                        minWidth="100%"
                        flexWrap="nowrap"
                      >
                        <Flex direction="column">
                          <FormControl>
                            <Input
                              id="GOA"
                              borderRadius="5px"
                              fontSize="sm"
                              type="text"
                              placeholder="Enter Guardian Office Address"
                            />
                          </FormControl>
                        </Flex>
                      </Flex>
                    </Td>
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
                            fontSize="md"
                            color={textColor}
                            fontWeight="bold"
                            minWidth="100%"
                          >
                            Guardian's Annual Income
                          </Text>
                        </Flex>
                      </Flex>
                    </Td>
                    <Td minWidth={{ sm: "17rem" }}>
                      <Flex
                        align="center"
                        py=".8rem"
                        minWidth="100%"
                        flexWrap="nowrap"
                      >
                        <Flex direction="column">
                          <FormControl>
                            <Input
                              id="GAI"
                              borderRadius="5px"
                              fontSize="sm"
                              type="text"
                              placeholder="Enter Guardian Annual Income"
                            />
                          </FormControl>
                        </Flex>
                      </Flex>
                    </Td>
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
                            fontSize="md"
                            color={textColor}
                            fontWeight="bold"
                            minWidth="100%"
                          >
                            Guardian's Mobile No.
                          </Text>
                        </Flex>
                      </Flex>
                    </Td>
                    <Td minWidth={{ sm: "17rem" }}>
                      <Flex
                        align="center"
                        py=".8rem"
                        minWidth="100%"
                        flexWrap="nowrap"
                      >
                        <Flex direction="column">
                          <FormControl>
                            <Input
                              id="GMN"
                              borderRadius="5px"
                              fontSize="sm"
                              type="text"
                              placeholder="Enter Guardian Mobile No."
                            />
                          </FormControl>
                        </Flex>
                      </Flex>
                    </Td>
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
                            fontSize="md"
                            color={textColor}
                            fontWeight="bold"
                            minWidth="100%"
                          >
                            Guardian's Email ID
                          </Text>
                        </Flex>
                      </Flex>
                    </Td>
                    <Td minWidth={{ sm: "17rem" }}>
                      <Flex
                        align="center"
                        py=".8rem"
                        minWidth="100%"
                        flexWrap="nowrap"
                      >
                        <Flex direction="column">
                          <FormControl>
                            <Input
                              id="GEI"
                              borderRadius="5px"
                              fontSize="sm"
                              type="text"
                              placeholder="Enter Guardian Email ID"
                            />
                          </FormControl>
                        </Flex>
                      </Flex>
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </CardBody>
          </Card>
          <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
            <CardHeader p="6px 0px 22px 0px">
              <Text fontSize="xl" color={textColor} fontWeight="bold">
                Mother's and Sibling Details
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
                    <Td minWidth={{ sm: "17rem" }}>
                      <Flex
                        align="center"
                        py=".8rem"
                        minWidth="100%"
                        flexWrap="nowrap"
                      >
                        <Flex direction="column">
                          <FormControl>
                            <Input
                              id="MN"
                              borderRadius="5px"
                              fontSize="sm"
                              type="text"
                              placeholder="Enter your Mother's Name"
                            />
                          </FormControl>
                        </Flex>
                      </Flex>
                    </Td>
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
                    <Td minWidth={{ sm: "17rem" }}>
                      <Flex
                        align="center"
                        py=".8rem"
                        minWidth="100%"
                        flexWrap="nowrap"
                      >
                        <Flex direction="column">
                          <FormControl>
                            <Input
                              id="MQ"
                              borderRadius="5px"
                              fontSize="sm"
                              type="text"
                              placeholder="Enter the Mother's Qualification"
                            />
                          </FormControl>
                        </Flex>
                      </Flex>
                    </Td>
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
                    <Td minWidth={{ sm: "17rem" }}>
                      <Flex
                        align="center"
                        py=".8rem"
                        minWidth="100%"
                        flexWrap="nowrap"
                      >
                        <Flex direction="column">
                          <FormControl>
                            <Input
                              id="MO"
                              borderRadius="5px"
                              fontSize="sm"
                              type="text"
                              placeholder="Enter Mother's Occupation"
                            />
                          </FormControl>
                        </Flex>
                      </Flex>
                    </Td>
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
                    <Td minWidth={{ sm: "17rem" }}>
                      <Flex
                        align="center"
                        py=".8rem"
                        minWidth="100%"
                        flexWrap="nowrap"
                      >
                        <Flex direction="column">
                          <FormControl>
                            <Input
                              id="MOA"
                              borderRadius="5px"
                              fontSize="sm"
                              type="text"
                              placeholder="Enter Mother's Office Address"
                            />
                          </FormControl>
                        </Flex>
                      </Flex>
                    </Td>
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
                    <Td minWidth={{ sm: "17rem" }}>
                      <Flex
                        align="center"
                        py=".8rem"
                        minWidth="100%"
                        flexWrap="nowrap"
                      >
                        <Flex direction="column">
                          <FormControl>
                            <Input
                              id="MAI"
                              borderRadius="5px"
                              fontSize="sm"
                              type="text"
                              placeholder="Enter Mother's Annual Income"
                            />
                          </FormControl>
                        </Flex>
                      </Flex>
                    </Td>
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
                    <Td minWidth={{ sm: "17rem" }}>
                      <Flex
                        align="center"
                        py=".8rem"
                        minWidth="100%"
                        flexWrap="nowrap"
                      >
                        <Flex direction="column">
                          <FormControl>
                            <Input
                              id="MMN"
                              borderRadius="5px"
                              fontSize="sm"
                              type="text"
                              placeholder="Enter Mother's Mobile No."
                            />
                          </FormControl>
                        </Flex>
                      </Flex>
                    </Td>
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
                    <Td minWidth={{ sm: "17rem" }}>
                      <Flex
                        align="center"
                        py=".8rem"
                        minWidth="100%"
                        flexWrap="nowrap"
                      >
                        <Flex direction="column">
                          <FormControl>
                            <Input
                              id="MEI"
                              borderRadius="5px"
                              fontSize="sm"
                              type="text"
                              placeholder="Enter Mother's Email ID"
                            />
                          </FormControl>
                        </Flex>
                      </Flex>
                    </Td>
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
                            fontSize="md"
                            color={textColor}
                            fontWeight="bold"
                            minWidth="100%"
                          >
                            No. Of Siblings
                          </Text>
                        </Flex>
                      </Flex>
                    </Td>
                    <Td minWidth={{ sm: "17rem" }}>
                      <Flex
                        align="center"
                        py=".8rem"
                        minWidth="100%"
                        flexWrap="nowrap"
                      >
                        <Flex direction="column">
                          <FormControl>
                            <Input
                              id="NOS"
                              borderRadius="5px"
                              fontSize="sm"
                              type="text"
                              placeholder="Enter No. Of Siblings"
                            />
                          </FormControl>
                        </Flex>
                      </Flex>
                    </Td>
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
                            fontSize="md"
                            color={textColor}
                            fontWeight="bold"
                            minWidth="100%"
                          >
                            Name Of Siblings
                          </Text>
                        </Flex>
                      </Flex>
                    </Td>
                    <Td minWidth={{ sm: "17rem" }}>
                      <Flex
                        align="center"
                        py=".8rem"
                        minWidth="100%"
                        flexWrap="nowrap"
                      >
                        <Flex direction="column">
                          <FormControl>
                            <Input
                              id="NAS"
                              borderRadius="5px"
                              fontSize="sm"
                              type="text"
                              placeholder="Enter Name Of Siblings"
                            />
                          </FormControl>
                        </Flex>
                      </Flex>
                    </Td>
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
                            fontSize="md"
                            color={textColor}
                            fontWeight="bold"
                            minWidth="100%"
                          >
                            Qualification Of Siblings
                          </Text>
                        </Flex>
                      </Flex>
                    </Td>
                    <Td minWidth={{ sm: "17rem" }}>
                      <Flex
                        align="center"
                        py=".8rem"
                        minWidth="100%"
                        flexWrap="nowrap"
                      >
                        <Flex direction="column">
                          <FormControl>
                            <Input
                              id="QOS"
                              borderRadius="5px"
                              fontSize="sm"
                              type="text"
                              placeholder="Enter Qualification Of Siblings"
                            />
                          </FormControl>
                        </Flex>
                      </Flex>
                    </Td>
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
                            fontSize="md"
                            color={textColor}
                            fontWeight="bold"
                            minWidth="100%"
                          >
                            Sibling's Occupation
                          </Text>
                        </Flex>
                      </Flex>
                    </Td>
                    <Td minWidth={{ sm: "17rem" }}>
                      <Flex
                        align="center"
                        py=".8rem"
                        minWidth="100%"
                        flexWrap="nowrap"
                      >
                        <Flex direction="column">
                          <FormControl>
                            <Input
                              id="SO"
                              borderRadius="5px"
                              fontSize="sm"
                              type="text"
                              placeholder="Enter Sibling's Occupation"
                            />
                          </FormControl>
                        </Flex>
                      </Flex>
                    </Td>
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
                            fontSize="md"
                            color={textColor}
                            fontWeight="bold"
                            minWidth="100%"
                          >
                            Alumni Of LICET Or LOYOLA
                          </Text>
                        </Flex>
                      </Flex>
                    </Td>
                    <Td minWidth={{ sm: "17rem" }}>
                      <Flex
                        align="center"
                        py=".8rem"
                        minWidth="100%"
                        flexWrap="nowrap"
                      >
                        <Flex direction="column">
                          <FormControl>
                          <Select  placeholder="Select Option" isRequired>      
                            <option value="option1">Y</option>
                            <option value="option2">N</option>
                        </Select>
                          </FormControl>
                        </Flex>
                      </Flex>
                    </Td>
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
                    <Td minWidth={{ sm: "17rem" }}>
                      <Flex
                        align="center"
                        py=".8rem"
                        minWidth="100%"
                        flexWrap="nowrap"
                      >
                        <Flex direction="column">
                          <FormControl>
                            <Input
                              id="AN"
                              borderRadius="5px"
                              fontSize="sm"
                              type="text"
                              placeholder="Enter your Application No."
                            />
                          </FormControl>
                        </Flex>
                      </Flex>
                    </Td>
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
                    <Td minWidth={{ sm: "17rem" }}>
                      <Flex
                        align="center"
                        py=".8rem"
                        minWidth="100%"
                        flexWrap="nowrap"
                      >
                        <Flex direction="column">
                          <FormControl>
                          <Input
                            id="DOA"
                            borderRadius="5px"
                            fontSize="sm"
                            type="text"
                            style={{
                              backgroundColor: "rgb(31 39 51)",
                            }}
                            type="date"
                          />
                          </FormControl>
                        </Flex>
                      </Flex>
                    </Td>
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
                    <Td minWidth={{ sm: "17rem" }}>
                      <Flex
                        align="center"
                        py=".8rem"
                        minWidth="100%"
                        flexWrap="nowrap"
                      >
                        <Flex direction="column">
                          <FormControl>
                          <Select  placeholder="Select Option" isRequired>      
                            <option value="option1">GQ</option>
                            <option value="option2">MQ</option>
                        </Select>
                          </FormControl>
                        </Flex>
                      </Flex>
                    </Td>
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
                    <Td minWidth={{ sm: "17rem" }}>
                      <Flex
                        align="center"
                        py=".8rem"
                        minWidth="100%"
                        flexWrap="nowrap"
                      >
                        <Flex direction="column">
                          <FormControl>
                          <Select  placeholder="Select Option" isRequired>      
                            <option value="option1">R</option>
                            <option value="option2">L</option>
                        </Select>
                          </FormControl>
                        </Flex>
                      </Flex>
                    </Td>
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
                    <Td minWidth={{ sm: "17rem" }}>
                      <Flex
                        align="center"
                        py=".8rem"
                        minWidth="100%"
                        flexWrap="nowrap"
                      >
                        <Flex direction="column">
                          <FormControl>
                          <Select  placeholder="Select Option" isRequired>      
                            <option value="option1">D</option>
                            <option value="option2">H</option>
                        </Select>
                          </FormControl>
                        </Flex>
                      </Flex>
                    </Td>
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
                    <Td minWidth={{ sm: "17rem" }}>
                      <Flex
                        align="center"
                        py=".8rem"
                        minWidth="100%"
                        flexWrap="nowrap"
                      >
                        <Flex direction="column">
                          <FormControl>
                            <Input
                              id="SN"
                              borderRadius="5px"
                              fontSize="sm"
                              type="text"
                              placeholder="Enter your Scholarship Name"
                            />
                          </FormControl>
                        </Flex>
                      </Flex>
                    </Td>
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
                    <Td minWidth={{ sm: "17rem" }}>
                      <Flex
                        align="center"
                        py=".8rem"
                        minWidth="100%"
                        flexWrap="nowrap"
                      >
                        <Flex direction="column">
                          <FormControl>
                            <Input
                              id="SA"
                              borderRadius="5px"
                              fontSize="sm"
                              type="text"
                              placeholder="Enter the Scholarship Amount"
                            />
                          </FormControl>
                        </Flex>
                      </Flex>
                    </Td>
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
                    <Td minWidth={{ sm: "17rem" }}>
                      <Flex
                        align="center"
                        py=".8rem"
                        minWidth="100%"
                        flexWrap="nowrap"
                      >
                        <Flex direction="column">
                          <FormControl>
                          <Select  placeholder="Select Option" isRequired>      
                            <option value="option1">Y</option>
                            <option value="option2">N</option>
                        </Select>
                          </FormControl>
                        </Flex>
                      </Flex>
                    </Td>
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
                            fontSize="md"
                            color={textColor}
                            fontWeight="bold"
                            minWidth="100%"
                          >
                            Economically Backward (Annual Income Of Parents Less
                            than 1LPA)
                          </Text>
                        </Flex>
                      </Flex>
                    </Td>
                    <Td minWidth={{ sm: "17rem" }}>
                      <Flex
                        align="center"
                        py=".8rem"
                        minWidth="100%"
                        flexWrap="nowrap"
                      >
                        <Flex direction="column">
                          <FormControl>
                          <Select  placeholder="Select Option" isRequired>      
                            <option value="option1">Y</option>
                            <option value="option2">N</option>
                        </Select>
                          </FormControl>
                        </Flex>
                      </Flex>
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </CardBody>
          </Card>

          <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
            <CardHeader p="6px 0px 22px 0px">
              <Text fontSize="xl" color={textColor} fontWeight="bold">
                Technical Skills
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
                    <Td minWidth={{ sm: "17rem" }}>
                      <Flex
                        align="center"
                        py=".8rem"
                        minWidth="100%"
                        flexWrap="nowrap"
                      >
                        <Flex direction="column">
                          <FormControl>
                            <Input
                              id="PL"
                              borderRadius="5px"
                              fontSize="sm"
                              type="text"
                              placeholder="Enter if any"
                            />
                          </FormControl>
                        </Flex>
                      </Flex>
                    </Td>
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
                            fontSize="md"
                            color={textColor}
                            fontWeight="bold"
                            minWidth="100%"
                          >
                            Software Profficieny
                          </Text>
                        </Flex>
                      </Flex>
                    </Td>
                    <Td minWidth={{ sm: "17rem" }}>
                      <Flex
                        align="center"
                        py=".8rem"
                        minWidth="100%"
                        flexWrap="nowrap"
                      >
                        <Flex direction="column">
                          <FormControl>
                            <Input
                              id="SP"
                              borderRadius="5px"
                              fontSize="sm"
                              type="text"
                              placeholder="Enter if any"
                            />
                          </FormControl>
                        </Flex>
                      </Flex>
                    </Td>
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
                            fontSize="md"
                            color={textColor}
                            fontWeight="bold"
                            minWidth="100%"
                          >
                            Department Related Profficieny
                          </Text>
                        </Flex>
                      </Flex>
                    </Td>
                    <Td minWidth={{ sm: "17rem" }}>
                      <Flex
                        align="center"
                        py=".8rem"
                        minWidth="100%"
                        flexWrap="nowrap"
                      >
                        <Flex direction="column">
                          <FormControl>
                            <Input
                              id="DRP"
                              borderRadius="5px"
                              fontSize="sm"
                              type="text"
                              placeholder="Enter if any"
                            />
                          </FormControl>
                        </Flex>
                      </Flex>
                    </Td>
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
                    <Td minWidth={{ sm: "17rem" }}>
                      <Flex
                        align="center"
                        py=".8rem"
                        minWidth="100%"
                        flexWrap="nowrap"
                      >
                        <Flex direction="column">
                          <FormControl>
                            <Input
                              id="CER"
                              borderRadius="5px"
                              fontSize="sm"
                              type="text"
                              placeholder="Enter if any"
                            />
                          </FormControl>
                        </Flex>
                      </Flex>
                    </Td>
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
                            fontSize="md"
                            color={textColor}
                            fontWeight="bold"
                            minWidth="100%"
                          >
                            Other Skills
                          </Text>
                        </Flex>
                      </Flex>
                    </Td>
                    <Td minWidth={{ sm: "17rem" }}>
                      <Flex
                        align="center"
                        py=".8rem"
                        minWidth="100%"
                        flexWrap="nowrap"
                      >
                        <Flex direction="column">
                          <FormControl>
                            <Input
                              id="OS"
                              borderRadius="5px"
                              fontSize="sm"
                              type="text"
                              placeholder="Enter if any"
                            />
                          </FormControl>
                        </Flex>
                      </Flex>
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </CardBody>
          </Card>

          <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
            <CardHeader p="6px 0px 22px 0px">
              <Text fontSize="xl" color={textColor} fontWeight="bold">
                Non - Technical Skills
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
                    <Td minWidth={{ sm: "17rem" }}>
                      <Flex
                        align="center"
                        py=".8rem"
                        minWidth="100%"
                        flexWrap="nowrap"
                      >
                        <Flex direction="column">
                          <FormControl>
                            <Input
                              id="AAS"
                              borderRadius="5px"
                              fontSize="sm"
                              type="text"
                              placeholder="Enter if any"
                            />
                          </FormControl>
                        </Flex>
                      </Flex>
                    </Td>
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
                    <Td minWidth={{ sm: "17rem" }}>
                      <Flex
                        align="center"
                        py=".8rem"
                        minWidth="100%"
                        flexWrap="nowrap"
                      >
                        <Flex direction="column">
                          <FormControl>
                            <Input
                              id="CS"
                              borderRadius="5px"
                              fontSize="sm"
                              type="text"
                              placeholder="Enter if any"
                            />
                          </FormControl>
                        </Flex>
                      </Flex>
                    </Td>
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
                    <Td minWidth={{ sm: "17rem" }}>
                      <Flex
                        align="center"
                        py=".8rem"
                        minWidth="100%"
                        flexWrap="nowrap"
                      >
                        <Flex direction="column">
                          <FormControl>
                            <Input
                              id="SME"
                              borderRadius="5px"
                              fontSize="sm"
                              type="text"
                              placeholder="Enter if any"
                            />
                          </FormControl>
                        </Flex>
                      </Flex>
                    </Td>
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
                    <Td minWidth={{ sm: "17rem" }}>
                      <Flex
                        align="center"
                        py=".8rem"
                        minWidth="100%"
                        flexWrap="nowrap"
                      >
                        <Flex direction="column">
                          <FormControl>
                            <Input
                              id="LS"
                              borderRadius="5px"
                              fontSize="sm"
                              type="text"
                              placeholder="Enter if any"
                            />
                          </FormControl>
                        </Flex>
                      </Flex>
                    </Td>
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
                    <Td minWidth={{ sm: "17rem" }}>
                      <Flex
                        align="center"
                        py=".8rem"
                        minWidth="100%"
                        flexWrap="nowrap"
                      >
                        <Flex direction="column">
                          <FormControl>
                            <Input
                              id="OIS"
                              borderRadius="5px"
                              fontSize="sm"
                              type="text"
                              placeholder="Enter if any"
                            />
                          </FormControl>
                        </Flex>
                      </Flex>
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </CardBody>
          </Card>

          <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
            <CardHeader p="6px 0px 22px 0px">
              <Text fontSize="xl" color={textColor} fontWeight="bold">
                Goals
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
                    <Td minWidth={{ sm: "17rem" }}>
                      <Flex
                        align="center"
                        py=".8rem"
                        minWidth="100%"
                        flexWrap="nowrap"
                      >
                        <Flex direction="column">
                          <FormControl>
                            <Input
                              id="STG"
                              borderRadius="5px"
                              fontSize="sm"
                              type="text"
                              placeholder="Enter your Short Term Goals"
                            />
                          </FormControl>
                        </Flex>
                      </Flex>
                    </Td>
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
                    <Td minWidth={{ sm: "17rem" }}>
                      <Flex
                        align="center"
                        py=".8rem"
                        minWidth="100%"
                        flexWrap="nowrap"
                      >
                        <Flex direction="column">
                          <FormControl>
                            <Input
                              id="LTG"
                              borderRadius="5px"
                              fontSize="sm"
                              type="text"
                              placeholder="Enter your Long Term Goals"
                            />
                          </FormControl>
                        </Flex>
                      </Flex>
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </CardBody>
          </Card>

          <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
            <CardHeader p="6px 0px 22px 0px">
              <Text fontSize="xl" color={textColor} fontWeight="bold">
                Professional Membership
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
                            fontSize="md"
                            color={textColor}
                            fontWeight="bold"
                            minWidth="100%"
                          >
                            Name
                          </Text>
                        </Flex>
                      </Flex>
                    </Td>
                    <Td minWidth={{ sm: "17rem" }}>
                      <Flex
                        align="center"
                        py=".8rem"
                        minWidth="100%"
                        flexWrap="nowrap"
                      >
                        <Flex direction="column">
                          <FormControl>
                            <Input
                              id="PMNA"
                              borderRadius="5px"
                              fontSize="sm"
                              type="text"
                              placeholder="Enter your Professional Membership Name"
                            />
                          </FormControl>
                        </Flex>
                      </Flex>
                    </Td>
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
                    <Td minWidth={{ sm: "17rem" }}>
                      <Flex
                        align="center"
                        py=".8rem"
                        minWidth="100%"
                        flexWrap="nowrap"
                      >
                        <Flex direction="column">
                          <FormControl>
                            <Input
                              id="PMNO"
                              borderRadius="5px"
                              fontSize="sm"
                              type="text"
                              placeholder="Enter your Membership No."
                            />
                          </FormControl>
                        </Flex>
                      </Flex>
                    </Td>
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
                            fontSize="md"
                            color={textColor}
                            fontWeight="bold"
                            minWidth="100%"
                          >
                            Duration
                          </Text>
                        </Flex>
                      </Flex>
                    </Td>
                    <Td minWidth={{ sm: "17rem" }}>
                      <Flex
                        align="center"
                        py=".8rem"
                        minWidth="100%"
                        flexWrap="nowrap"
                      >
                        <Flex direction="column">
                          <FormControl>
                            <Input
                              id="DUR"
                              borderRadius="5px"
                              fontSize="sm"
                              type="text"
                              placeholder="Enter your Membership Duration"
                            />
                          </FormControl>
                        </Flex>
                      </Flex>
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </CardBody>
          </Card>
        </SimpleGrid>
      </SimpleGrid>
      <Button
        onClick={funinsert}
        alignSelf="center"
        marginBottom="1rem"
        marginTop="1rem"
        marginRight="1rem"
        width="30%"
        colorScheme="orange"
        variant="solid"
      >
        Submit
      </Button>
    </Flex>
  );
}

export default GeneralInformationdata;
