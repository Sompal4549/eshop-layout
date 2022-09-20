/* Built In Imports */
import React from "react";
/* External Imports */
import { Avatar, Box, Button, Flex, Text } from "@chakra-ui/react";
import { BsTruck } from "react-icons/bs";
/* Internal Imports */
/* Components */
/* Styles */
/* Styles */

/**
 * Renders Cart Component
 *
 */

export default function Cart() {
  return (
    <Box p="10px 20px">
      <Text as="h5" mb="20px">
        Your Cart
      </Text>
      <Box w="100%">
        <Flex flexDir="column" w="100%">
          <Box mb="20px" w="100%">
            <Flex alignItems="center" justifyContent="space-between">
              <Avatar
                name="Dan Abrahmov"
                src="https://bit.ly/dan-abramov"
                mr={2}
              />
              <Box mr={2}>
                <Text>T-Shirt Summer</Text>
                <Text>Vibes</Text>

                <Text>#23555411</Text>
              </Box>
              <Text mr={2}>$89.99</Text>
            </Flex>
          </Box>
          <Box mb="20px" w="100%">
            <Flex alignItems="center" justifyContent="space-between">
              <Avatar
                ame="Kent Dodds"
                src="https://bit.ly/kent-c-dodds"
                mr={2}
              />
              <Box mr={2}>
                <Text>Basic Slim</Text>
                <Text>Fit T-Shirt</Text>

                <Text>#23555411</Text>
              </Box>
              <Text mr={2}>$89.99</Text>
            </Flex>
          </Box>
          <Button rounded="full">
            <Flex>
              <Text>Total cost</Text>
              <Text>$159,98</Text>
            </Flex>
          </Button>
          <Text>
            <BsTruck style={{ display: "inline" }} /> You are $30,02 away from
            free shipping
          </Text>
        </Flex>
      </Box>
    </Box>
  );
}
