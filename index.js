window.onload = () => {
  function* gen() {
    var x = yield 10;
  }

  var myGen = gen();

  console.log(myGen.next());
  console.log(myGen.next());
};

// https://www.youtube.com/watch?v=pnS2lBQuLGc&list=PL4cUxeGkcC9jAhrjtZ9U93UMIhnCc44MH&index=5
