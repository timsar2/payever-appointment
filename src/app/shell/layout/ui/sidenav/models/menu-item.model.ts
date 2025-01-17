export interface MenuItem {
  title: string
  url?: string
  divider?: string
  icon: string
  open?: boolean
  subPages?: SubMenuItem[]
}

export interface SubMenuItem {
  title: string
  url: string
}

export const Pages: MenuItem[] = [
  {
    title: 'Calendar',
    icon: 'calendar_month',
    url: '/home/calendar'
  },
  {
    title: 'Dashboard (need authorize)',
    icon: 'dashboard',
    url: '/home/dashboard'
  },
  {
    title: 'Account',
    icon: 'person-circle-outline',
    url: '/login'
  }
]
