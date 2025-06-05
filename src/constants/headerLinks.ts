export enum HeaderItemType {
    Image = 'image',
    Link = 'link',
    Button = 'button',
  }
  
  export const leftLinks = [
    {
      type: HeaderItemType.Image,
      src: '/logo.png',
      alt: 'Cushon Logo',
      href: '/',
    },
    {
      type: HeaderItemType.Link,
      text: 'Workplace pensions',
      href: '#workplace-pensions',
    },
    {
      type: HeaderItemType.Link,
      text: 'Workplace ISAs & savings',
      href: '#workplace-isas-savings',
    },
    {
      type: HeaderItemType.Button,
      text: 'More',
    },
  ];
  
  export const navLinks = [
    {
      type: HeaderItemType.Link,
      text: 'About',
      href: '#funds',
    },
    {
      type: HeaderItemType.Link,
      text: 'Resources',
      href: '#how-it-works',
    },
    {
      type: HeaderItemType.Link,
      text: 'Help',
      href: '#help',
    },
    {
      type: HeaderItemType.Link,
      text: 'Contact',
      href: '#contact',
    },
    {
      type: HeaderItemType.Button,
      text: 'Search',
    },
    {
      type: HeaderItemType.Button,
      text: 'Get Started',
    },
    {
      type: HeaderItemType.Button,
      text: 'Login',
    },
  ];