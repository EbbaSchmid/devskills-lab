app.get('/', function(req, res) {
    res.render('skills/index', {
        skills: skills
    })
})

import { Router } from 'express'
// import the Skills data

import * as skillsCtrl from '../controllers/skills.js'

router.get('/', skillsCtrl.index)

const router = Router()