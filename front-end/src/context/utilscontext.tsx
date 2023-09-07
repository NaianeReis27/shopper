import { useState, createContext, ReactNode } from "react";
import { ProductValidation, ProductResponse } from "../interfaces";

import api from "../services/api";
export interface ApiContextData {
  checkValidation: (data: ProductValidation[]) => void;
  products: ProductResponse[]
}
export const UtilsContext = createContext<ApiContextData>({} as ApiContextData);


export interface ApiContextProps {
  children: ReactNode;
}

export const UtilsProvider = ({ children }: ApiContextProps) => {

  const [products, setproducts] = useState<ProductResponse[]>([])
  
  const checkValidation = (data: ProductValidation[]): void => {
    api
          .post<ProductResponse[]>("/valid", data)
          .then((res) => {
            setproducts(res.data)
            console.log(res.data)
          })
          .catch((err) => console.log(err));
  };

  return (
    <UtilsContext.Provider
      value={{
        checkValidation,
        products
      }}
    >

      {children}
    </UtilsContext.Provider>
  );
};
