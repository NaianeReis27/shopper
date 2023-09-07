import { Form } from "./styles";
import { useState } from "react";
import { useContext } from "react";
import { UtilsContext } from "../../context/utilscontext";
export const UploadComponent = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const {checkValidation} = useContext(UtilsContext)
  const submitForm = (e) => {
    e.preventDefault();

    const fileReader = new FileReader();

    if (selectedFile) {
      fileReader.onload = function (event) {
        const csvOutput = event.target.result;
        const arrayData = parseCSV(csvOutput);
        checkValidation(arrayData)
      };

      fileReader.readAsText(selectedFile);
    }
  };

  const parseCSV = (csvContent) => {
    const lines = csvContent.split("\n"); // Divide o CSV em linhas

    const data = [];

    for (let i = 1; i < lines.length; i++) {
      const row = lines[i].split(",");
      data.push({product_code: row[0], new_price: Number(row[1])});
    }
    console.log(data);
    return data;
  };

  const handleOnChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  return (
    <Form>
      <input type="hidden" name="MAX_FILE_SIZE" value="4194304" />
      <input
        type={"file"}
        id={"csvFileInput"}
        accept={".csv"}
        onChange={handleOnChange}
      />
      <button type="submit" onClick={submitForm}>
        Validar
      </button>
    </Form>
  );
};
