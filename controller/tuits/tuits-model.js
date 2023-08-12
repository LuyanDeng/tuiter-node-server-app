import mongoose from "mongoose";
import TuitsSchema from "./tuits-schema.js";
const TuitsModel = mongoose.model("tuits", TuitsSchema);
export default TuitsModel;