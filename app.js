const express = require('express')
const app = express()
const port = 3000
let courses = require('./courses.json');

const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            
   optionSuccessStatus:200,
}

app.use(cors(corsOptions))

app.get('/courses', (req, res) => {
    res.send(courses)
})

app.get('/courses/:id', (req, res) =>{
    

    const foundCourse = courses.find(course => course.id === parseInt(req.params.id));
    res.send(foundCourse);


})

app.delete('/courses/:id', (req, res) =>{
    

    const course = courses.find(course => course.id === parseInt(req.params.id));

    const index = courses.indexOf(course);
    courses.splice(index, 1);
    res.send(course);


})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})