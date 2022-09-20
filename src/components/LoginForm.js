import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Select,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";
const formData = [
  {
    name: "Email",
    placeHolder: "Email",
    type: "email",
  },
  {
    name: "Address",
    placeHolder: "Address",
    type: "text",
  },
  {
    name: "Name",
    placeHolder: "Name",
    type: "text",
  },
  {
    name: "First name",
    placeHolder: "First name",
    type: "text",
  },
  {
    name: "Address",
    placeHolder: "Address",
    type: "text",
  },
  {
    name: "City",
    placeHolder: "City",
    type: "text",
  },
  {
    name: "Last name",
    placeHolder: "Last name",
    type: "text",
  },
  {
    name: "Country",
    placeHolder: "Country",
    type: "text",
    hasChild: [{ name: "Poland" }, { name: "India" }, { name: "Britain" }],
  },
];
const SignUpForm = () => {
  return (
    <Box>
      <Flex alignItems="center" flexDir="column">
        <FormControl>
          <Text p="30px 0 20px 0">Shipping information</Text>
          <SimpleGrid
            columns={{ md: "2", base: "1" }}
            spacing={5}
            width="90%"
            alignItems="flex-start"
          >
            {formData.map((data, index) => {
              return data.hasChild ? (
                <Select
                  m={2}
                  placeholder={data.name}
                  rounded="full"
                  minW="180px"
                >
                  {formData[index].hasChild.map((option, index) => {
                    console.log(option.name);
                    return <option key={index}>{option.name}</option>;
                  })}
                </Select>
              ) : (
                <Input
                  m={2}
                  rounded="full"
                  minW="180px"
                  border="1px solid black"
                  placeholder={data.name}
                />
              );
            })}
          </SimpleGrid>
        </FormControl>
      </Flex>
      <Flex alignItems="center" pt={20} pl={2}>
        <BsArrowLeft />
        <Link pl={2} to="/">
          Back
        </Link>
      </Flex>
    </Box>
  );
};
const LoginForm = () => {
  return (
    <>
      <Text as="h5" mb="20px">
        Payment method
      </Text>
      <ButtonGroup pt={10}>
        <Button rounded="full">Log In</Button>
        <Button rounded="full">Sign Up</Button>
      </ButtonGroup>
      <SignUpForm />
    </>
  );
};

export default LoginForm;
