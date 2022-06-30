// 型
// const: 常に値で初期化する
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

enum ContractStatus {
    Permanent = 1,
    Temp,
    Apprentice
}

let employeStatus: ContractStatus = ContractStatus.Temp;
console.log(employeStatus);

function addNumbers(x: number, y: number) {
    return x + y;
}

console.log(addNumbers(3, 6));

// 型アサーション
let randomValue: unknown = 10;

randomValue = true;
randomValue = 'Mateo';

if (typeof randomValue === "string") {
    console.log((randomValue as string).toUpperCase());    // as を推奨. <>は非推奨 
} else {
    console.log("Error - A string was expected here.");    //
}

// 共用体型
let multiType: number | boolean | string;
// let multiType: number | boolean;  // NG
multiType = 20;         //* Valid
multiType = true;       //* Valid
multiType = "twenty";   //* Invalid

// 交差型
interface Employee {
    employeeID: number;
    age: number;
}
interface Manager {
    stockPlan: boolean;
}

type ManagementEmployee = Employee & Manager;  // ここが交差型 &を使う

let newManager: ManagementEmployee = {
    employeeID: 12345,
    age: 34,
    stockPlan: true
};

// インターフェイス
interface EmployeePlus {
    firstName: string;
    lastName: string;
    fullName(): string;
}

let employee: EmployeePlus = {
    firstName : "Emil",          // コロンで繋げば代入できるらしい
    lastName: "Andersson",
    fullName(): string {
        return this.firstName + " " + this.lastName;
    }
}

// employee.firstName = 10;  //* Error - Type 'number' is not assignable to type 'string'
console.log(employee.fullName());

// メンバーを持つインターフェイスを宣言
interface IceCream {
    flavor: string;
    scoops: number;
    instructions?: string;
}

interface Sundae extends IceCream {
    sauce: 'chocolate' | 'caramel' | 'strawberry';
    nuts?: boolean;             // ?はデータ入力時に省略可能 
    whippedCream?: boolean;
    instructions?: string;
}

let iceCream: IceCream = {
    flavor: 'vanilla',
    scoops: 2
}
 
let myIceCream: Sundae = {
    flavor: 'vanilla',
    scoops: 2,
    sauce: 'caramel',
    nuts: true
}

console.log(iceCream.flavor);

function tooManyScoops(dessert: Sundae) {
    if (dessert.scoops >= 4) {
       return dessert.scoops + ' is too many scoops!';
    } else {
       return 'Your order will be ready soon!';
    }
}
 
console.log(tooManyScoops({flavor: 'vanilla', scoops: 5, sauce: 'caramel'}));

function mappingHTML() {
    var npb_supervisor = { Giants: "たつのり", Carp: "ささおか" };

    for(var sv in npb_supervisor) {
        alert(sv);
    }
    // ブラウザ(のタブ)を閉じる
    // window.close();
}

mappingHTML();

// 可変長引数
const func = (foo: string, ...bar: number[]) => bar;
console.log(func("1",2,3));

// 関数引数の省略形とデフォルト値
let addThreeNumbers = (x: number, y?: number, z=100): number => {
    if((y === undefined)) {
        return x + z;
    } else {
        return x + y + z;
    }
}
let total = addThreeNumbers(10);
console.log(total);

// 
// 関数の使い方
// こういう使い方を覚えていきたい
// (参考) TypeScript を使用して型指定された関数を開発する
// https://docs.microsoft.com/ja-jp/learn/modules/typescript-develop-typed-functions/
// 
function makeArray(items: number, sortOrder: "ascending" | "descending"): number[] {
    let randomNumbers: number[] = [];
    let nextNumber: number;

    for (let counter=0; counter<items; counter++) {
        nextNumber = Math.ceil(Math.random() * (100 - 1));
        if (randomNumbers.indexOf(nextNumber) === -1) {
            randomNumbers.push(nextNumber);
        } else {
            counter--;
        }
    }

    if (sortOrder === "ascending") {
        return randomNumbers.sort(sortAscending);
    } else {
        return randomNumbers.sort(sortDescending);
    }
}

type compareFunctionType = (a: number, b:number) => number;

let sortDescending: compareFunctionType = (a, b) => {
    if (a > b) {
        return -1;
    } else if (b > a) {
        return 1;
    } else {
        return 0;
    }
}

let sortAscending: compareFunctionType = (a, b) => {
    if (a > b) {
        return 1;
    } else if (b > a) {
        return -1;
    } else {
        return 0;
    }
}

let myArray1 = makeArray(12, "ascending");
let myArray2 = makeArray(8, "descending");
console.log(myArray1);
console.log(myArray2);
