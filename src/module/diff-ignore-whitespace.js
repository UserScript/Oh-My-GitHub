void function () {
	'use strict'

	var selToc = '#toc'
	var selBtnGroupView = selToc + ' > div.btn-group '
	var idLabel = 'omg-label-diff-view-ignore-ws'

	var css = `
		#${idLabel} {
			margin-right: 15px;
			margin-top: 4px;
			white-space: nowrap;
			cursor: pointer;
		}
	`
	var htmlSwticher = `
		<label class="right" id="${idLabel}"><input type="checkbox" autocomplete="off"> Ignore whitespace</label>
	`

	var mod = {
		init: function () {
			this._getElem()
			this._initUI()
			this._bind()
		},
		_getElem: function () {
			//this.$wrapper = $(selToc)
			this.$btnGroupView = $(selBtnGroupView)
			this.$switcherWrapper = $(htmlSwticher)
			this.$switcher = this.$switcherWrapper.children('input[type=checkbox]')
			//this.$btn = this.$wrapper.find('')
		},
		_initUI: function () {
			this.$btnGroupView.after(this.$switcherWrapper)
			var status = app.util.url.getParam('w') === '1'

			this.$switcher.prop('checked', status)
		},
		_bind: function () {
			var _ns = this
			var orgUrl = $('[data-container-id="files_bucket"]').attr('href')
			var newUrl = app.util.url.appendParam(orgUrl, {w: 1})
			this.$switcher.on('change', function () {
				//var hash = location.hash
				var status = _ns.$switcher.prop('checked')
				var url = status ? newUrl : orgUrl
				//url += hash
				//alert(url)
				location.href = url
			})
		}
	}
	defineModule({
		name: 'ignore-whitespace-in-diff-view',
		description: 'It adds an option to ignore whitespace changes in diff view.',
		homepage: 'http://www.cssmagic.net/',
		category: 'ui',
		urlTypeMatches: [
			'github/repo/pr/diff',
		],
		domMatches: [
			selBtnGroupView,
		],

		// style
		css: css,

		// init entrance
		documentEnd: function () {
			mod.init()
			//alert('ignore')
		},
	})

}()

