import { Typography } from '@mui/material';
import { Container } from '@mui/joy';
import { appContainer } from '../template/theme';

export default function ErrorPage() {   
    return (
      <Container sx={appContainer}>
        <Typography> Resource unavailable at this time </Typography>
      </Container>
    );
}