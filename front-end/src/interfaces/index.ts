import { Dispatch, SetStateAction } from "react"

export interface Product {
  code: number
  name: string
  cost_price: number
  sales_price: number
}

export interface ProductValidation {
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

export interface Modal {
  title: string
  setIsOpen:Dispatch<SetStateAction<boolean>>
  id: number
}