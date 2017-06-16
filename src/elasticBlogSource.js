const elasticsearch = require('elasticsearch')

class ElasticBlogSource {
	constructor() {
		this.client = new elasticsearch.Client({host: 'localhost:9200'})
		this.onNewBlogPosts = () => {}
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
			return hits.hits.map(({ _source }) =>  {
				this.onNewBlogPosts = _source
			})
		} )
	}
}

module.exports = ElasticBlogSource