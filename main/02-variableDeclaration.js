"use strict";
// var
// 作用域
// let
// 块作用域
// 重定义及屏蔽
// 块级作用域变量的获取
// const
// 解构
// 函数声明
// 展开
{
    let first = [1, 2];
    let second = [3, 4];
    let bothPlus = [0, ...first, ...second, 5];
    console.log(bothPlus);
}
