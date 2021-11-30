/** @format */

//Table with 2 columns

import { Flex, Td, Text, Tr, useColorModeValue } from "@chakra-ui/react";
import React from "react";

function TableRow2(props) {
  const { field, data } = props;
  const textColor = useColorModeValue("gray.700", "white");

  return (
    <Tr>
      <Td minWidth={{ sm: "10em", md: "12em" }}>
        <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
          <Flex direction="column">
            <Text
              marginLeft="1em"
              fontSize="md"
              color={textColor}
              fontWeight="bold"
              minWidth="100%"
            >
              {field}
            </Text>
          </Flex>
        </Flex>
      </Td>
      <Td width="1em">
        <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
          <Flex direction="column">
            <Text
              fontSize="md"
              color={textColor}
              fontWeight="light-bold"
              minWidth="100%"
            >
              :
            </Text>
          </Flex>
        </Flex>
      </Td>
      <Td minWidth={{ sm: "20em", md: "16em" }}>
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

export default TableRow2;
