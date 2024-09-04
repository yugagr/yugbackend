const express=require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('HelloWorld!')
})

app.get('/twitter', (req, res) => {
    
 res.send('yugagr123')

})

app.get('/login', (req, res) => {
    
    res.send('<h1> please sign up first to agrawals </h1>')
})

app.get('/youtube', (req, res) => {
    res.send('<h2> subscribe to my youtube</h2>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})