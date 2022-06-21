"use strict";
// 型
// const: 常に値で初期化
// let:   初期化せずに使える
// 
// 未定義：null 
// プリミティブ：boolean, number, string, enum, void
// オブジェクト関係：class, interface, array, literals
// 
// any
// 動的に型を宣言・変更出来るが、無闇やたらに使わないほうが良さそう
// let randomValue: any = 10;
// randomValue = 'Mateo';   // OK
// randomValue = true;      // OK
// TypeScriptには unknown 型が代わりにある
// 
// 配列
// let list: number[] = [1, 2, 3];
// タプル
// let person1: [string, number] = ['Marcia', 35];
var ContractStatus;
(function (ContractStatus) {
    ContractStatus[ContractStatus["Permanent"] = 1] = "Permanent";
    ContractStatus[ContractStatus["Temp"] = 2] = "Temp";
    ContractStatus[ContractStatus["Apprentice"] = 3] = "Apprentice";
})(ContractStatus || (ContractStatus = {}));
let employeStatus = ContractStatus.Temp;
console.log(employeStatus);
function addNumbers(x, y) {
    return x + y;
}
console.log(addNumbers(3, 6));
// 型アサーション
let randomValue = 10;
randomValue = true;
randomValue = 'Mateo';
if (typeof randomValue === "string") {
    console.log(randomValue.toUpperCase()); // as を推奨. <>は非推奨 
}
else {
    console.log("Error - A string was expected here."); //
}
// 共用体型
let multiType;
// let multiType: number | boolean;  // NG
multiType = 20; //* Valid
multiType = true; //* Valid
multiType = "twenty"; //* Invalid
let newManager = {
    employeeID: 12345,
    age: 34,
    stockPlan: true
};
let employee = {
    firstName: "Emil",
    lastName: "Andersson",
    fullName() {
        return this.firstName + " " + this.lastName;
    }
};
// employee.firstName = 10;  //* Error - Type 'number' is not assignable to type 'string'
console.log(employee.fullName());
let iceCream = {
    flavor: 'vanilla',
    scoops: 2
};
let myIceCream = {
    flavor: 'vanilla',
    scoops: 2,
    sauce: 'caramel',
    nuts: true
};
console.log(iceCream.flavor);
function tooManyScoops(dessert) {
    if (dessert.scoops >= 4) {
        return dessert.scoops + ' is too many scoops!';
    }
    else {
        return 'Your order will be ready soon!';
    }
}
console.log(tooManyScoops({ flavor: 'vanilla', scoops: 5, sauce: 'caramel' }));
