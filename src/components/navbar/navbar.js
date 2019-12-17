import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Popover from "@material-ui/core/Popover";
import Avatar from "@material-ui/core/Avatar";

import './navbar.css';

const menuSatu = [
  {
    link: "/newstories",
    name: "Nem story"
  },
  {
    link: "/story",
    name: "Stories"
  },
  {
    link: "/status",
    name: "Stats"
  }
];
const menuDua = [
  {
    link: "/bookmark",
    name: "Bookmarks"
  },
  {
    link: "/profile",
    name: "Profile"
  },
  {
    link: "/bookmark",
    name: "Setting"
  },
  {
    link: "/bookmark",
    name: "Help"
  },
  {
    link: "/bookmark",
    name: "Sign out"
  }
];

export default function SimplePopover() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <Toolbar className="App-ToolBar">
        <h1 className="App-Typography ">Medium</h1>
        <div
          style={{
            display: "flex",
            justifyContent: "space-beetween",
            marginLeft: "auto",
            alignItems: "center",
            letterSpacing: "20px"
          }}
        >
          <IconButton>
            <SearchIcon />
          </IconButton>
          <IconButton>
            <NotificationsIcon />
          </IconButton>
          <Button variant="outlined" size="small">
            Upgrade
          </Button>

          <IconButton
            aria-describedby={id}
            variant="contained"
            onClick={handleClick}
          >
            <Avatar
              className="App-Avatar"
              alt="Remy Sharp"
              src="https://miro.medium.com/fit/c/256/256/1*2esmZ2ycbaXZK5rw4fHR0A.jpeg"
            />
          </IconButton>
        </div>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom"
          }}
          transformOrigin={{
            vertical: "top"
          }}
        >
          <Typography className="App-poper">
            <div className="App-poperAvatar">
              <Avatar
                className="App-avatar"
                alt="Remy Sharp"
                src="https://miro.medium.com/fit/c/256/256/1*2esmZ2ycbaXZK5rw4fHR0A.jpeg"
              />
              <p>
                <strong>farizi hamzah</strong>
                <br />
                <a href="/">@mufhabu</a>
              </p>
            </div>

            <div>
              <a href="/">Become a member</a>
            </div>
            <hr />
            {menuSatu.map(satu => (
              <div className="App-subMenu">
                <a className="menu" href={satu.link}>
                  {satu.name}
                </a>
              </div>
            ))}
            <hr />
            {menuDua.map(dua => (
              <div className="App-subMenu">
                <a className="menu" href={dua.link}>
                  {dua.name}
                </a>
              </div>
            ))}
          </Typography>
        </Popover>
      </Toolbar>
    </div>
  );
}
