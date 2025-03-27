/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "(pages-dir-node)/./context/AuthContext.js":
/*!********************************!*\
  !*** ./context/AuthContext.js ***!
  \********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AuthProvider: () => (/* binding */ AuthProvider),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"(pages-dir-node)/./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _services_authService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/authService */ \"(pages-dir-node)/./services/authService.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_authService__WEBPACK_IMPORTED_MODULE_3__]);\n_services_authService__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);\nconst AuthProvider = ({ children })=>{\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        \"AuthProvider.useState\": ()=>{\n            if (false) {}\n            return null;\n        }\n    }[\"AuthProvider.useState\"]);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"AuthProvider.useEffect\": ()=>{\n            if (user) {\n                localStorage.setItem(\"user\", JSON.stringify(user));\n            } else {\n                localStorage.removeItem(\"user\");\n            }\n        }\n    }[\"AuthProvider.useEffect\"], [\n        user\n    ]);\n    // LOGIN \n    const login = async (username, password)=>{\n        try {\n            const userData = await _services_authService__WEBPACK_IMPORTED_MODULE_3__.authService.login(username, password);\n            if (!userData) return;\n            setUser(userData);\n            console.log(userData);\n            router.push('/');\n        } catch (error) {\n            console.log(\"Login failed:\", error);\n            throw error;\n        }\n    };\n    // REGISTER\n    const register = async (username, password)=>{\n        try {\n            const userData = await _services_authService__WEBPACK_IMPORTED_MODULE_3__.authService.register(username, password);\n            if (!userData) return;\n            setUser(userData);\n            router.push('/');\n        } catch (error) {\n            console.log(\"Registration failed:\", error);\n            throw error;\n        }\n    };\n    // LOGOUT\n    const logout = async ()=>{\n        try {\n            await _services_authService__WEBPACK_IMPORTED_MODULE_3__.authService.logout();\n            setUser(null);\n            localStorage.removeItem(\"user\"); // Clear stored user\n            router.push(\"/auth\");\n        } catch (error) {\n            console.log(\"Logout failed:\", error);\n        }\n    };\n    const value = {\n        user,\n        isAuthenticated: !!user,\n        login,\n        register,\n        logout\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: value,\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Denise\\\\Project\\\\genvoice-surveys\\\\frontend\\\\context\\\\AuthContext.js\",\n        lineNumber: 74,\n        columnNumber: 9\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AuthContext);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL2NvbnRleHQvQXV0aENvbnRleHQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUEyRDtBQUNuQjtBQUNjO0FBRXRELE1BQU1LLDRCQUFjTCxvREFBYUEsQ0FBQztBQUUzQixNQUFNTSxlQUFlLENBQUMsRUFBRUMsUUFBUSxFQUFFO0lBQ3JDLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHUiwrQ0FBUUE7aUNBQUM7WUFDN0IsSUFBSSxLQUE2QixFQUFFLEVBR2xDO1lBQ0QsT0FBTztRQUNYOztJQUNBLE1BQU1jLFNBQVNaLHNEQUFTQTtJQUV4QkQsZ0RBQVNBO2tDQUFDO1lBQ04sSUFBSU0sTUFBTTtnQkFDTkcsYUFBYUssT0FBTyxDQUFDLFFBQVFILEtBQUtJLFNBQVMsQ0FBQ1Q7WUFDaEQsT0FBTztnQkFDSEcsYUFBYU8sVUFBVSxDQUFDO1lBQzVCO1FBQ0o7aUNBQUc7UUFBQ1Y7S0FBSztJQUVULFNBQVM7SUFDVCxNQUFNVyxRQUFRLE9BQU9DLFVBQVVDO1FBQzNCLElBQUk7WUFDQSxNQUFNQyxXQUFXLE1BQU1sQiw4REFBV0EsQ0FBQ2UsS0FBSyxDQUFDQyxVQUFVQztZQUNuRCxJQUFJLENBQUNDLFVBQVU7WUFDZmIsUUFBUWE7WUFFUkMsUUFBUUMsR0FBRyxDQUFDRjtZQUNaUCxPQUFPVSxJQUFJLENBQUM7UUFDaEIsRUFBRSxPQUFPQyxPQUFPO1lBQ1pILFFBQVFDLEdBQUcsQ0FBQyxpQkFBaUJFO1lBQzdCLE1BQU1BO1FBQ1Y7SUFDSjtJQUVBLFdBQVc7SUFDWCxNQUFNQyxXQUFXLE9BQU9QLFVBQVVDO1FBQzlCLElBQUk7WUFDQSxNQUFNQyxXQUFXLE1BQU1sQiw4REFBV0EsQ0FBQ3VCLFFBQVEsQ0FBQ1AsVUFBVUM7WUFDdEQsSUFBSSxDQUFDQyxVQUFVO1lBQ2ZiLFFBQVFhO1lBQ1JQLE9BQU9VLElBQUksQ0FBQztRQUNoQixFQUFFLE9BQU9DLE9BQU87WUFDWkgsUUFBUUMsR0FBRyxDQUFDLHdCQUF3QkU7WUFDcEMsTUFBTUE7UUFDVjtJQUNKO0lBRUEsU0FBUztJQUNULE1BQU1FLFNBQVM7UUFDWCxJQUFJO1lBQ0EsTUFBTXhCLDhEQUFXQSxDQUFDd0IsTUFBTTtZQUN4Qm5CLFFBQVE7WUFDUkUsYUFBYU8sVUFBVSxDQUFDLFNBQVMsb0JBQW9CO1lBQ3JESCxPQUFPVSxJQUFJLENBQUM7UUFDaEIsRUFBRSxPQUFPQyxPQUFPO1lBQ1pILFFBQVFDLEdBQUcsQ0FBQyxrQkFBa0JFO1FBQ2xDO0lBQ0o7SUFFQSxNQUFNRyxRQUFRO1FBQ1ZyQjtRQUNBc0IsaUJBQWlCLENBQUMsQ0FBQ3RCO1FBQ25CVztRQUNBUTtRQUNBQztJQUNKO0lBRUEscUJBQ0ksOERBQUN2QixZQUFZMEIsUUFBUTtRQUFDRixPQUFPQTtrQkFDeEJ0Qjs7Ozs7O0FBR2IsRUFBRTtBQUVGLGlFQUFlRixXQUFXQSxFQUFDIiwic291cmNlcyI6WyJDOlxcRGVuaXNlXFxQcm9qZWN0XFxnZW52b2ljZS1zdXJ2ZXlzXFxmcm9udGVuZFxcY29udGV4dFxcQXV0aENvbnRleHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyBhdXRoU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2F1dGhTZXJ2aWNlJztcclxuXHJcbmNvbnN0IEF1dGhDb250ZXh0ID0gY3JlYXRlQ29udGV4dChudWxsKTtcclxuXHJcbmV4cG9ydCBjb25zdCBBdXRoUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZSgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0b3JlZFVzZXIgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJcIik7XHJcbiAgICAgICAgICAgIHJldHVybiBzdG9yZWRVc2VyID8gSlNPTi5wYXJzZShzdG9yZWRVc2VyKSA6IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfSk7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmICh1c2VyKSB7XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidXNlclwiLCBKU09OLnN0cmluZ2lmeSh1c2VyKSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJ1c2VyXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFt1c2VyXSk7XHJcblxyXG4gICAgLy8gTE9HSU4gXHJcbiAgICBjb25zdCBsb2dpbiA9IGFzeW5jICh1c2VybmFtZSwgcGFzc3dvcmQpID0+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCB1c2VyRGF0YSA9IGF3YWl0IGF1dGhTZXJ2aWNlLmxvZ2luKHVzZXJuYW1lLCBwYXNzd29yZCk7XHJcbiAgICAgICAgICAgIGlmICghdXNlckRhdGEpIHJldHVybjtcclxuICAgICAgICAgICAgc2V0VXNlcih1c2VyRGF0YSk7XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh1c2VyRGF0YSlcclxuICAgICAgICAgICAgcm91dGVyLnB1c2goJy8nKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkxvZ2luIGZhaWxlZDpcIiwgZXJyb3IpO1xyXG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIFJFR0lTVEVSXHJcbiAgICBjb25zdCByZWdpc3RlciA9IGFzeW5jICh1c2VybmFtZSwgcGFzc3dvcmQpID0+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCB1c2VyRGF0YSA9IGF3YWl0IGF1dGhTZXJ2aWNlLnJlZ2lzdGVyKHVzZXJuYW1lLCBwYXNzd29yZCk7XHJcbiAgICAgICAgICAgIGlmICghdXNlckRhdGEpIHJldHVybjtcclxuICAgICAgICAgICAgc2V0VXNlcih1c2VyRGF0YSk7XHJcbiAgICAgICAgICAgIHJvdXRlci5wdXNoKCcvJyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJSZWdpc3RyYXRpb24gZmFpbGVkOlwiLCBlcnJvcik7XHJcbiAgICAgICAgICAgIHRocm93IGVycm9yO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgLy8gTE9HT1VUXHJcbiAgICBjb25zdCBsb2dvdXQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgYXdhaXQgYXV0aFNlcnZpY2UubG9nb3V0KCk7XHJcbiAgICAgICAgICAgIHNldFVzZXIobnVsbCk7XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwidXNlclwiKTsgLy8gQ2xlYXIgc3RvcmVkIHVzZXJcclxuICAgICAgICAgICAgcm91dGVyLnB1c2goXCIvYXV0aFwiKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkxvZ291dCBmYWlsZWQ6XCIsIGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdmFsdWUgPSB7XHJcbiAgICAgICAgdXNlcixcclxuICAgICAgICBpc0F1dGhlbnRpY2F0ZWQ6ICEhdXNlcixcclxuICAgICAgICBsb2dpbiwgXHJcbiAgICAgICAgcmVnaXN0ZXIsXHJcbiAgICAgICAgbG9nb3V0XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEF1dGhDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt2YWx1ZX0+XHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L0F1dGhDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEF1dGhDb250ZXh0OyJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSb3V0ZXIiLCJhdXRoU2VydmljZSIsIkF1dGhDb250ZXh0IiwiQXV0aFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ1c2VyIiwic2V0VXNlciIsInN0b3JlZFVzZXIiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiSlNPTiIsInBhcnNlIiwicm91dGVyIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsInJlbW92ZUl0ZW0iLCJsb2dpbiIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJ1c2VyRGF0YSIsImNvbnNvbGUiLCJsb2ciLCJwdXNoIiwiZXJyb3IiLCJyZWdpc3RlciIsImxvZ291dCIsInZhbHVlIiwiaXNBdXRoZW50aWNhdGVkIiwiUHJvdmlkZXIiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(pages-dir-node)/./context/AuthContext.js\n");

