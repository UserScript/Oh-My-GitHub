void function () {
	'use strict'

	defineModule({
		name: '(sample-module)',
		description: 'Sample module which can be used as a template.',
		homepage: 'http://www.cssmagic.net/',
		category: 'issue',
		urlTypeMatches: [
			//'github/*',
			//'gist/*',
		],
		domMatches: [
			//'.header.gist-header a',
			//'#sample > ul',
			//'header .new .alert-box',
		],

		// style
		//css: css,

		// init entrance
		/* var env = {
			urlType: app.urlType,
			username: app.username,
			repo: app.repo,
			repoOwner: app.repoOwner,
		} */
		documentEnd: function (env) {
			console.log('end')
		},
		documentIdle: function (env) {
			console.log('idle')
		},
	})

}()

