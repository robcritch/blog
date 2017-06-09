const assert = require('assert')

describe('Given no blog posts existing', () => {
	it('returns no blog posts', (done) => {
		const blogPosts = new BlogPosts()

		blogPosts.retrievePosts()
		.then(result => {
			assert.deepEqual(result, {})
			done()
		})
		.catch(err => done(err))
	})
})

class BlogPosts {
	constructor() {
		this.blogPosts = {}
	}

	retrievePosts() {
		return Promise.resolve(this.blogPosts)
	}
}
