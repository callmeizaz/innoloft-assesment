import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import {
  Divider,
  Drawer,
  Grid,
  InputBase,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  alpha,
  styled,
} from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import Logo from '../../assets/logo.svg';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import { Routes as RoutePath } from '../../constant';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  border: '1px solid gray',
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'black',

  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '100%',
      '&:focus': {
        width: '100%',
      },
    },
  },
}));

const settings = ['Logout'];
const navItems = [
  { id: 1, name: 'Home', path: RoutePath.home },
  { id: 2, name: 'Product', path: RoutePath.protected.product },
];
const drawerWidth = 240;

interface IProps {
  window?: () => Window;
}

function ResponsiveAppBar({ window }: IProps) {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Grid
      container
      onClick={handleDrawerToggle}
      sx={{ textAlign: 'center' }}
      className="mt-24"
      alignItems="center"
    >
      <Grid item container alignItems={'center'} justifyContent="center">
        <Grid item>
          <img src={Logo} alt="logo" width={100} />
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <Divider />
      </Grid>

      <Grid item xs={12}>
        <List>
          {navItems.map((item) => (
            <ListItem key={item.id} disablePadding>
              <ListItemButton
                sx={{ textAlign: 'center' }}
                onClick={() => navigate(item.path)}
              >
                <ListItemText primary={item.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Grid>
    </Grid>
  );

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <AppBar
      position="fixed"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1 }}>
            <Grid
              item
              xs={10}
              container
              justifyContent="space-between"
              alignItems="center"
              sx={{
                padding: {
                  xs: '0 10px !important',
                  sm: '0 2rem !important',
                  md: '0 5rem !important',
                },
              }}
            >
              <Grid item sx={{ mr: 2, display: { md: 'none' } }}>
                <IconButton
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                >
                  <MenuIcon />
                </IconButton>
              </Grid>
              <Grid
                item
                xs={6}
                sm={2}
                className="mr-2"
                container
                sx={{
                  justifyContent: {
                    xs: 'center',
                    sm: 'flex-start',
                  },
                }}
              >
                <img src={Logo} alt="logo" />
              </Grid>
              <Grid
                item
                sm={6}
                className="mr-2"
                sx={{ display: { xs: 'none', md: 'block' } }}
              >
                <Search>
                  <SearchIconWrapper>
                    <SearchIcon className="text-gray-400" />
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="Enter interests, keywords, company name, etc..."
                    inputProps={{ 'aria-label': 'search' }}
                  />
                </Search>
              </Grid>
            </Grid>
          </Box>
          <Box sx={{ flexGrow: 0 }} className="">
            <Stack
              direction="row"
              alignItems="center"
              className="w-full"
              spacing={1}
            >
              <IconButton>
                <NotificationsIcon />
              </IconButton>
              <Divider orientation="vertical" className="h-10" />
              <Stack direction="column">
                <Typography className="text-black text-sm">
                  Lorem Ipsum
                </Typography>
                <Typography className="text-black text-xs">
                  Logged In
                </Typography>
              </Stack>
              <Tooltip title="Logout">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
            </Stack>

            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </AppBar>
  );
}
export default ResponsiveAppBar;
