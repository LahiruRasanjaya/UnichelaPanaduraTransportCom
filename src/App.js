// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// Main App
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import ComplaintForm from "./ComplaintForm";
import AdminDashboard from "./AdminDashboard";
import Login from "./Login";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          Home
        </Link>
        <Link className="nav-link" to="/admin">
          Admin
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<ComplaintForm />} />
        <Route path="/admin" element={authenticated ? <AdminDashboard /> : <Login setAuthenticated={setAuthenticated} />} />
      </Routes>
    </Router>
  );
};

export default App;
