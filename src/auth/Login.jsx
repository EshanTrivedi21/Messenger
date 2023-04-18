import React from "react";
import { Container, Box, FlexRow, AuthBg, FlexCol, Typography } from "../utilities/exports";

const Login = () => {
  return (
    <Container>
      <Box className="h-[80vh] w-[70vw]">
        <FlexRow className="justify-between">
          <FlexCol className="w-[45%]">
            <Typography variant="auth-title"> Login </Typography>
          </FlexCol>
          <AuthBg />
        </FlexRow>
      </Box>
    </Container>
  );
};

export default Login;
