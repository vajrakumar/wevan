Ext.define('icd.view.main.MainController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.main',

	listen: {
		controller: {
			'#': {
				unmatchedroute: 'setCurrentView'
			}
		}
	},

	routes: {
		':node': 'setCurrentView'
	},

	onInitialize: function() {
		if (!window.location.hash) {
			this.redirectTo('specialtyValue');
		}
	},

	onNavTreeItemClick: Ext.emptyFn,

	onNavTreeSelectionChange: function(tree, node) {
		var routeId = node && node.get('routeId');

		if (routeId) {
			this.redirectTo(routeId);
		}
	},

	onSkittleToggle: function(container, button, pressed) {
		if (pressed) {
			this.redirectTo(button.getData().routeId);
		}
	},

	setCurrentView: function(hashTag) {
		var me = this;
		var mainBody = me.lookup('mainBody');
		var tree = me.lookup('mainNavTree');
		var store = tree.getStore();
		var node = store.findNode('routeId', hashTag);
		var item = mainBody.child('[routeId=' + hashTag + ']');

		if (!item) {
			item = {
				xtype: node.get('viewType'),
				routeId: hashTag
			};
		}

		mainBody.setActiveItem(item);
		tree.setSelection(node);
	},

	toggleNavTreeWidth: function() {
		var vm = this.getViewModel();

		if (vm.get('theme') === 'blue') {
			var toolbar = this.lookup('skittleToolbar');

			toolbar.setMicro();
		} else {
			var tree = this.lookup('mainNavTree');

			Ext.defer(function() {
				tree.setMicro(!tree.getMicro());
			}, tree.getMicro() ? 50 : 150);

			tree.toggleCls('main-navtree-collapsed');
		}
	},

	/**
	 *	@event click
	 *	Description
	 *	
	 *	@param {Ext.event.Event} [e] The Ext.event.Event encapsulating the DOM event.
	 *	@param {HTMLElement} [t] The target of the event.
	 */
	changeTheme: function(e, t) {
		this.getViewModel().set('theme', t.dataset.theme);
	}
});
