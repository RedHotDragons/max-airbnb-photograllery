import React from 'react';

var Position = (props) => {
  var current = props.current + 1;
  var total = props.total.length;

  return (
  <div>{current}/{total}</div>
  );
}


export default Position;