Markdown
#  TypeScript Fundamentals & Core Concepts

This repository contains hands-on practice code for TypeScript fundamental concepts learned during the **Next Level Software Development with AI Engineering** course.

---

##  Topics Covered & Interview Cheat Sheet

### 1. Primitive Data Types
TypeScript extends JavaScript by adding explicit type annotations to primitive values.
* **Types:** `string`, `number`, `boolean`, `symbol`, `bigint`.
* **Example:**
  ```typescript
  let myString: string = "programming hero";
  let myNumber: number = 56646;
  let myBoolean: boolean = false;
  let mySymbol: symbol = Symbol();
  let myBigInt: bigint = 100n;
2. Arrays, Tuples, and readonly Modifier
Arrays: Can be defined using type[] syntax or generic Array<type> syntax.

Tuples: Fixed-length arrays where each element has a predefined data type in a specific sequence.

readonly Modifier: Prevents mutation of array/tuple elements (e.g., blocks methods like .push(), .pop(), or direct reassignments).

Example:

TypeScript
const arr: string[] = ['programming', 'hero'];
const numArr: number[] = [1, 2, 3];

// Tuple with readonly constraint
const dhakaLatLong: readonly [number, number] = [23.8103, 90.4125];
// dhakaLatLong.push(345); //  Error: Cannot mutate a readonly tuple
3. Function Parameters & Type Safety
Type-Safe Parameters & Return Types: Explicitly defines what arguments a function accepts and what value it returns.

Optional Parameters (?): Must always be placed after required parameters.

Default Parameters: Assigns a fallback value if no argument is passed during function invocation.

Rest Parameters (...args): Captures an arbitrary number of arguments into an array or a typed tuple.

Example:

TypeScript
// Optional Parameter
const concatName = (firstName: string, lastName?: string): string => {
  return lastName ? `${firstName} ${lastName}` : firstName;
};

// Default Parameter
const greetings = (fullname: string, greeting: string = "hello"): void => {
  console.log(`${greeting} ${fullname}`);
};

// Rest Parameters with Array
const sum = (...numbers: number[]): number => {
  return numbers.reduce((total, num) => total + num, 0);
};

// Rest Parameters with Tuple Destruction
const logUserAction = (...args: [name: string, age: number, isActive: boolean]): void => {
  const [name, age, isActive] = args;
  console.log(`${name} is ${age}`);
};
4. Object Types, Type Aliases & Interfaces
Type Alias (type): Flexible way to define object shapes, primitives, unions, or tuples. Supports nested objects.

Interface (interface): Specifically designed to define the shape of objects/classes. Can be easily extended using extends.

Example:

TypeScript
type Address = {
  streetName: string;
  holdingNumber: number;
};

type TUser = {
  name: string;
  age: number;
  isActive: boolean;
  action: () => void;
  badges: string[];
  address: Address;
};

interface IUser {
  name: string;
  age: number;
  isActive: boolean;
  action: () => void;
  badges: string[];
}

const user: TUser = {
  name: "farjana",
  age: 24,
  isActive: true,
  action: () => console.log("hello"),
  badges: ["abc", "def"],
  address: {
    holdingNumber: 123,
    streetName: "abcd",
  },
};
 Quick Interview Q&A Summary
Q1: What is the difference between an Array and a Tuple in TypeScript?
Answer: An Array holds zero or more elements of a specific type (or union of types) without any restriction on length. A Tuple is a fixed-length array where the type of each specific index position is defined beforehand.

Q2: What happens when you mark a Tuple as readonly?
Answer: In standard JavaScript, tuples are just arrays under the hood, so array methods like .push() can bypass fixed length. Using readonly in TypeScript locks the array completely, making it immutable and raising a compile-time error if any mutation is attempted.

Q3: What is the difference between Type Alias and Interface?
Answer: Both are used to define type shapes for objects. However:

type is more versatile—it can declare primitives, union types, tuples, and object shapes.

interface is open for extension (via extends or declaration merging) and is primarily used for defining object contracts and OOP class implementations.

Q4: How do Optional Parameters and Default Parameters differ?
Answer: An Optional parameter (param?: type) evaluates to undefined if omitted, requiring explicit handling inside the function. A Default parameter (param: type = defaultValue) automatically assigns a pre-set value when omitted or passed as undefined.