const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/home', (req, res) => {
  res.send('Hello Home!')
})

app.get('/blogs', (req, res) => {
  res.send('Hello Blogs!')
})

app.get('/blogs/:slug', (req, res)=>{
    console.log(req.params)
    console.log(req.query)
    res.send(`Hello Blog ${req.params.slug}!`)
})

app.get('/about', (req, res) => {
  res.send('Hello About!')
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})