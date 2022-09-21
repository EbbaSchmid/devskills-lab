import { Skill } from '../models/skill.js'

function index(req, res) {
    Todo.find({})
    .then(todos => { // todos represents the result of the query, in this case ALL todos
        res.render('todos/index', {
        todos: todos,
    })
    })
    .catch(error => { // If there's an error, console.log it and redirect back home!
        console.log(error)
        res.redirect('/')
    })
}


    export {
        index
}