Ext.define('icd.view.main.Main', {
	extend: 'Ext.Container',
	xtype: 'main',

	controller: 'main',
	viewModel: 'main',

	layout: 'fit',
	userCls: 'main',

	items: [{
		xtype: 'main-header'
	}, {
		xtype: 'container',
		layout: 'fit',
		items: [{
			xtype: 'main-navtree',
			reference: 'mainNavTree',
			hidden: false,
			bind: {
				hidden: '{theme == "blue"}'
			}
		}, {
			xtype: 'icd-skittletoolbar',
			reference: 'skittleToolbar',
			docked: 'left',
			hidden: true,
			bind: {
				hidden: '{theme != "blue"}'
			}
		}, {
			xtype: 'navigationview',
			navigationBar: false,
			reference: 'mainBodyWrapper',
			items: [{
				xtype: 'main-body',
				reference: 'mainBody',
				items: [{
					xtype: 'main-toolbar'
				}]
			}]
		}]
	}],

	listeners: {
		initialize: 'onInitialize'
	}
});
