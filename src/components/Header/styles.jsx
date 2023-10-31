import styled from 'styled-components';

export const Container = styled.div`
  height: 100px;
  display: flex;
  background-color: #fff; 
  box-shadow: 0 0 20px 3px;

  > svg { 
    position: fixed;
    color: black;
    width: 30px;
    height: 30px;
    margin-top: -30px;
    margin-left: -70px;
    cursor: pointer;
    left: 90px;
    top: 70px;
  }
`;