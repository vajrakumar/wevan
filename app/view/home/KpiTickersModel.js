Ext.define('icd.view.home.KpiTickersModel', {
	extend: 'Ext.app.ViewModel',
	alias: 'viewmodel.icd-kpitickers',

	stores: {
		'kpis': {
			autoLoad: true,

			fields: [{
				name: 'itemId',
				type: 'string'
			}, {
				name: 'title',
				type: 'string'
			}, {
				name: 'value',
				type: 'string'
			}, {
				name: 'description',
				type: 'string'
			}, {
				name: 'direction',
				type: 'string'
			}, {
				name: 'color',
				type: 'string'
			}, {
				name: 'filters',
				type: 'auto'
			}, {
				name: 'selections',
				type: 'auto'
			}],

			proxy: {
				type: 'ajax',
				url: '/resources/json/kpiTickers.json',
				reader: {
					type: 'json',
					rootProperty: 'data'
				}
			},

			listeners: {
				load: 'onKpisLoad'
			}
		}
	}
});
