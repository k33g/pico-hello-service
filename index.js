const {Service} = require('./pico') 

let helloService = new Service({})

let port = process.env.PORT || 9090;

helloService.get({uri:`/api/hello`, f: (request, response) => {
 response.sendJson({message: "Hello 🌍"})
}})

helloService.start({port: port}, res => {
 res.when({
   Failure: error => console.log("😡 Houston? We have a problem!"),
   Success: port => console.log(`🌍 helloService is listening on ${port}`)
 })
})