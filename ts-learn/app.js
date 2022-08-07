"use strict";
let content = "www";
// 重新赋值
// content = 200; // 不能存储非原有的类型数据
// ts不能存储非原有的类型数据
// ts原型
// let num = 123;
// 等同于
let num = 123;
console.log('num', num);
// boolean
let isLogin = false; // 等同于 let isLogin:boolean = false;
// 更改
// isLogin = 1; // 不行 只能是boolean类型
// string
let str = "hello world";
let anything; // 等同于 let anything:any
anything = 25;
anything = "hello";
// 数组 元组 枚举
let names = ["henry", "alice"];
console.log('names[0]', names[0]); // henry
names[0] = "hello";
console.log('names[0]', names[0]); // hello
let saveNumber = [1, 2]; // number[]数字数组简写形式
let saveAnother = ["hello", 1, false]; // any[]任意类型数组简写形式
//  元组 已知数组里面的准确数据 将类型值直接指定
let colors = ["red", 999]; // 定义好元组类型后 就不可以更换
// 例如：let colors:[string, number] = [999, "red"] // 报错
// 枚举 enum
var Color;
(function (Color) {
    Color[Color["black"] = 0] = "black";
    Color[Color["red"] = 100] = "red";
    Color[Color["yellow"] = 101] = "yellow";
})(Color || (Color = {}));
let myColor = Color.black;
console.log('myColor', myColor); // 0 没赋值的情况下 Color.black键值 0 Color.red 1 Color.yellow 2
let changeColor = Color.red;
console.log('changeColor', changeColor); // 100 赋值以后 键值依次往下延 Color.black键值 0 Color.red 100 Color.yellow 101
let anotherColor = Color.yellow;
console.log('anotherColor', anotherColor); // 101 按照red的数值 继续往下叠加
// 函数的相关类型
// 返回值类型
function returnValue() {
    return "hello";
}
console.log('returnValue()', returnValue());
// 空 函数没有任何返回
function sayHello() {
    console.log('hello');
}
// 参数类型
function sumValue(value1, value2) {
    return value1 + value2;
    // return value1 * value2; // 如果2个参数中有一个不是数值 那么返回NaN
}
// 函数类型
let myFunc; // myFunc相当于any类型 等同于 let myFunc：any;
myFunc = sayHello;
myFunc();
myFunc = sumValue;
console.log('myFunc(1, 2)', myFunc(1, 2));
// 现在我们重新定义一个myFun并且要约束myFun这个函数类型 让它接收参数是数值 返回值也是数值
let myFun;
// myFun = sayHello; // 报错 不能将类型“() => void”分配给类型“(a: number, b: number) => number”。 不能将类型“void”分配给类型“number”。
myFun = sumValue;
console.log('myFun', myFun(2, 2)); // 4
// 对象类型
let dataObj = {
    name: 'henry',
    age: 24
};
// 这种写法相当于
// let dataObj:{name:string, age:number} = {
//     name: 'henry',
//     age: 24
// }
// 所以改dataObj里面的键 就会报错 如下所示
// dataObj = {
//     a: "hey",
//     b: 12
// } // 报错 不能将类型“{ a: string; b: number; }”分配给类型“{ name: string; age: number; }”。对象文字可以只指定已知属性，并且“a”不在类型“{ name: string; age: number; }”中。
// 这样更改赋值就不会报错
dataObj = {
    name: 'Augus',
    age: 27
};
console.log('dataObj', dataObj);
// 复杂对象类型
let complex = {
    data: [1, 2, 3, 4],
    myFunc: function (item) {
        this.data.push(item);
        return this.data;
    }
};
console.log('complex.myFunc(20)', complex.myFunc(20)); // [1, 2, 3, 4, 20]
let typeFun = {
    data: [1, 2, 3, 4],
    myFunc: function (item) {
        this.data.push(item);
        return this.data;
    }
};
console.log('typeFun.myFunc(20)', typeFun.myFunc(20)); // [1, 2, 3, 4, 20]
//  union type 检查类型 null undefined never
//  union type
let unionType = 12; // unionType可支持的变量类型为数字 布尔值 以及字符串
unionType = false; // 都不会报错
unionType = "www"; // 都不会报错
// unionType = {}; // 报错 不能将类型“{}”分配给类型“string | number | boolean”
// 检查类型
let checkType = 10;
if (typeof checkType == "number") {
    console.log("number");
}
// null undefined
// 默认情况下null和undefined是所有类型的子类型。所以ts里默认赋值为null和undefined的值 可以重新赋值其他值
let myNull = null;
myNull = undefined;
myNull = 123;
myNull = "www";
myNull = false;
console.log('myNull', myNull); // 都不会报错
// 但是null和undefined类型的值是不可以变更的 例如
let nullValue = null;
let undefinedValue = undefined;
// nullValue = 123; // 报错 不能将类型“123”分配给类型“null”
// undefinedValue = 123; // 报错 不能将类型“123”分配给类型“undefined”
// 也不可以把其他类型的值 修改为null和undefined 例如
let testModify = 123;
// testModify = null; // 报错 不能将类型“null”分配给类型“number”。
// testModify = undefined; // 报错 不能将类型“undefined”分配给类型“number”
// never类型 通常用于抛出异常 或无法执行到终点
let testNever;
// 不能将其他类型的值 赋值给never类型
// testNever = 123; // 报错 不能将类型“number”分配给类型“never”。
// never类型的应用场景 抛出异常
function error(message) {
    throw new Error(message);
}
// 死循环
function loop() {
    while (true) { }
}
// let y:number;
// y = (() => {
//     throw new Error("message")
// })(); // 不会报错 never类型 是任何类型的子类型 可以将never赋值给任何类型 
// 类(属性和方法)
class Person {
    constructor(name, username) {
        this.username = username;
        this.gender = '男';
        this.age = 27;
        this.name = name;
        this.username = username;
    }
    printAge(age) {
        this.age = age;
        console.log('age', this.age);
        this.setGender('男');
    }
    setGender(gender) {
        this.gender = gender;
        // console.log('this.gender', this.gender)
    }
    printName() {
        console.log(this.name);
    }
}
const person = new Person('Augus', 'create13');
// console.log(person.name, person.username);
person.printAge(27);
// 类的继承
class Student extends Person {
    constructor(name, username, studentId) {
        super(name, username);
        this.studentId = studentId;
        console.log(this.gender); // 可以访问的到
        // console.log(this.age); // 无法访问的到 因为age属于Person的私有属性 只能在类“Person”中访问
    }
    printStudentId() {
        console.log(this.studentId);
    }
    printName() {
        console.log(this.username);
    }
}
const create = new Student('Mr Li', 'create', 2001);
// console.log(create.name, create.username);
console.log(create); // 这里可以获取到Person的age 但是age只能通过这种方式获取到 却不能使用 因为是父类Person私有的
create.printAge(32);
create.printName();
// class set get修饰词 用于隔离私有属性和公开属性 加上set 和get的方法（方法名可以随意取）可以在实例化对象上直接以属性的方式获取到值
// class静态属性和方法 static 使用static不需要通过实例化对象获取 就可以直接可以获取类的静态属性 
class Human {
    constructor() {
        this._name = 'lee';
    }
    set setName(name) {
        this._name = name;
    }
    get getName() {
        return this._name;
    }
    static calCircle(num) {
        return num * this.PI;
    }
}
Human.PI = 3.14;
let augus = new Human();
console.log('augus.getName', augus.getName); // lee
augus.setName = 'Alice';
console.log('augus.getName', augus.getName); // Alice
console.log(Human.PI); // 3.14
console.log(Human.calCircle(8)); // 25.12
// interface可以继承 type不能
// type Person2 = {name: string; age: number};
let personContent = {
    name: 'Augus',
    age: 27,
    sex: '男',
    salary: 7000,
    id: 1,
    ids: [3, 4, 5, 6],
    greet() {
        console.log('123');
    }
};
console.log('personContent', personContent);
personContent.greet();
// personContent.salary = 1000; // salary属性是只读的 不可以改写 改写会报错
function printPerson(personContent) {
    console.log(`我叫${personContent.name}, 我的年龄是${personContent.age}, 我的工资是${personContent.salary}`);
}
printPerson(personContent);
// 接口应用到class中
class PeopleInfo {
    constructor() {
        this.name = 'lee';
        this.age = 32;
        this.salary = 8000;
        this.id = 100;
        this.course = 'it';
    }
    greet() {
        console.log('Hello world!');
    }
}
const employee = {
    name: '李文',
    age: 32,
    salary: 7000,
    greet() {
        console.log('greet');
    },
    work: '前端开发'
};
console.log('employee', employee);
// typescript 中的泛型 (Generic)
// 在函数中使用泛型
// 在函数中使用泛型
function identity(arg) {
    console.log(arg);
    return arg;
}
// 可以明确指定类型
console.log(identity('abc')); // 因为指定的是string类型 所以传参里一定是string类型 不能改变成数字等其他 不然会报错
// 泛型主要应用于ts推断类型
console.log(identity(true));
console.log(identity(123));
let myIdentify = identity;
let myIdentifyType = identity;
// 可以明确指定类型
console.log(myIdentify('my-string'));
// 交给ts推断类型
myIdentify(28);
myIdentify([1, 2, 3]);
myIdentifyType(30);
myIdentifyType(['abc', 'eee']);
// 为泛型添加约束 指定队形属性必须有length
function getLength(obj) {
    return obj.length;
}
const obj = {
    name: 'www',
    age: 30,
    length: 10
};
console.log(getLength(obj));
// 为泛型添加约束 指定返回值类型
function getContent(v) {
    return v;
}
console.log(getContent(20));
// 泛型应用到class类当中
class CountNumber {
    constructor(num1, num2) {
        this.number1 = num1;
        this.number2 = num2;
    }
    ;
    calculate() {
        return +this.number1 * +this.number2;
    }
}
const countNumber = new CountNumber(10, 20);
console.log('泛型在类中的应用计算', countNumber.calculate());
