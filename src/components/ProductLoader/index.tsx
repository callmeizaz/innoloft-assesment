import { FC } from 'react';
import {
  Card,
  Divider,
  Grid,
  Skeleton,
  Stack,
  Typography,
} from '@mui/material';
import PinDropIcon from '@mui/icons-material/PinDrop';

interface IProps {}

const ProductSkeleton: FC<IProps> = ({}) => {
  return (
    <Grid container>
      <Grid item xs={12} md={8}>
        <Card className="rounded-lg p-2">
          <Grid container>
            <Grid item xs={12} className="mb-4">
              <Skeleton variant="rectangular" width="100%" height={250} />
            </Grid>
            <Grid item xs={12}>
              <Divider />
            </Grid>

            <Grid item xs={12} className="p-2">
              <Stack spacing={1}>
                <Skeleton variant="text" width="80%" height={20} />
                <Skeleton variant="text" width="100%" height={60} />
              </Stack>
            </Grid>
          </Grid>
        </Card>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card className="rounded-lg p-4">
          <Grid container>
            <Grid item xs={12} className="mb-4">
              <Typography className="text-sm font-bold">Offered By</Typography>
            </Grid>
            <Grid item xs={12} className="mb-4">
              <Skeleton variant="rectangular" width={150} height={50} />
            </Grid>

            <Grid item xs={12} className="mb-4">
              <Stack direction="row" spacing={1}>
                <Skeleton variant="circular" width={50} height={50} />

                <Stack>
                  <Skeleton variant="text" width={80} height={20} />
                  <Skeleton variant="text" width={60} height={16} />
                </Stack>
              </Stack>
            </Grid>
            <Grid item xs={12} className="mb-4">
              <Stack direction="row" spacing={1}>
                <PinDropIcon className="text-gray-400" />
                <Stack>
                  <Skeleton variant="text" width={100} height={20} />
                  <Skeleton variant="text" width={60} height={16} />
                </Stack>
              </Stack>
            </Grid>
            <Grid item container>
              <Grid item xs={12}>
                <Skeleton variant="rectangular" width="100%" height={200} />
              </Grid>
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </Grid>
  );
};

export default ProductSkeleton;
