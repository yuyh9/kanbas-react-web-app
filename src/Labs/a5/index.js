import EncodingParametersInURLs from "./EncodingParametersInURLs";
import WorkingWithArrays from "./WorkingWithArrays";
import WorkingWithObjects from "./WorkingWithObjects";
const REACT_API =  process.env.REACT_APP_API_BASE || "http://localhost:4000/api";

function Assignment5() {
  return (
    <div>
      <h1>Assignment 5</h1>
      <div className="list-group">
        <a href={`${REACT_API}/a5/welcome`}
           className="list-group-item">
          Welcome
        </a>
      </div>
      {/* <SimpleAPIExamples /> */}
      <WorkingWithArrays />
      <WorkingWithObjects />
      <EncodingParametersInURLs />
    </div>
  );
}
export default Assignment5;