xdescribe("TODO APP", function() {
  it("should be able to add a todo item", function() {
	  //Given
	// A TODO list with n number(s) of items.
	//var sTodo = '<section id="todoapp"><header id="header"><h1>todos</h1><input id="new-todo" placeholder="What needs to be done?" autofocus></header><section id="main"><input id="toggle-all" type="checkbox"><label for="toggle-all">Mark all as complete</label><ul id="todo-list"></ul></section><footer id="footer"><span id="todo-count"><strong>0</strong> item left</span><button id="clear-completed">Clear completed</button></footer></section><footer id="info"><p>Double-click to edit a todo</p><p>Created by <a href="http://github.com/sindresorhus">Sindre Sorhus</a></p><p>Part of <a href="http://todomvc.com">TodoMVC</a></p></footer><script id="todo-template" type="text/x-handlebars-template">{{#this}}<li {{#if completed}}class="completed"{{/if}} data-id="{{id}}"><div class="view"><input class="toggle" type="checkbox" {{#if completed}}checked{{/if}}><label>{{title}}</label><button class="destroy"></button></div><input class="edit" value="{{title}}"></li>{{/this}}</script><script id="footer-template" type="text/x-handlebars-template"><span id="todo-count"><strong>{{activeTodoCount}}</strong> {{activeTodoWord}} left</span>{{#if completedTodos}}<button id="clear-completed">Clear completed ({{completedTodos}})</button>{{/if}}</script>';
	//$('body').append($(sTodo));
	var nrTodoListItems = $("#todo-list").children().length;
	var $NewTodo = $("#new-todo");
	var $TodoList = $("#todo-list");
	
	//When
	// Entering a new to item.
	$NewTodo.val("my new item.");
	e = $.Event("keyup");
	e.which = 13; // # Some key code value
	$NewTodo.trigger(e);

	//Then
	// The TODO list has been increased with one item.
	expect($TodoList.children().length).toEqual(nrTodoListItems + 1);
  });
});