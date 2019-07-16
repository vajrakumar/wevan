Ext.define('icd.view.home.KpiTickers', {
	extend: 'Ext.Container',
	xtype: 'icd-kpitickers',

	config: {
		store: null
	},

	controller: 'icd-kpitickers',
	viewModel: 'icd-kpitickers',

	padding: 5,
	userCls: 'icd-kpitickers',

	bind: {
		store: '{kpi-tickers}'
	},

	layout: {
		type: 'hbox',
		overflow: 'scroller'
	},

	/**
	 *	@cfg {String[]}
	 *	Template for the kpi ticker buttons.
	 */
	tpl: [
		'<tpl if="filters">',
		'	<i class="fa fa-filter"></i>',
		'<tpl elseif="selections">',
		'	<i class="fa fa-map-marker"></i>',
		'</tpl>',
		'<div class="kpitickercontainer">',
		'	<div class="kpitickercontainer-title">{title}</div>',
		'	<div class="kpitickercontainer-value font-color-{color}">{value}',
		'		<i class="fa fa-arrow-circle-{direction}"></i>',
		'	</div>',
		'	<div class="kpitickercontainer-description">{description}</div>',
		'</div>'
	],

	defaults: {
		xtype: 'panel',
		ui: 'gray-kpi',
		border: true,
		flex: 1,
		layout: 'center',
		minWidth: 190,
		bind: {
			ui: '{theme}-kpi'
		},
		listeners: {
			click: {
				fn: 'onKpiClick',
				element: 'element',
				delegate: 'div.x-panel-body-el'
			}
		}
	}
});
