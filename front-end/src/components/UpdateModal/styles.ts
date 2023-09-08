import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  .modal {
    width: 500px;
    background-color: white;
    padding: 40px 20px;
    border-radius: 8px;
    .modal-head {
      display: flex;
      justify-content: space-between;
      h2{
        margin: 10px 0;
      }
      button {
        position: relative;
        top: -20px;
        border: 0;
        background: none;
        cursor: pointer;
      }
    }
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    div {
      display: flex;
      flex-direction: column;
      gap:5px;
      width: 100%;
      label{
        font-size: 15px;
        font-weight:600;
      }
      input {
        width: 100%;
        padding: 10px;
      }
    }

    button {
      padding: 10px;
      background-color: var(--color-alert-success);
      border: none;
      color: white;
      cursor: pointer;
    }

    button:active {
      transform: scale(0.95);
      background-color: var(--color-bg-form);
    }
  }
`;
