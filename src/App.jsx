import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form1 from "./components/Form1/Form1";
import Form2 from "./components/Form2/Form2";
import Preview from "./components/Preview/Preview";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Form1 />} />
          <Route path="/form2" element={<Form2 />} />
          <Route path="/preview" element={<Preview />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
