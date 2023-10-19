import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import { FaGripVertical, FaClipboardList, FaCheckCircle } from "react-icons/fa";
import { FaEllipsisVertical, FaSortDown, FaPlus } from "react-icons/fa6";
import AssignmentButton from "./AssignmentButton.js";

function Assignments() {
  const { courseId } = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId
  );

  const [toggle, setToggle] = useState(true);

  const handleClick = () => {
    setToggle(!toggle);
  };

  return (
    <div className="col-10">
      <AssignmentButton />
      <div className="list-group my-3">
        <div
          className="list-group-item list-group-item-secondary d-flex align-items-center justify-content-between fw-bold"
          onClick={handleClick}
        >
          <div className="d-flex align-items-center">
            <FaGripVertical className="me-2" />
            <FaSortDown className="mb-2 me-2" />
            Assignments
          </div>
          <div className="d-flex align-items-center justify-content-end">
            <input
              id="text-fields-search"
              className="form-control form-control-sm w-50 me-2 rounded rounded-pill text-center bg-light"
              placeholder="40% of total"
              readOnly
            />
            <FaPlus className="me-4 mx-2" />
            <FaEllipsisVertical />
          </div>
        </div>
        {toggle &&
          courseAssignments.map((assignment) => (
            <div
              className="list-group-item d-flex align-items-center"
              style={{ borderLeft: "5px solid green" }}
              key={assignment._id}
            >
              <FaGripVertical className="me-3" />
              <FaClipboardList
                className="me-3"
                style={{ color: "green", fontSize: "20px" }}
              />
              <div style={{ flex: 1 }} className="ms-2">
                <div className="d-flex justify-content-between align-items-center my-2 ">
                  <Link
                    to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                    className="text-decoration-none text-black fw-bold"
                  >
                    <h6 style={{ margin: "0" }}>{assignment.title}</h6>
                  </Link>
                </div>
                <p style={{ margin: "0", fontSize: "14px", color: "grey" }}>
                  {assignment.description}
                </p>
              </div>
              <FaCheckCircle
                className="text-success me-4"
                style={{ fontSize: "18px" }}
              />
              <FaEllipsisVertical />
            </div>
          ))}
      </div>
    </div>
  );
}

export default Assignments;
