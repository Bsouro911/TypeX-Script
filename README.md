# TypeScript

**TS** is a **strongly typed language**

A language that is strongly typed can be either _statically_ or _dynamically typed_

TS is a statically typed language - this means types are checked at compile time

**Benefits** of Statically typed language:

- Self documenting
- Catch errors in dev
- Great for teams

**Data Types**

```ts
- string
- number
- boolean
- any
- | (union type)

let myName: string;
let numR: number;

numR = 60;
myName = "souro";

console.log(myName);
console.log(numR);

let unionType: number | string | boolean;

unionType = "name";
unionType = 79;
console.log(unionType); // 79

const sum = (a: number, b: number) => {
return a + b;
};

let re = /\w+/g; // Regular expression

```

**_Object_, _Arrays_, _Tuples_, _Enums_**

```js
let stringArr = ["one", "two", "three"]; // string array

let mixedArr = ["apple", 78, true]; // union array

mixedArr = stringArr; // it is correct
// stringArr = mixedArr , it is wrong

mixedArr[0] = "stringName";
mixedArr[0] = 9;
mixedArr.push(false); // appends in the last
mixedArr.unshift("hellooo"); // adds in the beginning

console.log(mixedArr[0]); // 9
console.log(mixedArr);

// stringArr[1] = 89 , wrong

let testArr = []; // any type empty array
let comp: number[] = []; // number type empty array

// Tuple
let testTuple: [string, number, boolean] = ["aString", 65, false];

// Objects
let myObj: object;
myObj = [];
myObj = {};
console.log(typeof myObj); // object

const testObj = {
  myProp1: "souro",
  myProp2: 89,
  myProp3: false,
};

// testObj.myProp2 = 43;
console.log(testObj.myProp2);

// insted of `type` we can use `interface`
type Mytype = {
  name: string,
  age: number,
  email?: string, // by putting the ? you made the property optional
  adult: boolean,
  mixedArr: (string | number)[],
};

let testObj2: Mytype = {
  name: "souro",
  age: 18,
  //   email: "test@gamil.com",
  adult: false,
  mixedArr: ["astring", 19, "bstring"],
};

const greetUser = (userName: Mytype) => {
  return `Good Night ${userName.name.toLocaleUpperCase()}`;
};

const getEmail = (userName: Mytype) => {
  if (userName.email) {
    return `My email is ${userName.email}`;
  }
  return `user email not found!`;
};

console.log(greetUser(testObj2));
console.log(getEmail(testObj2));

// Enums:

enum testGrade {
  A = 2, // by default A = 0 and so on...
  B,
  c,
  D,
  E, // 6
}
```

_Type Aliases_

```js
type stringOrNumber = string | number;

type stringOrNumberArray = (string | number)[];

type userId = stringOrNumber;
```

_Literal types_

```js
let myName: "souro";
let userName: "A" | "B" | "C";
userName = "C"; // you cant give values other than A, B, C
console.log(userName); // C
```

**_Functions_**

```js
const addTwo = (a: number, b: number) => {
  return a + b;
};

const printmsg = (msg: any): void => {
  console.log(msg);
};

printmsg(addTwo(56, 27));
printmsg("heloo wrld");

function multiply(a: number, b: number): number {
  return a * b;
}

printmsg(multiply(5, 18));

type mathSubtract = (a: number, b: number) => number;
// interface mathSubtract {
//   (a: number, b: number): number;
// }

let subtractFun: mathSubtract = function (c, d) {
  return c - d;
};

printmsg(subtractFun(30, 40));

// Optional Parameters

const multiplyAll = (a: number, b: number, c?: number): number => {
  if (typeof c !== "undefined") {
    return a * b * c;
  }
  return a * b;
};

printmsg(multiplyAll(3, 4, 5)); // 60

// default parameter values should be at the end
const multiplyAll2 = (a: number, b: number, c: number = 10): number => {
  if (typeof c !== "undefined") {
    return a * b * c;
  }
  return a * b;
};

printmsg(multiplyAll2(3, 4));

// Rest Parameters
const total = (a: number, ...nums: number[]): number => {
  return a + nums.reduce((prev, curr) => prev + curr);
};

printmsg(total(25, 50, 10, 30));
```

