import {Router} from 'express'
import productRoutes from "../modules/product/routes";

const mainRouter = Router()

mainRouter.use('/api', productRoutes )

export default mainRouter