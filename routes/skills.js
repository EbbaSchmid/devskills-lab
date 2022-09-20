app.get('/', function(req, res) {
    res.render('skills/index', {
        skills: skills
    })
})

import { Router } from 'express'
// import the Skills data

import { skills } from '../data/skills-data.js'

const router = Router()