import styled from '@emotion/styled';

export const TransactionsTable = styled.table`
  margin: 50px auto;
  width: 90%;
  padding: 5px;
  box-shadow: 5px 5px 20px 10px rgba(75, 75, 75, 0.75);
  border-radius: 5px;
  font-weight: 700;
  text-align: center;

  & thead {
    background-color: rgba(0, 255, 200, 1);
  }

  & tr:hover {
    background-color: rgba(0, 255, 200, 1);
    text-shadow: 1px 1px 2px white, 0 0 1em white, 0 0 0.2em white;
    cursor: pointer;
  }

  & th,
  & td {
    padding: 10px 15px;
    border: 1px solid rgba(0, 255, 200, 1);
    border-radius: 10px;
  }
`;
