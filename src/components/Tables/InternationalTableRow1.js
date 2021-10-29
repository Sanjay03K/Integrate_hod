//Class Advisor International Exposure Table Row

import {
  Button,
  Flex,
  Input,
  Td,
  Text,
  Tr,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import axios from "axios";

var server_URL = "http://localhost:5000/";

function InternationalTableRow(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  function funedit() {
    let cid = { id };
    let cn = { row1 };
    let cd = { row2 };
    let cp = { row3 };
    let co = { row4 };
    let cpd = { row5 };
    let cf = { row6 };
    let params = new URLSearchParams();
    params.append("columnid", cid.id);
    if (document.getElementById("ECID").value.length !== 0) {
      params.append("campusname", document.getElementById("ECID").value);
    } else {
      params.append("campusname", cn.row1);
    }
    if (document.getElementById("EDID").value.length !== 0) {
      params.append("dateyear", document.getElementById("EDID").value);
    } else {
      params.append("dateyear", cd.row2);
    }
    if (document.getElementById("EPID").value.length !== 0) {
      params.append("project", document.getElementById("EPID").value);
    } else {
      params.append("project", cp.row3);
    }
    if (document.getElementById("EOID").value.length !== 0) {
      params.append("outcome", document.getElementById("EOID").value);
    } else {
      params.append("outcome", co.row4);
    }
    if (document.getElementById("EPDID").value.length !== 0) {
      params.append("personal", document.getElementById("EPDID").value);
    } else {
      params.append("personal", cpd.row5);
    }
    if (document.getElementById("EFID").value.length !== 0) {
      params.append("foreign", document.getElementById("EFID").value);
    } else {
      params.append("foreign", cf.row6);
    }
    params.append("credits", document.getElementById("CRID").value);
    axios.post(server_URL + "InternationalExposureEdit", params);
  }

  function fundelete() {
    let cid = { id };
    let params = new URLSearchParams();
    params.append("columnid", cid.id);
    axios.post(server_URL + "InternationalExposureDelete", params);
  }

  function funverify() {
    let cid = { id };
    let params = new URLSearchParams();
    params.append("columnid", cid.id);
    params.append("verify", "Verified");
    axios.post(server_URL + "InternationalExposureVerify", params);
  }

  const { id, row1, row2, row3, row4, row5, row6, row7, row8 } = props;

  return (
    <Tr>
      <Td minWidth={{ sm: "18em" }}>
        <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
          <Flex direction="column">{row1}</Flex>
        </Flex>
      </Td>
      <Td minWidth={{ sm: "18em" }}>
        <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
          <Flex direction="column">{row2}</Flex>
        </Flex>
      </Td>
      <Td minWidth={{ sm: "18em" }}>
        <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
          <Flex direction="column">{row3}</Flex>
        </Flex>
      </Td>
      <Td minWidth={{ sm: "18em" }}>
        <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
          <Flex direction="column">{row4}</Flex>
        </Flex>
      </Td>
      <Td minWidth={{ sm: "18em" }}>
        <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
          <Flex direction="column">{row5}</Flex>
        </Flex>
      </Td>
      <Td minWidth={{ sm: "18em" }}>
        <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
          <Flex direction="column">{row6}</Flex>
        </Flex>
      </Td>
      <Td minWidth={{ sm: "9em" }}>
        <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
          <Flex direction="column">{row7}</Flex>
        </Flex>
      </Td>
      <Td minWidth={{ sm: "9em" }}>
        <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
          <Flex direction="column">{row8}</Flex>
        </Flex>
      </Td>
      <Td>
        <Button
          onClick={onOpen}
          bg="orange.300"
          alignSelf="flex-end"
          width="fit-content"
        >
          Edit
        </Button>
        <Modal size="xl" isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Edit Details</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Tr>
                <Td>
                  <Text m="2em">Campus name</Text>
                </Td>
                <Td>
                  <Input
                    minWidth="18em"
                    borderRadius="5px"
                    fontSize="sm"
                    type="text"
                    defaultValue={row1}
                    id="ECID"
                  />
                </Td>
              </Tr>
              <Tr>
                <Td>
                  <Text m="2em">Date and Year</Text>
                </Td>
                <Td>
                  <Input
                    minWidth="18em"
                    borderRadius="5px"
                    fontSize="sm"
                    type="text"
                    defaultValue={row2}
                    id="EDID"
                  />
                </Td>
              </Tr>
              <Tr>
                <Td>
                  <Text m="2em">Project</Text>
                </Td>

                <Td>
                  <Input
                    minWidth="18em"
                    borderRadius="5px"
                    fontSize="sm"
                    type="text"
                    defaultValue={row3}
                    id="EPID"
                  />
                </Td>
              </Tr>
              <Tr>
                <Td>
                  <Text m="2em">Outcome</Text>
                </Td>
                <Td>
                  <Input
                    minWidth="18em"
                    borderRadius="5px"
                    fontSize="sm"
                    type="text"
                    defaultValue={row4}
                    id="EOID"
                  />
                </Td>
              </Tr>
              <Tr>
                <Td>
                  <Text m="2em">Personal Development</Text>
                </Td>
                <Td>
                  <Input
                    minWidth="18em"
                    borderRadius="5px"
                    fontSize="sm"
                    type="text"
                    defaultValue={row5}
                    id="EPDID"
                  />
                </Td>
              </Tr>
              <Tr>
                <Td>
                  <Text m="2em">
                    Foreign Language Courses Completed or Pursuing
                  </Text>
                </Td>
                <Td>
                  <Input
                    minWidth="18em"
                    borderRadius="5px"
                    fontSize="sm"
                    type="text"
                    defaultValue={row6}
                    id="EFID"
                  />
                </Td>
              </Tr>
              <Tr>
                <Td>
                  <Text m="2em">Credits</Text>
                </Td>
                <Td>
                  <Input
                    minWidth="18em"
                    borderRadius="5px"
                    fontSize="sm"
                    type="text"
                    defaultValue={row7}
                    id="CRID"
                  />
                </Td>
              </Tr>
            </ModalBody>

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
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Td>
      <Td>
        <Button
          onClick={fundelete}
          bg="orange.300"
          alignSelf="flex-end"
          width="fit-content"
        >
          Delete
        </Button>
      </Td>
      <Td>
        <Button
          onClick={funverify}
          bg="orange.300"
          alignSelf="flex-end"
          width="fit-content"
          disabled={{ row8 }.row8 == "Verified" ? true : false}
        >
          Verify
        </Button>
      </Td>
    </Tr>
  );
}

export default InternationalTableRow;
