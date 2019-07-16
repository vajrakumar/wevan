Ext.define('icd.view.ThemeButton', {
	extend: 'Ext.Component',
	xtype: 'icd-themebutton',

	userCls: 'icd-themebutton',
	data: ['gray', 'blue', 'red'],

	tpl: [
		'<tpl for=".">',
		'<i data-theme="{.}" class="fa fa-circle {.}"></i>',
		'</tpl>'
	],

	listeners: {
		click: {
			fn: 'changeTheme',
			element: 'element',
			delegate: 'i.fa'
		}
	}
});
