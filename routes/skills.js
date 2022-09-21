// app.get('/', function(req, res) {
//     res.render('skills/index', {
//         skills: skills
//     })
// })

import { Router } from 'express'
import * as skillsCtrl from '../controllers/skills.js'

const router = Router()

router.get('/', function(req, res) {
    res.send('respond with a resource')
})

router.get('/', skillsCtrl.index)
router.get('/new', skillsCtrl.new)
router.post('/', skillsCtrl.create)

router.get('/done', function (req, res){
    res.send('respond with done')
})

export {
    router
}

