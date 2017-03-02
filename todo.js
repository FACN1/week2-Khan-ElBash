var todo = (function() {


  // each of these functions takes an array todos
  // [todo]
  // where a todo has the form
  // {
  //   id: /*the id of the todo*/,
  //   description: /*the description of the todo item*/,
  //   done: /*true or false, indicates whether the todo is done*/
  // }
  // example : { id : 0, description : Eat flafel, done:false}

  var todoFunctions = {
    generateId: (function() {
      var idCounter = 0;
      return function () {
        return idCounter++;
      }
    })(),
    addTodo: function (todos, newTodo) {
      var newTodoCopy = helpers.shallowObjectCopy(newTodo);
      newTodoCopy.id = todoFunctions.generateId();
      newTodoCopy.done = false;
      return todos.concat(newTodoCopy)
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

  var helpers = {
    shallowObjectCopy: function (obj) {
      var objCopy = {};
      Object.keys(obj).forEach(function (key) {
        objCopy[key] = obj[key];
      });
      return objCopy
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

      // this adds span holding description
      var descriptionNode = document.createElement('span');
      descriptionNode.innerHTML = todoData.description;

      if (todoData.done == true){
        descriptionNode.innerHTML += " (done)"
      }

      todoNode.appendChild(descriptionNode);

      // this adds the delete button
      var deleteButtonNode = document.createElement('button');
      deleteButtonNode.innerHTML = "Delete"
      deleteButtonNode.addEventListener('click', function(event) {
        state = todoFunctions.deleteTodo(state, todoData.id);
        controller.render(state);
      })
      todoNode.appendChild(deleteButtonNode);
        // adds a button which toggles the to-do if its done
        var markTodoButton = document.createElement('button');
        markTodoButton.innerHTML ="Toggle Done"
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

  // bind create todo form
  var addTodoForm = document.getElementById('add-todo');
  addTodoForm.addEventListener('submit', function(event) {
  console.log('submit!!!');
    // what does event.preventDefault do?
    // it stops the page from refreshing
  event.preventDefault();

    // get the text from the input box and put it in inputDescription variable
    var inputDescription = event.target.description.value; // event.target ....
    var inputText = document.getElementById("inputText").value;

    //this checks if the input is empty or filled with spaces which wont allow it
    //to submit
    if ( inputText.trim() !== ""){
      var newTodo = {
      description: inputDescription
      };
      state = todoFunctions.addTodo(state, newTodo);
      controller.render(state);
      }

      document.getElementById("inputText").value = "";

      })

      controller.render(state);

      return { todoFunctions }
      })();

     controller.render(state);
  
     return { todoFunctions }

     })();

