import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/about" element={<h1>About Page</h1>} />
        <Route path="/contact" element={<h1>Contact Page</h1>} />
        <Route path="/login" element={<h1>Login Page</h1>} />
        <Route path="/sign-up" element={<h1>Sign UpPage</h1>} />
      </Routes>
    </>
  );
}

export default App;
