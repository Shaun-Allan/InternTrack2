import React from "react";

const Coordinator = () => {
  return (
    <>
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

      <div class="edit-container">
        <div class="edit-inner-container">
          <div class="edit-header">
            <button class="close-btn" style="position: relative">
              <i class="fa fa-close"></i>
            </button>
            <h1>Edit Intern Details</h1>
          </div>
          <form
            id="intern-form"
            method="post"
            action="https://script.google.com/macros/s/AKfycbyEjIJXIBxSF-DZ1fZde4Y2Wj7YFmPRqW3vXyM-KH1GwsABqejY-32Zvnth3u8KVXpo/exec"
          >
            <div class="intern-field profile-field">
              <label for="start-date">Start Date</label>
              <input
                type="date"
                id="start-date"
                name="Start Date"
                placeholder="Eg. 06-05-2005"
              />
            </div>
            <div class="intern-field profile-field">
              <label for="end-date">End Date</label>
              <input
                type="date"
                id="end-date"
                name="End Date"
                placeholder="Eg. 06-05-2005"
              />
            </div>
            <div class="intern-field profile-field">
              <label for="company">Intern Company</label>
              <input
                type="text"
                id="company"
                placeholder="Eg. Natwest"
                name="Internship Company"
              />
            </div>
            <div class="intern-field profile-field no-field">
              <label for="verification">Intern verification</label>
              <select name="Placement Method" id="placement-method">
                <option value="Verified">Verified</option>
                <option value="Not Verified">Not Verified</option>
              </select>
            </div>
            <div class="intern-field profile-field">
              <label for="stipend">Stipend(in Rs. ) per month</label>
              <input
                type="number"
                id="stipend"
                placeholder="Eg. 45000"
                name="Stipend(in Rs. ) per month"
              />
            </div>
            <div class="intern-field profile-field">
              <label for="placement-method">Placement through</label>
              <select name="Placement Method" id="placement-method">
                <option value="CDC">CDC</option>
                <option value="Off Campus">Off Campus</option>
              </select>
            </div>
            <div class="intern-field profile-field">
              <label for="intern-type">Intern Type</label>
              <select name="Intern Type" id="intern-type">
                <option value="Research">Research</option>
                <option value="Industry">Industry</option>
              </select>
            </div>
            <div class="intern-field profile-field">
              <label for="intern-location">Intern Location</label>
              <select name="Intern Location" id="intern-location">
                <option value="India">India</option>
                <option value="Abroad">Abroad</option>
              </select>
            </div>
            <button type="reset">Clear Form</button>
            <button type="submit">Submit</button>
          </form>
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

export default Coordinator;
