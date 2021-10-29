import React, { useState, useEffect } from "react";
import change_pass from "../../controller/changepassword";
import { MdBuild , MdCall } from "react-icons/md";
// Chakra imports
import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Flex,
  SimpleGrid,
  Icon,
  Image,
  Link,
  Switch,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverArrow,
  PopoverCloseButton,
  PopoverBody,
  Portal,
  PopoverFooter,
  ButtonGroup,
  Table,
  Tbody,
  Th,
  Thead,
  Tr,
  Td,
  Input,
  Text,
  useColorModeValue,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Collapse,
} from "@chakra-ui/react";
import { SettingsIcon, EditIcon, WarningIcon } from '@chakra-ui/icons'

import axios from "axios";
// Custom components
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import CardHeader from "components/Card/CardHeader";
// Assets
import avatar2 from "assets/img/avatars/avatar2.png";
import avatar3 from "assets/img/avatars/avatar3.png";
import avatar4 from "assets/img/avatars/avatar4.png";
import avatar5 from "assets/img/avatars/avatar5.png";
import avatar8 from "assets/img/avatars/avatar8.jpg";
import ImageArchitect1 from "assets/img/ImageArchitect1.png";
import ImageArchitect2 from "assets/img/ImageArchitect2.png";
import ImageArchitect3 from "assets/img/ImageArchitect3.png";
import ProfileBgImage from "assets/img/ProfileBackground.png";
import {
  FaCube,
  FaFacebook,
  FaInstagram,
  FaPenFancy,
  FaPlus,
  FaTwitter,
} from "react-icons/fa";
import { IoDocumentsSharp } from "react-icons/io5";

