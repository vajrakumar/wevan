Ext.define('icd.view.home.Home', {
	extend: 'Ext.Container',
	xtype: 'icd-home',

	layout: 'vbox',
	padding: '7px 5px 5px',

	defaults: {
		xtype: 'container'
	},

	items: [{
		xtype: 'icd-kpitickers'
	}, {
		layout: 'hbox',
		flex: 1,
		platformConfig: {
			desktop: {
				hidden: false
			},
			'!desktop': {
				hidden: true
			}
		},
		defaults: {
			xtype: 'icd-portlet',
			margin: 5
		},
		items: [{
			title: 'Therapeutic Class by Gross Cost',
			flex: 2,
			items: [{
				xtype: 'icd-tableauvizcontainer',
				publishFilterFields: true,
				publishSelectionField: 'therapeuticClass',
				subscribeFilterFields: ['currentRank'],
				subscribeSelectionField: 'therapeuticClass',
				vizUrl: 'https://tableaucii.dev.va.antheminc.com/views/ICD_DEMO_WORKBOOK/Treemap'
			}]
		}, {
			title: 'Therapeutic Class by Script Count',
			flex: 1,
			items: [{
				xtype: 'icd-tableauvizcontainer',
				publishFilterFields: true,
				publishSelectionField: 'therapeuticClass',
				subscribeFilterFields: ['currentRank'],
				subscribeSelectionField: 'therapeuticClass',
				vizUrl: 'https://tableaucii.dev.va.antheminc.com/views/ICD_DEMO_WORKBOOK/PackedBubbles'
			}]
		}]
	}, {
		xtype: 'icd-portlet',
		title: 'Top 25 Specialty Drugs',
		flex: 1,
		margin: 5,
		items: [{
			xtype: 'icd-home-pharmacygrid'
		}]
	}]
});
