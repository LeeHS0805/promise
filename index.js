const MyPromise = require('./MyPromise')

let promise = new MyPromise((resovle,reject)=>{
    resovle(11)
    throw new Error('111ss');
}).then(data=>{
    console.log(data);
},error=>{
    console.log(111);
})
