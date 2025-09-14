import React from "react";
import { Route, Routes } from "react-router-dom";
import Task1 from "./pages/Task1";
import ServiceList from "./pages/Task2";
import FAQList from "./pages/Task3";
import LandingPage from "./pages/Task4";
import Task5 from "./pages/Task5";
import Task6 from "./pages/Task6";
import TaskApp from "./pages/Task7";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Task1 />} />
        <Route path="/task2" element={<ServiceList />} />
        <Route path="/task3" element={<FAQList />} />
        <Route path="/task4" element={<LandingPage />} />
        <Route path="/task5" element={<Task5 />} />
        <Route path="/task6" element={<Task6 />} />
        <Route
          path="/task7"
          element={<TaskApp />}
        />
      </Routes>
    </div>
  );
};

export default App;
