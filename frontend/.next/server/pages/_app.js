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
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AuthProvider: () => (/* binding */ AuthProvider),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"(pages-dir-node)/./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _services_authService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/authService */ \"(pages-dir-node)/./services/authService.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_authService__WEBPACK_IMPORTED_MODULE_3__]);\n_services_authService__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);\nconst AuthProvider = ({ children })=>{\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    // LOGIN \n    const login = async (username, password)=>{\n        try {\n            const userData = await _services_authService__WEBPACK_IMPORTED_MODULE_3__.authService.login(username, password);\n            setUser(userData);\n            router.push('/');\n        } catch (error) {\n            console.error(\"Login failed:\", error);\n            throw error;\n        }\n    };\n    // REGISTER\n    const register = async (username, password)=>{\n        try {\n            const userData = await _services_authService__WEBPACK_IMPORTED_MODULE_3__.authService.register(username, password);\n            setUser(userData);\n            router.push('/');\n        } catch (error) {\n            console.error(\"Registration failed:\", error);\n            throw error;\n        }\n    };\n    // LOGOUT\n    const logout = async ()=>{\n        try {\n            await _services_authService__WEBPACK_IMPORTED_MODULE_3__.authService.logout();\n            setUser(null);\n            router.push(\"/auth\");\n        } catch (error) {\n            console.error(\"Logout failed:\", error);\n        }\n    };\n    const value = {\n        user,\n        isAuthenticated: !!user,\n        login,\n        register,\n        logout\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: value,\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Denise\\\\Project\\\\genvoice-surveys\\\\frontend\\\\context\\\\AuthContext.js\",\n        lineNumber: 55,\n        columnNumber: 9\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AuthContext);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL2NvbnRleHQvQXV0aENvbnRleHQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUF3RTtBQUNoQztBQUNjO0FBRXRELE1BQU1NLDRCQUFjTixvREFBYUEsQ0FBQztBQUUzQixNQUFNTyxlQUFlLENBQUMsRUFBRUMsUUFBUSxFQUFFO0lBQ3JDLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHVCwrQ0FBUUEsQ0FBQztJQUNqQyxNQUFNVSxTQUFTUCxzREFBU0E7SUFFeEIsU0FBUztJQUNULE1BQU1RLFFBQVEsT0FBT0MsVUFBVUM7UUFDM0IsSUFBSTtZQUNBLE1BQU1DLFdBQVcsTUFBTVYsOERBQVdBLENBQUNPLEtBQUssQ0FBQ0MsVUFBVUM7WUFDbkRKLFFBQVFLO1lBQ1JKLE9BQU9LLElBQUksQ0FBQztRQUNoQixFQUFFLE9BQU9DLE9BQU87WUFDWkMsUUFBUUQsS0FBSyxDQUFDLGlCQUFpQkE7WUFDL0IsTUFBTUE7UUFDVjtJQUNKO0lBRUEsV0FBVztJQUNYLE1BQU1FLFdBQVcsT0FBT04sVUFBVUM7UUFDOUIsSUFBSTtZQUNBLE1BQU1DLFdBQVcsTUFBTVYsOERBQVdBLENBQUNjLFFBQVEsQ0FBQ04sVUFBVUM7WUFDdERKLFFBQVFLO1lBQ1JKLE9BQU9LLElBQUksQ0FBQztRQUNoQixFQUFFLE9BQU9DLE9BQU87WUFDWkMsUUFBUUQsS0FBSyxDQUFDLHdCQUF3QkE7WUFDdEMsTUFBTUE7UUFDVjtJQUNKO0lBRUEsU0FBUztJQUNULE1BQU1HLFNBQVM7UUFDWCxJQUFJO1lBQ0EsTUFBTWYsOERBQVdBLENBQUNlLE1BQU07WUFDeEJWLFFBQVE7WUFDUkMsT0FBT0ssSUFBSSxDQUFDO1FBQ2hCLEVBQUUsT0FBT0MsT0FBTztZQUNaQyxRQUFRRCxLQUFLLENBQUMsa0JBQWtCQTtRQUNwQztJQUNKO0lBRUEsTUFBTUksUUFBUTtRQUNWWjtRQUNBYSxpQkFBaUIsQ0FBQyxDQUFDYjtRQUNuQkc7UUFDQU87UUFDQUM7SUFDSjtJQUVBLHFCQUNJLDhEQUFDZCxZQUFZaUIsUUFBUTtRQUFDRixPQUFPQTtrQkFDeEJiOzs7Ozs7QUFHYixFQUFFO0FBRUYsaUVBQWVGLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIkM6XFxEZW5pc2VcXFByb2plY3RcXGdlbnZvaWNlLXN1cnZleXNcXGZyb250ZW5kXFxjb250ZXh0XFxBdXRoQ29udGV4dC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyBhdXRoU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2F1dGhTZXJ2aWNlJztcclxuXHJcbmNvbnN0IEF1dGhDb250ZXh0ID0gY3JlYXRlQ29udGV4dChudWxsKTtcclxuXHJcbmV4cG9ydCBjb25zdCBBdXRoUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAgIC8vIExPR0lOIFxyXG4gICAgY29uc3QgbG9naW4gPSBhc3luYyAodXNlcm5hbWUsIHBhc3N3b3JkKSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgdXNlckRhdGEgPSBhd2FpdCBhdXRoU2VydmljZS5sb2dpbih1c2VybmFtZSwgcGFzc3dvcmQpO1xyXG4gICAgICAgICAgICBzZXRVc2VyKHVzZXJEYXRhKTtcclxuICAgICAgICAgICAgcm91dGVyLnB1c2goJy8nKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiTG9naW4gZmFpbGVkOlwiLCBlcnJvcik7XHJcbiAgICAgICAgICAgIHRocm93IGVycm9yO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgLy8gUkVHSVNURVJcclxuICAgIGNvbnN0IHJlZ2lzdGVyID0gYXN5bmMgKHVzZXJuYW1lLCBwYXNzd29yZCkgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHVzZXJEYXRhID0gYXdhaXQgYXV0aFNlcnZpY2UucmVnaXN0ZXIodXNlcm5hbWUsIHBhc3N3b3JkKTtcclxuICAgICAgICAgICAgc2V0VXNlcih1c2VyRGF0YSk7XHJcbiAgICAgICAgICAgIHJvdXRlci5wdXNoKCcvJyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIlJlZ2lzdHJhdGlvbiBmYWlsZWQ6XCIsIGVycm9yKTtcclxuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAvLyBMT0dPVVRcclxuICAgIGNvbnN0IGxvZ291dCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBhd2FpdCBhdXRoU2VydmljZS5sb2dvdXQoKTtcclxuICAgICAgICAgICAgc2V0VXNlcihudWxsKTtcclxuICAgICAgICAgICAgcm91dGVyLnB1c2goXCIvYXV0aFwiKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiTG9nb3V0IGZhaWxlZDpcIiwgZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB2YWx1ZSA9IHtcclxuICAgICAgICB1c2VyLFxyXG4gICAgICAgIGlzQXV0aGVudGljYXRlZDogISF1c2VyLFxyXG4gICAgICAgIGxvZ2luLCBcclxuICAgICAgICByZWdpc3RlcixcclxuICAgICAgICBsb2dvdXRcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8QXV0aENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3ZhbHVlfT5cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvQXV0aENvbnRleHQuUHJvdmlkZXI+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXV0aENvbnRleHQ7Il0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZUNhbGxiYWNrIiwidXNlUm91dGVyIiwiYXV0aFNlcnZpY2UiLCJBdXRoQ29udGV4dCIsIkF1dGhQcm92aWRlciIsImNoaWxkcmVuIiwidXNlciIsInNldFVzZXIiLCJyb3V0ZXIiLCJsb2dpbiIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJ1c2VyRGF0YSIsInB1c2giLCJlcnJvciIsImNvbnNvbGUiLCJyZWdpc3RlciIsImxvZ291dCIsInZhbHVlIiwiaXNBdXRoZW50aWNhdGVkIiwiUHJvdmlkZXIiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(pages-dir-node)/./context/AuthContext.js\n");

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
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   apiService: () => (/* binding */ apiService)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);\naxios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst API_URL = \"http://localhost:5000\";\nconst apiClient = axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].create({\n    baseURL: API_URL,\n    headers: {\n        \"Content-Type\": \"application/json\"\n    },\n    withCredentials: true\n});\nconst apiService = {\n    get: (url, params = {})=>apiClient.get(url, {\n            params\n        }),\n    post: (url, data)=>apiClient.post(url, data),\n    put: (url, data)=>apiClient.put(url, data),\n    delete: (url)=>apiClient.delete(url)\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3NlcnZpY2VzL2FwaVNlcnZpY2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBMEI7QUFFMUIsTUFBTUMsVUFBVUMsdUJBQStCO0FBRS9DLE1BQU1HLFlBQVlMLG9EQUFZLENBQUM7SUFDM0JPLFNBQVNOO0lBQ1RPLFNBQVM7UUFBRSxnQkFBaUI7SUFBbUI7SUFDL0NDLGlCQUFpQjtBQUNyQjtBQUVPLE1BQU1DLGFBQWE7SUFDdEJDLEtBQU0sQ0FBQ0MsS0FBS0MsU0FBUyxDQUFDLENBQUMsR0FBUVIsVUFBVU0sR0FBRyxDQUFDQyxLQUFLO1lBQUVDO1FBQU87SUFDM0RDLE1BQU0sQ0FBQ0YsS0FBS0csT0FBbUJWLFVBQVVTLElBQUksQ0FBQ0YsS0FBS0c7SUFDbkRDLEtBQU0sQ0FBQ0osS0FBS0csT0FBbUJWLFVBQVVXLEdBQUcsQ0FBQ0osS0FBS0c7SUFDbERFLFFBQVEsQ0FBQ0wsTUFBc0JQLFVBQVVZLE1BQU0sQ0FBQ0w7QUFDcEQsRUFBRSIsInNvdXJjZXMiOlsiQzpcXERlbmlzZVxcUHJvamVjdFxcZ2Vudm9pY2Utc3VydmV5c1xcZnJvbnRlbmRcXHNlcnZpY2VzXFxhcGlTZXJ2aWNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmNvbnN0IEFQSV9VUkwgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfVVJMO1xyXG5cclxuY29uc3QgYXBpQ2xpZW50ID0gYXhpb3MuY3JlYXRlKHtcclxuICAgIGJhc2VVUkw6IEFQSV9VUkwsXHJcbiAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCIgOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxyXG4gICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlLFxyXG59KVxyXG5cclxuZXhwb3J0IGNvbnN0IGFwaVNlcnZpY2UgPSB7XHJcbiAgICBnZXQgOiAodXJsLCBwYXJhbXMgPSB7fSkgICAgPT4gYXBpQ2xpZW50LmdldCh1cmwsIHsgcGFyYW1zIH0pLFxyXG4gICAgcG9zdDogKHVybCwgZGF0YSkgICAgICAgICAgID0+IGFwaUNsaWVudC5wb3N0KHVybCwgZGF0YSksXHJcbiAgICBwdXQgOiAodXJsLCBkYXRhKSAgICAgICAgICAgPT4gYXBpQ2xpZW50LnB1dCh1cmwsIGRhdGEpLFxyXG4gICAgZGVsZXRlOiAodXJsKSAgICAgICAgICAgICAgID0+IGFwaUNsaWVudC5kZWxldGUodXJsKSBcclxufTsiXSwibmFtZXMiOlsiYXhpb3MiLCJBUElfVVJMIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0FQSV9VUkwiLCJhcGlDbGllbnQiLCJjcmVhdGUiLCJiYXNlVVJMIiwiaGVhZGVycyIsIndpdGhDcmVkZW50aWFscyIsImFwaVNlcnZpY2UiLCJnZXQiLCJ1cmwiLCJwYXJhbXMiLCJwb3N0IiwiZGF0YSIsInB1dCIsImRlbGV0ZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(pages-dir-node)/./services/apiService.js\n");

