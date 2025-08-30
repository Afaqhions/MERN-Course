import mongoose from "mongoose";
export const dbConnection = async () => {
    try {
        await mongoose.connect('mongodb+srv://mafaqpak:hack@p-1.k6vu1rr.mongodb.net/schoolDB');
        console.log("database connected");
    } catch (error) {
        console.log("error", error);
    }
}
