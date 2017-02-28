// tests for addTodo
QUnit.test("addTodo test", function(assert){
  var addTodo = todo.todoFunctions.addTodo;
  var todos = [];
  var newTodo = { description: 'td2' };

  assert.deepEqual(
    addTodo(todos, newTodo),
    [{id:0, description: 'td2'}],
    "adds id"
  );
  assert.deepEqual(
    addTodo(todos, newTodo),
    [{id:1, description: 'td2'}],
    "adds id"
  );

  todos = addTodo(todos, newTodo);
  todos = addTodo(todos, newTodo);
  assert.notEqual(todos[0].id, todos[1].id,"ids should be different");
});

// deleteTodo tests
QUnit.test( "deleteTodo function test for deleting nothing", function( assert ) {
  var deleteTodo = todo.todoFunctions.deleteTodo;
  var testTodos = [
    {id: 0, description: "first todo", done: false}
  ];
  assert.deepEqual(
    deleteTodo(testTodos, 1),
    testTodos,
    "deleting no todos should returm same array"
  );
});

QUnit.test( "deleteTodo function test for deleting one item", function( assert ) {
  var deleteTodo = todo.todoFunctions.deleteTodo;
  var testTodos = [
    {id: 2, description: "first todo", done: false}
  ];
  assert.deepEqual(
    deleteTodo(testTodos, 2),
    [],
    "Delete Elements with id=2"
  );
});

QUnit.test( "test deleteTodo function deleting one todo item", function( assert ) {
  var deleteTodo = todo.todoFunctions.deleteTodo;
  var testTodos = [
    {id: 1, description: "first todo", done: false},
    {id: 2, description: "second todo", done: false}
  ];
  var expectedOutput = [
    {id: 2, description: "second todo", done: false}
  ];
  assert.deepEqual(
    deleteTodo(testTodos, 1),
    expectedOutput,
    "Function should delete only todo item with id=1"
  );
});
