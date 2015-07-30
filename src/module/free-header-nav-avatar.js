void function () {
	'use strict'

	var selHeaderNav = 'ul.header-nav.user-nav'
	var clsNavItem = 'header-nav-item'
	var clsNavItemSeparator = clsNavItem + '-separator'
	var selHeaderNavItem = selHeaderNav + ' > .' + clsNavItem
	var clsNavLink = 'header-nav-link'
	var selHeaderNavLink = selHeaderNavItem + ':last-child > a.' + clsNavLink
	var selAvatar = 'img.avatar'
	var selHeaderNavAvatar = selHeaderNavLink + ' > ' + selAvatar

	var css = `
		${selHeaderNav} { visibility: hidden }
		${selHeaderNav} .${clsNavItemSeparator} {
			margin-right: 5px;
			padding-right: 6px;
		}
		${selHeaderNav} .${clsNavItemSeparator}::before {
			content: '';
			margin-right: -5px;
			margin-top: 4px;
			float: right;
			width: 0;
			height: 21px;
			border-right: 1px dotted #ccc;
		}
	`
	var htmlItemAvatar = `
		<li class="${clsNavItem} ${clsNavItemSeparator}">
			<a class="${clsNavLink}" href="/"></a>
		</li>
	`
	var htmlMenuIcon = `
		<span class="octicon octicon-three-bars"></span>
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
			this.$itemLast = $(selHeaderNavItem).last()
		},
		initItem: function () {
			this.$avatar = this.$itemLast.find(selAvatar)
			if (!this.$avatar.length) return
			// move avatar to a new nav item
			this.$itemAvatar = $(htmlItemAvatar)
			var $linkAvatar = this.$itemAvatar.children('a')
			$linkAvatar.append(this.$avatar)
			// use a new menu icon
			var $linkLast = this.$itemLast.children('a.' + clsNavLink)
			$linkLast.html(htmlMenuIcon)
			// use profile link
			var url = $linkLast.attr('href')
			$linkAvatar.attr('href', url)
			// insert avatar back
			this.$itemAvatar.insertBefore(this.$itemLast)
			// show nav
			this.$wrapper.css('visibility', 'visible')
		},
	}

	defineModule({
		name: 'free-header-nav-avatar',
		description: 'It reorganizes avatar in header nav.',
		homepage: 'http://www.cssmagic.net/',
		category: 'ui',
		domMatches: [
			selHeaderNavAvatar,
		],

		// style
		css: css,

		// init entrance
		documentEnd: function () {
			mod.init()
		},
	})

}()

