import { Box, Heading } from "@chakra-ui/core";
import React from "react";
import { TestComp } from "./components/CalcLazyWrapper";

const App = () => {

  return (
    <div className="container">
      <Heading>Probability calculator</Heading>
      <Box p="4rem" borderRadius="md" boxShadow="3px 3px 5px 6px #ccc">
        <TestComp />
      </Box>
    </div>
  );
};

export default App;
