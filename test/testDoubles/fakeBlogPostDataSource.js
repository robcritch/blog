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

module.exports = FakeBlogPostDataSource