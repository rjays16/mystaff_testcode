import type { NavItemConfig } from '@/types/nav';
import { paths } from '@/paths';

export const navItems = [
  { key: 'home', title: 'Home', href: paths.dashboard.overview, icon: 'home' },
  { key: 'appointment', title: 'Appointment', href: paths.dashboard.appointment, icon: 'appointment' },
  { key: 'messages', title: 'Messages', href: paths.dashboard.messages, icon: 'messages' },
  { key: 'contacts', title: 'Contacts', href: paths.dashboard.contacts, icon: 'contacts' },
  { key: 'analytics', title: 'Data Analytics', href: paths.dashboard.analytics, icon: 'data-analytics' },
  { key: 'subscription', title: 'Subscription', href: paths.dashboard.subscription, icon: 'subscription' },
  { key: 'help_center', title: 'Help Center', href: paths.dashboard.help_center, icon: 'help-center' },
  { key: 'settings', title: 'Settings', href: paths.dashboard.settings, icon: 'settings' },
] satisfies NavItemConfig[];
