import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DeleteStudent = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch all students
  const fetchStudents = async () => {
    try {
      setLoading(true);
      const res = await axios.get("http://localhost:3000/get-students"); // ✅ Your GET endpoint
      setStudents(res.data);
    } catch (err) {
      console.error(err);
      toast.error("⚠️ Failed to fetch students");
    } finally {
      setLoading(false);
    }
  };

  // Delete student by ID
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this student?"))
      return;

    try {
      // ✅ Fixed endpoint (singular delete-student)
      await axios.delete(`http://localhost:3000/delete-student/${id}`);
      toast.success("🗑️ Student deleted!");
      setStudents(students.filter((student) => student._id !== id)); // remove from UI instantly
    } catch (err) {
      console.error(err);
      toast.error("⚠️ Failed to delete student");
    }
  };

  // Load students on mount
  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-2xl p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Student List
        </h2>

        {loading ? (
          <p className="text-center text-gray-500">Loading students...</p>
        ) : students.length === 0 ? (
          <p className="text-center text-gray-500">No students found.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-200 rounded-lg">
              <thead className="bg-indigo-600 text-white">
                <tr>
                  <th className="px-4 py-2">Roll No</th>
                  <th className="px-4 py-2">Name</th>
                  <th className="px-4 py-2">Father Name</th>
                  <th className="px-4 py-2">Class</th>
                  <th className="px-4 py-2">Section</th>
                  <th className="px-4 py-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student) => (
                  <tr
                    key={student._id}
                    className="border-b text-center hover:bg-gray-50"
                  >
                    <td className="px-4 py-2">{student.rollNo}</td>
                    <td className="px-4 py-2">{student.name}</td>
                    <td className="px-4 py-2">{student.fatherName}</td>
                    <td className="px-4 py-2">{student.className}</td>
                    <td className="px-4 py-2">{student.section}</td>
                    <td className="px-4 py-2">
                      <button
                        onClick={() => handleDelete(student._id)}
                        className="bg-red-600 text-white px-3 py-1 rounded-lg hover:bg-red-700 transition"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <ToastContainer position="top-center" autoClose={3000} />
    </div>
  );
};

export default DeleteStudent;
