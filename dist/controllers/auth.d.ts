import * as puppeteer from 'puppeteer';
import { CreateConfig } from '../config/create-config';
/**
 * Validates if client is authenticated
 * @returns true if is authenticated, false otherwise
 * @param waPage
 */
export declare const isAuthenticated: (waPage: puppeteer.Page) => Promise<boolean>;
export declare const needsToScan: (waPage: puppeteer.Page) => import("rxjs").Observable<boolean>;
export declare const isInsideChat: (waPage: puppeteer.Page) => import("rxjs").Observable<boolean>;
export declare function retrieveQR(page: puppeteer.Page): Promise<false | {
    code: string;
    data: string;
    asciiQR: string;
}>;
export declare function asciiQr(code: string): Promise<string>;
export declare function SessionTokenCkeck(token: object): boolean;
export declare function auth_InjectToken(page: puppeteer.Page, session: string, options: CreateConfig, token: object): Promise<false | void>;
