var exp = require('express')

var app = exp()
app.use(exp.static('public'))

app.listen(3000,function () {
    console.log('server running')
})