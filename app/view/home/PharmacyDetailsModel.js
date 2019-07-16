Ext.define('icd.view.home.PharmacyDetailsModel', {
	extend: 'Ext.app.ViewModel',
	alias: 'viewmodel.icd-home-pharmacydetails',

	stores: {
		'patients': {
			autoLoad: true,
			remoteSort: false,
			remoteFilter: false,

			fields: [{
				name: 'name',
				type: 'string'
			}, {
				name: 'age',
				type: 'int'
			}],

			data: [{
				'name': 'Hop F. Miranda',
				'age': 59
			}, {
				'name': 'Alyssa W. Montoya',
				'age': 53
			}, {
				'name': 'Rigel C. Garcia',
				'age': 49
			}, {
				'name': 'Caldwell F. Steele',
				'age': 18
			}, {
				'name': 'Yolanda V. Suarez',
				'age': 61
			}, {
				'name': 'Hunter E. Lynn',
				'age': 45
			}, {
				'name': 'Fuller B. Walsh',
				'age': 36
			}]
		}
	}
});
