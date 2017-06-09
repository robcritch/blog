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

module.exports = BlogPosts