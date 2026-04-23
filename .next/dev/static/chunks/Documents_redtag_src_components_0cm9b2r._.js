(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/redtag/src/components/SearchCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SearchCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/redtag/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/redtag/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/redtag/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$src$2f$utils$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/redtag/src/utils/data.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function SearchCard() {
    _s();
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Vacations Packages");
    const [input, setInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const config = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$src$2f$utils$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TABS"].find((t)=>t.label === activeTab) || __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$src$2f$utils$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TABS"][0];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "lg:pt-12",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-2xl shadow-2xl w-full max-w-full p-0 overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex border-b border-gray-100 px-2 md:px-4 overflow-x-auto",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$src$2f$utils$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TABS"].map((tab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setActiveTab(tab.label),
                                className: `flex items-center gap-1.5 px-3 py-3.5 text-[14px] font-semibold whitespace-nowrap border-b-2 transition-colors ${activeTab === tab.label ? "border-[#00537A] text-[#00537A]" : "border-transparent text-[#333] hover:text-[#00537A]"}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative w-4 h-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: tab.icon,
                                            alt: tab.label,
                                            width: 16,
                                            height: 16,
                                            className: "object-contain"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/redtag/src/components/SearchCard.tsx",
                                            lineNumber: 30,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/redtag/src/components/SearchCard.tsx",
                                        lineNumber: 29,
                                        columnNumber: 15
                                    }, this),
                                    tab.label
                                ]
                            }, tab.label, true, {
                                fileName: "[project]/Documents/redtag/src/components/SearchCard.tsx",
                                lineNumber: 20,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Documents/redtag/src/components/SearchCard.tsx",
                        lineNumber: 18,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 md:p-5 space-y-3",
                        children: [
                            config.showFrom && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border border-[#DDD] rounded-[50px] py-2 px-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-black uppercase font-semibold mb-1",
                                        children: "From:"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/redtag/src/components/SearchCard.tsx",
                                        lineNumber: 46,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        defaultValue: "Toronto (YYZ)",
                                        className: "text-sm font-normal text-gray-800 w-full outline-none"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/redtag/src/components/SearchCard.tsx",
                                        lineNumber: 47,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/redtag/src/components/SearchCard.tsx",
                                lineNumber: 45,
                                columnNumber: 13
                            }, this),
                            config.showTo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border border-[#DDD] rounded-[50px] py-2 px-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[14px] text-black uppercase font-semibold mb-1",
                                        children: "To:"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/redtag/src/components/SearchCard.tsx",
                                        lineNumber: 58,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        placeholder: "Please select a destination or hotel",
                                        className: "text-sm text-gray-800 w-full outline-none placeholder:text-gray-800"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/redtag/src/components/SearchCard.tsx",
                                        lineNumber: 59,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/redtag/src/components/SearchCard.tsx",
                                lineNumber: 57,
                                columnNumber: 13
                            }, this),
                            (config.showDates || config.showTravellers) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col xs:flex-row gap-4",
                                children: [
                                    config.showDates && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 border border-[#DDD] rounded-[50px] py-2 px-8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[14px] text-black font-semibold mb-1",
                                                children: "Dates:"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/redtag/src/components/SearchCard.tsx",
                                                lineNumber: 70,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        defaultValue: "May 17 - May 24",
                                                        className: "text-sm font-normal text-gray-800 w-full outline-none"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/redtag/src/components/SearchCard.tsx",
                                                        lineNumber: 72,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        className: "w-4 h-4 text-gray-800 shrink-0",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        viewBox: "0 0 24 24",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            strokeWidth: 1.5,
                                                            d: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/redtag/src/components/SearchCard.tsx",
                                                            lineNumber: 78,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/redtag/src/components/SearchCard.tsx",
                                                        lineNumber: 77,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/redtag/src/components/SearchCard.tsx",
                                                lineNumber: 71,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/redtag/src/components/SearchCard.tsx",
                                        lineNumber: 69,
                                        columnNumber: 17
                                    }, this),
                                    config.showTravellers && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 border border-[#DDD] rounded-[50px] py-2 px-8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[14px] text-black font-semibold mb-1",
                                                children: "Travellers & Rooms"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/redtag/src/components/SearchCard.tsx",
                                                lineNumber: 85,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                defaultValue: "2 adults · 1 room",
                                                className: "text-sm font-normal text-gray-800 w-full outline-none"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/redtag/src/components/SearchCard.tsx",
                                                lineNumber: 86,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/redtag/src/components/SearchCard.tsx",
                                        lineNumber: 84,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/redtag/src/components/SearchCard.tsx",
                                lineNumber: 67,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full flex items-center gap-3 mt-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-full flex items-center rounded-[40px] py-2 pl-3 pr-1.5 border border-[#ddd]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "h-[30px] flex mr-2 items-center gap-1.5 text-xs text-black font-semibold shrink-0 bg-[#F0F1F1] rounded-3xl px-4 py-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    width: "14",
                                                    height: "14",
                                                    viewBox: "0 0 14 14",
                                                    fill: "none",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M9.26377 2.56382C9.16533 2.60101 9.09971 2.69507 9.09971 2.80007C9.09971 2.90507 9.16533 2.99914 9.26377 3.03632L10.4997 3.50007L10.9635 4.73601C11.0006 4.83445 11.0947 4.90007 11.1997 4.90007C11.3047 4.90007 11.3988 4.83445 11.436 4.73601L11.8997 3.50007L13.1356 3.03632C13.2341 2.99914 13.2997 2.90507 13.2997 2.80007C13.2997 2.69507 13.2341 2.60101 13.1356 2.56382L11.8997 2.10007L11.436 0.864136C11.3988 0.765698 11.3047 0.700073 11.1997 0.700073C11.0947 0.700073 11.0006 0.765698 10.9635 0.864136L10.4997 2.10007L9.26377 2.56382ZM4.37252 5.96101L4.89971 4.82132L5.4269 5.96101C5.5319 6.18851 5.71346 6.37007 5.94096 6.47507L7.08065 7.00226L5.94096 7.52945C5.71346 7.63445 5.5319 7.81601 5.4269 8.04351L4.89971 9.1832L4.37252 8.04351C4.26752 7.81601 4.08596 7.63445 3.85846 7.52945L2.71877 7.00007L3.86064 6.47289C4.08814 6.36789 4.26971 6.18632 4.37471 5.95882L4.37252 5.96101ZM4.32221 3.56789L3.42096 5.52132L1.46752 6.42257L1.45439 6.42914C1.36908 6.46851 1.18533 6.55382 0.903145 6.68289C0.778457 6.73976 0.699707 6.86445 0.699707 7.00007C0.699707 7.1357 0.778457 7.26039 0.903145 7.31726C1.18533 7.44632 1.36689 7.53164 1.45439 7.57101L1.46752 7.57757L3.42096 8.47882L4.32221 10.4323L4.32877 10.4454C4.36814 10.5307 4.45346 10.7144 4.58252 10.9966C4.63939 11.1213 4.76408 11.2001 4.89971 11.2001C5.03533 11.2001 5.16002 11.1213 5.21689 10.9966C5.53189 10.3163 5.54721 10.2813 6.37846 8.48101L8.33189 7.57976L8.34502 7.5732C8.43033 7.53382 8.61408 7.44851 8.89627 7.31945C9.02096 7.26257 9.09971 7.13789 9.09971 7.00226C9.09971 6.86664 9.02096 6.74195 8.89627 6.68507C8.21596 6.37007 8.18096 6.35476 6.38065 5.52351L5.47939 3.57007L5.47283 3.55695C5.43346 3.47164 5.34815 3.28789 5.21908 3.0057C5.16221 2.88101 5.03752 2.80226 4.9019 2.80226C4.76627 2.80226 4.64158 2.88101 4.58471 3.0057C4.28283 3.65757 4.33314 3.55257 4.32439 3.57007L4.32221 3.56789ZM9.79971 10.5001L8.56377 10.9638C8.46533 11.001 8.39971 11.0951 8.39971 11.2001C8.39971 11.3051 8.46533 11.3991 8.56377 11.4363L9.79971 11.9001L10.2635 13.136C10.3006 13.2344 10.3947 13.3001 10.4997 13.3001C10.6047 13.3001 10.6988 13.2344 10.736 13.136L11.1997 11.9001L12.4356 11.4363C12.5341 11.3991 12.5997 11.3051 12.5997 11.2001C12.5997 11.0951 12.5341 11.001 12.4356 10.9638L11.1997 10.5001L10.736 9.26414C10.6988 9.1657 10.6047 9.10007 10.4997 9.10007C10.3947 9.10007 10.3006 9.1657 10.2635 9.26414L9.79971 10.5001Z",
                                                        fill: "#333333"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/redtag/src/components/SearchCard.tsx",
                                                        lineNumber: 100,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/redtag/src/components/SearchCard.tsx",
                                                    lineNumber: 99,
                                                    columnNumber: 17
                                                }, this),
                                                "AI Search"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/redtag/src/components/SearchCard.tsx",
                                            lineNumber: 98,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1 flex items-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                value: input,
                                                onChange: (e)=>setInput(e.target.value),
                                                placeholder: "",
                                                className: "w-full text-sm text-[#333] outline-none placeholder-[#808080]"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/redtag/src/components/SearchCard.tsx",
                                                lineNumber: 105,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/redtag/src/components/SearchCard.tsx",
                                            lineNumber: 104,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "w-8 h-8 bg-[#CA2129] hover:bg-red-700 rounded-full flex items-center justify-center transition-colors shrink-0",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "w-3.5 h-3.5 text-white",
                                                fill: "none",
                                                stroke: "currentColor",
                                                viewBox: "0 0 24 24",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: 2.5,
                                                    d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/redtag/src/components/SearchCard.tsx",
                                                    lineNumber: 115,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/redtag/src/components/SearchCard.tsx",
                                                lineNumber: 114,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/redtag/src/components/SearchCard.tsx",
                                            lineNumber: 113,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/redtag/src/components/SearchCard.tsx",
                                    lineNumber: 97,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/redtag/src/components/SearchCard.tsx",
                                lineNumber: 96,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/redtag/src/components/SearchCard.tsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/redtag/src/components/SearchCard.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-white text-[14px] text-left lg:text-right pt-8 lg:pt-12",
                children: "*Per booking. Certain conditions apply. Click for terms and conditions."
            }, void 0, false, {
                fileName: "[project]/Documents/redtag/src/components/SearchCard.tsx",
                lineNumber: 122,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/redtag/src/components/SearchCard.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
_s(SearchCard, "WVzRbDmLdXs13q5iBruAog3rQk4=");
_c = SearchCard;
var _c;
__turbopack_context__.k.register(_c, "SearchCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/redtag/src/components/FilterPills.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FilterPills
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/redtag/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/redtag/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$src$2f$utils$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/redtag/src/utils/data.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function FilterPills() {
    _s();
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("All inclusive");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "border-b border-gray-100 mx-auto max-w-[1920px]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-full mx-auto px-4 md:px-6 2lg:px-12 py-3 flex  gap-2 whitespace-nowrap overflow-auto",
            children: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$src$2f$utils$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FILTERS"].map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>setActive(f),
                    className: `px-5 py-1.5 rounded-full text-sm font-medium border transition-colors ${active === f ? "bg-white text-[#292A2D] border-[#CA2129]" : "bg-white text-[#292A2D] border-gray-200 hover:border-[#CA2129] hover:text-[#292A2D]"}`,
                    children: f
                }, f, false, {
                    fileName: "[project]/Documents/redtag/src/components/FilterPills.tsx",
                    lineNumber: 12,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/Documents/redtag/src/components/FilterPills.tsx",
            lineNumber: 10,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/redtag/src/components/FilterPills.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
_s(FilterPills, "d1gGneHpk91RuvCa0Z2PD/eAvSk=");
_c = FilterPills;
var _c;
__turbopack_context__.k.register(_c, "FilterPills");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/redtag/src/components/common/EmblaSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EmblaSection",
    ()=>EmblaSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/redtag/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/redtag/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$node_modules$2f$embla$2d$carousel$2d$react$2f$esm$2f$embla$2d$carousel$2d$react$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/redtag/node_modules/embla-carousel-react/esm/embla-carousel-react.esm.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function EmblaSection({ title, items, renderItem }) {
    _s();
    const [emblaRef, emblaApi] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$node_modules$2f$embla$2d$carousel$2d$react$2f$esm$2f$embla$2d$carousel$2d$react$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        loop: true,
        align: "start"
    });
    const [isPrevActive, setIsPrevActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const scrollPrev = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "EmblaSection.useCallback[scrollPrev]": ()=>{
            if (emblaApi) {
                emblaApi.scrollPrev();
                setIsPrevActive(true);
            }
        }
    }["EmblaSection.useCallback[scrollPrev]"], [
        emblaApi
    ]);
    const scrollNext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "EmblaSection.useCallback[scrollNext]": ()=>{
            if (emblaApi) {
                emblaApi.scrollNext();
                setIsPrevActive(true);
            }
        }
    }["EmblaSection.useCallback[scrollNext]"], [
        emblaApi
    ]);
    const activeStyle = "border-[#CA2129] text-[#CA2129] hover:bg-[#CA2129] hover:text-white";
    const disabledStyle = "border-gray-200 text-gray-300";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "max-w-[1920px] mx-auto px-4 md:px-6 2lg:px-12 py-6 lg:py-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between mb-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/Documents/redtag/src/components/common/EmblaSection.tsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden md:flex gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: scrollPrev,
                                className: `w-8 h-8 font-semibold rounded-full border transition-colors flex items-center justify-center ${isPrevActive ? activeStyle : disabledStyle}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-3.5 h-3.5",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 3,
                                        d: "M15 19l-7-7 7-7"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/redtag/src/components/common/EmblaSection.tsx",
                                        lineNumber: 50,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/redtag/src/components/common/EmblaSection.tsx",
                                    lineNumber: 49,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/redtag/src/components/common/EmblaSection.tsx",
                                lineNumber: 43,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: scrollNext,
                                className: `w-8 h-8 font-semibold rounded-full border transition-colors flex items-center justify-center ${activeStyle}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-3.5 h-3.5",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 3,
                                        d: "M9 5l7 7-7 7"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/redtag/src/components/common/EmblaSection.tsx",
                                        lineNumber: 60,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/redtag/src/components/common/EmblaSection.tsx",
                                    lineNumber: 59,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/redtag/src/components/common/EmblaSection.tsx",
                                lineNumber: 55,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/redtag/src/components/common/EmblaSection.tsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/redtag/src/components/common/EmblaSection.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "overflow-hidden",
                ref: emblaRef,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex -ml-4",
                    children: items.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-[0_0_90%] md:flex-[0_0_32%] lg:flex-[0_0_25%] min-w-0 pl-4",
                            children: renderItem(item)
                        }, index, false, {
                            fileName: "[project]/Documents/redtag/src/components/common/EmblaSection.tsx",
                            lineNumber: 69,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Documents/redtag/src/components/common/EmblaSection.tsx",
                    lineNumber: 67,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/redtag/src/components/common/EmblaSection.tsx",
                lineNumber: 66,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/redtag/src/components/common/EmblaSection.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
_s(EmblaSection, "hoy6WHJ35mIEnr1YP83g7V2rvKc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$node_modules$2f$embla$2d$carousel$2d$react$2f$esm$2f$embla$2d$carousel$2d$react$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ];
});
_c = EmblaSection;
var _c;
__turbopack_context__.k.register(_c, "EmblaSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/redtag/src/components/PopularDestinations.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PopularDestinations
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/redtag/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/redtag/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$src$2f$components$2f$common$2f$EmblaSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/redtag/src/components/common/EmblaSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$src$2f$utils$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/redtag/src/utils/data.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function DestCard({ country, city, price, image }) {
    _s();
    const [liked, setLiked] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative rounded-2xl overflow-hidden cursor-pointer group",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: image,
                alt: city,
                className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            }, void 0, false, {
                fileName: "[project]/Documents/redtag/src/components/PopularDestinations.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-black/40"
            }, void 0, false, {
                fileName: "[project]/Documents/redtag/src/components/PopularDestinations.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setLiked(!liked),
                className: "absolute top-3 right-3 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    className: `w-4 h-4 ${liked ? "fill-[#CA2129] text-[#CA2129]" : "text-white fill-none"}`,
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    }, void 0, false, {
                        fileName: "[project]/Documents/redtag/src/components/PopularDestinations.tsx",
                        lineNumber: 13,
                        columnNumber: 146
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/redtag/src/components/PopularDestinations.tsx",
                    lineNumber: 13,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/redtag/src/components/PopularDestinations.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-0 left-0 right-0 px-4 py-10 text-white",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "bg-white text-black backdrop-blur-sm text-[14px] font-medium px-4 py-0.5 rounded-full mb-4 inline-block",
                        children: country
                    }, void 0, false, {
                        fileName: "[project]/Documents/redtag/src/components/PopularDestinations.tsx",
                        lineNumber: 16,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-[30px] 2lg:text-4xl font-semibold leading-none mb-2",
                        children: city
                    }, void 0, false, {
                        fileName: "[project]/Documents/redtag/src/components/PopularDestinations.tsx",
                        lineNumber: 17,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "font-bold text-2xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-normal text-[14px]",
                                children: "from"
                            }, void 0, false, {
                                fileName: "[project]/Documents/redtag/src/components/PopularDestinations.tsx",
                                lineNumber: 18,
                                columnNumber: 43
                            }, this),
                            " $",
                            price.replace("$", ""),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-normal text-[14px]",
                                children: "/pp"
                            }, void 0, false, {
                                fileName: "[project]/Documents/redtag/src/components/PopularDestinations.tsx",
                                lineNumber: 18,
                                columnNumber: 122
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/redtag/src/components/PopularDestinations.tsx",
                        lineNumber: 18,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/redtag/src/components/PopularDestinations.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/redtag/src/components/PopularDestinations.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
_s(DestCard, "5oFMLl0KA2P+7Df5hTCAaQ+yYE8=");
_c = DestCard;
function PopularDestinations() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$src$2f$components$2f$common$2f$EmblaSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EmblaSection"], {
        title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-[32px] font-medium text-[#00537A]",
            children: "Popular Destinations"
        }, void 0, false, {
            fileName: "[project]/Documents/redtag/src/components/PopularDestinations.tsx",
            lineNumber: 27,
            columnNumber: 14
        }, this),
        items: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$src$2f$utils$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DESTINATIONS"],
        renderItem: (d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DestCard, {
                ...d
            }, void 0, false, {
                fileName: "[project]/Documents/redtag/src/components/PopularDestinations.tsx",
                lineNumber: 29,
                columnNumber: 26
            }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/redtag/src/components/PopularDestinations.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
_c1 = PopularDestinations;
var _c, _c1;
__turbopack_context__.k.register(_c, "DestCard");
__turbopack_context__.k.register(_c1, "PopularDestinations");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/redtag/src/components/FlashDeals.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FlashDeals
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/redtag/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$src$2f$components$2f$common$2f$EmblaSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/redtag/src/components/common/EmblaSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/redtag/node_modules/next/image.js [app-client] (ecmascript)");
"use client";
;
;
;
const DEALS = [
    {
        location: "Cancun",
        name: "Moon Palace Resort",
        discount: 32,
        nights: "May 17 to 24 · 7 nights",
        type: "All inclusive",
        packageType: "Flight + Hotel",
        price: "$1,249",
        image: "/images/deals/deal1.jpg"
    },
    {
        location: "Punta Cana",
        name: "Iberostar Selection",
        discount: 18,
        nights: "May 20 to 24 · 5 nights",
        type: "All inclusive",
        packageType: "Flight + Hotel",
        price: "$989",
        image: "/images/deals/deal2.jpg"
    },
    {
        location: "Varadero",
        name: "Melia Las Americas",
        discount: 24,
        nights: "May 17 to 24 · 7 nights",
        type: "All inclusive",
        packageType: "Flight + Hotel",
        price: "$949",
        image: "/images/deals/deal3.jpg"
    },
    {
        location: "Varadero",
        name: "Melia Las Americas",
        discount: 14,
        nights: "May 17 to 24 · 7 nights",
        type: "Breakfast",
        packageType: "Flight + Hotel",
        price: "$1,599",
        image: "/images/deals/deal4.jpg"
    },
    {
        location: "Punta Cana",
        name: "Iberostar Selection",
        discount: 18,
        nights: "May 20 to 24 · 5 nights",
        type: "All inclusive",
        packageType: "Flight + Hotel",
        price: "$989",
        image: "/images/deals/deal2.jpg"
    },
    {
        location: "Cancun",
        name: "Moon Palace Resort",
        discount: 32,
        nights: "May 17 to 24 · 7 nights",
        type: "All inclusive",
        packageType: "Flight + Hotel",
        price: "$1,249",
        image: "/images/deals/deal1.jpg"
    }
];
function DealCard({ deal }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-md transition-shadow cursor-pointer h-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: deal.image,
                    alt: deal.name,
                    className: "w-full h-32 lg:h-40 object-cover hover:scale-105 transition-transform duration-500"
                }, void 0, false, {
                    fileName: "[project]/Documents/redtag/src/components/FlashDeals.tsx",
                    lineNumber: 84,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/redtag/src/components/FlashDeals.tsx",
                lineNumber: 83,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between gap-2 mb-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "backdrop-blur-sm text-[#757575] text-[14px] font-medium px-0 py-0.5 rounded-full",
                                children: deal.location
                            }, void 0, false, {
                                fileName: "[project]/Documents/redtag/src/components/FlashDeals.tsx",
                                lineNumber: 89,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: " bg-[#B91C1C] text-white text-[10px] font-bold px-2 py-0.5 rounded-full",
                                children: [
                                    "-",
                                    deal.discount,
                                    "%"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/redtag/src/components/FlashDeals.tsx",
                                lineNumber: 92,
                                columnNumber: 10
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/redtag/src/components/FlashDeals.tsx",
                        lineNumber: 88,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                        className: "font-bold text-gray-900 text-[20px]",
                        children: deal.name
                    }, void 0, false, {
                        fileName: "[project]/Documents/redtag/src/components/FlashDeals.tsx",
                        lineNumber: 97,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-row flex-wrap gap-3 mt-1.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1 text-[11px] text-[#757575] border-r-[0.5px] border-[#757575] pr-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "w-3 h-3",
                                        fill: "none",
                                        stroke: "currentColor",
                                        viewBox: "0 0 24 24",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/redtag/src/components/FlashDeals.tsx",
                                            lineNumber: 101,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/redtag/src/components/FlashDeals.tsx",
                                        lineNumber: 100,
                                        columnNumber: 13
                                    }, this),
                                    deal.nights
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/redtag/src/components/FlashDeals.tsx",
                                lineNumber: 99,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1 text-[11px] text-[#757575] border-r-[0.5px] border-[#757575] pr-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "w-3 h-3",
                                        fill: "none",
                                        stroke: "currentColor",
                                        viewBox: "0 0 24 24",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/redtag/src/components/FlashDeals.tsx",
                                            lineNumber: 107,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/redtag/src/components/FlashDeals.tsx",
                                        lineNumber: 106,
                                        columnNumber: 13
                                    }, this),
                                    deal.type
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/redtag/src/components/FlashDeals.tsx",
                                lineNumber: 105,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1 text-[11px] text-[#757575]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "w-3 h-3",
                                        fill: "none",
                                        stroke: "currentColor",
                                        viewBox: "0 0 24 24",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/redtag/src/components/FlashDeals.tsx",
                                            lineNumber: 113,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/redtag/src/components/FlashDeals.tsx",
                                        lineNumber: 112,
                                        columnNumber: 13
                                    }, this),
                                    deal.packageType
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/redtag/src/components/FlashDeals.tsx",
                                lineNumber: 111,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/redtag/src/components/FlashDeals.tsx",
                        lineNumber: 98,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4 pt-2 border-t border-gray-100",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[14px] text-[#1C75BC]",
                                children: "from "
                            }, void 0, false, {
                                fileName: "[project]/Documents/redtag/src/components/FlashDeals.tsx",
                                lineNumber: 119,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[#1C75BC] font-semibold text-[20px]",
                                children: deal.price
                            }, void 0, false, {
                                fileName: "[project]/Documents/redtag/src/components/FlashDeals.tsx",
                                lineNumber: 120,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[14px] text-[#757575]",
                                children: "/pp"
                            }, void 0, false, {
                                fileName: "[project]/Documents/redtag/src/components/FlashDeals.tsx",
                                lineNumber: 121,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/redtag/src/components/FlashDeals.tsx",
                        lineNumber: 118,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/redtag/src/components/FlashDeals.tsx",
                lineNumber: 87,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/redtag/src/components/FlashDeals.tsx",
        lineNumber: 82,
        columnNumber: 5
    }, this);
}
_c = DealCard;
function FlashDeals() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$src$2f$components$2f$common$2f$EmblaSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EmblaSection"], {
        title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-[32px] font-medium text-[#CA2129] flex flex-col xs:flex-row items-center gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "w-full xs:w-auto flex items-center gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: "/images/icons/flash.svg",
                            alt: "flash icon",
                            width: 24,
                            height: 24,
                            className: "w-6 h-6"
                        }, void 0, false, {
                            fileName: "[project]/Documents/redtag/src/components/FlashDeals.tsx",
                            lineNumber: 133,
                            columnNumber: 70
                        }, this),
                        " Flash Deals"
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/redtag/src/components/FlashDeals.tsx",
                    lineNumber: 133,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-[32px] font-normal text-[#00537A]",
                    children: "· Updated Hourly"
                }, void 0, false, {
                    fileName: "[project]/Documents/redtag/src/components/FlashDeals.tsx",
                    lineNumber: 138,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/redtag/src/components/FlashDeals.tsx",
            lineNumber: 132,
            columnNumber: 9
        }, this),
        items: DEALS,
        renderItem: (deal)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DealCard, {
                deal: deal
            }, void 0, false, {
                fileName: "[project]/Documents/redtag/src/components/FlashDeals.tsx",
                lineNumber: 142,
                columnNumber: 29
            }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/redtag/src/components/FlashDeals.tsx",
        lineNumber: 130,
        columnNumber: 5
    }, this);
}
_c1 = FlashDeals;
var _c, _c1;
__turbopack_context__.k.register(_c, "DealCard");
__turbopack_context__.k.register(_c1, "FlashDeals");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/redtag/src/components/AIAssistant.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AIAssistant
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/redtag/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/redtag/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
const RESULTS = [
    {
        destination: "CANCUN · 7 NIGHTS",
        nights: "7 nights",
        hotel: "May 17 · Moon Palace",
        date: "",
        price: "$2,349",
        badge: "Best match",
        badgeColor: "bg-[#B91C1C]"
    },
    {
        destination: "VARADERO · 7 NIGHTS",
        nights: "7 nights",
        hotel: "May 17 · Melia Las Americas",
        date: "",
        price: "$1,899",
        badge: "Best value",
        badgeColor: "bg-[#B91C1C]"
    },
    {
        destination: "PUNTA CANA · 7 NIGHTS",
        nights: "7 nights",
        hotel: "May 18 · Iberostar",
        date: "",
        price: "$2,198",
        badge: "Popular",
        badgeColor: "bg-[#B91C1C]"
    },
    {
        destination: "VARADERO · 7 NIGHTS",
        nights: "7 nights",
        hotel: "May 17 · Melia Las Americas",
        date: "",
        price: "$1,899",
        badge: "Best match",
        badgeColor: "bg-[#B91C1C]"
    }
];
const CHIPS = [
    "Which has the best beach?",
    "More on Cuba",
    "Extend to 10 nights",
    "Flight times"
];
function AIAssistant() {
    _s();
    const [input, setInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "bg-[#F2F3F3] py-12",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-4xl mx-auto px-4 md:px-6 lg:px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "inline-flex items-center gap-1.5 text-xs text-black font-medium mb-2 rounded-[40px] py-1 px-2 bg-white",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-3.5 h-3.5",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M13 10V3L4 14h7v7l9-11h-7z"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/redtag/src/components/AIAssistant.tsx",
                                        lineNumber: 33,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/redtag/src/components/AIAssistant.tsx",
                                    lineNumber: 32,
                                    columnNumber: 13
                                }, this),
                                "AI Assistant"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/redtag/src/components/AIAssistant.tsx",
                            lineNumber: 31,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-[32px] font-medium text-[#00537A]",
                            children: "AI Trip Assistant"
                        }, void 0, false, {
                            fileName: "[project]/Documents/redtag/src/components/AIAssistant.tsx",
                            lineNumber: 37,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/redtag/src/components/AIAssistant.tsx",
                    lineNumber: 30,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between px-5 py-3 border-b border-gray-100",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "w-2 h-2 bg-[#80C600] rounded-full"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/redtag/src/components/AIAssistant.tsx",
                                            lineNumber: 45,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm font-semibold text-gray-700",
                                            children: "redtag AI"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/redtag/src/components/AIAssistant.tsx",
                                            lineNumber: 46,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/redtag/src/components/AIAssistant.tsx",
                                    lineNumber: 44,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm text-[#808080]",
                                    children: "Searching 50,000+ live packages"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/redtag/src/components/AIAssistant.tsx",
                                    lineNumber: 48,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/redtag/src/components/AIAssistant.tsx",
                            lineNumber: 43,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-5 space-y-4 min-h-[300px]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-end",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-[#00537A] text-white text-sm px-4 py-3 rounded-2xl rounded-br-sm max-w-[88%] xs:max-w-xs leading-relaxed",
                                        children: "I want a beach vacation for 2, leaving Toronto around May long weekend, budget around $2,500 total. Somewhere warm, and all-inclusive."
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/redtag/src/components/AIAssistant.tsx",
                                        lineNumber: 54,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/redtag/src/components/AIAssistant.tsx",
                                    lineNumber: 53,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "w-5 h-5 bg-red-600 rounded-full flex items-center justify-center",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        width: "14",
                                                        height: "14",
                                                        viewBox: "0 0 14 14",
                                                        fill: "none",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                                                "clip-path": "url(#clip0_213_3600)",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    d: "M9.26377 2.5637C9.16533 2.60089 9.09971 2.69495 9.09971 2.79995C9.09971 2.90495 9.16533 2.99901 9.26377 3.0362L10.4997 3.49995L10.9635 4.73589C11.0006 4.83433 11.0947 4.89995 11.1997 4.89995C11.3047 4.89995 11.3988 4.83433 11.436 4.73589L11.8997 3.49995L13.1356 3.0362C13.2341 2.99901 13.2997 2.90495 13.2997 2.79995C13.2997 2.69495 13.2341 2.60089 13.1356 2.5637L11.8997 2.09995L11.436 0.864014C11.3988 0.765576 11.3047 0.699951 11.1997 0.699951C11.0947 0.699951 11.0006 0.765576 10.9635 0.864014L10.4997 2.09995L9.26377 2.5637ZM4.37252 5.96089L4.89971 4.8212L5.4269 5.96089C5.5319 6.18839 5.71346 6.36995 5.94096 6.47495L7.08065 7.00214L5.94096 7.52933C5.71346 7.63433 5.5319 7.81589 5.4269 8.04339L4.89971 9.18308L4.37252 8.04339C4.26752 7.81589 4.08596 7.63433 3.85846 7.52933L2.71877 6.99995L3.86064 6.47276C4.08814 6.36776 4.26971 6.1862 4.37471 5.9587L4.37252 5.96089ZM4.32221 3.56776L3.42096 5.5212L1.46752 6.42245L1.45439 6.42901C1.36908 6.46839 1.18533 6.5537 0.903145 6.68276C0.778457 6.73964 0.699707 6.86433 0.699707 6.99995C0.699707 7.13558 0.778457 7.26026 0.903145 7.31714C1.18533 7.4462 1.36689 7.53151 1.45439 7.57089L1.46752 7.57745L3.42096 8.4787L4.32221 10.4321L4.32877 10.4453C4.36814 10.5306 4.45346 10.7143 4.58252 10.9965C4.63939 11.1212 4.76408 11.2 4.89971 11.2C5.03533 11.2 5.16002 11.1212 5.21689 10.9965C5.53189 10.3162 5.54721 10.2812 6.37846 8.48089L8.33189 7.57964L8.34502 7.57308C8.43033 7.5337 8.61408 7.44839 8.89627 7.31933C9.02096 7.26245 9.09971 7.13776 9.09971 7.00214C9.09971 6.86651 9.02096 6.74183 8.89627 6.68495C8.21596 6.36995 8.18096 6.35464 6.38065 5.52339L5.47939 3.56995L5.47283 3.55683C5.43346 3.47151 5.34815 3.28776 5.21908 3.00558C5.16221 2.88089 5.03752 2.80214 4.9019 2.80214C4.76627 2.80214 4.64158 2.88089 4.58471 3.00558C4.28283 3.65745 4.33314 3.55245 4.32439 3.56995L4.32221 3.56776ZM9.79971 10.5L8.56377 10.9637C8.46533 11.0009 8.39971 11.095 8.39971 11.2C8.39971 11.305 8.46533 11.399 8.56377 11.4362L9.79971 11.9L10.2635 13.1359C10.3006 13.2343 10.3947 13.3 10.4997 13.3C10.6047 13.3 10.6988 13.2343 10.736 13.1359L11.1997 11.9L12.4356 11.4362C12.5341 11.399 12.5997 11.305 12.5997 11.2C12.5997 11.095 12.5341 11.0009 12.4356 10.9637L11.1997 10.5L10.736 9.26401C10.6988 9.16558 10.6047 9.09995 10.4997 9.09995C10.3947 9.09995 10.3006 9.16558 10.2635 9.26401L9.79971 10.5Z",
                                                                    fill: "white"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/redtag/src/components/AIAssistant.tsx",
                                                                    lineNumber: 64,
                                                                    columnNumber: 21
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/redtag/src/components/AIAssistant.tsx",
                                                                lineNumber: 63,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("clipPath", {
                                                                    id: "clip0_213_3600",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                                        width: "14",
                                                                        height: "14",
                                                                        fill: "white"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Documents/redtag/src/components/AIAssistant.tsx",
                                                                        lineNumber: 68,
                                                                        columnNumber: 21
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/redtag/src/components/AIAssistant.tsx",
                                                                    lineNumber: 67,
                                                                    columnNumber: 21
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/redtag/src/components/AIAssistant.tsx",
                                                                lineNumber: 66,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/redtag/src/components/AIAssistant.tsx",
                                                        lineNumber: 62,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/redtag/src/components/AIAssistant.tsx",
                                                    lineNumber: 61,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs font-semibold text-gray-600",
                                                    children: "redtag AI"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/redtag/src/components/AIAssistant.tsx",
                                                    lineNumber: 73,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/redtag/src/components/AIAssistant.tsx",
                                            lineNumber: 60,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-[#333] leading-relaxed",
                                            children: "Found 4 all-inclusive packages from YYZ around May 17-24 that fit your budget. Cuba is the best value right now - prices just dropped. Here are your top picks:"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/redtag/src/components/AIAssistant.tsx",
                                            lineNumber: 75,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-1 md:grid-cols-4 gap-2",
                                            children: RESULTS.map((r, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-stretch h-full flex-col justify-between border bg-[#F0F1F1] border-gray-200 rounded-xl p-3 hover:border-red-300 hover:shadow-sm transition-all cursor-pointer",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[10px] font-bold text-[#6A6A6A] leading-tight",
                                                            children: r.destination
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/redtag/src/components/AIAssistant.tsx",
                                                            lineNumber: 82,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-lg font-bold text-[#414042] mt-1",
                                                            children: r.price
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/redtag/src/components/AIAssistant.tsx",
                                                            lineNumber: 83,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[14px] text-[#414042] mt-0.5",
                                                            children: r.hotel
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/redtag/src/components/AIAssistant.tsx",
                                                            lineNumber: 84,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: `inline-block mt-2 text-[14px] w-max font-semibold text-white px-3 py-0.5 rounded-full ${r.badgeColor}`,
                                                            children: r.badge
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/redtag/src/components/AIAssistant.tsx",
                                                            lineNumber: 85,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, i, true, {
                                                    fileName: "[project]/Documents/redtag/src/components/AIAssistant.tsx",
                                                    lineNumber: 81,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/redtag/src/components/AIAssistant.tsx",
                                            lineNumber: 79,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-wrap gap-2 pt-1",
                                            children: CHIPS.map((chip)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "text-[14px] text-[#414042] border border-[#DDD] bg-[#F0F1F199] hover:bg-gray-200 px-3 py-1.5 rounded-full transition-colors",
                                                    children: chip
                                                }, chip, false, {
                                                    fileName: "[project]/Documents/redtag/src/components/AIAssistant.tsx",
                                                    lineNumber: 93,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/redtag/src/components/AIAssistant.tsx",
                                            lineNumber: 91,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/redtag/src/components/AIAssistant.tsx",
                                    lineNumber: 59,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/redtag/src/components/AIAssistant.tsx",
                            lineNumber: 51,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "border-t border-gray-100 px-5 py-3 flex items-center gap-3",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full flex rounded-[40px] py-2 pl-3 pr-1.5 border border-[#ddd]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "flex mr-2 items-center gap-1.5 text-xs text-gray-500 font-medium shrink-0 bg-[#F0F1F1] rounded-3xl px-3 py-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "w-3.5 h-3.5",
                                                fill: "none",
                                                stroke: "currentColor",
                                                viewBox: "0 0 24 24",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: 2,
                                                    d: "M13 10V3L4 14h7v7l9-11h-7z"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/redtag/src/components/AIAssistant.tsx",
                                                    lineNumber: 107,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/redtag/src/components/AIAssistant.tsx",
                                                lineNumber: 106,
                                                columnNumber: 15
                                            }, this),
                                            "AI Search"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/redtag/src/components/AIAssistant.tsx",
                                        lineNumber: 105,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 flex items-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: input,
                                            onChange: (e)=>setInput(e.target.value),
                                            placeholder: "Ask anything - dates, budget, destination, vibe...",
                                            className: "w-full text-sm text-[#333] outline-none placeholder-[#808080]"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/redtag/src/components/AIAssistant.tsx",
                                            lineNumber: 112,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/redtag/src/components/AIAssistant.tsx",
                                        lineNumber: 111,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "w-8 h-8 bg-[#CA2129] hover:bg-red-700 rounded-full flex items-center justify-center transition-colors shrink-0",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "w-3.5 h-3.5 text-white",
                                            fill: "none",
                                            stroke: "currentColor",
                                            viewBox: "0 0 24 24",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$redtag$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: 2.5,
                                                d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/redtag/src/components/AIAssistant.tsx",
                                                lineNumber: 122,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/redtag/src/components/AIAssistant.tsx",
                                            lineNumber: 121,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/redtag/src/components/AIAssistant.tsx",
                                        lineNumber: 120,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/redtag/src/components/AIAssistant.tsx",
                                lineNumber: 104,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Documents/redtag/src/components/AIAssistant.tsx",
                            lineNumber: 103,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/redtag/src/components/AIAssistant.tsx",
                    lineNumber: 41,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/redtag/src/components/AIAssistant.tsx",
            lineNumber: 28,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/redtag/src/components/AIAssistant.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
_s(AIAssistant, "RL+Zbs2TIka0YpcBOJptmHqCgYA=");
_c = AIAssistant;
var _c;
__turbopack_context__.k.register(_c, "AIAssistant");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Documents_redtag_src_components_0cm9b2r._.js.map