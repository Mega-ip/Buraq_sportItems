import { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import LanguageIcon from "@mui/icons-material/Language";
import useCustomTranslation, { languageItems } from "../../i18n";
import IconButton from "@mui/material/IconButton";

function LangMenu({ setAlignItems }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const { t, i18n } = useCustomTranslation();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (item) => {
    setAnchorEl(null);
  };

  return (
    <div>
      {/* <IconButton
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                endIcon={<LanguageIcon />}
            >
                </IconButton> */}

      {/* </Button> */}
      <IconButton
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        color="success"
      >
        <LanguageIcon />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {languageItems.map((item) => {
          return (
            <MenuItem
              onClick={(e) => {
                i18n.changeLanguage(item.value);
                setAnchorEl(null);
              }}
            >
              {item.label}
            </MenuItem>
          );
        })}
      </Menu>
    </div>
  );
}

export default LangMenu;
