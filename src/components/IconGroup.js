import { SearchIcon } from "@chakra-ui/icons";
import { Flex } from "@chakra-ui/react";
import React from "react";
import { BiUser, BiCartAlt } from "react-icons/bi";
const IconGroup = () => {
  return (
    <Flex fontSize={20} flex="1" justifyContent="flex-end" gap={2}>
      <SearchIcon />
      <BiCartAlt />
      <BiUser />
    </Flex>
  );
};

export default IconGroup;
