import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    rollNo:{
        type:Number,
        unique:true,
        required:true
    },
    name: {
        type: String,
        required: true
    },
    fatherName: {
        type: String,
        required: true,
    },
    className:{
        type:String,
        required:true
    },
    section: {
        type: String,
        required: true
    },
})

const Student = mongoose.model('Student',studentSchema);

export default Student