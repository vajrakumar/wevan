Ext.define('icd.view.modules.TableauVizContainer', {
	extend: 'Ext.Panel',
	xtype: 'icd-tableauvizcontainer',

	config: {
		/**
		 *	@cfg {Tableau Viz} [viz]
		 *	The embedded Tableau visualization.
		 */
		viz: null,

		/**
		 *	@cfg {String} [vizUrl]
		 *	The embedded Tableau visualization's URL.
		 */
		vizUrl: '',

		/**
		 *	@cfg {String[]} [publishFilterFields] 
		 *	An array of field name values that should be published when it's filter is applied.  Set to `true` to 
		 *	publish all filter changes.
		 */
		publishFilterFields: '',

		/**
		 *	@cfg {String[]} [subscribeFilterFields] 
		 *	An array of field name values that will be used for calling `applyFilterAsync`.
		 */
		subscribeFilterFields: '',

		/**
		 *	@cfg {String} [publishSelectionField] 
		 *	The field name to publish when a selection happens.
		 */
		publishSelectionField: '',

		/**
		 *	@cfg {String} [subscribeSelectionField] 
		 *	The field name value that will be used for calling `selectMarksAsync`.
		 */
		subscribeSelectionField: ''
	},

	controller: 'icd-tableauvizcontainer',

	element: {
		reference: 'element',
		children: [{
			reference: 'vizEl',
			style: 'height:100%;'
		}]
	},

	listeners: {
		resize: 'setFrameSize'
	}
});
