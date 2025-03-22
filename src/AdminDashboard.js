// import React, { useState, useEffect } from "react";
// import { getDocs, collection } from "firebase/firestore";
// import { db } from "./firebaseConfig"; // Import Firebase configuration

// const AdminDashboard = () => {
//   const [complaints, setComplaints] = useState([]);
//   const [search, setSearch] = useState("");
//   const [selectedComplaint, setSelectedComplaint] = useState(null);

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
//               <td>
//                 <button className="btn btn-link" onClick={() => setSelectedComplaint(c)}>
//                   Show Complaint
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       {selectedComplaint && (
//         <div className="modal show d-block">
//           <div className="modal-dialog">
//             <div className="modal-content">
//               <div className="modal-header">
//                 <h5 className="modal-title">{selectedComplaint.vehicle} - Complaint Details</h5>
//                 <button className="btn-close" onClick={() => setSelectedComplaint(null)}></button>
//               </div>
//               <div className="modal-body">
//                 <p>
//                   <strong>Complaint Date:</strong> {selectedComplaint.date}
//                 </p>
//                 <p>{selectedComplaint.complaint}</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AdminDashboard;

// import React, { useState, useEffect } from "react";
// import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
// import { db } from "./firebaseConfig"; // Import Firebase configuration
// import "./AdminDashboard.css"; // Import CSS for styling

// const AdminDashboard = () => {
//   const [complaints, setComplaints] = useState([]);
//   const [search, setSearch] = useState("");
//   const [selectedComplaint, setSelectedComplaint] = useState(null);
//   const [response, setResponse] = useState("");

//   useEffect(() => {
//     const fetchComplaints = async () => {
//       const querySnapshot = await getDocs(collection(db, "complaints"));
//       setComplaints(querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
//     };
//     fetchComplaints();
//   }, []);

//   const handleDelete = async (id) => {
//     await deleteDoc(doc(db, "complaints", id));
//     setComplaints(complaints.filter((complaint) => complaint.id !== id));
//   };

//   const filteredComplaints = complaints.filter((complaint) =>
//     complaint.vehicle.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div className="container mt-5">
//       {selectedComplaint && <div className="blur-background"></div>}
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
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredComplaints.map((c) => (
//             <tr key={c.id}>
//               <td>{c.date}</td>
//               <td>{c.vehicle}</td>
//               <td>{c.route}</td>
//               <td>
//                 <button className="btn btn-link" onClick={() => setSelectedComplaint(c)}>
//                   Show Complaint
//                 </button>
//               </td>
//               <td>
//                 <button className="btn btn-danger btn-sm" onClick={() => handleDelete(c.id)}>
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {selectedComplaint && (
//         <div className="modal-overlay">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h5 className="modal-title">{selectedComplaint.vehicle} - Complaint Details</h5>
//               <button className="btn-close btn-close-red" onClick={() => setSelectedComplaint(null)}></button>
//             </div>
//             <div className="modal-body">
//               <p><strong>Complaint Date:</strong> {selectedComplaint.date}</p>
//               <p>{selectedComplaint.complaint}</p>
//               <input 
//                 className="form-control mb-2" 
//                 placeholder="Write a response..." 
//                 value={response} 
//                 onChange={(e) => setResponse(e.target.value)} 
//               />
//               <button className="btn btn-primary">Submit Response</button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AdminDashboard;



// import React, { useState, useEffect } from "react";
// import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
// import { db } from "./firebaseConfig"; // Import Firebase configuration
// import "./AdminDashboard.css"; // Import CSS for styling

// const AdminDashboard = () => {
//   const [complaints, setComplaints] = useState([]);
//   const [search, setSearch] = useState("");
//   const [selectedComplaint, setSelectedComplaint] = useState(null);
//   const [response, setResponse] = useState("");

//   useEffect(() => {
//     const fetchComplaints = async () => {
//       const querySnapshot = await getDocs(collection(db, "complaints"));
//       setComplaints(querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
//     };
//     fetchComplaints();
//   }, []);

//   const handleDelete = async (id) => {
//     await deleteDoc(doc(db, "complaints", id));
//     setComplaints(complaints.filter((complaint) => complaint.id !== id));
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
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {complaints
//             .filter((complaint) => complaint.vehicle.includes(search))
//             .map((c) => (
//               <tr key={c.id}>
//                 <td>{c.date}</td>
//                 <td>{c.vehicle}</td>
//                 <td>{c.route}</td>
//                 <td>
//                   <button className="btn btn-link" onClick={() => setSelectedComplaint(c)}>
//                     Show Complaint
//                   </button>
//                 </td>
//                 <td>
//                   <button className="btn btn-danger btn-sm" onClick={() => handleDelete(c.id)}>
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//         </tbody>
//       </table>

//       {/* Background Blur Effect */}
//       {selectedComplaint && <div className="blur-background"></div>}

//       {/* Complaint Modal */}
//       {selectedComplaint && (
//         <div className="modal-overlay">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h5 className="modal-title">{selectedComplaint.vehicle} - Complaint Details</h5>
//               <button className="btn-close btn-close-red" onClick={() => setSelectedComplaint(null)}>
//                 ✖
//               </button>
//             </div>
//             <div className="modal-body">
//               <p><strong>Complaint Date:</strong> {selectedComplaint.date}</p>
//               <p>{selectedComplaint.complaint}</p>
//               <input 
//                 className="form-control mb-2" 
//                 placeholder="Write a response..." 
//                 value={response} 
//                 onChange={(e) => setResponse(e.target.value)} 
//               />
//               <button className="btn btn-primary">Submit Response</button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AdminDashboard;

// import React, { useState, useEffect } from "react";
// import { getDocs, collection } from "firebase/firestore";
// import { db } from "./firebaseConfig";
// import "./AdminDashboard.css"; // Import CSS file

// const AdminDashboard = () => {
//   const [complaints, setComplaints] = useState([]);
//   const [search, setSearch] = useState("");
//   const [selectedComplaint, setSelectedComplaint] = useState(null);

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
//               <td>
//                 <button className="btn btn-link" onClick={() => setSelectedComplaint(c)}>
//                   Show Complaint
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {selectedComplaint && (
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
    complaint.vehicle.includes(search)
  );

  const handleDelete = async (id) => {
    setIsDeleting(true);
    await deleteDoc(doc(db, "complaints", id));
    setComplaints(complaints.filter((complaint) => complaint.id !== id));
    setIsDeleting(false);
    setDeletingComplaint(null);  // Reset deleting complaint state after deletion
  };

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
              <td className="d-flex justify-content-between align-items-center">
  <button
    className="btn btn-link"
    onClick={() => setSelectedComplaint(c)}
  >
    Show Complaint
  </button>
  <button
    className="btn btn-danger ml-auto"
    onClick={() => setDeletingComplaint(c)} // Only set deleting complaint
  >
    Delete Complaint
  </button>
</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal for viewing complaint details */}
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

      {/* Modal for delete confirmation */}
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
              <p>Have you taken required actions?</p>
              <button
                className="btn btn-success"
                onClick={() => handleDelete(selectDeletingComplaint.id)}
              >
                Yes, Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Loading Modal during deletion */}
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