**_Never Type_**

```js
function throwError(message: string): never {
  throw new Error(message);
}

throwError("This is an error message"); // This function will throw an error and never return a value
```

**_TypeScript Casting_ or _Type Assertion_**

```ts
type a = string;
type b = number | string;
type c = "aName";

let _a: a = "John"; // _a is specifically a string
let _b = _a as b; // _b is less specific, can be a number or a string
let _c = _a as c; // _c is more specific, can only be "aName"

const addOrConcat = (
  a: number,
  b: number,
  c: "add" | "concat"
): number | string => {
  if (c === "add") return a + b;
  return "" + a + b;
};

let myEval: string = addOrConcat(3, 5, "concat") as string;
console.log(myEval);

// The DOM
const img = document.querySelector("img")!;
const myImg = document.getElementById("img") as HTMLImageElement; // not null assertion

img.src;
myImg.src;
```

_Practice_

```js
// fix the errors
const year = document.getElementById("year");
const thisYear = new Date().getFullYear();
year.setAttribute("datetime", thisYear);
year.textContent = thisYear;
```

```js
// correction
const year = document.getElementById("year") as HTMLSpanElement;
const thisYear = new Date().getFullYear().toString();
year.setAttribute("datetime", thisYear);
year.textContent = thisYear;
```

**_Classes_**

- Inside a class properties and methods are called members

```ts
class Gaming {
  constructor(
    public userName: string,
    public gamePlaying: string,
    private age: number,
    protected language: string = "eng"
  ) {
    this.userName = userName;
    this.gamePlaying = gamePlaying;
    this.age = age;
    this.language = language;
  }

  public getAge() {
    return this.age;
  }
}

const user1 = new Gaming("souro", "BGMI", 18);
console.log(user1.getAge()); // 18

// Applying an interface to a Class

interface Gamer {
  name: string;
  age: number;
  play(action: string): string; // this is a function
}

class gamingCommunity implements Gamer {
  constructor(public name: string, public age: number) {
    this.name = name.toUpperCase();
    this.age = age;
  }
  // method
  play(action: string) {
    return `${this.name} plays ${action.toLocaleUpperCase()} game at ${
      this.age
    } years of age`;
  }
}

const gamer1 = new gamingCommunity("souro", 18);
console.log(gamer1.play("bgmi"));

class Ppl {
  static count: number = 0;

  static totalPpl(): number {
    return Ppl.count;
  }

  public uid: number;

  constructor(public name: string) {
    this.name = name;
    this.uid = ++Ppl.count;
  }
}

const _u1 = new Ppl("user1");
const _u2 = new Ppl("user2");
const _u3 = new Ppl("user3");

console.log(Ppl.count);

// Getters and Setters

class MusicCollection {
  private playlist: string[];

  constructor() {
    this.playlist = [];
  }

  public get songs(): string[] {
    return this.playlist;
  }

  public set songs(value: string[]) {
    if (Array.isArray(value) && value.every((el) => typeof el === "string")) {
      this.playlist = value;
    } else {
      throw new Error("Input is not an array of strings");
    }
  }
}

const myMusicCollection = new MusicCollection();

myMusicCollection.songs = ["Neil Young", "Led Zep"];
console.log(myMusicCollection.songs); // ['Neil Young', 'Led Zep']

myMusicCollection.songs = [...myMusicCollection.songs, "ZZ Top"];
console.log(myMusicCollection.songs); // ['Neil Young', 'Led Zep', 'ZZ Top']
```

**_Index Signatures_ and _keyof Assertions_**

