// common
{
  interface Target {
    a: string
  }
  class Exm {
    a: string = '123'
  }
  let exm: Target
  exm = new Exm()
  exm.a
}

// 关于可靠性的注意事项
{
  // 开始
  { // 对象 属性多的 可以赋值给 属性少的
    // interface Target {
    //   a: string
    // }
    let x = {a: 'st'} // x: Target
    let y = { a: 'st', b: 1}
    x = y
    // y = x // error
    x.a
  }

  // 函数
  {
    // arguments
    {
      { // 函数 对象参数属性少的 参数少的 可以赋值给 参数多的
        let a = (x: string) => {
          console.log(x)
        }
        let b = (x: string, y: number) => {
          console.log(x, y)
        }
        b = a
        b('1', 2)
        // a = b // error
      }
    }
    // argumentsWithObject
    {
      {
        let a = (o: {x: string}) => {
          console.log(o)
        }
        let b = (o: {x: string, y: number}) => {
          console.log(o)
        }
        b = a
        b({x: '1', y: 3})
        // a = b // error
      }
    }

    // returns
    { // 函数 返回值为对象 属性多的 可以赋值给 属性少的
      // 类型系统强制 源函数(右侧) 的返回值类型必须是 目标函数(左侧) 返回值类型的子类型
      let a = () => ({a: 'string'})
      let b = () => ({a: 'string', b: 'string'})
      a = b
      a()
      // b = a // error
    }
  }
}

// 函数参数双向协变
{
  interface Source {
    t: number
  }
  interface Target extends Source {
    x: number,
    y: number
  }
  function exm (fn: (a: Source) => void): void {
    console.log(fn)
  }
  console.log(exm)
  // exm((x: Target) => {console.log(x.x, x.y)})  // strictFunctionTypes 未开启下 目标函数 的参数必须是 源函数 的子类型  开启将无法赋值 ==> 不建议
  exm((x: Source) => {console.log((<Target>x).x)})
  exm(<(e: Source) => void>
    (
      (e: Target) => { console.log(e.x)}
    )
  )
}

// 可选参数和剩余参数
{
  function exm (...a: number[]) {
    console.log(a)
  }
  exm(1, 2)
}

// 类

// 对象 属性多的 可以赋值给 属性少的
// 函数 对象参数属性少的 参数少的 可以赋值给 参数多的
// 函数 返回值为对象 属性多的 可以赋值给 属性少的 
// => 类型系统强制 源函数(右侧) 的返回值类型必须是 目标函数(左侧) 返回值类型的子类型
// strictFunctionTypes 未开启下 目标函数 的参数必须是 源函数 的子类型  开启将无法赋值 ==> 不建议
