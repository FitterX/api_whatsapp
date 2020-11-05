"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MINES = exports.downloadFileImgHttp = void 0;
/*
NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
mMMMMMMMMMNNNmmNNNMMNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
mmNMMNMMMMNNNNNmmmddhdddNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
mddNMMNy:/odNmmddmmNNmdhhddmNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
NmmdNMNd:--+dNmmddhhddmmhsyhhmdmmNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
NmNmdNmy:.-oyNmmmhmdhho+sososyhhhddNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
NmmNdh+-`.:oyNNdmmdmmdo-://oysssyhhhdmNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
Nmmmoyyyo+osdNmdmmddNNhs+/::/+osyssydyhdNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
NNmhsymMMNmmmmdmdNNddNmsso+++////ossssyyhdmNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
mhhhmNNMNNNhssshhmmddmmssyooooso/::+oysshhhhmMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
mmdhdddNNdyoosyhdmddmmmsoooooyysyys/::/oyyhhhyMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
mdddhddmhsooshdmdmdhhyyyysso/ooo+syhhs/-/+shyhMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
dyyhdmd+ososhdmdmyyhhhhhhhyo++o/+///+ohhso++sdMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
dhdmNNdsossyhmdmsydhssssyhhs/++o/o+//:++yhhy+/hNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
mdmNNNNmhysshddyshdyyy/oss+s::/:://++///++++/::hmNNNNNNNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
NNMNNNmmNNdymNNhshdshdyhdysh+sy+-:++osssosss++yNNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
NmNNNmdNNmNmmmNmyyddyyhdhydyohys/-oo+osssysyyohNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
mmNNNhdNmmNNmNMMNhyyhhhdhyyhmmyh+-/s+sysssyyhyydNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
mNMMMhdNdmMNMMMMMNNmdhdddmhdmmNho/-osoyyo++oyddhhNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
NMMMNmhNdNMNMNMMNmNNNmmmdyoohmhoyo::hsooo++oooydhymMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMNNNhmNNMmmNMNNmmmmdmmdyhhoyddddoo++yoyysooossyhsmMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMNNNmmNNNmdNdNmmddhhhdNNhsmNssdooo/dso++osyyysoymMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMNNNNmNNNNNmddmmNhshNmmmNmNMdhNsh/ohho++/:++MMNNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MNNNMMNNNNmmmhhhhdyosdNmdmMMhoNmhdmys+ooo++/+MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
mmNNNMMNNNNmddmdoodmMMNmmNNhssdmNMMMNdNd/osomMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
NmNdhMNmNNMNmdNddohmMMNNNmdmdddNMMMMMMMMmMNNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
NmNhmMmmmmNNmdNyoNMNmNmdhyyyhdhoyNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
NmdmMmmddddNmmdys+hmMMMmmhysssyy++dMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
NmdNMMdmdddmmNNyshmNNNNNNNdhhs+yy//dMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
NmNMMMdmdddmmMNysdmNNMMMNhhNdhs+y+/:mMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
mmNMMNhmmddNNNMdyydmMMMNdyshNhyoss+:/MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
NmNMMddmmmmNMNMNdsymNNmdhhdNMNdhsss+:yMMMMMMMMMMMMMMMMNNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMdhmmmmmNMNNMmshNMMMmmMMMMMmNdyo+//NMMMMMMMMMMMMMMMhNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMmhmmmmmmNMMNNMyshdhhhyhNMMMMMMdhso+sMMMMMMMMMMMMMMMhmMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMmdmmmmmmmNMMMmNm+ys++oyyNMMMMMMNmmyyoyNMMMMMMMMMMMMMddMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
NmmmmmmmmmmmNMNNmNNyyo+/oohNMMMMMMMMdhhsshmMMMMMMMMMMMyNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
mmNNNNNNmmmmNMMNmmddNmmdhhdmMMMMMMMMMNddhssshmmNNNmmdhdMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
NNNNNNNNNNNNNNNNmNNNNMMMMMNomMMMMMMMMMNNmdhhyyyyyyyhdmMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
Nd+oNMMMMMMMmodo++++++++++m..yNMMMMMNo+mNMMmhssshdNMMNhNMMMMMMMMMMMddMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MN+ /NMMMMMm: d` -ssssss+`d. `+mMMMMN. dNm+:+syso//hNN--yNMMMMMMMd+`yMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMN+ /NMMMm: oM` +NMMMMMNdN. /`.yNMMN. dh.omMMMMMNy.oM- `:hNMMMm+.  yMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMN/ /NMm: oNy` :sssmMMMMN. dh-`/mMN. d-/NMMMMMMMMy`m- y/`/dmo..o: yMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMN/ /m: +NNy. /yyyNMMMMN. dNNo`.yN- d.oNMMMMMMMMd d- mNh-`.`+mN/ yMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMN/ . +NMMN- oNMMMMMNdN. dMMMd:`/. ds.dNMMMMMMm::M- dMMNy/dMMN/ yMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMN/ +NMMMN- /yyyyyys d. dMMMMNo`  dNy-+ymmmho-+NN- dMMMMMMMMN/ yMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMNyNMMMMN+::::::::::m+/mMMMMMMd: dMMNho///+ymMMN+/mMMMMMMMMNs/hMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMNMMMMMMMMMMMMMMMMMMMMMMMMMMMMNsmMMMMMMMMMMMMMMNNNNMMNNNMMNNNNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNMMMMMMMMMMMMMMNMMNMNMMMNMMNNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNMMNMNMMMNMMNNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNNNNMMNNNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
*/
var axios_1 = require("axios");
function downloadFileImgHttp(_path, _mines) {
    return __awaiter(this, void 0, void 0, function () {
        var _Path, _k_1, _final;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (typeof _mines !== 'object') {
                        console.error("set mines object not \"" + typeof _mines + "\" ");
                        return [2 /*return*/, false];
                    }
                    _Path = {
                        Protocol: '^(https?:\\/\\/)g?',
                        Domain: '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|',
                        IP: '((\\d{1,3}\\.){3}\\d{1,3}))',
                        Port: '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*',
                        Query: '(\\?[;&a-z\\d%_.~+=-]*)?',
                        End: '(\\#[-a-z\\d_]*)?$',
                        Reg: function () {
                            return new RegExp(_Path.Protocol +
                                _Path.Domain +
                                _Path.IP +
                                _Path.Port +
                                _Path.Query +
                                _Path.End, 'i');
                        },
                        tipes: {
                            i: 'image/png',
                            '/': 'image/jpg',
                            U: 'image/webp',
                            R: 'image/gif',
                        },
                        mineType: function (_m) {
                            var _b = {}, _obj = void 0;
                            for (var _i in _Path.tipes) {
                                for (var _k in _m) {
                                    if (Object.values(_Path.tipes).indexOf(_m[_k]) <= -1) {
                                        return "invalid mime type " + _m[_k];
                                    }
                                    if (_Path.tipes[_i] == _m[_k]) {
                                        _b[_i] = _Path.tipes[_i];
                                        _obj = _b;
                                    }
                                }
                            }
                            return _obj;
                        },
                        XML: function (_path) { return __awaiter(_this, void 0, void 0, function () {
                            var _this = this;
                            return __generator(this, function (_a) {
                                return [2 /*return*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                                        var _f, e_1;
                                        return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0:
                                                    _a.trys.push([0, 2, , 3]);
                                                    return [4 /*yield*/, axios_1.default({
                                                            url: _path,
                                                            method: 'GET',
                                                            responseType: 'arraybuffer',
                                                        })];
                                                case 1:
                                                    _f = _a.sent();
                                                    if (typeof _f === 'object' && _f.status == 200) {
                                                        resolve(_f);
                                                    }
                                                    else {
                                                        throw new Error('invalid url');
                                                    }
                                                    return [3 /*break*/, 3];
                                                case 2:
                                                    e_1 = _a.sent();
                                                    reject(e_1);
                                                    return [3 /*break*/, 3];
                                                case 3: return [2 /*return*/];
                                            }
                                        });
                                    }); })];
                            });
                        }); },
                    };
                    if (!_Path.Reg().test(_path)) return [3 /*break*/, 2];
                    _k_1 = _Path.mineType(_mines);
                    return [4 /*yield*/, _Path
                            .XML(_path)
                            .then(function (_R) {
                            //_R.data <Buffer 89 50 4e 47 0d 0a 1a 0a 00........
                            var __b64S = new Buffer(_R['data'], 'binary').toString('base64'), _m = void 0;
                            for (var j in _k_1) {
                                if (j == __b64S.charAt(0)) {
                                    _m = _k_1[j];
                                }
                            }
                            if (_m) {
                                return "data:" + _m + ";base64," + __b64S;
                            }
                            else {
                                return false;
                            }
                        })
                            .catch(function (_e) {
                            console.error('Error url ', _e);
                        })];
                case 1:
                    _final = _a.sent();
                    return [2 /*return*/, _final];
                case 2: return [2 /*return*/, false];
            }
        });
    });
}
exports.downloadFileImgHttp = downloadFileImgHttp;
function MINES() {
    var obj = [
        'audio/aac',
        'application/x-abiword',
        'application/octet-stream',
        'video/x-msvideo',
        'application/vnd.amazon.ebook',
        'application/octet-stream',
        'application/x-bzip',
        'application/x-bzip2',
        'application/x-csh',
        'text/css',
        'text/csv',
        'application/msword',
        'application/vnd.ms-fontobject',
        'application/epub+zip',
        'image/gif',
        'text/html',
        'image/x-icon',
        'text/calendar',
        'application/java-archive',
        'image/jpeg',
        'application/javascript',
        'application/json',
        'audio/midi',
        'video/mpeg',
        'application/vnd.apple.installer+xml',
        'application/vnd.oasis.opendocument.presentation',
        'application/vnd.oasis.opendocument.spreadsheet',
        'application/vnd.oasis.opendocument.text',
        'audio/ogg',
        'video/ogg',
        'application/ogg',
        'font/otf',
        'image/png',
        'application/pdf',
        'application/vnd.ms-powerpoint',
        'application/x-rar-compressed',
        'application/rtf',
        'application/x-sh',
        'image/svg+xml',
        'application/x-shockwave-flash',
        'application/x-tar',
        'image/tiff',
        'application/typescript',
        'font/ttf',
        'application/vnd.visio',
        'audio/x-wav',
        'audio/webm',
        'video/webm',
        'image/webp',
        'font/woff',
        'font/woff2',
        'application/xhtml+xml',
        'application/vnd.ms-excel',
        'application/vnd.openxmlformats-',
        'officedocument.spreadsheetml.sheet',
        'application/xml',
        'application/vnd.mozilla.xul+xml',
        'application/zip',
        'video/3gpp',
        'audio/3gpp',
        'video/3gpp2',
        'audio/3gpp2',
        'application/x-7z-compressed',
    ];
    return obj;
}
exports.MINES = MINES;
