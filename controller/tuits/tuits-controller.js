//import posts from "./tuits.js"
//let tuits =  posts;
import * as tuitsDao from "./tuits-dao.js";
const createTuit = async (req, res) => {
    const newTuit = req.body;
    //newTuit._id = (new Date()).getTime()+'';
    newTuit.likes = 0;
    newTuit.liked = false;
    //tuits.push(newTuit);
    const insertedTuit = await tuitsDao.createTuit(newTuit);
    res.json(newTuit);
}

const deleteTuit = async (req, res) => {
    const tuitdIdToDelete = req.params.tid;
    // tuits = tuits.filter((t) =>
    //     t._id !== tuitdIdToDelete);
    const status = await tuitsDao.deleteTuit(tuitdIdToDelete);
    res.sendStatus(status);
}

// const newUser = req.body;
// newUser._id = (new Date()).getTime() + '';
// users.push(newUser);
// res.json(newUser);
const findTuits = async(req,res) => {
    const tuits = await tuitsDao.findTuits();
    res.json(tuits);
    //console.log(tuits);
}
const updateTuit = async (req, res) => {
    const tuitdId = req.params.tid;
    const updates = req.body;
    // const tuitIndex = tuits.findIndex((t) => t._id === tuitdId)
    // tuits[tuitIndex] = {...tuits[tuitIndex], ...updates};
    const status = await tuitsDao.updateTuit(tuitdId, updates);
    res.sendStatus(status);
}
//http://localhost:4000/api/tuits/234 when use an api, never has a space between it




export default (app) => {
    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findTuits);
    app.put('/api/tuits/:tid', updateTuit); 
    app.delete('/api/tuits/:tid', deleteTuit);
}