/***/ }),

/***/ "(pages-dir-node)/./services/authService.js":
/*!*********************************!*\
  !*** ./services/authService.js ***!
  \*********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authService: () => (/* binding */ authService)\n/* harmony export */ });\n/* harmony import */ var _apiService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apiService */ \"(pages-dir-node)/./services/apiService.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_apiService__WEBPACK_IMPORTED_MODULE_0__]);\n_apiService__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst authService = {\n    register: async (username, password)=>{\n        const res = await _apiService__WEBPACK_IMPORTED_MODULE_0__.apiService.post(\"/register\", {\n            username,\n            password\n        });\n        return res.data;\n    },\n    login: async (username, password)=>{\n        const res = await _apiService__WEBPACK_IMPORTED_MODULE_0__.apiService.post(\"/login\", {\n            username,\n            password\n        });\n        return res.data;\n    },\n    logout: async ()=>{\n        await _apiService__WEBPACK_IMPORTED_MODULE_0__.apiService.post(\"/logout\");\n    }\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3NlcnZpY2VzL2F1dGhTZXJ2aWNlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQTBDO0FBR25DLE1BQU1DLGNBQWM7SUFDdkJDLFVBQVUsT0FBT0MsVUFBVUM7UUFDdkIsTUFBTUMsTUFBTSxNQUFNTCxtREFBVUEsQ0FBQ00sSUFBSSxDQUFDLGFBQWE7WUFBRUg7WUFBVUM7UUFBUztRQUNwRSxPQUFPQyxJQUFJRSxJQUFJO0lBQ25CO0lBQ0FDLE9BQU8sT0FBT0wsVUFBVUM7UUFDcEIsTUFBTUMsTUFBTSxNQUFNTCxtREFBVUEsQ0FBQ00sSUFBSSxDQUFDLFVBQVU7WUFBRUg7WUFBVUM7UUFBUztRQUNqRSxPQUFPQyxJQUFJRSxJQUFJO0lBQ25CO0lBQ0FFLFFBQVE7UUFDSixNQUFNVCxtREFBVUEsQ0FBQ00sSUFBSSxDQUFDO0lBQzFCO0FBQ0osRUFBRSIsInNvdXJjZXMiOlsiQzpcXERlbmlzZVxcUHJvamVjdFxcZ2Vudm9pY2Utc3VydmV5c1xcZnJvbnRlbmRcXHNlcnZpY2VzXFxhdXRoU2VydmljZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhcGlTZXJ2aWNlIH0gZnJvbSBcIi4vYXBpU2VydmljZVwiO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBhdXRoU2VydmljZSA9IHtcclxuICAgIHJlZ2lzdGVyOiBhc3luYyAodXNlcm5hbWUsIHBhc3N3b3JkKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXBpU2VydmljZS5wb3N0KFwiL3JlZ2lzdGVyXCIsIHsgdXNlcm5hbWUsIHBhc3N3b3JkIH0pO1xyXG4gICAgICAgIHJldHVybiByZXMuZGF0YTtcclxuICAgIH0sXHJcbiAgICBsb2dpbjogYXN5bmMgKHVzZXJuYW1lLCBwYXNzd29yZCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGFwaVNlcnZpY2UucG9zdChcIi9sb2dpblwiLCB7IHVzZXJuYW1lLCBwYXNzd29yZCB9KTtcclxuICAgICAgICByZXR1cm4gcmVzLmRhdGE7XHJcbiAgICB9LFxyXG4gICAgbG9nb3V0OiBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgYXdhaXQgYXBpU2VydmljZS5wb3N0KFwiL2xvZ291dFwiKTtcclxuICAgIH0sXHJcbn07Il0sIm5hbWVzIjpbImFwaVNlcnZpY2UiLCJhdXRoU2VydmljZSIsInJlZ2lzdGVyIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsInJlcyIsInBvc3QiLCJkYXRhIiwibG9naW4iLCJsb2dvdXQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(pages-dir-node)/./services/authService.js\n");

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