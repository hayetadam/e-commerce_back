import { Repository, getConnection } from "typeorm";
import { Category } from "../entities/category";



export class dbCategory{
    private getRepo():Repository<Category>{
        return getConnection().getRepository(Category);
    }

    getAllCategorys():Promise<Category[]>{
        return this.getRepo().find();
    }

    getCategoryById(id:number):Promise<Category>{
        return this.getRepo().findOneById(id);
    }

    ajouterCategory(cat:Category):Promise<Category>{
        return this.getRepo().save(cat);
    }

    removeCategory(id:number):Promise<any>{
        return this.getRepo().removeById(id);
    }

    modifyCategory(cat:Category):Promise<void>{
        return this.getRepo().updateById(cat.id, cat);
    }
}