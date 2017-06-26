import { OpaqueToken } from "@angular/core";

export const TOASTR_TOKEN = new OpaqueToken('tostr');

export interface Toastr {
    success(message: string, title?: string): void;

    info(message: string, title?: string): void;

    warning(message: string, title?: string): void;

    error(message: string, title?: string): void;
}
