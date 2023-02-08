// const myFile=new Promise((resolve,reject)=>{
//     if(true){
//         resolve("this is true");
//     }
//     else{
//         reject("This is false");
//     }
// })

// myFile
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// })

// const myFile=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve('This is full stack!!');
//     },4000)
// })

// const myName=async()=>{
//     let res=await myFile;
//     console.log(res);
// }
// myName();

const express = require('express');
const app= express();
app.use(express.json());

const arr=[
    {
        id:1,
        name:"Nikhil"
    },
    {
        id:2,
        name:"Ram"
    },
    {
        id:3,
        name:"Shaym"
    },
    {
        id:4,
        name:"John"
    },
    {
        id:5,
        name:"Alex"
    }
]

app.get('/',(req,res)=>{
    res.send(arr);
})

app.post('/api/addDetails',(req,res)=>{
    const obj={
        id:arr.length+1,
        name:req.body.name
    }
    arr.push(obj);
    res.send(arr);
})

app.get('/api/getDetails/:id',(req,res)=>{
    let ans=arr.find(c=>c.id==req.params.id);
    console.log(ans);
    if(!ans) res.status(404).send("Not found");
    res.send(ans);
})

app.put('/api/updateDetails/:id',(req,res)=>{
    let id=req.params.id;
    let name=req.body.name;
    for(let i=0;i<arr.length;i++){
        if(arr[i].id==id){
            arr[i].name=name;
        }
    }
    res.send(arr);
})

app.listen(5000,()=>{console.log("Listening on 5000")})
