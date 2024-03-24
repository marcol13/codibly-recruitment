import { RGB } from "./common";

export interface Color {
    id: number;
    name: string;
    year: number;
    color: RGB;
    pantone_value: string;
}

export interface DetailTableProperties {
    label: string;
    key: keyof Color;
}