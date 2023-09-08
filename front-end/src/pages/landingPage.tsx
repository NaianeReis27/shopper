import { UploadComponent } from "../components/UploadComponent";
import { HeaderComponent } from "../components/header";
import { TableComponent } from "../components/Table";
import React from "react";

const LandingPage = () => {
 
  return (
  <>
  <HeaderComponent/>
  <UploadComponent/>
  <TableComponent/>
  </>
  );
};

export default LandingPage;
