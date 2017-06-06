# zero waste App

## Add Products

```
    curl -X POST --data "name=CHEESE&price=12&discount=50&experyAt=2017" localhost:3000/api/products
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
