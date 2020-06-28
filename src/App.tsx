import React from "react";
import { Route, Routes } from "react-router-dom";
import VideoDocs from "./VideoDocs";

export default () => (
  <Routes>
    <Route path="/babel/babel/*" element={<VideoDocs />} />
  </Routes>
);
