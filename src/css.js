app.styleElem = null

app.insertCSS = function () {
	// prepare css container
	var elem = app.styleElem
	if (!elem) {
		elem = app.styleElem = document.createElement('style')
		elem.id = 'userscript-css'
		document.head.appendChild(elem)
	}

	var cssTextList = []
	_.each(allModules, function (mod) {
		if (!('css' in mod)) return
		var isConfigOK = app.util.match.config(mod)
		var isUrlOK = app.util.match.url(mod.urlTypeMatches)
		if (isConfigOK && isUrlOK) {
			cssTextList.push('/* ' + mod.name + ' */')
			cssTextList.push(mod.css)
		}
	})

	elem.innerHTML = cssTextList.join('\n')
	console.log('[OMG] css updated.')

}
