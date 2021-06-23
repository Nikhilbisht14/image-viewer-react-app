import React from "react";
import "./Header.css";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import Avatar from "@material-ui/core/Avatar";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

const Header = (props) => {

  //for logout and My account 
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    const myMenu = document.querySelector("#simple-menu");
    myMenu.style.marginTop = '48px';
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <header>
        <div className="app-header">
          <span className="header-title">{props.title}</span>
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
                }} onClick={handleClose}>My account</MenuItem>

                <hr className="menu-line"></hr>

                <MenuItem
                  style={{
                    fontSize: "small",
                    fontWeight: "bold",
                  }}
                  onClick={handleClose}>Logout</MenuItem>
              </Menu>
            </div>
          )}
        </div>
      </header>
    </div>
  );
};

export default Header;