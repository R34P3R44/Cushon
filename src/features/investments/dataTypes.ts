import type { Timestamp } from "firebase/firestore";
import { HeaderItemType } from "../../constants/headerLinks";

export type HeaderItem =
    | { type: HeaderItemType.Image; src: string; alt: string; href: string }
    | { type: HeaderItemType.Link; text: string; href: string }
    | { type: HeaderItemType.Button; text: string };



// Fund constants and types
export const Fund = {
    CushonEquities: "Cushon Equities Fund",
    //We can add more to this in the future
} as const;

export type FundKey = keyof typeof Fund;
export type FundValue = (typeof Fund)[FundKey];
export const fundOptions: FundValue[] = Object.values(Fund);

export type Marks = {
    value: number;
    label: string;
}

export type Investment = {
    id: string;
    amount: number;
    fundName: string;
    timestamp: Timestamp
}

export type Segments = {
    color: string;
    percentage: number;
    amount: number;
    type: "invested" | "available";
};