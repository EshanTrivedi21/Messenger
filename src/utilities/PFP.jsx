import React from "react";
import { Avatar } from "@mui/material";

const PFP = ({ user, src }) => {
  return (
    <Avatar
      alt={user}
      src={src}
      className="!my-auto"
      sx={{
        width: 35,
        height: 35,
      }}
    />
  );
};

export default PFP;
