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

  .entry {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5%;
  }

  input {
    width: 400px;
    text-align: center;
    border-radius: 20px;
    border: 1px solid gray;
    height: 1.7rem;
    font-size: 1.3rem;
  }

  button {
    padding: 0.5rem;
    margin: 1rem;
    font-family: "Permanent Marker";
    border-radius: 10%;
    font-size: 1.5rem;
    background-color: teal;
    border: none;
    margin-left: 1rem;
    transition: 1s;
    :hover {
      background-color: white;
      color: #49bf9d;
      border: none;
    }
    :disabled {
      background-color: grey;
      border: 2px solid white;
      color: white;
    }
  }

  .check {
    color: red;
    font-size: 0.8rem;
  }
`;

export default LogInDiv;
