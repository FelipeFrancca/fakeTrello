import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";

import "../../assets/styles/Dashboard.css";
import MenuComponent from "../dashboard/components/menuComponent";

import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";

import AppsOutageIcon from "@mui/icons-material/AppsOutage";
import NotificationsIcon from "@mui/icons-material/Notifications";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { Outlet } from "react-router-dom";
import Zoom from "@mui/material/Zoom";
import SearchIcon from "@mui/icons-material/Search";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "50ch",
      },
    },
  },
}));

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
          borderBottom: "solid #9FADBC 1px",
        }}
      >
        <Toolbar disableGutters>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Box
              id="1"
              sx={{ display: "flex", alignItems: "center", marginLeft: "16px" }}
            >
              {/* Component with ID 1 */}
              <Tooltip
                title="About us"
                placement="bottom-start"
                TransitionComponent={Zoom}
              >
                <IconButton>
                  <AppsOutageIcon sx={{ color: "#9FADBC" }} />
                </IconButton>
              </Tooltip>
              <Box className="imageLogoContainer">
                <Box className="imageLogo"></Box>
              </Box>
              <Box sx={{ display: "flex", flexDirection: "row"}}>
                <MenuComponent />
                <MenuComponent />
                <MenuComponent />
                <MenuComponent />
              </Box>
            </Box>
            <Box
              id="2"
              sx={{ display: "flex", alignItems: "center", marginRight: "16px" }}
            >
              {/* Component with ID 2 */}
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase placeholder="Search…" />
              </Search>
              <Tooltip title="Notifications" TransitionComponent={Zoom}>
                <IconButton>
                  <NotificationsIcon sx={{ color: "#9FADBC" }} />
                </IconButton>
              </Tooltip>
              <Tooltip title="Help">
                <IconButton>
                  <HelpOutlineIcon sx={{ color: "#9FADBC" }} />
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
          </Box>
        </Toolbar>
      </AppBar>
      <Outlet />
    </Box>
  );
}

export default ResponsiveAppBar;
