const express = require('express')
const app = express()
const port = 3000
const postsRouter = require('./routers/posts')
const posts = require('./posts')

app.use('/posts', postsRouter)

app.listen(port, () => {
	console.log(`Server listening on port: ${port}`)
})
