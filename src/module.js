
var modules = {}

app.defineModule = function (mod) {
	var modName = mod.name
	if (!modName) return
	console.log('[OMG] def mod: `' + modName + '`')

	// index
	modules[modName] = mod

	// language package
	if ('i18n' in mod) {
		app.indexI18n(modName)
	}

}

// shortcut for module dev
var defineModule = app.defineModule