/***/ }),

/***/ "(pages-dir-node)/./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyApp)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/AuthContext */ \"(pages-dir-node)/./context/AuthContext.js\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/globals.css */ \"(pages-dir-node)/./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_context_AuthContext__WEBPACK_IMPORTED_MODULE_1__]);\n_context_AuthContext__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nfunction MyApp({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_AuthContext__WEBPACK_IMPORTED_MODULE_1__.AuthProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"C:\\\\Denise\\\\Project\\\\genvoice-surveys\\\\frontend\\\\pages\\\\_app.js\",\n            lineNumber: 7,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Denise\\\\Project\\\\genvoice-surveys\\\\frontend\\\\pages\\\\_app.js\",\n        lineNumber: 6,\n        columnNumber: 9\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3BhZ2VzL19hcHAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFzRDtBQUN2QjtBQUVoQixTQUFTQyxNQUFNLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFFO0lBQ2xELHFCQUNJLDhEQUFDSCw4REFBWUE7a0JBQ1QsNEVBQUNFO1lBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7QUFHcEMiLCJzb3VyY2VzIjpbIkM6XFxEZW5pc2VcXFByb2plY3RcXGdlbnZvaWNlLXN1cnZleXNcXGZyb250ZW5kXFxwYWdlc1xcX2FwcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBdXRoUHJvdmlkZXIgfSBmcm9tIFwiLi4vY29udGV4dC9BdXRoQ29udGV4dFwiO1xyXG5pbXBvcnQgXCIuLi9zdHlsZXMvZ2xvYmFscy5jc3NcIjsgXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEF1dGhQcm92aWRlcj5cclxuICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICAgIDwvQXV0aFByb3ZpZGVyPlxyXG4gICAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiQXV0aFByb3ZpZGVyIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(pages-dir-node)/./pages/_app.js\n");

