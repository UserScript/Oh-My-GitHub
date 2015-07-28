
// url
void function () {
	'use strict'

	var _query, _cacheParam = null
	function _getQuery() {
		return location.search.slice(1)
	}
	function getParam(s) {
		if (!s || !_.isString(s)) return false
		if (typeof _query === 'undefined') {	// first run
			_query = _getQuery()
		} else {
			var currentQuery = _getQuery()
			if (currentQuery !== _query) {
				_cacheParam = null	// clear cache to enforce re-parse
				_query = currentQuery
			}
		}
		if (!_cacheParam) {
			_cacheParam = parseQuery(_query)
		}
		return _cacheParam[s.toLowerCase()]
	}

	function parseQuery(query) {
		var data = {}
		if (query && _.isString(query)) {
			var pairs = query.split('&'), pair, name, value
			_.each(pairs, function(n) {
				pair = n.split('=')
				name = pair[0]
				value = pair[1] || ''
				if (name) {
					data[decodeURIComponent(name).toLowerCase()] = decodeURIComponent(value)
				}
			})
		}
		return data
	}

	// exports
	app.util.url = {
		getParam: getParam,
		parseQuery: parseQuery,
	}

}()


// match
void function () {
	'use strict'

	function matchDom(rules) {
		if (!_.isArray(rules)) return true
		if (!rules.length) return true
		return _.some(rules, function (item) {
			return $(item).length
		})
	}
	function matchUrl(rules) {
		if (!_.isArray(rules)) return true
		if (!rules.length) return true
		var result = false

		_.each(rules, function (rule) {
			if (result) return
			//console.log(app.urlType)
			//console.log(rule)
			if (app.urlType === rule) {
				result = true
			} else if (rule.contains('*')) {
				//alert('*')
				var segments = rule.split('/')
				//console.log(segments)
				var urlTypeSegments = app.urlType.split('/')
				var segOK = true
				for (var i = 0; i < segments.length; i++) {
					var seg = segments[i]
					if (seg !== '*' && seg !== urlTypeSegments[i]) {
						segOK = false
						break
					}
				}
				if (segOK) result = true
			}
		})

		return result
	}

	// exports
	app.util.match = {
		url: matchUrl,
		dom: matchDom,
	}


}()
