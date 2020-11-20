import React from 'react';
import Currentphoto from './currentImage.jsx';
import Position from './stackposition.jsx';
import {Modal, Scroll, Row1, Row2, Text, Close, Label, Interactions} from './StyledComponents/Photostack_styles.jsx';






class Photostack extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      photos:[],
      index:0
    }
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.checkends = this.checkends.bind(this);
    this.exit = this.exit.bind(this);
  }

  componentDidMount() {
    this.setState({
      photos:this.props.images,
      index: this.props.index
    },this.checkends)
  }


  exit () {
    var modal = document.getElementsByClassName('modal')[0]
    modal.classList.add('takeout');
    modal.addEventListener('animationend', this.props.hidestack)
  }

  next(event) {
    if(this.state.index < (this.state.photos.length - 1)) {

      this.setState({
        index: this.state.index + 1,
      },this.checkends)
    }
    document.getElementsByClassName('prev')[0].style.opacity = "1";

  }


  previous(event) {
    if(this.state.index > 0) {
      this.setState({
        index: this.state.index - 1,
      },this.checkends)
    }
    document.getElementsByClassName('next')[0].style.opacity = "1";

  }

  checkends() {
    if(this.state.index === 0) {

      document.getElementsByClassName('prev')[0].style.opacity = "0"
    } else if (this.state.index === (this.props.images.length-1)) {
      document.getElementsByClassName('next')[0].style.opacity = "0"
    }
  }



  render () {
    return (
      <Modal className = 'modal'>
        <Row1>
          <Close onClick = {this.exit} className = "hover">
            <i class="fas fa-times"></i>
            <Label>Close</Label>
          </Close>
          <Position current = {this.state.index} total = {this.props.images}/>
          <div>
            <Interactions className = "hover" onClick = {this.props.Sharemodal}>
              <i class="fas fa-share"></i>
            </Interactions>
            <Interactions className = "hover">
            <i class="far fa-heart"></i>
            </Interactions>
          </div>
        </Row1>



        <Row2 id = "cardstack">
          <Scroll className = 'prev hover' onClick = {this.previous}>
            <i class="fas fa-less-than sm"></i>
          </Scroll>

          <Currentphoto image = {this.props.images[this.state.index]}/>

          <Scroll className = 'next hover' onClick = {this.next}>
            <i class="fas fa-greater-than"></i>
          </Scroll>

        </Row2>


      </Modal>
    );
  }
}

export default Photostack;

