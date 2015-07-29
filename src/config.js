// structure
var _config = {
	modules: {
		'(sample-module)': 1,
		'my-mod': 1,
	},
	modOptions: {
		'(sample-module)': {
			option1: ''
		},
		'my-mod': {
			option1: ''
		},
	}
}

//app.config = {}

//app.getConfig = function () {
//	// TODO 其实还没想好
//}
//app.setConfig = function () {
//	// TODO 其实还没想好
//}


app.readConfig = function () {
	var config
	if (app.LS_KEY in localStorage) {
		config = JSON.parse(localStorage.getItem(app.LS_KEY))
	} else {
		config = {}
	}
	return config
}
app.writeConfig = function (config) {
	if (!arguments.length) return
	localStorage.setItem(app.LS_KEY, JSON.stringify(config || {}))
}

// 把已经不存在的 module name 从 config 数据中删掉
app.cleanConfig = function (config) {
	var modNames = _.pluck(app.modules, 'name')
	var cfgModules = config.modules
	var cfgModOpts = config.modOptions
	_.each([cfgModules, cfgModOpts], function (cfg) {
		if (_.isObject(cfg)) {
			_.each(cfg, function (modName) {
				if (_.contains(modNames, modName)) {
					delete cfg[modName]
				}
			})
		}
	})
	return config
}
