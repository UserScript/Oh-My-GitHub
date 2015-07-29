void function () {
	'use strict'

	var selSettingMainCol = '#site-container div.columns div.column.three-fourths'
	var clsPaneInner = 'boxed-group-inner'
	var selSettingPaneInner = selSettingMainCol + ' > .boxed-group > .' + clsPaneInner
	var clsTabContent = 'tab-content'
	var clsSelected = 'selected'
	var clsTabContentSelected = clsTabContent + '-' + clsSelected
	//var selTabItem = selSettingMainCol + ' > div.tabnav > nav.tabnav-tabs > a'

	var css = `
		${selSettingMainCol} { visibility: hidden; }
		${selSettingPaneInner} {
			padding-top: 10px;
			min-height: 400px;
		}
		/* tab */
		.${clsTabContent} { display: none; margin: 20px 10px; }
		.${clsTabContent}.${clsTabContentSelected} { display: block; }
		/* mod list */
		ul#omg-mod-list {
			/*margin-left: 1em;*/
			list-style: none;
		}
		ul#omg-mod-list > li {
			margin-bottom: 15px;
		}
		ul#omg-mod-list > li label b {
			font-size: 14px;
			cursor: pointer;
		}
	`
	var htmlPane = `
		<div class="boxed-group">
			<h3>${app.OMG}</h3>
			<div class="${clsPaneInner}"></div>
		</div>
	`
	var htmlTab = `
		<div class="tabnav">
			<nav class="tabnav-tabs">
				<a class="tabnav-tab ${clsSelected}" href="#tab=mod" data-action="switch-tab">Modules</a>
				<a class="tabnav-tab" href="#tab=about" data-action="switch-tab">About</a>
			</nav>
		</div>
	`
	var htmlTabContentMod = `
		<div class="${clsTabContent} ${clsTabContentSelected}" data-tab-name="mod">
			...
		</div>
	`
	var htmlTabContentAbout = `
		<div class="${clsTabContent}" data-tab-name="about">
			<h4>Author</h4>
			<p class="form-checkbox"><a href="/cssmagic" target="_blank"><b>@cssmagic</b></a> - Designer and developer.</p>
			<h4>Open source libraries</h4>
			<ul class="form-checkbox" style="margin-left: 1em;">
				<li>jQuery</li>
				<li>Underscore</li>
				<li>Action</li>
			</ul>
			<h4>License</h4>
			<p class="form-checkbox">MIT.</p>
			<hr class="bleed-flush">
			<h4>Donate</h4>
			<p class="form-checkbox">
				<a role="button" class="btn btn-sm btn-primary" href="http://www.cssmagic.net/blog/donate" target="_blank">Donate proudly!</a>
			</p>
		</div>
	`
	var tmplModList = `
		<ul id="omg-mod-list" class="form-checkbox">
			<% _.each(data, function (mod) { %>
			<li>
				<label>
					<input name="<%= mod.name %>" type="checkbox" value="1" checked disabled>
					<b><%= mod.name %></b>
				</label>
				<div class="descr">
					<%= mod.description || '' %>
				</div>
			</li>
			<% }) %>
		</ul>
	`

	// ui
	var tab = {
		isReady: false,
		init: function () {
			if (this.isReady) return
			this.isReady = true
			action.add({
				'switch-tab': function () {
					// handle tab
					var $target = $(this)
					if ($target.hasClass(clsSelected)) return
					$target
						.addClass(clsSelected)
						.siblings('.' + clsSelected).removeClass(clsSelected)
					// handle tab content
					var tabName = $target.attr('href').split('#tab=')[1]
					if (!tabName) return
					var $content = $(`div[data-tab-name="${tabName}"]`)
					if ($content.hasClass(clsTabContentSelected)) return
					$content
						.addClass(clsTabContentSelected)
						.siblings('.' + clsTabContentSelected).removeClass(clsTabContentSelected)
				},
			})
		},
	}

	// fn
	var mod = {
		init: function () {
			this._getElem()
			//this._bind()
			this.initPane()
			this.initModList()
			this.showSettingCol()
		},
		_getElem: function () {
			this.$settingCol = $(selSettingMainCol)
			this.$settingPane = $(htmlPane)
			this.$settingPaneInner = this.$settingPane.children('.' + clsPaneInner)
			this.$tab = $(htmlTab)
			this.$tabContentMod = $(htmlTabContentMod)
		},
		//_bind: function () {
		//	//var _ns = this
		//	//this.$btn.on('click', function (ev) {
		//	//	ev.preventDefault()
		//	//
		//	//})
		//},
		initPane: function () {
			this.$settingCol.empty().append(this.$settingPane)
			this.$settingPaneInner.append(this.$tab)
			this.$settingPaneInner.append(htmlTabContentAbout).append(this.$tabContentMod)
		},
		initModList: function () {
			var extModules = _.filter(modules, function (mod) {
				return !mod.internal
			})
			template.add('mod-list', tmplModList)
			var html = template.render('mod-list', extModules)
			this.$tabContentMod.empty().append(html)
			//console.log(extMods)
		},
		showSettingCol: function () {
			this.$settingCol.css('visibility', 'visible')
		},
	}

	defineModule({
		name: 'ui-setting-pane',
		internal: true,
		urlTypeMatches: [
			'github/setting/omg',
		],
		domMatches: [
			selSettingMainCol,
			//selTabItem,
		],

		// style
		css: css,

		// init entrance
		documentStart: function () {
			document.title = app.OMG + ' settings'
		},
		documentEnd: function () {
			tab.init()
			mod.init()
		},

		// msg
		i18n: {
			en: {
				module_name: 'Sample Module',
			},
			zh: {
				module_name: '示例模块',
			},
		}
	})
}()
