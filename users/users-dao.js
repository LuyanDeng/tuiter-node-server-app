// let users = [];
//import users from "./authuser.js";
import usersModel from "./users-model.js";


export const findAllUsers = () =>
// users;
    usersModel.find();


export const findUserById = (uid) => {
    // const index = users.findIndex((u) => u._id === uid);
    // if (index !== -1) return users[index];
    // return null;
    usersModel.findById(uid);
};


export const findUserByUsername = (username) => {
    // const index = users.findIndex((u) => u.username === username);
    // if (index !== -1) return users[index];
    // return null;
    usersModel.findOne({username});
};


export const findUserByCredentials = (username, password) => {
    // const index = users.findIndex.find((u) => u.username === username && u.password === password);
    //    const index = users.findIndex((u) => u.username === username && u.password === password);
    //     if (index !== -1) return users[index];
    //     return null;
    usersModel.findOne({username, password})
   
};


export const createUser = (user) => 
       //users.push(user);
       usersModel.create(user);


export const updateUser = (uid, user) => {
    // const index = users.findIndex((u) => u._id === uid);
    // users[index] = { ...users[index], ...user };
    // return users[index];
    usersModel.updateOne({_id: uid}, {$set: user});
};
export const deleteUser = (uid) => {
    // const index = users.findIndex((u) => u._id === uid);
    // users.splice(index, 1);
    // return {status: 'ok'}
    usersModel.deleteOne({_id: uid});
    
};

