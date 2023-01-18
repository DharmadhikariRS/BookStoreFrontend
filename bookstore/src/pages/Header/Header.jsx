import React, { useEffect, useState } from "react";
// import * as React from 'react';
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import { display } from "@mui/system";
import Headercss from "../Header/Header.css";
import educationlogo from "../../images/logo.png";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Await, useNavigate } from "react-router-dom";
import { getBooksFromCartAPI } from "../../Service/book.service";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles({
  SearchBox: {
    position: "absolute",
    marginLeft: "25%",
    width: "40%",
    backgroundColor: "white",
    borderRadius: "6px",
  },
  iconBox1: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "small",
  },
  cartLogoDiv: {
    position: "absolute",
    display: "flex",
    justifyContent: "space-between",
    width: "12%",
    marginLeft: "82%",
  },
  ["@media only screen and (min-width: 320px) and (max-width: 480px)"]: {
    cartLogoDiv: {
      marginLeft: "66%",
    },
    iconBox1: {
      fontSize: "x-small",
      margin: "0px 2%",
    },
  },
  ["@media only screen and (min-width: 481px) and (max-width: 899px)"]: {
    SearchBox: {
      marginLeft: "30%",
    },
    typoClass: {
      marginLeft: "12%!important",
    },
    iconBox1: {
      margin: "0px 2%",
    },
    cartLogoDiv: {
      marginLeft: "74%",
    },
    IconSpan: {
      fontSize: "11px",
    },
  },
});
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },

  width: "100%",
  [theme.breakpoints.up("sm")]: {
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
  color: "grey",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "100%",
      // background:'white'
      color: "grey",
    },
  },
}));

function Header({ setShowSearchBook, searchBookName, setSearchBookName }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [bookArray, setBookArray] = useState([]);
  const classes = useStyle();
  const navigate = useNavigate();
  const getCartBooks = () => {
    navigate("/cart");
  };
  const searchBook = (e) => {
    setSearchBookName(e.target.value);
    setShowSearchBook(true);
  };

  return (
    <Box sx={{ flexGrow: 1 }} className="BoxOuter">
      <AppBar
        position="static"
        sx={{ background: "#A03037", padding: "0" }}
        className="Appbarclass"
      >
        <Toolbar className="ToolBarClass">
          <Box className="ImageClass">
            <img src={educationlogo} alt="logo" className="ImageClass" />
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" }, marginLeft: "10%" }}
            className={classes.typoClass}
          >
            Bookstore
          </Typography>
          <Box className={classes.SearchBox}>
            <Search className="SearchBox1">
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
                className="SearchBox1"
                value={searchBookName}
                onChange={searchBook}
              />
            </Search>
          </Box>
          <Box className={classes.cartLogoDiv}>
            <div className={classes.iconBox1}>
              <Person2OutlinedIcon />
              <span className={classes.IconSpan}>Profile</span>
            </div>
            <div
              className={classes.iconBox1}
              onClick={() => {
                navigate("/wishlist");
              }}
            >
              <FavoriteIcon />
              <span className={classes.IconSpan}>Wishlist</span>
            </div>
            <div
              className={classes.iconBox1}
              onClick={() => {
                getCartBooks();
              }}
            >
              <Badge badgeContent={0} color="primary">
                <AddShoppingCartOutlinedIcon />
              </Badge>
              <span className={classes.IconSpan}>Cart</span>
            </div>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
