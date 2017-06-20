class BlogPosts {
	constructor(blogPostDataSource) {
		this.blogPosts = {}
		this.blogPostDataSource = blogPostDataSource
		this.blogPostDataSource.subscribe(this.addBlogPost.bind(this))
	}

	retrievePosts() {
		return Promise.resolve(this.blogPosts)
	}

	addBlogPost(blogPost) {
		const { author, date, title, content} = blogPost
		this.blogPosts[blogPost.title] = new BlogPost(author, date, title, content)
		//this.blogPosts.push(blogPost)
		console.log(this.blogPosts)
	}
}

module.exports = BlogPosts

class BlogPost {
	constructor(author, date, title, content) {
		this.author = author
		this.date = date
		this.title = title
		this.content = content
	}
}