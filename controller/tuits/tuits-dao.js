import TuitsModel from "./tuits-model.js";
export const findAllTuits = () => TuitsModel.find().populate("topic", "username").exec();
export const createTuit = (tuit) => TuitsModel.create(tuit);
export const deleteTuit = (tid) => TuitsModel.deleteOne({ _id: tid });
export const updateTuit = (tid, tuit) => TuitsModel.updateOne({ _id: tid }, { $set: tuit });
export const findTuits =() => TuitsModel.find();