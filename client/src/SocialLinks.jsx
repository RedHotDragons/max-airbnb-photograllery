import React from 'react';
import {Media, Link} from './StyledComponents/ShareModal_styles.jsx';





var Facebook = () => {
  return (
    <Media>
      <i class="fab fa-facebook-f"></i>
      <Link href = "https://www.facebook.com/" target="_blank" className = "Link">Facebook</Link>
    </Media>
  );
}

var Twitter = () => {
  return (
    <Media>
      <i class="fas fa-link"></i>
      <Link href = "https://twitter.com/intent/tweet?source=tweetbutton&text=Hi%20Just%20Tested%20out%20Anish%27s%20Awsome%20Application" target="_blank" className = "Link">Twitter</Link>
    </Media>
  );
}


var CopyLink = () => {
  return (
    <Media>
      <i class="fab fa-twitter"></i>
      <Link target="_blank" className = "Link">Copy Link</Link>
    </Media>
  );
}

var Email = () => {
  return (
    <Media>
      <i class="fas fa-envelope"></i>
      <Link href = "https://mail.google.com/mail/u/0/#inbox?compose=new" target="_blank" className = "Link">Email</Link>
    </Media>
  );
}

var SMS = () => {
  return (
    <Media>
      <i class="fas fa-sms"></i>
      <Link target="_blank" className = "Link">SMS</Link>
    </Media>
  );
}

var Messenger = () => {
  return (
    <Media>
      <i class="fab fa-facebook-messenger"></i>
      <Link target="_blank" className = "Link">Messenger</Link>
    </Media>
  );
}

var WhatsApp = () => {
  return (
    <Media>
      <i class="fab fa-whatsapp"></i>
      <Link target="_blank" className = "Link">WhatsApp</Link>
    </Media>
  );
}

var Embed = () => {
  return (
    <Media>
      <i class="fab fa-wolf-pack-battalion"></i>
      <Link target="_blank" className = "Link">Embed</Link>
    </Media>
  );
}



export {Facebook, Twitter, CopyLink, Email, SMS, Messenger, WhatsApp, Embed};