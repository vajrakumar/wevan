Ext.define('icd.view.home.PharmacyGridModel', {
	extend: 'Ext.app.ViewModel',
	alias: 'viewmodel.icd-home-pharmacygrid',

	data: {
		currentRank: null,
		therapeuticClass: null
	},

	stores: {
		'prescriptions': {
			autoLoad: true,
			remoteSort: false,
			remoteFilter: false,

			fields: [{
				name: 'currentRank',
				type: 'int'
			}, {
				name: 'priorRank',
				type: 'int'
			}, {
				name: 'drugName',
				type: 'string'
			}, {
				name: 'dispenseType',
				type: 'string'
			}, {
				name: 'therapeuticClass',
				type: 'string'
			}, {
				name: 'grossCost',
				type: 'int'
			}, {
				name: 'totalRx',
				type: 'int'
			}, {
				name: 'utilizers',
				type: 'int'
			}, {
				name: 'grossCostPerRx',
				type: 'float'
			}, {
				name: 'grossCostPerDaysSupply',
				type: 'float'
			}],

			filters: [{
				disableOnEmpty: true,
				property: 'currentRank',
				value: '{currentRank}',
				operator: 'in'
			}, {
				disableOnEmpty: true,
				property: 'therapeuticClass',
				value: '{therapeuticClass}',
				operator: 'in'
			}],

			sorters: [{
				property: 'currentRank',
				direction: 'ASC'
			}],

			proxy: {
				type: 'ajax',
				url: '/resources/json/topSpecialtyDrugs.json',
				reader: {
					type: 'json',
					rootProperty: 'data'
				}
			}
		}
	}
});
