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

export interface AppReducerState {
    data: Color[];
    error: string | null;
    loading: boolean;
    totalPages: number;
    page: number;
}

export interface ModalReducerState {
    open: boolean;
    data: Color | null;
}

export interface ReducerState {
    app: AppReducerState;
    modal: ModalReducerState;
}