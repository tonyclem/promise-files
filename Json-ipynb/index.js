// JSON
// JavaScript Object Notation

// JSON is a standard for encoding JavaScript objects as plain text (strings). All HTTP communication is based on text transfers. The JSON format was created to enable the transfer of JavaScript objects across the Internet by encoding them in JSON at the sending side and decoding them to a corresponding JavaScript object at the receiving side.

// Example I
const jsonString = '{"id": 4,"title": "Using APIs"}';

console.log(1, typeof jsonString);
console.log(2, jsonString);

// 1 string
// 2 {"id": 4,"title": "Using APIs"}

// Example II

// JSON.parse()
// JSON strings can be decoded through the JSON.parse() method.

const jsonString2 = `{
    "id": 4,
    "title": "Using APIs"
  }`;

const jsonData = JSON.parse(jsonString2);

console.log(1, typeof jsonData);
console.log(2, jsonData);

// 1 object
// 2 { id: 4, title: 'Using APIs' }

// Example III
// White space in JSON text helps human readers to see the structure of the data. The computer does not need or care about white space.

const jsonString3 = '{"id":4,"title":"Using APIs"}';

const jsonData2 = JSON.parse(jsonString3);
console.log(1, typeof jsonData2);
console.log(2, jsonData2);

// Example IV
// A corrupt JSON string encoding will cause JSON.parse() to throw and error.
// There is a quote missing after Using APIs
const jsonString4 = '{"id":4,"title":"Using APIs"}';

const jsonData3 = JSON.parse(jsonString4);

console.log(1, jsonData3);

// Example V
// JSON.stringify()
// To encode a JavaScript object as JSON text we can use the JSON.stringify() method. By default it doesn't add white space.

const jsonData4 = {
  id: 4,
  title: "Using APIs",
};

const jsonString5 = JSON.stringify(jsonData4);

console.log("62 =", 1, typeof jsonData4);
console.log("63 =", 2, typeof jsonString5);
console.log("64 =", 3, jsonString5);

// Example VI
// To include white space (for human consumption only) we can add parameters to JSON.stringify().

const jsonData5 = {
  id: 4,
  title: "Using APIs",
};

function replacer(key, value) {
  // Filtering out properties
  if (typeof value === "string") {
    return "clement";
  }
  return value;
}

// add line breaks and indent with two spaces.
const jsonString6 = JSON.stringify(jsonData5, replacer, 2);

console.log(1, typeof jsonData5);
console.log(2, typeof jsonString6);
console.log(3, jsonString6);
