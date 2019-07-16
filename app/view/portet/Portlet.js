Ext.define('icd.view.Portlet', {
	extend: 'Ext.Panel',
	xtype: 'icd-portlet',

	ui: 'gray',
	border: true,
	layout: 'fit',

	bind: {
		ui: '{theme}'
	},

	tools: [{
		itemId: 'link',
		type: 'gear',
		callback: Ext.emptyFn
	}],

	items: [{
		xtype: 'blankpage'
	}]
});
