import { useEffect, useState } from "react";
import { Loader2, Users, FileSpreadsheet } from "lucide-react";
import * as XLSX from "xlsx";

export default function Ui() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch students
  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const res = await fetch("http://localhost:3000/get-students");
        const data = await res.json();
        setStudents(data);
      } catch (error) {
        console.error("Error fetching students:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

  // ✅ Export to Excel
  const exportToExcel = () => {
    if (students.length === 0) return alert("No student data to export!");

    const worksheet = XLSX.utils.json_to_sheet(students); // convert JSON → Excel sheet
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Students");

    XLSX.writeFile(workbook, "students_report.xlsx");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Users className="text-indigo-600 w-7 h-7" />
          <h1 className="text-2xl font-bold text-gray-800">Students List</h1>
        </div>

        {/* Excel Button */}
        <button
          onClick={exportToExcel}
          className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
        >
          <FileSpreadsheet className="w-5 h-5" />
          Export Excel
        </button>
      </div>

      {/* Loading */}
      {loading ? (
        <div className="flex justify-center items-center h-40">
          <Loader2 className="animate-spin w-8 h-8 text-indigo-600" />
        </div>
      ) : (
        <div className="overflow-x-auto shadow-lg rounded-2xl bg-white">
          <table className="w-full text-left border-collapse">
            <thead className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
              <tr>
                <th className="px-6 py-3 text-sm font-semibold">Roll No</th>
                <th className="px-6 py-3 text-sm font-semibold">Name</th>
                <th className="px-6 py-3 text-sm font-semibold">Father Name</th>
                <th className="px-6 py-3 text-sm font-semibold">Class</th>
                <th className="px-6 py-3 text-sm font-semibold">Section</th>
              </tr>
            </thead>
            <tbody>
              {students.length > 0 ? (
                students.map((student) => (
                  <tr
                    key={student.rollNo}
                    className="hover:bg-gray-100 transition border-b-1"
                  >
                    <td className="px-6 py-3">{student.rollNo}</td>
                    <td className="px-6 py-3 font-medium text-gray-800">
                      {student.name}
                    </td>
                    <td className="px-6 py-3">{student.fatherName}</td>
                    <td className="px-6 py-3">{student.className}</td>
                    <td className="px-6 py-3">{student.section}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-center py-6 text-gray-500">
                    No students found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
