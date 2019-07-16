Ext.define('icd.view.main.MainModel', {
	extend: 'Ext.app.ViewModel',
	alias: 'viewmodel.main',

	data: {
		activeTab: '',
		alertsCnt: 3,
		announcementsCnt: 1,
		downloadCnt: 5,
		notificationsCnt: 3,
		theme: 'gray'
	},

	formulas: {
		getBranding: {
			bind: {
				bindTo: '{theme}'
			},
			get: function(theme) {
				var map = {
					red: 'university-of-cincinnati.svg'
				};

				return 'resources/images/' + (map[theme] || 'icd-logo.svg');
			}
		}
	},

	stores: {
		'tabs': {
			type: 'tree',
			fields: [{
				name: 'text'
			}],
			root: {
				expanded: true,
				children: [{
					text: 'Performance',
					iconCls: 'x-fa fa-dashboard',
					leaf: true,
					routeId: 'peformanceAndPotential',
					viewType: 'blankpage'
				}, {
					text: 'Population',
					iconCls: 'x-fa fa-users',
					leaf: true,
					routeId: 'populationDiagnostics',
					viewType: 'blankpage'
				}, {
					text: 'Condition Drivers',
					iconCls: 'x-fa fa-line-chart',
					leaf: true,
					routeId: 'conditionDrivers',
					viewType: 'blankpage'
				}, {
					text: 'Financial Trends',
					iconCls: 'x-fa fa-usd',
					leaf: true,
					routeId: 'financialTrends',
					viewType: 'blankpage'
				}, {
					text: 'Clinical Value',
					iconCls: 'x-fa fa-stethoscope',
					leaf: true,
					routeId: 'clinicalValue',
					viewType: 'blankpage'
				}, {
					text: 'Provider',
					iconCls: 'x-fa fa-medkit',
					leaf: true,
					routeId: 'providerAndNetwork',
					viewType: 'blankpage'
				}, {
					text: 'Specialty Value',
					iconCls: 'x-fa fa-magic',
					leaf: true,
					routeId: 'specialtyValue',
					viewType: 'icd-home'
				}]
			}
		}
	}
});
