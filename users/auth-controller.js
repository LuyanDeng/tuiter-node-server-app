import * as usersDao from "./users-dao.js";



const AuthController = (app) => {
    //let currentUser = null;
    const register = (req, res) => {
        //register API retrieves the username and password from the request body
        const username = req.body.username;
        const user =
            usersDao.findUserByUsername(username);

        if(user){
            //already a user with that username
            res.sendStatus(404); // responds with an error
            return;
        }
        //create the new user
        const newUser = usersDao.createUser(req.body);
        // store it in the session's currentUser property
        req.session["currentUser"] = newUser;
        //so we can remember that this new user is now the currently logged in user.
        res.json(newUser);
    };
    const login  = (req, res) => {
        const username = req.body.username;
        const password = req.body.password;
        //login API below looks up the user by their credentials
        const user = usersDao.findUserByCredentials(username,password);
        if(user){
            // responds with the user if they exist.
            req.session["currentUser"] = user;
            res.json(user);
        }
        else {
            res.sendStatus(404);//respond with an error.

        }
    };
    const profile  = (req, res) => {
        const currentUser =req.session["currentUser"];
        if (currentUser) {
            res.json(currentUser);
          } else {
            res.sendStatus(403);
          }
    };
    const logout   = async (req, res) => {
        //logout users by destroying the session.
        console.log(req.session);
        req.session.destroy();
        res.sendStatus(200);
    };
    const update   = (req, res) => { };
    app.post("/api/users/register", register);
    app.post("/api/users/login",    login);
    app.get("/api/users/profile",  profile);
    app.post("/api/users/logout",   logout);
    app.put ("/api/users",          update);
}
export default AuthController;

// import people from "./authuser.js";
// let users = people;

// function AuthController(app) {
//   const login = (req, res) => {
//     const username = req.body.username;
//     const password = req.body.password;
//     if (username && password) {
//       const user = users.find(
//         (user) => user.username === username && user.password === password
//       );
//       if (user) {
//         req.session["currentUser"] = user;
//         res.json(user);
//       } else {
//         res.sendStatus(403);
//       }
//     } else {
//       res.sendStatus(403);
//     }
//   };
//   const register = (req, res) => {
//     const user = users.find((user) => user.username === req.body.username);
//     if (user) {
//       res.sendStatus(403);
//       return;
//     }
//     const newUser = { ...req.body, _id: new Date().getTime() + "" };
//     users.push(newUser);
//     req.session["currentUser"] = newUser;
//     res.json(newUser);
//   };
//   const profile = (req, res) => {
//     const currentUser = req.session["currentUser"];
//     if (currentUser) {
//       res.json(currentUser);
//     } else {
//       res.sendStatus(403);
//     }
//   };

//   const logout = (req, res) => {
//     req.session.destroy();
//     res.sendStatus(200);
//   };

//   app.post("/api/users/login", login);
//   app.post("/api/users/register", register);
//   app.post("/api/users/profile", profile);
//   app.post("/api/users/logout", logout);
// }

// export default AuthController;