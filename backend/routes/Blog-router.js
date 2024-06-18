const express = require('express')

const router = express.Router()

const BlogControllers = require('../controllers/blog-controller')


router.get('/blogs', BlogControllers.getAllBlogs)

router.get('/blogs/:id', BlogControllers.getBlog)

module.exports = router