/***/ }),

/***/ "(pages-dir-node)/./services/apiService.js":
/*!********************************!*\
  !*** ./services/apiService.js ***!
  \********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   apiService: () => (/* binding */ apiService),\n/* harmony export */   setAuthToken: () => (/* binding */ setAuthToken)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);\naxios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst API_URL = \"http://localhost:5000\";\nconst apiClient = axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].create({\n    baseURL: API_URL,\n    headers: {\n        \"Content-Type\": \"application/json\"\n    },\n    withCredentials: true\n});\n// Function to set the Bearer token\nconst setAuthToken = (token)=>{\n    if (token) {\n        localStorage.setItem(\"authToken\", token);\n        apiClient.defaults.headers[\"Authorization\"] = `Bearer ${token}`;\n    } else {\n        localStorage.removeItem(\"authToken\");\n        delete apiClient.defaults.headers[\"Authorization\"];\n    }\n};\nconst apiService = {\n    get: (url, params = {})=>apiClient.get(url, {\n            params\n        }),\n    post: (url, data)=>apiClient.post(url, data),\n    put: (url, data)=>apiClient.put(url, data),\n    delete: (url)=>apiClient.delete(url)\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3NlcnZpY2VzL2FwaVNlcnZpY2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQTBCO0FBRTFCLE1BQU1DLFVBQVVDLHVCQUErQjtBQUUvQyxNQUFNRyxZQUFZTCxvREFBWSxDQUFDO0lBQzNCTyxTQUFTTjtJQUNUTyxTQUFTO1FBQUUsZ0JBQWlCO0lBQW1CO0lBQy9DQyxpQkFBaUI7QUFDckI7QUFFQSxtQ0FBbUM7QUFDNUIsTUFBTUMsZUFBZSxDQUFDQztJQUN6QixJQUFJQSxPQUFPO1FBQ1BDLGFBQWFDLE9BQU8sQ0FBQyxhQUFhRjtRQUNsQ04sVUFBVVMsUUFBUSxDQUFDTixPQUFPLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxPQUFPLEVBQUVHLE9BQU87SUFDbkUsT0FBTztRQUNIQyxhQUFhRyxVQUFVLENBQUM7UUFDeEIsT0FBT1YsVUFBVVMsUUFBUSxDQUFDTixPQUFPLENBQUMsZ0JBQWdCO0lBQ3REO0FBQ0osRUFBRTtBQUVLLE1BQU1RLGFBQWE7SUFDdEJDLEtBQU0sQ0FBQ0MsS0FBS0MsU0FBUyxDQUFDLENBQUMsR0FBUWQsVUFBVVksR0FBRyxDQUFDQyxLQUFLO1lBQUVDO1FBQU87SUFDM0RDLE1BQU0sQ0FBQ0YsS0FBS0csT0FBbUJoQixVQUFVZSxJQUFJLENBQUNGLEtBQUtHO0lBQ25EQyxLQUFNLENBQUNKLEtBQUtHLE9BQW1CaEIsVUFBVWlCLEdBQUcsQ0FBQ0osS0FBS0c7SUFDbERFLFFBQVEsQ0FBQ0wsTUFBc0JiLFVBQVVrQixNQUFNLENBQUNMO0FBQ3BELEVBQUUiLCJzb3VyY2VzIjpbIkM6XFxEZW5pc2VcXFByb2plY3RcXGdlbnZvaWNlLXN1cnZleXNcXGZyb250ZW5kXFxzZXJ2aWNlc1xcYXBpU2VydmljZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5jb25zdCBBUElfVVJMID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX1VSTDtcclxuXHJcbmNvbnN0IGFwaUNsaWVudCA9IGF4aW9zLmNyZWF0ZSh7XHJcbiAgICBiYXNlVVJMOiBBUElfVVJMLFxyXG4gICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiIDogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcclxuICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcclxufSlcclxuXHJcbi8vIEZ1bmN0aW9uIHRvIHNldCB0aGUgQmVhcmVyIHRva2VuXHJcbmV4cG9ydCBjb25zdCBzZXRBdXRoVG9rZW4gPSAodG9rZW4pID0+IHtcclxuICAgIGlmICh0b2tlbikge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYXV0aFRva2VuXCIsIHRva2VuKTtcclxuICAgICAgICBhcGlDbGllbnQuZGVmYXVsdHMuaGVhZGVyc1tcIkF1dGhvcml6YXRpb25cIl0gPSBgQmVhcmVyICR7dG9rZW59YDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJhdXRoVG9rZW5cIik7XHJcbiAgICAgICAgZGVsZXRlIGFwaUNsaWVudC5kZWZhdWx0cy5oZWFkZXJzW1wiQXV0aG9yaXphdGlvblwiXTtcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBhcGlTZXJ2aWNlID0ge1xyXG4gICAgZ2V0IDogKHVybCwgcGFyYW1zID0ge30pICAgID0+IGFwaUNsaWVudC5nZXQodXJsLCB7IHBhcmFtcyB9KSxcclxuICAgIHBvc3Q6ICh1cmwsIGRhdGEpICAgICAgICAgICA9PiBhcGlDbGllbnQucG9zdCh1cmwsIGRhdGEpLFxyXG4gICAgcHV0IDogKHVybCwgZGF0YSkgICAgICAgICAgID0+IGFwaUNsaWVudC5wdXQodXJsLCBkYXRhKSxcclxuICAgIGRlbGV0ZTogKHVybCkgICAgICAgICAgICAgICA9PiBhcGlDbGllbnQuZGVsZXRlKHVybCkgXHJcbn07Il0sIm5hbWVzIjpbImF4aW9zIiwiQVBJX1VSTCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19BUElfVVJMIiwiYXBpQ2xpZW50IiwiY3JlYXRlIiwiYmFzZVVSTCIsImhlYWRlcnMiLCJ3aXRoQ3JlZGVudGlhbHMiLCJzZXRBdXRoVG9rZW4iLCJ0b2tlbiIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJkZWZhdWx0cyIsInJlbW92ZUl0ZW0iLCJhcGlTZXJ2aWNlIiwiZ2V0IiwidXJsIiwicGFyYW1zIiwicG9zdCIsImRhdGEiLCJwdXQiLCJkZWxldGUiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(pages-dir-node)/./services/apiService.js\n");

