import React from "react";
import { FaPlus, FaEllipsisVertical } from "react-icons/fa6";
import { useNavigate, useParams } from "react-router-dom";

function AssignmentButton({handleAddAssignment}) {
  const { courseId } = useParams();
  const navigate = useNavigate();

  const initialState = {
    title: "New Assignment",
    description: "New Assignment Description",
    points: 0,
    due: "",
    available: "",
    until: "",
  };

  return (
    <div>
      <div className="row">
        <div className="col-4 w-25">
          <input
            id="text-fields-search-Assignment"
            className="form-control"
            placeholder="Search to Assignments"
          />
        </div>
        <div className="col ">
          <button
            type="button"
            className="btn btn-light float-end border border-secondary-subtle"
          >
            <FaEllipsisVertical />
          </button>
          <button  onClick={handleAddAssignment} type="button" className="btn btn-danger me-1 float-end">
            <FaPlus className="me-1 mb-1" />
            Assignment
          </button>
          <button
            type="button"
            className="btn btn-light me-1 float-end border border-secondary-subtle"
          >
            <FaPlus className="me-1 mb-1" />
            Group
          </button>
        </div>
      </div>
    </div>
  );
}

export default AssignmentButton;
