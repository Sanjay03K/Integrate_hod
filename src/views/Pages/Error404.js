/** @format */

import React from "react";

// Chakra imports
import {
  Flex,
  Text,
  SimpleGrid,
  Card,
  CardHeader,
  CardBody,
  useColorModeValue,
} from "@chakra-ui/react";

function Error404() {
  const textColor = useColorModeValue("gray.400", "white");
  return (
    <SimpleGrid>
      <div>
        <Text
          mt="7em"
          align="center"
          fontSize="5xl"
          color={textColor}
          fontWeight="bold"
        >
          Error 404 !
        </Text>
      </div>
      <div>
        <Text
          m="2"
          align="center"
          fontSize="xl"
          color={textColor}
          fontWeight="bold"
        >
          The portal is under construction, try again later
        </Text>
      </div>
    </SimpleGrid>
  );
}

export default Error404;
