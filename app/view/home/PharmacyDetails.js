Ext.define('icd.view.home.PharmacyDetails', {
	extend: 'Ext.grid.Grid',
	xtype: 'icd-home-pharmacydetails',

	bind: {
		store: '{patients}'
	},

	viewModel: 'icd-home-pharmacydetails',

	columns: [{
		dataIndex: 'name',
		text: 'Name',
		flex: 1
	}, {
		dataIndex: 'age',
		text: 'AGE'
	}]
});
