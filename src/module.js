
var allModules = []

app.defineModule = function (mod) {
	var modName = mod.name
	if (!modName) return
	console.log('[OMG] def mod: `' + modName + '`')

	// index
	allModules.push(mod)

	// language package
	//if ('i18n' in mod) {
	//	app.indexI18n(modName)
	//}

}

app.getModList = function () {
	app.modules = _.filter(allModules, function (mod) {
		return !mod.internal
	})
}

// shortcut for module dev
var defineModule = app.defineModule
