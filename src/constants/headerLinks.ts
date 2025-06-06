export enum HeaderItemType {
    Image = 'image',
    Link = 'link',
    Button = 'button',
  }
  
  export const leftLinks = [
    {
      type: HeaderItemType.Image,
      src: '/CushonLogo.png',
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
  ];
  
  export const navLinks = [
    {
      type: HeaderItemType.Link,
      text: 'Resources',
      href: '#how-it-works',
    },
    {
      type: HeaderItemType.Button,
      text: 'Get Started',
    },
    {
      type: HeaderItemType.Button,
      text: 'Logout',
    },
  ];