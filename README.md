# Task
## For the first task of doing 2 routes:
First you run ```npm install``` to install dependecies and libraries used within the app, then you run the server, and it by default runs on port 3000 using the command ```node server.js```, with the url of : ```http://localhost:3000```
### To look for a product:

You make a *GET* request to this endpoint ```http://localhost:3000/products/:id```
the ":id" is the product id you search for, if the product is present you get this response as a success response: 
```
{
"success": true,
    "data": {
        PRODUCT
    }
}
```
else if you enter a wronge id you get: 
```
{
"success": false,
    "errors": "Item not found"
}
```

### To add a product to your cart

There's no authentication provided in this app, users can add products to their carts when they are not logged in. So i used browser's cookies to store the products IDs when they are added.

You simply do a *POST* request to this endpoint ```http://localhost:3000/cart-addProduct``` , with the request body having the product id as "pid".
Upon Successfull request, you get this response: 
```
{
"success": true,
    "data": {
        "cart": "[3,2,1]"
    }
}
```
Upon failed request, you get this response:
```
{
"success": false,
    "errors": "Item not found"
}
```
