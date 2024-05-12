const express=require('express')
const morgan=require('morgan')


const app=express()
app.use(express.json())
app.use(morgan("tiny"))
// process.env.NODE_ENV!=='production'
console.log(`NODE_ENV:${process.env.NODE_ENV}`)
console.log(`evn:${app.get("env")}`)
const courses=[
    {id:1,name:'java'},
    {id:2,name:'js'},
    // {id:3,name:'python'}

]

const port=process.env.PORT||8000


app.get('/',(req,res)=>{
res.send("Hello world!!!!")})
// app.post()
// app.put()
// app.delete()name



app.get('/api/courses',(req,res)=>{
    res.send(courses)
})

app.get('/api/courses/:id',(req,res)=>{
    const course=courses.find(c=>c.id===parseInt(req.params.id))
    if(!course) res.status(404).send("the courses is not found for the given id")
        res.send(course)
})

app.get('/api/posts/:year/:month',(req,res)=>{
    res.send(req.params)
})


app.put('/api/courese/:id',(req,res)=>{
    const course=courses.find(c=>c.id===parseInt(req.params.id))

    if(!course) return res.status(404).send("There is no course for the given id")

})
app.listen(port,()=>{
    console.log(`listening on port ${port}`)
})
