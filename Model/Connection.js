import mongoose from "mongoose";

const Connection = async () => {
  await mongoose
    .connect('mongodb+srv://aloshmuhammad:aloshy@cluster0.e4vjgwu.mongodb.net/Task')
    .then(() => {
      console.log("MongoDB CONNECTED...");
    })
    .catch((err) => {
      console.log(err);
    });
};
export default Connection;