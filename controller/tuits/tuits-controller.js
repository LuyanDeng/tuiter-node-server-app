import posts from "./tuits.js"
let tuits =  posts;
const createTuit = (req, res) => {
    const newTuit = req.body;
    newTuit._id = (new Date()).getTime()+'';
    newTuit.likes = 0;
    newTuit.liked = false;
    tuits.push(newTuit);
    res.json(newTuit);
}

const deleteTuit = (req, res) => {
    const tuitdIdToDelete = req.params.tid;
    tuits = tuits.filter((t) =>
        t._id !== tuitdIdToDelete);
    res.sendStatus(200);
}

// const newUser = req.body;
// newUser._id = (new Date()).getTime() + '';
// users.push(newUser);
// res.json(newUser);
const findTuits = (req,res) => {
    res.json(tuits);
}
const updateTuit = (req, res) => {
    const tuitdId = req.params.tid;
    const updates = req.body;
    const tuitIndex = tuits.findIndex((t) => t._id === tuitdId)
    tuits[tuitIndex] = {...tuits[tuitIndex], ...updates};
    res.sendStatus(200);
}
//http://localhost:4000/api/tuits/234 when use an api, never has a space between it




export default (app) => {
    app.post('/api/tuits', createTuit);// not working
    app.get('/api/tuits', findTuits);
    app.put('/api/tuits/:tid', updateTuit); // not working
    app.delete('/api/tuits/:tid', deleteTuit);
}
