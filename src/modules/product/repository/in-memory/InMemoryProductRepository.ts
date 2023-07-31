import {ProductRepository} from "../product.repository";
import {Product} from "@prisma/client";

export class InMemoryProductRepository implements ProductRepository{
    public Product: Product[] | [] = []

    findAll(): Promise<Product | []> {
        return this.Product
    }
    findById(id: string): Promise<Product | null> {
        return this.Product.find((item) => item.id === id)

    }
    findByName(name: string): Promise<Product | null> {
        return this.Product.find((item) => item.id === id)
    }
}