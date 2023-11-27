import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";

import "../../assets/styles/Dashboard.css";
import MenuComponent from '../dashboard/components/menuComponent'

import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";

import AppsOutageIcon from "@mui/icons-material/AppsOutage";
import NotificationsIcon from "@mui/icons-material/Notifications";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { Outlet } from "react-router-dom";
import Zoom from '@mui/material/Zoom';

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
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box>
      <AppBar
        className="appBar"
        sx={{
          backgroundColor: "#1D2125",
          borderBottom: "solid #ffffff 1px",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between"}}>
          <Box style={{ padding: "0 1rem 0 1rem" }}>
            <Toolbar disableGutters>
            <Tooltip title="About us" placement="bottom-start" TransitionComponent={Zoom}>
                <IconButton>
                <AppsOutageIcon sx={{color: '#fff'}} />
                </IconButton>
                </Tooltip>
              <Box className="imageLogoContainer">
                <Box className="imageLogo"></Box>
              </Box>
              <Box>
                <MenuComponent></MenuComponent>
              </Box>
            
              <Box
                sx={{ display: "flex", alignItems: "center", gap: 1, }}
              >
                <Tooltip title="Notifications" TransitionComponent={Zoom}>
                <IconButton>
                <NotificationsIcon sx={{color: '#fff'}} />
                </IconButton>
                </Tooltip>
                <Tooltip title="Help">
                <IconButton>
                <HelpOutlineIcon sx={{color: '#fff'}} />
                </IconButton>
                </Tooltip>
                <Tooltip title="Account" TransitionComponent={Zoom}>
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
        </Box>
      </AppBar>
      <Outlet />
    </Box>
  );
}
export default ResponsiveAppBar;
