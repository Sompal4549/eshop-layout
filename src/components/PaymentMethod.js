import {
    Box,
    Button,
    ButtonGroup,
    Heading,
    SimpleGrid,
    Text,
  } from "@chakra-ui/react";
  import { FaFedex, FaDhl } from "react-icons/fa";
  import React from "react";
  import { BsPaypal } from "react-icons/bs";
  const paymentOptions = [
    {
      name: "PayPal",
      key: "PayPal",
      icon: <BsPaypal />,
    },
    {
      name: "PayPal",
      key: "PayPal",
      icon: <BsPaypal />,
    },
    {
      name: "PayPal",
      key: "PayPal",
      icon: <BsPaypal />,
    },
    {
      name: "PayPal",
      key: "PayPal",
      icon: <BsPaypal />,
    },
    {
      name: "PayPal",
      key: "PayPal",
      icon: <BsPaypal />,
    },
    {
      name: "PayPal",
      key: "PayPal",
      icon: <BsPaypal />,
    },
  ];
  const deliveryOption = [
    {
      name: "inpost",
      icons: <FaDhl />,
      price: "$20.00",
    },
    {
      name: "dbd",
      icons: <FaDhl />,
      price: "$12.00",
    },
    {
      name: "DHL",
      icons: <FaDhl />,
      price: "$15.00",
    },
    {
      name: "FedEx",
      icons: <FaFedex />,
      price: "$10.00",
    },
  ];
  const PaymentMethod = () => {
    return (
      <Box p="10px">
        <Text as="h5" mb="20px">
          Payment method
        </Text>
        <ButtonGroup>
          <SimpleGrid columns={3} spacing="10px">
            {paymentOptions.map((pType, index) => {
              return (
                <Button rounded="full" leftIcon={pType.icon}>
                  {pType.name}
                </Button>
              );
            })}
          </SimpleGrid>
        </ButtonGroup>
        <Text as="h5" pt={10} mb="20px">
          Delivery method
        </Text>
        <ButtonGroup>
          <SimpleGrid columns={2} spacing="10px">
            {deliveryOption.map((dOption, index) => {
              return (
                <Button
                  minW="140px"
                  rounded="full"
                  key={index}
                  leftIcon={dOption.icons}
                >
                  {dOption.price}
                </Button>
              );
            })}
          </SimpleGrid>
        </ButtonGroup>
      </Box>
    );
  };
  
  export default PaymentMethod;
  