import React from "react";
import Header from "../Sheared/Header";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
