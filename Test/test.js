QUnit.test("addTodo", function(assert){
  var addTodo = todo.todoFunctions.addTodo;
  var todos = [{ description: 'td1' }];
  var newTodo = { description: 'td2' };


  assert.deepEqual(
    addTodo(todos, newTodo),
    [{ description: 'td1' }, { id:0, description: 'td2',  }],
    "added the new to do"
  );
  assert.deepEqual(
    addTodo(todos, newTodo),
    [{ description: 'td1' }, { id:1, description: 'td2',  }],
    "added the second to do"
  );

  assert.deepEqual(
    addTodo(todos, newTodo),
    [{ description: 'td1' }, { id:2, description: 'td2',  }],
    "added the third to do"
  );

});
