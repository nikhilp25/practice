const express = require('express');
const app=express();
const axios = require('axios');

app.use(express.json());

const port = 5000;

let wraperApi=async()=>{
    
    try{
        let url='https://jsonplaceholder.typicode.com/todos';
        let res=await axios.get(url);
        if(res){
            return res.data;
        }
    }
    catch(err){
        console.log("Error");
        return "error";
    }
}



app.get('/api/pagination/todos/:pageNo/:payload', 
    async function(req,res){
        try{
            let datas= await wraperApi();
            let pageNo = req.params.pageNo;
            let payload = req.params.payload;
            let ans=[];
            let startingData = pageNo*payload;
            let endingData = parseInt(startingData)+parseInt(payload);
            for(let i=startingData;i<endingData;i++){
                ans.push(datas[i]);
            }
            res.send(ans);
        }
        catch(err){
            console.log("Error");
            return err;
        }
})



app.listen(port,()=>{console.log('listening')});

