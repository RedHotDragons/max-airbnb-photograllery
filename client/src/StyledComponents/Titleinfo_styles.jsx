import React from 'react';
import styled from 'styled-components';


const Topholder = styled.div`
  grid-area: TitleInfo;
  height: 95%;
  width: 100%;

`

const Name = styled.div`
  box-sizing: border-box;
  display:flex;
  align-items: center;
  height: 7vh;
  font-family: 'Airbnb Cereal App Bold';
  font-size: 25px;
`

const Search = styled.div`
  font-size: 13px;
  box-sizing: border-box;
  height: 3vh;
  display:flex;
  justify-content: space-between;
  align-items: center;
  padding-right:10px;
`

const Spacers = styled.div`
  display: inline-block;
  margin: 0px 6px;
  color: rgb(139, 139, 139);
`
const Dark = styled.div`
  margin: 0px;
  padding: 0px;
  display: inline-block;
  color: rgb(0,0,0);
`
const Light = styled.div`
  margin: 0px;
  padding: 0px;
  display: inline-block;
  color: rgb(139, 139, 139);
`
const Med = styled.div`
  margin: 0px;
  padding: 0px;
  display: inline-block;
  color: rgb(90, 90, 90);
  text-decoration: underline;
`

const SocialMed = styled(Med)`
  margin: 0px 3px;

`
const Social = styled.div`
font-size: 11px;
`



export {Topholder,Name, Search, Spacers, Dark, Light, Med, Social, SocialMed};