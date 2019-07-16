/**
 *	Overriding the Ext.Component to include a broadcast of events related to binding.  When binding happens an
 *	event is fired.  The event is "onbind" plus the name of the property (e.g. store, html, hidden, ...)
 *
 *	Example use case;
 *
 *	listeners: {
 *		onbindstore: function(component, value, oldValue, binding) {
 *			value.load();
 *		}
 *	}
 *
 */
Ext.define('icd.overrides.Component', {
	override: 'Ext.Component',

	privates: {
		onBindNotify: function(value, oldValue, binding) {
			binding.syncing = (binding.syncing + 1) || 1;
			this[binding._config.names.set](value);
			--binding.syncing;

			this.fireEvent('onbind' + binding._config.name.toLowerCase(), this, value, oldValue, binding);
		}
	}
});
