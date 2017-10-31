import 'reflect-metadata';

import * as express from 'express';
import * as bodyParser from 'body-parser';
import { createConnection } from 'typeorm';
import { routerUser } from './routers/user-router';
import { routerBrand } from './routers/brand-router';
import { routerCategory } from './routers/category-router';
import { routerProduct } from './routers/product-router';

createConnection();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true
}));
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', "true");
    next();
});

app.use('/user', routerUser);
app.use('/brand', routerBrand);
app.use('/category', routerCategory)
app.use('/product', routerProduct)


app.listen(3000, ()=>console.log('listening on port 3000'));