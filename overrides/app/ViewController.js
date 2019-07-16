/**
 *	Override to the ViewController to automatically include the Mediator.
 */
Ext.define('icd.overrides.app.ViewController', {
	override: 'Ext.app.ViewController',

	mixins: [
		'icd.mixin.Mediator'
	]
});
