// string
let str: string = 'string'

// number
let num: number = 123

// boolean
let bool: boolean = false

// array
let numArr: number[] = [1, 2]
let strArr: string[] = ['s', 't']
let stringArr: Array<string> = ['s', 't']
// ...

// tuple
let tupleArr: [string, number/*, [string | number]*/]
tupleArr = ['2', 1]
// tupleArr[2] = 2 // 非严格模式

// enum
enum Color { Red, Green = 3, Blue }

// any
let anyType: any
anyType = 1
anyType = 'str'
// ...

// void
let voidType: void
voidType = undefined
// voidType = null // 非严格模式

// null & undefined
let u: undefined = undefined
let n: null = null

// never
function error(message: string): never {
  throw new Error(message);
}
function fail() {
  return error("Something failed");
}
function infiniteLoop(): never {
  while (true) {
  }
}

// object
{
  let objectType: object
  objectType = { o: '1' }
  console.log(objectType)
}

// 修饰符
{
  function ExmDecorators (Target: typeof Exm) {
    Target.a = '123'
    return Target
  }
  @ExmDecorators
  class Exm {
    static a: string
    constructor() {}
  }
}