/***/ }),

/***/ "(pages-dir-node)/./services/authService.js":
/*!*********************************!*\
  !*** ./services/authService.js ***!
  \*********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authService: () => (/* binding */ authService)\n/* harmony export */ });\n/* harmony import */ var _apiService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apiService */ \"(pages-dir-node)/./services/apiService.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_apiService__WEBPACK_IMPORTED_MODULE_0__]);\n_apiService__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst authService = {\n    register: async (username, password)=>{\n        try {\n            const res = await _apiService__WEBPACK_IMPORTED_MODULE_0__.apiService.post(\"/register\", {\n                username,\n                password\n            });\n            (0,_apiService__WEBPACK_IMPORTED_MODULE_0__.setAuthToken)(res.data.token);\n            return res.data;\n        } catch (e) {\n            console.log(\"register error:\", e);\n            throw new Error(e.response?.data?.message || \"Registration failed\");\n        }\n    },\n    login: async (username, password)=>{\n        try {\n            // console.log(\"Login request body:\", { username, password });\n            const res = await _apiService__WEBPACK_IMPORTED_MODULE_0__.apiService.post(\"/login\", {\n                username,\n                password\n            });\n            (0,_apiService__WEBPACK_IMPORTED_MODULE_0__.setAuthToken)(res.data.token);\n            return res.data;\n        } catch (e) {\n            console.log(\"login error:\", e);\n            throw new Error(e.response?.data?.message || \"Login failed\");\n        }\n    },\n    logout: async ()=>{\n        try {\n            await _apiService__WEBPACK_IMPORTED_MODULE_0__.apiService.post(\"/logout\");\n            (0,_apiService__WEBPACK_IMPORTED_MODULE_0__.setAuthToken)(null);\n        } catch (e) {\n            console.log(\"logout error:\", e);\n            throw new Error(e.response?.data?.message || \"Logout failed\");\n        }\n    }\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3NlcnZpY2VzL2F1dGhTZXJ2aWNlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXdEO0FBR2pELE1BQU1FLGNBQWM7SUFDdkJDLFVBQVUsT0FBT0MsVUFBVUM7UUFDdkIsSUFBSTtZQUNBLE1BQU1DLE1BQU0sTUFBTU4sbURBQVVBLENBQUNPLElBQUksQ0FBQyxhQUFhO2dCQUFFSDtnQkFBVUM7WUFBUztZQUNwRUoseURBQVlBLENBQUNLLElBQUlFLElBQUksQ0FBQ0MsS0FBSztZQUMzQixPQUFPSCxJQUFJRSxJQUFJO1FBQ25CLEVBQUUsT0FBT0UsR0FBRztZQUNSQyxRQUFRQyxHQUFHLENBQUMsbUJBQW1CRjtZQUMvQixNQUFNLElBQUlHLE1BQU1ILEVBQUVJLFFBQVEsRUFBRU4sTUFBTU8sV0FBVztRQUNqRDtJQUNKO0lBQ0FDLE9BQU8sT0FBT1osVUFBVUM7UUFDcEIsSUFBSTtZQUNBLDhEQUE4RDtZQUU5RCxNQUFNQyxNQUFNLE1BQU1OLG1EQUFVQSxDQUFDTyxJQUFJLENBQUMsVUFBVTtnQkFBRUg7Z0JBQVVDO1lBQVM7WUFDakVKLHlEQUFZQSxDQUFDSyxJQUFJRSxJQUFJLENBQUNDLEtBQUs7WUFDM0IsT0FBT0gsSUFBSUUsSUFBSTtRQUNuQixFQUFFLE9BQU9FLEdBQUc7WUFDUkMsUUFBUUMsR0FBRyxDQUFDLGdCQUFnQkY7WUFDNUIsTUFBTSxJQUFJRyxNQUFNSCxFQUFFSSxRQUFRLEVBQUVOLE1BQU1PLFdBQVc7UUFDakQ7SUFDSjtJQUNBRSxRQUFRO1FBQ0osSUFBSTtZQUNBLE1BQU1qQixtREFBVUEsQ0FBQ08sSUFBSSxDQUFDO1lBQ3RCTix5REFBWUEsQ0FBQztRQUNqQixFQUFFLE9BQU9TLEdBQUc7WUFDUkMsUUFBUUMsR0FBRyxDQUFDLGlCQUFpQkY7WUFDN0IsTUFBTSxJQUFJRyxNQUFNSCxFQUFFSSxRQUFRLEVBQUVOLE1BQU1PLFdBQVc7UUFDakQ7SUFDSjtBQUNKLEVBQUUiLCJzb3VyY2VzIjpbIkM6XFxEZW5pc2VcXFByb2plY3RcXGdlbnZvaWNlLXN1cnZleXNcXGZyb250ZW5kXFxzZXJ2aWNlc1xcYXV0aFNlcnZpY2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXBpU2VydmljZSwgc2V0QXV0aFRva2VuIH0gZnJvbSBcIi4vYXBpU2VydmljZVwiO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBhdXRoU2VydmljZSA9IHtcclxuICAgIHJlZ2lzdGVyOiBhc3luYyAodXNlcm5hbWUsIHBhc3N3b3JkKSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXBpU2VydmljZS5wb3N0KFwiL3JlZ2lzdGVyXCIsIHsgdXNlcm5hbWUsIHBhc3N3b3JkIH0pO1xyXG4gICAgICAgICAgICBzZXRBdXRoVG9rZW4ocmVzLmRhdGEudG9rZW4pO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzLmRhdGE7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInJlZ2lzdGVyIGVycm9yOlwiLCBlKTtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGUucmVzcG9uc2U/LmRhdGE/Lm1lc3NhZ2UgfHwgXCJSZWdpc3RyYXRpb24gZmFpbGVkXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBsb2dpbjogYXN5bmMgKHVzZXJuYW1lLCBwYXNzd29yZCkgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiTG9naW4gcmVxdWVzdCBib2R5OlwiLCB7IHVzZXJuYW1lLCBwYXNzd29yZCB9KTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGFwaVNlcnZpY2UucG9zdChcIi9sb2dpblwiLCB7IHVzZXJuYW1lLCBwYXNzd29yZCB9KTtcclxuICAgICAgICAgICAgc2V0QXV0aFRva2VuKHJlcy5kYXRhLnRva2VuKVxyXG4gICAgICAgICAgICByZXR1cm4gcmVzLmRhdGE7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImxvZ2luIGVycm9yOlwiLCBlKTtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGUucmVzcG9uc2U/LmRhdGE/Lm1lc3NhZ2UgfHwgXCJMb2dpbiBmYWlsZWRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGxvZ291dDogYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGF3YWl0IGFwaVNlcnZpY2UucG9zdChcIi9sb2dvdXRcIik7XHJcbiAgICAgICAgICAgIHNldEF1dGhUb2tlbihudWxsKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibG9nb3V0IGVycm9yOlwiLCBlKTtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGUucmVzcG9uc2U/LmRhdGE/Lm1lc3NhZ2UgfHwgXCJMb2dvdXQgZmFpbGVkXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbn07Il0sIm5hbWVzIjpbImFwaVNlcnZpY2UiLCJzZXRBdXRoVG9rZW4iLCJhdXRoU2VydmljZSIsInJlZ2lzdGVyIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsInJlcyIsInBvc3QiLCJkYXRhIiwidG9rZW4iLCJlIiwiY29uc29sZSIsImxvZyIsIkVycm9yIiwicmVzcG9uc2UiLCJtZXNzYWdlIiwibG9naW4iLCJsb2dvdXQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(pages-dir-node)/./services/authService.js\n");

/***/ }),

/***/ "(pages-dir-node)/./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = import("axios");;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("(pages-dir-node)/./pages/_app.js")));
module.exports = __webpack_exports__;

})();