const PENDING = "PENDING",
  FUFILLED = "FUFILLED",
  REJECTED = "REJECTED";

class MyPromise {
  constructor(excutor) {
    this.status = PENDING;
    this.value = undefined;
    this.reason = undefined;
    this.onFufilledCallbacks = [];
    this.onRejectedCallbacks = [];

    const resolve = (value) => {
      if ((this.status = PENDING)) {
        this.status = FUFILLED;
        this.value = value;
        this.onFufilledCallbacks.forEach(fn=>fn())
      }
    };
    const reject = (reason) => {
      if (this.status == PENDING) {
        this.status = REJECTED;
        this.reason = reason;
      }
      this.onRejectedCallbacks.forEach(fn=>fn())
    };
    try {
        excutor(resolve,reject)
    } catch (error) {
        reject(error)
    }
  }
  then(onFufilled,onRejected){
    if(this.status==FUFILLED){
        onFufilled(this.value)
    }
    if(this.status==REJECTED){
        onRejected(this.reason)
    }
    if(this.status=PENDING){
      this.onFufilledCallbacks.push(()=>{
        onFufilled(this.value)
      })
      this.onRejectedCallbacks.push(()=>{
        onRejected(this.reason)
      })
    }
  }
}
module.exports = MyPromise
