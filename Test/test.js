QUnit.test("addTodo", function(assert){
  var addTodo = todo.todoFunctions.addTodo;
  var todos = [];
  var newTodo = { description: 'td2' };


  assert.deepEqual(
    addTodo(todos, newTodo),
    [{ id:0, description: 'td2'}],
    "added the new to do"
  );
  assert.deepEqual(
    addTodo(todos, newTodo),
    [{ id:1, description: 'td2'}],
    "added the second to do"
  );

  assert.deepEqual(
    addTodo(todos, newTodo),
    [{id:2, description:'td2'}],
    "added the third to do"
  );

});
// function Test for markTodo
QUnit.test("markTodo", function(assert){
  var markTodo = todo.todoFunctions.markTodo;
  var todos = [{ id:0, description: 'td1', done:false }];
  var idToMark = todo.todoFunctions.generateId;

  assert.deepEqual(
    markTodo(todos, idToMark),
    [{ id:0, description: 'td1', done:true}],
    "Its Done (the done  turned true)"
  );


  assert.deepEqual(
    markTodo(todos, idToMark),
    [{id:1, description: 'td1', done: true}],
    "Its Done (the done  turned true)"
  );




})
