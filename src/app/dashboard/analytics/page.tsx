import * as React from 'react';
import type { Metadata } from 'next';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';

import { config } from '@/config';


import Analytics from "@/components/dashboard/analytics/analytics"
export const metadata = { title: `Messages | Dashboard | ${config.site.name}` } satisfies Metadata;

export default function Page(): React.JSX.Element {
  return (
    <Stack spacing={3}>
      <Stack direction="row" spacing={3}>
        <Grid>
          <Analytics/>
        </Grid>
      </Stack>
    </Stack>
  );
}