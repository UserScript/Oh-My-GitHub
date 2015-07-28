app.styleElem = null

app.insertCSS = function () {
	// prepare css container
	var elem = app.styleElem
	if (!elem) {
		elem = app.styleElem = document.createElement('style')
		elem.id = 'omg-css'
		document.head.appendChild(elem);
	}

	var cssTextList = []
	_.each(modules, function (mod) {
		var isUrlOK = app.util.match.url(mod.urlTypeMatches)
		if (isUrlOK && 'css' in mod) {
			cssTextList.push('/* ' + mod.name + ' */')
			cssTextList.push(mod.css)
		}
	})

	elem.innerHTML = cssTextList.join('\n');
	console.log('[OMG] css updated.')

}
