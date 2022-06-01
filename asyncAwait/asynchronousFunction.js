// Example I
// A function marked with the async keyword.
async function foo() {
  return 42;
}

const result2 = foo();
console.log(result2);
// Output: Promise { 42 }

// Example II
// The await keyword causes the code to "wait" for a promise to become resolved without blocking the code execution.
async function foo2() {
  return 42;
}
const result3 = await foo2(); // Error SyntaxError: await is only valid in async functions
console.log(result3);
// OutPut: 42

// Example III
// Inside a function you can only use await if the calling function itself is marked with async.
async function foo3() {
  return 42;
}

function bar() {
    const result = await foo3(); // Error: await is only valid in async functions and the top level bodies of modules
    console.log(result);
}
bar(); // 'await' expressions are only allowed within async functions and at the top levels of modules.

// Example IIII
// Because the calling function is now marked async it returns a promise itself.
async function foo4() {
  return 42;
}

async function bar2() {
  // added async keyword
  const result = await foo4();
  console.log(result);
}

bar2(); // Output: 42

// Example IV Error handing
// Throwing an error inside an async function produces a rejected promise.

async function foo5() {
  throw new Error("Oops, something went wrong...");
}

async function bar3() {
  const result = await foo5();
  console.log(result);
}

bar3(); // Error: line 50

// Example V
// Errors that occur inside a try block can be caught in a catch block.
async function foo6() {
  const jsonString = '{"id":4,"title":"Using APIs}';
  const jsonData = JSON.parse(jsonString);
}

async function bar4() {
  try {
    const result = await foo6();
    console.log(result);
  } catch (err) {
    console.log(`Error: ${err.message}`);
  }
}

bar4();
// Output: Error: Unexpected end of JSON input

// Example VI
function foo7() {
  return new Promise((resolve, reject) => {
    reject(new Error("Oops, something went wrong..."));
  });
}

async function bar5() {
  try {
    const result = await foo7();
    console.log(result);
  } catch (err) {
    console.log(`Error: ${err.message}`);
  }
}

void bar5();
// Output: Error: Oops, something went wrong...
