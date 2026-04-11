(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/GraphicDesining.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "btnIcon": "GraphicDesining-module__FKXs4G__btnIcon",
  "btnLabel": "GraphicDesining-module__FKXs4G__btnLabel",
  "buttonWhiteSweep": "GraphicDesining-module__FKXs4G__buttonWhiteSweep",
  "enrollButton": "GraphicDesining-module__FKXs4G__enrollButton",
  "section": "GraphicDesining-module__FKXs4G__section",
  "video": "GraphicDesining-module__FKXs4G__video",
  "videoFrame": "GraphicDesining-module__FKXs4G__videoFrame",
});
}),
"[project]/src/hooks/useMediaQuery.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useMediaQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function subscribeToMediaQuery(query, onStoreChange) {
    const mediaQuery = window.matchMedia(query);
    mediaQuery.addEventListener("change", onStoreChange);
    return ()=>mediaQuery.removeEventListener("change", onStoreChange);
}
function getMediaQuerySnapshot(query) {
    return window.matchMedia(query).matches;
}
function useMediaQuery(query) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(4);
    if ($[0] !== "fb1095fa695d7fbdbb78987c6a34449b6b46ee74528ee4315db7d75c0ceffa25") {
        for(let $i = 0; $i < 4; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "fb1095fa695d7fbdbb78987c6a34449b6b46ee74528ee4315db7d75c0ceffa25";
    }
    let t0;
    let t1;
    if ($[1] !== query) {
        t0 = ({
            "useMediaQuery[useSyncExternalStore(arg0)]": (onStoreChange)=>subscribeToMediaQuery(query, onStoreChange)
        })["useMediaQuery[useSyncExternalStore(arg0)]"];
        t1 = ({
            "useMediaQuery[useSyncExternalStore(arg1)]": ()=>getMediaQuerySnapshot(query)
        })["useMediaQuery[useSyncExternalStore(arg1)]"];
        $[1] = query;
        $[2] = t0;
        $[3] = t1;
    } else {
        t0 = $[2];
        t1 = $[3];
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"])(t0, t1, _useMediaQueryUseSyncExternalStoreArg);
}
_s(useMediaQuery, "FpwL93IKMLJZuQQXefVtWynbBPQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"]
    ];
});
function _useMediaQueryUseSyncExternalStoreArg() {
    return false;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/GraphicDesining.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GraphicDesining$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/GraphicDesining.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useMediaQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useMediaQuery.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function GraphicDesining() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(15);
    if ($[0] !== "8492e8e8a9aae7ffc2113c85590c118d6ce3510bec6263f047d14682b3bd5667") {
        for(let $i = 0; $i < 15; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "8492e8e8a9aae7ffc2113c85590c118d6ce3510bec6263f047d14682b3bd5667";
    }
    const isMobileViewport = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useMediaQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("(max-width: 540px)");
    let t0;
    if ($[1] !== isMobileViewport) {
        t0 = isMobileViewport ? {
            webm: "/video/graphicdesignphone.webm",
            mp4: "/video/graphic%20design%20phone.mp4"
        } : {
            webm: "/video/graphic%20design.webm",
            mp4: "/video/graphic%20design_1.mp4"
        };
        $[1] = isMobileViewport;
        $[2] = t0;
    } else {
        t0 = $[2];
    }
    const videoSources = t0;
    const t1 = `${videoSources.webm}-${videoSources.mp4}`;
    let t2;
    if ($[3] !== videoSources.webm) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
            src: videoSources.webm,
            type: "video/webm"
        }, void 0, false, {
            fileName: "[project]/src/components/GraphicDesining.jsx",
            lineNumber: 34,
            columnNumber: 10
        }, this);
        $[3] = videoSources.webm;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] !== videoSources.mp4) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
            src: videoSources.mp4,
            type: "video/mp4"
        }, void 0, false, {
            fileName: "[project]/src/components/GraphicDesining.jsx",
            lineNumber: 42,
            columnNumber: 10
        }, this);
        $[5] = videoSources.mp4;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    let t4;
    if ($[7] !== t1 || $[8] !== t2 || $[9] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GraphicDesining$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].video,
            autoPlay: true,
            muted: true,
            loop: true,
            playsInline: true,
            preload: "metadata",
            children: [
                t2,
                t3,
                "Your browser does not support the video tag."
            ]
        }, t1, true, {
            fileName: "[project]/src/components/GraphicDesining.jsx",
            lineNumber: 50,
            columnNumber: 10
        }, this);
        $[7] = t1;
        $[8] = t2;
        $[9] = t3;
        $[10] = t4;
    } else {
        t4 = $[10];
    }
    let t5;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GraphicDesining$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].btnLabel,
            children: "ENROLL NOW"
        }, void 0, false, {
            fileName: "[project]/src/components/GraphicDesining.jsx",
            lineNumber: 60,
            columnNumber: 10
        }, this);
        $[11] = t5;
    } else {
        t5 = $[11];
    }
    let t6;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: "#inquiry",
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GraphicDesining$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].enrollButton,
            children: [
                t5,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GraphicDesining$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].btnIcon,
                    "aria-hidden": "true",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                        opacity: "1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: "10.2004",
                                cy: "7.1999",
                                r: "1.8",
                                fill: "currentColor"
                            }, void 0, false, {
                                fileName: "[project]/src/components/GraphicDesining.jsx",
                                lineNumber: 67,
                                columnNumber: 224
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: "10.2004",
                                cy: "16.8",
                                r: "1.8",
                                fill: "currentColor"
                            }, void 0, false, {
                                fileName: "[project]/src/components/GraphicDesining.jsx",
                                lineNumber: 67,
                                columnNumber: 287
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: "14.9992",
                                cy: "12.0002",
                                r: "1.8",
                                fill: "currentColor"
                            }, void 0, false, {
                                fileName: "[project]/src/components/GraphicDesining.jsx",
                                lineNumber: 67,
                                columnNumber: 348
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/GraphicDesining.jsx",
                        lineNumber: 67,
                        columnNumber: 209
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/GraphicDesining.jsx",
                    lineNumber: 67,
                    columnNumber: 68
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/GraphicDesining.jsx",
            lineNumber: 67,
            columnNumber: 10
        }, this);
        $[12] = t6;
    } else {
        t6 = $[12];
    }
    let t7;
    if ($[13] !== t4) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GraphicDesining$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].section,
            id: "courses",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GraphicDesining$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].videoFrame,
                children: [
                    t4,
                    t6
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/GraphicDesining.jsx",
                lineNumber: 74,
                columnNumber: 59
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/GraphicDesining.jsx",
            lineNumber: 74,
            columnNumber: 10
        }, this);
        $[13] = t4;
        $[14] = t7;
    } else {
        t7 = $[14];
    }
    return t7;
}
_s(GraphicDesining, "gAx/lkfAl3k1hqorY+Vg3OVyu0I=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useMediaQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ];
});
_c = GraphicDesining;
const __TURBOPACK__default__export__ = GraphicDesining;
var _c;
__turbopack_context__.k.register(_c, "GraphicDesining");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Header.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const navItems = [
    {
        href: "#home",
        label: "Home"
    },
    {
        href: "#courses",
        label: "Courses"
    },
    {
        href: "#reviews",
        label: "Reviews"
    },
    {
        href: "#inquiry",
        label: "Enroll"
    },
    {
        href: "#contact-us",
        label: "Contact Us"
    }
];
function scrambleLabel(label) {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return label.split("").map((char)=>{
        if (char === " ") {
            return " ";
        }
        return chars[Math.floor(Math.random() * chars.length)];
    }).join("");
}
function HoverText(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(19);
    if ($[0] !== "9960bd59cc37f8f02c9fe06ba1617394b30f611d2b822b7335a3700203e21069") {
        for(let $i = 0; $i < 19; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "9960bd59cc37f8f02c9fe06ba1617394b30f611d2b822b7335a3700203e21069";
    }
    const { label } = t0;
    const [displayLabel, setDisplayLabel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(label);
    const intervalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const timeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t1;
    let t2;
    if ($[1] !== label) {
        t1 = ({
            "HoverText[useEffect()]": ()=>{
                setDisplayLabel(label);
            }
        })["HoverText[useEffect()]"];
        t2 = [
            label
        ];
        $[1] = label;
        $[2] = t1;
        $[3] = t2;
    } else {
        t1 = $[2];
        t2 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    let t3;
    let t4;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = ({
            "HoverText[useEffect()]": ()=>()=>{
                    window.clearInterval(intervalRef.current);
                    window.clearTimeout(timeoutRef.current);
                }
        })["HoverText[useEffect()]"];
        t4 = [];
        $[4] = t3;
        $[5] = t4;
    } else {
        t3 = $[4];
        t4 = $[5];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t3, t4);
    let t5;
    if ($[6] !== label) {
        t5 = ({
            "HoverText[handleMouseEnter]": ()=>{
                window.clearInterval(intervalRef.current);
                window.clearTimeout(timeoutRef.current);
                intervalRef.current = window.setInterval({
                    "HoverText[handleMouseEnter > window.setInterval()]": ()=>{
                        setDisplayLabel(scrambleLabel(label));
                    }
                }["HoverText[handleMouseEnter > window.setInterval()]"], 90);
                timeoutRef.current = window.setTimeout({
                    "HoverText[handleMouseEnter > window.setTimeout()]": ()=>{
                        window.clearInterval(intervalRef.current);
                        intervalRef.current = null;
                        setDisplayLabel(label);
                    }
                }["HoverText[handleMouseEnter > window.setTimeout()]"], 1400);
            }
        })["HoverText[handleMouseEnter]"];
        $[6] = label;
        $[7] = t5;
    } else {
        t5 = $[7];
    }
    const handleMouseEnter = t5;
    let t6;
    if ($[8] !== label) {
        t6 = ({
            "HoverText[handleMouseLeave]": ()=>{
                window.clearInterval(intervalRef.current);
                window.clearTimeout(timeoutRef.current);
                intervalRef.current = null;
                setDisplayLabel(label);
            }
        })["HoverText[handleMouseLeave]"];
        $[8] = label;
        $[9] = t6;
    } else {
        t6 = $[9];
    }
    const handleMouseLeave = t6;
    let t7;
    if ($[10] !== displayLabel || $[11] !== label) {
        let t8;
        if ($[13] !== label) {
            t8 = ({
                "HoverText[(anonymous)()]": (char, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `hover-char${char === " " ? " is-space" : ""}`,
                        children: char === " " ? "\xA0" : char
                    }, `${label}-${index}`, false, {
                        fileName: "[project]/src/components/Header.jsx",
                        lineNumber: 128,
                        columnNumber: 54
                    }, this)
            })["HoverText[(anonymous)()]"];
            $[13] = label;
            $[14] = t8;
        } else {
            t8 = $[14];
        }
        t7 = displayLabel.split("").map(t8);
        $[10] = displayLabel;
        $[11] = label;
        $[12] = t7;
    } else {
        t7 = $[12];
    }
    let t8;
    if ($[15] !== handleMouseEnter || $[16] !== handleMouseLeave || $[17] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "hover-text",
            onMouseEnter: handleMouseEnter,
            onMouseLeave: handleMouseLeave,
            children: t7
        }, void 0, false, {
            fileName: "[project]/src/components/Header.jsx",
            lineNumber: 144,
            columnNumber: 10
        }, this);
        $[15] = handleMouseEnter;
        $[16] = handleMouseLeave;
        $[17] = t7;
        $[18] = t8;
    } else {
        t8 = $[18];
    }
    return t8;
}
_s(HoverText, "6mfVUfn5ZvATNvtgksI6tDkJ8GY=");
_c = HoverText;
function Header() {
    _s1();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(22);
    if ($[0] !== "9960bd59cc37f8f02c9fe06ba1617394b30f611d2b822b7335a3700203e21069") {
        for(let $i = 0; $i < 22; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "9960bd59cc37f8f02c9fe06ba1617394b30f611d2b822b7335a3700203e21069";
    }
    const [isMenuOpen, setIsMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "logo",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                className: "logoImage",
                src: "/ImazineUsAcademyLogo.png",
                alt: "Imazine Us",
                width: 192,
                height: 64,
                priority: true
            }, void 0, false, {
                fileName: "[project]/src/components/Header.jsx",
                lineNumber: 165,
                columnNumber: 32
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/Header.jsx",
            lineNumber: 165,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "btnLabel",
            children: "BOOK A CALL"
        }, void 0, false, {
            fileName: "[project]/src/components/Header.jsx",
            lineNumber: 172,
            columnNumber: 10
        }, this);
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: "btn headerButton",
            children: [
                t1,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    className: "btn-icon",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                        opacity: "1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: "10.2004",
                                cy: "7.1999",
                                r: "1.8",
                                fill: "currentColor"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Header.jsx",
                                lineNumber: 179,
                                columnNumber: 182
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: "10.2004",
                                cy: "16.8",
                                r: "1.8",
                                fill: "currentColor"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Header.jsx",
                                lineNumber: 179,
                                columnNumber: 245
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: "14.9992",
                                cy: "12.0002",
                                r: "1.8",
                                fill: "currentColor"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Header.jsx",
                                lineNumber: 179,
                                columnNumber: 306
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Header.jsx",
                        lineNumber: 179,
                        columnNumber: 167
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/Header.jsx",
                    lineNumber: 179,
                    columnNumber: 51
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Header.jsx",
            lineNumber: 179,
            columnNumber: 10
        }, this);
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    const t3 = `menuToggle${isMenuOpen ? " menuToggleOpen" : ""}`;
    let t4;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = ({
            "Header[<button>.onClick]": ()=>setIsMenuOpen(_HeaderButtonOnClickSetIsMenuOpen)
        })["Header[<button>.onClick]"];
        $[4] = t4;
    } else {
        t4 = $[4];
    }
    let t5;
    let t6;
    let t7;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
            fileName: "[project]/src/components/Header.jsx",
            lineNumber: 198,
            columnNumber: 10
        }, this);
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
            fileName: "[project]/src/components/Header.jsx",
            lineNumber: 199,
            columnNumber: 10
        }, this);
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
            fileName: "[project]/src/components/Header.jsx",
            lineNumber: 200,
            columnNumber: 10
        }, this);
        $[5] = t5;
        $[6] = t6;
        $[7] = t7;
    } else {
        t5 = $[5];
        t6 = $[6];
        t7 = $[7];
    }
    let t8;
    if ($[8] !== t3) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
            className: "navbar",
            children: [
                t0,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "right",
                    children: [
                        t2,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: t3,
                            onClick: t4,
                            type: "button",
                            children: [
                                t5,
                                t6,
                                t7
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Header.jsx",
                            lineNumber: 211,
                            columnNumber: 65
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Header.jsx",
                    lineNumber: 211,
                    columnNumber: 38
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Header.jsx",
            lineNumber: 211,
            columnNumber: 10
        }, this);
        $[8] = t3;
        $[9] = t8;
    } else {
        t8 = $[9];
    }
    const t9 = `menuBackdrop${isMenuOpen ? " menuBackdropOpen" : ""}`;
    let t10;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = ({
            "Header[<div>.onClick]": ()=>setIsMenuOpen(false)
        })["Header[<div>.onClick]"];
        $[10] = t10;
    } else {
        t10 = $[10];
    }
    let t11;
    if ($[11] !== t9) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t9,
            onClick: t10
        }, void 0, false, {
            fileName: "[project]/src/components/Header.jsx",
            lineNumber: 229,
            columnNumber: 11
        }, this);
        $[11] = t9;
        $[12] = t11;
    } else {
        t11 = $[12];
    }
    const t12 = `sideMenu${isMenuOpen ? " sideMenuOpen" : ""}`;
    let t13;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
            className: "sideMenuList",
            children: navItems.map({
                "Header[navItems.map()]": (item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: item.href,
                            onClick: {
                                "Header[navItems.map() > <Link>.onClick]": ()=>setIsMenuOpen(false)
                            }["Header[navItems.map() > <Link>.onClick]"],
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HoverText, {
                                label: item.label
                            }, void 0, false, {
                                fileName: "[project]/src/components/Header.jsx",
                                lineNumber: 241,
                                columnNumber: 57
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Header.jsx",
                            lineNumber: 239,
                            columnNumber: 63
                        }, this)
                    }, item.href, false, {
                        fileName: "[project]/src/components/Header.jsx",
                        lineNumber: 239,
                        columnNumber: 43
                    }, this)
            }["Header[navItems.map()]"])
        }, void 0, false, {
            fileName: "[project]/src/components/Header.jsx",
            lineNumber: 238,
            columnNumber: 11
        }, this);
        $[13] = t13;
    } else {
        t13 = $[13];
    }
    let t14;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "btnLabel",
            children: "BOOK A CALL"
        }, void 0, false, {
            fileName: "[project]/src/components/Header.jsx",
            lineNumber: 249,
            columnNumber: 11
        }, this);
        $[14] = t14;
    } else {
        t14 = $[14];
    }
    let t15;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: "btn mobileDrawerButton",
            children: [
                t14,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    className: "btn-icon",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                        opacity: "1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: "10.2004",
                                cy: "7.1999",
                                r: "1.8",
                                fill: "currentColor"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Header.jsx",
                                lineNumber: 256,
                                columnNumber: 190
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: "10.2004",
                                cy: "16.8",
                                r: "1.8",
                                fill: "currentColor"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Header.jsx",
                                lineNumber: 256,
                                columnNumber: 253
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: "14.9992",
                                cy: "12.0002",
                                r: "1.8",
                                fill: "currentColor"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Header.jsx",
                                lineNumber: 256,
                                columnNumber: 314
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Header.jsx",
                        lineNumber: 256,
                        columnNumber: 175
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/Header.jsx",
                    lineNumber: 256,
                    columnNumber: 59
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Header.jsx",
            lineNumber: 256,
            columnNumber: 11
        }, this);
        $[15] = t15;
    } else {
        t15 = $[15];
    }
    let t16;
    if ($[16] !== t12) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
            className: t12,
            children: [
                t13,
                t15
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Header.jsx",
            lineNumber: 263,
            columnNumber: 11
        }, this);
        $[16] = t12;
        $[17] = t16;
    } else {
        t16 = $[17];
    }
    let t17;
    if ($[18] !== t11 || $[19] !== t16 || $[20] !== t8) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                t8,
                t11,
                t16
            ]
        }, void 0, true);
        $[18] = t11;
        $[19] = t16;
        $[20] = t8;
        $[21] = t17;
    } else {
        t17 = $[21];
    }
    return t17;
}
_s1(Header, "vK10R+uCyHfZ4DZVnxbYkMWJB8g=");
_c1 = Header;
function _HeaderButtonOnClickSetIsMenuOpen(open) {
    return !open;
}
const __TURBOPACK__default__export__ = Header;
var _c, _c1;
__turbopack_context__.k.register(_c, "HoverText");
__turbopack_context__.k.register(_c1, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/InquiryForm.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "arrow": "InquiryForm-module__6h_dhq__arrow",
  "arrowUp": "InquiryForm-module__6h_dhq__arrowUp",
  "btnIcon": "InquiryForm-module__6h_dhq__btnIcon",
  "checkmarkCircle": "InquiryForm-module__6h_dhq__checkmarkCircle",
  "checkmarkContainer": "InquiryForm-module__6h_dhq__checkmarkContainer",
  "checkmarkKick": "InquiryForm-module__6h_dhq__checkmarkKick",
  "checkmarkScale": "InquiryForm-module__6h_dhq__checkmarkScale",
  "checkmarkStem": "InquiryForm-module__6h_dhq__checkmarkStem",
  "closeButton": "InquiryForm-module__6h_dhq__closeButton",
  "confettiCanvas": "InquiryForm-module__6h_dhq__confettiCanvas",
  "customSelect": "InquiryForm-module__6h_dhq__customSelect",
  "dropdownContainer": "InquiryForm-module__6h_dhq__dropdownContainer",
  "errorText": "InquiryForm-module__6h_dhq__errorText",
  "fadeIn": "InquiryForm-module__6h_dhq__fadeIn",
  "fadeInUp": "InquiryForm-module__6h_dhq__fadeInUp",
  "field": "InquiryForm-module__6h_dhq__field",
  "fieldActive": "InquiryForm-module__6h_dhq__fieldActive",
  "fieldError": "InquiryForm-module__6h_dhq__fieldError",
  "form": "InquiryForm-module__6h_dhq__form",
  "formHidden": "InquiryForm-module__6h_dhq__formHidden",
  "formIntro": "InquiryForm-module__6h_dhq__formIntro",
  "formPanel": "InquiryForm-module__6h_dhq__formPanel",
  "formSubtitle": "InquiryForm-module__6h_dhq__formSubtitle",
  "formTitle": "InquiryForm-module__6h_dhq__formTitle",
  "imageFrame": "InquiryForm-module__6h_dhq__imageFrame",
  "input": "InquiryForm-module__6h_dhq__input",
  "optionItem": "InquiryForm-module__6h_dhq__optionItem",
  "optionsList": "InquiryForm-module__6h_dhq__optionsList",
  "overlay": "InquiryForm-module__6h_dhq__overlay",
  "placeholder": "InquiryForm-module__6h_dhq__placeholder",
  "popupShow": "InquiryForm-module__6h_dhq__popupShow",
  "section": "InquiryForm-module__6h_dhq__section",
  "selectedText": "InquiryForm-module__6h_dhq__selectedText",
  "shell": "InquiryForm-module__6h_dhq__shell",
  "simpleFade": "InquiryForm-module__6h_dhq__simpleFade",
  "simpleFadeUp": "InquiryForm-module__6h_dhq__simpleFadeUp",
  "slideImage": "InquiryForm-module__6h_dhq__slideImage",
  "submitButton": "InquiryForm-module__6h_dhq__submitButton",
  "subtitle2": "InquiryForm-module__6h_dhq__subtitle2",
  "thankYouPopup": "InquiryForm-module__6h_dhq__thankYouPopup",
  "thankYouSubtext": "InquiryForm-module__6h_dhq__thankYouSubtext",
  "thankYouText": "InquiryForm-module__6h_dhq__thankYouText",
  "thankYouTitle": "InquiryForm-module__6h_dhq__thankYouTitle",
  "visualBrand": "InquiryForm-module__6h_dhq__visualBrand",
  "visualCopy": "InquiryForm-module__6h_dhq__visualCopy",
  "visualLines": "InquiryForm-module__6h_dhq__visualLines",
  "visualPanel": "InquiryForm-module__6h_dhq__visualPanel",
});
}),
"[project]/src/components/InquiryForm.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InquiryForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/InquiryForm.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const courseOptions = [
    "Graphic Designing",
    "Video Editing",
    "Digital Marketing",
    "Web Development",
    "Graphic Designing + Video Editing"
];
const WHATSAPP_NUMBER = "918882043435";
const slides = [
    {
        image: encodeURI("/inquryform/28480869_Tiny graphic designer drawing with big pen on computer screen.svg"),
        alt: "Graphic design inquiry visual",
        text: "Designing today, to define\ntomorrow"
    },
    {
        image: "/inquryform/4137653_2168227.svg",
        alt: "Creative course inquiry visual",
        text: "Learn video editing today to\nmake content that stands out\nTomorrow"
    }
];
const CheckmarkSVG = ()=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "dc96a996ed7ae71f2000084bc6e41ec2070926e5976bbcdae0a6045feb24fd4c") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "dc96a996ed7ae71f2000084bc6e41ec2070926e5976bbcdae0a6045feb24fd4c";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            version: "1.1",
            id: "Layer_1",
            xmlns: "http://www.w3.org/2000/svg",
            xmlnsXlink: "http://www.w3.org/1999/xlink",
            x: "0px",
            y: "0px",
            width: "80px",
            height: "80px",
            viewBox: "0 0 122.88 122.88",
            enableBackground: "new 0 0 122.88 122.88",
            xmlSpace: "preserve",
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InquiryForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].checkmarkSvg,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    fill: "#6BBE66",
                    d: "M34.388,67.984c-0.286-0.308-0.542-0.638-0.762-0.981c-0.221-0.345-0.414-0.714-0.573-1.097 c-0.531-1.265-0.675-2.631-0.451-3.934c0.224-1.294,0.812-2.531,1.744-3.548l0.34-0.35c2.293-2.185,5.771-2.592,8.499-0.951 c0.39,0.233,0.762,0.51,1.109,0.827l0.034,0.031c1.931,1.852,5.198,4.881,7.343,6.79l1.841,1.651l22.532-23.635 c0.317-0.327,0.666-0.62,1.035-0.876c0.378-0.261,0.775-0.482,1.185-0.661c0.414-0.181,0.852-0.323,1.3-0.421 c0.447-0.099,0.903-0.155,1.356-0.165h0.026c0.451-0.005,0.893,0.027,1.341,0.103c0.437,0.074,0.876,0.193,1.333,0.369 c0.421,0.161,0.825,0.363,1.207,0.604c0.365,0.231,0.721,0.506,1.056,0.822l0.162,0.147c0.316,0.313,0.601,0.653,0.85,1.014 c0.256,0.369,0.475,0.766,0.652,1.178c0.183,0.414,0.325,0.852,0.424,1.299c0.1,0.439,0.154,0.895,0.165,1.36v0.23 c-0.004,0.399-0.042,0.804-0.114,1.204c-0.079,0.435-0.198,0.863-0.356,1.271c-0.16,0.418-0.365,0.825-0.607,1.21 c-0.238,0.377-0.518,0.739-0.832,1.07l-27.219,28.56c-0.32,0.342-0.663,0.642-1.022,0.898c-0.369,0.264-0.767,0.491-1.183,0.681 c-0.417,0.188-0.851,0.337-1.288,0.44c-0.435,0.104-0.889,0.166-1.35,0.187l-0.125,0.003c-0.423,0.009-0.84-0.016-1.241-0.078 l-0.102-0.02c-0.415-0.07-0.819-0.174-1.205-0.31c-0.421-0.15-0.833-0.343-1.226-0.575l-0.063-0.04 c-0.371-0.224-0.717-0.477-1.032-0.754l-0.063-0.06c-1.58-1.466-3.297-2.958-5.033-4.466c-3.007-2.613-7.178-6.382-9.678-9.02 L34.388,67.984L34.388,67.984z M61.44,0c16.96,0,32.328,6.883,43.453,17.987c11.104,11.125,17.986,26.493,17.986,43.453 c0,16.961-6.883,32.329-17.986,43.454C93.769,115.998,78.4,122.88,61.44,122.88c-16.961,0-32.329-6.882-43.454-17.986 C6.882,93.769,0,78.4,0,61.439C0,44.48,6.882,29.112,17.986,17.987C29.112,6.883,44.479,0,61.44,0L61.44,0z M96.899,25.981 C87.826,16.907,75.29,11.296,61.44,11.296c-13.851,0-26.387,5.611-35.46,14.685c-9.073,9.073-14.684,21.609-14.684,35.458 c0,13.851,5.611,26.387,14.684,35.46s21.609,14.685,35.46,14.685c13.85,0,26.386-5.611,35.459-14.685s14.684-21.609,14.684-35.46 C111.583,47.59,105.973,35.054,96.899,25.981L96.899,25.981z"
                }, void 0, false, {
                    fileName: "[project]/src/components/InquiryForm.jsx",
                    lineNumber: 28,
                    columnNumber: 286
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/InquiryForm.jsx",
                lineNumber: 28,
                columnNumber: 283
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/InquiryForm.jsx",
            lineNumber: 28,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
};
_c = CheckmarkSVG;
function InquiryForm() {
    _s();
    const [activeSlide, setActiveSlide] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedCourse, setSelectedCourse] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isSubmitted, setIsSubmitted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showThankYou, setShowThankYou] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [courseError, setCourseError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const dropdownRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const formRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "InquiryForm.useEffect": ()=>{
            slides.forEach({
                "InquiryForm.useEffect": (slide)=>{
                    const image = new window.Image();
                    image.src = slide.image;
                }
            }["InquiryForm.useEffect"]);
        }
    }["InquiryForm.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "InquiryForm.useEffect": ()=>{
            const intervalId = window.setInterval({
                "InquiryForm.useEffect.intervalId": ()=>{
                    setActiveSlide({
                        "InquiryForm.useEffect.intervalId": (current)=>(current + 1) % slides.length
                    }["InquiryForm.useEffect.intervalId"]);
                }
            }["InquiryForm.useEffect.intervalId"], 9000);
            return ({
                "InquiryForm.useEffect": ()=>window.clearInterval(intervalId)
            })["InquiryForm.useEffect"];
        }
    }["InquiryForm.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "InquiryForm.useEffect": ()=>{
            const handleClickOutside = {
                "InquiryForm.useEffect.handleClickOutside": (event)=>{
                    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                        setIsOpen(false);
                    }
                }
            }["InquiryForm.useEffect.handleClickOutside"];
            document.addEventListener("mousedown", handleClickOutside);
            return ({
                "InquiryForm.useEffect": ()=>document.removeEventListener("mousedown", handleClickOutside)
            })["InquiryForm.useEffect"];
        }
    }["InquiryForm.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "InquiryForm.useEffect": ()=>{
            if (showThankYou) {
                document.body.style.overflow = "hidden";
            } else {
                document.body.style.overflow = "unset";
            }
            return ({
                "InquiryForm.useEffect": ()=>{
                    document.body.style.overflow = "unset";
                }
            })["InquiryForm.useEffect"];
        }
    }["InquiryForm.useEffect"], [
        showThankYou
    ]);
    const startConfetti = ()=>{
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        const particles = [];
        const particleCount = 150;
        const colors = [
            "#00EF02",
            "#00c853",
            "#76ff03",
            "#64dd17",
            "#aeea00",
            "#ffeb3b",
            "#ff9800",
            "#ff5722"
        ];
        for(let i = 0; i < particleCount; i++){
            particles.push({
                x: canvas.width / 2,
                y: canvas.height / 2,
                vx: (Math.random() - 0.5) * 15,
                vy: (Math.random() - 0.5) * 15 - 5,
                size: Math.random() * 8 + 4,
                color: colors[Math.floor(Math.random() * colors.length)],
                rotation: Math.random() * 360,
                rotationSpeed: (Math.random() - 0.5) * 10,
                gravity: 0.2,
                opacity: 1
            });
        }
        let animationId;
        const animate = ()=>{
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            let activeParticles = 0;
            particles.forEach((particle)=>{
                if (particle.opacity > 0) {
                    particle.x += particle.vx;
                    particle.y += particle.vy;
                    particle.vy += particle.gravity;
                    particle.rotation += particle.rotationSpeed;
                    particle.opacity -= 0.005;
                    ctx.save();
                    ctx.translate(particle.x, particle.y);
                    ctx.rotate(particle.rotation * Math.PI / 180);
                    ctx.globalAlpha = particle.opacity;
                    ctx.fillStyle = particle.color;
                    ctx.fillRect(-particle.size / 2, -particle.size / 2, particle.size, particle.size);
                    ctx.restore();
                    activeParticles++;
                }
            });
            if (activeParticles > 0) {
                animationId = requestAnimationFrame(animate);
            }
        };
        animate();
        setTimeout(()=>{
            cancelAnimationFrame(animationId);
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }, 4000);
    };
    const handleSelect = (course)=>{
        setSelectedCourse(course);
        setCourseError(false);
        setIsOpen(false);
    };
    const handleSubmit = (e)=>{
        e.preventDefault();
        if (!selectedCourse) {
            setCourseError(true);
            dropdownRef.current?.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });
            return;
        }
        const formData = new FormData(e.currentTarget);
        const fullName = (formData.get("fullName") || "").toString().trim();
        const phone = (formData.get("phone") || "").toString().trim();
        const email = (formData.get("email") || "").toString().trim();
        const message = [
            "New Inquiry - Imazineus Academy",
            `Name: ${fullName}`,
            `Phone: ${phone}`,
            `Email: ${email}`,
            `Course: ${selectedCourse}`
        ].join("\n");
        const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, "_blank", "noopener,noreferrer");
        setIsSubmitted(true);
        setTimeout(()=>{
            setShowThankYou(true);
            startConfetti();
        }, 300);
    };
    const handleClosePopup = ()=>{
        setShowThankYou(false);
        setIsSubmitted(false);
        setSelectedCourse("");
        setCourseError(false);
        if (formRef.current) {
            formRef.current.reset();
        }
    };
    const currentSlide = slides[activeSlide];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InquiryForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].section,
        id: "inquiry",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                ref: canvasRef,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InquiryForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].confettiCanvas
            }, void 0, false, {
                fileName: "[project]/src/components/InquiryForm.jsx",
                lineNumber: 169,
                columnNumber: 7
            }, this),
            showThankYou && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InquiryForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].overlay,
                onClick: handleClosePopup
            }, void 0, false, {
                fileName: "[project]/src/components/InquiryForm.jsx",
                lineNumber: 170,
                columnNumber: 24
            }, this),
            showThankYou && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InquiryForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].thankYouPopup,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InquiryForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].closeButton,
                        onClick: handleClosePopup,
                        type: "button",
                        children: "×"
                    }, void 0, false, {
                        fileName: "[project]/src/components/InquiryForm.jsx",
                        lineNumber: 173,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InquiryForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].checkmarkContainer,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CheckmarkSVG, {}, void 0, false, {
                            fileName: "[project]/src/components/InquiryForm.jsx",
                            lineNumber: 178,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/InquiryForm.jsx",
                        lineNumber: 177,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InquiryForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].thankYouTitle,
                        children: "Thank You!"
                    }, void 0, false, {
                        fileName: "[project]/src/components/InquiryForm.jsx",
                        lineNumber: 181,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InquiryForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].thankYouText,
                        children: "Your enquiry has been submitted successfully."
                    }, void 0, false, {
                        fileName: "[project]/src/components/InquiryForm.jsx",
                        lineNumber: 182,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InquiryForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].thankYouSubtext,
                        children: "We will contact you soon!"
                    }, void 0, false, {
                        fileName: "[project]/src/components/InquiryForm.jsx",
                        lineNumber: 183,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/InquiryForm.jsx",
                lineNumber: 172,
                columnNumber: 24
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InquiryForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].shell} ${isSubmitted ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InquiryForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formHidden : ""}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InquiryForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].visualPanel,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InquiryForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].imageFrame,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InquiryForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].slideImage,
                                    src: currentSlide.image,
                                    alt: currentSlide.alt,
                                    width: 720,
                                    height: 520,
                                    sizes: "(max-width: 1040px) 100vw, 360px"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/InquiryForm.jsx",
                                    lineNumber: 190,
                                    columnNumber: 13
                                }, this)
                            }, currentSlide.image, false, {
                                fileName: "[project]/src/components/InquiryForm.jsx",
                                lineNumber: 189,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InquiryForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].visualCopy,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InquiryForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].visualBrand,
                                        children: "Imazineus Academy"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/InquiryForm.jsx",
                                        lineNumber: 193,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InquiryForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].visualLines,
                                        children: currentSlide.text
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/InquiryForm.jsx",
                                        lineNumber: 194,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, currentSlide.text, true, {
                                fileName: "[project]/src/components/InquiryForm.jsx",
                                lineNumber: 192,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/InquiryForm.jsx",
                        lineNumber: 188,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InquiryForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formPanel,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InquiryForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formIntro,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InquiryForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formTitle,
                                        children: "Ready to join offline classes?"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/InquiryForm.jsx",
                                        lineNumber: 201,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InquiryForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formSubtitle,
                                        children: [
                                            "Complete the form and confirm",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/src/components/InquiryForm.jsx",
                                                lineNumber: 204,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InquiryForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].subtitle2,
                                                children: "your booking"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/InquiryForm.jsx",
                                                lineNumber: 205,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/InquiryForm.jsx",
                                        lineNumber: 202,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/InquiryForm.jsx",
                                lineNumber: 200,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                ref: formRef,
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InquiryForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].form,
                                onSubmit: handleSubmit,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InquiryForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].field,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InquiryForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].input,
                                            type: "text",
                                            name: "fullName",
                                            placeholder: "Full Name",
                                            required: true
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/InquiryForm.jsx",
                                            lineNumber: 211,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/InquiryForm.jsx",
                                        lineNumber: 210,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InquiryForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].field,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InquiryForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].input,
                                            type: "tel",
                                            name: "phone",
                                            placeholder: "Phone Number",
                                            required: true
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/InquiryForm.jsx",
                                            lineNumber: 215,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/InquiryForm.jsx",
                                        lineNumber: 214,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InquiryForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].field,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InquiryForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].input,
                                            type: "email",
                                            name: "email",
                                            placeholder: "Email Address",
                                            required: true
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/InquiryForm.jsx",
                                            lineNumber: 219,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/InquiryForm.jsx",
                                        lineNumber: 218,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InquiryForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dropdownContainer,
                                        ref: dropdownRef,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InquiryForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].field} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InquiryForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].customSelect} ${isOpen ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InquiryForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fieldActive : ""} ${courseError ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InquiryForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fieldError : ""}`,
                                                onClick: ()=>{
                                                    setIsOpen(!isOpen);
                                                    setCourseError(false);
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: selectedCourse ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InquiryForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].selectedText : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InquiryForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].placeholder,
                                                        children: selectedCourse || "Select Course *"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/InquiryForm.jsx",
                                                        lineNumber: 227,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InquiryForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].arrow} ${isOpen ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InquiryForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].arrowUp : ""}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/InquiryForm.jsx",
                                                        lineNumber: 230,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/InquiryForm.jsx",
                                                lineNumber: 223,
                                                columnNumber: 15
                                            }, this),
                                            courseError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InquiryForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].errorText,
                                                children: "Please select a course"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/InquiryForm.jsx",
                                                lineNumber: 233,
                                                columnNumber: 31
                                            }, this),
                                            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InquiryForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].optionsList,
                                                children: courseOptions.map((course_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InquiryForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].optionItem,
                                                        onClick: ()=>handleSelect(course_0),
                                                        children: course_0
                                                    }, course_0, false, {
                                                        fileName: "[project]/src/components/InquiryForm.jsx",
                                                        lineNumber: 236,
                                                        columnNumber: 50
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/InquiryForm.jsx",
                                                lineNumber: 235,
                                                columnNumber: 26
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/InquiryForm.jsx",
                                        lineNumber: 222,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InquiryForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].submitButton,
                                        type: "submit",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Start Learning"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/InquiryForm.jsx",
                                                lineNumber: 243,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InquiryForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].btnIcon,
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                        cx: "10.2004",
                                                        cy: "7.1999",
                                                        r: "1.8",
                                                        fill: "currentColor"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/InquiryForm.jsx",
                                                        lineNumber: 245,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                        cx: "10.2004",
                                                        cy: "16.8",
                                                        r: "1.8",
                                                        fill: "currentColor"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/InquiryForm.jsx",
                                                        lineNumber: 246,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                        cx: "14.9992",
                                                        cy: "12.0002",
                                                        r: "1.8",
                                                        fill: "currentColor"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/InquiryForm.jsx",
                                                        lineNumber: 247,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/InquiryForm.jsx",
                                                lineNumber: 244,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/InquiryForm.jsx",
                                        lineNumber: 242,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/InquiryForm.jsx",
                                lineNumber: 209,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/InquiryForm.jsx",
                        lineNumber: 199,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/InquiryForm.jsx",
                lineNumber: 186,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/InquiryForm.jsx",
        lineNumber: 168,
        columnNumber: 10
    }, this);
}
_s(InquiryForm, "NEYPedeubotbM5s8Qg+3lraJ3C8=");
_c1 = InquiryForm;
const __TURBOPACK__default__export__ = InquiryForm;
var _c, _c1;
__turbopack_context__.k.register(_c, "CheckmarkSVG");
__turbopack_context__.k.register(_c1, "InquiryForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/NewAnimation.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "mobileBannerImage": "NewAnimation-module__6QwX3a__mobileBannerImage",
  "mobileBannerSection": "NewAnimation-module__6QwX3a__mobileBannerSection",
  "newAnimImage": "NewAnimation-module__6QwX3a__newAnimImage",
  "newAnimImage1": "NewAnimation-module__6QwX3a__newAnimImage1",
  "newAnimImage2": "NewAnimation-module__6QwX3a__newAnimImage2",
  "newAnimImage3": "NewAnimation-module__6QwX3a__newAnimImage3",
  "newAnimImage4": "NewAnimation-module__6QwX3a__newAnimImage4",
  "newAnimImage5": "NewAnimation-module__6QwX3a__newAnimImage5",
  "newAnimImage6": "NewAnimation-module__6QwX3a__newAnimImage6",
  "newAnimImage7": "NewAnimation-module__6QwX3a__newAnimImage7",
  "newAnimation": "NewAnimation-module__6QwX3a__newAnimation",
  "newAnimationBg": "NewAnimation-module__6QwX3a__newAnimationBg",
  "newAnimationImage": "NewAnimation-module__6QwX3a__newAnimationImage",
  "newAnimationStage": "NewAnimation-module__6QwX3a__newAnimationStage",
  "newOverlay": "NewAnimation-module__6QwX3a__newOverlay",
  "textImage": "NewAnimation-module__6QwX3a__textImage",
  "textImageLoaded": "NewAnimation-module__6QwX3a__textImageLoaded",
  "textImageWrap": "NewAnimation-module__6QwX3a__textImageWrap",
});
}),
"[project]/src/components/NewAnimation.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NewAnimation$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/NewAnimation.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useMediaQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useMediaQuery.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const mobileBannerImage = '/homepagemobileviewbanner.webp';
const imagePaths = [
    '/newanimation/image 1.png',
    '/newanimation/image 2.png',
    '/newanimation/image 3.png',
    '/newanimation/image 4.png',
    '/newanimation/image 5.png',
    '/newanimation/image 6.png',
    '/newanimation/image 7.png'
];
const imageTravelDistances = [
    98,
    94,
    112,
    96,
    110,
    94,
    114
];
const imageFinalOffsets = [
    52,
    50,
    40,
    50,
    40,
    50,
    44
];
const mobileFinalOffsets = [
    12,
    10,
    8,
    8,
    8,
    10,
    12
];
const mobileTravelBoost = [
    28,
    24,
    30,
    26,
    30,
    24,
    28
];
const imageStartOffsets = [
    0.1,
    0.15,
    0.2,
    0.13,
    0.22,
    0.17,
    0.24
];
const mobileImageStartOffsets = [
    0.08,
    0.13,
    0.18,
    0.11,
    0.2,
    0.15,
    0.22
];
const imageLayerOffsets = [
    10,
    6,
    20,
    8,
    18,
    6,
    18
];
const mobileImageLayerOffsets = [
    24,
    14,
    28,
    18,
    26,
    16,
    22
];
const mobileProgressOffset = 0.14;
const desktopProgressLead = 0.08;
function NewAnimation() {
    _s();
    const newAnimationRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const lastMobileProgressRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(mobileProgressOffset);
    const [imageTranslates, setImageTranslates] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(Array(8).fill(100));
    const [isTextLoaded, setIsTextLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const isMobileViewport = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useMediaQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("(max-width: 768px)");
    const isSafariRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const rafIdRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const lastScrollTimeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const lastScrollYRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const targetTranslatesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(Array(8).fill(100));
    const currentTranslatesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(Array(8).fill(100));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NewAnimation.useEffect": ()=>{
            const ua = navigator.userAgent.toLowerCase();
            isSafariRef.current = /^((?!chrome|android).)*safari/i.test(ua) && !ua.includes('chrome');
        }
    }["NewAnimation.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NewAnimation.useEffect": ()=>{
            let frameId = 0;
            frameId = window.requestAnimationFrame({
                "NewAnimation.useEffect": ()=>{
                    setIsTextLoaded(true);
                }
            }["NewAnimation.useEffect"]);
            return ({
                "NewAnimation.useEffect": ()=>{
                    if (frameId) cancelAnimationFrame(frameId);
                }
            })["NewAnimation.useEffect"];
        }
    }["NewAnimation.useEffect"], []);
    const calculateTargets = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "NewAnimation.useCallback[calculateTargets]": ()=>{
            const isMobileViewport_0 = window.innerWidth <= 768;
            const isSafari = isSafariRef.current;
            const newAnimationRect = newAnimationRef.current?.getBoundingClientRect();
            if (!newAnimationRect) return;
            const scrollY = window.scrollY;
            const isScrollingDown = scrollY >= lastScrollYRef.current;
            const newAnimationTop = newAnimationRect.top + scrollY;
            const newAnimationHeight = newAnimationRect.height;
            const viewportHeight = window.innerHeight;
            const scrollableDistance = Math.max(newAnimationHeight - viewportHeight, 1);
            const desktopSectionProgress = (scrollY - newAnimationTop + viewportHeight * desktopProgressLead) / scrollableDistance;
            const mobileSectionProgress = Math.max(0, (scrollY - newAnimationTop) / scrollableDistance);
            const rawProgress = isMobileViewport_0 ? mobileSectionProgress + mobileProgressOffset : desktopSectionProgress;
            const normalizedProgress = Math.max(0, Math.min(1, rawProgress));
            const clampValue = isSafari ? 0.15 : 0.08;
            const scrollProgress = isMobileViewport_0 ? isScrollingDown ? Math.max(normalizedProgress, lastMobileProgressRef.current - clampValue) : normalizedProgress : normalizedProgress;
            if (isMobileViewport_0) {
                lastMobileProgressRef.current = scrollProgress;
            } else {
                lastMobileProgressRef.current = mobileProgressOffset;
            }
            lastScrollYRef.current = scrollY;
            const newTargets = Array.from({
                length: 8
            }, {
                "NewAnimation.useCallback[calculateTargets].newTargets": (_, index)=>{
                    const isTextImage = index === 7;
                    let startOffset = isTextImage ? 0.1 : isMobileViewport_0 ? mobileImageStartOffsets[index] : imageStartOffsets[index];
                    let animationRange = isTextImage ? 0.72 : 0.64;
                    if (isMobileViewport_0 && !isTextImage) {
                        animationRange = 0.78;
                    }
                    if (isMobileViewport_0 && isTextImage) {
                        startOffset = 0.08;
                        animationRange = 0.82;
                    }
                    let progress = (scrollProgress - startOffset) / animationRange;
                    progress = Math.max(0, Math.min(1, progress));
                    const easedProgress = isSafari ? progress : isTextImage ? 1 - Math.pow(1 - progress, 2.4) : 1 - Math.pow(1 - progress, 2.8);
                    const currentTravelDistance = isTextImage ? isMobileViewport_0 ? 150 : 140 : imageTravelDistances[index] + (isMobileViewport_0 ? mobileTravelBoost[index] : 0);
                    const currentFinalOffset = isTextImage ? 0 : isMobileViewport_0 ? mobileFinalOffsets[index] : imageFinalOffsets[index];
                    const layerOffset = isTextImage ? 0 : isMobileViewport_0 ? mobileImageLayerOffsets[index] : imageLayerOffsets[index];
                    const entryTarget = isTextImage ? currentTravelDistance * (1 - easedProgress) : currentFinalOffset + (currentTravelDistance - currentFinalOffset) * (1 - easedProgress) + layerOffset * (1 - easedProgress);
                    const exitStart = Math.min(startOffset + animationRange * (isTextImage ? 0.82 : 0.84), isMobileViewport_0 ? 0.88 : 0.9);
                    const exitRange = isTextImage ? isMobileViewport_0 ? 0.18 : 0.14 : isMobileViewport_0 ? 0.16 : 0.12;
                    const exitProgress = Math.max(0, Math.min(1, (scrollProgress - exitStart) / exitRange));
                    const exitDistance = isTextImage ? isMobileViewport_0 ? 240 : 420 : isMobileViewport_0 ? 120 : 210;
                    return entryTarget - exitDistance * exitProgress;
                }
            }["NewAnimation.useCallback[calculateTargets].newTargets"]);
            targetTranslatesRef.current = newTargets;
        }
    }["NewAnimation.useCallback[calculateTargets]"], []);
    const interpolate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])(function interpolateFrame() {
        const isSafari_0 = isSafariRef.current;
        const lerpFactor = isSafari_0 ? 0.11 : 0.035;
        let hasChanged = false;
        const newTranslates = currentTranslatesRef.current.map({
            "NewAnimation.useCallback[interpolate].interpolateFrame.newTranslates": (current, i)=>{
                const target = targetTranslatesRef.current[i];
                const diff = target - current;
                if (Math.abs(diff) < 0.1) return target;
                hasChanged = true;
                return current + diff * lerpFactor;
            }
        }["NewAnimation.useCallback[interpolate].interpolateFrame.newTranslates"]);
        if (hasChanged) {
            currentTranslatesRef.current = newTranslates;
            setImageTranslates([
                ...newTranslates
            ]);
            rafIdRef.current = requestAnimationFrame(interpolateFrame);
        } else {
            rafIdRef.current = null;
        }
    }, []);
    const handleScroll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "NewAnimation.useCallback[handleScroll]": ()=>{
            const now = performance.now();
            const isSafari_1 = isSafariRef.current;
            const throttleMs = isSafari_1 ? 24 : 14;
            if (now - lastScrollTimeRef.current < throttleMs) return;
            lastScrollTimeRef.current = now;
            calculateTargets();
            if (!rafIdRef.current) {
                rafIdRef.current = requestAnimationFrame(interpolate);
            }
        }
    }["NewAnimation.useCallback[handleScroll]"], [
        calculateTargets,
        interpolate
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NewAnimation.useEffect": ()=>{
            const options = isSafariRef.current ? {
                passive: true,
                capture: true
            } : {
                passive: true
            };
            window.addEventListener('scroll', handleScroll, options);
            window.addEventListener('resize', calculateTargets, {
                passive: true
            });
            calculateTargets();
            setImageTranslates([
                ...targetTranslatesRef.current
            ]);
            currentTranslatesRef.current = [
                ...targetTranslatesRef.current
            ];
            lastScrollYRef.current = window.scrollY;
            return ({
                "NewAnimation.useEffect": ()=>{
                    window.removeEventListener('scroll', handleScroll, options);
                    window.removeEventListener('resize', calculateTargets);
                    if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
                }
            })["NewAnimation.useEffect"];
        }
    }["NewAnimation.useEffect"], [
        handleScroll,
        calculateTargets
    ]);
    const getImageStyle = (index_0)=>({
            transform: `translateY(${imageTranslates[index_0]}%)`,
            WebkitTransform: `translateY(${imageTranslates[index_0]}%) translate3d(0,0,0)`,
            willChange: 'transform'
        });
    const getTextStyle = ()=>({
            transform: `translateX(-50%) translateY(${imageTranslates[7]}px)`,
            WebkitTransform: `translateX(-50%) translateY(${imageTranslates[7]}px) translate3d(0,0,0)`,
            willChange: 'transform'
        });
    if (isMobileViewport) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NewAnimation$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mobileBannerSection,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: mobileBannerImage,
                alt: "Imazine Us Academy mobile banner",
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NewAnimation$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mobileBannerImage,
                width: 900,
                height: 1600,
                sizes: "100vw",
                priority: true
            }, void 0, false, {
                fileName: "[project]/src/components/NewAnimation.jsx",
                lineNumber: 158,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/NewAnimation.jsx",
            lineNumber: 157,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: newAnimationRef,
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NewAnimation$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].newAnimation,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NewAnimation$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].newAnimationStage,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NewAnimation$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].newAnimationBg,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NewAnimation$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].newAnimationImage
                    }, void 0, false, {
                        fileName: "[project]/src/components/NewAnimation.jsx",
                        lineNumber: 164,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NewAnimation$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].textImageWrap} ${isTextLoaded ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NewAnimation$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].textImageLoaded : ''}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: "/newanimation/text.png",
                            alt: "Text Overlay",
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NewAnimation$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].textImage,
                            style: getTextStyle(),
                            width: 1200,
                            height: 420,
                            sizes: "90vw",
                            priority: true
                        }, void 0, false, {
                            fileName: "[project]/src/components/NewAnimation.jsx",
                            lineNumber: 167,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/NewAnimation.jsx",
                        lineNumber: 166,
                        columnNumber: 11
                    }, this),
                    Array.from({
                        length: 7
                    }, (__0, index_1)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: imagePaths[index_1],
                            alt: `New Animation ${index_1 + 1}`,
                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NewAnimation$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].newAnimImage} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NewAnimation$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"][`newAnimImage${index_1 + 1}`]}`,
                            style: getImageStyle(index_1),
                            width: 420,
                            height: 720,
                            sizes: "14vw"
                        }, index_1, false, {
                            fileName: "[project]/src/components/NewAnimation.jsx",
                            lineNumber: 172,
                            columnNumber: 30
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NewAnimation$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].newOverlay
                    }, void 0, false, {
                        fileName: "[project]/src/components/NewAnimation.jsx",
                        lineNumber: 174,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/NewAnimation.jsx",
                lineNumber: 163,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/NewAnimation.jsx",
            lineNumber: 162,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/NewAnimation.jsx",
        lineNumber: 161,
        columnNumber: 10
    }, this);
}
_s(NewAnimation, "Un7mICLXeXSKCGRDt9p+OG9Empg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useMediaQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ];
});
_c = NewAnimation;
const __TURBOPACK__default__export__ = NewAnimation;
var _c;
__turbopack_context__.k.register(_c, "NewAnimation");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Reviews.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "avatar": "Reviews-module__yTtV6W__avatar",
  "avatarFallback": "Reviews-module__yTtV6W__avatarFallback",
  "badge": "Reviews-module__yTtV6W__badge",
  "card": "Reviews-module__yTtV6W__card",
  "cardTitle": "Reviews-module__yTtV6W__cardTitle",
  "cardTop": "Reviews-module__yTtV6W__cardTop",
  "cardVisible": "Reviews-module__yTtV6W__cardVisible",
  "footer": "Reviews-module__yTtV6W__footer",
  "grid": "Reviews-module__yTtV6W__grid",
  "header": "Reviews-module__yTtV6W__header",
  "name": "Reviews-module__yTtV6W__name",
  "quote": "Reviews-module__yTtV6W__quote",
  "role": "Reviews-module__yTtV6W__role",
  "section": "Reviews-module__yTtV6W__section",
  "summary": "Reviews-module__yTtV6W__summary",
  "summaryDesktop": "Reviews-module__yTtV6W__summaryDesktop",
  "summaryLineFifth": "Reviews-module__yTtV6W__summaryLineFifth",
  "summaryLineFourth": "Reviews-module__yTtV6W__summaryLineFourth",
  "summaryLineLarge": "Reviews-module__yTtV6W__summaryLineLarge",
  "summaryLineMedium": "Reviews-module__yTtV6W__summaryLineMedium",
  "summaryLineSmall": "Reviews-module__yTtV6W__summaryLineSmall",
  "summaryMobile": "Reviews-module__yTtV6W__summaryMobile",
  "title": "Reviews-module__yTtV6W__title",
  "titleChar": "Reviews-module__yTtV6W__titleChar",
  "titleCharVisible": "Reviews-module__yTtV6W__titleCharVisible",
  "titleLine": "Reviews-module__yTtV6W__titleLine",
  "titlePrimary": "Reviews-module__yTtV6W__titlePrimary",
  "titleWord": "Reviews-module__yTtV6W__titleWord",
});
}),
"[project]/src/components/Reviews.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$split$2d$type$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/split-type/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Reviews$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/Reviews.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useMediaQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useMediaQuery.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const reviews = [
    {
        name: "Sohel Khan",
        role: "Video Editor",
        title: "Improved my skills and grew in confidence",
        quote: "I'm truly grateful to Vishant Sir, who truly helped me and guided me to achieve my best level in video editing.",
        avatar: "/reviews/Sohel.webp"
    },
    {
        name: "Sahil Bhardwaj",
        role: "Video Editor",
        title: "Working on real-life projects gave me practical experience and boosted my confidence",
        quote: "I have completed my internship as a video editor here, and I'm happy to share that I improved significantly during this time, and now I have a high-paying job in Chandigarh.",
        avatar: "/reviews/sahilbardwaj.webp"
    },
    {
        name: "Harjeet Singh",
        role: "Graphic Design",
        title: "Best graphic design classes",
        quote: "An amazing institute for learning graphic design. The assignments and projects truly helped me. I will recommend everyone who is looking for the best graphic design classes in Zirakpur, Chandigarh, Panchkula, or Tricity.",
        avatar: "/reviews/HarjeetSingh.webp"
    },
    {
        name: "Pratham Narule",
        role: "Graphic Design",
        title: "Learning Something new",
        quote: "Great learning experience at Imazine Us. I learned Photoshop and Illustrator with practical projects. Vishant Sir taught me a lot about everything. Thank you so much, Imazine Us Academy.",
        avatar: "/reviews/parthamnarule.webp"
    },
    {
        name: "Riya",
        role: "Digital Marketer",
        title: "Great guidance",
        quote: "I was a complete fresher when I joined Imazine Us, but the journey turned out to be amazing. I learned digital marketing from scratch, and the mentors were incredibly supportive, guiding me at every step. They made sure I understood everything clearly. Overall, I had a 10/10 learning experience.",
        avatar: "/reviews/riya.webp"
    },
    {
        name: "Saloni",
        role: "Graphic + Video Editing",
        title: "Choosing Imazine Us was the right decision",
        quote: "The Graphic + Video Editing course is highly practical and focused on real-world skills. I learned techniques that I can actually use in my work. Choosing Imazine Us was the right decision, as they truly stand out as one of the best institutes in Tricity. The environment is friendly, and the mentors are extremely supportive and helpful throughout the learning journey.",
        avatar: "/reviews/saloni.webp"
    },
    {
        name: "Neeraj",
        role: "Video Editor",
        title: "Becoming the master of my field",
        quote: "Imazine Us really boosted my confidence and my video editing skills. It helped me grow both creatively and professionally.",
        avatar: "/reviews/neeraj.webp"
    },
    {
        name: "Aryan Grover",
        role: "Web Developer",
        title: "The practical exposure made a big difference in my learning.",
        quote: "I worked here as a Web Developer intern, where I got the opportunity to work on real projects that truly helped me discover and improve my skills. If you want to learn and gain experience through real-life projects, I highly recommend this place.",
        avatar: "/reviews/Aryangrover.webp"
    },
    {
        name: "Anmol Singh",
        role: "Web Developer",
        title: "Found the best",
        quote: "Looking for the best Web Developer classes or an internship in Zirakpur, Chandigarh, Panchkula, or Tricity? Then you are welcome to Imazine Us Academy, where you can learn real skills and gain hands-on experience through practical projects guided by expert mentors.",
        avatar: "/reviews/anmolsingh.webp"
    },
    {
        name: "Aryan Singh",
        role: "Digital Marketer",
        title: "Found what I was truly searching for",
        quote: "I was really confused about finding the right place to learn digital marketing where I could work on real projects. I struggled to choose a platform that offers practical experience, not just theory. Imazine Us really helped me a lot with it.",
        avatar: "/reviews/aryansingh.webp"
    },
    {
        name: "Muskaan",
        role: "Digital Marketer",
        title: "Discover my true interests and learning path.",
        quote: "Before joining Imazine Us, I was really confused about digital marketing and unsure about what I actually wanted to learn. I struggled to find the right direction, but at Imazine Us, the mentors guided me at every step and helped me discover my true interests and learning path.",
        avatar: "/reviews/muskan.webp"
    },
    {
        name: "Sourav Dhiman",
        role: "Content Writer",
        title: "Discovering my real passion",
        quote: "Finding what true content writing is feels like discovering my real passion. I genuinely enjoy creating new content, and Imazine Us Academy has taught me much more than I ever expected. Getting the opportunity to work with real clients has helped me gain practical experience and improve my skills with confidence.",
        avatar: "/reviews/souravdhiman.webp"
    }
];
function getInitials(name) {
    return name.split(" ").filter(Boolean).slice(0, 2).map((part)=>part[0]?.toUpperCase() ?? "").join("");
}
function Reviews() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(28);
    if ($[0] !== "2abd1556e8a9bfcd764ecb993c7d2e25cb243fe655f0d3b65016b12e3021307b") {
        for(let $i = 0; $i < 28; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "2abd1556e8a9bfcd764ecb993c7d2e25cb243fe655f0d3b65016b12e3021307b";
    }
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const titleRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const titleCharsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(t0);
    const splitInstanceRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [visibleCount, setVisibleCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isTitleActive, setIsTitleActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const isMobile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useMediaQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("(max-width: 540px)");
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ({
            "Reviews[useEffect()]": ()=>{
                if (!sectionRef.current) {
                    return;
                }
                const observer = new IntersectionObserver((t2)=>{
                    const [entry] = t2;
                    return setIsTitleActive(entry.isIntersecting);
                }, {
                    threshold: 0.01,
                    rootMargin: "0px 0px 12% 0px"
                });
                observer.observe(sectionRef.current);
                return ()=>observer.disconnect();
            }
        })["Reviews[useEffect()]"];
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] !== isMobile) {
        t2 = [
            isMobile
        ];
        $[3] = isMobile;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    let t3;
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = ({
            "Reviews[useEffect()]": ()=>{
                if (!titleRef.current || ("TURBOPACK compile-time value", "object") === "undefined") {
                    return;
                }
                splitInstanceRef.current?.revert();
                const splitInstance = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$split$2d$type$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](titleRef.current, {
                    types: "words, chars",
                    wordClass: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Reviews$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].titleWord,
                    charClass: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Reviews$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].titleChar
                });
                splitInstanceRef.current = splitInstance;
                titleCharsRef.current = splitInstance.chars ?? [];
                return ()=>{
                    titleCharsRef.current = [];
                    splitInstanceRef.current?.revert();
                    splitInstanceRef.current = null;
                };
            }
        })["Reviews[useEffect()]"];
        t4 = [];
        $[5] = t3;
        $[6] = t4;
    } else {
        t3 = $[5];
        t4 = $[6];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t3, t4);
    let t5;
    let t6;
    if ($[7] !== isMobile || $[8] !== isTitleActive) {
        t5 = ({
            "Reviews[useEffect()]": ()=>{
                const titleChars = titleCharsRef.current;
                const updateRevealCount = {
                    "Reviews[useEffect() > updateRevealCount]": (count)=>{
                        titleChars.forEach({
                            "Reviews[useEffect() > updateRevealCount > titleChars.forEach()]": (char, index)=>{
                                char.classList.toggle(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Reviews$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].titleCharVisible, index < count);
                            }
                        }["Reviews[useEffect() > updateRevealCount > titleChars.forEach()]"]);
                    }
                }["Reviews[useEffect() > updateRevealCount]"];
                if (!isTitleActive) {
                    updateRevealCount(0);
                    return;
                }
                if (isMobile) {
                    let frameId = 0;
                    const startTime = performance.now();
                    const animateMobileReveal = {
                        "Reviews[useEffect() > animateMobileReveal]": (time)=>{
                            const progress = Math.min((time - startTime) / 650, 1);
                            const eased = 1 - Math.pow(1 - progress, 3);
                            const nextCount = Math.round(titleChars.length * eased);
                            updateRevealCount(nextCount);
                            if (progress < 1) {
                                frameId = window.requestAnimationFrame(animateMobileReveal);
                            }
                        }
                    }["Reviews[useEffect() > animateMobileReveal]"];
                    frameId = window.requestAnimationFrame(animateMobileReveal);
                    return ()=>{
                        if (frameId) {
                            window.cancelAnimationFrame(frameId);
                        }
                    };
                }
                let frameId_0 = 0;
                let ticking = false;
                const updateReveal = {
                    "Reviews[useEffect() > updateReveal]": ()=>{
                        if (!titleRef.current) {
                            return;
                        }
                        const rect = titleRef.current.getBoundingClientRect();
                        const viewportHeight = window.innerHeight;
                        const start = viewportHeight * 1.08;
                        const end = viewportHeight * 0.34;
                        const progress_0 = (start - rect.top) / (start - end) * 100;
                        const nextCount_0 = Math.round(Math.max(0, Math.min(100, progress_0)) / 100 * titleChars.length);
                        updateRevealCount(nextCount_0);
                    }
                }["Reviews[useEffect() > updateReveal]"];
                const requestRevealUpdate = {
                    "Reviews[useEffect() > requestRevealUpdate]": ()=>{
                        if (ticking) {
                            return;
                        }
                        ticking = true;
                        frameId_0 = window.requestAnimationFrame({
                            "Reviews[useEffect() > requestRevealUpdate > window.requestAnimationFrame()]": ()=>{
                                ticking = false;
                                updateReveal();
                            }
                        }["Reviews[useEffect() > requestRevealUpdate > window.requestAnimationFrame()]"]);
                    }
                }["Reviews[useEffect() > requestRevealUpdate]"];
                updateReveal();
                window.addEventListener("scroll", requestRevealUpdate, {
                    passive: true
                });
                window.addEventListener("resize", requestRevealUpdate);
                return ()=>{
                    if (frameId_0) {
                        window.cancelAnimationFrame(frameId_0);
                    }
                    window.removeEventListener("scroll", requestRevealUpdate);
                    window.removeEventListener("resize", requestRevealUpdate);
                };
            }
        })["Reviews[useEffect()]"];
        t6 = [
            isMobile,
            isTitleActive
        ];
        $[7] = isMobile;
        $[8] = isTitleActive;
        $[9] = t5;
        $[10] = t6;
    } else {
        t5 = $[9];
        t6 = $[10];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t5, t6);
    let t7;
    let t8;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = ({
            "Reviews[useEffect()]": ()=>{
                if (!sectionRef.current || ("TURBOPACK compile-time value", "object") === "undefined") {
                    return;
                }
                let frameId_1 = 0;
                let ticking_0 = false;
                let hasUserScrolled = false;
                const updateVisibleCount = {
                    "Reviews[useEffect() > updateVisibleCount]": ()=>{
                        if (!sectionRef.current) {
                            return;
                        }
                        const rect_0 = sectionRef.current.getBoundingClientRect();
                        const viewportHeight_0 = window.innerHeight;
                        const triggerLine = viewportHeight_0 * 0.36;
                        const revealDistance = triggerLine - rect_0.top;
                        const stepDistance = viewportHeight_0 * 0.15;
                        const nextVisibleCount = revealDistance <= 0 ? 0 : Math.max(0, Math.min(reviews.length, Math.floor(revealDistance / stepDistance)));
                        setVisibleCount(nextVisibleCount);
                    }
                }["Reviews[useEffect() > updateVisibleCount]"];
                const requestUpdate = {
                    "Reviews[useEffect() > requestUpdate]": ()=>{
                        hasUserScrolled = true;
                        if (ticking_0) {
                            return;
                        }
                        ticking_0 = true;
                        frameId_1 = window.requestAnimationFrame({
                            "Reviews[useEffect() > requestUpdate > window.requestAnimationFrame()]": ()=>{
                                ticking_0 = false;
                                updateVisibleCount();
                            }
                        }["Reviews[useEffect() > requestUpdate > window.requestAnimationFrame()]"]);
                    }
                }["Reviews[useEffect() > requestUpdate]"];
                const handleScroll = {
                    "Reviews[useEffect() > handleScroll]": ()=>{
                        requestUpdate();
                    }
                }["Reviews[useEffect() > handleScroll]"];
                window.addEventListener("scroll", handleScroll, {
                    passive: true
                });
                return ()=>{
                    if (frameId_1) {
                        window.cancelAnimationFrame(frameId_1);
                    }
                    if (!hasUserScrolled) {
                        setVisibleCount(0);
                    }
                    window.removeEventListener("scroll", handleScroll);
                };
            }
        })["Reviews[useEffect()]"];
        t8 = [];
        $[11] = t7;
        $[12] = t8;
    } else {
        t7 = $[11];
        t8 = $[12];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t7, t8);
    let t9;
    if ($[13] !== isMobile) {
        t9 = isMobile ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Reviews$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].titleLine,
                    children: "What Students"
                }, void 0, false, {
                    fileName: "[project]/src/components/Reviews.jsx",
                    lineNumber: 332,
                    columnNumber: 23
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Reviews$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].titleLine,
                    children: "Say"
                }, void 0, false, {
                    fileName: "[project]/src/components/Reviews.jsx",
                    lineNumber: 332,
                    columnNumber: 78
                }, this)
            ]
        }, void 0, true) : "What Students Say";
        $[13] = isMobile;
        $[14] = t9;
    } else {
        t9 = $[14];
    }
    let t10;
    if ($[15] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Reviews$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                ref: titleRef,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Reviews$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].titlePrimary,
                children: t9
            }, void 0, false, {
                fileName: "[project]/src/components/Reviews.jsx",
                lineNumber: 340,
                columnNumber: 40
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/Reviews.jsx",
            lineNumber: 340,
            columnNumber: 11
        }, this);
        $[15] = t9;
        $[16] = t10;
    } else {
        t10 = $[16];
    }
    let t11;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Reviews$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].summary} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Reviews$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].summaryDesktop}`,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Reviews$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].summaryLineMedium,
                    children: "Real stories from our students and interns."
                }, void 0, false, {
                    fileName: "[project]/src/components/Reviews.jsx",
                    lineNumber: 348,
                    columnNumber: 73
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Reviews$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].summaryLineLarge,
                    children: "Their growth came from practical projects, mentor support,"
                }, void 0, false, {
                    fileName: "[project]/src/components/Reviews.jsx",
                    lineNumber: 348,
                    columnNumber: 166
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Reviews$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].summaryLineSmall,
                    children: "and real-world learning."
                }, void 0, false, {
                    fileName: "[project]/src/components/Reviews.jsx",
                    lineNumber: 348,
                    columnNumber: 273
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Reviews.jsx",
            lineNumber: 348,
            columnNumber: 11
        }, this);
        $[17] = t11;
    } else {
        t11 = $[17];
    }
    let t12;
    if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Reviews$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].summary} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Reviews$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].summaryMobile}`,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Reviews$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].summaryLineMedium,
                    children: "Real stories from our"
                }, void 0, false, {
                    fileName: "[project]/src/components/Reviews.jsx",
                    lineNumber: 355,
                    columnNumber: 72
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Reviews$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].summaryLineLarge,
                    children: "students and interns. Their growth came"
                }, void 0, false, {
                    fileName: "[project]/src/components/Reviews.jsx",
                    lineNumber: 355,
                    columnNumber: 143
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Reviews$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].summaryLineSmall,
                    children: "from practical projects, mentor"
                }, void 0, false, {
                    fileName: "[project]/src/components/Reviews.jsx",
                    lineNumber: 355,
                    columnNumber: 231
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Reviews$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].summaryLineFourth,
                    children: "support and real world"
                }, void 0, false, {
                    fileName: "[project]/src/components/Reviews.jsx",
                    lineNumber: 355,
                    columnNumber: 311
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Reviews$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].summaryLineFifth,
                    children: "learning."
                }, void 0, false, {
                    fileName: "[project]/src/components/Reviews.jsx",
                    lineNumber: 355,
                    columnNumber: 383
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Reviews.jsx",
            lineNumber: 355,
            columnNumber: 11
        }, this);
        $[18] = t12;
    } else {
        t12 = $[18];
    }
    let t13;
    if ($[19] !== t10) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Reviews$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].header,
            children: [
                t10,
                t11,
                t12
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Reviews.jsx",
            lineNumber: 362,
            columnNumber: 11
        }, this);
        $[19] = t10;
        $[20] = t13;
    } else {
        t13 = $[20];
    }
    let t14;
    if ($[21] !== visibleCount) {
        t14 = reviews.map({
            "Reviews[reviews.map()]": (review, index_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Reviews$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].card} ${index_0 < visibleCount ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Reviews$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardVisible : ""}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Reviews$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardTop,
                            children: [
                                review.avatar ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Reviews$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].avatar,
                                    src: review.avatar,
                                    alt: review.name,
                                    width: 34,
                                    height: 34
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Reviews.jsx",
                                    lineNumber: 371,
                                    columnNumber: 211
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Reviews$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].avatarFallback,
                                    "aria-hidden": "true",
                                    children: getInitials(review.name)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Reviews.jsx",
                                    lineNumber: 371,
                                    columnNumber: 310
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Reviews$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].badge,
                                    "aria-hidden": "true",
                                    children: "in"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Reviews.jsx",
                                    lineNumber: 371,
                                    columnNumber: 401
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Reviews.jsx",
                            lineNumber: 371,
                            columnNumber: 162
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Reviews$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardTitle,
                            children: review.title
                        }, void 0, false, {
                            fileName: "[project]/src/components/Reviews.jsx",
                            lineNumber: 371,
                            columnNumber: 466
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Reviews$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].quote,
                            children: review.quote
                        }, void 0, false, {
                            fileName: "[project]/src/components/Reviews.jsx",
                            lineNumber: 371,
                            columnNumber: 518
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Reviews$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].footer,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Reviews$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].name,
                                        children: review.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Reviews.jsx",
                                        lineNumber: 371,
                                        columnNumber: 600
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Reviews$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].role,
                                        children: review.role
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Reviews.jsx",
                                        lineNumber: 371,
                                        columnNumber: 644
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Reviews.jsx",
                                lineNumber: 371,
                                columnNumber: 595
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Reviews.jsx",
                            lineNumber: 371,
                            columnNumber: 564
                        }, this)
                    ]
                }, review.name, true, {
                    fileName: "[project]/src/components/Reviews.jsx",
                    lineNumber: 371,
                    columnNumber: 54
                }, this)
        }["Reviews[reviews.map()]"]);
        $[21] = visibleCount;
        $[22] = t14;
    } else {
        t14 = $[22];
    }
    let t15;
    if ($[23] !== t14) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Reviews$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].grid,
            children: t14
        }, void 0, false, {
            fileName: "[project]/src/components/Reviews.jsx",
            lineNumber: 380,
            columnNumber: 11
        }, this);
        $[23] = t14;
        $[24] = t15;
    } else {
        t15 = $[24];
    }
    let t16;
    if ($[25] !== t13 || $[26] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            ref: sectionRef,
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Reviews$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].section,
            id: "reviews",
            children: [
                t13,
                t15
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Reviews.jsx",
            lineNumber: 388,
            columnNumber: 11
        }, this);
        $[25] = t13;
        $[26] = t15;
        $[27] = t16;
    } else {
        t16 = $[27];
    }
    return t16;
}
_s(Reviews, "KcV3qw0qQl5a/2WXXlytSr6hkuY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useMediaQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ];
});
_c = Reviews;
const __TURBOPACK__default__export__ = Reviews;
var _c;
__turbopack_context__.k.register(_c, "Reviews");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/StatsAndFacts.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "card": "StatsAndFacts-module__duopOW__card",
  "copy": "StatsAndFacts-module__duopOW__copy",
  "eyebrow": "StatsAndFacts-module__duopOW__eyebrow",
  "eyebrowDot": "StatsAndFacts-module__duopOW__eyebrowDot",
  "eyebrowWrap": "StatsAndFacts-module__duopOW__eyebrowWrap",
  "grid": "StatsAndFacts-module__duopOW__grid",
  "intro": "StatsAndFacts-module__duopOW__intro",
  "introChar": "StatsAndFacts-module__duopOW__introChar",
  "introCharVisible": "StatsAndFacts-module__duopOW__introCharVisible",
  "introWord": "StatsAndFacts-module__duopOW__introWord",
  "label": "StatsAndFacts-module__duopOW__label",
  "labelStrong": "StatsAndFacts-module__duopOW__labelStrong",
  "labelSubtext": "StatsAndFacts-module__duopOW__labelSubtext",
  "section": "StatsAndFacts-module__duopOW__section",
  "value": "StatsAndFacts-module__duopOW__value",
});
}),
"[project]/src/components/StatsAndFacts.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$split$2d$type$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/split-type/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$StatsAndFacts$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/StatsAndFacts.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useMediaQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useMediaQuery.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const stats = [
    {
        value: 7,
        suffix: "+",
        title: "Year Experience",
        subtext: "of Tuning the Talent"
    },
    {
        value: 700,
        suffix: "+",
        title: "Students",
        subtext: "trained in creativity"
    },
    {
        value: 250,
        suffix: "+",
        title: "Placement",
        subtext: "Success Stories"
    },
    {
        value: 99,
        suffix: "%",
        title: "Positive",
        subtext: "Student Feedback"
    }
];
const introText = "I’m Vishant Kumar, founder of Imazine Us Academy, where we turn simple ideas into powerful creative skills and help students become future-ready creators.";
const countAnimationTriggerText = "I’m Vishant Kumar, founder of Imazine Us Academy";
function CountUpValue(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(6);
    if ($[0] !== "668dba32dd7524aed34667cea2722c41038c4facf2e8d5677d701b73e076b9b0") {
        for(let $i = 0; $i < 6; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "668dba32dd7524aed34667cea2722c41038c4facf2e8d5677d701b73e076b9b0";
    }
    const { value, suffix: t1, start: t2, active } = t0;
    const suffix = t1 === undefined ? "" : t1;
    const start = t2 === undefined ? 1 : t2;
    const [displayValue, setDisplayValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(start);
    let t3;
    let t4;
    if ($[1] !== active || $[2] !== start || $[3] !== value) {
        t3 = ({
            "CountUpValue[useEffect()]": ()=>{
                if (!active) {
                    return;
                }
                let frameId;
                const startTime = performance.now();
                const animate = {
                    "CountUpValue[useEffect() > animate]": (time)=>{
                        const progress = Math.min((time - startTime) / 1900, 1);
                        const eased = 1 - Math.pow(1 - progress, 3);
                        const nextValue = Math.round(start + (value - start) * eased);
                        setDisplayValue(nextValue);
                        if (progress < 1) {
                            frameId = window.requestAnimationFrame(animate);
                        }
                    }
                }["CountUpValue[useEffect() > animate]"];
                frameId = window.requestAnimationFrame(animate);
                return ()=>{
                    if (frameId) {
                        window.cancelAnimationFrame(frameId);
                    }
                };
            }
        })["CountUpValue[useEffect()]"];
        t4 = [
            active,
            start,
            value
        ];
        $[1] = active;
        $[2] = start;
        $[3] = value;
        $[4] = t3;
        $[5] = t4;
    } else {
        t3 = $[4];
        t4 = $[5];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t3, t4);
    return `${active ? displayValue : start}${suffix}`;
}
_s(CountUpValue, "fXT7DGP8k1DGJt4TEWtzJPBp7yI=");
_c = CountUpValue;
function StatsAndFacts() {
    _s1();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(15);
    if ($[0] !== "668dba32dd7524aed34667cea2722c41038c4facf2e8d5677d701b73e076b9b0") {
        for(let $i = 0; $i < 15; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "668dba32dd7524aed34667cea2722c41038c4facf2e8d5677d701b73e076b9b0";
    }
    const introRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const introCharsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(t0);
    const splitInstanceRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [statsActive, setStatsActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [countAnimationActive, setCountAnimationActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const isMobile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useMediaQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("(max-width: 540px)");
    const triggerCharCountRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(countAnimationTriggerText.length);
    let t1;
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ({
            "StatsAndFacts[useEffect()]": ()=>{
                if (!introRef.current || ("TURBOPACK compile-time value", "object") === "undefined") {
                    return;
                }
                const splitInstance = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$split$2d$type$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](introRef.current, {
                    types: "words, chars",
                    wordClass: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$StatsAndFacts$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].introWord,
                    charClass: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$StatsAndFacts$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].introChar
                });
                splitInstanceRef.current = splitInstance;
                introCharsRef.current = splitInstance.chars ?? [];
                triggerCharCountRef.current = Math.min(countAnimationTriggerText.length, introCharsRef.current.length);
                return ()=>{
                    introCharsRef.current = [];
                    splitInstanceRef.current?.revert();
                    splitInstanceRef.current = null;
                };
            }
        })["StatsAndFacts[useEffect()]"];
        t2 = [];
        $[2] = t1;
        $[3] = t2;
    } else {
        t1 = $[2];
        t2 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    let t3;
    let t4;
    if ($[4] !== isMobile || $[5] !== statsActive) {
        t3 = ({
            "StatsAndFacts[useEffect()]": ()=>{
                const introChars = introCharsRef.current;
                const totalChars = introChars.length;
                const triggerCharCount = triggerCharCountRef.current;
                const updateRevealCount = {
                    "StatsAndFacts[useEffect() > updateRevealCount]": (count)=>{
                        introChars.forEach({
                            "StatsAndFacts[useEffect() > updateRevealCount > introChars.forEach()]": (char, index)=>{
                                char.classList.toggle(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$StatsAndFacts$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].introCharVisible, index < count);
                            }
                        }["StatsAndFacts[useEffect() > updateRevealCount > introChars.forEach()]"]);
                    }
                }["StatsAndFacts[useEffect() > updateRevealCount]"];
                if (!statsActive) {
                    updateRevealCount(0);
                    return;
                }
                if (isMobile) {
                    let frameId = 0;
                    const startTime = performance.now();
                    const animateMobileReveal = {
                        "StatsAndFacts[useEffect() > animateMobileReveal]": (time)=>{
                            const progress = Math.min((time - startTime) / 1100, 1);
                            const eased = 1 - Math.pow(1 - progress, 3);
                            const nextCount = Math.round(totalChars * eased);
                            updateRevealCount(nextCount);
                            if (nextCount >= triggerCharCount) {
                                setCountAnimationActive(true);
                            }
                            if (progress < 1) {
                                frameId = window.requestAnimationFrame(animateMobileReveal);
                            }
                        }
                    }["StatsAndFacts[useEffect() > animateMobileReveal]"];
                    frameId = window.requestAnimationFrame(animateMobileReveal);
                    return ()=>{
                        if (frameId) {
                            window.cancelAnimationFrame(frameId);
                        }
                    };
                }
                let frameId_0 = 0;
                let ticking = false;
                const updateReveal = {
                    "StatsAndFacts[useEffect() > updateReveal]": ()=>{
                        if (!introRef.current) {
                            return;
                        }
                        const rect = introRef.current.getBoundingClientRect();
                        const viewportHeight = window.innerHeight;
                        const start = viewportHeight * 0.98;
                        const end = viewportHeight * 0.08;
                        const progress_0 = (start - rect.top) / (start - end) * 100;
                        const nextCount_0 = Math.round(Math.max(0, Math.min(100, progress_0)) / 100 * totalChars);
                        updateRevealCount(nextCount_0);
                        setCountAnimationActive(nextCount_0 >= triggerCharCount && triggerCharCount > 0);
                    }
                }["StatsAndFacts[useEffect() > updateReveal]"];
                const requestRevealUpdate = {
                    "StatsAndFacts[useEffect() > requestRevealUpdate]": ()=>{
                        if (ticking) {
                            return;
                        }
                        ticking = true;
                        frameId_0 = window.requestAnimationFrame({
                            "StatsAndFacts[useEffect() > requestRevealUpdate > window.requestAnimationFrame()]": ()=>{
                                ticking = false;
                                updateReveal();
                            }
                        }["StatsAndFacts[useEffect() > requestRevealUpdate > window.requestAnimationFrame()]"]);
                    }
                }["StatsAndFacts[useEffect() > requestRevealUpdate]"];
                updateReveal();
                window.addEventListener("scroll", requestRevealUpdate, {
                    passive: true
                });
                window.addEventListener("resize", requestRevealUpdate);
                return ()=>{
                    if (frameId_0) {
                        window.cancelAnimationFrame(frameId_0);
                    }
                    window.removeEventListener("scroll", requestRevealUpdate);
                    window.removeEventListener("resize", requestRevealUpdate);
                };
            }
        })["StatsAndFacts[useEffect()]"];
        t4 = [
            isMobile,
            statsActive
        ];
        $[4] = isMobile;
        $[5] = statsActive;
        $[6] = t3;
        $[7] = t4;
    } else {
        t3 = $[6];
        t4 = $[7];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t3, t4);
    let t5;
    let t6;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = ({
            "StatsAndFacts[useEffect()]": ()=>{
                if (!sectionRef.current) {
                    return;
                }
                const observer = new IntersectionObserver((t7)=>{
                    const [entry] = t7;
                    setStatsActive(entry.isIntersecting);
                    if (!entry.isIntersecting) {
                        setCountAnimationActive(false);
                    }
                }, {
                    threshold: 0.08,
                    rootMargin: "0px 0px -4% 0px"
                });
                observer.observe(sectionRef.current);
                return ()=>observer.disconnect();
            }
        })["StatsAndFacts[useEffect()]"];
        t6 = [];
        $[8] = t5;
        $[9] = t6;
    } else {
        t5 = $[8];
        t6 = $[9];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t5, t6);
    let t7;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$StatsAndFacts$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].copy,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$StatsAndFacts$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].eyebrowWrap,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$StatsAndFacts$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].eyebrowDot
                        }, void 0, false, {
                            fileName: "[project]/src/components/StatsAndFacts.jsx",
                            lineNumber: 276,
                            columnNumber: 75
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$StatsAndFacts$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].eyebrow,
                            children: "Offline Classes"
                        }, void 0, false, {
                            fileName: "[project]/src/components/StatsAndFacts.jsx",
                            lineNumber: 276,
                            columnNumber: 113
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/StatsAndFacts.jsx",
                    lineNumber: 276,
                    columnNumber: 39
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    ref: introRef,
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$StatsAndFacts$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].intro,
                    children: introText
                }, void 0, false, {
                    fileName: "[project]/src/components/StatsAndFacts.jsx",
                    lineNumber: 276,
                    columnNumber: 174
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/StatsAndFacts.jsx",
            lineNumber: 276,
            columnNumber: 10
        }, this);
        $[10] = t7;
    } else {
        t7 = $[10];
    }
    let t8;
    if ($[11] !== countAnimationActive) {
        t8 = stats.map({
            "StatsAndFacts[stats.map()]": (item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$StatsAndFacts$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].card,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$StatsAndFacts$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].value,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CountUpValue, {
                                active: countAnimationActive,
                                value: item.value,
                                suffix: item.suffix
                            }, `${item.title}-${countAnimationActive}`, false, {
                                fileName: "[project]/src/components/StatsAndFacts.jsx",
                                lineNumber: 284,
                                columnNumber: 124
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/StatsAndFacts.jsx",
                            lineNumber: 284,
                            columnNumber: 95
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$StatsAndFacts$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].label,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$StatsAndFacts$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].labelStrong,
                                    children: item.title
                                }, void 0, false, {
                                    fileName: "[project]/src/components/StatsAndFacts.jsx",
                                    lineNumber: 284,
                                    columnNumber: 289
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$StatsAndFacts$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].labelSubtext,
                                    children: item.subtext
                                }, void 0, false, {
                                    fileName: "[project]/src/components/StatsAndFacts.jsx",
                                    lineNumber: 284,
                                    columnNumber: 345
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/StatsAndFacts.jsx",
                            lineNumber: 284,
                            columnNumber: 261
                        }, this)
                    ]
                }, item.title, true, {
                    fileName: "[project]/src/components/StatsAndFacts.jsx",
                    lineNumber: 284,
                    columnNumber: 45
                }, this)
        }["StatsAndFacts[stats.map()]"]);
        $[11] = countAnimationActive;
        $[12] = t8;
    } else {
        t8 = $[12];
    }
    let t9;
    if ($[13] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            ref: sectionRef,
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$StatsAndFacts$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].section,
            children: [
                t7,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$StatsAndFacts$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].grid,
                    children: t8
                }, void 0, false, {
                    fileName: "[project]/src/components/StatsAndFacts.jsx",
                    lineNumber: 293,
                    columnNumber: 67
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/StatsAndFacts.jsx",
            lineNumber: 293,
            columnNumber: 10
        }, this);
        $[13] = t8;
        $[14] = t9;
    } else {
        t9 = $[14];
    }
    return t9;
}
_s1(StatsAndFacts, "Ae/RMfp8aAF96AEwwSHD4AxnZcM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useMediaQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ];
});
_c1 = StatsAndFacts;
const __TURBOPACK__default__export__ = StatsAndFacts;
var _c, _c1;
__turbopack_context__.k.register(_c, "CountUpValue");
__turbopack_context__.k.register(_c1, "StatsAndFacts");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/VideoEditing.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "btnIcon": "VideoEditing-module__Y0Gm_W__btnIcon",
  "btnLabel": "VideoEditing-module__Y0Gm_W__btnLabel",
  "buttonWhiteSweep": "VideoEditing-module__Y0Gm_W__buttonWhiteSweep",
  "enrollButton": "VideoEditing-module__Y0Gm_W__enrollButton",
  "heading": "VideoEditing-module__Y0Gm_W__heading",
  "headingWrap": "VideoEditing-module__Y0Gm_W__headingWrap",
  "section": "VideoEditing-module__Y0Gm_W__section",
  "subheading": "VideoEditing-module__Y0Gm_W__subheading",
  "video": "VideoEditing-module__Y0Gm_W__video",
  "videoFrame": "VideoEditing-module__Y0Gm_W__videoFrame",
});
}),
"[project]/src/components/VideoEditing.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$VideoEditing$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/VideoEditing.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useMediaQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useMediaQuery.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function VideoEditing() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(16);
    if ($[0] !== "695ab7780d549d3ed673998ab549d7301b84b71a81d000ec039f176ec68fa71d") {
        for(let $i = 0; $i < 16; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "695ab7780d549d3ed673998ab549d7301b84b71a81d000ec039f176ec68fa71d";
    }
    const isMobileViewport = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useMediaQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("(max-width: 540px)");
    let t0;
    if ($[1] !== isMobileViewport) {
        t0 = isMobileViewport ? {
            webm: "/video/video%20editing%20mobile%20view.webm",
            mp4: "/video/video%20editing%20mobile%20view.mp4"
        } : {
            webm: "/video/video%20editing.webm",
            mp4: "/video/video%20editing.mp4"
        };
        $[1] = isMobileViewport;
        $[2] = t0;
    } else {
        t0 = $[2];
    }
    const videoSources = t0;
    let t1;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$VideoEditing$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].headingWrap,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$VideoEditing$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].heading,
                    children: "DOCUMENTARY STYLE VIDEO EDITING"
                }, void 0, false, {
                    fileName: "[project]/src/components/VideoEditing.jsx",
                    lineNumber: 33,
                    columnNumber: 46
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$VideoEditing$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].subheading,
                    children: "and filmmaking course"
                }, void 0, false, {
                    fileName: "[project]/src/components/VideoEditing.jsx",
                    lineNumber: 33,
                    columnNumber: 113
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/VideoEditing.jsx",
            lineNumber: 33,
            columnNumber: 10
        }, this);
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    const t2 = `${videoSources.webm}-${videoSources.mp4}`;
    let t3;
    if ($[4] !== videoSources.webm) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
            src: videoSources.webm,
            type: "video/webm"
        }, void 0, false, {
            fileName: "[project]/src/components/VideoEditing.jsx",
            lineNumber: 41,
            columnNumber: 10
        }, this);
        $[4] = videoSources.webm;
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    let t4;
    if ($[6] !== videoSources.mp4) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
            src: videoSources.mp4,
            type: "video/mp4"
        }, void 0, false, {
            fileName: "[project]/src/components/VideoEditing.jsx",
            lineNumber: 49,
            columnNumber: 10
        }, this);
        $[6] = videoSources.mp4;
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    let t5;
    if ($[8] !== t2 || $[9] !== t3 || $[10] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$VideoEditing$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].video,
            autoPlay: true,
            muted: true,
            loop: true,
            playsInline: true,
            preload: "metadata",
            children: [
                t3,
                t4,
                "Your browser does not support the video tag."
            ]
        }, t2, true, {
            fileName: "[project]/src/components/VideoEditing.jsx",
            lineNumber: 57,
            columnNumber: 10
        }, this);
        $[8] = t2;
        $[9] = t3;
        $[10] = t4;
        $[11] = t5;
    } else {
        t5 = $[11];
    }
    let t6;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$VideoEditing$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].btnLabel,
            children: "ENROLL NOW"
        }, void 0, false, {
            fileName: "[project]/src/components/VideoEditing.jsx",
            lineNumber: 67,
            columnNumber: 10
        }, this);
        $[12] = t6;
    } else {
        t6 = $[12];
    }
    let t7;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: "#inquiry",
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$VideoEditing$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].enrollButton,
            children: [
                t6,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$VideoEditing$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].btnIcon,
                    "aria-hidden": "true",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                        opacity: "1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: "10.2004",
                                cy: "7.1999",
                                r: "1.8",
                                fill: "currentColor"
                            }, void 0, false, {
                                fileName: "[project]/src/components/VideoEditing.jsx",
                                lineNumber: 74,
                                columnNumber: 224
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: "10.2004",
                                cy: "16.8",
                                r: "1.8",
                                fill: "currentColor"
                            }, void 0, false, {
                                fileName: "[project]/src/components/VideoEditing.jsx",
                                lineNumber: 74,
                                columnNumber: 287
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: "14.9992",
                                cy: "12.0002",
                                r: "1.8",
                                fill: "currentColor"
                            }, void 0, false, {
                                fileName: "[project]/src/components/VideoEditing.jsx",
                                lineNumber: 74,
                                columnNumber: 348
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/VideoEditing.jsx",
                        lineNumber: 74,
                        columnNumber: 209
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/VideoEditing.jsx",
                    lineNumber: 74,
                    columnNumber: 68
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/VideoEditing.jsx",
            lineNumber: 74,
            columnNumber: 10
        }, this);
        $[13] = t7;
    } else {
        t7 = $[13];
    }
    let t8;
    if ($[14] !== t5) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$VideoEditing$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].section,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$VideoEditing$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].videoFrame,
                children: [
                    t1,
                    t5,
                    t7
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/VideoEditing.jsx",
                lineNumber: 81,
                columnNumber: 46
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/VideoEditing.jsx",
            lineNumber: 81,
            columnNumber: 10
        }, this);
        $[14] = t5;
        $[15] = t8;
    } else {
        t8 = $[15];
    }
    return t8;
}
_s(VideoEditing, "gAx/lkfAl3k1hqorY+Vg3OVyu0I=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useMediaQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ];
});
_c = VideoEditing;
const __TURBOPACK__default__export__ = VideoEditing;
var _c;
__turbopack_context__.k.register(_c, "VideoEditing");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_0sd-1iq._.js.map