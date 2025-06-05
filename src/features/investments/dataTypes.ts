import { HeaderItemType } from "../../constants/headerLinks";

export type HeaderItem =
| { type: HeaderItemType.Image; src: string; alt: string; href: string }
| { type: HeaderItemType.Link; text: string; href: string }
| { type: HeaderItemType.Button; text: string };