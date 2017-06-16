const createExpressApp = require('express')
const app = createExpressApp()

const ElasticBlogSource = require('./elasticBlogSource')
const BlogPosts = require('./blogPosts')

const port = 9123
const appName = 'blog'

const dataSource = new ElasticBlogSource()
const blogPosts = new BlogPosts(dataSource)

app.get('/blogs', (req, res) => {
	blogPosts.retrievePosts()
	.then(res => res.status(200).send(res))
	.catch(err => res.status(500).send(err))
})


app.listen(port, () => {
	console.log(`${appName} listening on port ${port}`)
})