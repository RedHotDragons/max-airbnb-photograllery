import React from 'react';
import {Photobox, Previews, Main, Photo1, Photo2, Photo3, Photo4, ShowPhotos} from './StyledComponents/Photopreview_styles.jsx'

class Photopreview extends React.Component {
  constructor(props) {
    super(props);

    this.buttonhandle = this.buttonhandle.bind(this);
  }

  photosupplier() {
    var gridsquares = document.getElementsByClassName('previewphoto');
    for(var i = 0; i < gridsquares.length; i++) {
      gridsquares[i].style.backgroundImage = `url("${this.props.photos[i]}")`;
    }
  }

  buttonhandle () {
    this.props.showstack();
  }

  render() {
    this.photosupplier();
    return (
      <Photobox id = "photobox" >
        <Main onClick = {this.props.showstack} className = "main 0 previewphoto" ></Main>
        <Photo1 onClick = {this.props.showstack} className = "1 previewphoto"></Photo1>
        <Photo2 onClick = {this.props.showstack} className = "2 previewphoto"></Photo2>
        <Photo3 onClick = {this.props.showstack} className = "3 previewphoto"></Photo3>
        <Photo4 onClick = {this.props.showstack} className = "4 previewphoto"></Photo4>
        <ShowPhotos onClick = {this.buttonhandle} className = "hover">
          <i class="fas fa-ellipsis-v"></i>
          Show All Photos
        </ShowPhotos>
      </Photobox>

    );
  }

}




export default Photopreview;