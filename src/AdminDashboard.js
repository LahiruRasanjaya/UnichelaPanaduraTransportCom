
// import React, { useState, useEffect } from "react";
// import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
// import { db } from "./firebaseConfig";
// import "./AdminDashboard.css"; // Import CSS file

// const AdminDashboard = () => {
//   const [complaints, setComplaints] = useState([]);
//   const [search, setSearch] = useState("");
//   const [selectedComplaint, setSelectedComplaint] = useState(null);
//   const [selectDeletingComplaint, setDeletingComplaint] = useState(null);
//   const [isDeleting, setIsDeleting] = useState(false);

//   useEffect(() => {
//     const fetchComplaints = async () => {
//       const querySnapshot = await getDocs(collection(db, "complaints"));
//       setComplaints(querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
//     };
//     fetchComplaints();
//   }, []);

//   const filteredComplaints = complaints.filter((complaint) =>
//     complaint.vehicle.includes(search)
//   );

//   const handleDelete = async (id) => {
//     setIsDeleting(true);
//     await deleteDoc(doc(db, "complaints", id));
//     setComplaints(complaints.filter((complaint) => complaint.id !== id));
//     setIsDeleting(false);
//     setDeletingComplaint(null);  // Reset deleting complaint state after deletion
//   };

//   return (
//     <div className="container mt-5">
//       <h2>Admin Dashboard</h2>
//       <input
//         className="form-control mb-3"
//         placeholder="Search Vehicle"
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//       />
//       <table className="table table-bordered">
//         <thead>
//           <tr>
//             <th>Date</th>
//             <th>Vehicle</th>
//             <th>Route</th>
//             <th>Complaint</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredComplaints.map((c) => (
//             <tr key={c.id}>
//               <td>{c.date}</td>
//               <td>{c.vehicle}</td>
//               <td>{c.route}</td>
//               <td className="d-flex justify-content-between align-items-center">
//   <button
//     className="btn btn-link"
//     onClick={() => setSelectedComplaint(c)}
//   >
//     Show Complaint
//   </button>
//   <button
//     className="btn btn-danger ml-auto"
//     onClick={() => setDeletingComplaint(c)} // Only set deleting complaint
//   >
//     Delete Complaint
//   </button>
// </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {/* Modal for viewing complaint details */}
//       {selectedComplaint && !selectDeletingComplaint && (
//         <div className="modal-overlay">
//           <div className="modal-box">
//             <div className="modal-header">
//               <h5 className="modal-title">{selectedComplaint.vehicle} - Complaint Details</h5>
//               <button className="btn-close red-close" onClick={() => setSelectedComplaint(null)}>×</button>
//             </div>
//             <div className="modal-body">
//               <p><strong>Complaint Date:</strong> {selectedComplaint.date}</p>
//               <p>{selectedComplaint.complaint}</p>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Modal for delete confirmation */}
//       {selectDeletingComplaint && !isDeleting && (
//         <div className="modal-overlay">
//           <div className="modal-box">
//             <div className="modal-header">
//               <h5 className="modal-title">Confirm Deletion</h5>
//               <button className="btn-close red-close" onClick={() => setDeletingComplaint(null)}>×</button>
//             </div>
//             <div className="modal-body">
//               <p><strong>Complaint Date:</strong> {selectDeletingComplaint.date}</p>
//               <p>{selectDeletingComplaint.complaint}</p>
//               <p>Have you taken required actions?</p>
//               <button
//                 className="btn btn-success"
//                 onClick={() => handleDelete(selectDeletingComplaint.id)}
//               >
//                 Yes, Delete
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Loading Modal during deletion */}
//       {isDeleting && (
//         <div className="modal-overlay green-overlay">
//           <div className="modal-box">
//             <div className="modal-body">
//               <p>Deleting...</p>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AdminDashboard;

import React, { useState, useEffect } from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { db } from "./firebaseConfig";
import "./AdminDashboard.css"; // Import CSS file

const AdminDashboard = () => {
  const [complaints, setComplaints] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedComplaint, setSelectedComplaint] = useState(null);
  const [selectDeletingComplaint, setDeletingComplaint] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fetchComplaints = async () => {
      const querySnapshot = await getDocs(collection(db, "complaints"));
      setComplaints(querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    };
    fetchComplaints();
  }, []);

  const filteredComplaints = complaints.filter((complaint) =>
    complaint.vehicle.toLowerCase().includes(search.toLowerCase())
  );

  const handleDelete = async (id) => {
    setIsDeleting(true);
    await deleteDoc(doc(db, "complaints", id));
    setComplaints(complaints.filter((complaint) => complaint.id !== id));
    setIsDeleting(false);
    setDeletingComplaint(null);
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">Admin Dashboard</h2>
      <input
        className="form-control mb-3"
        placeholder="Search Vehicle"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="table-responsive">
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
                <td data-label="Date">{c.date}</td>
                <td data-label="Vehicle">{c.vehicle}</td>
                <td data-label="Route">{c.route}</td>
                <td data-label="Complaint">
                  <button className="btn btn-link" onClick={() => setSelectedComplaint(c)}>
                    Show Complaint
                  </button>
                  <button className="btn btn-danger ml-2" onClick={() => setDeletingComplaint(c)}>
                    Delete Complaint
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedComplaint && !selectDeletingComplaint && (
        <div className="modal-overlay">
          <div className="modal-box">
            <div className="modal-header">
              <h5 className="modal-title">{selectedComplaint.vehicle} - Complaint Details</h5>
              <button className="btn-close red-close" onClick={() => setSelectedComplaint(null)}>×</button>
            </div>
            <div className="modal-body">
              <p><strong>Complaint Date:</strong> {selectedComplaint.date}</p>
              <p>{selectedComplaint.complaint}</p>
            </div>
          </div>
        </div>
      )}

      {selectDeletingComplaint && !isDeleting && (
        <div className="modal-overlay">
          <div className="modal-box">
            <div className="modal-header">
              <h5 className="modal-title">Confirm Deletion</h5>
              <button className="btn-close red-close" onClick={() => setDeletingComplaint(null)}>×</button>
            </div>
            <div className="modal-body">
              <p><strong>Complaint Date:</strong> {selectDeletingComplaint.date}</p>
              <p>{selectDeletingComplaint.complaint}</p>
              <p>Have you taken the required actions?</p>
              <button className="btn btn-success" onClick={() => handleDelete(selectDeletingComplaint.id)}>
                Yes, Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {isDeleting && (
        <div className="modal-overlay green-overlay">
          <div className="modal-box">
            <div className="modal-body">
              <p>Deleting...</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
