import React from 'react';
import {FaFileImport, FaFileExport, FaGear, FaFilter } from 'react-icons/fa6';

function GradeButton() {
  return (
    <div className="mt-5 col-10">
      <div className="float-end">
        <button type="button" className="btn btn-light border border-secondary-subtle ms-1"><FaFileImport className="me-1" />Import</button>
        <button type="button" className="btn btn-light border border-secondary-subtle ms-1"><FaFileExport className="me-1" />Export</button>
        <button type="button" className="btn btn-light border border-secondary-subtle ms-1"><FaGear /></button>
      </div>
      <div className="container px-0 pt-5">
        <div className="row ">
          <div className="col mb-3">
            <h6><strong>Student Name</strong></h6>
            <select className="form-select">
              <option selected> Search Students</option>
            </select>
          </div>
          <div className="col mb-3">
            <h6><strong>Assignments Name</strong></h6>
            <select className="form-select">
              <option selected>Search Assignments</option>
            </select>
          </div>
        </div>
      </div>
      <button type="button" className="btn btn-light"><FaFilter className="me-2" />Apply Filters</button>
    </div>
  );
}

export default GradeButton;
