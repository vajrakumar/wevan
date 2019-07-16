Ext.define('icd.view.home.KpiTickersController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.icd-kpitickers',

	subscribe: {
		'selectionchange.therapeuticClass': 'onTherapeuticClassSelectionChange'
	},

	/**
	 *	@event click
	 *	Description
	 *	
	 *	@param {Ext.event.Event} [e] The Ext.event.Event encapsulating the DOM event.
	 *	@param {HTMLElement} [t] The target of the event.
	 */
	onKpiClick: function(e, t) {
		var me = this;
		var panel = Ext.fly(t).component;
		var record = panel.getViewModel().get('record');
		var filters = record.data.filters;
		var selections = record.data.selections;
		var routeId = record.data.routeId;

		if (filters || selections) {
			var bodyEl = panel.bodyElement;
			var isFilterApplied = bodyEl.hasCls('filtered');

			var notify = function(items, eventName) {
				Ext.iterate(items, function(key, value) {
					var selection = {};

					selection[key] = isFilterApplied ? [] : value;
					me.publish(eventName + '.' + key, panel, key, selection);
				});
			};

			notify(filters, 'filterchange');
			notify(selections, 'selectionchange');

			bodyEl.toggleCls('filtered');
		} else if (routeId) {
			this.redirectTo(routeId);
		}
	},

	onKpisLoad: function(store, records /*, successful, operation*/ ) {
		var view = this.getView();

		view.removeAll(true);

		var buttons = Ext.Array.map(records, function(record, position) {
			return {
				reference: record.data.itemId,
				html: view.getTpl().apply(record.data),
				margin: position === 0 ? '' : '0 0 0 5px',
				viewModel: {
					data: {
						record: record
					}
				}
			};
		});

		view.add(buttons);
	},

	onTherapeuticClassSelectionChange: function(viz, fieldName, selection) {
		var panel = this.lookup('topGrossCostPerRx');

		if (panel !== viz) {
			var record = panel.getViewModel().get('record');

			if (!Global.Array.equals(record.data.selections[fieldName], selection[fieldName])) {
				panel.bodyElement.removeCls('filtered');
			}
		}
	}
});
