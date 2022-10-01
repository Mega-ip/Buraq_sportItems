import React from "react";
import "./Header.css";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { updateHeaderItems } from "../../redux/action";
import useCustomTranslation from "../../i18n";
import IconButton from "@mui/material/IconButton";
import LangMenu from "../../Genral/LangMenu/LangMenu";
import SearchIcon from "@mui/icons-material/Search";
const HeaderItem = styled.div`
  cursor: pointer;
  font-weight: ${(p) => p.active && "bold"};
  padding-bottom: ${(p) => p.active && "1px"};
  border-bottom: ${(p) => p.active && "3px solid lightcoral"};
`;
export default function Header() {
  const app = useSelector((state) => state.app);
  const dispatch = useDispatch();
  const { t, i18n } = useCustomTranslation();

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
      <div className="header__list">
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
              }}
            >
              {t(item.value)}
            </HeaderItem>
          );
        })}
        <LangMenu />
      </div>
    </div>
  );
}
