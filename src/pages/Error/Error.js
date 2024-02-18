import React from "react";
import MainNavigation from "../MainNavigation";
import classes from "./error.module.css";

function Error() {
  return (
    <>
      <MainNavigation />
      <main className={classes.main}>
        <h1>Error occured!</h1>
        <p>Could not find this Page!</p>
      </main>
    </>
  );
}

export default Error;
