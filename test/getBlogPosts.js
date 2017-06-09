const assert = require('assert')

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

class FakeBlogPostDataSource {
	constructor() {
		this.blogPosts = []
	}

	subscribe(onBlogPostReceived) {
		this.blogPosts.forEach(blogPost => onBlogPostReceived(blogPost))
	}

	withBlogPost(blogPost) {
		this.blogPosts.push(blogPost)
		return this
	}

}

class BlogPosts {
	constructor(blogPostDataSource) {
		this.blogPosts = []
		this.blogPostDataSource = blogPostDataSource
		this.blogPostDataSource.subscribe(this.addBlogPost.bind(this))
	}

	retrievePosts() {
		return Promise.resolve(this.blogPosts)
	}

	addBlogPost(blogPost) {
		this.blogPosts.push(blogPost)
	}
}
