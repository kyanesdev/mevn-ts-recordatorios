import { connect } from "mongoose";

export const startConnection = async () => {
  try {
    const db = await connect(
      `mongodb+srv://kyanesdev_user:${process.env.PASS}@cluster0.elwqd.mongodb.net/mevnTS-TaskApp?retryWrites=true&w=majority`
    );
    console.log("Database: " + db.connection.name + " connected");
  } catch (error) {
    console.log(error);
  }
};
