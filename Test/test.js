QUnit.test("addTodo", function(assert){
  var addTodo = todo.todoFunctions.addTodo;
  var todos = [];
  var newTodo = { description: 'td2' };

 assert.deepEqual(addTodo(todos, newTodo),
  [{id:0, description: 'td2'}],
  "adds id")
  assert.deepEqual(addTodo(todos, newTodo),
    [{id:1, description: 'td2'}],
    "adds id"
  )

  todos = addTodo(todos, newTodo);
  todos = addTodo(todos, newTodo);
   assert.notEqual(todos[0].id, todos[1].id,"ids should be different");

})
