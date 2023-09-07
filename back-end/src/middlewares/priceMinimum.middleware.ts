import { type Request, type Response, type NextFunction } from 'express'
import { connection } from '../database'

const priceMinimumMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction

): Promise<void> => {
  const query = 'SELECT * FROM products WHERE code = ?'
  const data = req.body
  req.products = []
  for (const product of data) {
    const keys = [product.product_code]

    const [result] = await new Promise<any>((resolve, reject) => {
      connection.query(query, keys, function (err, results) {
        if (err) {
          reject(err)
        } else {
          resolve(results)
        }
      })
    })

    if (result) {
      const formattedNewPrice = Number(product.new_price.toFixed(2))
      const percent = ((formattedNewPrice - Number(result.sales_price)) / Number(result.sales_price)).toFixed(2)
      const productData = {
        code: Number(result.code),
        name: result.name,
        new_price: formattedNewPrice,
        cost_price: Number(result.cost_price),
        sales_price: Number(result.sales_price),
        percent: Number(percent) * 100,
        validations: {
          price_min: Number(result.cost_price) > formattedNewPrice,
          price_limite: null
        }
      }
      req.products.push(productData)
    }
  }
  next()
}

export default priceMinimumMiddleware
