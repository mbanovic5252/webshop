import { React, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Badge, Box, IconButton, Menu, MenuItem } from "@mui/material";
import {
  PersonOutline,
  ShoppingBagOutlined,
  MenuOutlined,
  SearchOutlined,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { shades } from "../../theme";
import { setIsCartOpen } from "../../state";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  //Login menu
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (e) => {
    setAnchorEl(null);
    const { myValue } = e.currentTarget.dataset;
    switch (myValue) {
      case "signup":
        navigate("/signup");
        break;
      case "login":
        navigate("/login");
        break;
      case "logout":
        //logout
        break;
    }
  };
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        width: "100%",
        height: "60px",
        backgroundColor: "rgba(255,255,255,0.95)",
        color: "black",
        position: "fixed",
        top: "0",
        left: "0",
        zIndex: "1",
      }}
    >
      <Box
        sx={{
          width: "80%",
          margin: "auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box
          onClick={() => navigate("/")}
          sx={{ "&:hover": { cursor: "pointer" } }}
          color={shades.secondary[500]}
        >
          WEBSHOP
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            columnGap: "20px",
            zIndex: "2",
          }}
        >
          <IconButton sx={{ color: "black" }}>
            <SearchOutlined />
          </IconButton>
          <IconButton sx={{ color: "black" }} onClick={handleClick}>
            <PersonOutline />
          </IconButton>
          <Menu
            disableScrollLock={true}
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
          >
            <MenuItem data-my-value={"signup"} onClick={handleClose}>
              Sign up
            </MenuItem>
            <MenuItem data-my-value={"login"} onClick={handleClose}>
              Log in
            </MenuItem>
            <MenuItem data-my-value={"logout"} onClick={handleClose}>
              Log out
            </MenuItem>
          </Menu>
          <Badge
            badgeContent={cart.length}
            color="secondary"
            invisible={cart.length === 0}
            sx={{
              "& .MuiBadge-badge": {
                right: 5,
                top: 5,
                padding: "0 4px",
                height: "14px",
                minWidth: "13px",
              },
            }}
          >
            <IconButton
              onClick={() => dispatch(setIsCartOpen({}))}
              sx={{ color: "black" }}
            >
              <ShoppingBagOutlined />
            </IconButton>
          </Badge>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
