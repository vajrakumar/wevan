Ext.define('icd.view.home.PharmacyGridController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.icd-home-pharmacygrid',

	subscribe: {
		'filterchange.currentRank': 'filterByFieldName',
		'selectionchange.therapeuticClass': 'filterByFieldName'
	},

	filterByFieldName: function(viz, fieldName, selection) {
		this.getViewModel().set(fieldName, selection[fieldName]);
	},

	applySelection: function(viz, selection) {
		var view = this.getView();
		var store = view.getStore();

		var records = store.queryRecordsBy(function(record) {
			return Ext.Array.contains(selection.therapeuticClass, record.data.therapeuticClass);
		});

		view.select(records, false);
	},

	showPharmacyDetails: function(view, e) {
		var data = e.record.data;

		Ext.widget('icd-portlet', {
			closable: true,
			draggable: true,
			floated: true,
			height: 300,
			width: 400,
			title: data.drugName + ' Details (' + data.utilizers + ')',
			tools: [],
			viewModel: {},
			items: [{
				xtype: 'icd-home-pharmacydetails'
			}]
		}).showAt(e.event.pageX - 415, e.event.pageY - 315);
	}
});
