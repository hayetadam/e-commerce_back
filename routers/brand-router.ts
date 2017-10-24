import { Router } from "express";
import { dbBrand } from "../database/db-brand";

const db =new dbBrand();
export const routerBrand = Router();

routerBrand.get('/', (req, resp)=>{
db.getAllBrands().then((brands)=>resp.json(brands))
.catch((error) => resp.status(500).send(error))
})

routerBrand.get('/:id', (req, resp)=>{
    db.getBrandById(req.params.id).then((brand)=>resp.json(brand))
    .catch((error)=>resp.status(500).send(error))
})

routerBrand.post('/', (req, resp)=>{
    db.ajouterBrand(req.body).then((brand)=>resp.json(brand))
    .catch((error)=>resp.status(500).send(error))
})

routerBrand.patch('/', (req, resp)=>{
    db.modifyBrand(req.body).then((brand)=>resp.json(brand))
    .catch((error)=>resp.status(500).send(error))
})

routerBrand.delete('/:id', (req, resp)=>{
    db.removeBrand(req.params.id).then((brand)=>resp.json(brand))
    .catch((error)=>resp.status(500).send(error))
})