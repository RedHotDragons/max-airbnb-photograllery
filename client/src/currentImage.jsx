import React from 'react';
import styled from 'styled-components';


var Image = styled.div`
  height:500px;
  width:500px;
  background-image: url("${props => props.image}");
`


var Currentphoto = (props) => {
  return (
    <Image image = {props.image}/>
  );
}


export default Currentphoto;