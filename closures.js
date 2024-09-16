// 1) output 

let count=0;

(function printCount(){
    if(count === 0){ 
        let count =1; // shadowing
        console.log(count);}
    console.log(count);
})();

// 

function sum(a){
    return function(b){
        console.log(a+b);
    }
}

sum(3)(5);

function find(){
    let a =[];
    for(let i=0;i<100000;i++){
        a[i] = i*i;
    }
    return function(index){
      return console.log(a[index]);}
}

find()(25);

for(var i=0;i<3;i++){
    setTimeout(function log(){
        console.log(i);
    },1000*i);
} // it will print 3 3 3 because var is block scoped so to print 0 1 2 we have to use let instead of var 

for(let i=0;i<3;i++){
    setTimeout(function log(){
        console.log(i);
    },1000*i);
}

for(var i=0;i<3;i++){
    function inner(i){
    setTimeout(function log(){
        console.log(i);
    },1000*i);}
    inner(i);
} // by using var we can print 0 1 2 by using closure

// infinte currying sum(1)(2)(3)(4)....(n);

function sumcur(a){
    return function (b){
        if(b)
        return sumcur(a+b);
        return a;
    }
}console.log(sumcur(1)(2)(3)());

// 

const computeAmount = {
    total : 0,
    lacs(a){
        this.total = this.total + a*100000
        return this

    },
    thousand(a){
        
        this.total = this.total + a*1000
        return this
    },
    value(){
        return this 
    }

}
let val = computeAmount.lacs(1).thousand(2).value();

console.log(val);

// calc.add(5).multiply(54).subract(182).divide(3);

const calc = {
    total : 0,
    add(a){
        this.total = this.total + a;
        return this
    },
    subract(a){
        this.total = this.total-a;
        return this
    },
    multiply(a){
        this.total = this.total * a;
        return this
    },
    divide(a){
        this.total = this.total/a;
        return this
    }

}

const result = calc.add(5).multiply(54).subract(182).divide(3)
console.log(result);

// setTimeout(()=>console.log("b"), 5000);
// setTimeout(()=>console.log("a"),0);
// setTimeout(()=>console.log("i"));
// console.log("yo");