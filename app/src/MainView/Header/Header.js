import React, { useLayoutEffect, useState } from "react";
import "./Header.css";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { updateHeaderItems } from "../../redux/action";
import useCustomTranslation from "../../i18n";
import IconButton from "@mui/material/IconButton";
import LangMenu from "../../Genral/LangMenu/LangMenu";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import * as materialStuled from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

const HeaderItem = styled.div`
  cursor: pointer;
  font-weight: ${(p) => p.active && "bold"};
  padding-bottom: ${(p) => p.active && "1px"};
  border-bottom: ${(p) => p.active && "3px solid lightcoral"};
  color: ${(p) => p.active && "lightcoral"};
  display: flex;

  & .MuiSvgIcon-root {
    color: ${(p) => p.active && "lightcoral"};
  }
`;

export default function Header() {
  const app = useSelector((state) => state.app);
  const dispatch = useDispatch();
  const { t, i18n } = useCustomTranslation();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleWindowResize = () => {
    handleClose();
  };
  useLayoutEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <div className="header__container">
      <div className="test__logo"></div>
      <form className="header__search">
        <input type="text" />
        <IconButton
          onClick={(e) => {
            e.preventDefault();
          }}
          type="submit"
          className="header__search_icon"
        >
          <SearchIcon />
        </IconButton>
      </form>
      <div tabIndex="1" className="header__list">
        {app.headerItems.map((item) => {
          return (
            <HeaderItem
              active={item.active}
              onClick={() => {
                const temp = app.headerItems.map((elemnt) => {
                  if (elemnt.active) elemnt.active = false;
                  if (elemnt.value === item.value) elemnt.active = true;
                  return elemnt;
                });
                dispatch(updateHeaderItems(temp));
                navigate(item.path);
              }}
            >
              {t(item.value)}
            </HeaderItem>
          );
        })}
        <LangMenu />
      </div>
      <div className="more__options">
        <IconButton onClick={handleClick}>
          <MenuIcon />
        </IconButton>
      </div>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <Paper sx={{ width: 150 }}>
          {app.headerItems.map((item, index) => {
            if (index + 1 === app.headerItems.length) {
              return (
                <div className="div">
                  <MenuItem>
                    <HeaderItem
                      active={item.active}
                      onClick={() => {
                        const temp = app.headerItems.map((elemnt) => {
                          if (elemnt.active) elemnt.active = false;
                          if (elemnt.value === item.value) elemnt.active = true;
                          return elemnt;
                        });
                        dispatch(updateHeaderItems(temp));
                        navigate(item.path);
                      }}
                    >
                      <ListItemIcon>
                        <item.Icon fontSize="small" />
                      </ListItemIcon>
                      <ListItemText>{t(item.value)}</ListItemText>
                    </HeaderItem>
                  </MenuItem>
                  <Divider />
                  <MenuItem>
                    <ListItemIcon>
                      <LangMenu />
                    </ListItemIcon>
                  </MenuItem>
                </div>
              );
            } else
              return (
                <MenuItem>
                  <HeaderItem
                    active={item.active}
                    onClick={() => {
                      const temp = app.headerItems.map((elemnt) => {
                        if (elemnt.active) elemnt.active = false;
                        if (elemnt.value === item.value) elemnt.active = true;
                        return elemnt;
                      });
                      dispatch(updateHeaderItems(temp));
                      navigate(item.path);
                    }}
                  >
                    <ListItemIcon>
                      <item.Icon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>{t(item.value)}</ListItemText>
                  </HeaderItem>
                </MenuItem>
              );
          })}
        </Paper>
      </Menu>
    </div>
  );
}
