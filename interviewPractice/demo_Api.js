const express = require('express');
const app=express();


const schema = [
    {
        "teacher":'T1',
        "Subject":'S1'
    },
    {
        "teacher":'T1',
        "Subject":'S2'
    },
    {
        "teacher":'T2',
        "Subject":'S3'
    },
    {
        "teacher":'T3',
        "Subject":'S1'
    },
    {
        "teacher":'T1',
        "Subject":'S1'
    },
]

CREAT TABLE teacher ("id" INT, "name" varchar, 'address' VARCHAR );
CREATE TABLE subject("id" INT, "subject_name" varchar);

CREATE TABLE teacherVsSubject ('id' INT, "teacher_id" INT, "subject_id" INT);

SELECT teach.name, teach.address from teacherVsSubject as ts INNER JOIN teacher as tech ON ts.teacher_id=tech.id 
WHERE ts.subject_id IN ['1' ,'2'];


1. Provide the details creds of that system (userid and password); Client -> server -> server (res) {authenticated or does not get auth} -> client (open page);

2.   


app.listen(5000,()=>console.log('listening'));

let arr=[];

 let handleNumeric = (e)=>{
    let newarr=[...arr];
    let newNumber = e.target.value;
    newarr.push(newNumber.toString());
    this.setState({arr:newarr});
}

let handleOperator = (e)=>{
    let opt = e.target.value;
    let newarr = [...arr];
    newarr.push(opt);
    this.setState({newarr});
}
let handleEquals= async()=>{
    let ans=0;
    let v1=0,v2=0,opt='';
    for(let i=0;i<arr.length;i++){
        
    }
    let res=await getAllTheCalculations(arr);
}