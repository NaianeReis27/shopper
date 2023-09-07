import styled from "styled-components";

export const Table = styled.table`
  width: 100%;
  max-width: 1200px;
  border: none;
  margin: -200px auto 0;
  background-color: white;
  border-radius: 15px;
  border-collapse: collapse;
  border: none; 
  overflow: hidden;
  thead{
    padding: 10px;
    padding: 10px 20px;
    background-color: var(--color-header);
    tr{
      height: 60px;
      color: var(--color-white);
      th{
        text-align: left;
        padding: 0 20px;
      }
    }
  }

  tbody {
    tr {
    height: 50px;
    font-family: OpenSans-Regular;
    padding: 0 20px;
    font-size: 15px;
    color: gray;
    line-height: 1.2;
    font-weight: unset;
  }
  
  td, th{
    padding: 0 20px;
    vertical-align: middle;
    text-align: left;
  }

  .prices{
    div{
      display: flex;
      justify-content: space-between;
      vertical-align: middle;
     
    }
  }

  .upper{
    background-color: var(--color-alert-error);
    color: white;
  }

  .lower{
    background-color: var(--color-alert-warning);
    color: black;
  }

  .range{
    background-color: green;
  }
}
`;
