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

 