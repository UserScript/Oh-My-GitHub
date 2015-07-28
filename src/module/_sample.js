void function () {
	'use strict'

	var css = `
		/*a {color: red !important}*/
	`
	defineModule({
		name: 'sample-module',
		description: 'Sample module which can be used as a template.',
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

		// TODO 选项系统还没想好
		options: [],

		// style
		css: css,

		// init entrance
		/* var env = {
			urlType: app.urlType,
			username: app.username,
			repo: app.repo,
			repoOwner: app.repoOwner,
		} */
		//documentEnd: function (env) {
		//	console.log('end')
		//},
		//documentIdle: function (env) {
		//	console.log('loaded')
		//
		//},

		// msg
		i18n: {
			en: {
				module_name: 'Sample Module 1',
				module_description: 'More words to explain what this module dose...',
			},
			zh: {
				module_name: '示例模块',
				module_description: '这里可以写更多的文字来解释这个模块可以做什么……',
			},
		},
	})

}()

