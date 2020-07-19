import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const StyledMenu = withStyles({
  paper: {
    background: 'rgba(84, 84, 84, 0.2)',
    borderRadius: '20px',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '& .MuiSvgIcon-root': {
      color: '#F2F3F4',
    },
    '& .MuiTypography-root': {
      fontFamily: 'Montserrat',
      fontWeight: 500,
      fontSize: '16px',
      letterSpacing: '0.1em',
      color: '#F2F3F4',
    }
    // '&:focus': {
    //   backgroundColor: '#545454',
    //   '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
    //     color: theme.palette.common.white,
    //   },
    // },
  },
}))(MenuItem);

export const CustomMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <li>
      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        style={{ backgroundColor: 'inherit', color: '#F2F3F4' }}
        onClick={handleClick}
      >
        <KeyboardArrowDownIcon fontSize="large" />
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem>
          <ListItemIcon>
            <EqualizerIcon fontSize="medium" />
          </ListItemIcon>
          <ListItemText secondary="Statistics" />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemIcon>
            <SettingsIcon fontSize="medium" />
          </ListItemIcon>
          <ListItemText secondary="Settings" />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemIcon>
            <ExitToAppIcon fontSize="medium" />
          </ListItemIcon>
          <ListItemText secondary="Logout" />
        </StyledMenuItem>
      </StyledMenu>
    </li>
  );
}

export default CustomMenu;