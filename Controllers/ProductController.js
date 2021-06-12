const server = require('../server')

module.exports.addToCart = (req, res) => {
    let array = server.items
    let found = array.find(element => element.id == req.body.pid)
    let cart = server.cart;
    if (found) {
        cart.push(found.id)
        let cartItems = JSON.stringify(cart)
        res.cookie('cartItems', cartItems)
        res.status(200).json({
            success: true,
            data: {
                cart: req.cookies['cartItems']
            }
        })
    } else {
        res.status(400).json({
            success: false,
            errors: "Item not found"
        })
    }
}

module.exports.getProduct = (req, res) => {
    let array = server.items
    let found = array.find(element => element.id == req.params.id)
    if (found) {
        res.status(200).json({
            success: true,
            data: found
        })
    } else {
        res.status(400).json({
            success: false,
            errors: "Item not found"
        })
    }
}