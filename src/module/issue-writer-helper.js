void function () {
	'use strict'

	var selInputIssueTitle = 'input[name="issue[title]"]'
	var selInputIssueBody = 'textarea[name="issue[body]"]'
	var selIssueTitle = '.js-issue-title'
	var selBtnEditTitle = '.gh-header-show button.js-details-target'

	//var css = ` `

	var mod = {
		init: function (urlType) {
			this._getActionType(urlType)
			this._getElem()
			this._bind()
		},
		_getActionType: function (urlType) {
			this.actionType = ''
			if (urlType.contains('issue/new')) {
				this.actionType = 'new'
			} else if (urlType.contains('issue/detail')) {
				this.actionType = 'edit'
			}
		},
		_getElem: function () {
			this.$inputIssueTitle = $(selInputIssueTitle)
			this.$inputIssueBody = $(selInputIssueBody)
			if (this.actionType === 'edit') {
				this.$issueTitle = $(selIssueTitle)
				this.$btnEditTitle = $(selBtnEditTitle)
			}
		},
		_refreshElem: function () {
			// because structure might be re-generated.
			if (this.actionType === 'edit') {
				this.$issueTitle = $(selIssueTitle)
				//this.$btnEditTitle = $(selBtnEditTitle)
			}
		},
		_bind: function () {
			var _ns = this
			this.$inputIssueBody.on('paste', function (ev) {
				setTimeout(function () {
					_ns.onPaste()
				}, 0)
			})
		},
		_parse: function (str) {
			var lines = (str || '').split('\n')

			// trim empty lines
			while (lines.length && lines[0].trim() === '') {
				lines.shift()
			}
			while (lines.length && lines[lines.length - 1].trim() === '') {
				lines.pop()
			}

			// get title
			var title = this._getTitle(lines)
			// get Jekyll section
			var jkLineAmount = 0
			var firstLine = lines[0]
			if (firstLine.trim() === '---') {
				for (var i = 0 + 1, len = lines.length; i < len; i++) {
					var line = lines[i].trim()
					if (line === '---') {
						jkLineAmount = i
						break
					} else if (line.indexOf(':') < 1) {  // invalid Jekyll line
						jkLineAmount = 0
						break
					}
				}
				// convert line index to line amount
				jkLineAmount++
				// include empty lines
				while ((lines[jkLineAmount] || '').trim() === '') {
					jkLineAmount++
				}
			}

			return {
				title: title,
				lines: lines,
				jkLineAmount: jkLineAmount,
			}
		},
		_getTitle: function (lines) {
			var firstLine = lines[0]
			if (!firstLine) return ''
			var title = ''

			// normal headline in markdown
			// only search h1, to reduce misjudging
			var reHeadline = /^#\s*([^#].*)$/
			var guessMarkdownTitle = reHeadline.exec(firstLine)
			if (guessMarkdownTitle) {
				title = guessMarkdownTitle[1]
			}

			// Jekyll meta
			else if (firstLine.trim() === '---') {
				var jkTitle = ''
				for (var i = 0 + 1, len = lines.length; i < len; i++) {
					var line = lines[i].trim()
					if (line === '---') break
					if (line.startsWith('title:')) {
						jkTitle = (line.split('title:')[1] || '').trim()
						break
					}
				}
				// strip quotes
				var guessJkTitle = /^'(.*)'$|^"(.*)"$/.exec(jkTitle)
				if (guessJkTitle) {
					title = guessJkTitle[1] || guessJkTitle[2] || ''
				} else {
					title = jkTitle
				}
			}

			// TODO: if Jekyll meta has no title info, need to failover to markdown headline

			return title
		},
		onPaste: function () {
			var value = this.$inputIssueBody.val()
			var content = this._parse(value)
			console.log(content)
			var lines = content.lines
			// handle title
			var title = content.title
			if (title) {
				// auto fill title
				if (this.actionType === 'new') {
					this.$inputIssueTitle.val(title)
				}
				// check title update
				else if (this.actionType === 'edit') {
					var originalTitle = this.$issueTitle.html().trim()
					if (originalTitle !== title) {
						var needToUpdateTitle = confirm('贴入内容的标题与现有标题不同，是否更新？')
						if (needToUpdateTitle) {
							this._refreshElem()
							this.$btnEditTitle.click()
							this.$inputIssueTitle.val(title)
						}
					}
				}
			}

			// strip Jekyll meta
			var jkLineAmount = content.jkLineAmount
			if (jkLineAmount) {
				lines = lines.slice(content.jkLineAmount)
			}

			// output
			//console.log(lines)
			this.$inputIssueBody.val(lines.join('\n'))

			// patch: active submit btn - it is disabled on default
			if (this.actionType == 'new') {
				this.$inputIssueTitle.focus()
				this.$inputIssueBody.focus()
			}
		},
	}

	defineModule({
		name: 'issue-writer-helper',
		description: 'It helps when posting or editing issues.',
		homepage: 'http://www.cssmagic.net/',
		category: 'issue',
		urlTypeMatches: [
			'github/repo/issue/detail',
			'github/repo/issue/new',
		],
		domMatches: [],

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
			mod.init(env.urlType)
		},
	})

}()

