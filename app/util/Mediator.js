/**
 * A generic observable object, used to pass events between controllers.
 *
 * @private
 */
Ext.define('icd.util.Mediator', {
	alternateClassName: ['icd.Mediator', 'Mediator'],
	singleton: true,

	mixins: [
		'Ext.mixin.Observable'
	],

	constructor: function(config) {
		this.mixins.observable.constructor.call(this, config);
	}
});
