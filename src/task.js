app.runTask = function (taskType) {
	var env = {
		urlType: app.urlType,
		site: app.site,
		username: app.username,
		repo: app.repo,
		repoOwner: app.repoOwner,
	}

	_.each(allModules, function (mod) {
		//console.log('[OMG] [' + taskType + '] `' + modName + '`')
		if (taskType in mod) {
			var modName = mod.name
			var isConfigOK = app.util.match.config(mod)
			var isDomOK = taskType === app.EVENT_START ? true : app.util.match.dom(mod.domMatches)
			var isUrlOK = app.util.match.url(mod.urlTypeMatches)
			console.log('[OMG] [' + taskType + '] `' + modName + '` matches DOM: ' + isDomOK)
			console.log('[OMG] [' + taskType + '] `' + modName + '` matches URL: ' + isUrlOK)
			if (isConfigOK && isUrlOK && isDomOK) {
				//try {
					console.log('[OMG] [' + taskType + '] `' + modName + '` is running...')
					mod[taskType](env)
					console.log('[OMG] [' + taskType + '] `' + modName + '` is done.')
				//} catch (e) {}
			}
			console.log('----------')
		}
	})

}

