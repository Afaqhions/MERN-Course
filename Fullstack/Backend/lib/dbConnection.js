import mongoose from "mongoose";
export const dbConnection = async () => {
    try {
        await mongoose.connect('/schoolDB');
        console.log("database connected");
    } catch (error) {
        console.log("error", error);
    }
}
