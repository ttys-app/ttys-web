(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/app/detail/[id]/components/RecommendVideos.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>RecommendVideos)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function RecommendVideos({ videos, translations }) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    // 处理点击事件
    const handleVideoClick = (id)=>{
        router.push(`/detail/${id}`);
    };
    // 如果没有推荐视频
    if (!videos || videos.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-gray-500 text-center py-4",
            children: translations.noData
        }, void 0, false, {
            fileName: "[project]/src/app/detail/[id]/components/RecommendVideos.tsx",
            lineNumber: 34,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid grid-cols-3 gap-3",
        children: videos.map((video)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "video-card cursor-pointer",
                onClick: ()=>handleVideoClick(video.id),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative aspect-[2/3] overflow-hidden rounded-lg mb-2 bg-gray-200 dark:bg-neutral-800",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: video.cover,
                            alt: video.title,
                            fill: true,
                            sizes: "(max-width: 768px) 33vw, 20vw",
                            className: "object-cover",
                            onError: (e)=>{
                                // 处理图片加载错误
                                e.target.style.display = 'none';
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/app/detail/[id]/components/RecommendVideos.tsx",
                            lineNumber: 46,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/detail/[id]/components/RecommendVideos.tsx",
                        lineNumber: 45,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                        className: "text-sm truncate",
                        children: video.title
                    }, void 0, false, {
                        fileName: "[project]/src/app/detail/[id]/components/RecommendVideos.tsx",
                        lineNumber: 58,
                        columnNumber: 11
                    }, this),
                    video.score ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-xs text-yellow-600 dark:text-yellow-400",
                        children: [
                            "⭐ ",
                            video.score
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/detail/[id]/components/RecommendVideos.tsx",
                        lineNumber: 60,
                        columnNumber: 13
                    }, this) : null
                ]
            }, video.id, true, {
                fileName: "[project]/src/app/detail/[id]/components/RecommendVideos.tsx",
                lineNumber: 40,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/app/detail/[id]/components/RecommendVideos.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
_s(RecommendVideos, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = RecommendVideos;
var _c;
__turbopack_context__.k.register(_c, "RecommendVideos");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
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
"[project]/src/app/detail/[id]/components/VideoDetailContainer.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>VideoDetailContainer)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/md/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$detail$2f5b$id$5d2f$components$2f$RecommendVideos$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/detail/[id]/components/RecommendVideos.tsx [app-client] (ecmascript)");
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
;
;
;
function VideoDetailContainer({ videoDetail, recommendVideos, error, translations }) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [isPlaying, setIsPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showDownloadModal, setShowDownloadModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // 处理返回事件
    const handleGoBack = ()=>{
        router.back();
    };
    // 处理播放事件
    const handlePlay = ()=>{
        // 显示下载APP弹框，而不是直接播放视频
        setShowDownloadModal(true);
    };
    // 处理播放结束或关闭
    const handleClosePlayer = ()=>{
        setIsPlaying(false);
    };
    // 关闭下载APP弹框
    const handleCloseDownloadModal = ()=>{
        setShowDownloadModal(false);
    };
    // 如果有错误，显示错误信息
    if (error) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-center justify-center min-h-[50vh] px-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-red-500 mb-4",
                    children: [
                        translations.errorLoadingVideo,
                        ": ",
                        error
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/detail/[id]/components/VideoDetailContainer.tsx",
                    lineNumber: 95,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/",
                    className: `text-[${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$appConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["THEME_COLOR"]}]`,
                    children: translations.backToHome
                }, void 0, false, {
                    fileName: "[project]/src/app/detail/[id]/components/VideoDetailContainer.tsx",
                    lineNumber: 96,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/detail/[id]/components/VideoDetailContainer.tsx",
            lineNumber: 94,
            columnNumber: 7
        }, this);
    }
    // 如果数据为空，显示加载中
    if (!videoDetail) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center min-h-[50vh]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: [
                    translations.loadingText,
                    "..."
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/detail/[id]/components/VideoDetailContainer.tsx",
                lineNumber: 107,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/detail/[id]/components/VideoDetailContainer.tsx",
            lineNumber: 106,
            columnNumber: 7
        }, this);
    }
    // 是否有播放源
    const hasVideoUrl = !!videoDetail.videoUrl;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "video-detail-container pb-16",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-center my-4 w-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative w-5/6 max-w-[200px] min-w-[120px] aspect-[3/4] bg-gray-200 rounded-lg shadow-md overflow-hidden",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full h-full relative",
                        children: [
                            videoDetail.cover && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: videoDetail.cover,
                                alt: videoDetail.title,
                                fill: true,
                                className: "object-cover",
                                sizes: "(max-width: 768px) 33vw, 200px",
                                priority: true
                            }, void 0, false, {
                                fileName: "[project]/src/app/detail/[id]/components/VideoDetailContainer.tsx",
                                lineNumber: 130,
                                columnNumber: 17
                            }, this),
                            hasVideoUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handlePlay,
                                className: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10",
                                "aria-label": translations.play,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MdPlayCircleFilled"], {
                                    className: "text-white text-5xl shadow-lg opacity-90 hover:opacity-100 hover:scale-110 transition-all"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/detail/[id]/components/VideoDetailContainer.tsx",
                                    lineNumber: 147,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/detail/[id]/components/VideoDetailContainer.tsx",
                                lineNumber: 142,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/detail/[id]/components/VideoDetailContainer.tsx",
                        lineNumber: 128,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/detail/[id]/components/VideoDetailContainer.tsx",
                    lineNumber: 120,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/detail/[id]/components/VideoDetailContainer.tsx",
                lineNumber: 119,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "video-info p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-xl font-bold mb-2",
                        children: videoDetail.title
                    }, void 0, false, {
                        fileName: "[project]/src/app/detail/[id]/components/VideoDetailContainer.tsx",
                        lineNumber: 157,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 mb-3 text-xs text-gray-600 dark:text-gray-400",
                        children: [
                            videoDetail.score && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-100 px-2 py-0.5 rounded",
                                children: [
                                    videoDetail.score,
                                    " ⭐"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/detail/[id]/components/VideoDetailContainer.tsx",
                                lineNumber: 162,
                                columnNumber: 13
                            }, this),
                            videoDetail.year && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: videoDetail.year
                            }, void 0, false, {
                                fileName: "[project]/src/app/detail/[id]/components/VideoDetailContainer.tsx",
                                lineNumber: 166,
                                columnNumber: 32
                            }, this),
                            videoDetail.category && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    "· ",
                                    translations.category
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/detail/[id]/components/VideoDetailContainer.tsx",
                                lineNumber: 167,
                                columnNumber: 36
                            }, this),
                            videoDetail.region && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    "· ",
                                    translations.region
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/detail/[id]/components/VideoDetailContainer.tsx",
                                lineNumber: 168,
                                columnNumber: 34
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/detail/[id]/components/VideoDetailContainer.tsx",
                        lineNumber: 160,
                        columnNumber: 9
                    }, this),
                    videoDetail.director && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-2 text-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-medium",
                                children: [
                                    translations.director,
                                    ": "
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/detail/[id]/components/VideoDetailContainer.tsx",
                                lineNumber: 174,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-gray-700 dark:text-gray-300",
                                children: videoDetail.director
                            }, void 0, false, {
                                fileName: "[project]/src/app/detail/[id]/components/VideoDetailContainer.tsx",
                                lineNumber: 175,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/detail/[id]/components/VideoDetailContainer.tsx",
                        lineNumber: 173,
                        columnNumber: 11
                    }, this),
                    videoDetail.actor && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-3 text-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-medium",
                                children: [
                                    translations.actor,
                                    ": "
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/detail/[id]/components/VideoDetailContainer.tsx",
                                lineNumber: 181,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-gray-700 dark:text-gray-300",
                                children: videoDetail.actor
                            }, void 0, false, {
                                fileName: "[project]/src/app/detail/[id]/components/VideoDetailContainer.tsx",
                                lineNumber: 182,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/detail/[id]/components/VideoDetailContainer.tsx",
                        lineNumber: 180,
                        columnNumber: 11
                    }, this),
                    videoDetail.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4 mb-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-gray-700 dark:text-gray-300 leading-relaxed",
                            children: videoDetail.description
                        }, void 0, false, {
                            fileName: "[project]/src/app/detail/[id]/components/VideoDetailContainer.tsx",
                            lineNumber: 189,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/detail/[id]/components/VideoDetailContainer.tsx",
                        lineNumber: 188,
                        columnNumber: 11
                    }, this),
                    hasVideoUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handlePlay,
                        className: "w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center justify-center gap-2 mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MdPlayCircleFilled"], {
                                className: "text-xl"
                            }, void 0, false, {
                                fileName: "[project]/src/app/detail/[id]/components/VideoDetailContainer.tsx",
                                lineNumber: 201,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: translations.play
                            }, void 0, false, {
                                fileName: "[project]/src/app/detail/[id]/components/VideoDetailContainer.tsx",
                                lineNumber: 202,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/detail/[id]/components/VideoDetailContainer.tsx",
                        lineNumber: 197,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/detail/[id]/components/VideoDetailContainer.tsx",
                lineNumber: 156,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "recommend-videos px-4 mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-lg font-medium mb-3",
                        children: translations.recommendations
                    }, void 0, false, {
                        fileName: "[project]/src/app/detail/[id]/components/VideoDetailContainer.tsx",
                        lineNumber: 209,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$detail$2f5b$id$5d2f$components$2f$RecommendVideos$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        videos: recommendVideos,
                        translations: translations
                    }, void 0, false, {
                        fileName: "[project]/src/app/detail/[id]/components/VideoDetailContainer.tsx",
                        lineNumber: 210,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/detail/[id]/components/VideoDetailContainer.tsx",
                lineNumber: 208,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$common$2f$DownloadAppModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                isOpen: showDownloadModal,
                onClose: handleCloseDownloadModal,
                translations: translations,
                videoTitle: videoDetail.title,
                modalType: "detail"
            }, void 0, false, {
                fileName: "[project]/src/app/detail/[id]/components/VideoDetailContainer.tsx",
                lineNumber: 214,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/detail/[id]/components/VideoDetailContainer.tsx",
        lineNumber: 116,
        columnNumber: 5
    }, this);
}
_s(VideoDetailContainer, "jo0KDyoMq4kAEomDSpSgLw78eT8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = VideoDetailContainer;
var _c;
__turbopack_context__.k.register(_c, "VideoDetailContainer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_038a7107._.js.map