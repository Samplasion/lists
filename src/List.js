const deprecate = require('deprecate')

class List extends Array {
  constructor(...args) {
    super(...args)
  }
  
  static fromArr(arr) {
    var list = new List()
    list.pushArr(arr)
    return list
  }
  
  pushArr(arr) {
    arr.forEach(i => this.push(i))
    return this;
  }

  random() {
    return this[Math.floor(Math.random()*this.length)]
  }
  
  even() {
    var elems = []
      , count = 0;
    for (var i of this) {
      if (count % 2 == 0) elems.push(i)
      count++
    }
    return List.fromArr(elems)
  }
  
  odd() {
    var elems = []
      , count = 0;
    for (var i of this) {
      if (count % 2 == 1) elems.push(i)
      count++
    }
    return List.fromArr(elems)
  }

  shuffle() {
    for (let i = this.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this[i], this[j]] = [this[j], this[i]]
    }
    return this
  }

  toArray() {
    var arr = []
    for (var i of this) arr.push(i)
    return arr
  }

  clone() {
    return List.fromArr(this.toArray())
  }

  none(cb) {
    return !(this.every(cb))
  }

  not(cb) {
    deprecate('This is a deprecated method that will be removed in version 2.0.0')
    return none(cb);
  }
}

module.exports = List
