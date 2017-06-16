[![Skylab](https://github.com/FransLopez/logo-images/blob/master/logos/skylab-56.png)](http://www.skylabcoders.com/)  

[![AngularJS](https://github.com/FransLopez/logo-images/blob/master/logos/angularjs.png)](https://angularjs.org/)
[![AngularJS](https://github.com/Iggy-Codes/logo-images/blob/master/logos/angularjs.png)](https://angularjs.org/)
[![NodeJS](https://github.com/FransLopez/logo-images/blob/master/logos/nodejs.png)](https://nodejs.org/)
[![MongoDB](https://github.com/FransLopez/logo-images/blob/master/logos/mongodb.png)](https://www.mongodb.com/)

[![Bootstrap](https://github.com/FransLopez/logo-images/blob/master/logos/bootstrap.png)](http://getbootstrap.com/)
[![Bower](https://github.com/FransLopez/logo-images/blob/master/logos/bower.png)](https://bower.io/)
[![SASS](https://github.com/FransLopez/logo-images/blob/master/logos/sass.png)](http://sass-lang.com/) 
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


