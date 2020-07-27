import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  background-color: #fff;

  img {
    width: 200px;
    margin-bottom: 30px;
  }

  input {
    margin-bottom: 20px;
    border: 0;
    border-bottom: 1px solid grey;
    font-size: 18px;
  }

  button {
    margin-bottom: 30px;
    width: 230px;
    height: 40px;
    background-color: #000;
    border: 0;
    color: #fff;
    cursor: pointer;
    font-size: 18px;
  }

  a {
    margin-bottom: 10px;
    color: black;
    text-decoration: none;
  }
`;
