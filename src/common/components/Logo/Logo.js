import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IconButton } from '@mui/material';
import { ReactComponent as LogoIcon } from 'assets/icons/diamond.svg';
import { routes } from 'routes';

const Logo = () => {
  const navigate = useNavigate();
  const hanldeClick = () => navigate(routes.home);

  return (
    <IconButton size="large" edge="start" onClick={hanldeClick}>
      <LogoIcon width="32" />
    </IconButton>
  );
};

export default Logo;
