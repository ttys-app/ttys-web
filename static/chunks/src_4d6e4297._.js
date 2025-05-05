(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/appConfig.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "ACTION_BTN_COLOR": (()=>ACTION_BTN_COLOR),
    "ANDROID_DOWNLOAD_LINK": (()=>ANDROID_DOWNLOAD_LINK),
    "ANDROID_PACKAGE": (()=>ANDROID_PACKAGE),
    "CENTER_BTN_COLOR": (()=>CENTER_BTN_COLOR),
    "DEV": (()=>DEV),
    "DOWNLOAD_LINK": (()=>DOWNLOAD_LINK),
    "ENCRYPT": (()=>ENCRYPT),
    "FETCH_TIME_OUT": (()=>FETCH_TIME_OUT),
    "FILE_ORIGIN": (()=>FILE_ORIGIN),
    "IOS_APP_STORE_ID": (()=>IOS_APP_STORE_ID),
    "IOS_DOWNLOAD_LINK": (()=>IOS_DOWNLOAD_LINK),
    "LOCAL_PORT": (()=>LOCAL_PORT),
    "MINIO_ORIGIN": (()=>MINIO_ORIGIN),
    "OG_LOCALE": (()=>OG_LOCALE),
    "ORIGIN": (()=>ORIGIN),
    "SHARE_LINK": (()=>SHARE_LINK),
    "THEME_COLOR": (()=>THEME_COLOR),
    "WEB_LINK": (()=>WEB_LINK),
    "appSecret": (()=>appSecret),
    "contactEmail": (()=>contactEmail),
    "cryptMode": (()=>cryptMode),
    "getConfig": (()=>getConfig)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$i18n$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/i18n/client.ts [app-client] (ecmascript)");
;
const DEV = ("TURBOPACK compile-time value", "development") === 'development';
const appSecret = 'A1CfWF1tN7SCgOZa';
const contactEmail = 'support@ttys.app';
const cryptMode = 'g' // rc4 || g
;
const THEME_COLOR = 'rgb(9,161,228)';
const ACTION_BTN_COLOR = 'rgb(9,161,228)';
const CENTER_BTN_COLOR = 'rgb(9,161,228)';
const OG_LOCALE = {
    cn: 'zh_CN',
    tw: 'zh_TW',
    en: 'en_US',
    ja: 'ja_JP',
    ko: 'ko_KR'
};
const ENCRYPT = ("TURBOPACK compile-time truthy", 1) ? 0 : ("TURBOPACK unreachable", undefined);
const FETCH_TIME_OUT = 10000;
const WEB_LINK = 'https://ttys.app';
const SHARE_LINK = 'https://ttys.app';
const IOS_APP_STORE_ID = '';
const IOS_DOWNLOAD_LINK = 'https://apps.apple.com/app/com.ttys';
const ANDROID_PACKAGE = 'com.ttys';
const ANDROID_DOWNLOAD_LINK = 'https://assets.ttys.app/app.apk';
const DOWNLOAD_LINK = 'https://assets.ttys.app/app.apk' // 通用下载页面，作为默认备选
;
const LOCAL_PORT = 10000;
const ORIGIN = typeof DEV !== 'undefined' && DEV ? 'http://192.168.1.101:6061/v1' : 'https://api.ttys.app/v1';
const FILE_ORIGIN = typeof DEV !== 'undefined' && DEV ? 'http://192.168.1.101:6062/v1' : 'https://api2.ttys.app/v1';
const MINIO_ORIGIN = typeof DEV !== 'undefined' && DEV ? 'http://192.168.1.101:9000/v1' : 'https://api.ttys.app/v1';
function getConfig(locale) {
    // 获取翻译函数
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$i18n$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTranslationClient"])(locale);
    return {
        appName: t('config_app_name'),
        YEAR: t('general_years'),
        CATEGORY_TYPE: {
            '0': t('category_type'),
            '1': t('category_region'),
            '2': t('category_year'),
            '3': t('category_all')
        },
        ART_TYPE: {
            '0': t('artTypeFilm'),
            '1': t('artTypeTeleplay'),
            '2': t('artTypeEntertainment'),
            '3': t('artTypeVariety'),
            '4': t('artTypeNews')
        },
        CONTENT_TYPE: {
            '0': t('contentTypePlot'),
            '1': t('contentTypeComedy'),
            '2': t('contentTypeAction'),
            '3': t('contentTypeRomance'),
            '4': t('contentTypeScienceFiction'),
            '5': t('contentTypeCartoon'),
            '6': t('contentTypeSuspense'),
            '7': t('contentTypeThriller'),
            '8': t('contentTypeHorror'),
            '9': t('contentTypeCrime'),
            '10': t('contentTypeHomosexual'),
            '11': t('contentTypeMusic'),
            '12': t('contentTypeDance'),
            '13': t('contentTypeBiopic'),
            '14': t('contentTypeHistorical'),
            '15': t('contentTypeWar'),
            '16': t('contentTypeWestward'),
            '17': t('contentTypeMagical'),
            '18': t('contentTypeAdventure'),
            '19': t('contentTypeDisaster'),
            '20': t('contentTypeMartialArts'),
            '21': t('contentTypeOthers')
        },
        REELS_CONTENT_TYPE: {
            '0': t('reelsContentTypeUrban'),
            '1': t('reelsContentTypeTraverse'),
            '2': t('reelsContentTypeRebirth'),
            '3': t('reelsContentTypeWarGod'),
            '4': t('reelsContentTypeFantasy'),
            '5': t('reelsContentTypeOverlord'),
            '6': t('reelsContentTypeTorturedLove'),
            '7': t('reelsContentTypeBaby'),
            '8': t('reelsContentTypeCostume'),
            '9': t('reelsContentTypeDivineHealer'),
            '10': t('reelsContentTypeFemale'),
            '11': t('reelsContentTypeMale'),
            '12': t('reelsContentTypeHeir'),
            '13': t('reelsContentTypeRepublic'),
            '14': t('reelsContentTypeRise'),
            '15': t('reelsContentTypeRomance'),
            '16': t('reelsContentTypeHistory'),
            '17': t('reelsContentTypeSweet'),
            '18': t('reelsContentTypeRevenge'),
            '19': t('reelsContentTypeFamily'),
            '20': t('reelsContentTypeReality'),
            '21': t('reelsContentTypeKinship'),
            '22': t('reelsContentTypeFeeling'),
            '23': t('reelsContentTypeFlashMarriage'),
            '24': t('reelsContentTypeOthers')
        },
        AREA: {
            '0': t('areaTypeChinaMainland'),
            '1': t('areaTypeUnitedStates'),
            '2': t('areaTypeHongKong'),
            '3': t('areaTypeTaiwan'),
            '4': t('areaTypeJapan'),
            '5': t('areaTypeKorea'),
            '6': t('areaTypeUnitedKingdom'),
            '7': t('areaTypeFrance'),
            '8': t('areaTypeGermany'),
            '9': t('areaTypeItaly'),
            '10': t('areaTypeSpain'),
            '11': t('areaTypeIndia'),
            '12': t('areaTypeThailand'),
            '13': t('areaTypeRussia'),
            '14': t('areaTypeIran'),
            '15': t('areaTypeCanada'),
            '16': t('areaTypeAustralia'),
            '17': t('areaTypeIreland'),
            '18': t('areaTypeSweden'),
            '19': t('areaTypeBrazil'),
            '20': t('areaTypeDenmark'),
            '21': t('areaTypeOthers')
        }
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/utils/index.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "allSettled": (()=>allSettled),
    "clearStorage": (()=>clearStorage),
    "clearStorageItem": (()=>clearStorageItem),
    "decodeAes": (()=>decodeAes),
    "decodeRC4": (()=>decodeRC4),
    "encodeAes": (()=>encodeAes),
    "encodeRC4": (()=>encodeRC4),
    "fetchHandle": (()=>fetchHandle),
    "getRandomElements": (()=>getRandomElements),
    "getStorage": (()=>getStorage),
    "hasChinese": (()=>hasChinese),
    "isFormBody": (()=>isFormBody),
    "isObject": (()=>isObject),
    "randomNumber": (()=>randomNumber),
    "setStorage": (()=>setStorage),
    "shuffleArray": (()=>shuffleArray),
    "sleep": (()=>sleep)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$crypto$2d$es$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/crypto-es/lib/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$appConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/appConfig.js [app-client] (ecmascript)");
;
;
const hasChinese = (str)=>/[\u4e00-\u9fff]/.test(str);
const sleep = (delay)=>new Promise((resolve)=>setTimeout(resolve, delay));
const encodeAes = (str)=>{
    const key = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$crypto$2d$es$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].enc.Utf8.parse(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$appConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["appSecret"]);
    const encryptedData = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$crypto$2d$es$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].AES.encrypt(str, key, {
        iv: key,
        mode: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$crypto$2d$es$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].mode.CBC,
        padding: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$crypto$2d$es$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].pad.Pkcs7
    });
    return encryptedData.ciphertext.toString();
};
const decodeAes = (str)=>{
    const key = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$crypto$2d$es$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].enc.Utf8.parse(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$appConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["appSecret"]);
    const encryptedHexStr = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$crypto$2d$es$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].enc.Hex.parse(str);
    const encryptedBase64Str = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$crypto$2d$es$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].enc.Base64.stringify(encryptedHexStr);
    const decryptedData = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$crypto$2d$es$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].AES.decrypt(encryptedBase64Str, key, {
        iv: key,
        mode: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$crypto$2d$es$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].mode.CBC,
        padding: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$crypto$2d$es$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].pad.Pkcs7
    });
    return decryptedData.toString(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$crypto$2d$es$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].enc.Utf8);
};
const encodeRC4 = (str)=>{
    const key = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$crypto$2d$es$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].enc.Utf8.parse(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$appConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["appSecret"]);
    const encrypted = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$crypto$2d$es$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].RC4.encrypt(str, key);
    return encrypted.ciphertext.toString();
};
const decodeRC4 = (str)=>{
    const key = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$crypto$2d$es$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].enc.Utf8.parse(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$appConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["appSecret"]);
    const decrypted = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$crypto$2d$es$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].RC4.decrypt(str, key);
    return decrypted.toString(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$crypto$2d$es$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].enc.Utf8);
};
const isObject = (v)=>Object.prototype.toString.call(v) === '[object Object]';
const isFormBody = (v)=>v instanceof FormData;
const setStorage = async (key, value)=>{
    try {
        if (!isObject(value)) {
            throw new Error('[setStorage]: value must be "object"');
        } else {
            await localStorage.setItem(key, JSON.stringify(value));
        }
    } catch (err) {
        console.error(`[setStorage]: ${err}`);
        await Promise.reject(new Error(`[setStorage]: ${err}`));
    }
};
const getStorage = async (key)=>{
    try {
        const res = await localStorage.getItem(key);
        if (res) {
            return JSON.parse(res);
        }
    } catch (err) {
        console.error(`[getStorage]: ${err}`);
        await Promise.reject(new Error(`[getStorage]: ${err}`));
    }
};
const clearStorageItem = async (key)=>{
    try {
        await localStorage.removeItem(key);
    } catch (err) {
        console.error(`[removeItem]: ${err}`);
        await Promise.reject(new Error(`[removeItem]: ${err}`));
    }
};
const clearStorage = async ()=>{
    try {
        await localStorage.clear();
    } catch (err) {
        console.error(`[clearStorage]: ${err}`);
        await Promise.reject(new Error(`[clearStorage]: ${err}`));
    }
};
const getRandomElements = (arr, count)=>{
    if (!arr || !arr.length || !Array.isArray(arr)) return [];
    const shuffled = arr?.slice(0);
    let i = arr.length;
    const min = i - count;
    let temp;
    let index;
    while(i-- > min){
        index = Math.floor((i + 1) * Math.random());
        temp = shuffled[index];
        shuffled[index] = shuffled[i];
        shuffled[i] = temp;
    }
    return shuffled?.slice(min);
};
const randomNumber = (min, max)=>Math.floor(Math.random() * (max - min + 1)) + min;
const shuffleArray = (arr)=>{
    let curId = arr.length;
    while(curId !== 0){
        const randId = Math.floor(Math.random() * curId);
        curId -= 1;
        const tmp = arr[curId];
        arr[curId] = arr[randId];
        arr[randId] = tmp;
    }
    return arr;
};
const allSettled = (arr)=>{
    if (!Promise.allSettled) {
        return Promise.all(arr.map((p)=>Promise.resolve(p).then((res)=>res, (error)=>error)));
    } else {
        return Promise.allSettled(arr);
    }
};
const buildUrl = (url, encrypt, secretKey)=>{
    const queryParams = encrypt ? `c_m=${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$appConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cryptMode"]}` : `dev=1&ak=${secretKey}&c_m=${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$appConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cryptMode"]}`;
    return `${url}${url.includes('?') ? '&' : '?'}${queryParams}`;
};
const fetchHandle = ({ url, method = 'GET', headers = {}, body = {}, token = '', timeout = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$appConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FETCH_TIME_OUT"], encrypt = 0, secretKey = '' }, signal)=>{
    if (!url) throw new Error('Missing params: url');
    const tokenStr = token ? `Bearer ${token}` : '';
    const headersOpt = {
        'Content-Type': 'application/json',
        ...headers,
        ...tokenStr && {
            Authorization: tokenStr
        }
    };
    const urlStr = buildUrl(url, encrypt, secretKey);
    const isValidBody = [
        'POST',
        'PUT',
        'PATCH'
    ].includes(method.toUpperCase()) && body && Object.keys(body).length;
    let bodyData;
    if (isValidBody) {
        if (encrypt) {
            bodyData = encodeAes(JSON.stringify(body));
        } else {
            bodyData = JSON.stringify(body);
        }
    }
    const fetchOptions = {
        method,
        headers: headersOpt,
        body: isValidBody ? bodyData : undefined,
        signal
    };
    const isServer = "object" === 'undefined';
    let controller;
    let timeoutId;
    if ("TURBOPACK compile-time truthy", 1) {
        controller = new AbortController();
        const { signal: controllerSignal } = controller;
        if (signal) {
            signal.addEventListener('abort', ()=>controller.abort());
        }
        fetchOptions.signal = controllerSignal;
    }
    const request = fetch(urlStr, fetchOptions).then((response)=>response.text()).then((text)=>text ? JSON.parse(text) : {}).finally(()=>{
        if (!isServer && timeoutId) {
            clearTimeout(timeoutId);
        }
    });
    if ("TURBOPACK compile-time truthy", 1) {
        const timeoutPromise = new Promise((_, reject)=>{
            timeoutId = setTimeout(()=>{
                const e = 'Request timeout!';
                controller.abort(e);
                reject(new Error(e));
            }, timeout);
        });
        return Promise.race([
            request,
            timeoutPromise
        ]);
    }
    "TURBOPACK unreachable";
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/data/index.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pako$2f$dist$2f$pako$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/pako/dist/pako.esm.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/utils/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$appConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/appConfig.js [app-client] (ecmascript)");
;
;
;
const __TURBOPACK__default__export__ = async (params, signal, translations = {})=>{
    try {
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchHandle"])({
            ...params,
            encrypt: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$appConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENCRYPT"],
            secretKey: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$appConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["appSecret"]
        }, signal);
        if (result && Object.keys(result).length) {
            const { data, errMsg } = result;
            if (errMsg) {
                await Promise.reject(errMsg);
            }
            if (data) {
                if (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$appConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENCRYPT"]) {
                    if (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$appConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cryptMode"] === 'g') {
                        const binaryData = atob(data);
                        const uint8Array = new Uint8Array([
                            ...binaryData
                        ].map((c)=>c.charCodeAt(0)));
                        const decompressedData = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pako$2f$dist$2f$pako$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].inflate(uint8Array, {
                            to: 'string'
                        });
                        return JSON.parse(decompressedData);
                    }
                    return JSON.parse((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["decodeRC4"])(data));
                } else {
                    return data;
                }
            }
        }
    } catch (err) {
        if (err) {
            const errStr = typeof err === 'string' ? err : err.toString();
            const userExist = errStr.includes('user existed');
            const userNotExist = errStr.includes('user not exist');
            const authFaild = errStr.includes('authorization header not fined') || errStr.includes('Authorization Failed') || errStr.includes('access token not fined') || errStr.includes('invalid token');
            const emptyQuery = errStr.includes('Query was empty');
            const notFind = errStr.includes('record not found');
            const invalidString = errStr.includes('Incorrect string value');
            const responseErr = errStr.includes('no response');
            const passwordErr = errStr.includes('wrong password');
            const networkErr = errStr.includes('Network request failed');
            const timeout = errStr.includes('time out');
            const abortError = errStr.includes('AbortError');
            const t = (key)=>translations[key] || key;
            if (userExist) {
                console.warn(t('general_user_exist'), 1);
            } else if (userNotExist) {
                console.warn(t('general_user_not_exist'), 1);
            } else if (authFaild) {
                console.warn(t('general_auth_fail'), 1);
            } else if (emptyQuery) {
                console.warn(t('main_noData'), 1);
            } else if (notFind) {
                console.info(t('main_noData'));
            } else if (invalidString) {
                console.warn(t('general_wrong_character'), 1);
                await Promise.reject(err);
            } else if (responseErr) {
                console.warn(t('general_net_slow'), 1);
            } else if (passwordErr) {
                Toast.fail(t('general_login_faild'), 1);
                await Promise.reject(err);
            } else if (timeout) {
                console.warn(t('general_net_wrong'), 1);
                await Promise.reject(new Error(t('general_net_wrong')));
            } else if (networkErr) {
                const net = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStorage"])('netinfo');
                if (!net?.connected) {
                    console.warn(t('general_net_unconnected'));
                    await Promise.reject(new Error(t('general_net_unconnected')));
                } else {
                    console.warn(t('general_net_fault'), 1);
                    await Promise.reject(new Error(t('general_net_fault')));
                }
            } else if (abortError) {
                console.warn(err.toString());
            } else {
                console.error(errStr);
                console.warn(t('general_net_link_fault'), 1);
                await Promise.reject(err);
            }
        }
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/utils/categoryData.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "getCategories": (()=>getCategories),
    "processCategories": (()=>processCategories)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2f$videos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/data/videos.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$appConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/appConfig.js [app-client] (ecmascript)");
;
;
const processCategories = (data, locale = 'cn', tabType = 'movie')=>{
    if (!data || !Array.isArray(data)) {
        console.warn('无效的分类数据格式');
        return [];
    }
    // 使用appConfig中定义的常量映射
    const { CATEGORY_TYPE, CONTENT_TYPE, REELS_CONTENT_TYPE, AREA, YEAR } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$appConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getConfig"])(locale);
    // 处理结果数组
    const result = [];
    // 首先根据tabType过滤合适的分类数据
    const filteredCategories = data.filter((category)=>{
        // 确保category和name存在
        if (!category || !category.name) return false;
        // 短剧特殊处理
        if (tabType === 'short-drama') {
            return category.name === 'reels_content_type';
        } else {
            // 非短剧排除reels_content_type
            return category.name !== 'reels_content_type';
        }
    });
    // 遍历过滤后的分类数据
    filteredCategories.forEach((category)=>{
        // 跳过video_type类型或无效数据
        if (!category || !category.name || category.name === 'video_type' || category.name === 'art_type' || !Array.isArray(category.data)) {
            return;
        }
        // 根据分类类型确定标题和处理方式
        let title = '';
        let items = [];
        switch(category.name){
            case 'content_type':
                title = CATEGORY_TYPE[0];
                items = category.data.map((id)=>({
                        id,
                        name: CONTENT_TYPE[id] || id
                    }));
                break;
            case 'reels_content_type':
                title = CATEGORY_TYPE[0];
                items = category.data.map((id)=>({
                        id,
                        name: REELS_CONTENT_TYPE[id] || id
                    }));
                break;
            case 'area':
                title = CATEGORY_TYPE[1];
                items = category.data.map((id)=>({
                        id,
                        name: AREA[id] || id
                    }));
                break;
            case 'release_year':
                title = CATEGORY_TYPE[2];
                items = category.data.map((id)=>({
                        id,
                        name: id.length < 3 ? `${id}${YEAR}` : id
                    }));
                // 年份需要反序排列
                items.reverse();
                break;
            default:
                title = category.name;
                items = category.data.map((id)=>({
                        id,
                        name: String(id)
                    }));
        }
        // 添加"全部"选项
        if (items.length > 0) {
            items.unshift({
                id: 'all',
                name: CATEGORY_TYPE[3]
            });
        }
        // 添加到结果数组
        result.push({
            title,
            items
        });
    });
    // 确保每种分类类型都有数据
    if (tabType !== 'short-drama') {
        // 检查并添加缺失的分类类型
        const titles = result.map((group)=>group.title);
        // 确保类型分类存在
        if (!titles.includes(CATEGORY_TYPE[0])) {
            result.push({
                title: CATEGORY_TYPE[0],
                items: [
                    {
                        id: 'all',
                        name: CATEGORY_TYPE[3]
                    }
                ]
            });
        }
        // 确保地区分类存在
        if (!titles.includes(CATEGORY_TYPE[1])) {
            result.push({
                title: CATEGORY_TYPE[1],
                items: [
                    {
                        id: 'all',
                        name: CATEGORY_TYPE[3]
                    }
                ]
            });
        }
        // 确保年份分类存在
        if (!titles.includes(CATEGORY_TYPE[2])) {
            result.push({
                title: CATEGORY_TYPE[2],
                items: [
                    {
                        id: 'all',
                        name: CATEGORY_TYPE[3]
                    }
                ]
            });
        }
    }
    return result;
};
const getCategories = async (tab = 'movie', locale = 'cn')=>{
    try {
        // 从API获取所有分类数据，使用tab参数
        const apiCategories = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2f$videos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCategoriesServerSide"])(tab, locale);
        if (!apiCategories || apiCategories.length === 0) {
            console.warn('未能获取分类数据');
            return [];
        }
        return apiCategories;
    } catch (error) {
        console.error('获取分类数据失败', error);
        return [];
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/data/videos.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "addMedia": (()=>addMedia),
    "getCategoriesServerSide": (()=>getCategoriesServerSide),
    "getCategoryData": (()=>getCategoryData),
    "getShortVideoList": (()=>getShortVideoList),
    "getVideoList": (()=>getVideoList),
    "getVideoListServerSide": (()=>getVideoListServerSide)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$appConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/appConfig.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/data/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$categoryData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/utils/categoryData.ts [app-client] (ecmascript)");
;
;
;
// 添加请求去重和缓存系统
const pendingRequests = {};
const requestCache = {};
const REQUEST_CACHE_TIME = 5000; // 缓存5秒
// 原始的API请求函数
const _originalGetVideoList = ({ ...args }, signal)=>{
    const params = [];
    Object.entries(args).forEach((item)=>{
        params.push(item[1] !== '' ? `${item[0]}=${item[1]}` : '');
    });
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        url: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$appConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ORIGIN"]}/videos/playList?${params.join('&')}&playable=1`
    }, signal);
};
const getVideoList = ({ ...args }, signal)=>{
    // 如果有requestId参数，从请求参数中移除它（它只用于缓存键）
    const { requestId, ...apiParams } = args;
    // 生成请求的唯一标识，用于缓存和去重
    const cacheKey = JSON.stringify(apiParams);
    // 检查是否有缓存的结果
    if (requestCache[cacheKey] && Date.now() - requestCache[cacheKey].timestamp < REQUEST_CACHE_TIME) {
        console.log('📦 从缓存加载数据:', cacheKey);
        return Promise.resolve(requestCache[cacheKey].data);
    }
    // 检查是否有相同的请求正在进行中
    if (pendingRequests[cacheKey]) {
        return pendingRequests[cacheKey];
    }
    // 创建新的请求并存储Promise
    pendingRequests[cacheKey] = _originalGetVideoList(apiParams, signal).then((response)=>{
        // 缓存响应数据
        if (response) {
            requestCache[cacheKey] = {
                data: response,
                timestamp: Date.now()
            };
        }
        return response;
    }).finally(()=>{
        // 延迟删除挂起的请求引用，避免多次并发调用
        setTimeout(()=>{
            delete pendingRequests[cacheKey];
        }, 100);
    });
    return pendingRequests[cacheKey];
};
const getShortVideoList = ({ ...args }, signal)=>{
    const params = [];
    Object.entries(args).forEach((item)=>{
        params.push(item[1] !== '' ? `${item[0]}=${item[1]}` : '');
    });
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        url: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$appConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ORIGIN"]}/videos/shortPlayList?${params.join('&')}&playable=1`
    }, signal);
};
const getCategoryData = ({ ...args }, signal)=>{
    const params = [];
    Object.entries(args).forEach((item)=>{
        params.push(item[1] !== '' ? `${item[0]}=${item[1]}` : '');
    });
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        url: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$appConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ORIGIN"]}/videos/getCategories?${params.join('&')}`
    }, signal);
};
const addMedia = (params, token, signal)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        url: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$appConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ORIGIN"]}/videos/auth/addOne`,
        method: 'POST',
        token,
        body: params
    }, signal);
