import { Breadcrumbs, Typography, Link } from '@mui/material';
import { Link as RouterLink, useLocation } from 'react-router-dom';

interface BreadcrumbItemProps {
  label: string;
  to: string;
}

function BreadcrumbItem({ label, to }: BreadcrumbItemProps) {
  return (
    <Link component={RouterLink} to={to}>
      {label}
    </Link>
  );
}

function BreadcrumbsNav() {
  const location = useLocation();
  const pathnames: string[] = location.pathname.split('/').filter((x) => x);

  return (
    <Breadcrumbs>
      <BreadcrumbItem to="/" label="Home" />
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
        const isLast = index === pathnames.length - 1;

        return isLast ? (
          <Typography key={name} color="textPrimary">
            {name}
          </Typography>
        ) : (
          <BreadcrumbItem key={name} to={routeTo} label={name} />
        );
      })}
    </Breadcrumbs>
  );
}

export default BreadcrumbsNav;
