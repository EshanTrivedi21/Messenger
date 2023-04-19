import React from "react";
import { Box, FlexRow, FlexCol, PFP, Typography, Logout } from "../utilities/exports";

const Navbar = ({username}) => {
  return (
    <Box className="!w-full !h-[8vh] !bg-[#202020] px-4 flex justify-center">
      <FlexRow className="!justify-start gap-3">
        <PFP />
        <FlexCol className="!items-start">
          <Typography variant="nav-title" content={username} />
          <Typography
            variant="nav-subtitle"
            content="Have a great day dear messenger user"
          />
        </FlexCol>
        <Logout />
      </FlexRow>
    </Box>
  );
};

export default Navbar;
