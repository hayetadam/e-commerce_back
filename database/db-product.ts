import { Product } from "../entities/product";
import { createConnection, Repository, getConnection } from "typeorm";

export class dbProduct {
    private getRepo(): Repository<Product> {
        return getConnection().getRepository(Product);          
}
getAllProducts(): Promise<Product[]> {
    return this.getRepo().find();
}
getProductById(id: number): Promise<Product> {
    return this.getRepo().findOneById(id);
}
ajouterProduct(product: Product): Promise<Product> {
    return this.getRepo().save(product);
}
removeProduct(id:number): Promise<any> {
    return this.getRepo().removeById(id);
}
modifyProduct(product: Product): Promise<void> {
    return this.getRepo().updateById(product.id,product);
}
}