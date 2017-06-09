# zero waste App

## Add Products

```
    curl -X POST --data "name=CHEESE&image=https://www.pizzahut.com/assets/w/tile/thor/Cheese.png&price=100&discount=50&experyAt=15/06/2017&shop=Pescados Sepal S.L.&address=Rambla de la Marina, 206, 08907 Hospitalet de Llobregat (L'), Barcelona&coordinates=[100, 120]" localhost:3000/api/products
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
 curl -X POST --data "name=Shop test&image=https://www.pizzahut.com/assets/w/tile/thor/Cheese.png&address=Pescados Sepal S.L.&address=Rambla de la Marina, 206, 08907 Hospitalet de Llobregat (L')" localhost:3000/api/shops
```

## Get All Shops

```
curl localhost:3000/api/products

```
 
## Remove Shop

```
curl -X DELETE localhost:3000/api/shop/5935d7f15eb7682140022824
```
