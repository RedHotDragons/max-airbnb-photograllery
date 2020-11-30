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
  gap: .4em;
  position:absolute;
  z-index:0;
`

const Previews = styled.div`
  background-color: teal;
  background-size: 120% 120%;
`

const Main = styled(Previews)`
  grid-row: 1/3;
  border-top-left-radius: 1.8vh;
  border-bottom-left-radius: 1.8vh;
  background-size: 100% 100%;
`

const Photo2 = styled(Previews)`
  border-top-right-radius: 1.8vh;
`

const Photo4 = styled(Previews)`
  border-bottom-right-radius: 1.8vh;
`
const ShowPhotos = styled.button`
  outline:none;
  background-color: white;
  border: 0.8px solid black;
  border-radius:3px;
  position:absolute;
  margin-top: 46.5vh;
  margin-left: min(72vw, 800px);

  z-index: 1;
`

export {Photobox, Previews, Main, Photo2, Photo4, ShowPhotos};