const  UserController = (app) => {
    app.get('api/users',findUsers)
}