```ts
// Custom Index Signatures Example

// Define an interface called 'ExpenseRecord' with three properties: Food, Books, and Work, all of type number.
interface ExpenseRecord {
  Food: number;
  Books: number;
  Work: number;
}

// Create an object 'dailyExpenses' that adheres to the 'ExpenseRecord' interface.
const dailyExpenses: ExpenseRecord = {
  Food: 15,
  Books: 30,
  Work: 50,
};

// Log the value of the 'Books' property in 'dailyExpenses'.
console.log(dailyExpenses.Books);

// Log the value of the 'Work' property in 'dailyExpenses' using bracket notation.
console.log(dailyExpenses["Work"]);

// Define an interface 'StudentInfo' with properties: studentName of type string, studentGPA of type number, and optional subjectList as an array of numbers.
interface StudentInfo {
  studentName: string;
  studentGPA: number;
  subjectList?: number[];
}

// Create an object 'studentDetails' that adheres to the 'StudentInfo' interface.
const studentDetails: StudentInfo = {
  studentName: "Alice",
  studentGPA: 3.8,
  subjectList: [101, 202],
};

// Iterate through the properties of 'studentDetails' and log their names and values.
for (const detailKey in studentDetails) {
  console.log(
    `${detailKey}: ${studentDetails[detailKey as keyof StudentInfo]}`
  );
}

// Use Object.keys to obtain an array of keys in 'studentDetails' and log their corresponding values.
Object.keys(studentDetails).map((key) => {
  console.log(studentDetails[key as keyof typeof studentDetails]);
});

// Define a function 'logStudentInfo' that takes a 'StudentInfo' object and a key of 'StudentInfo' to log the value associated with that key.
const logStudentInfo = (student: StudentInfo, key: keyof StudentInfo): void => {
  console.log(`Student ${key}: ${student[key]}`);
};

// Call the 'logStudentInfo' function to log the 'studentName' property of 'studentDetails'.
logStudentInfo(studentDetails, "studentName");

// Define a type 'IncomeSources' representing possible income sources.
type IncomeSources = "monthlySalary" | "yearlyBonus" | "freelanceWork";

// Define a type 'IncomeRecord' with properties corresponding to income sources and values of type number.
type IncomeRecord = Record<IncomeSources, number>;

// Create an object 'incomeDetails' with income values for each source.
const incomeDetails: IncomeRecord = {
  monthlySalary: 4500,
  yearlyBonus: 1500,
  freelanceWork: 300,
};

// Iterate through the income sources and log their corresponding values.
for (const incomeSource in incomeDetails) {
  console.log(incomeDetails[incomeSource as keyof IncomeRecord]);
}
```

**_Generics_**

