Ext.define('icd.view.skittle.SkittleToolbar', {
	extend: 'Ext.Toolbar',
	xtype: 'icd-skittletoolbar',

	config: {
		micro: null
	},

	ui: 'blue-skittle',

	bind: {
		ui: '{theme}-skittle'
	},

	layout: {
		overflow: 'scroller'
	},

	items: [{
		xtype: 'segmentedbutton',
		vertical: true,
		defaults: {
			xtype: 'icd-skittlebutton',
			group: 'skittles'
		},
		items: [{
			pressed: true,
			data: {
				name: 'Performance<br/>and Potential',
				img: '/resources/images/skittles/Executive.svg',
				routeId: 'home'
			}
		}, {
			data: {
				name: 'Population<br/>Diagnostics',
				img: '/resources/images/skittles/Population.svg',
				routeId: 'population'
			}
		}, {
			data: {
				name: 'Condition<br/>Drivers',
				img: '/resources/images/skittles/Condition_Drivers.svg',
				routeId: 'population'
			}
		}, {
			data: {
				name: 'Financial<br/>Trends',
				img: '/resources/images/skittles/Financial.svg',
				routeId: 'population'
			}
		}, {
			data: {
				name: 'Clinical Value',
				img: '/resources/images/skittles/Clinical_Value.svg',
				routeId: 'population'
			}
		}, {
			data: {
				name: 'Provider and<br/>Network',
				img: '/resources/images/skittles/Provider.svg',
				routeId: 'population'
			}
		}, {
			data: {
				name: 'Specialty<br/>Value',
				img: '/resources/images/skittles/Specialty.svg',
				routeId: 'population'
			}
		}],
		listeners: {
			toggle: 'onSkittleToggle'
		}
	}],

	setMicro: function() {
		this.toggleCls('micro');
	}
});
