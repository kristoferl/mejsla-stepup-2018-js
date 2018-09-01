const fetch = require('node-fetch');
const util = require('util');
const {promisify} = util;
const delay = promisify(setTimeout);

const person = {name: 'kristofer', height: 'tall'};
const account = {accountName: 'spara', amount: 1000};
const car = {
  brand: 'Skoda',
  specification: {
    outside: {
      color: 'red',
      glossy: true
    },
    inside: {
      color: 'black',
      smoothLeather: true,
    }
  }
};
const everythingImportant = {person, account, car};

const promises = [
  new Promise(async (resolve) => {
    await delay(3000);
    resolve('krille');
  }),
  new Promise(async (resolve) => {
    await delay(5000);
    resolve('kakan');
  }),
  new Promise(resolve => {
    return setTimeout(() => resolve('kalle'), 5000);
  }),
];


let loading = true;
const getData = (url) => {
  loading = true;
  return fetch(url)
    .then(function (response) {
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        return response.json();
      }
      // console.log(response);
      throw new TypeError("Oops, we haven't got JSON!");
    })
    .then(function (json) {
      console.log('hurrah! JSON')
    })
    .catch(function (error) {
      console.log(error);
    })
};


// It all starts here
(async function main() {
  console.log('Hello');
  // 1. Do some spread and rest test on `everythingImportant`
  // console.log(util.inspect(everythingImportant, {showHidden: false, depth: null}));
  //
  // 2. Set `loading` to false after each finished `getData` call. Use Promise.finally to achieve it.
  // await getData('https://opinionated-quotes-api.gigalixirapp.com/v1/quotes');
  // console.log(`Loading should be false: loading=${loading}`);
  // await getData('https://www.google.com');
  // console.log(`Loading should be false: loading=${loading}`);
  //
  // 3. Loop though all elements in `promises` and print the result of each promise.
})();
