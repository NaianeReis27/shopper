import { Table } from "./styles";
import { useContext } from "react";
import { UtilsContext } from "../../context/utilscontext";
import { NumericFormat } from "react-number-format";
export const TableComponent = () => {
  const { products } = useContext(UtilsContext);

  return (
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
              <tr className={validations.price_limite}>
                <td>{code}</td>
                <td>{name}</td>
                <td>{cost_price}</td>
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
                <td>
                  <NumericFormat
                    value={new_price}
                    displayType={"text"}
                    thousandSeparator={"."}
                    decimalSeparator={","}
                    decimalScale={2}
                    fixedDecimalScale={true}
                    prefix={"R$ "}
                  />
                </td>
                <td>{percent}%</td>
              </tr>
            )
          )
        ) : (
          <h2>Adicione o arquivo</h2>
        )}
      </tbody>
    </Table>
  );
};
