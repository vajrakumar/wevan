/**
 *	Base class that provides an interface for publishing events between controllers.
 *
 *	Include the mixin to the controller:
 *	@example:
 *	mixins: [
 *		'icd.mixin.Mediator'
 *	]
 *
 *	If you want to listen for events from other controllers then "subscribe" to the events:
 *	@example:
 *	subscribe: {
 *		updatefilters: 'onUpdateFilters'
 *	}
 *
 *	If you want to broadcast an event to other controllers then "publish" the event (with params):
 *	@example:
 *	controller.publish('updatefilters', cmp, filters, callback);
 *
 */
Ext.define('icd.mixin.Mediator', {
	extend: 'Ext.Mixin',

	requires: [
		'icd.util.Mediator'
	],

	mixinConfig: {
		id: 'mediator',
		before: {
			init: 'beforeInit'
		}
	},

	/**
	 *	Add listeners for each configured controller subscription.
	 */
	beforeInit: function() {
		var me = this;

		if (Ext.isObject(me.subscribe)) {
			Ext.Object.each(me.subscribe, me.addSubscription, me);
		}
	},

	/**
	 *	Fire the publish event.
	 *
	 *	@param {String} [eventName] The name of the event to publish.
	 */
	publish: function() {
		this.fireEvent.apply(Mediator, arguments);
	},

	/**
	 *	Add a managed listener for the individual subscription.  Similar to `addListener` the `fn` parameter
	 *	can be a function or an object containing handler configurations (e.g. buffer, delay, scope, etc...).
	 *
	 *	@param {String} [eventName] The name of the event to listen for. May also be an object who's property names
	 *	are event names.
	 *	@param {Function/String} [fn] The method the event invokes or the name of the method within the specified
	 *	scope. Will be called with arguments given to Ext.util.Observable.fireEvent plus the options parameter
	 *	described below.
	 */
	addSubscription: function(eventName, fn) {
		var me = this;

		if (Ext.isSimpleObject(fn)) {
			var options = {};

			options[eventName] = Ext.applyIf(fn, {
				scope: me
			});

			Mediator.on(options);
		} else {
			if (Ext.isString(fn)) {
				fn = me[fn];
			}

			Mediator.on(eventName, fn, me);
		}
	}
});
