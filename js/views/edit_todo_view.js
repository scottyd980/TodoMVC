Todos.EditTodoView = Ember.TextField.extend({
	classNames: ['edit'],

	insertNewline: function() {
		this.get('controller').acceptChanges();
		
		// Temp fix for ember-data issue with enter
		this.$().blur();
	},

	focusOut: function() {
		this.get('controller').acceptChanges();
	},

	didInsertElement: function () {
	    this.$().focus();
	  }
})