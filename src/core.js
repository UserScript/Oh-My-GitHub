
// shim
if (typeof unsafeWindow === 'undefined') {
	var unsafeWindow = window
}
//var unsafeWindow = unsafeWindow || window

// shim for string methods
if (typeof String.prototype.contains !== 'function') {
	String.prototype.contains = String.prototype.includes
}

// shortcut
var $ = function () {
	console.error('[Oh-My-GitHub] jQuery is not available while `documentStart`.')
	// never mind, we'll get jQuery later.
}
var $doc = null
var $root = null

// ns
var app = {}
app.util = {}


// config for lib
_.extend(_.templateSettings, {
	interpolate : /<%-([\s\S]+?)%>/g,
	escape      : /<%=([\s\S]+?)%>/g,
	variable: 'data',
})


// const
app.EVENT_START = 'documentStart'
app.EVENT_END = 'documentEnd'
app.EVENT_IDLE = 'documentIdle'
app.OMG = 'Oh-My-GitHub'
app.LS_KEY = 'omg_config'
app.LINK_SETTING = '/settings/applications?name=oh-my-github'

// bind
document.addEventListener('DOMContentLoaded', function () {
	// can't use jQuery until here.
	$ = unsafeWindow.$
	$doc = $(unsafeWindow.document)
	$root = $(unsafeWindow.document.documentElement)
	action.init()
	app.getUrlTypeMore()
	app.getEnvInfoMore()

	$(document).on('pjax:end', function () {
		console.log('[OMG] pjax: ' + location.href)
		app.refresh()
	})

	app.runTask(app.EVENT_END)
}, false)

window.addEventListener('load', function () {
	app.runTask(app.EVENT_IDLE)
}, false)

