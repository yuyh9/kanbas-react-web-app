import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";
import CourseName from "./CourseName";

function Courses() {
  return (
    <div style={{ position: "relative" }}>
      <CourseName />
      <hr style={{ width: "86vw" }} />
      <div style={{ position: "relative", display: "flex" }}>
        <CourseNavigation />
        <div
          className="overflow-y-scroll position-absolute bottom-0 end-0"
          style={{
            left: "170px",
            top: "10px",
          }}
        >
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route
              path="Assignments/:assignmentId"
              element={<AssignmentEditor />}
            />
            <Route path="Grades" element={<Grades />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Courses;