async function getCategoriesServerSide(tabType, locale) {
    const { CATEGORY_TYPE } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$appConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getConfig"])(locale);
    try {
        // 统一获取所有分类数据
        const response = await getCategoryData({});
        if (!response) {
            console.error('API响应为空');
            return [];
        }
        // 使用工具函数处理分类数据
        const processedCategories = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$categoryData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["processCategories"])(response, locale, tabType);
        return processedCategories;
    } catch (error) {
        console.error('服务端获取分类数据失败:', error);
        // 发生错误时返回基础分类
        return [
            {
                title: CATEGORY_TYPE[0],
                items: [
                    {
                        id: 'all',
                        name: CATEGORY_TYPE[3]
                    }
                ]
            }
        ];
    }
}
async function getVideoListServerSide(tabType, filters = {}, locale = 'cn') {
    try {
        // 将tabType映射到API所需的artType
        const tabTypeToArtType = {
            'movie': '0',
            'tv': '1',
            'anime': '2',
            'short-drama': '8' // 短剧
        };
        // 是否为短剧
        const isShortDrama = tabType === 'short-drama';
        // 构建API参数
        const params = {
            videoType: isShortDrama ? '3' : '0',
            artType: tabTypeToArtType[tabType],
            pageIndex: 0,
            pageSize: 24
        };
        // 添加筛选条件
        if (filters.region && filters.region !== 'all') {
            params.area = filters.region;
        }
        if (filters.year && filters.year !== 'all') {
            params.releaseYear = filters.year;
        }
        // 根据标签类型处理内容类型筛选
        if (isShortDrama) {
            // 短剧使用reels_content_type参数
            if (filters.type && filters.type !== 'all') {
                params.reelsContentType = filters.type;
            }
        } else {
            // 其他标签使用content_type参数
            if (filters.type && filters.type !== 'all') {
                // 同时支持contentType格式
                params.contentType = filters.type;
            }
        }
        // 获取数据
        const response = await getVideoList(params);
        if (!response) {
            throw new Error('无法获取视频列表数据');
        }
        // 判断是否有更多数据
        const currentItemsCount = response.list.length;
        const totalReceivedItems = currentItemsCount; // 因为是第一页，所以总接收数量就是当前页数量
        const hasMore = totalReceivedItems < response.total && currentItemsCount === params.pageSize;
        // 将API返回的数据格式转换为前端组件需要的格式
        const formattedData = {
            videos: response.list.map((item)=>({
                    id: item.ID || String(item.ID) || `item-${page}-${index}`,
                    title: locale === 'cn' || locale === 'tw' ? item.name : item.nameEn ?? item.name,
                    cover: item.coverSrc || item.coverHSrc || '',
                    description: item.introduction || item.summary || '',
                    score: item.score ? parseFloat(item.score) : 0,
                    year: item.releaseYear || '',
                    category: item.contentType || item.reelsContentType || '',
                    region: item.area || '',
                    updateInfo: item.lastWatchSet || '',
                    tags: []
                })),
            hasMore,
            total: response.total || 0,
            isLoading: false,
            isError: false
        };
        return formattedData;
    } catch (error) {
        console.error('服务端获取视频列表失败:', error);
        // 返回错误状态
        return {
            videos: [],
            hasMore: false,
            total: 0,
            isLoading: false,
            isError: true,
            error: error.message
        };
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/hooks/useVideoList.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "useVideoList": (()=>useVideoList)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2f$videos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/data/videos.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$i18n$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/i18n/client.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
// 将tabType映射到API所需的artType
const tabTypeToArtType = {
    'movie': '0',
    'tv': '1',
    'anime': '2',
    'short-drama': '8' // 短剧
};
const useVideoList = ({ tabType, filters = {}, initialData, locale = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$i18n$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_LOCALE"] })=>{
    _s();
    // 用于存储服务端获取的初始数据
    const [serverData, setServerData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialData ? {
        videos: initialData.videos,
        hasMore: initialData.hasMore,
        total: initialData.total
    } : null);
    // 用于强制触发组件重新渲染
    const [forceUpdate, setForceUpdate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    // 跟踪当前标签和筛选条件
    const [currentTabType, setCurrentTabType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(tabType);
    const [currentFilters, setCurrentFilters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(JSON.stringify(filters));
    // 状态标记
    const isLoadingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const isInitialLoadRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(true);
    const manualTriggerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    // 缓存筛选条件
    const filtersRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(filters);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useVideoList.useEffect": ()=>{
            filtersRef.current = filters;
        }
    }["useVideoList.useEffect"], [
        filters
    ]);
    // 当前页数
    const pageRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    // 构建缓存键
    const swrKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useVideoList.useMemo[swrKey]": ()=>`videos-${tabType}-${JSON.stringify(filters)}-${locale}`
    }["useVideoList.useMemo[swrKey]"], [
        tabType,
        filters,
        locale
    ]);
    // 检测标签类型或筛选条件变化
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useVideoList.useEffect": ()=>{
            const newTabType = tabType;
            const newFilters = JSON.stringify(filters);
            if (currentTabType !== newTabType || currentFilters !== newFilters) {
                // console.log(`检测到变化: 标签从 ${currentTabType} 变为 ${newTabType}, 或筛选条件变更`);
                // 更新当前状态
                setCurrentTabType(newTabType);
                setCurrentFilters(newFilters);
                // 重置状态
                pageRef.current = 0;
                isLoadingRef.current = false;
                isInitialLoadRef.current = true;
                // 如果是标签变更，保留初始数据
                if (initialData && currentTabType !== newTabType) {
                    setServerData({
                        videos: initialData.videos,
                        hasMore: initialData.hasMore,
                        total: initialData.total
                    });
                } else {
                    // 如果是筛选条件变更，清空服务端数据
                    setServerData(null);
                }
                // 触发数据重新加载
                manualTriggerRef.current = true;
                // 强制重新渲染以确保状态更新
                setForceUpdate({
                    "useVideoList.useEffect": (prev)=>prev + 1
                }["useVideoList.useEffect"]);
            }
        }
    }["useVideoList.useEffect"], [
        tabType,
        filters,
        initialData,
        currentTabType,
        currentFilters
    ]);
    // 页面加载或参数修改时初始化数据获取函数
    const fetchVideoList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useVideoList.useCallback[fetchVideoList]": async (page)=>{
            if (isLoadingRef.current && page > 1) return null;
            // console.log(`请求视频列表: 页码=${page}, 标签=${tabType}`);
            isLoadingRef.current = true;
            try {
                const params = {
                    videoType: tabTypeToArtType[tabType] === '8' ? '3' : '0',
                    artType: tabTypeToArtType[tabType],
                    pageIndex: page,
                    pageSize: 18
                };
                // 添加筛选条件
                if (filtersRef.current.region && filtersRef.current.region !== 'all') {
                    params.area = filtersRef.current.region;
                }
                if (filtersRef.current.year && filtersRef.current.year !== 'all') {
                    params.releaseYear = filtersRef.current.year;
                }
                // 根据标签类型处理内容类型筛选
                if (tabType === 'short-drama') {
                    // 短剧使用reels_content_type参数
                    if (filtersRef.current.type && filtersRef.current.type !== 'all') {
                        params.reelsContentType = filtersRef.current.type;
                    }
                } else {
                    // 其他标签使用content_type参数
                    if (filtersRef.current.type && filtersRef.current.type !== 'all') {
                        params.contentType = filtersRef.current.type;
                    }
                }
                // console.log(`请求参数:`, params);
                const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2f$videos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getVideoList"])(params);
                // console.log(`请求成功，获取到 ${response.list.length} 条数据`);
                // 判断是否有更多数据
                const currentItemsCount = response.list.length;
                const totalReceivedItems = (page - 1) * params.pageSize + currentItemsCount;
                const hasMore = totalReceivedItems < response.total && currentItemsCount === params.pageSize;
                // 根据locale决定使用哪个标题作为主标题
                const formattedVideos = response.list.map({
                    "useVideoList.useCallback[fetchVideoList].formattedVideos": (item, index)=>{
                        // 当locale不是cn时，优先使用英文标题
                        const primaryTitle = locale === 'cn' || locale === 'tw' ? item.name : item.nameEn ?? item.name;
                        return {
                            id: item.ID || String(item.ID) || `item-${page}-${index}`,
                            title: primaryTitle,
                            cover: item.coverSrc || item.coverHSrc || '',
                            description: item.introduction || item.summary || '',
                            score: item.score ? parseFloat(item.score) : 0,
                            year: item.releaseYear || item.release_year || '',
                            category: item.contentType || item.content_type || item.reelsContentType || item.reels_content_type || '',
                            region: item.area || '',
                            updateInfo: item.lastWatchSet || item.last_watch_set || '',
                            tags: []
                        };
                    }
                }["useVideoList.useCallback[fetchVideoList].formattedVideos"]);
                // 首次加载完成
                isInitialLoadRef.current = false;
                // 返回处理后的结果
                return {
                    videos: formattedVideos,
                    hasMore,
                    total: response.total || 0,
                    page
                };
            } catch (error) {
                console.error('获取视频列表失败:', error);
                return {
                    videos: [],
                    hasMore: false,
                    total: 0,
                    page,
                    error: error instanceof Error ? error.message : '未知错误'
                };
            } finally{
                isLoadingRef.current = false;
            }
        }
    }["useVideoList.useCallback[fetchVideoList]"], [
        tabType,
        locale
    ]);
    // 存储所有已加载的视频
    const [videoState, setVideoState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        videos: initialData?.videos || [],
        hasMore: initialData?.hasMore || false,
        isLoading: false,
        error: null,
        total: initialData?.total || 0
    });
    // 加载更多视频
    const loadMore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useVideoList.useCallback[loadMore]": async ()=>{
            // 避免重复请求
            if (isLoadingRef.current || !videoState.hasMore) {
                // console.log('跳过加载: 正在加载中或没有更多数据');
                return;
            }
            // console.log(`开始加载更多，当前页码: ${pageRef.current}`);
            // 设置加载状态
            setVideoState({
                "useVideoList.useCallback[loadMore]": (prev)=>({
                        ...prev,
                        isLoading: true
                    })
            }["useVideoList.useCallback[loadMore]"]);
            try {
                // 获取下一页数据
                const nextPage = pageRef.current + 1;
                const result = await fetchVideoList(nextPage);
                // 如果获取失败或没有数据，停止处理
                if (!result || result.error) {
                    throw new Error(result?.error || '加载失败');
                }
                // 更新页码
                pageRef.current = nextPage;
                // 更新视频状态，合并新旧数据
                setVideoState({
                    "useVideoList.useCallback[loadMore]": (prev)=>{
                        // 创建临时映射去重
                        const videoMap = new Map();
                        // 添加已有视频
                        prev.videos.forEach({
                            "useVideoList.useCallback[loadMore]": (video)=>{
                                videoMap.set(video.id, video);
                            }
                        }["useVideoList.useCallback[loadMore]"]);
                        // 添加新视频
                        result.videos.forEach({
                            "useVideoList.useCallback[loadMore]": (video)=>{
                                videoMap.set(video.id, video);
                            }
                        }["useVideoList.useCallback[loadMore]"]);
                        // 将映射转换回数组
                        const newVideos = Array.from(videoMap.values());
                        return {
                            videos: newVideos,
                            hasMore: result.hasMore,
                            isLoading: false,
                            error: null,
                            total: result.total
                        };
                    }
                }["useVideoList.useCallback[loadMore]"]);
            // console.log(`加载更多完成，已加载 ${pageRef.current} 页`);
            } catch (error) {
                console.error('加载更多失败:', error);
                setVideoState({
                    "useVideoList.useCallback[loadMore]": (prev)=>({
                            ...prev,
                            isLoading: false,
                            error: error instanceof Error ? error.message : '加载失败'
                        })
                }["useVideoList.useCallback[loadMore]"]);
            }
        }
    }["useVideoList.useCallback[loadMore]"], [
        videoState.hasMore,
        fetchVideoList
    ]);
    // 重新加载全部数据
    const reloadData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useVideoList.useCallback[reloadData]": async ()=>{
            // console.log('重新加载所有数据');
            // 重置状态
            pageRef.current = 0;
            isLoadingRef.current = true;
            // 设置加载状态
            setVideoState({
                "useVideoList.useCallback[reloadData]": (prev)=>({
                        ...prev,
                        isLoading: true,
                        error: null,
                        videos: []
                    })
            }["useVideoList.useCallback[reloadData]"]);
            try {
                // 获取第一页数据
                const result = await fetchVideoList(0);
                // 如果获取失败或没有数据，停止处理
                if (!result || result.error) {
                    throw new Error(result?.error || '加载失败');
                }
                // 更新视频状态
                setVideoState({
                    videos: result.videos,
                    hasMore: result.hasMore,
                    isLoading: false,
                    error: null,
                    total: result.total
                });
            // console.log(`重新加载完成，获取到 ${result.videos.length} 条数据`);
            } catch (error) {
                console.error('重新加载失败:', error);
                setVideoState({
                    "useVideoList.useCallback[reloadData]": (prev)=>({
                            ...prev,
                            isLoading: false,
                            error: error instanceof Error ? error.message : '加载失败'
                        })
                }["useVideoList.useCallback[reloadData]"]);
            }
        }
    }["useVideoList.useCallback[reloadData]"], [
        fetchVideoList
    ]);
    // 首次加载或参数变化时自动加载
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useVideoList.useEffect": ()=>{
            // 如果是手动触发，直接加载
            if (manualTriggerRef.current) {
                // console.log('参数变化，手动触发数据加载');
                manualTriggerRef.current = false;
                reloadData();
                return;
            }
            // 如果有初始数据且是首次加载，不需要自动加载
            if (initialData && isInitialLoadRef.current && serverData) {
                // console.log('使用初始数据，不需要自动加载');
                setVideoState({
                    videos: serverData.videos,
                    hasMore: serverData.hasMore,
                    isLoading: false,
                    error: null,
                    total: serverData.total
                });
                isInitialLoadRef.current = false;
                return;
            }
            // 自动加载第一页
            if (isInitialLoadRef.current) {
                // console.log('首次加载，自动请求第一页数据');
                reloadData();
            }
        }
    }["useVideoList.useEffect"], [
        initialData,
        serverData,
        reloadData,
        forceUpdate
    ]);
    // 处理筛选变化
    const handleFilterChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useVideoList.useCallback[handleFilterChange]": ()=>{
            return reloadData();
        }
    }["useVideoList.useCallback[handleFilterChange]"], [
        reloadData
    ]);
    // 计算最终状态
    const isEmpty = videoState.videos.length === 0 && !videoState.isLoading;
    return {
        videos: videoState.videos,
        hasMore: videoState.hasMore,
        total: videoState.total,
        isLoading: videoState.isLoading,
        isLoadingMore: videoState.isLoading && pageRef.current > 1,
        isEmpty,
        error: videoState.error,
        loadMore,
        handleFilterChange,
        currentPage: pageRef.current
    };
};
_s(useVideoList, "uiQEt4BjedCWl3a1KeInyA1gKbs=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/components/videos/CategoryTabs.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>CategoryTabs)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$swipeable$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-swipeable/es/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$useAppStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/store/useAppStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lodash$2f$debounce$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lodash/debounce.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$appConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/appConfig.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
function CategoryTabs({ categories = [], tabType, translations }) {
    _s();
    // UI状态
    const [activeTabIndex, setActiveTabIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const tabsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // 从全局状态store获取筛选条件
    const { filter, setFilter, updateFilter, activeCategory, activeRegion, activeYear, activeType } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$useAppStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    // 路由和URL参数相关
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    // 用于初始化和更新控制的引用
    const didInit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const prevSearchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])('');
    const isUpdatingURL = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const prevFilterRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(filter);
    const prevFilterKeysRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(Object.keys(filter).length);
    // 跟踪是否是用户手动更改了筛选条件
    const isUserAction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    // 将标题映射到筛选条件类型
    const getFilterType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CategoryTabs.useCallback[getFilterType]": (title)=>{
            // 获取标题的小写形式，便于比较
            const lowerTitle = title.toLowerCase();
            // 安全获取翻译文本（防御性编程）
            const typeText = translations.category_type ? translations.category_type.toLowerCase() : '';
            const regionText = translations.category_region ? translations.category_region.toLowerCase() : '';
            const yearText = translations.category_year ? translations.category_year.toLowerCase() : '';
            // 与translations中的值比较，而非硬编码的中英文
            if (lowerTitle === 'category' || lowerTitle === '类型' || typeText && lowerTitle === typeText) return 'type';
            if (lowerTitle === 'region' || lowerTitle === '地区' || regionText && lowerTitle === regionText) return 'region';
            if (lowerTitle === 'year' || lowerTitle === '年份' || lowerTitle === 'release_year' || yearText && lowerTitle === yearText) return 'year';
            return lowerTitle;
        }
    }["CategoryTabs.useCallback[getFilterType]"], [
        translations
    ]);
    // 新增：根据id查找分类名称
    const getCategoryNameById = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CategoryTabs.useCallback[getCategoryNameById]": (categoryType, id)=>{
            if (id === 'all') {
                return 'all'; // 保持"全部"选项的特殊处理
            }
            // 找到对应类型的分类组
            const categoryGroup = categories.find({
                "CategoryTabs.useCallback[getCategoryNameById].categoryGroup": (group)=>{
                    const filterTypeName = getFilterType(group.title);
                    return filterTypeName === categoryType;
                }
            }["CategoryTabs.useCallback[getCategoryNameById].categoryGroup"]);
            if (!categoryGroup) return id;
            // 在分类组中查找匹配id的项，返回其name
            const categoryItem = categoryGroup.items.find({
                "CategoryTabs.useCallback[getCategoryNameById].categoryItem": (item)=>item.id === id
            }["CategoryTabs.useCallback[getCategoryNameById].categoryItem"]);
            return categoryItem ? categoryItem.name : id;
        }
    }["CategoryTabs.useCallback[getCategoryNameById]"], [
        categories,
        getFilterType
    ]);
    // 新增：根据name查找分类id
    const getCategoryIdByName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CategoryTabs.useCallback[getCategoryIdByName]": (categoryType, name)=>{
            if (name === 'all') {
                return 'all'; // 保持"全部"选项的特殊处理
            }
            // 找到对应类型的分类组
            const categoryGroup = categories.find({
                "CategoryTabs.useCallback[getCategoryIdByName].categoryGroup": (group)=>{
                    const filterTypeName = getFilterType(group.title);
                    return filterTypeName === categoryType;
                }
            }["CategoryTabs.useCallback[getCategoryIdByName].categoryGroup"]);
            if (!categoryGroup) return name;
            // 在分类组中查找匹配name的项，返回其id
            const categoryItem = categoryGroup.items.find({
                "CategoryTabs.useCallback[getCategoryIdByName].categoryItem": (item)=>item.name === name
            }["CategoryTabs.useCallback[getCategoryIdByName].categoryItem"]);
            return categoryItem ? categoryItem.id : name;
        }
    }["CategoryTabs.useCallback[getCategoryIdByName]"], [
        categories,
        getFilterType
    ]);
    // 当组件挂载时，从URL参数中获取筛选条件
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CategoryTabs.useEffect": ()=>{
            // 如果正在更新URL，跳过此次URL参数处理，避免循环
            if (isUpdatingURL.current) {
                return;
            }
            // 只在首次渲染和URL参数变化时执行
            if (!didInit.current || searchParams.toString() !== prevSearchParams.current) {
                didInit.current = true;
                prevSearchParams.current = searchParams.toString();
                const typeParam = searchParams.get('type') || 'all';
                const regionParam = searchParams.get('region') || 'all';
                const yearParam = searchParams.get('year') || 'all';
                // 将URL中的name值转换为id
                const type = getCategoryIdByName('type', typeParam);
                const region = getCategoryIdByName('region', regionParam);
                const year = getCategoryIdByName('year', yearParam);
                // 更新全局筛选状态
                const newFilter = {};
                if (type !== 'all') newFilter.type = type;
                // 只有非短剧才有地区和年份筛选
                if (tabType !== 'short-drama') {
                    if (region !== 'all') newFilter.region = region;
                    if (year !== 'all') newFilter.year = year;
                }
                // 深度比较筛选条件是否真的改变，避免无意义的更新
                const hasFilterChanged = JSON.stringify(newFilter) !== JSON.stringify(filter);
                if (hasFilterChanged) {
                    // console.log('从URL更新筛选条件:', newFilter);
                    setFilter(newFilter);
                }
            }
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["CategoryTabs.useEffect"], [
        searchParams,
        setFilter,
        tabType,
        getCategoryIdByName
    ]);
    // 新增：组件挂载时，如果store中已有筛选条件，将其同步到URL
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CategoryTabs.useEffect": ()=>{
            // 仅在组件首次挂载时执行一次
            if (!didInit.current) {
                return;
            }
            // 检查是否有筛选条件
            const hasFilter = Object.keys(filter).length > 0;
            // 检查URL是否为空
            const hasURLParams = searchParams.toString().length > 0;
            // 只有在以下情况更新URL:
            // 1. 是用户手动操作改变了筛选条件
            // 2. URL完全为空但store中有筛选条件(避免空URL)
            if (isUserAction.current || hasFilter && !hasURLParams) {
                // 创建一个新的URLSearchParams对象
                const params = new URLSearchParams();
                // 获取最新状态以确保数据是最新的
                const currentFilter = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$useAppStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].getState().filter;
                // 添加type参数 - 只有非"all"值才添加到URL
                if (currentFilter.type && currentFilter.type !== 'all') {
                    const typeName = getCategoryNameById('type', currentFilter.type);
                    params.set('type', typeName);
                }
                // 只有非短剧才有地区和年份
                if (tabType !== 'short-drama') {
                    // 添加region参数 - 只有非"all"值才添加到URL
                    if (currentFilter.region && currentFilter.region !== 'all') {
                        const regionName = getCategoryNameById('region', currentFilter.region);
                        params.set('region', regionName);
                    }
                    // 添加year参数 - 只有非"all"值才添加到URL
                    if (currentFilter.year && currentFilter.year !== 'all') {
                        const yearName = getCategoryNameById('year', currentFilter.year);
                        params.set('year', yearName);
                    }
                }
                // 检查是否需要更新URL
                const newParamsString = params.toString();
                if (newParamsString !== searchParams.toString()) {
                    isUpdatingURL.current = true;
                    prevSearchParams.current = newParamsString;
                    // console.log('更新URL参数:', newParamsString);
                    // 使用history API直接更新URL, 避免导航请求
                    try {
                        const url = new URL(window.location.href);
                        url.search = newParamsString;
                        window.history.replaceState(window.history.state, '', url.toString());
                    } catch (error) {
                        console.error('更新URL失败:', error);
                    }
                    // 更新完成后重置标记
                    setTimeout({
                        "CategoryTabs.useEffect": ()=>{
                            isUpdatingURL.current = false;
                            isUserAction.current = false; // 重置用户操作标记
                        }
                    }["CategoryTabs.useEffect"], 50);
                } else {
                    // 如果URL不需要更新，也要重置用户操作标记
                    isUserAction.current = false;
                }
            }
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["CategoryTabs.useEffect"], [
        filter
    ]);
    // 辅助函数：检查当前URL参数是否与筛选条件匹配
    const isFilterMatchingURL = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CategoryTabs.useCallback[isFilterMatchingURL]": ()=>{
            const typeParam = searchParams.get('type') || 'all';
            const typeId = getCategoryIdByName('type', typeParam);
            // 检查type是否匹配
            if ((filter.type || 'all') !== typeId) {
                return false;
            }
            // 检查region是否匹配（仅非短剧）
            if (tabType !== 'short-drama') {
                const regionParam = searchParams.get('region') || 'all';
                const regionId = getCategoryIdByName('region', regionParam);
                if ((filter.region || 'all') !== regionId) {
                    return false;
                }
                // 检查year是否匹配
                const yearParam = searchParams.get('year') || 'all';
                const yearId = getCategoryIdByName('year', yearParam);
                if ((filter.year || 'all') !== yearId) {
                    return false;
                }
            }
            return true;
        }
    }["CategoryTabs.useCallback[isFilterMatchingURL]"], [
        filter,
        searchParams,
        tabType,
        getCategoryIdByName
    ]);
    // 创建一个带有防抖功能的URL更新函数
    const debouncedUpdateURL = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lodash$2f$debounce$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((newParamsString)=>{
        if (isUpdatingURL.current) return;
        isUpdatingURL.current = true;
        // 预先更新prevSearchParams，避免后续useEffect中的重复处理
        prevSearchParams.current = newParamsString;
        // console.log('防抖更新URL参数:', newParamsString, '当前URL:', window.location.href);
        // 使用history API直接更新URL, 避免导航请求
        try {
            const url = new URL(window.location.href);
            url.search = newParamsString;
            window.history.replaceState(window.history.state, '', url.toString());
        } catch (error) {
            console.error('更新URL失败:', error);
        }
        // URL更新完成后重置标记
        setTimeout(()=>{
            isUpdatingURL.current = false;
        }, 50); // 延迟50ms确保处理完成
    }, 50);
    // 滚动到视频列表顶部
    const scrollToVideoListTop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CategoryTabs.useCallback[scrollToVideoListTop]": ()=>{
            // 等待视频列表渲染后滚动
            setTimeout({
                "CategoryTabs.useCallback[scrollToVideoListTop]": ()=>{
                    // 获取视频列表中的第一个卡片元素
                    const firstVideoCard = document.querySelector('.video-list .grid > *:first-child');
                    if (firstVideoCard) {
                        firstVideoCard.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    } else {
                        // 如果找不到卡片元素，尝试滚动到整个视频列表容器
                        const videoList = document.querySelector('.video-list');
                        if (videoList) {
                            videoList.scrollIntoView({
                                behavior: 'smooth',
                                block: 'start'
                            });
                        }
                    }
                }
            }["CategoryTabs.useCallback[scrollToVideoListTop]"], 300);
        }
    }["CategoryTabs.useCallback[scrollToVideoListTop]"], []);
    // 监听筛选条件变化，滚动到顶部
    // useEffect(() => {
    //   const currentFilterKeys = Object.keys(filter).length;
    //   // 只有当筛选条件真正发生变化时才滚动
    //   if (JSON.stringify(filter) !== JSON.stringify(prevFilterRef.current) || 
    //       currentFilterKeys !== prevFilterKeysRef.current) {
    //     scrollToVideoListTop();
    //     prevFilterRef.current = filter;
    //     prevFilterKeysRef.current = currentFilterKeys;
    //   }
    // }, [filter, scrollToVideoListTop]);
    // 处理分类变更
    const handleCategoryChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CategoryTabs.useCallback[handleCategoryChange]": (categoryId, categoryType)=>{
            // 标记这是用户手动操作
            isUserAction.current = true;
            // 先更新状态，再更新URL
            // 避免先更新URL导致的额外渲染和API调用
            updateFilter(categoryType, categoryId);
            // 在下一个微任务中构建完整的URL参数
            // 这确保状态已经更新
            setTimeout({
                "CategoryTabs.useCallback[handleCategoryChange]": ()=>{
                    // 构建完整的URL参数
                    const params = new URLSearchParams();
                    // 获取最新状态而不是依赖可能未更新的filter
                    const currentFilter = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$useAppStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].getState().filter;
                    // 添加type参数 - 只有非"all"值才添加到URL
                    if (currentFilter.type && currentFilter.type !== 'all') {
                        const typeName = getCategoryNameById('type', currentFilter.type);
                        params.set('type', typeName);
                    }
                    // 只有非短剧才有地区和年份
                    if (tabType !== 'short-drama') {
                        // 添加region参数 - 只有非"all"值才添加到URL
                        if (currentFilter.region && currentFilter.region !== 'all') {
                            const regionName = getCategoryNameById('region', currentFilter.region);
                            params.set('region', regionName);
                        }
                        // 添加year参数 - 只有非"all"值才添加到URL
                        if (currentFilter.year && currentFilter.year !== 'all') {
                            const yearName = getCategoryNameById('year', currentFilter.year);
                            params.set('year', yearName);
                        }
                    }
                    // 使用防抖方式更新URL
                    debouncedUpdateURL(params.toString());
                }
            }["CategoryTabs.useCallback[handleCategoryChange]"], 0);
        }
    }["CategoryTabs.useCallback[handleCategoryChange]"], [
        updateFilter,
        tabType,
        getCategoryNameById,
        debouncedUpdateURL
    ]);
    // 处理标签切换
    const handleTabChange = (index)=>{
        setActiveTabIndex(index);
        scrollToTab(index);
    };
    // 滑动到指定标签
    const scrollToTab = (index)=>{
        if (tabsRef.current) {
            const tabsElement = tabsRef.current;
            const tabElement = tabsElement.children[index];
            if (tabElement) {
                const scrollLeft = tabElement.offsetLeft - tabsElement.clientWidth / 2 + tabElement.clientWidth / 2;
                tabsElement.scrollTo({
                    left: scrollLeft,
                    behavior: 'smooth'
                });
            }
        }
    };
    // 滑动手势
    const swipeHandlers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$swipeable$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSwipeable"])({
        onSwipedLeft: {
            "CategoryTabs.useSwipeable[swipeHandlers]": ()=>{
                if (activeTabIndex < categories.length - 1) {
                    handleTabChange(activeTabIndex + 1);
                }
            }
        }["CategoryTabs.useSwipeable[swipeHandlers]"],
        onSwipedRight: {
            "CategoryTabs.useSwipeable[swipeHandlers]": ()=>{
                if (activeTabIndex > 0) {
                    handleTabChange(activeTabIndex - 1);
                }
            }
        }["CategoryTabs.useSwipeable[swipeHandlers]"],
        trackMouse: false
    });
    // 获取分类标题的国际化文本
    const getCategoryTitle = (title)=>{
        // 获取标题的小写形式，便于比较
        const lowerTitle = title.toLowerCase();
        // 安全获取翻译文本（防御性编程）
        const typeText = translations.category_type ? translations.category_type.toLowerCase() : '';
        const regionText = translations.category_region ? translations.category_region.toLowerCase() : '';
        const yearText = translations.category_year ? translations.category_year.toLowerCase() : '';
        // 直接返回对应的translation值
        if (lowerTitle === 'category' || lowerTitle === '类型' || typeText && lowerTitle === typeText) {
            return translations.category_type || title;
        }
        if (lowerTitle === 'region' || lowerTitle === '地区' || regionText && lowerTitle === regionText) {
            return translations.category_region || title;
        }
        if (lowerTitle === 'year' || lowerTitle === '年份' || lowerTitle === 'release_year' || yearText && lowerTitle === yearText) {
            return translations.category_year || title;
        }
        return title;
    };
    // 获取对应筛选类型的激活ID
    const getActiveId = (filterType)=>{
        switch(filterType){
            case 'type':
                return activeCategory;
            case 'region':
                return activeRegion;
            case 'year':
                return activeYear;
            default:
                return 'all';
        }
    };
    // 如果没有分类数据，显示一个空的容器
    if (!categories || categories.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "category-tabs"
        }, void 0, false, {
            fileName: "[project]/src/app/components/videos/CategoryTabs.tsx",
            lineNumber: 443,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "category-tabs",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative border-b border-gray-200 dark:border-gray-700",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: tabsRef,
                    className: "flex overflow-x-auto hide-scrollbar px-4 gap-4 whitespace-nowrap",
                    children: categories.map((category, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: `pb-1 px-1 text-sm font-medium transition-colors duration-200 ${index === activeTabIndex ? `text-[${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$appConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["THEME_COLOR"]}] border-b-2 border-[${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$appConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["THEME_COLOR"]}]` : 'text-gray-600 dark:text-gray-400'}`,
                            onClick: ()=>handleTabChange(index),
                            children: getCategoryTitle(category.title)
                        }, category.title, false, {
                            fileName: "[project]/src/app/components/videos/CategoryTabs.tsx",
                            lineNumber: 455,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/app/components/videos/CategoryTabs.tsx",
                    lineNumber: 450,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/videos/CategoryTabs.tsx",
                lineNumber: 449,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ...swipeHandlers,
                className: "mt-2",
                children: categories.map((category, tabIndex)=>{
                    // 确定当前标签对应的过滤类型
                    const filterType = getFilterType(category.title);
                    const activeId = getActiveId(filterType);
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `${tabIndex === activeTabIndex ? 'block' : 'hidden'}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap px-4 gap-2 py-1",
                            children: category.items.map((item)=>{
                                const isActive = activeId === item.id;
                                const themeColorRgb = '9,161,228'; // rgba(253,79,29,1)的RGB部分
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: `px-3 py-1 text-xs rounded-full transition-colors duration-200 ${isActive ? `bg-neutral-300 font-bold text-[${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$appConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["THEME_COLOR"]}] dark:bg-neutral-700 dark:text-[rgba(${themeColorRgb},0.9)]` : 'bg-neutral-200 text-neutral-600 dark:bg-neutral-800 dark:text-gray-400'}`,
                                    onClick: ()=>handleCategoryChange(item.id, filterType),
                                    children: item.name
                                }, item.id, false, {
                                    fileName: "[project]/src/app/components/videos/CategoryTabs.tsx",
                                    lineNumber: 487,
                                    columnNumber: 21
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/videos/CategoryTabs.tsx",
                            lineNumber: 482,
                            columnNumber: 15
                        }, this)
                    }, category.title, false, {
                        fileName: "[project]/src/app/components/videos/CategoryTabs.tsx",
                        lineNumber: 478,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/app/components/videos/CategoryTabs.tsx",
                lineNumber: 471,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/videos/CategoryTabs.tsx",
        lineNumber: 447,
        columnNumber: 5
    }, this);
}
_s(CategoryTabs, "SHObwul4CCzhVOGvdIK8CEi7CBw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$useAppStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$swipeable$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSwipeable"]
    ];
});
_c = CategoryTabs;
var _c;
__turbopack_context__.k.register(_c, "CategoryTabs");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/components/videos/VideoCard.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/md/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$useAppStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/store/useAppStore.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function VideoCard({ video, tabType, showDownloadTip, translations, isFirstPage = false }) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { addPlayHistory } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$useAppStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    const [imageError, setImageError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // 处理视频点击事件
    const handleClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "VideoCard.useCallback[handleClick]": ()=>{
            // 如果是短剧，显示下载提示
            if (tabType === 'short-drama') {
                showDownloadTip?.();
                return;
            }
            // 添加到播放历史
            const historyItem = {
                id: video.id,
                title: video.title,
                poster: video.cover,
                category: video.category,
                year: video.year,
                region: video.region
            };
            addPlayHistory(historyItem);
            // 导航到详情页面
            router.push(`/detail/${video.id}`);
        }
    }["VideoCard.useCallback[handleClick]"], [
        video,
        tabType,
        showDownloadTip,
        router,
        addPlayHistory
    ]);
    // 加载失败时的占位图
    const onImageError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "VideoCard.useCallback[onImageError]": ()=>{
            setImageError(true);
        }
    }["VideoCard.useCallback[onImageError]"], []);
    const noImageText = translations.general_no_image || '无图片';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "video-card relative w-full pb-2 cursor-pointer",
        onClick: handleClick,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "poster-wrapper relative aspect-[2/3] overflow-hidden rounded-lg mb-2 bg-gray-200 dark:bg-neutral-800",
                children: [
                    !imageError ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: video.cover,
                        alt: video.title,
                        fill: true,
                        sizes: "(max-width: 768px) 33vw, 20vw",
                        className: "object-cover transition-transform duration-300 hover:scale-110",
                        onError: onImageError,
                        priority: isFirstPage,
                        unoptimized: tabType === 'short-drama'
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/videos/VideoCard.tsx",
                        lineNumber: 61,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full h-full flex items-center justify-center bg-gray-300 dark:bg-gray-700",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-gray-500 dark:text-gray-400 text-sm",
                            children: noImageText
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/videos/VideoCard.tsx",
                            lineNumber: 73,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/videos/VideoCard.tsx",
                        lineNumber: 72,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "play-overlay absolute inset-0 flex items-center justify-center opacity-0 bg-black bg-opacity-40 transition-opacity duration-300 hover:opacity-100",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MdPlayCircleOutline"], {
                            className: "text-white text-5xl"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/videos/VideoCard.tsx",
                            lineNumber: 79,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/videos/VideoCard.tsx",
                        lineNumber: 78,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/videos/VideoCard.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-sm font-medium truncate text-center",
                children: video.title
            }, void 0, false, {
                fileName: "[project]/src/app/components/videos/VideoCard.tsx",
                lineNumber: 84,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/videos/VideoCard.tsx",
        lineNumber: 55,
        columnNumber: 5
    }, this);
}
_s(VideoCard, "zQ3ag/iquZCsxjDxuER00FZvV+I=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$useAppStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ];
});
_c = VideoCard;
const __TURBOPACK__default__export__ = /*#__PURE__*/ _c1 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].memo(VideoCard, (prevProps, nextProps)=>{
    return prevProps.video.id === nextProps.video.id && prevProps.tabType === nextProps.tabType && prevProps.isFirstPage === nextProps.isFirstPage && prevProps.translations.general_no_image === nextProps.translations.general_no_image;
});
var _c, _c1;
__turbopack_context__.k.register(_c, "VideoCard");
__turbopack_context__.k.register(_c1, "%default%");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/components/common/DownloadAppModal.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>DownloadAppModal)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/io5/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$appConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/appConfig.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
function DownloadAppModal({ isOpen, onClose, translations, appLink, videoTitle = '', modalType = 'default' }) {
    _s();
    // 平台状态
    const [platform, setPlatform] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('unknown');
    const [downloadUrl, setDownloadUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$appConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DOWNLOAD_LINK"]);
    // 检测用户平台
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DownloadAppModal.useEffect": ()=>{
            const detectPlatform = {
                "DownloadAppModal.useEffect.detectPlatform": ()=>{
                    const userAgent = navigator.userAgent || navigator.vendor || window.opera || '';
                    // iOS设备检测
                    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
                        return 'ios';
                    }
                    // Android设备检测
                    if (/android/i.test(userAgent)) {
                        return 'android';
                    }
                    return 'unknown';
                }
            }["DownloadAppModal.useEffect.detectPlatform"];
            const detectedPlatform = detectPlatform();
            setPlatform(detectedPlatform);
            // 根据平台设置下载链接
            if (detectedPlatform === 'ios') {
                setDownloadUrl(appLink || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$appConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IOS_DOWNLOAD_LINK"]);
            } else if (detectedPlatform === 'android') {
                setDownloadUrl(appLink || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$appConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ANDROID_DOWNLOAD_LINK"]);
            } else {
                setDownloadUrl(appLink || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$appConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DOWNLOAD_LINK"]);
            }
        }
    }["DownloadAppModal.useEffect"], [
        appLink
    ]);
    if (!isOpen) return null;
    // 根据modalType选择翻译键
    let titleKey = 'download_app_title';
    let descKey = 'download_app_desc';
    if (modalType === 'short') {
        titleKey = 'download_app_short_title';
        descKey = 'download_app_short_desc';
    } else if (modalType === 'detail') {
        titleKey = 'download_app_detail_title';
        descKey = 'download_app_detail_desc';
    }
    // 从i18n获取文本，如果没有则使用自定义文本
    const title = translations[titleKey] || translations.downloadTitle || '下载APP观看完整内容';
    let desc = translations[descKey] || translations.downloadDesc || '安装APP即可观看全部高清视频，无广告，支持离线缓存';
    // 如果有视频标题，添加到描述中
    if (videoTitle && modalType === 'detail') {
        desc = desc.replace('{title}', videoTitle);
    }
    const downloadBtn = translations.download_app_btn || translations.downloadBtn || '立即下载';
    const cancelBtn = translations.download_app_cancel || translations.cancelBtn || '取消';
    const handleDownload = ()=>{
        window.open(downloadUrl, '_blank');
    };
    // 获取平台图标
    const getPlatformIcon = ()=>{
        if (platform === 'ios') {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaApple"], {
                className: "text-lg mr-2"
            }, void 0, false, {
                fileName: "[project]/src/app/components/common/DownloadAppModal.tsx",
                lineNumber: 111,
                columnNumber: 14
            }, this);
        } else if (platform === 'android') {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaAndroid"], {
                className: "text-lg mr-2"
            }, void 0, false, {
                fileName: "[project]/src/app/components/common/DownloadAppModal.tsx",
                lineNumber: 113,
                columnNumber: 14
            }, this);
        } else {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaDownload"], {
                className: "text-lg mr-2"
            }, void 0, false, {
                fileName: "[project]/src/app/components/common/DownloadAppModal.tsx",
                lineNumber: 115,
                columnNumber: 14
            }, this);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-black bg-opacity-70",
                onClick: onClose
            }, void 0, false, {
                fileName: "[project]/src/app/components/common/DownloadAppModal.tsx",
                lineNumber: 122,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-[90%] max-w-[300px] bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onClose,
                        className: "absolute top-3 right-3 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IoCloseCircleOutline"], {
                            className: "text-2xl"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/common/DownloadAppModal.tsx",
                            lineNumber: 134,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/common/DownloadAppModal.tsx",
                        lineNumber: 130,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-lg font-bold text-center mb-4",
                                children: title
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/common/DownloadAppModal.tsx",
                                lineNumber: 139,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-center mb-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center",
                                    children: platform === 'ios' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaApple"], {
                                        className: "text-3xl text-blue-500"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/common/DownloadAppModal.tsx",
                                        lineNumber: 144,
                                        columnNumber: 17
                                    }, this) : platform === 'android' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaAndroid"], {
                                        className: "text-3xl text-blue-500"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/common/DownloadAppModal.tsx",
                                        lineNumber: 146,
                                        columnNumber: 17
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaDownload"], {
                                        className: "text-2xl text-blue-500"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/common/DownloadAppModal.tsx",
                                        lineNumber: 148,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/common/DownloadAppModal.tsx",
                                    lineNumber: 142,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/common/DownloadAppModal.tsx",
                                lineNumber: 141,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-gray-600 dark:text-gray-300 text-center mb-6",
                                children: desc
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/common/DownloadAppModal.tsx",
                                lineNumber: 153,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleDownload,
                                        className: "w-full py-2.5 bg-[rgb(9,161,228)] text-white rounded-full font-medium flex items-center justify-center",
                                        children: [
                                            getPlatformIcon(),
                                            downloadBtn
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/common/DownloadAppModal.tsx",
                                        lineNumber: 158,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: onClose,
                                        className: "w-full py-2.5 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-full font-medium",
                                        children: cancelBtn
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/common/DownloadAppModal.tsx",
                                        lineNumber: 166,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/common/DownloadAppModal.tsx",
                                lineNumber: 157,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/common/DownloadAppModal.tsx",
                        lineNumber: 138,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/common/DownloadAppModal.tsx",
                lineNumber: 128,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/common/DownloadAppModal.tsx",
        lineNumber: 120,
        columnNumber: 5
    }, this);
}
_s(DownloadAppModal, "PvOM+L5DzC03Yurv3ZbwbDTqGnQ=");
_c = DownloadAppModal;
var _c;
__turbopack_context__.k.register(_c, "DownloadAppModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/components/videos/VideoList.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/md/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$videos$2f$VideoCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/videos/VideoCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$appConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/appConfig.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$common$2f$DownloadAppModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/common/DownloadAppModal.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function VideoList({ videos = [], loadMore, isLoading = false, isLoadingMore = false, isEmpty = false, hasError = false, hasMore = true, tabType, emptyMessage = '没有找到相关视频', translations, currentPage = 0, itemsPerPage = 24 }) {
    _s();
    const [showDownloadModal, setShowDownloadModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const observerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const loadingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const prevVideosLengthRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(videos.length);
    const listRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // 确保translations包含所有必需的翻译键
    const enhancedTranslations = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "VideoList.useMemo[enhancedTranslations]": ()=>({
                ...translations,
                general_no_image: translations.general_no_image || '无图片',
                general_loading: translations.general_loading || '加载中...',
                general_net_fault: translations.general_net_fault || '网络错误',
                general_retry: translations.general_retry || '重试'
            })
    }["VideoList.useMemo[enhancedTranslations]"], [
        translations
    ]);
    // 设置无限滚动
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "VideoList.useEffect": ()=>{
            if (!loadingRef.current) return;
            observerRef.current = new IntersectionObserver({
                "VideoList.useEffect": (entries)=>{
                    if (entries[0].isIntersecting && !isLoading && !isLoadingMore && hasMore) {
                        loadMore();
                    }
                }
            }["VideoList.useEffect"], {
                threshold: 0.1
            });
            observerRef.current.observe(loadingRef.current);
            return ({
                "VideoList.useEffect": ()=>{
                    if (observerRef.current) {
                        observerRef.current.disconnect();
                    }
                }
            })["VideoList.useEffect"];
        }
    }["VideoList.useEffect"], [
        isLoading,
        isLoadingMore,
        hasMore,
        loadMore
    ]);
    // 展示App下载提示
    const showDownloadTip = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "VideoList.useCallback[showDownloadTip]": ()=>{
            setShowDownloadModal(true);
        }
    }["VideoList.useCallback[showDownloadTip]"], []);
    // 关闭下载提示
    const handleCloseDownloadModal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "VideoList.useCallback[handleCloseDownloadModal]": ()=>{
            setShowDownloadModal(false);
        }
    }["VideoList.useCallback[handleCloseDownloadModal]"], []);
    // 重试加载
    const handleRetry = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "VideoList.useCallback[handleRetry]": ()=>{
            loadMore();
        }
    }["VideoList.useCallback[handleRetry]"], [
        loadMore
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "video-list p-4",
        ref: listRef,
        children: [
            isEmpty && !isLoading && !hasError ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "empty-state flex flex-col items-center justify-center py-12",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-500 dark:text-gray-400",
                    children: emptyMessage
                }, void 0, false, {
                    fileName: "[project]/src/app/components/videos/VideoList.tsx",
                    lineNumber: 104,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/videos/VideoList.tsx",
                lineNumber: 103,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-3 gap-4",
                children: videos.map((video, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$videos$2f$VideoCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        video: video,
                        tabType: tabType,
                        showDownloadTip: showDownloadTip,
                        translations: enhancedTranslations,
                        isFirstPage: currentPage === 0 && index < itemsPerPage
                    }, `${video.id}-${index}`, false, {
                        fileName: "[project]/src/app/components/videos/VideoList.tsx",
                        lineNumber: 109,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/components/videos/VideoList.tsx",
                lineNumber: 107,
                columnNumber: 9
            }, this),
            (isLoading || isLoadingMore) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "loading flex justify-center items-center p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `animate-spin rounded-full h-6 w-6 border-b-2 border-[${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$appConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["THEME_COLOR"]}]`
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/videos/VideoList.tsx",
                        lineNumber: 124,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "ml-2 text-gray-600 dark:text-gray-400",
                        children: enhancedTranslations.general_loading
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/videos/VideoList.tsx",
                        lineNumber: 125,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/videos/VideoList.tsx",
                lineNumber: 123,
                columnNumber: 9
            }, this),
            hasError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "error-state flex flex-col items-center justify-center py-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-red-500 dark:text-red-400 mb-2",
                        children: enhancedTranslations.general_net_fault
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/videos/VideoList.tsx",
                        lineNumber: 132,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: `flex items-center px-4 py-2 bg-[${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$appConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["THEME_COLOR"]}] text-white rounded-full`,
                        onClick: handleRetry,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MdRefresh"], {
                                className: "mr-1"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/videos/VideoList.tsx",
                                lineNumber: 137,
                                columnNumber: 13
                            }, this),
                            enhancedTranslations.general_retry
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/videos/VideoList.tsx",
                        lineNumber: 133,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/videos/VideoList.tsx",
                lineNumber: 131,
                columnNumber: 9
            }, this),
            hasMore && !hasError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: loadingRef,
                className: "h-4 w-full"
            }, void 0, false, {
                fileName: "[project]/src/app/components/videos/VideoList.tsx",
                lineNumber: 145,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$common$2f$DownloadAppModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                isOpen: showDownloadModal,
                onClose: handleCloseDownloadModal,
                translations: translations,
                modalType: tabType === 'short-drama' ? 'short' : 'default'
            }, void 0, false, {
                fileName: "[project]/src/app/components/videos/VideoList.tsx",
                lineNumber: 149,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/videos/VideoList.tsx",
        lineNumber: 100,
        columnNumber: 5
    }, this);
}
_s(VideoList, "CrVwR7LiK+izOEYFW8xgwqJFc0w=");
_c = VideoList;
const __TURBOPACK__default__export__ = /*#__PURE__*/ _c1 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].memo(VideoList);
var _c, _c1;
__turbopack_context__.k.register(_c, "VideoList");
__turbopack_context__.k.register(_c1, "%default%");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/components/videos/ClientVideoList.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/md/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$useAppStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/store/useAppStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$hooks$2f$useVideoList$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/hooks/useVideoList.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$videos$2f$CategoryTabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/videos/CategoryTabs.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$videos$2f$VideoList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/videos/VideoList.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
function ClientVideoList({ tabType, title, categories, translations, initialData }) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { setCurrentTab, filter, settings } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$useAppStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    // 使用 useMemo 缓存筛选条件，避免不必要的状态更新
    const filters = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ClientVideoList.useMemo[filters]": ()=>({
                type: filter.type || 'all',
                region: filter.region || 'all',
                year: filter.year || 'all'
            })
    }["ClientVideoList.useMemo[filters]"], [
        filter.type,
        filter.region,
        filter.year
    ]);
    // 使用 useMemo 缓存 hook 参数对象，避免对象引用变化
    const videoListParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ClientVideoList.useMemo[videoListParams]": ()=>({
                tabType,
                filters,
                initialData,
                locale: settings.language
            })
    }["ClientVideoList.useMemo[videoListParams]"], [
        tabType,
        filters,
        initialData,
        settings.language
    ]);
    // 使用缓存的参数调用 hook
    const { videos, hasMore, isLoading, isLoadingMore, isEmpty, error, loadMore, handleFilterChange, currentPage } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$hooks$2f$useVideoList$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useVideoList"])(videoListParams);
    // console.log('useVideoList');
    // 缓存搜索点击处理函数
    const handleSearchClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ClientVideoList.useCallback[handleSearchClick]": ()=>{
            router.push('/search');
        }
    }["ClientVideoList.useCallback[handleSearchClick]"], [
        router
    ]);
    // 缓存本地化标题获取函数
    const getLocalizedTitle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ClientVideoList.useCallback[getLocalizedTitle]": ()=>{
            switch(tabType){
                case 'movie':
                    return translations.artTypeFilm;
                case 'tv':
                    return translations.artTypeTeleplay;
                case 'anime':
                    return translations.artTypeEntertainment;
                case 'short-drama':
                    return translations.artTypeVariety;
                default:
                    return title;
            }
        }
    }["ClientVideoList.useCallback[getLocalizedTitle]"], [
        tabType,
        translations,
        title
    ]);
    // 使用 useMemo 缓存 VideoList 组件的 props
    const videoListProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ClientVideoList.useMemo[videoListProps]": ()=>({
                videos,
                loadMore,
                isLoading,
                isLoadingMore,
                isEmpty,
                hasError: !!error,
                hasMore,
                tabType,
                emptyMessage: translations.main_noData,
                translations,
                currentPage: currentPage || 0
            })
    }["ClientVideoList.useMemo[videoListProps]"], [
        videos,
        loadMore,
        isLoading,
        isLoadingMore,
        isEmpty,
        error,
        hasMore,
        tabType,
        translations,
        currentPage
    ]);
    // 缓存 CategoryTabs 组件的 props
    const categoryTabsProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ClientVideoList.useMemo[categoryTabsProps]": ()=>({
                categories,
                tabType,
                translations
            })
    }["ClientVideoList.useMemo[categoryTabsProps]"], [
        categories,
        tabType,
        translations
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "video-list-page",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "sticky top-0 z-10 bg-white dark:bg-neutral-900 shadow-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between p-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-xl font-bold",
                                children: getLocalizedTitle()
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/videos/ClientVideoList.tsx",
                                lineNumber: 119,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "p-2 rounded-full bg-neutral-100 dark:bg-neutral-800",
                                onClick: handleSearchClick,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MdOutlineSearch"], {
                                    size: 20
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/videos/ClientVideoList.tsx",
                                    lineNumber: 124,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/videos/ClientVideoList.tsx",
                                lineNumber: 120,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/videos/ClientVideoList.tsx",
                        lineNumber: 118,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$videos$2f$CategoryTabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        ...categoryTabsProps
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/videos/ClientVideoList.tsx",
                        lineNumber: 129,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/videos/ClientVideoList.tsx",
                lineNumber: 117,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$videos$2f$VideoList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                ...videoListProps
            }, void 0, false, {
                fileName: "[project]/src/app/components/videos/ClientVideoList.tsx",
                lineNumber: 133,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/videos/ClientVideoList.tsx",
        lineNumber: 115,
        columnNumber: 5
    }, this);
}
_s(ClientVideoList, "sf9pkDE2zejkIuduYoyvewy2le8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$useAppStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$hooks$2f$useVideoList$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useVideoList"]
    ];
});
_c = ClientVideoList;
const __TURBOPACK__default__export__ = /*#__PURE__*/ _c1 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].memo(ClientVideoList);
var _c, _c1;
__turbopack_context__.k.register(_c, "ClientVideoList");
__turbopack_context__.k.register(_c1, "%default%");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_4d6e4297._.js.map