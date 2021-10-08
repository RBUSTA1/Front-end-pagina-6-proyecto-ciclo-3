console.log("Hello, world!")

const http=require('http')
//import { index } from "parte-1_proyecto-ciclo3";
const app=http.createServer((request, response)=>{
    response.writeHead(200, {'Content-Type': 'text/plain'})
    response.end("This is a server")
})

response.writeHead(200, {'Content-Type': 'text/plain'})

const PORT = 3001
app.listen(PORT)