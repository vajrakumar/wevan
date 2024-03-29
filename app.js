/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
	extend: 'icd.Application',
	name: 'icd',

	requires: [
		// This will automatically load all classes in the icd namespace
		// so that application classes do not need to require each other.
		'icd.*'
	],

	// The name of the initial view to create.
	mainView: 'icd.view.main.Main'
});