```js
// Custom Generic Functions and Interfaces Example

// Define a generic function 'echo' that takes an argument of type 'T' and returns the same argument.
const echo = <T>(arg: T): T => arg;

// Define a generic function 'isObject' that checks if an argument is of type 'object' but not an array and not null.

const isObject = <T>(arg: T): boolean => {
  return typeof arg === "object" && !Array.isArray(arg) && arg !== null;
};

// Check if various values are objects and log the results.

console.log(isObject(false));                // false
console.log(isObject("John"));              // false
console.log(isObject({ name: "Alice", class: "CS" })); // true
console.log(isObject(["apple", "mango"]));  // false
console.log(isObject(null));                 // false

// Define a generic function 'isTrue' that checks if an argument is 'true' or non-empty for arrays and objects.
const isTrue = <T>(arg: T): { arg: T; is: boolean } => {
  if (Array.isArray(arg) && !arg.length) {
    return { arg, is: false };
  }
  if (isObject(arg) && !Object.keys(arg as any).length) {
    return { arg, is: false };
  }
  return { arg, is: !!arg };
};

// Check if various values are 'true' or non-empty and log the results.
console.log(isTrue(false));                   // { arg: false, is: false }
console.log(isTrue(0));                       // { arg: 0, is: false }
console.log(isTrue(true));                    // { arg: true, is: true }
console.log(isTrue(1));                       // { arg: 1, is: true }
console.log(isTrue("Eve"));                   // { arg: "Eve", is: true }
console.log(isTrue(""));                      // { arg: "", is: false }
console.log(isTrue(null));                    // { arg: null, is: false }
console.log(isTrue(undefined));               // { arg: undefined, is: false }
console.log(isTrue({}));                      // { arg: {}, is: false }
console.log(isTrue({ name: "Eve" }));        // { arg: { name: "Eve" }, is: true }
console.log(isTrue([]));                      // { arg: [], is: false }
console.log(isTrue([1, 2, 3]));              // { arg: [1, 2, 3], is: true }
console.log(isTrue(NaN));                    // { arg: NaN, is: false }
console.log(isTrue(-0));                     // { arg: -0, is: false }

// Define an interface 'BoolCheck' with properties 'value' and 'is' of generic type 'T' and boolean.
interface BoolCheck<T> {
  value: T;
  is: boolean;
}

// Define a generic function 'checkBoolValue' that checks if an argument is 'true' or non-empty for arrays and objects and returns a 'BoolCheck' object.
const checkBoolValue = <T>(arg: T): BoolCheck<T> => {
  if (Array.isArray(arg) && !arg.length) {
    return { value: arg, is: false };
  }
  if (isObject(arg) && !Object.keys(arg as any).length) {
    return { value: arg, is: false };
  }
  return { value: arg, is: !!arg };
};

// Define an interface 'HasID' with a property 'id' of type number.
interface HasID {
  id: number;
}

// Define a generic function 'processUser' that takes an object of type 'T' which extends 'HasID' and processes the user with logic.
const processUser = <T extends HasID>(user: T): T => {
  // Process the user with logic here
  return user;
};

// Log the result of processing a user object.
console.log(processUser({ id: 1, name: "Carol" }));

// Define a generic function 'getUsersProperty' that extracts and returns a property 'K' from an array of objects 'users' of type 'T'.
const getUsersProperty = <T extends HasID, K extends keyof T>(
  users: T[],
  key: K
): T[K][] => {
  return users.map((user) => user[key]);
};

// Define an array of user objects.
const usersArray = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
  },
];

// Log the extracted email and username properties from the user array.
console.log(getUsersProperty(usersArray, "email"));
console.log(getUsersProperty(usersArray, "username"));

// Define a class 'StateObject' with a generic type 'T'.
```

> In TypeScript, as in JavaScript, getters and setters are used to define methods that get and set the values of object properties, allowing you to encapsulate the logic associated with reading and modifying those values. Getters and setters are part of the property accessors feature.

```js
class StateObject<T> {
  private data: T;

  constructor(value: T) {
    this.data = value;
  }

  get state(): T {
    return this.data;
  }

  set state(value: T) {
    this.data = value;
  }
}

// Create an instance of 'StateObject' with string values.
const stringStore = new StateObject("John");
console.log(stringStore.state);
stringStore.state = "Dave";

// Create an instance of 'StateObject' with values that can be strings, numbers, or booleans.
const mixedTypeStore = new StateObject<(string | number | boolean)[]>([15]);
mixedTypeStore.state = ["Dave", 42, true];
console.log(mixedTypeStore.state);
```

**_Utility Types_**

