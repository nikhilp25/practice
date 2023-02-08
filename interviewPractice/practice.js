// // Online Javascript Editor for free
// // Write, Edit and Run your Javascript code using JS Online Compiler

// console.log("Welcome to Programiz!");

// function createUser(name) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve({
//         name,
//         id: Math.random().toString()
//       });
//     }, 2000);
//   })
// }

// async function completeThis() {
//   const startTime = new Date().getTime()
//   console.log("Start At", startTime);

//   // Edit Here
//   // Create three users and return the created user's data with id
//   let names=['John','Alex','Sam']
//   let res=[];
// for(let i=0;i<names.length;i++){
//     let createUser_=await createUser(names[i]);
//     res.push(createUser_);
// }
      
//   const endTime = new Date().getTime();
//   console.log("End At", endTime);
//   console.log("Execution Took, ", (startTime - endTime) / 1000)
//   const execitionTimeSeconds = (startTime - endTime) / 1000
//   console.log(res);
//   return res;
// }

// completeThis();

// =================
// const promise= new Promise((resolve,reject)=>{
//     reject(Error('Some error occured!!'));
// })
// promise.catch(error=>console.log(error.message));
// promise.catch(error=>console.log(error.message));

// =====================

// const promise = new Promise(res => res(2));
// promise.then(v => {
//         console.log(v);
//         return v * 2;
//     })
//     .then(v => {
//         console.log(v);
//         return v * 2;
//     })
//     .finally(v => {
//         console.log(v);
//         return v * 2;
//     })
//     .then(v => {
//         console.log(v);
//     });

// const promise = new Promise((resolve, reject)=>{
//     if(true){
//         setTimeout(()=>{
//             resolve("This is resolved");
//         },2000)
//     }
//     else{
//         reject("This is rejected");
//     }
// });

// promise
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// })

const axios = require('axios');

axios.all([
    axios.get('https://api.agify.io/?name=nikhil'),
    axios.get('https://api.agify.io/?name=corry')
])
.then(axios.spread((res1,res2)=>{
    console.log(res1.data);
    console.log(res2.data);
}))
.catch(err=>{
    console.log(err);
});
