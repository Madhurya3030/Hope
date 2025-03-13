import React, { useEffect, useState } from "react";
import axios from "axios";
import "./AdminPage.css";

const AdminPage = () => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const response = await axios.get("http://localhost:4000/reports");
        const filteredReports = response.data.filter(
            (report) => report.location === "Tadepallegudem"
          );
        setReports(filteredReports);
      } catch (error) {
        console.error("Failed to fetch reports:", error);
      }
    };

    fetchReports();
  }, []);

  return (
    <div className="fst">
    <div className="ad">
      <h2>Reports Dashboard</h2>
      <table className="report-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Children</th>
            <th>Are they Studing</th>
            <th>Health Issues</th>
            <th>Address</th>
            <th>Location</th>
            <th>Earnings</th>
            <th>Sufficient Food</th>
            <th>Need Help</th>
            <th>Photo</th>
          </tr>
        </thead>
        <tbody>
  {reports.map((report) => (
    <tr key={report._id}>
      <td>{report.name}</td>
      <td>{report.age}</td>
      <td>{report.children}</td>
      <td>{report.studying}</td>
      <td>{report.healthIssues === "yes" ? report.healthDetails : "No"}</td>
      <td>{report.address}</td>
      <td>{report.location}</td>
      <td>{report.earnings}</td>
      <td>{report.sufficientFood ? "Yes" : "No"}</td>
      <td>{report.needHelp}</td>
      <td>
        {report.photo && (
          <img
            src={`http://localhost:4000/uploads/${report.photo}`}
            alt="Report"
            className="report-photo"
          />
        )}
      </td>
    </tr>
  ))}
</tbody>

      </table>
    </div>
    </div>
  );
};

export default AdminPage;
