// deleteTodo tests
QUnit.test( "deleteTodo function test", function( assert ) {
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

QUnit.test( "deleteTodo function basic test", function( assert ) {
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

// QUnit.test( "test deleteTodo function", function( assert ) {
//   var deleteTodo = todo.todoFunctions.deleteTodo;
//   var testTodos = [
//     {id: 1, description: "first todo", done: false},
//   ];
//   var expectedOutput = [
//     {id:  , description: "second todo", done: false}
//   ];
//   assert.deepEqual(
//     deleteTodo(testTodos, 1),
//     expectedOutput,
//     "Function should delete any element with id = idToDelete"
//   );
// });
