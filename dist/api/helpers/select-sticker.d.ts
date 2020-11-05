/// <reference types="node" />
export declare function stickerSelect(_B: Buffer, _t: number): Promise<{}>;
interface CreateSize {
    width?: number;
    height?: number;
}
export declare function resizeImg(buff: Buffer, size: CreateSize): Promise<string>;
export {};
