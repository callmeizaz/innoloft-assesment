import { Routes as routes } from '.';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import Inventory2Icon from '@mui/icons-material/Inventory2';

const USER_TYPE_ADMIN = 'admin';

export const PAGE_NOT_FOUND = -2;
export const ACCESS_DENIED = -1;
export const HOME = 0;
export const PRODUCT = 1;

export const PROTECTED_PAGES = {
  PAGE_NOT_FOUND,
  ACCESS_DENIED,
  HOME,
  PRODUCT,
};

export const MENU_OPTIONS = [
  {
    label: 'Home',
    value: HOME,
    icon: () => <HomeOutlinedIcon className="text-white" />,
  },
  {
    label: 'Product',
    value: PRODUCT,
    icon: () => <Inventory2Icon className="text-white" />,
  },
];

export interface RestrictedProtectedRoutes {
  [key: string]: string[];
}

export const RESTRICTED_PROTECTED_ROUTES: RestrictedProtectedRoutes = {
  [USER_TYPE_ADMIN]: [],
};

export interface RestrictedMenuOptions {
  [key: string]: number[];
}

export const RESTRICTED_MENU_OPTIONS: RestrictedMenuOptions = {
  [USER_TYPE_ADMIN]: [],
};

export interface ProtectedRouteTabsPath {
  [key: string]: string;
}

export const PROTECTED_ROUTE_TABS_PATH: ProtectedRouteTabsPath = {
  [PAGE_NOT_FOUND]: routes.protected.pageNotFound,
  [ACCESS_DENIED]: routes.protected.accessDenied,
  [HOME]: routes.home,
  [PRODUCT]: routes.protected.product,
};

export interface TabHeaders {
  [key: string]: string;
}

export const TAB_HEADERS: TabHeaders = {
  [HOME]: 'Home',
};
