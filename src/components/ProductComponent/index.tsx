import { FC, useEffect, useState } from 'react';
import {
  Avatar,
  Button,
  Card,
  Chip,
  Divider,
  Grid,
  Stack,
  Typography,
} from '@mui/material';
import BreadcrumbsNav from '../Breadcrumbs';
import { useProductStore } from '../../redux/product';
import VideoComponent from '../Video';
import ProductSkeleton from '../ProductLoader';
import PinDropIcon from '@mui/icons-material/PinDrop';
import TechIcon from '../../assets/techIcon.png';
import BusinessModalIcon from '../../assets/businessIcon.png';
import MoneyModalIcon from '../../assets/money.png';
import TrlIcon from '../../assets/clock.png';
import EditProductComponent from '../EditProduct';

interface OfferProps {
  img: string;
  title: string;
  label: any[];
}
const OfferCards = ({ img, title, label }: OfferProps) => {
  return (
    <Stack direction="row" spacing={1}>
      <img src={img} alt={title} style={{ height: '25px', width: '25px' }} />
      <Stack spacing={1}>
        <Typography className="text-sm">{title}</Typography>

        {label.length ? (
          <Stack direction="row" alignItems="center" spacing={1}>
            {label.map((i) => (
              <Chip
                size="small"
                variant="filled"
                color="default"
                label={i.name}
                className="text-xs"
              />
            ))}
          </Stack>
        ) : null}
      </Stack>
    </Stack>
  );
};

interface IProps {}

const ProductComponent: FC<IProps> = ({}) => {
  const { productData, fetchProduct, loading } = useProductStore();
  const [edit, setEdit] = useState(false);

  // Fetch product
  useEffect(() => {
    fetchProduct();
  }, []);

  const handleEdit = () => {
    setEdit(true);
  };

  const handleCloseEdit = () => {
    setEdit(false);
  };
  console.log(productData);
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} className="mb-4">
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <BreadcrumbsNav />
          {loading || edit ? null : (
            <Button
              onClick={handleEdit}
              size="small"
              color="primary"
              className="rounded-lg"
            >
              Edit
            </Button>
          )}
        </Stack>
      </Grid>

      {!productData || loading ? (
        <ProductSkeleton />
      ) : edit ? (
        <EditProductComponent
          productData={productData}
          onClose={handleCloseEdit}
        />
      ) : (
        <>
          <Grid item xs={12} md={8}>
            <Card className="rounded-lg p-2">
              <Grid container>
                <Grid item xs={12} className="mb-4">
                  <img
                    style={{ width: '100%', height: '25rem' }}
                    src={productData.picture}
                    alt=""
                  />
                </Grid>
                <Grid item xs={12}>
                  <Divider />
                </Grid>

                <Grid item xs={12} className="p-2">
                  <Stack spacing={1}>
                    <Typography className="text-sm font-bold">
                      {productData.name}
                    </Typography>
                    <Typography className="text-xs">
                      {productData.description}
                    </Typography>
                  </Stack>
                </Grid>
              </Grid>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card className="rounded-lg p-4">
              <Grid container>
                <Grid item xs={12} className="mb-4">
                  <Typography className="text-sm font-bold">
                    Offered By
                  </Typography>
                </Grid>
                <Grid item xs={12} className="mb-4">
                  <img
                    src={productData.company.logo}
                    alt={productData.company.name}
                    width={150}
                  />
                </Grid>

                <Grid item xs={12} className="mb-4">
                  <Stack direction="row" spacing={1}>
                    <Avatar
                      alt={productData.user.name}
                      src={productData.user.profilePicture}
                    />
                    <Stack>
                      <Typography className="text-black text-sm">
                        {productData.user.firstName.concat(
                          ' ',
                          productData.user.lastName
                        )}
                      </Typography>
                      <Typography className="text-black text-xs">
                        {productData.user.position}
                      </Typography>
                    </Stack>
                  </Stack>
                </Grid>
                <Grid item xs={12} className="mb-4">
                  <Stack direction="row" spacing={1}>
                    <PinDropIcon className="text-gray-400" />
                    <Stack>
                      <Typography className="text-black text-sm">
                        {`${productData.company.address.house} ${productData.company.address.street}`}
                      </Typography>
                      <Typography className="text-black text-xs">
                        {productData.company.address.country.name}
                      </Typography>
                    </Stack>
                  </Stack>
                </Grid>
                <Grid item container>
                  <Grid item xs={12}>
                    <img
                      src="https://media.wired.com/photos/59269cd37034dc5f91bec0f1/191:100/w_1280,c_limit/GoogleMapTA.jpg"
                      alt=""
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Card>
          </Grid>

          <Grid item xs={12} className="mb-4">
            <VideoComponent link={productData.video} />
          </Grid>

          <Grid item xs={12}>
            <Card className="rounded-lg p-4">
              <Grid container>
                <Grid item xs={12} className="mb-4">
                  <Typography className="text-sm font-bold">
                    Offer Details
                  </Typography>
                </Grid>

                <Grid item container>
                  <Grid item xs={12} md={6} className="mb-2">
                    <OfferCards
                      title={'Technology'}
                      img={TechIcon}
                      label={[productData.type]}
                    />
                  </Grid>
                  <Grid item xs={12} md={6} className="mb-2">
                    <OfferCards
                      title={'Business Modal'}
                      img={BusinessModalIcon}
                      label={productData.businessModels}
                    />
                  </Grid>
                  <Grid item xs={12} md={6} className="mb-2">
                    <OfferCards
                      title={'Implementation Time'}
                      img={TrlIcon}
                      label={[productData.trl]}
                    />
                  </Grid>
                  <Grid item xs={12} md={6} className="mb-2">
                    <OfferCards
                      title={'Costs'}
                      img={MoneyModalIcon}
                      label={[{ name: '< 3000 $' }]}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        </>
      )}
    </Grid>
  );
};

export default ProductComponent;
