import React from "react";
import { Table } from "./styles";
import { useContext, useState } from "react";
import { UtilsContext } from "../../context/utilscontext";
import { NumericFormat } from "react-number-format";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { UpdateModal } from "../UpdateModal";

export const TableComponent = () => {
  const { products } = useContext(UtilsContext);
  const [isOpen, setIsOpen] = useState(false);
  const [selectProduct, setSelectedProduct] = useState<number| null>(null);

  const handleclick = (id: number) => {
    setIsOpen(true);
    setSelectedProduct(id);
  };

  return (
    <>
      {isOpen && selectProduct && (
        <UpdateModal
          title={"Edite o produto"}
          setIsOpen={setIsOpen}
          id={selectProduct}
        ></UpdateModal>
      )}

      <Table>
        <thead>
          <tr>
            <th>Código</th>
            <th>Nome</th>
            <th>Preço de Custo</th>
            <th>Preço de Venda</th>
            <th>Novo Preço</th>
            <th>Porcentagem</th>
          </tr>
        </thead>

        <tbody>
          {products.length > 0 ? (
            products.map(
              ({
                code,
                cost_price,
                name,
                sales_price,
                percent,
                new_price,
                validations,
              }) => (
                <tr
                  className={
                    validations?.price_limite
                      ? validations.price_limite
                      : "range"
                  }
                >
                  <td>{code}</td>
                  <td>{name}</td>
                  <td>
                    {" "}
                    <NumericFormat
                      value={cost_price}
                      displayType={"text"}
                      thousandSeparator={"."}
                      decimalSeparator={","}
                      decimalScale={2}
                      fixedDecimalScale={true}
                      prefix={"R$ "}
                    />
                  </td>
                  <td>
                    <NumericFormat
                      value={sales_price}
                      displayType={"text"}
                      thousandSeparator={"."}
                      decimalSeparator={","}
                      decimalScale={2}
                      fixedDecimalScale={true}
                      prefix={"R$ "}
                    />
                  </td>
                  <td className="container-btn">
                    <NumericFormat
                      value={new_price}
                      displayType={"text"}
                      thousandSeparator={"."}
                      decimalSeparator={","}
                      decimalScale={2}
                      fixedDecimalScale={true}
                      prefix={"R$ "}
                    />
                    <button onClick={() => handleclick(code)}>
                      <AiFillEdit fill={"white"} size={20} />
                    </button>
                    <button>
                      <AiFillDelete fill={"white"} size={20} />
                    </button>
                  </td>
                  <td>
                    <NumericFormat
                      value={percent}
                      displayType={"text"}
                      thousandSeparator={"."}
                      decimalSeparator={","}
                      decimalScale={2}
                      fixedDecimalScale={true}
                    />{" "}
                    %
                  </td>
                </tr>
              )
            )
          ) : (
            <tr>
              <td className="no-products-found" colSpan={6}>
    Nenhum produto encontrado. Por favor, adicione um arquivo CSV.
  </td>
            </tr>
          )}
        </tbody>
      </Table>
    </>
  );
};
