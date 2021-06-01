const http = require('http')
const server = http.createServer((req, res)=>{
    if(req.url=="/is-91-022"){
        res.write("Redko Daniil Year 2 IS-91");
    }
    else{
        res.write("Not found!");
    }
    res.end()
})

server.listen( 3000, () => {
    console.log('Server has been started...')
})