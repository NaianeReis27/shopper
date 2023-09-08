import styled from "styled-components";
import background from '../../assets/backgound.webp'
export const Form = styled.form`
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  background-color: var(--color-primary);
  background-image: url(${background});
  background-size: cover;
  gap: 20px;
  .custom-file-upload {
  border: 2px solid #ccc;
  display: inline-block;
  padding: 6px 12px;
  cursor: pointer;
  background-color: var(--color-header);
  border-radius: 50%;
  font-size: 16px;
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}

input[type="file"] {

  color: white;
}


.btn-containers{
  width: 200px;
  display: flex;
  justify-content: space-between

  
}
`;


