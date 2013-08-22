Todos.TodosController = Ember.ArrayController.extend({
	createTodo: function() {
		// Get title from the newTitle attribute in the ember text field view
		var title = this.get('newTitle');
		if(!title.trim()) { return; }

		// Create a new Todo model
		var todo = Todos.Todo.createRecord({
			title: title,
			isCompleted: false
		});

		// Clear the text field since it was entered
		this.set('newTitle', '');

		// Save the model to persist it
		todo.save();
	},

	remaining: function() {
		return this.filterProperty('isCompleted', false).get('length');
	}.property('@each.isCompleted'),

	inflection: function () {
		var remaining = this.get('remaining');
		return remaining === 1 ? 'item' : 'items';
	}.property('remaining'),

	hasCompleted: function() {
		return this.get('completed') > 0;
	}.property('completed'),

	completed: function() {
		return this.filterProperty('isCompleted', true).get('length');
	}.property('@each.isCompleted'),

	clearCompleted: function() {
		var completed = this.filterProperty('isCompleted', true);
		completed.invoke('deleteRecord');

		this.get('store').commit();
	}
});