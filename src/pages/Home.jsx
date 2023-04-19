import React from "react";
import { Sidebar, Chat } from "../components/exports";
import { Container, Box, FlexRow } from "../utilities/exports";

const Home = () => {
  return (
    <Container>
      <Box className="w-screen h-screen">
        <FlexRow className="!justify-start">
          <Sidebar />
          <Chat />
        </FlexRow>
      </Box>
    </Container>
  );
};

export default Home;
