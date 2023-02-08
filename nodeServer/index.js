const express=require('express');
const app=express();

app.use(express.json());

const courses=[
    {id:1,name:'course1'},
    {id:2,name:'course2'},
    {id:3,name:'course3'},
]

app.get('/',(req,res)=>{
    res.send('Hello World!!');
})

app.get('/api/courses',(req,res)=>{
    res.send([
        {
            id:1,
            name:'aefj'
        },
        {
            id:1,
            name:'aefj'
        },
        {
            id:1,
            name:'aefj'
        },
        {
            id:1,
            name:'aefj'
        },
        {
            id:1,
            name:'aefj'
        }
    ])
})

app.get('/api/courses/:id',(req,res)=>{
    const course = courses.find(c=>c.id===parseInt(req.params.id));
    if(!course) res.status(404).send('No found');
    res.send(course);
})

app.post('/api/courses',(req,res)=>{
    const course = { 
        id: courses.length+1,
        name: req.body.name
    };
    courses.push(course);
    res.send(courses);
})


app.listen(5000,()=>console.log('Listening on Port 5000'));
