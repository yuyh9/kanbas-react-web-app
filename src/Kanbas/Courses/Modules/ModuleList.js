import React, { useState } from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";

function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules;
  const [toggle, setToggle] = useState(true);

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
            className="list-group-item bg-light mb-4"
            onClick={handleClick}
          >
            <h3>{module.name}</h3>
            <p>{module.description}</p>
            {toggle && module.lessons && (
              <div className="list-group">
                {module.lessons.map((lesson, index) => (
                  <div
                    key={index}
                    className="list-group-item"
                    style={{ borderLeft: "5px solid green" }}
                  >
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
