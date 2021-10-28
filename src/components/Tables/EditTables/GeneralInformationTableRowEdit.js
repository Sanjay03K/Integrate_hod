import {
  Avatar,
  Badge,
  Button,
  Flex,
  FormControl,
  Input,
  Td,
  Text,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

function GeneralParticularsTableRowEdit(props) {
  const { field, data } = props;
  const textColor = useColorModeValue("gray.700", "white");
  const bgStatus = useColorModeValue("gray.400", "#1a202c");
  const colorStatus = useColorModeValue("white", "gray.400");

  return (
    <Tr>
      <Td minWidth={{ sm: "17rem" }}>
        <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
          <Flex direction="column">
            <Text
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
      <Td minWidth={{ sm: "17rem" }}>
        <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
          <Flex direction="column">
            <FormControl>
              <Input
                borderRadius="5px"
                fontSize="sm"
                type="text"
                placeholder={field}
              />
            </FormControl>
          </Flex>
        </Flex>
      </Td>
    </Tr>
  );
}

export default GeneralParticularsTableRowEdit;
