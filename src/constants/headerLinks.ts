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
      type: HeaderItemType.Button,
      text: 'Log out',
    },
  ];


  export const ISA_MAX = 20000;