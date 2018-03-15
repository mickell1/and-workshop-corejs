const addTodo = require('./08_callback.exercise_01.js')

describe('Should handle writing & reading a file', () => {
  it('Should addTodo data to text file', (done) => {
    fs = require('fs');
    // rm todo.txt
    fs.unlink('./todo.txt', (err) => {
      if(err) {throw err};
      console.log('path/file.txt was deleted');
    });

    // create a file todo.txt
    const createFile = function() {
      fs.writeFile('todo.txt', 'todo added!', function (err) {
      if (err) return console.log(err);
        console.log('Wrote todo added! in file todo.txt');
      });
    }

    // addTodo()
    setTimeout(function() {
      addTodo()

      // check the content
      function content() {
        file = fs.readFile('todo.txt', 'utf8')

        let fileLength = file.length
        expect(fileLength).toBe(1)
      }
    }, 5000)
    done()
  });
})

// // foo.js
// module.exports = function() {
//   // some implementation;
// };
//
// // test.js
// jest.mock('../foo'); // this happens automatically with automocking
// const foo = require('../foo');
//
// // foo is a mock function
// foo.mockImplementation(() => 42);
// foo();
// // > 42
