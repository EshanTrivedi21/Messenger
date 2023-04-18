import React from "react";
import {
  Container,
  Box,
  FlexRow,
  AuthBg,
  FlexCol,
  Typography,
  TextInput,
  PrimaryButton,
} from "../utilities/exports";

const Login = () => {
  return (
    <Container>
      <Box className="h-[80vh] w-[70vw]">
        <FlexRow className="justify-between">
          <FlexCol className="!w-[45%] gap-20">
            <FlexCol className="gap-2">
              <Typography variant="auth-title" content="Login" />
              <Typography variant="auth-subtitle" content="Log in to your account"/>
            </FlexCol>
            <FlexCol className="w-[75%] gap-6">
              <TextInput label="Email" />
              <TextInput label="Password" />
            </FlexCol>
            <FlexCol className="gap-2">
              <PrimaryButton label="Log In" />
              <FlexRow className="gap-1">
                <Typography variant="auth-subtitle" content="Don't have an account?"/>
                <Typography variant="auth-link" content="Register" link="/register"/>
              </FlexRow>
            </FlexCol>
          </FlexCol>
          <AuthBg />
        </FlexRow>
      </Box>
    </Container>
  );
};

export default Login;
