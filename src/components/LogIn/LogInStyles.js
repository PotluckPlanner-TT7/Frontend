import styled from "styled-components";

const LogInDiv = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid black;

  * {
    border: 1px solid tomato;
  }

  .formCont {
    width: 80%;
    border-radius: 100px;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2%;
    margin: 2%;
  }

  input {
    width: 400px;
    text-align: center;
    border-radius: 6px;
    border: 1px solid gray;
    height: 2.3rem;
    font-size: 1.3rem;
    margin-top: 3%;
  }

  button {
    padding: 0.3rem;
    margin: 1rem;
    font-family: "Permanent Marker";
    border-radius: 6px;
    font-size: 1.5rem;
    background-color: lightblue;
    border: 2px solid lightblue;
    margin-left: 1rem;
    transition: 1s;
    :hover {
      background-color: green;
      color: white;
      border: 2px solid #49bf9d;
    }
    :disabled {
      background-color: grey;
      border: 2px solid white;
      color: white;
    }
  }

  .error {
    color: red;
    font-size: 0.8rem;
  }
`;

export default LogInDiv;
