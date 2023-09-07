import { Router } from 'express'
import createProductsControllers from '../../controllers/products.controller.ts/createProducts.controller'
import validListProductsControllers from '../../controllers/products.controller.ts/validListProducts.controller'
import priceMinimumMiddleware from '../../middlewares/priceMinimum.middleware'
import typeValidationMiddleware from '../../middlewares/typeValidation.middleware'
import priceAdjustmentMiddleware from '../../middlewares/priceAdjustmentLimit.middleware'
const productsRoutes = Router()

productsRoutes.post('', createProductsControllers)
productsRoutes.post('/valid', typeValidationMiddleware, priceMinimumMiddleware, priceAdjustmentMiddleware, validListProductsControllers)
export default productsRoutes
