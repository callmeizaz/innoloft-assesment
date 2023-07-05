/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React, { PropsWithChildren } from 'react';
// import { SnackbarMessage, useSnackbar } from "notistack";
// import axiosInstance from '../../services/api';

const CustomSnackbarProvider = ({ children }: PropsWithChildren) => {
  // const { enqueueSnackbar } = useSnackbar();

  // axiosInstance.interceptors.response.use(undefined, (error) => {
  //   // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  //   const { message } = error.response.data.error;
  //   enqueueSnackbar(message as SnackbarMessage, {
  //     variant: 'error',
  //     preventDuplicate: true,
  //   });

  //   return Promise.reject(error);
  // });

  return <div>{children}</div>;
};

export default CustomSnackbarProvider;