function Profile() {
  var sname, licet_email, roll_no, dept, reg_no, batch, cell;
  const { isOpen, onOpen,onClose } = useDisclosure()
  // Chakra color mode
  const textColor = useColorModeValue("gray.700", "white");
  const bgProfile = useColorModeValue(
    "hsla(0,0%,100%,.8)",
    "linear-gradient(112.83deg, rgba(255, 255, 255, 0.21) 0%, rgba(255, 255, 255, 0) 110.84%)"
  );
  const borderProfileColor = useColorModeValue(
    "white",
    "rgba(255, 255, 255, 0.31)"
  );
  const emailColor = useColorModeValue("gray.400", "gray.300");
  const [data, setData] = useState([]);

  let params = new URLSearchParams();
  params.append("StudentDetails", localStorage.getItem("StudentRoll"));

  axios.post("http://localhost:5000/GeneralStudent", params).then((items) => {
    setData(items.data);
  });
  data.map((item) => {
    (sname = item.sname),
      (licet_email = item.licet_email),
      (roll_no = item.roll_no),
      (dept = item.dept),
      (reg_no = item.reg_no),
      (batch = item.batch),
      (cell = item.contact_no);
  });
  return (
    <Flex direction="column">
      <Box
        mb={{ sm: "205px", md: "75px", xl: "70px" }}
        borderRadius="15px"
        px="0px"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        align="center"
      >
        <Box
          bgImage={ProfileBgImage}
          bgSize="cover"
          w="100%"
          h="300px"
          borderRadius="25px"
          bgPosition="50%"
          bgRepeat="no-repeat"
          position="relative"
          display="flex"
          justifyContent="center"
        >
          <Flex
            direction={{ sm: "column", md: "row" }}
            mx="1.5rem"
            maxH="330px"
            w={{ sm: "90%", xl: "95%" }}
            justifyContent={{ sm: "center", md: "space-between" }}
            align="center"
            backdropFilter="saturate(200%) blur(50px)"
            position="absolute"
            boxShadow="0px 2px 5.5px rgba(0, 0, 0, 0.02)"
            border="2px solid"
            borderColor={borderProfileColor}
            bg={bgProfile}
            p="24px"
            borderRadius="20px"
            transform={{
              sm: "translateY(45%)",
              md: "translateY(110%)",
              lg: "translateY(160%)",
            }}
          >
            <Flex
              align="center"
              mb={{ sm: "10px", md: "0px" }}
              direction={{ sm: "column", md: "row" }}
              w={{ sm: "100%" }}
              textAlign={{ sm: "center", md: "start" }}
            >
              <Flex direction="column" maxWidth="100%" my={{ sm: "14px" }}>
                <Text
                  fontSize={{ sm: "lg", lg: "xl" }}
                  color={textColor}
                  fontWeight="bold"
                  ms={{ sm: "8px", md: "0px" }}
                >
                  {sname}
                </Text>
                <Text
                  fontSize={{ sm: "sm", md: "md" }}
                  color={emailColor}
                  fontWeight="semibold"
                >
                  {licet_email}
                </Text>
              </Flex>
            </Flex>
            <Popover placement="auto">
  <PopoverTrigger>
    <Button leftIcon={<SettingsIcon />} colorScheme="orange">Settings</Button>
  </PopoverTrigger>
  <Portal> 
  <PopoverContent>
    <PopoverArrow />
    <PopoverCloseButton />
    <PopoverHeader>Available Settings</PopoverHeader>
    <PopoverBody><Button onClick={onOpen} leftIcon={<EditIcon />}>Change Password</Button></PopoverBody>
  </PopoverContent>
  </Portal> 
 
</Popover>
<Modal size ="xl" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Change Password</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
                <Tr>
                <Td>
                  <Text m="2em">Enter old Password</Text>
                </Td>
                <Td>
                    <Input
                      borderRadius="5px"
                      fontSize="sm"
                      type="text"
                      placeholder="Enter Old Password"
                      id="old-pass"
                    />
                </Td>
               </Tr> 
               <Tr>
               <Td>
                  <Text m="2em">Enter new Password</Text>
                </Td>
                <Td>    
                    <Input
                      borderRadius="5px"
                      fontSize="sm"
                      type="text"
                      placeholder="Enter New Password"
                      id="new-pass"
                    />
                </Td> 
                </Tr>
                <Tr>
                <Td>
                  <Text m="2em">Re enter new Password</Text>
                </Td>
                <Td>  
                    <Input
                      borderRadius="5px"
                      fontSize="sm"
                      type="text"
                      placeholder="Re-Enter New Password"
                      id="re-pass"
                    />
                </Td> 
                </Tr>   
                    <Text color="red" id="pass-mis" display="none">
                      Passwords Don't Match
                    </Text>
                    <Text color="red" id="pass-fail" display="none">
                      Incorrect Old Password or Username or Invalid User
                    </Text>
                    <Text color="red" id="server-fail" display="none">
                      Server Error. Try again after some time
                    </Text>
                    <Text color="green" id="pass-success" display="none">
                      Password Changed Successfully
                    </Text>
                    <Button
                      alignSelf="flex-end"
                      marginTop="1rem"
                      marginBottom="1rem"
                      marginLeft="20rem"
                      colorScheme="orange"
                      variant="solid"
                      id="pass-button"
                      onClick={change_pass}
                    >
                      Change Password
                    </Button>
          </ModalBody>
        </ModalContent>
      </Modal>

            <Flex
              direction={{ sm: "column", lg: "row" }}
              w={{ sm: "100%", md: "50%", lg: "auto" }}
            ></Flex>
          </Flex>
        </Box>
      </Box>
      <SimpleGrid columns={{ sm: 1, md: 2, xl: 3 }} gap={5}>
        <Card p="16px" my={{ sm: "24px", xl: "0px" }}>
          <CardHeader p="12px 5px" mb="12px">
            <Text fontSize="lg" color={textColor} fontWeight="bold">
              Roll No.:
            </Text>
          </CardHeader>

          <CardBody px="5px">
            <Flex align="center" mb="18px">
              <Text fontSize="md" color="gray.500" fontWeight="400">
                {roll_no}
              </Text>
            </Flex>
          </CardBody>
        </Card>
        <Card p="16px" my={{ sm: "24px", xl: "0px" }}>
          <CardHeader p="12px 5px" mb="12px">
            <Text fontSize="lg" color={textColor} fontWeight="bold">
              Registration Number:
            </Text>
          </CardHeader>

          <CardBody px="5px">
            <Flex align="center" mb="18px">
              <Text fontSize="md" color="gray.500" fontWeight="400">
                {reg_no}
              </Text>
            </Flex>
          </CardBody>
        </Card>
        <Card p="16px" my={{ sm: "24px", xl: "0px" }}>
          <CardHeader p="12px 5px" mb="12px">
            <Text fontSize="lg" color={textColor} fontWeight="bold">
              Department:
            </Text>
          </CardHeader>

          <CardBody px="5px">
            <Flex align="center" mb="18px">
              <Text fontSize="md" color="gray.500" fontWeight="400">
                {dept}
              </Text>
            </Flex>
          </CardBody>
        </Card>
        <Card p="16px" my={{ sm: "24px", xl: "0px" }}>
          <CardHeader p="12px 5px" mb="12px">
            <Text fontSize="lg" color={textColor} fontWeight="bold">
              Year:
            </Text>
          </CardHeader>

          <CardBody px="5px">
            <Flex align="center" mb="18px">
              <Text fontSize="md" color="gray.500" fontWeight="400">
                II
              </Text>
            </Flex>
          </CardBody>
        </Card>
        <Card p="16px" my={{ sm: "24px", xl: "0px" }}>
          <CardHeader p="12px 5px" mb="12px">
            <Text fontSize="lg" color={textColor} fontWeight="bold">
              Batch:
            </Text>
          </CardHeader>

          <CardBody px="5px">
            <Flex align="center" mb="18px">
              <Text fontSize="md" color="gray.500" fontWeight="400">
                {batch}
              </Text>
            </Flex>
          </CardBody>
        </Card>
        <Card p="16px" my={{ sm: "24px", xl: "0px" }}>
          <CardHeader p="12px 5px" mb="12px">
            <Text fontSize="lg" color={textColor} fontWeight="bold">
              Contact Number:
            </Text>
          </CardHeader>

          <CardBody px="5px">
            <Flex align="center" mb="18px">
              <Text fontSize="md" color="gray.500" fontWeight="400">
                {cell}
              </Text>
            </Flex>
          </CardBody>
        </Card>
      </SimpleGrid>
    </Flex>
  );
}

export default Profile;
