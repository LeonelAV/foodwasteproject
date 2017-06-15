[![Skylab](img/logos/skylab-56.png)](http://www.skylabcoders.com/)  

[![AngularJS](img/logos/angularjs.png)](https://angularjs.org/)
[![AngularJS](img/logos/angularjs.png)](https://angularjs.org/)
[![NodeJS](img/logos/nodejs.png)](https://nodejs.org/)
[![MongoDB](img/logos/mongodb.png)](https://www.mongodb.com/)

[![Bootstrap](img/logos/bootstrap.png)](http://getbootstrap.com/)
[![Bower](img/logos/bower.png)](https://bower.io/)
[![SASS](img/logos/sass.png)](http://sass-lang.com/) 
[![Standard - JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

# Zero Waste

This repo contains full-stack project ZeroWaste where shops can show their products with discount for proximity of expiration date  and users can see in which shop around them is the best option.That's ake both of them save and help the enviroment.

Zerowaste use angularJs for the client part, and for the server part it is used NodeJS and ExpressJS.


## Installation

You need to have installed [NodeJS](https://nodejs.org/) with [npm](https://www.npmjs.com/), [bower](https://bower.io/) and [MongoDB](https://www.mongodb.com/)

### Configuration `env` file
You need to create an **.env** file in the project root with the following environment variables configured:
- Port:
```
    PORT=3000
```

- Mongodb path and database to use:
```
    DB_URI=mongodb://localhost:27017/dbName
```

### To run the server:
```
    npm start
```
All dependencies will be installed automatically

## API
The server part has four end points.

`/api/products` -> Serves to add products to the database and get the products.
`/api/product` -> Serves to remove and update the products
`/api/shop` -> Serves to remove and update shops.
`/api/shops` -> Serves to add shops and get them all.

## Built with:
* **SublimeText**
* **Front-end**
    - AngularJS 1.6.3
    - Angular-route: 1.6.3
    - Bootstrap: 3.3.7
    - Font-awesome: 4.7.0
* **Back-end**
    - express: 4.15.2
    - dotenv: 4.0.0
    - body-parser: 1.17.1
    - mongoose: 4.9.0
    - bower: 1.8.0

## Authors
[Leonel Meirinho](https://github.com/LeonelAV)


# zero waste App

## Add Products

```
    curl -X POST --data "name=CHEESE&image=https://www.pizzahut.com/assets/w/tile/thor/Cheese.png&price=100&discount=50&experyAt=15/06/2017&shop=Pescados Sepal S.L.&address=Rambla de la Marina, 206, 08907 Hospitalet de Llobregat (L'), Barcelona" localhost:3000/api/products
```

## Get All Products

```
    curl localhost:3000/api/products
```


## Remove Product

```
    curl -X DELETE localhost:3000/api/product/5935d7f15eb7682140022824
```

## Update Product

```
   curl -X PUT --data "name=Pollo" localhost:3000/api/product/5935d0d55eb768214002281f
```

## add product with shop obejct
```
  curl -H "Content-Type: application/json" -X POST -d '{"name":"aaaa","shop": { "name": "name of the shop", "address": "this is the address" } }' localhost:3000/api/products
```

```
DB_URI=mongodb://admin:admin100@ds115352.mlab.com:15352/zerowaste
```


##  Add a Shop

```
curl -X POST --data "name=Shop test&image=https://www.pizzahut.com/assets/w/tile/thor/Cheese.png&address=Pescados Sepal S.L.&address=Rambla de la Marina, 206, 08907 Hospitalet de Llobregat (L')&coordinates=41.373717" -d "coordinates=15" localhost:3000/api/shops
```

## Get All Shops

```
curl localhost:3000/api/products

```
 
## Remove Shop

```
curl -X DELETE localhost:3000/api/shop/5935d7f15eb7682140022824
```
