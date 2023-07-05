import { FC, useState } from 'react';
import {
  Autocomplete,
  Avatar,
  Button,
  Card,
  Divider,
  Grid,
  Stack,
  TextField,
  Typography,
} from '@mui/material';

import PinDropIcon from '@mui/icons-material/PinDrop';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { classes } from './style';
import { EditProductData } from '../../services/api';
import { useSnackbar } from 'notistack';

const OFFER_TITLE = [
  'Technology',
  'Business Modal',
  'Implementation Time',
  'Costs',
];
const SERVICE_OPTIONS = ['Label 1', 'Label 2', 'Label 3', 'Label 4'];

interface IProps {
  productData: any; //TODO: must replace any with product type
  onClose: () => void;
}

const EditProductComponent: FC<IProps> = ({ productData, onClose }) => {
  const [productDetails, setProductDetails] = useState({
    name: productData.name,
    description: productData.description,
    video: productData.video,
  });
  const [title, setTitle] = useState<string | null>(null);
  const [services, setServices] = useState<string[]>([]);
  const [serviceVal, setServiceVal] = useState('');
  const [loading, setLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProductDetails({ ...productDetails, [name]: value });
  };

  const handleEdit = async () => {
    setLoading(true);
    try {
      const response = await EditProductData(productDetails);
      console.log('this is response', response);
      enqueueSnackbar('Edited Successfully', {
        variant: 'success',
        autoHideDuration: 1500,
      });
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      enqueueSnackbar('Something Went Wrong', {
        variant: 'error',
        autoHideDuration: 1500,
      });
    }
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} className="mb-4">
        <Button
          onClick={onClose}
          size="small"
          color="primary"
          disabled={loading}
          className="rounded-lg"
        >
          Back
        </Button>
      </Grid>

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
                <TextField
                  className="rounded-lg p-0"
                  name="name"
                  variant="standard"
                  value={productDetails.name}
                  onChange={handleChange}
                  fullWidth
                  InputProps={{
                    style: {
                      ...classes.textFieldInput,
                    },
                    disableUnderline: true,
                  }}
                />
                <TextField
                  className="rounded-lg p-0"
                  name="description"
                  multiline
                  rows={6}
                  variant="standard"
                  onChange={handleChange}
                  value={productDetails.description}
                  fullWidth
                  InputProps={{
                    style: {
                      ...classes.textFieldInput,
                    },
                    disableUnderline: true,
                  }}
                />
              </Stack>
            </Grid>

            <Grid item xs={12}>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="flex-end"
                spacing={1}
              >
                <Button
                  size="small"
                  onClick={onClose}
                  className="rounded-lg text-sm text-white bg-gray-400"
                  variant="contained"
                >
                  Cancel
                </Button>
                <Button
                  size="small"
                  className="rounded-lg text-sm text-white"
                  onClick={handleEdit}
                  disabled={loading}
                  color="primary"
                  endIcon={<ArrowForwardIcon />}
                  variant="contained"
                >
                  Save
                </Button>
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

      <Grid item xs={12} md={8} container className="mb-4">
        <Card className="rounded-lg p-2 w-full">
          <Grid container>
            <Grid item xs={12} className="mb-2">
              <Stack spacing={1}>
                <Typography className="text-sm font-bold">
                  Edit Video Link
                </Typography>
                <TextField
                  className="rounded-lg p-0"
                  name="video"
                  variant="standard"
                  onChange={handleChange}
                  value={productDetails.video}
                  fullWidth
                  InputProps={{
                    style: {
                      ...classes.textFieldInput,
                    },
                    disableUnderline: true,
                  }}
                />
              </Stack>
            </Grid>

            <Grid item container justifyContent={'flex-end'}>
              <Button
                size="small"
                className="rounded-lg text-sm text-white"
                color="primary"
                endIcon={<ArrowForwardIcon />}
                variant="contained"
                disabled={loading}
                onClick={handleEdit}
              >
                Save
              </Button>
            </Grid>
          </Grid>
        </Card>
      </Grid>

      <Grid item xs={12} md={8}>
        <Card className="rounded-lg p-4">
          <Grid container alignItems="center" spacing={2}>
            <Grid item xs={6}>
              <Stack spacing={1}>
                <Typography className="text-sm font-bold">
                  Select Offer Title
                </Typography>
                <Autocomplete
                  fullWidth
                  id="offer-title"
                  onChange={(event, newValue) => {
                    setTitle(newValue);
                  }}
                  options={OFFER_TITLE}
                  getOptionLabel={(option) => option}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      className="rounded-lg p-0"
                      placeholder="Choose Category"
                      name="category"
                      variant="standard"
                      fullWidth
                      InputProps={{
                        style: {
                          ...classes.textFieldInput,
                        },
                        ...params.InputProps,
                        disableUnderline: true,
                      }}
                    />
                  )}
                  value={title}
                />
              </Stack>
            </Grid>
            <Grid item xs={6}>
              <Stack spacing={1}>
                <Typography className="text-sm font-bold">
                  Select Offer Services
                </Typography>
                <Autocomplete
                  multiple
                  onChange={(event, newValue) => {
                    setServices(newValue);
                  }}
                  inputValue={serviceVal}
                  onInputChange={(event, newInputValue) => {
                    setServiceVal(newInputValue);
                  }}
                  fullWidth
                  options={SERVICE_OPTIONS.map((item) => item)}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      className="rounded-lg p-0"
                      placeholder="Choose Services"
                      name="category"
                      variant="standard"
                      fullWidth
                      InputProps={{
                        style: {
                          ...classes.textFieldInput,
                        },
                        ...params.InputProps,
                        disableUnderline: true,
                      }}
                    />
                  )}
                />
              </Stack>
            </Grid>

            <Grid item container justifyContent={'flex-end'}>
              <Button
                size="small"
                className="rounded-lg text-sm text-white"
                color="primary"
                endIcon={<ArrowForwardIcon />}
                variant="contained"
              >
                Save
              </Button>
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </Grid>
  );
};

export default EditProductComponent;
