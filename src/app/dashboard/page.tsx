import * as React from 'react';
import type { Metadata } from 'next';
import Grid from '@mui/material/Unstable_Grid2';
import dayjs from 'dayjs';

import { config } from '@/config';
import { Calendar } from '@/components/dashboard/overview/calendar';
import { Top } from '@/components/dashboard/overview/top';
export const metadata = { title: `Home | Dashboard | ${config.site.name}` } satisfies Metadata;

export default function Page(): React.JSX.Element {
  return (
    <Grid container spacing={7}>

     <Grid lg={8} md={12} xs={12}  sx={{ height: '100%' }}>
      <Top/>
      <Calendar/>
     </Grid>
     {/* <Grid >
      <Top/>
     </Grid> */}
    </Grid>
  );
}
