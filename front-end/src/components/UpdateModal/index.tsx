import React from "react";
import { Container } from "./styles";
import { AiOutlineClose } from "react-icons/ai";
import { useContext, useEffect, useState } from "react";
import { UtilsContext } from "../../context/utilscontext";
import { ProductResponse, Modal } from "../../interfaces";

export const UpdateModal = ({ title, setIsOpen, id }: Modal) => {
  const { products, editFormProducts } = useContext(UtilsContext);
  const [product, setProduct] = useState<null | ProductResponse | undefined>(
    null
  );
  const [inputValuePrice, setInputValuePrice] = useState("");

  useEffect(() => {
    const productFind = products.find((ele) => ele.code === id);
    if(productFind){
      setProduct(productFind);
      setInputValuePrice(productFind.new_price.toString())
    }
    
  }, [id, products]);

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleChangePrice = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValuePrice(event.target?.value);
  };

  const onSubmit = () => {
  
    editFormProducts( Number(inputValuePrice), product!.code);
    closeModal();
  };

  return (
    <Container>
      <div className="modal">
        <div className="modal-head">
          <h2>{title}</h2>

          <button onClick={closeModal}>
            <AiOutlineClose size={20} color="black" />
          </button>
        </div>
        <div className="modal-body">
          {product && (
            <>
              <form>
                <div>
                  <label>Novo Preço</label>
                  <input
                    type="number"
                    defaultValue={product.new_price}
                    onChange={handleChangePrice}
                  />
                </div>

                <button onClick={() => onSubmit()}>
                  Enviar
                </button>
              </form>
            </>
          )}
        </div>
        <div className="modal-footer"></div>
      </div>
    </Container>
  );
};
