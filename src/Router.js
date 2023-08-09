import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Detail from "./components/Detail";
import Error from "./components/Error";
import Layout from "./components/Layout";

function Router() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/detail:id" element={<Detail />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default Router;
