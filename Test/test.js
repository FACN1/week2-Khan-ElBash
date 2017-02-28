QUnit.test("addTodo", function(assert){
  var addTodo = todo.todoFunctions.addTodo;
  var todos = [{ description: 'td1' }];
  var newTodo = { description: 'td2' };


  console.log(addTodo(todos,newTodo));
  assert.deepEqual(
    addTodo(todos, newTodo),
    [{ description: 'td1' }, { id:1, description: 'td2' }],
    "added the new to do"
  );
});
