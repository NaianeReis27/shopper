import { connection } from '../../database/index.ts'
import { type Product } from '../../interfaces/products.interfaces.ts'

const createProductsServices = async (products: Product): Promise<any> => {
  const query = 'INSERT INTO products (code, cost_price, name, sales_price) VALUES (?, ?, ?, ?)'
  const keys = [products.code, products.cost_price, products.name, products.sales_price]
  connection.query(query, keys, function (err, results) {
    if (err) {
      throw err
    } else {
      return results
    }
  })
}

export default createProductsServices
