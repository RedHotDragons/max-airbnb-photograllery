import React from 'react';
import styled from 'styled-components';

const Backdrop = styled.div`
  height: 100vh;
  width:100vw;
  background-color: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items:center;
  position:fixed;
  z-index:3;
`


const Modal = styled.div`
  padding: 15px;
  height: 83vh;
  width: 26vw;
  background-color:white;
`

const Close = styled.button`
  border:transparent;
  background-color:white;
`

const Title = styled.div`
  padding: 15px 0px;
  font-family: 'Airbnb Cereal App Bold';
  font-size:20px;
  color:  rgb(63, 63, 63);
  border-bottom: 0.3px solid rgba(0, 0, 0, 0.2);
`

const Media = styled.div`
  padding: 20px 0px;
  font-family: 'Airbnb Cereal App Bold';
  font-size:15px;
  border-bottom: 0.3px solid rgba(0, 0, 0, 0.2);
  color:black;

`

const Link = styled.a`
  color: rgb(0, 167, 167);
  border:transparent;
  margin: 0px 7px;
  text-decoration: none;
`


export {Backdrop, Modal, Close, Title, Media, Link};