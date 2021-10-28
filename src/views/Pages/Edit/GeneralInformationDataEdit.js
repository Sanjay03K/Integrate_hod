import React, { useState, useEffect } from "react";
import axios from "axios";
// Chakra imports
import {
  Flex,
  Table,
  Tbody,
  Text,
  Tr,
  Td,
  Input,
  useColorModeValue,
  Button,
  FormControl,
  SimpleGrid,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";

function GeneralInformationDataEdit(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  var sname,
    roll_no,
    aadhar_no,
    email,
    licet_email,
    batch,
    dept,
    quota,
    gender,
    dob,
    nationality,
    contant_no,
    father_name,
    mother_name,
    father_mob_no,
    mother_mob_no,
    religion,
    reg_no,
    if_catholic_parish,
    dalit_catholic_yn,
    community,
    blood_group,
    mother_tongue,
    present_address,
    permanent_address,
    hse_school_name,
    hse_board,
    hse_medium,
    hse_sec_lang,
    hse_group,
    hse_marks,
    hse_percentage,
    hse_cutoff,
    hse_attempts,
    sslc_school_name,
    sslc_board,
    sslc_medium,
    sslc_sec_lang,
    sslc_marks,
    sslc_percentage,
    sslc_attempts;
  const [data, setData] = useState([]);

  let params = new URLSearchParams();
  params.append("RollNumber", localStorage.getItem("generalStudent"));

  axios.post("http://localhost:5000/GeneralData", params).then((items) => {
    setData(items.data);
  });
  data.map((item) => {
    (sname = item.sname),
      (roll_no = item.roll_no),
      (reg_no = item.reg_no),
      (gender = item.gender),
      (dob = item.dob),
      (nationality = item.nationality),
      (religion = item.religion),
      (if_catholic_parish = item.if_catholic_parish),
      (dalit_catholic_yn = item.dalit_catholic_yn),
      (community = item.community),
      (blood_group = item.blood_group),
      (mother_tongue = item.mother_tongue),
      (contant_no = item.contant_no),
      (aadhar_no = item.aadhar_no),
      (licet_email = item.licet_email),
      (email = item.email),
      (present_address = item.present_address),
      (permanent_address = item.permanent_address),
      (hse_school_name = item.hse_school_name),
      (hse_board = item.hse_board),
      (hse_medium = item.hse_medium),
      (hse_sec_lang = item.hse_sec_lang),
      (hse_group = item.hse_group),
      (hse_marks = item.hse_marks),
      (hse_percentage = item.hse_percentage),
      (hse_cutoff = item.hse_cutoff),
      (hse_attempts = item.hse_attempts),
      (sslc_school_name = item.sslc_school_name),
      (sslc_board = item.sslc_board),
      (sslc_medium = item.sslc_medium),
      (sslc_sec_lang = item.sslc_sec_lang),
      (sslc_marks = item.sslc_marks),
      (sslc_percentage = item.sslc_percentage),
      (sslc_attempts = item.sslc_attempts);
  });
  function funedit() {
    let params = new URLSearchParams();
    params.append("RollNumber", localStorage.getItem("generalStudent"));
    if (document.getElementById("NID").value.length !== 0) {
      params.append("name", document.getElementById("NID").value);
    } else {
      params.append("name", sname);
    }
    if (document.getElementById("REID").value.length !== 0) {
      params.append("registerno", document.getElementById("REID").value);
    } else {
      params.append("registerno", reg_no);
    }
    if (document.getElementById("SID").value.length !== 0) {
      params.append("sex", document.getElementById("SID").value);
    } else {
      params.append("sex", gender);
    }
    if (document.getElementById("DOBID").value.length !== 0) {
      params.append("dateofbirth", document.getElementById("DOBID").value);
    } else {
      params.append("dateofbirth", dob);
    }
    if (document.getElementById("NATIONID").value.length !== 0) {
      params.append("nationality", document.getElementById("NATIONID").value);
    } else {
      params.append("nationality", nationality);
    }
    if (document.getElementById("RELIGIONID").value.length !== 0) {
      params.append("religion", document.getElementById("RELIGIONID").value);
    } else {
      params.append("religion", religion);
    }
    if (document.getElementById("PARISHID").value.length !== 0) {
      params.append("parish", document.getElementById("PARISHID").value);
    } else {
      params.append("parish", if_catholic_parish);
    }
    if (document.getElementById("DALITID").value.length !== 0) {
      params.append("dalit", document.getElementById("DALITID").value);
    } else {
      params.append("dalit", dalit_catholic_yn);
    }
    if (document.getElementById("COMMUNITYID").value.length !== 0) {
      params.append("community", document.getElementById("COMMUNITYID").value);
    } else {
      params.append("community", community);
    }
    if (document.getElementById("BLOODID").value.length !== 0) {
      params.append("bloodgroup", document.getElementById("BLOODID").value);
    } else {
      params.append("bloodgroup", blood_group);
    }
    if (document.getElementById("AADHARID").value.length !== 0) {
      params.append("aadhar", document.getElementById("AADHARID").value);
    } else {
      params.append("aadhar", aadhar_no);
    }
    if (document.getElementById("MOTHERID").value.length !== 0) {
      params.append("mothertounge", document.getElementById("MOTHERID").value);
    } else {
      params.append("mothertounge", mother_tongue);
    }
    if (document.getElementById("CONTACTID").value.length !== 0) {
      params.append("contact", document.getElementById("CONTACTID").value);
    } else {
      params.append("contact", contant_no);
    }
    if (document.getElementById("PEREMID").value.length !== 0) {
      params.append("peremail", document.getElementById("PEREMID").value);
    } else {
      params.append("peremail", email);
    }
    if (document.getElementById("PREADDRID").value.length !== 0) {
      params.append("preaddr", document.getElementById("PREADDRID").value);
    } else {
      params.append("preaddr", present_address);
    }
    if (document.getElementById("PERADDRID").value.length !== 0) {
      params.append("peraddr", document.getElementById("PERADDRID").value);
    } else {
      params.append("peraddr", permanent_address);
    }

    if (document.getElementById("NOS1").value.length !== 0) {
      params.append("hsenos", document.getElementById("NOS1").value);
    } else {
      params.append("hsenos", hse_school_name);
    }
    if (document.getElementById("BOARD1").value.length !== 0) {
      params.append("hsebod", document.getElementById("BOARD1").value);
    } else {
      params.append("hsebod", hse_board);
    }
    if (document.getElementById("MOI1").value.length !== 0) {
      params.append("hsemoi", document.getElementById("MOI1").value);
    } else {
      params.append("hsemoi", hse_medium);
    }
    if (document.getElementById("SL1").value.length !== 0) {
      params.append("hsesl", document.getElementById("SL1").value);
    } else {
      params.append("hsesl", hse_sec_lang);
    }
    if (document.getElementById("GROUP1").value.length !== 0) {
      params.append("hsegro", document.getElementById("GROUP1").value);
    } else {
      params.append("hsegro", hse_group);
    }
    if (document.getElementById("TM1").value.length !== 0) {
      params.append("hsetm", document.getElementById("TM1").value);
    } else {
      params.append("hsetm", hse_marks);
    }
    if (document.getElementById("OP1").value.length !== 0) {
      params.append("hseop", document.getElementById("OP1").value);
    } else {
      params.append("hseop", hse_percentage);
    }
    if (document.getElementById("COM1").value.length !== 0) {
      params.append("hsecom", document.getElementById("COM1").value);
    } else {
      params.append("hsecom", hse_cutoff);
    }
    if (document.getElementById("NOA1").value.length !== 0) {
      params.append("hsenoa", document.getElementById("NOA1").value);
    } else {
      params.append("hsenoa", hse_attempts);
    }

    if (document.getElementById("NOS2").value.length !== 0) {
      params.append("sslcnos", document.getElementById("NOS2").value);
    } else {
      params.append("sslcnos", sslc_school_name);
    }
    if (document.getElementById("BOARD2").value.length !== 0) {
      params.append("sslcbod", document.getElementById("BOARD2").value);
    } else {
      params.append("sslcbod", sslc_board);
    }
    if (document.getElementById("MOI2").value.length !== 0) {
      params.append("sslcmoi", document.getElementById("MOI2").value);
    } else {
      params.append("sslcmoi", sslc_medium);
    }
    if (document.getElementById("SL2").value.length !== 0) {
      params.append("sslcsl", document.getElementById("SL2").value);
    } else {
      params.append("sslcsl", sslc_sec_lang);
    }
    if (document.getElementById("TM2").value.length !== 0) {
      params.append("sslctm", document.getElementById("TM2").value);
    } else {
      params.append("sslctm", sslc_marks);
    }
    if (document.getElementById("OP2").value.length !== 0) {
      params.append("sslcop", document.getElementById("OP2").value);
    } else {
      params.append("sslcop", sslc_percentage);
    }
    if (document.getElementById("NOA2").value.length !== 0) {
      params.append("sslcnoa", document.getElementById("NOA2").value);
    } else {
      params.append("sslcnoa", sslc_attempts);
    }

    axios.post("http://localhost:5000/GeneralDataEdit", params);
    window.location.href =
      "http://localhost:3000/Class-Advisor#/admin2/GeneralInformationdata";
  }
  const textColor = useColorModeValue("gray.700", "white");

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
                          fontSize="md"
                          color={textColor}
                          fontWeight="bold"
                          minWidth="100%"
                        >
                          STUDENT NAME:
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
                            placeholder={sname}
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
                          ROLL NO:
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
                          <Text
                            fontSize="md"
                            color={textColor}
                            fontWeight="bold"
                            minWidth="100%"
                          >
                            {roll_no}
                          </Text>
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
                          REGISTER NO:
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
                            placeholder={reg_no}
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
                          SEX:
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
                            id="SID"
                            borderRadius="5px"
                            fontSize="sm"
                            type="text"
                            placeholder={gender}
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
                          DATE OF BIRTH:
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
                            placeholder={dob}
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
                          NATIONALITY:
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
                            placeholder={nationality}
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
                          RELIGION:
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
                            placeholder={religion}
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
                          IF CATHOLIC, PARISH ?:
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
                            placeholder={if_catholic_parish}
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
                          DALIT CATHOLIC:
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
                            id="DALITID"
                            borderRadius="5px"
                            fontSize="sm"
                            type="text"
                            placeholder={dalit_catholic_yn}
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
                          COMMUNITY:
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
                            placeholder={community}
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
                          BLOOD GROUP:
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
                            placeholder={blood_group}
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
                          MOTHER TOUNGE:
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
                            placeholder={mother_tongue}
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
                          CONTACT NUMBER:
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
                            placeholder={contant_no}
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
                          AADHAR NO:
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
                            placeholder={aadhar_no}
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
                          OFFICIAL EMAIL ID:
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
                          <Text
                            fontSize="md"
                            color={textColor}
                            fontWeight="bold"
                            minWidth="100%"
                          >
                            {licet_email}
                          </Text>
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
                          PERSONAL EMAIL ID:
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
                            placeholder={email}
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
                          PRESENT ADDRESS:
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
                            placeholder={present_address}
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
                          PERMANENT ADDRESS:
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
                            placeholder={permanent_address}
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
                              placeholder={hse_school_name}
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
                              placeholder={hse_board}
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
                              placeholder={hse_medium}
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
                              placeholder={hse_sec_lang}
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
                              placeholder={hse_group}
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
                              placeholder={hse_marks}
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
                              placeholder={hse_percentage}
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
                              placeholder={hse_cutoff}
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
                            No. of Attempts
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
                              placeholder={hse_attempts}
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
                              placeholder={sslc_school_name}
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
                              placeholder={sslc_board}
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
                            Medium of Instruction
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
                              placeholder={sslc_medium}
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
                              placeholder={sslc_sec_lang}
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
                              placeholder={sslc_marks}
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
                              placeholder={sslc_percentage}
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
                            No. of Attempts
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
                              placeholder={sslc_attempts}
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
      <SimpleGrid pt="1.5rem" columns={{ sm: 1, md: 2, xl: 2 }} gap={5}>
        <Card>
          <CardBody>
            <Button
              onClick={onOpen}
              colorScheme="orange"
              variant="solid"
              width="100%"
            >
              Save
            </Button>
            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Edit Details</ModalHeader>
                <ModalBody>Are you sure ?</ModalBody>
                <ModalFooter>
                  <Button
                    colorScheme="blue"
                    mr={3}
                    onClick={() => {
                      funedit();
                      onClose();
                    }}
                  >
                    Submit
                  </Button>
                  <Button colorScheme="blue" mr={3} onClick={onClose}>
                    Close
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <Button colorScheme="orange" variant="solid" width="100%">
              Cancel
            </Button>
          </CardBody>
        </Card>
      </SimpleGrid>
    </Flex>
  );
}

export default GeneralInformationDataEdit;
