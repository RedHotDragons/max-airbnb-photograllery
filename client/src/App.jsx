import React from 'react';
import axios from 'axios';
import Photopreview from './photopreview.jsx';
import Photostack from './Photostack.jsx';
import Navbar from './Navbar.jsx';
import Sharemodal from './ShareModal.jsx';
import Titleinfo from './Titleinfo.jsx';
import {Wrap, PhotoGallery, Staticinfo} from './StyledComponents/App_styles.jsx';

export default class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      urls: [],
      homepage: true,
      index: 0,
      share:false
    }
    this.Stackmodal = this.Stackmodal.bind(this);
    this.extracturls = this.extracturls.bind(this);
    this.changeindex = this.changeindex.bind(this);
    this.Sharemodal = this.Sharemodal.bind(this);
    this.Modalsetup = this.Modalsetup.bind(this);
  }

  componentDidMount () {
    axios.get('/api/photo-gallery/data')
    .then((data) => {

      this.extracturls(data.data[0])
    })
    .catch((err) => {
      console.log(err);
    })
  }

  extracturls (listingdata) {

    var urls = [];
    var listingkeys = Object.keys(listingdata);
    for(var key of listingkeys) {
      if(key.includes('photo')) {
        urls.push(listingdata[key]);
      }
    }
    this.setState({
      urls: urls
    })
  }
  changeindex (event) {
    if(!event){
      var photo_id = 0;

    } else {
      var classList = event.target.classList;
      var index = event.target.classList.length - 2;
      var photo_id = Number(classList[index]);
    }
    this.setState({
      index: photo_id
    },this.Stackmodal);
  }

  Modalsetup() {
    document.body.classList.toggle("lock");

  }

  Stackmodal () {
    console.log(this.Stackmodal, "in APP.jsx");
    console.log('im heeere');
    this.Modalsetup();
    this.setState({
      homepage: !this.state.homepage
    })
  }

  Sharemodal () {
    this.Modalsetup();
    this.setState({
      share:!this.state.share
    })
  }

  render () {
    console.log(this.state.urls);
    return (
      <div>
        <Wrap>
          <PhotoGallery id = 'contentwrap'>
            <Navbar/>
            <Titleinfo Sharemodal = {this.Sharemodal}/>
            <Photopreview showstack = {this.changeindex} photos = {this.state.urls}/>
            <Staticinfo/>
          </PhotoGallery>
        </Wrap>

        <Sharemodal status = {this.state.share} changestatus = {this.Sharemodal}/>
        {this.state.homepage === false
          ? <Photostack images = {this.state.urls} index = {this.state.index} hidephotostack = {this.Stackmodal}  Sharemodal = {this.Sharemodal}/>
          : (1+2)}
      </div>
    );
  }
}

//Work on event bubbling