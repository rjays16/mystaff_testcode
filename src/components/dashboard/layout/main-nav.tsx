'use client';

import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip';
import { Bell as BellIcon } from '@phosphor-icons/react/dist/ssr/Bell';
import { List as ListIcon } from '@phosphor-icons/react/dist/ssr/List';
import { MagnifyingGlass as MagnifyingGlassIcon } from '@phosphor-icons/react/dist/ssr/MagnifyingGlass';
import { Users as UsersIcon } from '@phosphor-icons/react/dist/ssr/Users';
import TextField from '@mui/material/TextField';
import { usePopover } from '@/hooks/use-popover';
import { SignOut as SignOutIcon } from '@phosphor-icons/react/dist/ssr/SignOut';
import { MobileNav } from './mobile-nav';
import { UserPopover } from './user-popover';

export function MainNav(): React.JSX.Element {
  const [openNav, setOpenNav] = React.useState<boolean>(false);

  const userPopover = usePopover<HTMLDivElement>();

  return (
    <React.Fragment>
      <Box
        component="header"
        sx={{
          borderBottom: '1px solid var(--mui-palette-divider)',
          backgroundColor: 'var(--mui-palette-background-paper)',
          position: 'sticky',
          top: 0,
          zIndex: 'var(--mui-zIndex-appBar)',
        }}
      >
        <Stack
          direction="row"
          spacing={2}
          sx={{ alignItems: 'center', justifyContent: 'space-between', minHeight: '64px', px: 2 }}
        >
          <Stack sx={{ alignItems: 'center' }} direction="row" spacing={2}>
            <IconButton
              onClick={(): void => {
                setOpenNav(true);
              }}
              sx={{ display: { lg: 'none' } }}
            >
              <ListIcon />
            </IconButton>
             <Tooltip title="Search">
              <TextField
              placeholder="Search"
              variant="outlined"
              size="small"
              InputProps={{
                endAdornment: (
                  <IconButton size="small" edge="end">
                     <MagnifyingGlassIcon />
                  </IconButton>
                ),
              }}
              sx={{ width: 900 }}
              />
      </Tooltip>
          </Stack>
          <Stack sx={{ alignItems: 'center' }} direction="row" spacing={2}>
            <Tooltip title="Settings">
              <Box
              component="img"
              onClick={userPopover.handleOpen}
              ref={userPopover.anchorRef}
              src="/assets/avatar-jane.png"
              sx={{ cursor: 'pointer', height: 'auto', width: '100px' }}
              />
            </Tooltip>

            <Tooltip title="Settings">
              <Box
              component="img"
              src="/assets/notification.png"
              sx={{ height: 'auto', width: '40px' }}
              />
            </Tooltip>
           <Tooltip title="Settings">
              <Box
              component="img"
              src="/assets/settings-menu.png"
              sx={{ height: 'auto', width: '40px' }}
              />
            </Tooltip>

            <Tooltip title="Logout" >
              <Box 
              component="img"
              src="/assets/logout.png"
              sx={{ height: 'auto', width: '40px' }}
              />
            </Tooltip>
            
          
          </Stack>
        </Stack>
      </Box>
      <UserPopover anchorEl={userPopover.anchorRef.current} onClose={userPopover.handleClose} open={userPopover.open} />
      <MobileNav
        onClose={() => {
          setOpenNav(false);
        }}
        open={openNav}
      />
    </React.Fragment>
  );
}
