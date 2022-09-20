// app.get('/', function(req, res) {
//     res.render('skills/index', {
//         skills: skills
//     })
// })

import { Router } from 'express'

const router = Router()

router.get('/', function(req, res) {
    res.send('respond with a resource')
})


router.get('/done', function (req, res){
    res.send('respond with done')
})

export {
    router
}

