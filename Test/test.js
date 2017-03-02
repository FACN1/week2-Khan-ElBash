// addTodo tests
QUnit.test("addTodo test", function(assert){
  var addTodo = todo.todoFunctions.addTodo;
  var todos = [];
  var newTodo = { description: 'td2', done:false };

  assert.deepEqual(
    addTodo(todos, newTodo),
    [{id:0, description: 'td2', done:false}],
    "adds id"
  );
  assert.deepEqual(
    addTodo(todos, newTodo),
    [{id:1, description: 'td2', done:false}],
    "adds id"
  );

  todos = addTodo(todos, newTodo);
  todos = addTodo(todos, newTodo);
  assert.notEqual(todos[0].id, todos[1].id,"ids should be different");
});

// deleteTodo tests , delete todos
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

// markTodo tests , change the done to true
QUnit.test("markTodo", function(assert){
  var markTodo = todo.todoFunctions.markTodo;
  var todos = [{id:0, description:'td1', done:false}];
  var idToMark = 0;
  assert.deepEqual(markTodo(todos, idToMark), [{id:0, description:'td1', done:true}],
  "changed the done to true"
)
});

QUnit.test("test markTodo when it should do nothing", function(assert){
  var markTodo = todo.todoFunctions.markTodo;
  var todos = [{id:0, description:'td1', done:false}];
  var idToMark = 1;
  var expectedOutput = [{id:0, description:'td1', done:false}];
  assert.deepEqual(
    markTodo(todos, idToMark),
    expectedOutput,
    "when idToMark is not in array of todos, should return same array"
  );
});

QUnit.test("markTodoTest2", function(assert){
  var markTodo = todo.todoFunctions.markTodo;
  var todos = [{id:0, description:'td1', done:false},{id:1, description:'td2', done:true},{id:2, description:'td3', done:false} ];
  var idToMark = 1;
  assert.deepEqual(markTodo(todos, idToMark), [{id:0, description:'td1', done:false},
  {id:1, description:'td2', done:false},
  {id:2, description:'td3', done:false} ],
  "changed the done in the second object to false"
)
})

QUnit.test("markTodoTest3", function(assert){
  var markTodo = todo.todoFunctions.markTodo;
  var todos = [{id:0, description:'td1', done:false},{id:1, description:'td2', done:true},{id:2, description:'td3', done:false} ];
  var idToMark = 2;
  assert.deepEqual(markTodo(todos, idToMark), [{id:0, description:'td1', done:false},
  {id:1, description:'td2', done:true},
  {id:2, description:'td3', done:true} ],
  "changed the done in the third obbject to true"
)
})
