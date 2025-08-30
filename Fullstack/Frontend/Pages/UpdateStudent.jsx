import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UpdateStudent = () => {
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [loading, setLoading] = useState(false);

  // Fetch all students
  const fetchStudents = async () => {
    try {
      const res = await axios.get("http://localhost:3000/get-students");
      setStudents(res.data);
    } catch (err) {
      console.error(err);
      toast.error("⚠️ Failed to fetch students");
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  // Handle input change for form
  const handleChange = (e) => {
    setSelectedStudent({
      ...selectedStudent,
      [e.target.name]: e.target.value,
    });
  };

  // Handle update student
  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await axios.put(
        `http://localhost:3000/update-student/${selectedStudent._id}`,
        selectedStudent
      );
      toast.success("✅ Student updated successfully!");
      setSelectedStudent(null); // close form
      fetchStudents(); // reload updated list
    } catch (err) {
      console.error(err);
      toast.error("❌ Failed to update student");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-2xl p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Update Students
        </h2>

        {/* Students Table */}
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
                      onClick={() => setSelectedStudent(student)}
                      className="bg-yellow-500 text-white px-3 py-1 rounded-lg hover:bg-yellow-600 transition"
                    >
                      Update
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Update Form (only appears if student selected) */}
        {selectedStudent && (
          <div className="mt-8 p-6 bg-gray-100 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold mb-4">Edit Student</h3>
            <form onSubmit={handleUpdate} className="space-y-4">
              <div>
                <label className="block text-gray-700 font-medium">
                  Roll No
                </label>
                <input
                  type="number"
                  name="rollNo"
                  value={selectedStudent.rollNo}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-3 py-2"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium">Name</label>
                <input
                  type="text"
                  name="name"
                  value={selectedStudent.name}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-3 py-2"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium">
                  Father Name
                </label>
                <input
                  type="text"
                  name="fatherName"
                  value={selectedStudent.fatherName}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-3 py-2"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium">Class</label>
                <input
                  type="text"
                  name="className"
                  value={selectedStudent.className}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-3 py-2"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium">
                  Section
                </label>
                <input
                  type="text"
                  name="section"
                  value={selectedStudent.section}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-3 py-2"
                  required
                />
              </div>

              <div className="flex gap-3">
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
                >
                  {loading ? "Updating..." : "Save Changes"}
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedStudent(null)}
                  className="bg-gray-400 text-white px-4 py-2 rounded-lg hover:bg-gray-500 transition"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}
      </div>

      <ToastContainer position="top-center" autoClose={3000} />
    </div>
  );
};

export default UpdateStudent;
