import React, { useState, useEffect } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "./firebaseConfig"; // Import Firebase configuration

const AdminDashboard = () => {
  const [complaints, setComplaints] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedComplaint, setSelectedComplaint] = useState(null);

  useEffect(() => {
    const fetchComplaints = async () => {
      const querySnapshot = await getDocs(collection(db, "complaints"));
      setComplaints(querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    };
    fetchComplaints();
  }, []);

  const filteredComplaints = complaints.filter((complaint) =>
    complaint.vehicle.includes(search)
  );

  return (
    <div className="container mt-5">
      <h2>Admin Dashboard</h2>
      <input
        className="form-control mb-3"
        placeholder="Search Vehicle"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Date</th>
            <th>Vehicle</th>
            <th>Route</th>
            <th>Complaint</th>
          </tr>
        </thead>
        <tbody>
          {filteredComplaints.map((c) => (
            <tr key={c.id}>
              <td>{c.date}</td>
              <td>{c.vehicle}</td>
              <td>{c.route}</td>
              <td>
                <button className="btn btn-link" onClick={() => setSelectedComplaint(c)}>
                  Show Complaint
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedComplaint && (
        <div className="modal show d-block">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{selectedComplaint.vehicle} - Complaint Details</h5>
                <button className="btn-close" onClick={() => setSelectedComplaint(null)}></button>
              </div>
              <div className="modal-body">
                <p>
                  <strong>Complaint Date:</strong> {selectedComplaint.date}
                </p>
                <p>{selectedComplaint.complaint}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
