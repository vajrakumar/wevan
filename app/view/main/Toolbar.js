Ext.define('icd.view.main.Toolbar', {
	extend: 'Ext.Toolbar',
	xtype: 'main-toolbar',

	docked: 'top',

	items: [{
		xtype: 'button',
		ui: 'header',
		handler: 'toggleNavTreeWidth',
		hidden: true,
		iconCls: 'x-fa fa-bars',
		margin: '0 10 0 0'
	}, {
		xtype: 'component',
		margin: '0 12 0 4',
		bind: {
			html: '{activeTab.text}'
		}
	}, {
		xtype: 'spacer'
	}, {
		xtype: 'button',
		ui: 'header',
		hidden: true,
		iconCls: 'x-fa fa-bell',
		margin: '0 10 0 0',
		text: 'Alerts',
		bind: {
			badgeText: '{alertsCnt}'
		}
	}, {
		xtype: 'button',
		ui: 'header',
		hidden: true,
		iconCls: 'x-fa fa-announcement',
		margin: '0 10 0 0',
		text: 'Announcements',
		bind: {
			badgeText: '{announcementsCnt}'
		}
	}, {
		xtype: 'button',
		ui: 'header',
		hidden: true,
		iconCls: 'x-fa fa-download',
		margin: '0 10 0 0',
		text: 'Downloads',
		bind: {
			badgeText: '{downloadCnt}'
		}
	}, {
		xtype: 'button',
		ui: 'header',
		iconCls: 'x-fa fa-download',
		text: 'Export',
		menu: [{
			text: 'Excel',
			iconCls: 'x-fa fa-file-excel-o'
		}, {
			text: 'PDF',
			iconCls: 'x-fa fa-file-pdf-o'
		}, {
			text: 'Image',
			iconCls: 'x-fa fa-picture-o'
		}]
	}]
});
