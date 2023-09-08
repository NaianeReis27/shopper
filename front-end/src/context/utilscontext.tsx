import { useState, createContext, ReactNode, useEffect } from "react";
import React from "react";
import { ProductValidation, ProductResponse } from "../interfaces";
import { toast } from "react-toastify";
import api from "../services/api";
export interface ApiContextData {
  checkValidation: (data: ProductValidation[]) => void;
  products: ProductResponse[];
  validationForm: (selectedFile: File) => void;
  updateProducts: () => void;
  editFormProducts: (new_price: number, id: number) => void;
  productsIsValid: boolean;
}
export const UtilsContext = createContext<ApiContextData>({} as ApiContextData);

export interface ApiContextProps {
  children: ReactNode;
}

export const UtilsProvider = ({ children }: ApiContextProps) => {
  const [products, setproducts] = useState<ProductResponse[]>([]);
  const [productsIsValid, setProductsIsValid] = useState<boolean>(false);


  useEffect(()=>{
  },[products])
  const isProductsValid = (data: ProductResponse[]) => {
      const valid = data.every(
        (ele: ProductResponse) =>
          ele.validations?.price_limite === "range" &&
          ele.validations?.price_min === true
      );

      setProductsIsValid(valid);
    
  }

  const checkValidation = (data: ProductValidation[]): void => {
    api
      .post<ProductResponse[]>("/valid", data)
      .then((res) => {
        setproducts(res.data);
        isProductsValid(res.data)
        toast.success("Ação concluída com sucesso!", {
          position: "top-right",
          autoClose: 3000,
        });
      })
      .catch((err) => console.log(err));
  };

  const updateProducts = (): void => {
    if (productsIsValid) {
      api
        .patch<ProductResponse[]>("/valid", products)
        .then((res) => {
          setproducts(res.data);
          console.log(res.data, "segredo");
          toast.success("Produtos atualizados com sucesso!", {
            position: "top-right",
            autoClose: 3000,
          });
        })
        .catch((err) =>
          toast.error("Falha na  atualização dos produtos!", {
            position: "top-right",
            autoClose: 3000,
          })
        );
    } else {
      toast.error("O arquivo tem que ser alterado!", {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  const editFormProducts = (new_price: number, id: number): void => {
    const newArray = products.map((ele) => {
      if (ele.code === id) {
        return { code: Number(ele.code), new_price: Number(new_price) };
      }
      return { code: Number(ele.code), new_price: Number(ele.new_price) };
    });

    checkValidation(newArray);
  };

  const validationForm = (selectedFile: File) => {
    const fileReader = new FileReader();
    if (selectedFile) {
      fileReader.onload = function (event) {
        if (event.target) {
          const csvOutput = event.target.result;
          const arrayData = parseCSV(csvOutput);
          checkValidation(arrayData);
        }
      };

      fileReader.readAsText(selectedFile);
    } else {
      toast.error("É preciso adicionar um arquivo!", {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  const parseCSV = (csvContent: any): ProductValidation[] => {
    const lines = csvContent.split("\n");
    const data = [];

    for (let i = 1; i < lines.length; i++) {
      const row = lines[i].split(",");
      data.push({ code: Number(row[0]), new_price: Number(row[1]) });
    }
    return data;
  };

  return (
    <UtilsContext.Provider
      value={{
        checkValidation,
        products,
        validationForm,
        updateProducts,
        editFormProducts,
        productsIsValid,
      }}
    >
      {children}
    </UtilsContext.Provider>
  );
};
