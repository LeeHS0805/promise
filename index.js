const MyPromise = require('./MyPromise')

let promise = new MyPromise((resovle,reject)=>{
    setTimeout(()=>{
        resovle(11222)
    },400)
    // throw new Error('111ss');
}).then(data=>{
    console.log(data);
},error=>{
    console.log(error);
})
