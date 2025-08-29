const express = require("express");

const { dbConnection } = require("./lib/dbConnection");

const { default: Student } = require("./Models/students");

const app = express();

app.use(express.json());

// Get all students
app.get("/get-students", async (req, res) => {
  const students = await Student.find();
  res.json(students);
});

// Creating Student
app.post("/add-student", async (req, res) => {
  const { rollNo, name, fatherName, section, className } = req.body;
  if (!rollNo || !name || !fatherName || !section || !className) {
    return res.status(401).json({
      message: "All fields are required",
    });
  }

  const isStudentExist = await Student.findOne({ rollNo });

  if (isStudentExist) {
    return res.status(409).json({
      message: "student already exist",
    });
  }

  const student = new Student({ rollNo, name, fatherName, section, className });
  student.save();
});

// Delete Student
app.delete("/delete-student/:id", async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(401).json({
      message: "Student id is required",
    });
  }

  let isStudentExist = await Student.findById(id);
  if (!isStudentExist) {
    return res.status(404).json({
      message: "Student not found",
    });
  }

  await Student.findByIdAndDelete(id);
  return res.status(200).json({
    message: "Student deleted successfully",
  });
});

// Update Student
app.put("/update-student/:id", async (req, res) => {
    const { id } = req.params;
    const { rollNo, name, fatherName, section, className } = req.body;

    if (!id) {
        return res.status(401).json({
            message: "Student Id is Required"
        });
    }

    let isStudentExist = await Student.findById(id);
    if (!isStudentExist) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    let updatedData = {
        rollNo:rollNo || isStudentExist.rollNo,
        name:name || isStudentExist.name,
        fatherName:fatherName || isStudentExist.fatherName,
        section:section || isStudentExist.section,
        className:className || isStudentExist.className
    };

    let updateStudent = await Student.findByIdAndUpdate(id, updatedData);
    if (!updateStudent) {
        return res.status(500).json({
            message: "Something went wrong while updating student"
        });
    }

    return res.status(200).json({
        message: "Student Updated Successfully"
    });
});


// Db and Server Initialization
app.listen(3000, () => {
  console.log("server is running on port 3000");
  dbConnection();
});
