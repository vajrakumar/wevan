Ext.define('icd.view.modules.TableauVizContainerController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.icd-tableauvizcontainer',

	config: {
		/**
		 *	@cfg {Ext.Deferred} [vizReady] 
		 *	Description
		 */
		vizReady: new Ext.Deferred()
	},

	getViz: function() {
		return this.getView().getViz();
	},

	getWorkbook: function() {
		return this.getViz().getWorkbook();
	},

	getActiveSheet: function() {
		return this.getWorkbook().getActiveSheet();
	},

	getFilterChangeEventName: function(name) {
		return 'filterchange.' + name;
	},

	getSelectionChangeEventName: function(name) {
		return 'selectionchange.' + name;
	},

	createDashboard: function() {
		var me = this;
		var view = me.getView();
		var vizEl = view.vizEl;
		var subscribeSelectionField = view.getSubscribeSelectionField();
		var subscribeFilterFields = Ext.Array.from(view.getSubscribeFilterFields());

		var options = {
			':refresh': 'yes',
			':tabs': 'no',
			':toolbar': 'no',
			'height': vizEl.el.getHeight(),
			'width': vizEl.el.getWidth()
		};

		Ext.Loader.loadScript({
			url: Configuration.getTableauApiUrl(),
			onLoad: function() {
				var url = view.getVizUrl();
				var viz = new tableauSoftware.Viz(vizEl.dom, url, options);

				view.setViz(viz);

				viz.addEventListener('customviewload', function() {
					me._vizReady.resolve(me);
					me.addFilterChangeListener(viz);
					me.addMarksSelectionListener(viz);

					if (!Ext.isEmpty(subscribeSelectionField)) {
						me.addSubscription(me.getSelectionChangeEventName(subscribeSelectionField), 'onSelectionChange');
					}

					if (!Ext.isEmpty(subscribeFilterFields)) {
						subscribeFilterFields.forEach(function(fieldName) {
							me.addSubscription(me.getFilterChangeEventName(fieldName), 'onFilterChange');
						});
					}
				});
			}
		});
	},

	getSelectionFromMarks: function(marks, fieldName) {
		var selection = {};
		selection[fieldName] = [];

		marks.forEach(function(mark) {
			mark.getPairs().forEach(function(pair) {
				if (pair.fieldName === fieldName) {
					selection[fieldName].push(pair.value);
				}
			});
		});

		return selection;
	},

	addMarksSelectionListener: function(viz) {
		var me = this;
		var view = me.getView();
		var fieldName = view.getPublishSelectionField();

		if (!Ext.isEmpty(fieldName)) {
			viz.addEventListener(tableau.TableauEventName.MARKS_SELECTION, function(e) {
				e.getMarksAsync().then(function(marks) {
					me.publish(me.getSelectionChangeEventName(fieldName), viz, fieldName, me.getSelectionFromMarks(marks, fieldName));
				});
			});
		}
	},

	onSelectionChange: function(eViz, fieldName, newSelection) {
		var me = this;
		var view = me.getView();

		if (view.getViz() !== eViz && !Ext.isEmpty(fieldName)) {
			var sheet = me.getActiveSheet();

			sheet.getSelectedMarksAsync().then(function(marks) {
				var oldSelection = me.getSelectionFromMarks(marks, fieldName);

				if (!Global.Array.equals(newSelection[fieldName], oldSelection[fieldName])) {
					if (Ext.isEmpty(newSelection[fieldName])) {
						sheet.selectMarksAsync(oldSelection, tableau.SelectionUpdateType.REMOVE);
					} else {
						sheet.selectMarksAsync(newSelection, tableau.SelectionUpdateType.REPLACE);
					}
				}
			});
		}
	},

	addFilterChangeListener: function(viz) {
		var me = this;
		var view = me.getView();
		var fields = Ext.Array.from(view.getPublishFilterFields());

		if (!Ext.isEmpty(fields)) {
			viz.addEventListener(tableau.TableauEventName.FILTER_CHANGE, function(e) {
				var fieldName = e.getFieldName();
				var selection = {};

				if (fields[0] === true || Ext.Array.contains(fields, fieldName)) {
					e.getFilterAsync().then(function(filter) {
						selection[fieldName] = Ext.Array.map(filter.getAppliedValues(), function(item) {
							return item.value;
						});

						me.publish(me.getFilterChangeEventName(fieldName), viz, fieldName, selection);
					});
				}
			});
		}
	},

	onFilterChange: function(eViz, fieldName, newSelection) {
		var me = this;
		var view = me.getView();
		var oldSelection = [];

		if (view.getViz() !== eViz) {
			var sheet = me.getActiveSheet();

			sheet.getFiltersAsync().then(function(filters) {
				Ext.each(filters, function(filter) {
					if (filter.getFieldName() === fieldName) {
						filter.getAppliedValues().forEach(function(value) {
							oldSelection.push(value.value);
						});
					}

					return false;
				});

				if (!Global.Array.equals(newSelection[fieldName], oldSelection)) {
					if (Ext.isEmpty(newSelection[fieldName])) {
						sheet.clearFilterAsync(fieldName);
					} else {
						sheet.applyFilterAsync(fieldName, newSelection[fieldName], tableau.FilterUpdateType.REPLACE);
					}
				}
			});
		}
	},

	/**
	 *	@event resize
	 *	The Modern library doesn't have a `boxready` event so I'm letting the initial `resize` event handle the
	 *	dashboard creation.
	 *	
	 *	@param {Ext.Panel} [view] The Tableau Viz Container.
	 *	@param {Number} [width] The inner element's width.
	 *	@param {Number} [height] The inner element's height.
	 */
	setFrameSize: function(view /*, width, height*/ ) {
		var me = this;
		var viz = view.getViz();
		var vizEl = view.vizEl;

		if (!Ext.isEmpty(viz)) {
			me._vizReady.then(function() {
				viz.setFrameSize(vizEl.el.getWidth(), vizEl.el.getHeight());
			});
		} else {
			me.createDashboard();
		}
	}
});
