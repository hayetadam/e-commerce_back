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

app.use('/user', routerUser);
app.use('/brand', routerBrand);
app.use('/category', routerCategory)
app.use('/product', routerProduct)


app.listen(3000, ()=>console.log('listening on port 3000'));