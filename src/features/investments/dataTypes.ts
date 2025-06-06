import { HeaderItemType } from "../../constants/headerLinks";

export type HeaderItem =
    | { type: HeaderItemType.Image; src: string; alt: string; href: string }
    | { type: HeaderItemType.Link; text: string; href: string }
    | { type: HeaderItemType.Button; text: string };



// Fund constants and types
export const Fund = {
    CushonEquities: "Cushon Equities Fund",
    CushonSustainableGrowth: "Cushon Sustainable Growth Fund",
    CushonGlobalBalanced: "Cushon Global Balanced Fund",
} as const;

export type FundKey = keyof typeof Fund;
export type FundValue = (typeof Fund)[FundKey];
export const fundOptions: FundValue[] = Object.values(Fund);

