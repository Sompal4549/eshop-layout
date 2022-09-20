/* Built In Imports */
import React from "react";
/* External Imports */
import { Box, Flex} from "@chakra-ui/react";
import { Link, Outlet } from "react-router-dom";
/* Internal Imports */
/* Components */
import Cart from "./components/Cart";
import LoginForm from "./components/LoginForm";
import PaymentMethod from "./components/PaymentMethod";
import IconGroup from "./components/IconGroup";
import Logo from "./components/Logo";
/* Styles */
/***
 * Renders App Component
 * 
 */


const App = () => {
  return (
    <>
      <Box width="100%" maxW="1200px" m="0 auto" pt="120px">
        <Box
          zIndex={10000}
          pos="fixed"
          top={0}
          right={0}
          left={0}
          h="100px"
          maxW="1200px"
          m="0 auto"
        >
          <Flex
            alignItems="center"
            flexWrap="wrap"
            p="20px 20px"
            boxShadow="0px 3px 15px -3px rgba(0,0,0,1);
-moz-box-shadow: 0px 3px 15px -3px rgba(0,0,0,1);
box-shadow: 0px 3px 15px -3px rgba(0,0,0,1)"
          >
            <Logo />
            <Flex as="nav" gap={10}>
              <Link to="/invoices">Men</Link>
              <Link to="/expenses">Women</Link>
              <Link to="/kids">Kids</Link>
            </Flex>
            <IconGroup />
          </Flex>
        </Box>
        <Flex flexWrap="wrap" width="100%" height="100%">
          <Box pt={7} flex="1">
            <LoginForm />
          </Box>
          <Flex flex={1}>
            <PaymentMethod />
            <Cart />
          </Flex>
        </Flex>

        <Outlet />
      </Box>
    </>
  );
};

export default App;
