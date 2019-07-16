/**
 *	Configuration utility class.
 */
Ext.define('icd.util.Configuration', {
	alternateClassName: ['icd.Configuration', 'Configuration'],
	singleton: true,

	/**
	 *	Returns the api url of the Tableau's API scripting file.
	 *
	 *	@return {String} The api url.
	 */
	getTableauApiUrl: function() {
		return 'https://tableaucii.dev.va.antheminc.com/javascripts/api/tableau-2.1.2.min.js';
	}
});
