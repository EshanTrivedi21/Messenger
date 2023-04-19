import React from 'react';
import { Navbar } from './exports';
import { Box } from '../utilities/exports';

const Sidebar = () => {
  return (
      <Box className="!w-[30%] !h-[100vh] !bg-[#282828]">
        <Navbar username="Eshan Trivedi"/>
      </Box >
  )
}

export default Sidebar