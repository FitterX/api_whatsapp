"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultOptions = void 0;
exports.defaultOptions = {
    folderNameToken: 'tokens',
    mkdirFolderToken: '',
    headless: true,
    devtools: false,
    useChrome: true,
    debug: false,
    logQR: true,
    browserWS: '',
    browserArgs: [
        '--no-sandbox',
        '--disable-setuid-sandbox',	
      ],
    puppeteerOptions: {},
    disableSpins: false,
    disableWelcome: false,
    updatesLog: true,
    autoClose: 60000,
    createPathFileToken: false,
};
