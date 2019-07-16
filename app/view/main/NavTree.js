Ext.define('icd.view.main.NavTree', {
	extend: 'Ext.list.Tree',
	xtype: 'main-navtree',

	ui: 'gray',
	docked: 'left',
	expanderFirst: false,
	expanderOnly: false,
	scrollable: true,
	userCls: 'main-navtree',

	bind: {
		ui: '{theme}',
		selection: '{activeTab}',
		store: '{tabs}'
	},

	listeners: {
		itemclick: 'onNavTreeItemClick',
		selectionchange: 'onNavTreeSelectionChange'
	}
});
