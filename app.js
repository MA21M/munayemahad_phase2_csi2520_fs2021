// Imports
const express = require('express')
const app = express()
const port = 3000


// Static Files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/img', express.static(__dirname + 'public/img'))
app.use(express.static(__dirname + '/node_modules/bootstrap/dist'));





//Set view
app.set('views', '/veiws')
app.set(view engine', 'ejs')
app.get('', (req, res) => {
    res.render('index')
})
app.get('/about', (req, res) => {
    res.render('about' , { Text: 'About cars'})
})

app.set('views', './view')
app.set('view engine', 'ejs')



app.get('', (req, res) =>{
    res.render('index', { text: 'homepage'})
})

app.get('/about', (req, res) =>{
    res.render('about', { text: 'about cars page'})
})


// Listen on port 3000
app.listen(port, () => console.info('listening on port $(port)'))