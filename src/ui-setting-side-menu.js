void function () {
	'use strict'

	var selSettingSideCol = '.page-content div.columns div.column.one-fourth'
	var clsSelected = 'selected'
	var clsNav = 'menu-extensions'
	var clsNavItemOmg = 'menu-item-omg'

	var css = `
		nav.${clsNav} a.${clsNavItemOmg} span.org-avatar {
			line-height: 18px;
			width: 20px;
		}
	`

	var html = `
		<nav data-pjax="" class="menu ${clsNav}">
			<h3 class="menu-heading">Extensions</h3>
			<a href="${app.LINK_SETTING}" class="menu-item ${clsNavItemOmg}">
				<span class="octicon octicon-gear org-avatar"></span>
				<span class="org-settings-link">${app.OMG}</span>
			</a>
		</nav>
	`

	var mod = {
		init: function (env) {
			this._getElem()
			this._initMenu(env)
			this._updateSelectedItem(env)
		},
		_getElem: function () {
			this.$wrapper = $(selSettingSideCol)
			this.$nav = this.$wrapper.find('.' + clsNav)
		},
		_initMenu: function () {
			if (this.$nav.length) return
			this.$nav = $(html)
			this.$wrapper.append(this.$nav)
		},
		_updateSelectedItem: function (env) {
			if (env.urlType === 'github/setting/omg') {
				this.$wrapper.find('nav a' + '.' + clsSelected).removeClass(clsSelected)
				this.$nav.find('.' + clsNavItemOmg).addClass(clsSelected)
			}
		}
	}

	defineModule({
		name: 'ui-setting-side-menu',
		internal: true,
		urlTypeMatches: [
			'github/setting/*',
		],
		domMatches: [
			selSettingSideCol
		],

		// style
		css: css,

		// init entrance
		documentEnd: function (env) {
			mod.init(env)
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

