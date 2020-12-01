import React from 'react';

import styled from 'styled-components';


const Photobox = styled.div`
  grid-area: PhotoContent;
  height: 100%;
  width: 100%;
  min-height: 273px;
  max-width: 928px;


  position:fixed;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas :
    " Main photo1 photo2"
    " Main photo3 photo4";
  gap: .4em;
  position:absolute;
  z-index:0;
`

const Previews = styled.div`
  background-color: teal;
  background-size: max(220px ,120%) 120%;
`

const Main = styled(Previews)`
  grid-area: Main;
  border-top-left-radius: 1.8vh;
  border-bottom-left-radius: 1.8vh;
  background-size: 100% 100%;
`
const Photo1 = styled(Previews)`
  grid-area: photo1;
`

const Photo2 = styled(Previews)`
  grid-area: photo2;
  border-top-right-radius: 1.8vh;
`

const Photo3 = styled(Previews)`
  grid-area: photo3;
`

const Photo4 = styled(Previews)`
  grid-area: photo4;
  border-bottom-right-radius: 1.8vh;
  z-index: 4;
`
const ShowPhotos = styled.button`
  grid-area: photo4;
  outline:none;
  background-color: white;
  border: 0.8px solid black;
  border-radius:3px;
  place-self: end;
  z-index: 5;
`

export {Photobox, Previews, Main, Photo1, Photo2, Photo3, Photo4, ShowPhotos};