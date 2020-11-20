import React from 'react';

import styled from 'styled-components';


const Modal = styled.div`

  height: 100vh;
  width: 95vw;
  padding-left: 2.5vw;
  padding-right: 2.5vw;
  background-color: white;
  z-index: 2;
  position:absolute;
  animation: slidein .5s ease-in ;
`

const Scroll = styled.button`
  margin:20px;
  margin-bottom:54vh;
  box-sizing: border-box;
  height:50px;
  width:50px;
  background-color:white;
  padding:0px;
  border: 0.7px solid rgb(134, 134, 134);
  border-radius: 50%;
  outline:none;

`

const Row1 = styled.div`
  height : 15vh;
  display:flex;
  align-items:center;
  justify-content:space-between;
`

const Row2 = styled.div`
  height: 85vh;
  display:flex;
  align-items:center;
  justify-content:space-between;
`

const Text = styled.p`
  display:flex;
  justify-content: center;
  align-items:center;


  margin:0px;
  text-align:center;
`

const Close = styled.button`
  color: rgb(102, 102, 102);

  border:transparent;
  border-radius: 5px;
  padding: 5px 10px;
`

const Label = styled.label`
  font-weight: 100;
  margin: 0px 3px;
`

const Interactions = styled.button`
  outline:none;
  box-sizing: border-box;
  height:30px;
  width:30px;
  border:transparent;
  border-radius: 50%;
  background-color: white;
  margin: 0px 3px;
`


export {Modal, Scroll, Row1, Row2, Text, Close, Label, Interactions};