import { Form } from "./styles";
import { useState } from "react";
import React from "react";
import { useContext } from "react";
import { UtilsContext } from "../../context/utilscontext";
import { AiOutlineCloudUpload } from "react-icons/ai";
export const UploadComponent = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const { validationForm, updateProducts, productsIsValid } = useContext(UtilsContext);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
  if (files && files.length > 0) {
    setSelectedFile(files[0]);
  }
  };

  const confirmSubmit = () => {
    updateProducts();
  };

  const validationSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent> | Event) => {
    e.preventDefault()
    console.log(productsIsValid)
    validationForm(selectedFile!);
  };

  return (
    <Form>
      <AiOutlineCloudUpload color="#ffffff" size={60} />
      <input
        type={"file"}
        id={"csvFileInput"}
        accept={".csv"}
        onChange={handleOnChange}
      />

      <div className="btn-containers">
        <button type="submit" onClick={(e) => validationSubmit(e)}>
          Validar
        </button>
        <button type="submit" disabled={!productsIsValid} onClick={confirmSubmit}>
          Confirmar
        </button>
      </div>
    </Form>
  );
};
