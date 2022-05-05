const http = require("http")
const fs = require("fs")

const server = http.createServer((req,res)=>{

    if(req.url=='/students'){
       const data = fs.readFileSync('./students.json','utf-8')
       data=JSON.parse(data)
       res.writeHead(200,{
           'Content-Type':'application/json'
       })
       console.log(data)
       res.send(data).end()
    }
})

server.listen(5000,()=>{
    console.log('Server Listening.....')
})