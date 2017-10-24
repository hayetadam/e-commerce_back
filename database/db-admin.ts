import { Admin } from "../entities/admin";
import { createConnection, Repository, getConnection } from "typeorm";

export class dbAdmin {
    private getRepo(): Repository<Admin> {
        return getConnection().getRepository(Admin);          
}
getAllAdmins(): Promise<Admin[]> {
    return this.getRepo().find();
}
getAdminById(id: number): Promise<Admin> {
    return this.getRepo().findOneById(id);
}
}