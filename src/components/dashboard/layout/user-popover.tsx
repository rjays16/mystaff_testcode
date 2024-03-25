import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import ListItemIcon from '@mui/material/ListItemIcon';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import { GearSix as GearSixIcon } from '@phosphor-icons/react/dist/ssr/GearSix';
import { SignOut as SignOutIcon } from '@phosphor-icons/react/dist/ssr/SignOut';
import { User as UserIcon } from '@phosphor-icons/react/dist/ssr/User';


interface SidebarData {
  veterinary_name: string;
  email: string;
  address: string;
  type: string;
  building: string;
  contact_number: string;
  image: string; 
}

interface UserPopoverProps {
  anchorEl: Element | null;
  onClose: () => void;
  open: boolean;
  sidebarData: SidebarData[]; 
}

export function UserPopover({ anchorEl, onClose, open, sidebarData }: UserPopoverProps): React.JSX.Element {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSignOut = async (): Promise<void> => {
  };

  const filteredData = sidebarData.filter(item =>
    Object.values(item).some(field =>
      field.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <Popover
      anchorEl={anchorEl}
      anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
      onClose={onClose}
      open={open}
      slotProps={{ paper: { sx: { width: '240px' } } }}
    >
      <Box>
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
        />
      </Box>

      <Divider />

      <MenuList disablePadding sx={{ p: '8px', '& .MuiMenuItem-root': { borderRadius: 1 } }}>
        <MenuItem component="a" href="/settings" onClick={onClose}>
          <ListItemIcon>
            <GearSixIcon fontSize="var(--icon-fontSize-md)" />
          </ListItemIcon>
          Settings
        </MenuItem>

        <MenuItem component="a" href="/profile" onClick={onClose}>
          <ListItemIcon>
            <UserIcon fontSize="var(--icon-fontSize-md)" />
          </ListItemIcon>
          Profile
        </MenuItem>

        <MenuItem onClick={handleSignOut}>
          <ListItemIcon>
            <SignOutIcon fontSize="var(--icon-fontSize-md)" />
          </ListItemIcon>
          Sign out
        </MenuItem>
      </MenuList>
    </Popover>
  );
}
