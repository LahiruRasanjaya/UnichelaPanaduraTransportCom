// import React, { useState } from "react";
// // Import Firebase configuration
// import { db, addDoc, collection } from "./firebaseConfig"; 

// const ComplaintForm = () => {
//   const [vehicle, setVehicle] = useState("");
//   const [route, setRoute] = useState("");
//   const [complaint, setComplaint] = useState("");
//   const [success, setSuccess] = useState(false);

//   const getFormattedDate = () => {
//     return new Date().toISOString().split('T')[0]; // Format: YYYY-MM-DD
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!vehicle || !route || !complaint) return;

//     const formattedDate = getFormattedDate(new Date());
//     console.log(formattedDate);

//     try {
//       // Adding complaint data to Firestore
//       await addDoc(collection(db, "complaints"), {
//         complaint,
//         date: formattedDate,
//         route,
//         vehicle,
//       });
      
//       // Set success message to true
//       setSuccess(true);

//       // After 20 seconds, clear the success message and reset fields
//       setTimeout(() => {
//         setSuccess(false);
//         setVehicle("");  // Clear vehicle input
//         setRoute("");    // Clear route input
//         setComplaint("");  // Clear complaint input
//       }, 1000);  // 20 seconds delay
//     } catch (error) {
//       console.error("Error adding document: ", error);
//     }
//   };

//   return (
//     <div className="container text-center mt-5">
//       <h2>Submit a Complaint</h2>
      
//       {/* Show success message */}
//       {success && <p className="text-success">Complaint submitted successfully!</p>}
      
//       {/* Form for submitting a complaint */}
//       <form onSubmit={handleSubmit}>
//         <input
//           className="form-control mb-2"
//           placeholder="Vehicle Number"
//           value={vehicle}
//           onChange={(e) => setVehicle(e.target.value)}
//           required
//         />
//         <input
//           className="form-control mb-2"
//           placeholder="Route"
//           value={route}
//           onChange={(e) => setRoute(e.target.value)}
//           required
//         />
//         <textarea
//           className="form-control mb-2"
//           placeholder="Complaint"
//           value={complaint}
//           onChange={(e) => setComplaint(e.target.value)}
//           required
//         ></textarea>
//         <button className="btn btn-primary" type="submit" disabled={!vehicle || !route || !complaint}>
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default ComplaintForm;

import React, { useState } from "react";
import { db, addDoc, collection } from "./firebaseConfig";
import "./ComplaintForm.css"; // Import styles

const ComplaintForm = () => {
  const [vehicle, setVehicle] = useState("");
  const [route, setRoute] = useState("");
  const [complaint, setComplaint] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [success, setSuccess] = useState(false);

  const getFormattedDate = () => {
    return new Date().toISOString().split("T")[0];
  };

  const handleSubmit = async () => {
    setShowModal(false);
    setLoading(true);
    let progressCount = 0;

    const progressInterval = setInterval(() => {
      progressCount += 10;
      setProgress(progressCount);
      if (progressCount >= 100) {
        clearInterval(progressInterval);
        submitComplaint();
      }
    }, 300);
  };

  const submitComplaint = async () => {
    const formattedDate = getFormattedDate();
    try {
      await addDoc(collection(db, "complaints"), {
        complaint,
        date: formattedDate,
        route,
        vehicle,
      });

      setSuccess(true);
      setLoading(false);
      setProgress(0);

      setTimeout(() => {
        setSuccess(false);
        setVehicle("");
        setRoute("");
        setComplaint("");
      }, 300);
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <div>
      {/* Background content with blur effect */}
      <div className={`content ${showModal || loading || success ? "blur-background" : ""}`}>
        <div className="container text-center mt-5">
          <h2>Submit a Complaint</h2>

          <form onSubmit={(e) => {
            e.preventDefault();
            setShowModal(true);
          }}>
            <input className="form-control mb-2" placeholder="Vehicle Number" value={vehicle} onChange={(e) => setVehicle(e.target.value)} required />
            <input className="form-control mb-2" placeholder="Route" value={route} onChange={(e) => setRoute(e.target.value)} required />
            <textarea className="form-control mb-2" placeholder="Complaint" value={complaint} onChange={(e) => setComplaint(e.target.value)} required></textarea>
            <button className="btn btn-primary" type="submit">Submit</button>
          </form>
        </div>
      </div>

      {/* Popup Modal - Outside Blur Wrapper */}
      {(showModal || loading || success) && (
        <div className="modal-overlay">
          <div className="modal-content">
            {showModal && (
              <>
                <h4>Confirm Submission</h4>
                <p>Are you sure you want to submit this complaint?</p>
                <button className="btn btn-success me-2" onClick={handleSubmit}>Confirm</button>
                <button className="btn btn-danger" onClick={() => setShowModal(false)}>Cancel</button>
              </>
            )}

            {loading && (
              <>
                <h4>Submitting...</h4>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: `${progress}%` }}></div>
                </div>
              </>
            )}

            {success && <h4>Complaint submitted successfully!</h4>}
          </div>
        </div>
      )}
    </div>
  );
};

export default ComplaintForm;
