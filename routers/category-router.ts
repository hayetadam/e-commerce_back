import { Router } from "express";
import { dbCategory } from "../database/db-category";


const db =new dbCategory();
export const routerCategory = Router();

routerCategory.get('/', (req, resp)=>{
db.getAllCategorys().then((catgs)=>resp.json(catgs))
.catch((error) => resp.status(500).send(error))
})

routerCategory.get('/:id', (req, resp)=>{
    db.getCategoryById(req.params.id).then((catg)=>resp.json(catg))
    .catch((error)=>resp.status(500).send(error))
})

routerCategory.post('/', (req, resp)=>{
    db.ajouterCategory(req.body).then((catg)=>resp.json(catg))
    .catch((error)=>resp.status(500).send(error))
})

routerCategory.patch('/', (req, resp)=>{
    db.modifyCategory(req.body).then((catg)=>resp.json(catg))
    .catch((error)=>resp.status(500).send(error))
})

routerCategory.delete('/:id', (req, resp)=>{
    db.removeCategory(req.params.id).then((catg)=>resp.json(catg))
    .catch((error)=>resp.status(500).send(error))
})