import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import { styled, alpha } from "@mui/material/styles";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: "auto",
  marginRight: "auto",
  width: "50%",
  [theme.breakpoints.down("sm")]: {
    width: "80%",
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
  paddingLeft: `calc(1em + ${theme.spacing(4)})`,
  width: "100%",
}));

export default function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setIsDrawerOpen(open);
  };

  return (
    <>
      <AppBar
        position="static"
        sx={{
          height: 80, // Adjust the height of the header
          justifyContent: "center",
          padding: "0 16px",
        }}
      >
        <Toolbar>
          {/* Left Side: Logo */}
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ display: { sm: "none" }, mr: 2 }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            <img
              src="/path/to/logo.png" // Replace with your logo's path
              alt="Logo"
              style={{ height: "50px" }} // Adjust logo height
            />
          </Typography>

          {/* Center: Search */}
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>

          {/* Right Side: Cart and Login */}
          <IconButton aria-label="cart" color="inherit" sx={{ ml: "auto" }}>
            <Badge badgeContent={4} color="error">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
          <Button color="inherit" sx={{ ml: 2 }}>
            Login
          </Button>
        </Toolbar>
      </AppBar>

      {/* Sidebar Drawer */}
      <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer(false)}>
        <List sx={{ width: 250 }}>
          <ListItem button>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Shop" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="About" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Contact" />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
}
