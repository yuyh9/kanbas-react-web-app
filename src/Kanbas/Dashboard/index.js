import db from "../Database";
import { Link } from "react-router-dom";

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
              </div>
              <div className="card-body">
                <h5
                  className="card-title text-truncate text-decoration-none d-inline-block"
                  style={{
                    width: "200px",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  {course.name}
                </h5>
                <p className="card-text">
                  {course.number}
                  <br />
                  <small>
                    {course.startDate.substring(0, 4)} Semester Full Term
                  </small>
                </p>

                <Link
                  to={`/Kanbas/Courses/${course._id}`}
                  className="btn btn-primary"
                >
                  View Course
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
