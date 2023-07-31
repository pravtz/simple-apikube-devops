import {Product} from "@prisma/client"

export interface ProductRepository {
    findById(id:string): Promise<Product | null>
    findByName(name: string): Promise<Product | null>
    findAll(): Promise<Product | []>
}