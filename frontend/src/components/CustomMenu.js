import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import IconButton from '@material-ui/core/IconButton';


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
  },
}))(MenuItem);

export const CustomMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [buttonClicked, setButtonClicked] = useState(false);

  const handleClick = (event) => {
    setButtonClicked(true);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setButtonClicked(false);
    setAnchorEl(null);
  };

  return (
    <li className="menu">
      <IconButton
        aria-controls="customized-menu"
        aria-haspopup="true"
        style={{ backgroundColor: 'inherit', color: '#F2F3F4', padding: '0', }}
        onClick={handleClick}
      >
        {
          buttonClicked ?
          <KeyboardArrowUpIcon fontSize="large" />
          :
          <KeyboardArrowDownIcon fontSize="large" />
        }
      </IconButton>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem component={ Link } to='/statistics'>
          <ListItemIcon>
            <EqualizerIcon fontSize="medium" />
          </ListItemIcon>
          <ListItemText secondary="Statistics" />
        </StyledMenuItem>
        <StyledMenuItem component={ Link } to='/settings'>
          <ListItemIcon>
            <SettingsIcon fontSize="medium" />
          </ListItemIcon>
          <ListItemText secondary="Settings" />
        </StyledMenuItem>
        <StyledMenuItem component={ Link } to='/logout'>
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