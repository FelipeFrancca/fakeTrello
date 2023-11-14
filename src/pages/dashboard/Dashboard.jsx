import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";

import "../../assets/styles/Dashboard.css";
import MenuComponent from '../dashboard/components/menuComponent'

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";

import AppsOutageIcon from "@mui/icons-material/AppsOutage";
import NotificationsIcon from "@mui/icons-material/Notifications";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { Outlet } from "react-router-dom";

const optionsMenu = ["Worlspaces", "Recent", "Starred", "Templates"];
const account = [
  "Switch accounts",
  "Manage accounts",
  "Profile and visibility",
  "Activity",
  "Cards",
  "Settings",
  "Theme",
  "Help",
  "Shortcuts",
  "Log out",
];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box>
      <AppBar
        className="appBar"
        style={{
          backgroundColor: "#1D2125",
          borderBottom: "solid #ffffff 1px",
        }}
      >
        <Box style={{ padding: "0 1rem 0 1rem" }}>
          <Toolbar disableGutters>
            <AppsOutageIcon />
            <Box className="imageLogoContainer">
              <Box className="imageLogo"></Box>
            </Box>
            <Box>
              <MenuComponent></MenuComponent>
            </Box>
          
            <Box
              sx={{ display: "flex !important", alignItems: "center", gap: 1 }}
            >
              <NotificationsIcon />
              <HelpOutlineIcon />
              <Tooltip title="Account">
                <IconButton onClick={handleOpenUserMenu}>
                  <Avatar
                    alt="Felipe"
                    src="/static/images/avatar/2.jpg"
                    style={{ width: 24, height: 24, fontSize: 14 }}
                  />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {account.map((account) => (
                  <MenuItem key={account} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{account}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Box>
      </AppBar>
      <Outlet />
    </Box>
  );
}
export default ResponsiveAppBar;
