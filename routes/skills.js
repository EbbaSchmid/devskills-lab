
import { Router } from 'express'
import * as skillsCtrl from '../controllers/skills.js'

const router = Router()

// router.get('/', function(req, res) {
//     res.send('respond with a resource')
// })

router.get('/', skillsCtrl.index)
router.get('/new', skillsCtrl.new)
router.get('/:id', skillsCtrl.show)
router.post('/', skillsCtrl.create)
router.delete('/:id', skillsCtrl.delete)

// router.get('/done', function (req, res){
//     res.send('respond with done')
// })

export {
    router
}

