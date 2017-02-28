QUnit.test("addTodo", function(assert){
  var todos = [{ description: 'td1' }];
  var newTodo = { description: 'td2' }
  assert.equal(
    addTodo(todos, newTodo),
    [{ description: 'td1' }, { description: 'td2', id:0 }],
    "added the new to do"
  );
});
