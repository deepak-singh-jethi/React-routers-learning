import React from "react";
import { Outlet } from "react-router-dom";
import MainNavigation from "./MainNavigation";
import classes from "./Root.module.css";

function Root() {
  return (
    <>
      <MainNavigation></MainNavigation>
      <mian className={classes.content}>
        <Outlet />
      </mian>
    </>
  );
}

export default Root;