```js
// Custom Utility Types Example

// Partial

// Define an interface 'Task' representing a task with assigneeId, description, and completion status.
interface Task {
  assigneeId: string;
  description: string;
  completed: boolean;
}

// Create a function 'updateTask' that takes a 'Task' and properties to update ('Partial<Task>') and returns an updated 'Task'.
const updateTask = (task: Task, propertiesToUpdate: Partial<Task>): Task => {
  return { ...task, ...propertiesToUpdate };
};

// Create an initial 'Task' object.
const task1: Task = {
  assigneeId: "taskuser123",
  description: "Complete Project",
  completed: false,
};

// Update the 'completed' property of 'task1'.
console.log(updateTask(task1, { completed: true }));
const taskCompleted: Task = updateTask(task1, { completed: true });

// Required and Readonly

// Create a function 'saveTask' that takes a 'Required<Task>' (all required properties) and returns a 'Task'.
const saveTask = (task: Required<Task>): Task => {
  // Save to the database, etc.
  return task;
};

// Create a 'Readonly' version of 'taskCompleted'.
const taskImmutable: Readonly<Task> = { ...taskCompleted, completed: true };

// NOTE: taskImmutable won't work with saveTask!
// This demonstrates that 'Readonly' objects cannot be used with functions that require 'Required' properties.

// Record
// Create a 'Record' representing a color map.
const colorMap: Record<string, string> = {
  red: "FF0000",
  green: "00FF00",
  blue: "0000FF",
};

// Define custom types 'Employees' and 'EmployeeRoles'.
type Employees = "Alice" | "Bob";
type EmployeeRoles = "Manager" | "Developer" | "Designer";

// Create a 'Record' representing employee roles.
const employeeRoles: Record<Employees, EmployeeRoles> = {
  Alice: "Manager",
  Bob: "Developer",
};

// Define a type 'Workload' representing the workload for each employee.
interface Workload {
  task1: number;
  task2: number;
}

// Create a 'Record' representing workload data for employees.
const workloadData: Record<Employees, Workload> = {
  Alice: { task1: 8, task2: 6 },
  Bob: { task1: 5, task2: 3 },
};

// Pick and Omit

// Define an interface 'Task' representing a task with assigneeId, description, and completion status.
interface Task {
  assigneeId: string;
  description: string;
  completed: boolean;
}

// Create an initial 'Task' object.
const task11: Task = {
  assigneeId: "taskuser123",
  description: "Complete Project",
  completed: false,
};

// Create a type 'TaskPreview' using 'Omit' to omit the 'description' property from 'Task'.
type TaskPreview = Omit<Task, "description">;

// Create an object 'taskInfo' with properties specified by 'TaskPreview'.
const taskInfo: TaskPreview = {
  assigneeId: "employee123",
  completed: false, // Note that 'description' is omitted
};

// Exclude and Extract

// Create a type 'RevisedRole' using 'Exclude' to exclude a specific role from 'EmployeeRoles'.
type RevisedRole = Exclude<EmployeeRoles, "Designer">;

// Create a type 'CoreRoles' using 'Extract' to extract specific roles from 'EmployeeRoles'.
type CoreRoles = Extract<EmployeeRoles, "Manager" | "Developer">;

// Nonnullable

// Define a type 'AllPossibleRoles' that can be names or nullable/undefined values.
type AllPossibleRoles = "Charlie" | "Daniel" | null | undefined;

// Create a type 'NonNullRoles' using 'NonNullable' to exclude nullable/undefined values.
type NonNullRoles = NonNullable<AllPossibleRoles>;

// ReturnType

// Define a function 'createNewTask' that takes a 'description' and 'status' and returns an object.
const createNewTask = (description: string, status: boolean) => {
  return { description, completed: status };
};

// Create a type 'NewTask' using 'ReturnType' to infer the return type of 'createNewTask'.
type NewTask = ReturnType<typeof createNewTask>;

// Create a new task using the 'createNewTask' function.
const myTask: NewTask = createNewTask("Custom Utility Types", true);
console.log(myTask);

// Parameters

// Create a type 'TaskParameters' using 'Parameters' to infer the parameter types of 'createNewTask'.
type TaskParameters = Parameters<typeof createNewTask>;

// Define an array of parameters for creating a new task.
const taskArgs: TaskParameters = ["Coding Assignment", false];

// Create a new task using the parameters from 'taskArgs'.
const myTask2: NewTask = createNewTask(...taskArgs);
console.log(myTask2);

// Awaited - helps us with the ReturnType of a Promise

// Define an interface 'Customer' representing a customer with 'id', 'name', and 'email'.
interface Customer {
  id: number;
  name: string;
  email: string;
}

// Create an asynchronous function 'fetchCustomers' that returns a Promise of an array of 'Customer'.
const fetchCustomers = async (): Promise<Customer[]> => {
  const data = await fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      if (error instanceof Error) console.log(error.message);
    });
  return data;
};

// Create a type 'FetchedCustomersReturnType' using 'Awaited' to infer the return type of 'fetchCustomers'.
type FetchedCustomersReturnType = Awaited<ReturnType<typeof fetchCustomers>>;

// Fetch customers and log the result.
fetchCustomers().then((customers) => console.log(customers));
```

**Vite + TS**
