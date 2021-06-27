import React from "react";
import "./Header.css";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import Avatar from "@material-ui/core/Avatar";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import LionelMessi from '../../assests/LionelMessi.jpg';

const Header = (props) => {

  //for logout and My account 
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  //Close menu 
  const handleClose = () => {
    setAnchorEl(null);
  };

  //Get details of profile pictures
  const onClickLogoHandler = () => {
    sessionStorage.getItem("access-token") !== null ? props.history.push("/home") : props.history.push("/");
  }

  //Redirect to profile page.
  const profileClickHandler = () => {
    props.history.push("/profile");
  };

  //Redirect to login page after logout.
  const logoutClickHandler = () => {
    sessionStorage.removeItem("access-token");
    props.history.push("/");
  };

  return (
    <div>
      <header>
        <div className="app-header">
        <span className="header-title" onClick={() => { onClickLogoHandler() }}>{props.title}</span>
          {props.showHomePage === "home" && (
            <div className="header-right">
              <Input
                id="search"
                type="search"
                className="search-field"
                variant="outlined"
                placeholder="Search…"
                startAdornment={
                  <InputAdornment position="start"
                    variant="standard"
                    id="searchBoxIcon"
                    style={{ backgroundColor: "#c0c0c0" }}>
                    <SearchOutlinedIcon />
                  </InputAdornment>
                }
                disableUnderline={true}
              />
              <Avatar
                id="myHeaderMenu"
                alt="Remy Sharp"
                src=""
                className="icon-large"
                onClick={handleClick}
              />
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem style={{
                  fontSize: "small",
                  fontWeight: "bold",
                  cursor: "pointer"
                }} onClick={() => {
                  profileClickHandler();
                }}>My account</MenuItem>

                <hr className="menu-line"></hr>

                <MenuItem
                  style={{
                    fontSize: "small",
                    fontWeight: "bold",
                    cursor: "pointer"
                  }}
                  onClick={() => {
                    logoutClickHandler();
                  }}>Logout</MenuItem>
              </Menu>
            </div>
          )} 
           {
            props.showProfilePage === "profile" && (
              <div className="header-right">
                <Avatar
                  alt="Remy Sharp"
                  src={LionelMessi}
                  className="icon-large"
                  onClick={handleClick}
                />
                <Menu
                  id="fade-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem
                    style={{
                      fontSize: "medium",
                      fontWeight: "bold",
                      cursor: "pointer"
                    }}
                    onClick={() => {
                      logoutClickHandler();
                    }}
                  >
                    Logout
                  </MenuItem>
                </Menu>
              </div>
            )}  
        </div>   
      </header>
    </div>
  );
};

export default Header;