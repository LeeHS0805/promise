const PENDING = "PENDING",
  FUFILLED = "FUFILLED",
  REJECTED = "REJECTED";

class MyPromise {
  constructor(excutor) {
    this.status = PENDING;
    this.value = undefined;
    this.reason = undefined;

    const resolve = (value) => {
      if ((this.status = PENDING)) {
        this.status = FUFILLED;
        this.value = this.value;
      }
    };
    const reject = (reason) => {
      if (this.status == PENDING) {
        this.status = REJECTED;
        this.reason = reason;
      }
    };
    try {
        excutor(resove,reject)
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
  }
}
module.exports = MyPromise
