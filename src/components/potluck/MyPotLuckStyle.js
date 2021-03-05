import styled from "styled-components";

const MyPotLuckStyle = styled.div`
  background-color: #eee;
  box-sizing: border-box;
  width: 55%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 50px auto;
  background: url("https://images.unsplash.com/photo-1503011994592-d30eb1ef61dc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1295&q=80")
    no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  /* border: 1px solid tomato; */
  border-radius: 10px;

  * {
    /* border: 1px solid tomato; */
  }

  h1 {
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight: 400;
    margin-top: 2rem;
    text-shadow: 1px 1px black;
    color: #5e46e8;
    /* border: 1px solid tomato; */
  }

  .formCont {
    width: 80%;
    border-radius: 100px;
  }

  .MuiTextField-root {
    margin-top: 1rem;
  }

  .MuiCard-root {
    width: 100%;
    margin: 10%;
  }

  button {
    padding: 0.3rem;
    margin: 1rem;
    border-radius: 6px;
    margin: 3rem 0;
  }
`;
export default MyPotLuckStyle;
