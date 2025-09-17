const express = require('express')
const app = express();
const PORT = 8080;
// starts an HTTP server that listens for incoming connections on a specified port
// enabling your application to handle client requests
app.listen(
     PORT,
     ()=>console.log(`we listening? on port ${PORT}`)
)

// listen and read
// first /test is the route that yorue going to at the port 
// Then the secodn part of the functoin after the \test is the "handler" funcoitn which is used when the route is requested
// req=incoming data
// res = what we are sending back to the client

app.get('/test', (req,res) => {
    res.status(200).send({
        'test': testing
    })

})