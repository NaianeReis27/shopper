export interface Product {
  code: number
  name: string
  cost_price: number
  sales_price: number
}
export interface ProductValid {
  code: number
  new_price: number
}

export interface ProductResponse {
  code: number
  name: string
  cost_price: number
  sales_price: number
  new_price: number
  percent: number
  validations: {
    price_min: boolean
    price_limite: 'upper' | 'lower' | 'range' | null
  }
}

export interface ProductWithPack {
  id: number
  pack_id: number
  product_id: number
  qty: number
  code: number
  name: string
  cost_price: number
  sales_price: number
}
