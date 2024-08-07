

let 이름 :string = 'kim';
const 나이 :number = 30;
let 이름배열 :string[] = ['kim', 'lee', 'park'];
let Name :string[] | number = 123;

function f(x : number) :number{
    return x * 2;
}

// f("13")

type Member = [number, boolean];
let john : Member = [123, true];

class User {
    name : string;
    consstructor(name : string){
        this.name = name;
    }
}

let a:{name:string, sing:string} = {name:'kim', sing:'song'};


type project = {
    member : string[],
    days: number,
    started:boolean,
}

let project = {
    member : ['kim', 'park'],
    days : 30,
    started : true,
  }