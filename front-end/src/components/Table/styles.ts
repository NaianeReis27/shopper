import styled from "styled-components";

export const Table = styled.table`
  width: 100%;
  max-width: 1200px;
  border: none;
  margin: -100px auto 0;
  background-color: white;
  border-radius: 15px;
  border-collapse: collapse;
  border: none; 
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  
  thead{
    padding: 10px;
    padding: 10px 20px;
    background-color: white;
    color: var(--color-primary);
    tr{
      height: 60px;
      
      th{
        text-align: left;
        padding: 0 20px;
      }
    }
  }
 
  tbody {
    tr {
    color: white;
    height: 50px;
    padding: 0 20px;
    font-size: 15px;
    line-height: 1.2;
    font-weight: unset;
  }
  
  td, th{
    padding: 0 20px;
    vertical-align: middle;
    text-align: left;
    
  }

  .container-btn{
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 50px;
    button{
      cursor: pointer;
      background: none;
      border: none;
      width: 60px;
    }
  }

  .prices{
    div{
      display: flex;
      justify-content: space-between;
      vertical-align: middle;
     
    }
  }
  .no-products-found{
    color: black
  }
  .upper{
    background-color: var(--color-alert-error);
  }

  .lower{
    background-color: var(--color-alert-warning);
   
  }

  .range{
    background-color: var(--color-alert-success);
  }

  .price-gray{
    background-color: var(--color-gray);
    color: gray
  }
}
`;
