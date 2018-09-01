function getAmount(userId) {
  return getUser(userId).then(getBankBalance);
}

async function getAmountAsync(userId) {
  const user = await getUser(userId);
  const amount = await getBankBalance(user);
  return amount;
}

function getUser(userId) {
  return new Promise(resolve => {
    setTimeout(() => resolve('kristofer'), 1000);
  });
}

function getBankBalance(user) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (user === 'kristofer') {
        resolve('123456');
      } else {
        reject('unknown user');
      }
    }, 1000);
  });
}

function doubleIt(input) {
  if(input % 2 === 0) {
    return new Promise((resolve, reject) => reject(`Do not like: ${input}`))
  }
  return new Promise(resolve => resolve(input * 2))
}

// It all starts here
(async function main() {
  const syncValue = await getAmount('1');
  console.log(`getAmount: ${syncValue}`);
  const asyncValue = await getAmountAsync('1');
  console.log(`getAmountAsync: ${asyncValue}`);

  // 1. Test a `sync function` that throws an error. throw new Error('oops')
  // 2. Await a Promise
  // 3. Use try-catch around an async function
  // 4. Call .then().cathc() on an async function
  // 5. Do Promise.all() over an array of promises
})();
