Ext.define('icd.view.page.BlankPage', {
	extend: 'Ext.Container',
	xtype: 'blankpage',

	viewModel: {
		data: {
			title: 'Coming Soon!',
			subtitle: 'Stay tuned for updates.'
		}
	},

	cls: 'blank-page-container',

	layout: {
		type: 'vbox',
		align: 'center',
		pack: 'center'
	},

	bind: {
		html: '<div class="fa-outer-class"><span class="x-fa fa-hourglass-start"></span></div>' +
			'<h1>{title}</h1>' +
			'<span class="blank-page-text">{subtitle}</span>'
	}
});
