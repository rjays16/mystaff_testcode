import * as React from 'react';
import type { Metadata } from 'next';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import { config } from '@/config';
import Help from "@/components/dashboard/help/help_center"
export const metadata = { title: `Messages | Dashboard | ${config.site.name}` } satisfies Metadata;
export default function Page(): React.JSX.Element {
  return (
    <Stack spacing={3}>
      <Stack direction="row" spacing={3}>
        <Grid>
          <Help/>
        </Grid>
      </Stack>
    </Stack>
  );
}