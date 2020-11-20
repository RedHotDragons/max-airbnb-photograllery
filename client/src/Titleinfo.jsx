import React from 'react';
import {Topholder,Name, Search, Spacers, Dark, Light, Med, Social, SocialMed} from './StyledComponents/Titleinfo_styles.jsx'

var Titleinfo = (props) => {
  return (
    <Topholder>
      <Name>
      Vintage Ranch - Paso Robles
      </Name>
      <Search>
        <div>
          <span className="reviewsStar logo">&#9733;</span>
          <Dark>4.99</Dark>
          <Light>(189)</Light>
          <Spacers>∙</Spacers>
          <i class="fas fa-medal logo"></i>
          <Light>Superhost</Light>
          <Spacers>∙</Spacers>
          <Med>Paso Robles, California, United States</Med>
        </div>
        <Social>
          <i class="fas fa-share"></i>
          <SocialMed onClick = {props.Sharemodal}>Share</SocialMed>
          <i class="far fa-heart"></i>
          <SocialMed>Save</SocialMed>
        </Social>
      </Search>
    </Topholder>


  );
}


export default Titleinfo;