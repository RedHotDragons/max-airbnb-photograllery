import React from 'react';
import {NavbarWrap, NavbarCont, Searchbar, Search, Navints, Menu, Searchinput, Logo} from './StyledComponents/Navbar_styles.jsx';
const Navbar = () => {
  return (
    <NavbarWrap>
      <NavbarCont>
        <Logo>
          <i className ="fab fa-airbnb fa-2x logo"></i>
          <label className = 'logo'>airbnb</label>
        </Logo>
        <Searchbar>
          <Searchinput />
          <Search>
            <i class="fas fa-search"></i>
          </Search>
        </Searchbar>
        <div>
          <Navints className = "hover">Become a host</Navints>
          <Navints className = "hover"><i class="fas fa-globe"></i></Navints>
          <Menu>
            <i class="fas fa-bars"></i>
            <i class="fas fa-user"></i>
          </Menu>
        </div>
      </NavbarCont>
    </NavbarWrap>
  );
}


export default Navbar;


