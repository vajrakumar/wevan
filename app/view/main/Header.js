Ext.define('icd.view.main.Header', {
	extend: 'Ext.Toolbar',
	xtype: 'main-header',

	docked: 'top',
	height: 60,
	style: 'background-color:#fff;',
	userCls: 'main-header',

	items: [{
		xtype: 'container',
		layout: {
			type: 'hbox',
			align: 'center'
		},
		items: [{
			xtype: 'image',
			alt: 'Interactive Client Dashboards',
			height: 30,
			src: 'resources/images/icd-logo.svg',
			style: 'background-position: left;',
			width: 30,
			bind: {
				src: '{getBranding}'
			}
		}, {
			xtype: 'label',
			userCls: 'app-title',
			html: 'Interactive Client Dashboards'
		}]
	}, {
		xtype: 'button',
		ui: 'header',
		handler: 'toggleNavTreeWidth',
		iconCls: 'x-fa fa-bars',
		margin: '0 10 0 0'
	}, {
		xtype: 'spacer'
	}, {
		xtype: 'button',
		ui: 'header',
		iconCls: 'x-fa fa-bell',
		margin: '0 10 0 0',
		text: 'Notifications',
		bind: {
			badgeText: '{notificationsCnt}'
		}
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
		iconCls: 'x-fa fa-bullhorn',
		margin: '0 10 0 0',
		text: 'Announcements',
		bind: {
			badgeText: '{announcementsCnt}'
		}
	}, {
		xtype: 'button',
		ui: 'header',
		iconCls: 'x-fa fa-download',
		margin: '0 10 0 0',
		text: 'Downloads',
		bind: {
			badgeText: '{downloadCnt}'
		}
	}, {
		xtype: 'button',
		ui: 'header',
		hidden: true,
		iconCls: 'x-fa fa-question-circle',
		margin: '0 10 0 0',
		text: 'Resources'
	}, {
		xtype: 'icd-themebutton'
	}]
});
