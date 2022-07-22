const { ValidarEsquema } = require("validaresquema");

function book2(title, pages) {
  this.i = 0;
  this.bookSave = [];
  return () => {
    ++i;
    bookSave.push({ i, title, pages });
    console.log(bookSave);
    return { i, title, pages };
  };
}

let a = book2("hola mundo", 1);
let b = book2("js", 500);
let c = book2("html", 250);
a();
b();
c();

let Books = (function () {
  let _i = 0;
  let _bookStore = [];
  return {
    nLibros: function () {
      console.log(_i);
    },
    add: function (title, pages) {
      _i += 1;
      _bookStore.push({ title, pages });
    },
    showBoks: function () {
      return _bookStore;
    },
  };
})();
Books.add("Moddle", 120);
Books.add("Js", 530);
Books.add("VSC", 60);
Books.add("Python", 356);
console.log(Books.showBoks()[2]);
Books.nLibros();

