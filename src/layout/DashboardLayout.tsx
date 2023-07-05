import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';

import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Grid, Toolbar } from '@mui/material';

import {
  MENU_OPTIONS,
  PROTECTED_ROUTE_TABS_PATH,
  RESTRICTED_MENU_OPTIONS,
} from '../constant';
import { Outlet, useNavigate } from 'react-router-dom';
import ResponsiveAppBar from '../components/Appbar';

const drawerWidth = 280;

const StyledList = styled(List)({
  // hover states
  '& .MuiListItemButton-root:hover': {
    backgroundColor: '#242424',
    '&, & .MuiListItemIcon-root': {
      color: 'yellow',
    },
  },
});

export default function DashboardDrawer() {
  // selected Tab
  const [selected, setSelected] = useState(0);
  const role = 'admin'; //TODO: replace role with actual user role
  const MENU_FILTER = RESTRICTED_MENU_OPTIONS[role] || [];

  const navigate = useNavigate();

  const handleRouteChange = (newValue: number) => {
    console.log(PROTECTED_ROUTE_TABS_PATH[newValue]);
    localStorage.setItem('tab', JSON.stringify(newValue));
    navigate(PROTECTED_ROUTE_TABS_PATH[newValue], { replace: true });
    setSelected(newValue);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      <ResponsiveAppBar />

      <Drawer
        variant="permanent"
        PaperProps={{
          sx: {
            backgroundColor: '#272e71',
            display: { xs: 'none', md: 'block' },
          },
        }}
        sx={{
          width: { xs: '0', md: drawerWidth },
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        className=""
      >
        <Toolbar />
        <Grid
          sx={{ overflow: 'auto' }}
          container
          alignItems="center"
          justifyContent="center"
          className="mt-4"
        >
          <Grid item container>
            <StyledList className="w-full mr-6">
              {MENU_OPTIONS.filter(
                (opt) => !MENU_FILTER.includes(opt.value)
              ).map((item, index) => (
                <ListItem
                  key={item.label}
                  disablePadding
                  sx={{
                    display: 'block',
                    borderLeft: selected === index ? 1 : 0,
                    borderColor: selected === index ? '#ffffff' : '',
                  }}
                  onClick={() => handleRouteChange(index)}
                >
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: 'initial',
                      px: 2.5,
                      py: 0,
                      backgroundColor:
                        selected === index ? 'secondary.main' : '',
                    }}
                    className="rounded-lg rounded-l-none mb-2"
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: 3,
                        justifyContent: 'center',
                      }}
                    >
                      {item.icon()}
                    </ListItemIcon>
                    <ListItemText className="text-white" primary={item.label} />
                  </ListItemButton>
                </ListItem>
              ))}
            </StyledList>
          </Grid>
        </Grid>
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
}
