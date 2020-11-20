import React from 'react';
import {Backdrop, Modal, Close, Title} from './StyledComponents/ShareModal_styles.jsx';
import {Facebook, Twitter, CopyLink, Email, SMS, Messenger, WhatsApp, Embed} from './SocialLinks.jsx'

const Sharemodal = (props) => {

  if(!props.status) {
    return null;
  }


  return (
    <Backdrop>
      <Modal>
        <Close onClick = {props.changestatus}>
          <i class="fas fa-times "></i>
        </Close>
        <Title>Share this place with friends and family</Title>
        <Facebook/>
        <Twitter/>
        <CopyLink/>
        <Email/>
        <SMS/>
        <Messenger/>
        <WhatsApp/>
        <Embed/>
      </Modal>
    </Backdrop>
  );
}


export default Sharemodal;