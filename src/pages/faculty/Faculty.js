import React from "react";
import "./Faculty.css";

const Faculty = () => {
  return (
    <>
      <div class="profile container">
        <h1 id="profile-title">Profile - Faculty</h1>
        <div id="profile-content">
          <div id="profile-left">
            <img src="../assets/ganesh.jpeg" alt="profile" id="profile-img" />
            <div class="spans">
              <span id="name">GANGSTER GANESH</span>
            </div>
          </div>
          <div id="profile-right">
            <div class="profile-field">
              <span>Faculty ID</span>
              <input type="text" value="218794" id="digital-id" disabled />
            </div>

            <div class="profile-field">
              <span>Gender</span>
              <input type="text" value="Male" id="gender" disabled />
            </div>

            <div class="profile-field">
              <span>E-mail</span>
              <input
                type="email"
                value="gangsterganesh@ssn.edu.in"
                id="email"
                disabled
              />
            </div>

            <div class="profile-field">
              <span>Aadhar No</span>
              <input type="text" value="1234567890" id="aadhar" disabled />
            </div>

            <div class="profile-field">
              <span>Department</span>
              <input
                type="text"
                value="B.E Computer Science & Engineering"
                id="department"
                disabled
              />
            </div>

            <div class="profile-field">
              <span>Joined In</span>
              <input type="text" value="2005" id="joined" disabled />
            </div>
          </div>
        </div>
      </div>

      <div class="container search">
        <div class="search-header">
          <h1 id="profile-title">Track Interns</h1>
          <button id="report">Generate Report</button>
        </div>
        <div id="filters">
          <button id="batch" class="filter">
            Batch
          </button>
          <button id="type" class="filter">
            Intern Type
          </button>
          <button id="period" class="filter">
            Intern Period
          </button>
          <button id="stipend" class="filter">
            Stipend
          </button>
          <button id="through" class="filter">
            Internship Through
          </button>
          <button id="location" class="filter">
            Internship Location
          </button>
        </div>
      </div>

      <div id="batch-container" class="filter-container">
        <div class="inner-content simple-inner-content">
          <button class="close-btn">
            <i class="fa fa-close"></i>
          </button>
          <div id="content" class="simple-content">
            <span>Select batch to filer</span>
            <select name="batch" id="batch">
              <option value="2022-2026">2022 - 2026</option>
              <option value="2021-2025">2021 - 2025</option>
              <option value="2020-2024">2020 - 2024</option>
              <option value="2019-2023">2019 - 2023</option>
            </select>
          </div>
          <button id="apply-batch" class="apply">
            Apply Filter
          </button>
        </div>
      </div>
      <div id="type-container" class="filter-container">
        <div class="inner-content simple-inner-content">
          <button class="close-btn">
            <i class="fa fa-close"></i>
          </button>
          <div id="content" class="simple-content">
            <span>Select Internship Type</span>
            <select name="type" id="type">
              <option value="Research">Research</option>
              <option value="Industry">Industry</option>
            </select>
          </div>
          <button id="apply-type" class="apply">
            Apply Filter
          </button>
        </div>
      </div>
      <div id="period-container" class="filter-container">
        <div class="inner-content range-inner-content">
          <button class="close-btn">
            <i class="fa fa-close"></i>
          </button>
          <span class="title">Select Intern Period</span>
          <div class="range-box">
            <div class="input-box">
              <label for="period-from">From</label>
              <input type="date" name="period-from" id="period-from" />
            </div>
            <div class="input-box">
              <label for="period-to">To</label>
              <input type="date" name="period-to" id="period-to" />
            </div>
          </div>
          <button id="apply-period" class="apply">
            Apply Filter
          </button>
        </div>
      </div>
      <div id="stipend-container" class="filter-container">
        <div class="inner-content range-inner-content">
          <button class="close-btn">
            <i class="fa fa-close"></i>
          </button>
          <span class="title">Select Stipend</span>
          <div class="range-box">
            <div class="input-box">
              <label for="stipend-from">From</label>
              <input
                type="number"
                name="stipend-from"
                id="stipend-from"
                placeholder="Eg. 10000"
              />
            </div>
            <div class="input-box">
              <label for="stipend-to">To</label>
              <input
                type="number"
                name="stipend-to"
                id="stipend-to"
                placeholder="Eg. 50000"
              />
            </div>
          </div>
          <button id="apply-stipend" class="apply">
            Apply Filter
          </button>
        </div>
      </div>
      <div id="through-container" class="filter-container">
        <div class="inner-content simple-inner-content">
          <button class="close-btn">
            <i class="fa fa-close"></i>
          </button>
          <div id="content" class="simple-content">
            <span>Select Placement Through</span>
            <select name="thru" id="thru">
              <option value="CDC">CDC</option>
              <option value="Off Campus">Off Campus</option>
            </select>
          </div>
          <button id="apply-thru" class="apply">
            Apply Filter
          </button>
        </div>
      </div>
      <div id="location-container" class="filter-container">
        <div class="inner-content simple-inner-content">
          <button class="close-btn">
            <i class="fa fa-close"></i>
          </button>
          <div id="content" class="simple-content">
            <span>Select Placement Location</span>
            <select name="location" id="location">
              <option value="India">India</option>
              <option value="Abroad">Abroad</option>
            </select>
          </div>
          <button id="apply-location" class="apply">
            Apply Filter
          </button>
        </div>
      </div>
      <div id="pie-charts">
        <div class="pie-container">
          <canvas class="pie-chart" id="pie-company"></canvas>
        </div>
        <div class="pie-container">
          <canvas class="pie-chart" id="pie-stipend"></canvas>
        </div>
        <div class="pie-container">
          <canvas class="pie-chart" id="pie-type"></canvas>
        </div>
        <div class="pie-container">
          <canvas class="pie-chart" id="pie-thru"></canvas>
        </div>
        <div class="pie-container">
          <canvas class="pie-chart" id="pie-location"></canvas>
        </div>
      </div>

      <div class="table-container container">
        <table id="intern-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Company</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Stipend</th>
              <th>Placed Through</th>
              <th>Type</th>
              <th>Location</th>
              <th>Batch</th>
              <th>Verification Status</th>
            </tr>
          </thead>
          <tbody id="table-body"></tbody>
        </table>
      </div>

      <div class="pagination">
        <button id="prev-btn" disabled>
          Previous
        </button>
        <span id="page-info"></span>
        <button id="next-btn">Next</button>
      </div>
    </>
  );
};

export default Faculty;
