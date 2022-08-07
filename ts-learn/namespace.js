"use strict";
// 命名空间 基本知识 namespace 命名空间中的内容 需要export导出 才可以外部访问的到
var MyMathData;
(function (MyMathData) {
    MyMathData.PI = 3.14;
    function sumValue(value1, value2) {
        return value1 + value2;
    }
    MyMathData.sumValue = sumValue;
    function calCircle(value) {
        return MyMathData.PI * value;
    }
    MyMathData.calCircle = calCircle;
})(MyMathData || (MyMathData = {}));
