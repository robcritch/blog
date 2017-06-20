const elasticsearch = require('elasticsearch')

class ElasticBlogSource {
	constructor() {
		this.client = new elasticsearch.Client({host: 'elastic:changeme@localhost:9200'})
		this.onNewBlogPosts = () => {}
		this.getBlogPosts()
    	.then(() => setInterval(() => this.getBlogPosts(), 5000))
	}

	subscribe(callback) {
		this.onNewBlogPosts = callback
	}

	getBlogPosts() {
		return this.client.search({
			index:'blog',
			type: 'post',
			size: 50
		})
		.then(({ hits }) => {
			return hits.hits.map(({ _source }) =>
				this.onNewBlogPosts({
					author: _source.author,
					date: _source.post_date,
					title: _source.post_title,
					content: _source.post_content
				})
			)
		})
	}
}

module.exports = ElasticBlogSource