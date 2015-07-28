void function () {
	'use strict'

	var selHeaderNav = 'ul.header-nav.user-nav'
	var clsNavItem = 'header-nav-item'
	var clsNavItemSeparator = clsNavItem + '-separator'
	var selHeaderNavItem = selHeaderNav + ' > .' + clsNavItem

	var css = `
		${selHeaderNavItem} span.octicon-gear {position: relative; top: 1px;}
	`
	var htmlOmgNavItem = `
		<li class="${clsNavItem} ${clsNavItemSeparator}">
			<a class="header-nav-link tooltipped tooltipped-s" href="${app.LINK_SETTING}" aria-label="Config ${app.OMG}…">
				<span class="octicon octicon-gear"></span>
			</a>
		</li>
	`

	var mod = {
		isReady: false,
		init: function () {
			if (this.isReady) return
			this._getElem()
			this.initItem()
			this.isReady = true
		},
		_getElem: function () {
			this.$wrapper = $(selHeaderNav)
			//this.$items = $(selHeaderNavItem)
		},
		initItem: function () {
			this.$itemOmg = $(htmlOmgNavItem)
			this.$itemOmg
				.prependTo(this.$wrapper)
				//.children('a').trigger('navigation:mouseover')
			//console.log(this.$itemOmg.children('a'))
		},
	}

	defineModule({
		name: 'ui-entrance',
		internal: true,
		//urlTypeMatches: [
		//	'github/*',
		//	'gist/*',
		//],
		domMatches: [
			selHeaderNavItem,
		],

		// style
		css: css,

		// init entrance
		documentEnd: function () {
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

