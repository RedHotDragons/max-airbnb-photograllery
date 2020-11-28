import React from 'react';

import styled from 'styled-components';


const NavbarWrap = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 8.7vh;
  max-height: 8.7vh;
  box-shadow: 0px 20px 30px -25px rgba(0,0,0,0.1);
  background-color: white;
  position: absolute;
  z-index: 1;
`

const NavbarCont = styled.div`
  display: flex;
  height: 100%;
  width: 87vw;
  max-width: 928px;
  align-items: center;
  justify-content: space-between;
`

const Searchbar = styled.div`
  height: 50%;
  width: min(30%, 250px);
  border: 1px solid rgba(0,0,0,0.2);
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  align-items:center;

`

const Search = styled.div`
  display:flex;
  justify-content: center;
  align-items:center;
  box-sizing: border-box;
  height: 25px;
  width: 25px;
  margin-right: 1.5%;
  margin-bottom: 0.2%;
  border-radius: 50%;
  background-color: rgb(246, 67, 96);
  color:white;
`

const Navints = styled.div`
  display: inline-block;
  height: 40%;
  /* width: min(60%, 250px); */
  border: 1px solid transparent;
  border-radius: 15px;
  background-color: white;
  font-size: small;
  margin: 0px 5px;
  padding: 7px;

`

const Menu = styled(Navints)`
  border: 0.5px solid rgba(90,90,90,0.7);
`

const Searchinput = styled.input`
  width: 60%;
  margin-left:5px;
  border: transparent;
  outline:none;
`

const Logo = styled.div`
  display:flex;
  align-items:center;
`

export {NavbarWrap, NavbarCont, Searchbar, Search, Navints, Menu, Searchinput, Logo};