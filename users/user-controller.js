//import people from './users.js' // import the array of users.

//let users = people;
// use express instance app to declare HTTP GET
import * as usersDao from "./users-dao.js";
const UserController = (app) => {
    app.get("/api/users", findAllUsers)  // request pattern /api/users to call a function

    app.get('/api/users/:_id', findUserById);
    app.post('/api/users', createUser);
    app.delete('/api/users/:_id', deleteUser); //implements an HTTP handler that will delete a user when an HTTP DELETE is requested referring to a particular user
    app.put('/api/users/:_id',updateUser);


}
const findAllUsers = async(req,res) => {
    const username = req.query.username;
    const password = req.query.password;
    if (username && password) {
        const user = await usersDao.findUserByCredentials(username, password);
        if (user) {
            res.json(user);
        } else {
            res.sendStatus(404);
        }
    } else if (username) {
        const user = await usersDao.findUserByUsername(username);
        if (user) {
            res.json(user);
        } else {
            res.sendStatus(404);
        }   
    } else {
        const users = await usersDao.findAllUsers();
        res.json(users);
    }
};

const findUserById = async(req, res) => {

    const userId = req.params._id;
    const user = usersDao.findUserById(userId);
    // const user = users.find(u => u._id === userId);
    res.json(user)
//Try http://localhost:4000/api/users/123
}
const createUser =async (req, res) => {
    // const newUser = req.body;
    // newUser._id = (new Date()).getTime() + '';
    // users.push(newUser);
    const newUser = await usersDao.createUser(req.body);
    res.json(newUser);

}
const deleteUser = async (req,res)=> {
   const userId = req.params.id; // get user ID from path parameter _id filter out the user

    //users = users.filter(usr => usr._id !== userId); // whose ID is the ID of the user we want to remove

    //res.sendStatus(200)
   const status = await usersDao.deleteUser(userId);
   //res.sendStatus(status);
   res.json(status);
}
const updateUser = async (req, res) => {
    const userId = req.params.id;
    const status = await usersDao.updateUser(userId, req.body);
   
    
    //res.sendStatus(status);
    res.json(status);
    // const status = await usersDao.updateUser(userId, req.body);
    // const user = await usersDao.findUserById(userId);
    // req.session['currentUser'] = user;
    // res.sendStatus(status);
    // const updates = req.body;
    // users = users.map((usr) =>
    //     usr._id === userId ?
    //         {...usr, ...updates} :
    //         usr
    // );
    // res.sendStatus(200);
}

const findUsers = (req, res) => {  // function runs when /api/users requested
    const type = req.query.type  //retreive type parameter from query
    if (type) {  // if type parameter in query, find user of that type
        const usersOfType = users.filter(u => u.type === type);
        res.json(usersOfType);
        return   // return so it doesn't continue
    }

    res.json(users)   // otherwise respond with all users
    //with JSON array of users
    //Try http://localhost:4000/api/users?type=STUDENT
}
export default UserController;  // exports so app.js can import
