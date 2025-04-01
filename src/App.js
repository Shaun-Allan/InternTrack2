import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Student from "./pages/student/Student";
import Coordinator from "./pages/coordinator/Coordinator";
import Layout from "./components/layout/Layout";
import Login from "./pages/login/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/" element={<Layout />}>
          <Route path="student" element={<Student />} />
          <Route path="coordinator" element={<Coordinator />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
