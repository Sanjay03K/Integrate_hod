import {
    Avatar,
    Badge,
    Button,
    Flex,
    Td,
    Text,
    Tr,
    useColorModeValue,
  } from "@chakra-ui/react";
  import React from "react";
  
  function HodListGeneral(props) {
    const { field,data } = props;
    const textColor = useColorModeValue("gray.700", "white");
    const bgStatus = useColorModeValue("gray.400", "#1a202c");
    const colorStatus = useColorModeValue("white", "gray.400");
  
    return (
      <Tr>
        <Td minWidth={{ sm: "25em" }}>
        <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
        <Flex direction="column">
        <Text marginLeft="10em" fontSize="md" color={textColor} fontWeight="bold" minWidth="100%">{field}</Text>
        </Flex>
        </Flex>
        </Td>
        <Td minWidth={{ sm: "20em" }}>
          <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
            <Flex direction="column">
              <Text
                fontSize="md"
                color={textColor}
                fontWeight="light-bold"
                minWidth="100%"
              >
                {data}
              </Text>
            </Flex>
          </Flex>
        </Td>
      </Tr>
    );
  }
  
  export default HodListGeneral;
  