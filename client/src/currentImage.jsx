import React from 'react';
import styled from 'styled-components';


var Image = styled.div`
  background-image: url("${props => props.image}");
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
  height: 0;
  padding-top: 66.64%;
`


var Currentphoto = (props) => {
  return (
    <Image image = {props.image}/>
  );
}


export default Currentphoto;