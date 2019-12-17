import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Popover from "@material-ui/core/Popover";
import Avatar from "@material-ui/core/Avatar";
import "./articleNavbar.css";

const menuSatu = [
  {
    name: "New story"
  },
  {
    name: "Stories"
  },
  {
    name: "series"
  }
];
const menuDua = [
  {
    name: "Bookmark"
  },
  {
    name: "Profile"
  },
  {
    name: "Settings"
  },
  {
    name: "Help"
  },
  {
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
        <Typography>
          <a
            style={{
              backgroundColor: "black",
              padding: 5,
              color: "white",
              fontFamily: "mono",
              fontSize: 20,
              textDecoration: "none",
              marginLeft: "-20px"
            }}
            href="/home"
          >
            M
          </a>
        </Typography>
        <div
          style={{
            display: "flex",
            justifyContent: "space-beetween",
            marginLeft: "auto",
            alignItems: "center",
            letterSpacing: "20px"
          }}
        >
          <SearchIcon className="coba" />
          <NotificationsIcon />
          <Button variant="outlined" size="small">
            Upgrade
          </Button>

          <IconButton
            aria-describedby={id}
            variant="contained"
            onClick={handleClick}
          >
            <Avatar
              style={{ border: "1px solid gray" }}
              alt="Remy Sharp"
              src="https://cdn-images-1.medium.com/fit/c/32/32/1*2esmZ2ycbaXZK5rw4fHR0A.jpeg"
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
                src="https://cdn-images-1.medium.com/fit/c/32/32/1*2esmZ2ycbaXZK5rw4fHR0A.jpeg"
              />
              <p>
                <strong>Fariz Hamzah</strong>
                <br />
                <a href="https://medium.com/@mufhabu">@gandewaarchi</a>
              </p>
            </div>

            <div>
              <a href="/">Become a member</a>
            </div>
            <hr />
            {menuSatu.map(satu => (
              <div className="App-subMenu">
                <a className="menu" href="/">
                  {satu.name}
                </a>
              </div>
            ))}

            <hr />
            {menuDua.map(dua => (
              <div className="App-subMenu">
                <a className="menu" href="/">
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
