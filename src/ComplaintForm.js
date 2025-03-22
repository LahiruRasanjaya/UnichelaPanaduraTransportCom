import React, { useState } from "react";
// Import Firebase configuration
import { db, addDoc, collection } from "./firebaseConfig"; 

const ComplaintForm = () => {
  const [vehicle, setVehicle] = useState("");
  const [route, setRoute] = useState("");
  const [complaint, setComplaint] = useState("");
  const [success, setSuccess] = useState(false);

  const getFormattedDate = () => {
    return new Date().toISOString().split('T')[0]; // Format: YYYY-MM-DD
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!vehicle || !route || !complaint) return;

    const formattedDate = getFormattedDate(new Date());
    console.log(formattedDate);

    try {
      // Adding complaint data to Firestore
      await addDoc(collection(db, "complaints"), {
        complaint,
        date: formattedDate,
        route,
        vehicle,
      });
      
      // Set success message to true
      setSuccess(true);

      // After 20 seconds, clear the success message and reset fields
      setTimeout(() => {
        setSuccess(false);
        setVehicle("");  // Clear vehicle input
        setRoute("");    // Clear route input
        setComplaint("");  // Clear complaint input
      }, 1000);  // 20 seconds delay
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <div className="container text-center mt-5">
      <h2>Submit a Complaint</h2>
      
      {/* Show success message */}
      {success && <p className="text-success">Complaint submitted successfully!</p>}
      
      {/* Form for submitting a complaint */}
      <form onSubmit={handleSubmit}>
        <input
          className="form-control mb-2"
          placeholder="Vehicle Number"
          value={vehicle}
          onChange={(e) => setVehicle(e.target.value)}
          required
        />
        <input
          className="form-control mb-2"
          placeholder="Route"
          value={route}
          onChange={(e) => setRoute(e.target.value)}
          required
        />
        <textarea
          className="form-control mb-2"
          placeholder="Complaint"
          value={complaint}
          onChange={(e) => setComplaint(e.target.value)}
          required
        ></textarea>
        <button className="btn btn-primary" type="submit" disabled={!vehicle || !route || !complaint}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default ComplaintForm;
