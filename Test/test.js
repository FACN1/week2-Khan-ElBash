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

QUnit.test("markTodo", function(assert){
  var markTodo = todo.todoFunctions.markTodo;
  var todos = [{id:0, description:'td1', done:false}];
  var idToMark = 0;
  assert.deepEqual(markTodo(todos, idToMark), [{id:0, description:'td1', done:true}],
  "changed the done to true"
)
})

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
