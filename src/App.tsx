import { BrowserRouter } from 'react-router-dom';
import Router from './routes/Router';
import { SnackbarProvider } from 'notistack';

// MUI THEME
import {
  ThemeProvider as MuiThemeProvider,
  styled,
} from '@mui/material/styles';
import muiTheme from './config/theme';
import { CssBaseline } from '@mui/material';
import CustomSnackbarProvider from './providers';

// TODO: change the root Snackbar color to match theme
const StyledSnackbarProvider = styled(SnackbarProvider)`
  &.SnackbarItemContent-Root {
    background-color: orange !important;
  }
`;

function App() {
  return (
    <>
      <MuiThemeProvider theme={muiTheme}>
        <CssBaseline />
        <StyledSnackbarProvider
          maxSnack={3}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
        >
          <CustomSnackbarProvider>
            <BrowserRouter>
              <Router />
            </BrowserRouter>
          </CustomSnackbarProvider>
        </StyledSnackbarProvider>
      </MuiThemeProvider>
    </>
  );
}

export default App;
