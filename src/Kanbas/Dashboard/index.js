import db from "../Database";
import { Link } from "react-router-dom";
import { FaEllipsisVertical, FaRegPenToSquare } from "react-icons/fa6";

function Dashboard() {
  const courses = db.courses;
  return (
    <div className="ms-3">
      <h1>Dashboard</h1>
      <hr />
      <h2 className="ms-3">Published Courses ({courses.length})</h2>
      <div className="d-flex flex-row flex-wrap row row-cols-1 row-cols-md-3 g-4 mt-2">
        {courses.map((course, index) => (
          <div
            key={index}
            className="col ms-4 mt-4 mb-4"
            style={{ width: "260px" }}
          >
            <div className="card h-100">
              <div style={{ backgroundColor: "#3eafbb", height: "150px" }}>
                <FaEllipsisVertical className=" text-white float-end mt-4 me-3" />
              </div>
              <div className="card-body">
                <Link to={`/Kanbas/Courses/${course._id}`}>
                  <h5
                    className="card-title text-truncate text-decoration-none d-inline-block text-dark"
                    style={{
                      width: "200px",
                      overflow: "hidden",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {course.name}
                  </h5>
                </Link>
                <p className="card-text">
                  {course.number}
                  <br />
                  <small>
                    {course.startDate.replace(/-/, "")} Semester Full Term
                  </small>
                </p>
                <FaRegPenToSquare
                  className="ms-1"
                  style={{ fontSize: "22px" }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
