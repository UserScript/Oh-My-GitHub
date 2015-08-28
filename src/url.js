
/*
'github/home'
'github/setting/...'
'github/setting/app'	https://github.com/settings/applications
'github/setting/omg'	https://github.com/settings/applications?x=oh-my-github

'github/me/watch'		https://github.com/watching
'github/me/pr'			https://github.com/pulls
'github/me/issue'		https://github.com/issues
'github/me/fav'			https://github.com/stars
'github/user'			https://github.com/cssmagic
'github/user/repo'			https://github.com/cssmagic?tab=repositories
'github/user/act'			https://github.com/cssmagic?tab=activity
'github/user/following'		https://github.com/hax/following
'github/user/fav'			https://github.com/stars/hax
'github/user/follower'		https://github.com/cssmagic/followers
'github/repo/home'			https://github.com/hax/hax.github.com
'github/repo/commit'		https://github.com/baixing/jedi/commits
'github/repo/commit/user'	https://github.com/baixing/jedi/commits?author=hax
'github/repo/commit/detail'	https://github.com/baixing/jedi/commit/5f2f07f1da330bfdb200a1357552c9a0fcdb2f12
							https://github.com/baixing/jedi/commit/master
'github/repo/issue'			https://github.com/UserScript/Oh-My-GitHub/issues
'github/repo/issue/detail'	https://github.com/UserScript/Oh-My-GitHub/issues/11
'github/repo/issue/new'		https://github.com/UserScript/Oh-My-GitHub/issues/new
'github/repo/pr'			https://github.com/cssmagic/action/pulls
'github/repo/pr/closed'			https://github.com/cssmagic/action/pulls?q=is%3Apr+is%3Aclosed
'github/repo/pr/detail'		https://github.com/cssmagic/action/pulls/22
'github/repo/pr/commit'		https://github.com/cssmagic/action/pulls/22/commits
'github/repo/pr/diff'		https://github.com/cssmagic/action/pulls/22/files
'github/repo/wiki'				https://github.com/stylus/stylus/wiki
'github/repo/wiki/detail'		https://github.com/stylus/stylus/wiki/1.0.0
'github/repo/wiki/detail/edit'	https://github.com/stylus/stylus/wiki/1.0.0/_edit
'github/repo/setting'		https://github.com/cssmagic/action/settings
'github/repo/setting/...'	https://github.com/cssmagic/action/settings/...

'github/org/...'			...

'github/me'
'github/me/repo'
*/

/*
'gist/home'
'gist/user'
'gist/user/fav'
'gist/detail'
'gist/detail/rev'
'gist/detail/star'
'gist/detail/fork'
'gist/detail/edit'

'gist/me'
'gist/me/fav'
*/


app.urlType = ''

app.getUrlType = function () {

	//var url = location.href
	var host = location.hostname
	var path = location.pathname.toLowerCase()
	var pathSegments = path.split('/')
	pathSegments.shift()	// drop the first empty str

	var site = host.startsWith('gist') ? 'gist' : 'github'
	var pathType = '(unknown)'

	// home
	if (path === '/') {
		pathType = 'home'
	} else {
		if (site === 'gist') {
			if (/^\/[\w\-]+\/\w+\/?$/.test(path)) {
				pathType = 'detail'
			} else if (/^\/[\w\-]+\/?$/.test(path)) {
				pathType = 'user'
			} else if (/^\/[\w\-]+\/starred\/?$/i.test(path)) {
				pathType = 'user/star'
			} else if (/^\/[\w\-]+\/\w+\/revisions\/?$/i.test(path)) {
				pathType = 'detail/rev'
			} else if (/^\/[\w\-]+\/\w+\/stargazers\/?$/i.test(path)) {
				pathType = 'detail/star'
			} else if (/^\/[\w\-]+\/\w+\/forks\/?$/i.test(path)) {
				pathType = 'detail/fork'
			} else if (/^\/[\w\-]+\/\w+\/edit\/?$/i.test(path)) {
				pathType = 'detail/edit'
			}
		} else {
			var systemPaths = {
				'/organizations/new': 'new/org',
				'/settings/applications': 'setting/app',
			}
			var matchedSystemPath = ''
			_.each(systemPaths, function (value, key) {
				if (path === key || path === key + '/') {
					matchedSystemPath = value
				}
			})
			var systemPathSegments = [
				'site',
				'security',
				'contact',
				'blog',
				'about',
				'explore',
				'showcases',
				'trending',
				'settings',
				'new',
			]
			var matchedSystemPathSegment = (_.filter(systemPathSegments, function (key) {
				return key === pathSegments[0]
			}))[0]
			if (matchedSystemPath) {
				pathType = matchedSystemPath
			} else if (matchedSystemPathSegment) {
				// rename
				if (matchedSystemPathSegment === 'settings') {
					matchedSystemPathSegment = 'setting'
				}
				pathType = matchedSystemPathSegment
			} else {
				if (/^\/[\w\-]+\/?$/.test(path)) {
					pathType = 'user'
				} else if (/^\/[\w\-]+\/[\w\-]+\/?$/.test(path)) {
					pathType = 'user/repo'
				} else if (/^\/[\w\-]+\/[\w\-]+\/issues\/?(?:\?.+)?$/.test(path)) {
					pathType = 'repo/issue'
				} else if (/^\/[\w\-]+\/[\w\-]+\/issues\/\d+\/?$/.test(path)) {
					pathType = 'repo/issue/detail'
				} else if (/^\/[\w\-]+\/[\w\-]+\/issues\/new\/?$/.test(path)) {
					pathType = 'repo/issue/new'
				} else if (/^\/[\w\-]+\/[\w\-]+\/pull\/\d+\/files?$/.test(path)) {
					pathType = 'repo/pr/diff'
				}



			}

			// special page
			if (pathType === 'setting/app') {
				var key = app.util.url.getParam('x')
				if (key === 'oh-my-github') {
					pathType = 'setting/omg'
				}
			} else if (pathType === 'user') {
				var tab = app.util.url.getParam('tab')
				var map = {
					'repositories': 'repo',
					'activity': 'act',
				}
				tab = map[tab]
				if (tab) pathType = [pathType, tab].join('/')
			}

		}
	}




	// output
	app.site = site
	app.urlType = site + '/' + pathType

	// debug
	console.log('[OMG] url: ' + location.href)
	console.log('[OMG] url type: ' + app.urlType)

}

app.getUrlTypeMore = function () {
	//var type = app.urlType

	// TODO: 当 DOM ready 后获取详细信息

	//app.urlType = type
}

app.getEnvInfo = function () {
	var type = app.urlType
	if (type === 'github/user') {
		app.username = location.pathname.slice(1).toLowerCase()
	}

	// debug
	console.log('[OMG] username: ' + (app.username || '(unknown)'))
}
app.getEnvInfoMore = function () {
	// 'body.logged_in'
}
