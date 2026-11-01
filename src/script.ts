// let myString : string="programming hero"
// let myNumber : number = 56646
// let myBoolean : boolean = false
// let mySymbol : symbol = Symbol()
// let myBigInt : bigint = 100n

//type safe function
const addTwo = (a:number,b:number) => {
    return a+b
};
console.log(addTwo(100,20))

// array and tuple and readonly modifier
const arr1: Array<string>=['programming']
const arr:string[] =['programming','hero']
const numArr:number[]=[1,2,3]

// tuple and readonly
const dhakaLatLong :readonly[number,number]=[23.8103,90.4125]
// dhakaLatLong.push(345)

// optional,default and rest parameters(...args)

const concatName = (firstName:string,lastName?:string)=>{
    if(!lastName){
        return firstName
    }
    return firstName+" "+lastName
}
// console.log(concatName("farjana"))
// default value
const greetings = (fullname:string,greeting : string="hello")=>{
    console.log(greeting+" "+fullname);
}
greetings("farjana");
// rest parameters(...args)
const sum =(...numbers:number[])=>{
    return numbers.reduce((total,sum)=>total+sum,0);

};
sum(1,2,3,4,5,6)

const logUserAction = (...args:[name:string,age:number,isActive:boolean])=>{
    const [name,age,isActive]=args;
    console.log(name+"is"+age);
};
logUserAction("farjana",24,false)

// object type,type alias and interface
type Address ={
        streetName:string;
        holdingNumber:number;
    }

type Tuser = {
    name:string;
    age:number;
    isActive:boolean;
    action:()=>void;
    badges:string[];
    address:Address;
};
// interface
interface IUser {
    name:string;
    age:number;
    isActive:boolean;
    action:()=>void;
    badges:string[];
};

const user:Tuser={
    name:"farjana",
    age:24,
    isActive:true,
    action:()=>console.log("hello"),
    badges:["abe","def"],
    address:{
        holdingNumber:123,
        streetName:"abcd"
    }
}