const assert = require('assert')
const FakeBlogPostDataSource = require('./testDoubles/fakeBlogPostDataSource')
const BlogPosts = require('../src/blogPosts')

describe('Given no blog posts existing', () => {
	it('returns no blog posts', (done) => {
		const blogPostDataSource = new FakeBlogPostDataSource()

		const blogPosts = new BlogPosts(blogPostDataSource)

		blogPosts.retrievePosts()
		.then(result => {
			assert.deepEqual(result, [])
			done()
		})
		.catch(err => done(err))
	})
})

describe('Given a blog post existing', () => {
	it('returns the blog post', (done) => {
		const blogPostDataSource = new FakeBlogPostDataSource()
		
		blogPostDataSource
		.withBlogPost('new blog post')
		const blogPosts = new BlogPosts(blogPostDataSource)

		blogPosts.retrievePosts()
		.then(result => {
			assert.deepEqual(result, ['new blog post'])
			done()
		})
		.catch(err => done(err))
	})
})


