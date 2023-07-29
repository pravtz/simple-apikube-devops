import { Router } from 'express'
import ResourceController from "../controllers/ResourceController";

const productRoutes = Router()
const resourceController = new ResourceController

productRoutes.get("/", resourceController.index )

export default productRoutes