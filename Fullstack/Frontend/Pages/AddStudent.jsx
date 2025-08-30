import { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AddStudent() {
  const [formData, setFormData] = useState({
    rollNo: "",
    name: "",
    fatherName: "",
    className: "",
    section: "",
  });

  const [loading, setLoading] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Add labels to data (key-value pairs with labels)
    const payload = {
      rollNo: formData.rollNo,
      name: formData.name,
      fatherName: formData.fatherName,
      className: formData.className,
      section: formData.section,
    };

    try {
      const res = await axios.post("http://localhost:3000/add-student", payload);

      if (res.status === 201 || res.status === 200) {
        toast.success("✅ Student added successfully!");
        setFormData({
          rollNo: "",
          name: "",
          fatherName: "",
          className: "",
          section: "",
        });
      } else {
        toast.error("❌ Failed to add student.");
      }
    } catch (err) {
      console.error(err);
      if (err.response?.data?.message) {
        toast.warning(`⚠️ ${err.response.data.message}`);
      } else {
        toast.error("⚠️ Error connecting to server.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 flex items-center justify-center">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Add New Student
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Roll No */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Roll No
            </label>
            <input
              type="number"
              name="rollNo"
              value={formData.rollNo}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Father Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Father Name
            </label>
            <input
              type="text"
              name="fatherName"
              value={formData.fatherName}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Class */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Class
            </label>
            <input
              type="text"
              name="className"
              value={formData.className}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Section */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Section
            </label>
            <input
              type="text"
              name="section"
              value={formData.section}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition disabled:opacity-50"
          >
            {loading ? "Adding..." : "Add Student"}
          </button>
        </form>
      </div>

      {/* Toast container to show notifications */}
      <ToastContainer position="top-center" autoClose={3000} />
    </div>
  );
}
