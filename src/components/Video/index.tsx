import { FC } from 'react';
import { Card, Grid } from '@mui/material';
import ReactPlayer from 'react-player/youtube';

interface IProps {
  link: string;
}

const VideoComponent: FC<IProps> = ({ link }) => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Card className="rounded-lg p-2">
          <Grid container alignItems={'center'} justifyContent="center">
            <Grid item xs={8} className="mb-4">
              <ReactPlayer url={link} width={'100%'} />
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </Grid>
  );
};

export default VideoComponent;
