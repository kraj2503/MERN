// // // // // fn=window.prompt("What is your firstname?");
// // // // // ls=window.prompt("What is your Lastname?");
// // // // // console.log(`So your name is ${fn} ${ls}.`);


// // // // // gen=window.prompt("What is your gender!")

// // // // // if(gen=="male"){
// // // // //     window.alert("HI sir!");
// // // // // }
// // // // // else if (gen=="female"){
// // // // //     window.alert("Hi mam");
// // // // // }

// // // // // for(let i =0;i<=1000;i++){
// // // // //     console.log(i);
    
// // // // // }


// // // // // let ar=[0,1,12,13,4,5,6,7,8,9,10];
// // // // // for(let i=0;i<ar.length;i++){
// // // // //         if(ar[i]%2==0){
// // // // //                 console.log(ar[i]);
        
// // // // //             }
// // // // //             else{
// // // // //                     continue;
// // // // //                 }
// // // // //             }



// // // // // let ans = Number.MIN_VALUE;      
// // // // // for(let i=0;i<ar.length;i++){
// // // // //     if(ar[i]>ans){
// // // // //         ans=ar[i];
// // // // //     }
// // // // //     else{
// // // // //         continue;
// // // // //     }


// // // // // }
// // // // // console.log(`Biggest number in the array is ${ans}`);


// // // // // const user = [{
// // // // //     firstname:"kz",
// // // // //     age:21
// // // // // },{
// // // // //     firstname:"anmol",
// // // // //     age:21
// // // // // }];

// // // // let  sum =0;
// // // // for(let i = 0 ; i<1000000000000;i++){
// // // //     sum+=i;
// // // // }
// // // // console.log(sum);


// // // const fs = require('fs');

// // // function kz(){
// // //     return new Promise(function(resolve){
// // //         fs.readFile('a.txt','utf-8',function(err,data){
// // //             resolve(data);
// // //         });
// // //     })
// // // }

// // // function onDone(data){
// // //     console.log(data);
// // // }

// // // kz().then(onDone);

// // const fs = require('fs');
// // const { promiseHooks } = require('v8');

// // // fn syntax

// // // function kz(fn){

// // // fs.readFile('a.txt', 'utf-8',function(err,data){
// // // fn(data);
// // // });
    
// // // }

// // // async function main(){
// // //     kz(function(value){
// // //         console.log(value)
    
// // //     });
// // // }

// // // main();


// // // promise (then) syntax
// // // function kz(){
// // //     let p =  new Promise(function(resolve){
// // //          fs.readFile('a.txt', 'utf-8',function(err,data){
// // //             resolve(data);
// // //             }); 
// // //     })
// // //     console.log(p);
// // //     return p;
    
// // // }

// // // function main(){
// // //    let q= kz();
// // //    console.log("q",q);
   
// // //    q.then(function(value){
// // //         console.log(value);
        
// // //     })
// // // }

// // // main();

// // // Async await
// // function kz(){
// //     return new Promise(function (resolve){
// //         fs.readFile('a.txt','utf-8',function (err,data){
// //             resolve(data);
// //         });
// //     })
// // }

// // async function main(){
// //    let data= await kz();
// //     console.log(data);
    
// // }

// // console.log("pranipat1");

// // main()
// // console.log("pranipat2");


// function sum(a,b){
//     return a+b;
// }

// function minus(a,b){
//     return a-b;
// }
// function cal(a,b,fn){
// return fn(a,b);
// }

// function main(){
//     let q=10,y=5;
//     console.log(cal(q,y,minus));
//     console.log(cal(q,y,sum));
// }

// main()


