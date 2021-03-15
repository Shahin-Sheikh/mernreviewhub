import styled from 'styled-components';

export const NavWrapper = styled.div`
  background-color: #000000;
  font-family: 'Poppins', sans-serif;
  form {
    background-color: #fff;
    margin-left: 40px;
    height: 40px;
    padding: 0 20px;
    border-radius: 100px;
    input {
      border: none;
    }
    input:focus {
      box-shadow: none;
    }
  }
  .navbar-light .navbar-nav .nav-link {
    color: rgba(0, 0, 0, 0.5);
    color: #fff;
  }
  a {
    color: #fff;
    text-decoration: none;
    background-color: transparent;
  }
`;
