import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../HomeArea/Home/Home";
import React, { FC } from "react";
import styles from "./Router.module.scss";

interface RouterProps {}

const Router: FC<RouterProps> = () => (
  <div className={styles.Router}>
    <Routes>
      <Route path="./Home" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  </div>
);

export default Router;
