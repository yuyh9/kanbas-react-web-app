import React, { useState } from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import {
  FaGripVertical,
  FaEllipsisVertical,
  FaCaretRight,
  FaCircleCheck,
  FaCaretDown,
  FaPlus,
} from "react-icons/fa6";

function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules;
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(!toggle);
  };

  return (
    <div className="list-group">
      {modules
        .filter((module) => module.course === courseId)
        .map((module, index) => (
          <div
            key={index}
            className="list-group-item list-group-item-secondary align-items-center mb-4"
            onClick={handleClick}
          >
            <div style={{ float: "left" }} className="mt-4">
              <FaGripVertical className="mb-1 mb-5" />
              <FaCaretRight className="mb-1 me-2 mb-5" />
            </div>
            <div style={{ display: "inline-block" }} className="mt-3">
              <h3>{module.name}</h3>
              <p>{module.description}</p>
            </div>
            <div style={{ float: "right" }} className="mt-3">
              <FaCircleCheck className="me-1 text-success" />
              <FaCaretDown className="me-3" />
              <FaPlus className="me-3" />
              <FaEllipsisVertical />
            </div>
            {toggle && module.lessons && (
              <div className="list-group">
                {module.lessons.map((lesson, index) => (
                  <div key={index} className="list-group-item">
                    <h4>{lesson.name}</h4>
                    <p>{lesson.description}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
    </div>
  );
}
export default ModuleList;
