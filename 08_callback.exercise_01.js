//## 01 refactor this code, using named function and passing them as callback

const fs = require('fs');

const file = './todo.txt';

const addTodo = function(err, todoList) {
  if (err) return console.log(err);

  todoList = todoList + '\n watch GOT';
  fs.writeFile(file, todoList, getTodo);
};

const getTodo = function(err) {
  if (err) return console.log(err);
  console.log('todo added!');
}

fs.readFile(file, 'utf8', addTodo)


module.exports = addTodo
