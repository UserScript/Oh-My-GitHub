
app.init = function () {
	app.getUrlType()
	app.getEnvInfo()
	app.getModList()
	app.insertCSS()
	app.runTask(app.EVENT_START)
}

app.refresh = function () {
	app.getUrlType()
	app.getEnvInfo()
	app.getUrlTypeMore()
	app.getEnvInfoMore()
	app.insertCSS()
	app.runTask(app.EVENT_START)
	app.runTask(app.EVENT_END)
	app.runTask(app.EVENT_IDLE)
}


// exports for debug
app.allModules = allModules
unsafeWindow.OMG = app

// debug

// init
app.init()
