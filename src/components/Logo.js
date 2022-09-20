import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import { Fa500Px } from "react-icons/fa";

const Logo = () => {
  return (
    <Flex alignItems="center" flex={1}>
      <Fa500Px style={{ marginRight: "10px" }} fontSize={20} />
      <Text>
        <Text as="span" style={{ color: "orange" }}>
          E{" "}
        </Text>
        Shop
      </Text>
    </Flex>
  );
};

export default Logo;
