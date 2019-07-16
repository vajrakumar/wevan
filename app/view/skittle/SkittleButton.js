Ext.define('icd.view.skittle.SkittleButton', {
	extend: 'Ext.Button',
	xtype: 'icd-skittlebutton',

	ui: 'blue-skittle',
	enableToggle: true,

	bind: {
		ui: '{theme}-skittle'
	},

	tpl: [
		'<div class="skittle-container">',
		'	<div class="skittle-image" style=\"background-image: url({img}) !important;\"></div>',
		'	<div class="skittle-text">{name}</div>',
		'</div>'
	]
});
