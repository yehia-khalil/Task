const express = require('express')
const ProductController = require('./Controllers/ProductController')
const app = express()
const cookieParser = require('cookie-parser')
const port = 3000
var sess = {
    secret: 'keyboard cat',
    cookie: {}
}

app.use(cookieParser())
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

module.exports.items = [
    {
        id: 1,
        name: 'Item 1'
    },
    {
        id: 2,
        name: 'Item 2'
    },
    {
        id: 3,
        name: 'Item 3'
    }
]
module.exports.cart=[]


app.post('/cart-addProduct', ProductController.addToCart)
app.get('/products/:id', ProductController.getProduct)

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})