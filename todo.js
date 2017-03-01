var todo = (function() {

  // Part 1. Fill in any missing parts of the todoFunction object!
  // you can access these on todo.todoFunctions
  // For part one we expect you to use tdd

  // each of these functions takes an array todos
  // [todo]
  // where a todo has the form
  // {
  //   id: /*the id of the todo*/,
  //   description: /*the description of the todo item*/,
  //   done: /*true or false, indicates whether the todo is done*/
  // }

  var todoFunctions = {
    generateId: (function() {
      var idCounter = 0;
      return function () {
        return idCounter++;
      }
    })(),
    addTodo: function (todos, newTodo) {
      var newTodoCopy = {};
      Object.keys(newTodo).forEach(function(key) {

        newTodoCopy[key]=newTodo[key];
      });
      newTodoCopy.id = todoFunctions.generateId();
      newTodoCopy.done = false;
      return todos.concat(newTodoCopy)
      //return arr;
      // should leave the input argument todos unchanged
      // return a new array, it should contain todos with the newTodo added to the end.
      // add an id to the newTodo. You can use the generateId function to create an id.
      // hint: array.concat
    },
    deleteTodo: function (todos, idToDelete) {
      // should leave the input argument todos unchanged
      // return a new array, this should not contain any todo with an id of idToDelete
      // hint: array.filter
      function idIsNotEqual(todo){
        return todo.id !== idToDelete;
      }
      return todos.filter(idIsNotEqual);
    },
    markTodo: function(todos, idToMark) {

      return todos.map(function(todo){
        if (todo.id == idToMark){
          todo.done = !todo.done;
        }
        return todo;
      })
    },
    sortTodos: function(todos, sortFunction) {
      // stretch goal! Do this last
      // should leave the input arguement todos unchanged
      // sortFunction will have same signature as the sort function in array.sort
      // hint: array.slice, array.sort
    }
  }

  // part 2. the Dom
  var state = [
    { id: -3, description: 'first todo', done:false},
    { id: -2, description: 'second todo', done:false},
    { id: -1, description: 'third todo', done:false}
  ]; // this is our todoList

  var controller = {
    createTodoNode: function(todoData) {
      var todoNode = document.createElement('li');

      // add span holding description
      var descriptionNode = document.createElement('span');
      descriptionNode.innerHTML = todoData.description;

      if (todoData.done == true){
        descriptionNode.innerHTML += "  Done"
      }
      // we want to add the descriptionNode to the todoNode
      todoNode.appendChild(descriptionNode);

      // this adds the delete button
      var deleteButtonNode = document.createElement('button');
      deleteButtonNode.innerHTML = "Delete"
      deleteButtonNode.addEventListener('click', function(event) {
        state = todoFunctions.deleteTodo(state, todoData.id);
        controller.render(state);
      })
      todoNode.appendChild(deleteButtonNode);

      // add markTodo button
        var markTodoButton = document.createElement('button');
        markTodoButton.innerHTML ="Done"
        markTodoButton.addEventListener('click', function(){
         state = todoFunctions.markTodo(state, todoData.id);
         controller.render(state);
        })


        todoNode.appendChild(markTodoButton);

      // add classes for css

      return todoNode;
    },
    render: function(state) {
      var todoListWrapper = document.getElementById('todo-container');
      var todoListNode = document.createElement('ul');
      state.forEach(function(todoData) {
        todoListNode.appendChild(controller.createTodoNode(todoData))
      });

      // you may want to add a class for css
      // console.log(todoListWrapper.firstChild);
      todoListWrapper.replaceChild(todoListNode, todoListWrapper.firstChild);
    }
  }

  var clickHeader = document.getElementById('click-header');
  clickHeader.addEventListener('click', function(event) {
    clickHeader.textContent = "changed";
  })

  // bind create todo form
  var addTodoForm = document.getElementById('add-todo');
  addTodoForm.addEventListener('submit', function(event) {
    console.log('submit!!!');
    // https://developer.mozilla.org/en-US/docs/Web/Events/submit
    // what does event.preventDefault do?
    // it stops the page from refreshing
    event.preventDefault();
    // what is inside event.target? the form

    // get the text from the input box and put it in inputDescription variable
    var inputDescription = event.target.description.value; // event.target ....

    // we need to create a newTodo item with the correct structure
    var newTodo = {
      description: inputDescription
    };

    // we want to add a new todo item to the state
    // you should use todoFunctions.addTodo
    state = todoFunctions.addTodo(state, newTodo);

    controller.render(state);
  })


  controller.render(state);

  return { todoFunctions }
})();
