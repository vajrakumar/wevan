/**
 *	Global utility class.
 */
Ext.define('icd.util.Global', {
	alternateClassName: ['icd.Global', 'Global'],
	singleton: true,

	Array: {
		/**
		 *	Shallow compares the contents of 2 arrays.
		 * 
		 *	@param {Array} array1 
		 *	@param {Array} array2 
		 *	@return {Boolean} `true` if the arrays are equal.
		 */
		equals: function(array1, array2) {
			return Ext.Array.equals(array1.sort(), array2.sort());
		}
	},

	/**
	 *	Creates a function that invokes the passed function once it's called n or more times.
	 *
	 *	@param {Number} [n] The number of calls before func is invoked.
	 *	@param {Function} [func] The function to restrict.
	 *	@param {Object} [scope] The scope (this reference) in which the handler function is executed.
	 *	@return {Function} Returns the new restricted function.
	 *
	 *	@example
	 *	var saves = ['profile', 'settings'];
	 *
	 *	var done = Global.after(saves.length, function() {
	 *		console.log('done saving!');
	 *	});
	 *
	 *	Ext.each(saves, function(type) {
	 *		done();
	 *	});
	 *	// => Logs 'done saving!' after the two async saves have completed.
	 */
	after: function after(n, func, scope) {
		return function() {
			if (--n < 1) {
				return func.apply(scope || this, arguments);
			}
		};
	}
});
