const MyPromise = require("./Promise9");

let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('success');
  }, 1000)
})

let p2 = new Promise((resolve, reject) => {
  reject('error');
})

MyPromise.allSettled([p2, p1]).then((res) => {
  console.log(res);
})



