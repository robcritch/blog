const assert = require('assert')

describe('Given no blog posts existing', () => {
	it('returns no blog posts', (done) => {

		retrievePosts()
		.then(result => {
			assert.deepEqual(result, {})
			done()
		})
		.catch(err => done(err))
	})
})

const retrievePosts = () => {
	return Promise.resolve({})
}