// 命名空间 基本知识 namespace 命名空间中的内容 需要export导出 才可以外部访问的到
namespace MyMathData {
    export const PI = 3.14;
    export function sumValue(value1:number, value2:number):number {
        return value1 + value2
    }
    export function calCircle(value:number):number {
        return PI * value
    }
}