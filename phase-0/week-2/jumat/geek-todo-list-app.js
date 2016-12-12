// Add todo list
function add (task) {
  // get existing todo list
  var todos = get_todos();
  // push new todo object into todos array
  todos.push({
    taskName : task,
    status : 'belum-selesai'
  });
  // save it into localStorage with JSON format
  localStorage.setItem('todo', JSON.stringify(todos));
  // show the updated todo list
  show();
}
// get existing todo list function
function get_todos () {
  // create new array for init
  var todos = new Array;
  // get / read from localStorage where the field name is 'todo'
  var todos_str = localStorage.getItem('todo');
  // create a condition if the localStorage is null
  if (todos_str != null) {
    // if not null, parse it into JSON format again
    todos = JSON.parse(todos_str);
  }
  // retrun the todos
  return todos;
}
// Showing the updated list
function show() {
  // Get existing todo list
  var todos = get_todos();
  // Check the todo has a number or not ?
  if (todos.length === 0) {
    // if the todos is empty have print this
    console.log('Todo list Anda kosong');
    console.log('Tambah todo list dengan perintah : add("nama task");');
  } else {
    // if not empty
    var results = '';
    // Task list on progress
    console.log('Un-finished task : ');
    // Loop the list
    for(var i=0; i < todos.length; i++) {
      // print only Un-finished todo
      if (todos[i].status !== 'selesai') {
        console.log(i + ' - ' + todos[i].taskName);
      }
    };
    // Task finished
    console.log('Finished task : ');
    // loop the list
    for(var i=0; i < todos.length; i++) {
      // Print only finished list
      if (todos[i].status === 'selesai') {
        console.log(i + ' - ' + todos[i].taskName);
      }
    };
  }
}
// remove existing list by id / index of the array of object
function remove(id) {
  // get the existing todo list
  var todos = get_todos();
  // create a temporary variable, selected by the index of the array of object
  var deletedTodo = todos[id];
  // spilce the array from index of id until the next one
  todos.splice(id, 1);
  // save the new list into localStorage
  localStorage.setItem('todo', JSON.stringify(todos));
  // Show the updated todo list
  show();
  // return the message of success removing todo
  return 'sukses menghapus ' + deletedTodo.taskName;
}
// Change status of todo, from finished to Un-finished or reverse
function changeStatus (id) {
  // get existing todo list
  var todos = get_todos();
  // create a temporary variable for ... selected by index of array
  var updatedTodo = todos[id];
  // check if the todo selected is already done
  if (updatedTodo.status === 'selesai') {
    // change it to Un-finished
    updatedTodo.status = 'belum-selesai';
  } else {
    // or reverse
    updatedTodo.status = 'selesai';
  }
  // spilce the todo from index of id until the next one, and replace it with new updated todo
  todos.splice(id, 1, updatedTodo);
  // save it into localStorage
  localStorage.setItem('todo', JSON.stringify(todos));
  // give a message that todo list already updated
  console.log('Memperbaharui status : ' + updatedTodo.taskName);
}
// For showing Instruction how to use this app
function instruction () {
  console.log('Instruction : ');
  console.log('Untuk menambah task, panggil perintah : add("nama task");');
  console.log('Untuk melihat task, panggil perintah : show();');
  console.log('Untuk menghapus task, panggil perintah : remove(indexTask);');
  console.log('Untuk mengubah status task, panggil perintah : changeStatus  (indexTask);');
  console.log('Untuk membuka instruksi ini, panggil perintah : instruction();');
}
// Welcoming message
console.log('Selamat datang di aplikasi todo list khusus untuk JS Geek.');
console.log('----------------------------------------------------------');
// call the instruction function first
instruction();
