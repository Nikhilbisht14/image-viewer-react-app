import React from 'react';
import './Header.css';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import InputAdornment from '@material-ui/core/InputAdornment';
import FilledInput from '@material-ui/core/FilledInput';
import Avatar from '@material-ui/core/Avatar';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';

const Header = (props) => {
  return (
    <div>
      <header className="app-header">
        <h2 className="header-title">{props.title}</h2>

        {/* <div className="searchBar">
          <FilledInput style={{ backgroundColor: "#c0c0c0", borderRadius: "4px", width: "300px", height: "35px", paddingBottom: "7px", margin: "5px" }} placeholder="Search..." variant="outlined"
            startAdornment={(
              <InputAdornment variant="standard" position="start" id="searchBoxIcon" style={{ backgroundColor: "#c0c0c0" }}>
                <SearchOutlinedIcon />

              </InputAdornment>
            )}
            disableUnderline={true}

          />
        </div> */}

      </header>
    </div>
  );
}

export default Header;