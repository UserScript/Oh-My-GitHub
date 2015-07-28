// data
app.i18n = {
	en: {},
	zh: {},
}
app.lang = ''

app.indexI18n = function (modName) {
	var module = modules[modName]
	var i18n = module.i18n
	var db = app.i18n
	var languages = Object.keys(i18n)
	languages.forEach(function (lang) {
		var pkg = i18n[lang]
		var labels = Object.keys(pkg)
		labels.forEach(function (label) {
			db[lang][modName + '/' + label] = pkg[label]
		})
	})

	// gc
	module.i18n = null
}

/**
 * Get display name of every label key
 * @param key {String} 'module_name/key_name'
 * @return {String}
 */
app.msg = function (key) {
	var lang = app.getLanguage()
	var db = app.i18n || {}
	return (db[lang] || db.en || {})[key] || ''
}

/**
 * Get language config
 * @return {String}
 */
app.getLanguage = function () {
	if (!app.lang) {
		var lang = 'en'
		// 先从本地存储中找语言设置
		// TODO

		// 如果没有，则从 UA 中自动解析
		var ua = navigator.userAgent
		if (/\bzh\-cn\b/i.test(ua)) {
			lang = 'zh'
		}
		app.lang = lang
	}
	return app.lang
}
