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

const Register = () => {
  return (
    <Container>
      <Box className="h-[80vh] w-[70vw]">
        <FlexRow className="justify-between">
          <FlexCol className="!w-[45%] gap-20">
            <FlexCol className="gap-2">
              <Typography variant="auth-title" content="Register" />
              <Typography variant="auth-subtitle" content="Create your account now"/>
            </FlexCol>
            <FlexCol className="w-[75%] gap-6">
              <TextInput label="Full Name" />
              <TextInput label="Email" />
              <TextInput label="Password" />
            </FlexCol>
            <FlexCol className="gap-2">
              <PrimaryButton label="Register" />
              <FlexRow className="gap-1">
                <Typography variant="auth-subtitle" content="Already have an account?"/>
                <Typography variant="auth-link" content="Login" link="/login"/>
              </FlexRow>
            </FlexCol>
          </FlexCol>
          <AuthBg />
        </FlexRow>
      </Box>
    </Container>
  );
};

export default Register;
