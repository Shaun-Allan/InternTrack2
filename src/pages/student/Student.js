import React, { useEffect } from "react";
import "./student.css";

const Student = () => {
  useEffect(() => {
    const uploadBoxes = document.querySelectorAll(".upload-box");

    uploadBoxes.forEach((uploadBox) => {
      const fileInput = uploadBox.querySelector("input[type='file']");
      const uploadText = uploadBox.querySelector(".upload-text");

      uploadBox.addEventListener("click", () => fileInput.click());

      fileInput.addEventListener("change", (event) => {
        if (event.target.files.length > 0) {
          uploadText.textContent = event.target.files[0].name;
          uploadText.classList.add("file-name");
        }
      });

      uploadBox.addEventListener("dragover", (event) => {
        event.preventDefault();
        uploadBox.classList.add("drag-over");
      });

      uploadBox.addEventListener("dragleave", () => {
        uploadBox.classList.remove("drag-over");
      });

      uploadBox.addEventListener("drop", (event) => {
        event.preventDefault();
        uploadBox.classList.remove("drag-over");

        if (event.dataTransfer.files.length > 0) {
          fileInput.files = event.dataTransfer.files;
          uploadText.textContent = event.dataTransfer.files[0].name;
          uploadText.classList.add("file-name");
        }
      });
    });
  }, []);

  return (
    <>
      <div className="profile container">
        <h1 id="profile-title">Profile - Student</h1>
        <div id="profile-content">
          <div id="profile-left">
            <img src="/profile.jpeg" alt="profile" id="profile-img" />
            <div className="spans">
              <span id="name">SHAUN ALLAN H</span>
              <span id="reg">3122 22 5001 127</span>
            </div>
          </div>
          <div id="profile-right">
            {[
              { label: "Batch", value: "2022 - 2026", id: "batch" },
              { label: "Register Number", value: "3122 22 5001 127", id: "register-number" },
              { label: "Name", value: "SHAUN ALLAN H", id: "name" },
              { label: "Email", value: "shaunallan2210716@ssn.edu.in", id: "email" },
              { label: "Mobile Number", value: "9876543210", id: "mobile-number" },
            ].map(({ label, value, id }) => (
              <div className="profile-field" key={id}>
                <span>{label}</span>
                <input type="text" value={value} id={id} disabled />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="intern-tracking container">
        <h1 id="profile-title">Intern Tracking</h1>
        <form id="intern-form" method="post" action="#">
          {[
            { label: "Internship obtained through CDC", id: "internship-cdc", options: ["Yes", "No"] },
            { label: "Internship Abroad", id: "intern-abroad", options: ["Yes", "No"] },
          ].map(({ label, id, options }) => (
            <div className="intern-field profile-field" key={id}>
              <label htmlFor={id}>{label}</label>
              <select name={label} id={id}>
                {options.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>
          ))}

          {[
            { label: "Duration of Internship", type: "text", id: "internship-duration" },
            { label: "Company Name", type: "text", id: "company-name" },
            { label: "Stipend (in Rs.) per month", type: "number", id: "stipend" },
          ].map(({ label, type, id }) => (
            <div className="intern-field profile-field" key={id}>
              <label htmlFor={id}>{label}</label>
              <input type={type} id={id} name={label} placeholder={`Eg. ${label}`} />
            </div>
          ))}

          {[
            { label: "Upload Signed Permission Letter / Offer Letter", id: "intern-doc" },
            { label: "Upload Completion Certificate", id: "completion-cert" },
            { label: "Upload Internship Report", id: "intern-report" },
          ].map(({ label, id }) => (
            <div className="intern-field profile-field doc" key={id}>
              <label htmlFor={id}>{label}</label>
              <div className="upload-box">
                <span className="upload-text">Drag & Drop or Click to Upload</span>
                <input type="file" id={id} name={label} accept=".pdf,.doc,.docx" className="hidden-input" />
              </div>
            </div>
          ))}

          <button type="reset">Clear Form</button>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default Student;