var todo = (function() {

  var todoFunctions = {
    generateId: (function() {
      var idCounter = 0;
      return function () {
        return idCounter++;
      }
    })(),

    // adds newTodo to todos and get generateId
    addTodo: function (todos, newTodo) {
      var newTodoCopy = {};
      Object.keys(newTodo).forEach(function(key) {

        newTodoCopy[key]=newTodo[key];
      });
      newTodoCopy.id = todoFunctions.generateId();
      newTodoCopy.done = false;
      return todos.concat(newTodoCopy)
    },

    // delete todos
    deleteTodo: function (todos, idToDelete) {
      function idIsNotEqual(todo){
        return todo.id !== idToDelete;
      }
      return todos.filter(idIsNotEqual);
    },

    // toggles changes on click to done or not 
    markTodo: function(todos, idToMark) {
      return todos.map(function(todo){
        if (todo.id == idToMark){
          todo.done = !todo.done;
        }
        return todo;
      })
    },

    //array.slice, array.sort
    sortTodos: function(todos, sortFunction) {

    }
  }

  var state = [
    { id: -3, description: 'first todo', done:false},
    { id: -2, description: 'second todo', done:false},
    { id: -1, description: 'third todo', done:false}
  ];


  // add tagName (li,span,button) to newTodo
  var controller = {
    createTodoNode: function(todoData) {

      var todoNode = document.createElement('li');

      var descriptionNode = document.createElement('span');
      descriptionNode.innerHTML = todoData.description;

      if (todoData.done == true){
        descriptionNode.innerHTML += "  Done"
      }
      todoNode.appendChild(descriptionNode);

      var deleteButtonNode = document.createElement('button');
      deleteButtonNode.innerHTML = "Delete"
      deleteButtonNode.addEventListener('click', function(event) {
        state = todoFunctions.deleteTodo(state, todoData.id);
        controller.render(state);
      })
      todoNode.appendChild(deleteButtonNode);

        var markTodoButton = document.createElement('button');
        markTodoButton.innerHTML ="Done"
        markTodoButton.addEventListener('click', function(){
         state = todoFunctions.markTodo(state, todoData.id);
         controller.render(state);
        })

        todoNode.appendChild(markTodoButton);
        return todoNode;
    },

    render: function(state) {
      var todoListWrapper = document.getElementById('todo-container');
      var todoListNode = document.createElement('ul');
      state.forEach(function(todoData) {
        todoListNode.appendChild(controller.createTodoNode(todoData))
      });

      todoListWrapper.replaceChild(todoListNode, todoListWrapper.firstChild);
    }
  }

  // create addTodoForm and get text from input box
  var addTodoForm = document.getElementById('add-todo');
  addTodoForm.addEventListener('submit', function(event) {
    event.preventDefault();

    var inputDescription = event.target.description.value;

    var newTodo = {
      description: inputDescription
    };

    state = todoFunctions.addTodo(state, newTodo);

    controller.render(state);
  })

  controller.render(state);

  return { todoFunctions }
})();
