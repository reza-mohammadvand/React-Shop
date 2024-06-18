const Blogs = require('../models/Blogs')

const getAllBlogs = (req, res, next) => {
  res.json(Blogs)
}

const getBlog = (req, res, next) => {
  const Blog = Blogs.find((item) => {
    return item._id === req.params.id
  })

  res.json(Blog)
}

exports.getAllBlogs = getAllBlogs
exports.getBlog = getBlog
