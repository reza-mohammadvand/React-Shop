const express = require('express')

const productRoutes = require('./routes/product-routes')
const BlogRoutes = require('./routes/Blog-router')

const app = express()

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Headers', '*')
  res.setHeader('Access-Control-Allow-Methods', '*')
  next()
})

app.use('/api', productRoutes,)
app.use('/api', BlogRoutes)

app.listen(8000)
