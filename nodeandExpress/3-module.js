
// Modules -encapsulated code (only share minimum)
// CommonJS, every file is  module(by default)


const {john,peter}=require('./4-names')
const sayHi=require('./5-utils')
const data=require('./6-alternative-flavor')
require('./7-mind-grenede')
console.log(data)
sayHi('susan')
sayHi(john)
sayHi(peter)