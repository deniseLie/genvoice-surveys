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
exports.id = "/_error";
exports.ids = ["/_error"];
exports.modules = {

/***/ "./context/AuthContext.js":
/*!********************************!*\
  !*** ./context/AuthContext.js ***!
  \********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AuthProvider: () => (/* binding */ AuthProvider),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _services_authService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/authService */ \"./services/authService.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_authService__WEBPACK_IMPORTED_MODULE_3__]);\n_services_authService__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);\nconst AuthProvider = ({ children })=>{\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [authToken, setAuthToken] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"AuthProvider.useEffect\": ()=>{\n            if (false) {}\n            if (false) {}\n        }\n    }[\"AuthProvider.useEffect\"], []);\n    // Sync token with axios default headers\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"AuthProvider.useEffect\": ()=>{\n            setAuthToken(authToken); // Set token in API client\n        }\n    }[\"AuthProvider.useEffect\"], [\n        authToken\n    ]);\n    // Auto-logout if no token\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"AuthProvider.useEffect\": ()=>{\n            if (!authToken) {\n                logout();\n            }\n        }\n    }[\"AuthProvider.useEffect\"], [\n        authToken\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"AuthProvider.useEffect\": ()=>{\n            if (user) {\n                localStorage.setItem(\"user\", JSON.stringify(user));\n            } else {\n                localStorage.removeItem(\"user\");\n            }\n        }\n    }[\"AuthProvider.useEffect\"], [\n        user\n    ]);\n    // LOGIN \n    const login = async (username, password)=>{\n        try {\n            const userData = await _services_authService__WEBPACK_IMPORTED_MODULE_3__.authService.login(username, password);\n            if (!userData) return;\n            setUser(userData?.user);\n            setAuthToken(userData?.token);\n            localStorage.setItem(\"authToken\", userData?.token);\n            // console.log(userData)\n            router.push('/');\n        } catch (error) {\n            console.log(\"Login failed:\", error);\n            throw error;\n        }\n    };\n    // REGISTER\n    const register = async (username, password)=>{\n        try {\n            const userData = await _services_authService__WEBPACK_IMPORTED_MODULE_3__.authService.register(username, password);\n            if (!userData) return;\n            setUser(userData?.user);\n            setAuthToken(userData?.token);\n            localStorage.setItem(\"authToken\", userData?.token);\n            router.push('/');\n        } catch (error) {\n            console.log(\"Registration failed:\", error);\n            throw error;\n        }\n    };\n    // LOGOUT\n    const logout = async ()=>{\n        try {\n            await _services_authService__WEBPACK_IMPORTED_MODULE_3__.authService.logout();\n        } catch (error) {\n            console.log(\"Logout failed:\", error);\n        } finally{\n            setUser(null);\n            setAuthToken(null);\n            localStorage.removeItem(\"user\");\n            localStorage.removeItem(\"authToken\");\n            router.push(\"/auth\");\n        }\n    };\n    const value = {\n        user,\n        authToken,\n        isAuthenticated: !!user,\n        login,\n        register,\n        logout\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: value,\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Denise\\\\Project\\\\genvoice-surveys\\\\frontend\\\\context\\\\AuthContext.js\",\n        lineNumber: 105,\n        columnNumber: 9\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AuthContext);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L0F1dGhDb250ZXh0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMkQ7QUFDbkI7QUFDYztBQUV0RCxNQUFNSyw0QkFBY0wsb0RBQWFBLENBQUM7QUFFM0IsTUFBTU0sZUFBZSxDQUFDLEVBQUVDLFFBQVEsRUFBRTtJQUVyQyxNQUFNQyxTQUFTTCxzREFBU0E7SUFFeEIsTUFBTSxDQUFDTSxNQUFNQyxRQUFRLEdBQUdULCtDQUFRQSxDQUFDO0lBQ2pDLE1BQU0sQ0FBQ1UsV0FBV0MsYUFBYSxHQUFHWCwrQ0FBUUEsQ0FBQztJQUUzQ0MsZ0RBQVNBO2tDQUFDO1lBQ04sSUFBSSxLQUE2QixFQUFFLEVBR2xDO1lBRUQsSUFBSSxLQUE2QixFQUFFLEVBRWxDO1FBQ0w7aUNBQUcsRUFBRTtJQUVMLHdDQUF3QztJQUN4Q0EsZ0RBQVNBO2tDQUFDO1lBQ05VLGFBQWFELFlBQVksMEJBQTBCO1FBQ3ZEO2lDQUFHO1FBQUNBO0tBQVU7SUFFZCwwQkFBMEI7SUFDMUJULGdEQUFTQTtrQ0FBQztZQUNOLElBQUksQ0FBQ1MsV0FBVztnQkFDWk87WUFDSjtRQUNKO2lDQUFHO1FBQUNQO0tBQVU7SUFFZFQsZ0RBQVNBO2tDQUFDO1lBQ04sSUFBSU8sTUFBTTtnQkFDTkssYUFBYUssT0FBTyxDQUFDLFFBQVFILEtBQUtJLFNBQVMsQ0FBQ1g7WUFDaEQsT0FBTztnQkFDSEssYUFBYU8sVUFBVSxDQUFDO1lBQzVCO1FBQ0o7aUNBQUc7UUFBQ1o7S0FBSztJQUVULFNBQVM7SUFDVCxNQUFNYSxRQUFRLE9BQU9DLFVBQVVDO1FBQzNCLElBQUk7WUFDQSxNQUFNQyxXQUFXLE1BQU1yQiw4REFBV0EsQ0FBQ2tCLEtBQUssQ0FBQ0MsVUFBVUM7WUFDbkQsSUFBSSxDQUFDQyxVQUFVO1lBRWZmLFFBQVFlLFVBQVVoQjtZQUNsQkcsYUFBYWEsVUFBVUM7WUFDdkJaLGFBQWFLLE9BQU8sQ0FBQyxhQUFhTSxVQUFVQztZQUU1Qyx3QkFBd0I7WUFDeEJsQixPQUFPbUIsSUFBSSxDQUFDO1FBQ2hCLEVBQUUsT0FBT0MsT0FBTztZQUNaQyxRQUFRQyxHQUFHLENBQUMsaUJBQWlCRjtZQUM3QixNQUFNQTtRQUNWO0lBQ0o7SUFFQSxXQUFXO0lBQ1gsTUFBTUcsV0FBVyxPQUFPUixVQUFVQztRQUM5QixJQUFJO1lBQ0EsTUFBTUMsV0FBVyxNQUFNckIsOERBQVdBLENBQUMyQixRQUFRLENBQUNSLFVBQVVDO1lBQ3RELElBQUksQ0FBQ0MsVUFBVTtZQUVmZixRQUFRZSxVQUFVaEI7WUFDbEJHLGFBQWFhLFVBQVVDO1lBQ3ZCWixhQUFhSyxPQUFPLENBQUMsYUFBYU0sVUFBVUM7WUFFNUNsQixPQUFPbUIsSUFBSSxDQUFDO1FBQ2hCLEVBQUUsT0FBT0MsT0FBTztZQUNaQyxRQUFRQyxHQUFHLENBQUMsd0JBQXdCRjtZQUNwQyxNQUFNQTtRQUNWO0lBQ0o7SUFFQSxTQUFTO0lBQ1QsTUFBTVYsU0FBUztRQUNYLElBQUk7WUFDQSxNQUFNZCw4REFBV0EsQ0FBQ2MsTUFBTTtRQUM1QixFQUFFLE9BQU9VLE9BQU87WUFDWkMsUUFBUUMsR0FBRyxDQUFDLGtCQUFrQkY7UUFDbEMsU0FBVTtZQUNObEIsUUFBUTtZQUNSRSxhQUFhO1lBQ2JFLGFBQWFPLFVBQVUsQ0FBQztZQUN4QlAsYUFBYU8sVUFBVSxDQUFDO1lBQ3hCYixPQUFPbUIsSUFBSSxDQUFDO1FBQ2hCO0lBQ0o7SUFFQSxNQUFNSyxRQUFRO1FBQ1Z2QjtRQUNBRTtRQUNBc0IsaUJBQWlCLENBQUMsQ0FBQ3hCO1FBQ25CYTtRQUNBUztRQUNBYjtJQUNKO0lBRUEscUJBQ0ksOERBQUNiLFlBQVk2QixRQUFRO1FBQUNGLE9BQU9BO2tCQUN4QnpCOzs7Ozs7QUFHYixFQUFFO0FBRUYsaUVBQWVGLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIkM6XFxEZW5pc2VcXFByb2plY3RcXGdlbnZvaWNlLXN1cnZleXNcXGZyb250ZW5kXFxjb250ZXh0XFxBdXRoQ29udGV4dC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IGF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvYXV0aFNlcnZpY2UnO1xyXG5cclxuY29uc3QgQXV0aENvbnRleHQgPSBjcmVhdGVDb250ZXh0KG51bGwpO1xyXG5cclxuZXhwb3J0IGNvbnN0IEF1dGhQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICAgIFxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gICAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbYXV0aFRva2VuLCBzZXRBdXRoVG9rZW5dID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICBjb25zdCBzdG9yZWRVc2VyID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyXCIpO1xyXG4gICAgICAgICAgICBzZXRVc2VyKHN0b3JlZFVzZXIgPyBKU09OLnBhcnNlKHN0b3JlZFVzZXIpIDogbnVsbCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICBzZXRBdXRoVG9rZW4obG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhdXRoVG9rZW5cIikgfHwgbnVsbCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pO1xyXG4gICAgXHJcbiAgICAvLyBTeW5jIHRva2VuIHdpdGggYXhpb3MgZGVmYXVsdCBoZWFkZXJzXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNldEF1dGhUb2tlbihhdXRoVG9rZW4pOyAvLyBTZXQgdG9rZW4gaW4gQVBJIGNsaWVudFxyXG4gICAgfSwgW2F1dGhUb2tlbl0pO1xyXG5cclxuICAgIC8vIEF1dG8tbG9nb3V0IGlmIG5vIHRva2VuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmICghYXV0aFRva2VuKSB7XHJcbiAgICAgICAgICAgIGxvZ291dCgpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFthdXRoVG9rZW5dKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmICh1c2VyKSB7XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidXNlclwiLCBKU09OLnN0cmluZ2lmeSh1c2VyKSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJ1c2VyXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFt1c2VyXSk7XHJcblxyXG4gICAgLy8gTE9HSU4gXHJcbiAgICBjb25zdCBsb2dpbiA9IGFzeW5jICh1c2VybmFtZSwgcGFzc3dvcmQpID0+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCB1c2VyRGF0YSA9IGF3YWl0IGF1dGhTZXJ2aWNlLmxvZ2luKHVzZXJuYW1lLCBwYXNzd29yZCk7XHJcbiAgICAgICAgICAgIGlmICghdXNlckRhdGEpIHJldHVybjtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHNldFVzZXIodXNlckRhdGE/LnVzZXIpO1xyXG4gICAgICAgICAgICBzZXRBdXRoVG9rZW4odXNlckRhdGE/LnRva2VuKTtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJhdXRoVG9rZW5cIiwgdXNlckRhdGE/LnRva2VuKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHVzZXJEYXRhKVxyXG4gICAgICAgICAgICByb3V0ZXIucHVzaCgnLycpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTG9naW4gZmFpbGVkOlwiLCBlcnJvcik7XHJcbiAgICAgICAgICAgIHRocm93IGVycm9yO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgLy8gUkVHSVNURVJcclxuICAgIGNvbnN0IHJlZ2lzdGVyID0gYXN5bmMgKHVzZXJuYW1lLCBwYXNzd29yZCkgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHVzZXJEYXRhID0gYXdhaXQgYXV0aFNlcnZpY2UucmVnaXN0ZXIodXNlcm5hbWUsIHBhc3N3b3JkKTtcclxuICAgICAgICAgICAgaWYgKCF1c2VyRGF0YSkgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgc2V0VXNlcih1c2VyRGF0YT8udXNlcik7XHJcbiAgICAgICAgICAgIHNldEF1dGhUb2tlbih1c2VyRGF0YT8udG9rZW4pO1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImF1dGhUb2tlblwiLCB1c2VyRGF0YT8udG9rZW4pO1xyXG5cclxuICAgICAgICAgICAgcm91dGVyLnB1c2goJy8nKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlJlZ2lzdHJhdGlvbiBmYWlsZWQ6XCIsIGVycm9yKTtcclxuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAvLyBMT0dPVVRcclxuICAgIGNvbnN0IGxvZ291dCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBhd2FpdCBhdXRoU2VydmljZS5sb2dvdXQoKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkxvZ291dCBmYWlsZWQ6XCIsIGVycm9yKTtcclxuICAgICAgICB9IGZpbmFsbHkge1xyXG4gICAgICAgICAgICBzZXRVc2VyKG51bGwpO1xyXG4gICAgICAgICAgICBzZXRBdXRoVG9rZW4obnVsbCk7XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwidXNlclwiKTtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJhdXRoVG9rZW5cIik7XHJcbiAgICAgICAgICAgIHJvdXRlci5wdXNoKFwiL2F1dGhcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHZhbHVlID0ge1xyXG4gICAgICAgIHVzZXIsXHJcbiAgICAgICAgYXV0aFRva2VuLFxyXG4gICAgICAgIGlzQXV0aGVudGljYXRlZDogISF1c2VyLFxyXG4gICAgICAgIGxvZ2luLCBcclxuICAgICAgICByZWdpc3RlcixcclxuICAgICAgICBsb2dvdXRcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8QXV0aENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3ZhbHVlfT5cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvQXV0aENvbnRleHQuUHJvdmlkZXI+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXV0aENvbnRleHQ7Il0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJvdXRlciIsImF1dGhTZXJ2aWNlIiwiQXV0aENvbnRleHQiLCJBdXRoUHJvdmlkZXIiLCJjaGlsZHJlbiIsInJvdXRlciIsInVzZXIiLCJzZXRVc2VyIiwiYXV0aFRva2VuIiwic2V0QXV0aFRva2VuIiwic3RvcmVkVXNlciIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJKU09OIiwicGFyc2UiLCJsb2dvdXQiLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwicmVtb3ZlSXRlbSIsImxvZ2luIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsInVzZXJEYXRhIiwidG9rZW4iLCJwdXNoIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwicmVnaXN0ZXIiLCJ2YWx1ZSIsImlzQXV0aGVudGljYXRlZCIsIlByb3ZpZGVyIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./context/AuthContext.js\n");

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2F_error&preferredRegion=&absolutePagePath=.%2Fnode_modules%5Cnext%5Cdist%5Cpages%5C_error.js&absoluteAppPath=private-next-pages%2F_app&absoluteDocumentPath=private-next-pages%2F_document&middlewareConfigBase64=e30%3D!":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2F_error&preferredRegion=&absolutePagePath=.%2Fnode_modules%5Cnext%5Cdist%5Cpages%5C_error.js&absoluteAppPath=private-next-pages%2F_app&absoluteDocumentPath=private-next-pages%2F_document&middlewareConfigBase64=e30%3D! ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   getServerSideProps: () => (/* binding */ getServerSideProps),\n/* harmony export */   getStaticPaths: () => (/* binding */ getStaticPaths),\n/* harmony export */   getStaticProps: () => (/* binding */ getStaticProps),\n/* harmony export */   reportWebVitals: () => (/* binding */ reportWebVitals),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   unstable_getServerProps: () => (/* binding */ unstable_getServerProps),\n/* harmony export */   unstable_getServerSideProps: () => (/* binding */ unstable_getServerSideProps),\n/* harmony export */   unstable_getStaticParams: () => (/* binding */ unstable_getStaticParams),\n/* harmony export */   unstable_getStaticPaths: () => (/* binding */ unstable_getStaticPaths),\n/* harmony export */   unstable_getStaticProps: () => (/* binding */ unstable_getStaticProps)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/pages/module.compiled */ \"./node_modules/next/dist/server/route-modules/pages/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/build/templates/helpers */ \"./node_modules/next/dist/build/templates/helpers.js\");\n/* harmony import */ var private_next_pages_document__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! private-next-pages/_document */ \"./node_modules/next/dist/pages/_document.js\");\n/* harmony import */ var private_next_pages_document__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(private_next_pages_document__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var private_next_pages_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! private-next-pages/_app */ \"./pages/_app.js\");\n/* harmony import */ var _node_modules_next_dist_pages_error_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules\\next\\dist\\pages\\_error.js */ \"./node_modules/next/dist/pages/_error.js\");\n/* harmony import */ var _node_modules_next_dist_pages_error_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_pages_error_js__WEBPACK_IMPORTED_MODULE_5__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([private_next_pages_app__WEBPACK_IMPORTED_MODULE_4__]);\nprivate_next_pages_app__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n// Import the app and document modules.\n\n\n// Import the userland code.\n\n// Re-export the component (should be the default export).\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_node_modules_next_dist_pages_error_js__WEBPACK_IMPORTED_MODULE_5__, 'default'));\n// Re-export methods.\nconst getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_node_modules_next_dist_pages_error_js__WEBPACK_IMPORTED_MODULE_5__, 'getStaticProps');\nconst getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_node_modules_next_dist_pages_error_js__WEBPACK_IMPORTED_MODULE_5__, 'getStaticPaths');\nconst getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_node_modules_next_dist_pages_error_js__WEBPACK_IMPORTED_MODULE_5__, 'getServerSideProps');\nconst config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_node_modules_next_dist_pages_error_js__WEBPACK_IMPORTED_MODULE_5__, 'config');\nconst reportWebVitals = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_node_modules_next_dist_pages_error_js__WEBPACK_IMPORTED_MODULE_5__, 'reportWebVitals');\n// Re-export legacy methods.\nconst unstable_getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_node_modules_next_dist_pages_error_js__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticProps');\nconst unstable_getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_node_modules_next_dist_pages_error_js__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticPaths');\nconst unstable_getStaticParams = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_node_modules_next_dist_pages_error_js__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticParams');\nconst unstable_getServerProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_node_modules_next_dist_pages_error_js__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerProps');\nconst unstable_getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_node_modules_next_dist_pages_error_js__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerSideProps');\n// Create and export the route module that will be consumed.\nconst routeModule = new next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES,\n        page: \"/_error\",\n        pathname: \"/_error\",\n        // The following aren't used in production.\n        bundlePath: '',\n        filename: ''\n    },\n    components: {\n        // default export might not exist when optimized for data only\n        App: private_next_pages_app__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n        Document: (private_next_pages_document__WEBPACK_IMPORTED_MODULE_3___default())\n    },\n    userland: _node_modules_next_dist_pages_error_js__WEBPACK_IMPORTED_MODULE_5__\n});\n\n//# sourceMappingURL=pages.js.map\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXJvdXRlLWxvYWRlci9pbmRleC5qcz9raW5kPVBBR0VTJnBhZ2U9JTJGX2Vycm9yJnByZWZlcnJlZFJlZ2lvbj0mYWJzb2x1dGVQYWdlUGF0aD0uJTJGbm9kZV9tb2R1bGVzJTVDbmV4dCU1Q2Rpc3QlNUNwYWdlcyU1Q19lcnJvci5qcyZhYnNvbHV0ZUFwcFBhdGg9cHJpdmF0ZS1uZXh0LXBhZ2VzJTJGX2FwcCZhYnNvbHV0ZURvY3VtZW50UGF0aD1wcml2YXRlLW5leHQtcGFnZXMlMkZfZG9jdW1lbnQmbWlkZGxld2FyZUNvbmZpZ0Jhc2U2ND1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF3RjtBQUNoQztBQUNFO0FBQzFEO0FBQ3lEO0FBQ1Y7QUFDL0M7QUFDeUU7QUFDekU7QUFDQSxpRUFBZSx3RUFBSyxDQUFDLG1FQUFRLFlBQVksRUFBQztBQUMxQztBQUNPLHVCQUF1Qix3RUFBSyxDQUFDLG1FQUFRO0FBQ3JDLHVCQUF1Qix3RUFBSyxDQUFDLG1FQUFRO0FBQ3JDLDJCQUEyQix3RUFBSyxDQUFDLG1FQUFRO0FBQ3pDLGVBQWUsd0VBQUssQ0FBQyxtRUFBUTtBQUM3Qix3QkFBd0Isd0VBQUssQ0FBQyxtRUFBUTtBQUM3QztBQUNPLGdDQUFnQyx3RUFBSyxDQUFDLG1FQUFRO0FBQzlDLGdDQUFnQyx3RUFBSyxDQUFDLG1FQUFRO0FBQzlDLGlDQUFpQyx3RUFBSyxDQUFDLG1FQUFRO0FBQy9DLGdDQUFnQyx3RUFBSyxDQUFDLG1FQUFRO0FBQzlDLG9DQUFvQyx3RUFBSyxDQUFDLG1FQUFRO0FBQ3pEO0FBQ08sd0JBQXdCLGtHQUFnQjtBQUMvQztBQUNBLGNBQWMsa0VBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsYUFBYSw4REFBVztBQUN4QixrQkFBa0Isb0VBQWdCO0FBQ2xDLEtBQUs7QUFDTCxZQUFZO0FBQ1osQ0FBQzs7QUFFRCxpQyIsInNvdXJjZXMiOlsiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBhZ2VzUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1tb2R1bGVzL3BhZ2VzL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgaG9pc3QgfSBmcm9tIFwibmV4dC9kaXN0L2J1aWxkL3RlbXBsYXRlcy9oZWxwZXJzXCI7XG4vLyBJbXBvcnQgdGhlIGFwcCBhbmQgZG9jdW1lbnQgbW9kdWxlcy5cbmltcG9ydCAqIGFzIGRvY3VtZW50IGZyb20gXCJwcml2YXRlLW5leHQtcGFnZXMvX2RvY3VtZW50XCI7XG5pbXBvcnQgKiBhcyBhcHAgZnJvbSBcInByaXZhdGUtbmV4dC1wYWdlcy9fYXBwXCI7XG4vLyBJbXBvcnQgdGhlIHVzZXJsYW5kIGNvZGUuXG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiLi9ub2RlX21vZHVsZXNcXFxcbmV4dFxcXFxkaXN0XFxcXHBhZ2VzXFxcXF9lcnJvci5qc1wiO1xuLy8gUmUtZXhwb3J0IHRoZSBjb21wb25lbnQgKHNob3VsZCBiZSB0aGUgZGVmYXVsdCBleHBvcnQpLlxuZXhwb3J0IGRlZmF1bHQgaG9pc3QodXNlcmxhbmQsICdkZWZhdWx0Jyk7XG4vLyBSZS1leHBvcnQgbWV0aG9kcy5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGhvaXN0KHVzZXJsYW5kLCAnZ2V0U3RhdGljUHJvcHMnKTtcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQYXRocyA9IGhvaXN0KHVzZXJsYW5kLCAnZ2V0U3RhdGljUGF0aHMnKTtcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSBob2lzdCh1c2VybGFuZCwgJ2dldFNlcnZlclNpZGVQcm9wcycpO1xuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IGhvaXN0KHVzZXJsYW5kLCAnY29uZmlnJyk7XG5leHBvcnQgY29uc3QgcmVwb3J0V2ViVml0YWxzID0gaG9pc3QodXNlcmxhbmQsICdyZXBvcnRXZWJWaXRhbHMnKTtcbi8vIFJlLWV4cG9ydCBsZWdhY3kgbWV0aG9kcy5cbmV4cG9ydCBjb25zdCB1bnN0YWJsZV9nZXRTdGF0aWNQcm9wcyA9IGhvaXN0KHVzZXJsYW5kLCAndW5zdGFibGVfZ2V0U3RhdGljUHJvcHMnKTtcbmV4cG9ydCBjb25zdCB1bnN0YWJsZV9nZXRTdGF0aWNQYXRocyA9IGhvaXN0KHVzZXJsYW5kLCAndW5zdGFibGVfZ2V0U3RhdGljUGF0aHMnKTtcbmV4cG9ydCBjb25zdCB1bnN0YWJsZV9nZXRTdGF0aWNQYXJhbXMgPSBob2lzdCh1c2VybGFuZCwgJ3Vuc3RhYmxlX2dldFN0YXRpY1BhcmFtcycpO1xuZXhwb3J0IGNvbnN0IHVuc3RhYmxlX2dldFNlcnZlclByb3BzID0gaG9pc3QodXNlcmxhbmQsICd1bnN0YWJsZV9nZXRTZXJ2ZXJQcm9wcycpO1xuZXhwb3J0IGNvbnN0IHVuc3RhYmxlX2dldFNlcnZlclNpZGVQcm9wcyA9IGhvaXN0KHVzZXJsYW5kLCAndW5zdGFibGVfZ2V0U2VydmVyU2lkZVByb3BzJyk7XG4vLyBDcmVhdGUgYW5kIGV4cG9ydCB0aGUgcm91dGUgbW9kdWxlIHRoYXQgd2lsbCBiZSBjb25zdW1lZC5cbmV4cG9ydCBjb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBQYWdlc1JvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5QQUdFUyxcbiAgICAgICAgcGFnZTogXCIvX2Vycm9yXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9fZXJyb3JcIixcbiAgICAgICAgLy8gVGhlIGZvbGxvd2luZyBhcmVuJ3QgdXNlZCBpbiBwcm9kdWN0aW9uLlxuICAgICAgICBidW5kbGVQYXRoOiAnJyxcbiAgICAgICAgZmlsZW5hbWU6ICcnXG4gICAgfSxcbiAgICBjb21wb25lbnRzOiB7XG4gICAgICAgIC8vIGRlZmF1bHQgZXhwb3J0IG1pZ2h0IG5vdCBleGlzdCB3aGVuIG9wdGltaXplZCBmb3IgZGF0YSBvbmx5XG4gICAgICAgIEFwcDogYXBwLmRlZmF1bHQsXG4gICAgICAgIERvY3VtZW50OiBkb2N1bWVudC5kZWZhdWx0XG4gICAgfSxcbiAgICB1c2VybGFuZFxufSk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBhZ2VzLmpzLm1hcCJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2F_error&preferredRegion=&absolutePagePath=.%2Fnode_modules%5Cnext%5Cdist%5Cpages%5C_error.js&absoluteAppPath=private-next-pages%2F_app&absoluteDocumentPath=private-next-pages%2F_document&middlewareConfigBase64=e30%3D!\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyApp)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/AuthContext */ \"./context/AuthContext.js\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_auth_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/auth.css */ \"./styles/auth.css\");\n/* harmony import */ var _styles_auth_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_auth_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_survey_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/survey.css */ \"./styles/survey.css\");\n/* harmony import */ var _styles_survey_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_survey_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_adminDashboard_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/adminDashboard.css */ \"./styles/adminDashboard.css\");\n/* harmony import */ var _styles_adminDashboard_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_adminDashboard_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _styles_settings_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/settings.css */ \"./styles/settings.css\");\n/* harmony import */ var _styles_settings_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_settings_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _styles_navbar_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/navbar.css */ \"./styles/navbar.css\");\n/* harmony import */ var _styles_navbar_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_navbar_css__WEBPACK_IMPORTED_MODULE_7__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_context_AuthContext__WEBPACK_IMPORTED_MODULE_1__]);\n_context_AuthContext__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\n\n\nfunction MyApp({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_AuthContext__WEBPACK_IMPORTED_MODULE_1__.AuthProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"C:\\\\Denise\\\\Project\\\\genvoice-surveys\\\\frontend\\\\pages\\\\_app.js\",\n            lineNumber: 12,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Denise\\\\Project\\\\genvoice-surveys\\\\frontend\\\\pages\\\\_app.js\",\n        lineNumber: 11,\n        columnNumber: 9\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXNEO0FBQ3ZCO0FBQ0g7QUFDRTtBQUNRO0FBQ1A7QUFDRDtBQUVmLFNBQVNDLE1BQU0sRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQUU7SUFDbEQscUJBQ0ksOERBQUNILDhEQUFZQTtrQkFDVCw0RUFBQ0U7WUFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7OztBQUdwQyIsInNvdXJjZXMiOlsiQzpcXERlbmlzZVxcUHJvamVjdFxcZ2Vudm9pY2Utc3VydmV5c1xcZnJvbnRlbmRcXHBhZ2VzXFxfYXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEF1dGhQcm92aWRlciB9IGZyb20gXCIuLi9jb250ZXh0L0F1dGhDb250ZXh0XCI7XHJcbmltcG9ydCBcIi4uL3N0eWxlcy9nbG9iYWxzLmNzc1wiOyBcclxuaW1wb3J0IFwiLi4vc3R5bGVzL2F1dGguY3NzXCI7XHJcbmltcG9ydCBcIi4uL3N0eWxlcy9zdXJ2ZXkuY3NzXCI7XHJcbmltcG9ydCBcIi4uL3N0eWxlcy9hZG1pbkRhc2hib2FyZC5jc3NcIjtcclxuaW1wb3J0IFwiLi4vc3R5bGVzL3NldHRpbmdzLmNzc1wiXHJcbmltcG9ydCBcIi4uL3N0eWxlcy9uYXZiYXIuY3NzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEF1dGhQcm92aWRlcj5cclxuICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICAgIDwvQXV0aFByb3ZpZGVyPlxyXG4gICAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiQXV0aFByb3ZpZGVyIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./services/apiService.js":
/*!********************************!*\
  !*** ./services/apiService.js ***!
  \********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   apiService: () => (/* binding */ apiService),\n/* harmony export */   setAuthToken: () => (/* binding */ setAuthToken)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var _services_authService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/authService */ \"./services/authService.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__, _services_authService__WEBPACK_IMPORTED_MODULE_1__]);\n([axios__WEBPACK_IMPORTED_MODULE_0__, _services_authService__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\nconst API_URL = \"http://localhost:5000\";\nconst apiClient = axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].create({\n    baseURL: API_URL,\n    headers: {\n        \"Content-Type\": \"application/json\"\n    },\n    withCredentials: true\n});\n// Add a request interceptor\n// apiClient.interceptors.request.use((config) => {\n//     console.log(\"Outgoing request:\", config.url);\n//     console.log(\"Authorization Header:\", config.headers.Authorization);\n//     console.log(localStorage.getItem(\"authToken\"));\n//     return config;\n// });\n// Function : set the Bearer token\nconst setAuthToken = (token)=>{\n    if (token) {\n        localStorage.setItem(\"authToken\", token);\n        apiClient.defaults.headers[\"Authorization\"] = `Bearer ${token}`;\n    } else {\n        localStorage.removeItem(\"authToken\");\n        delete apiClient.defaults.headers[\"Authorization\"];\n    }\n};\nconst apiService = {\n    get: (url, params = {})=>apiClient.get(url, {\n            params\n        }),\n    post: (url, data)=>apiClient.post(url, data),\n    put: (url, data)=>apiClient.put(url, data),\n    delete: (url)=>apiClient.delete(url)\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZXJ2aWNlcy9hcGlTZXJ2aWNlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBMEI7QUFDdUI7QUFFakQsTUFBTUUsVUFBVUMsdUJBQStCO0FBRS9DLE1BQU1HLFlBQVlOLG9EQUFZLENBQUM7SUFDM0JRLFNBQVNOO0lBQ1RPLFNBQVM7UUFBRSxnQkFBaUI7SUFBbUI7SUFDL0NDLGlCQUFpQjtBQUNyQjtBQUVBLDRCQUE0QjtBQUM1QixtREFBbUQ7QUFDbkQsb0RBQW9EO0FBQ3BELDBFQUEwRTtBQUMxRSxzREFBc0Q7QUFFdEQscUJBQXFCO0FBQ3JCLE1BQU07QUFFTixrQ0FBa0M7QUFDM0IsTUFBTUMsZUFBZSxDQUFDQztJQUN6QixJQUFJQSxPQUFPO1FBQ1BDLGFBQWFDLE9BQU8sQ0FBQyxhQUFhRjtRQUNsQ04sVUFBVVMsUUFBUSxDQUFDTixPQUFPLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxPQUFPLEVBQUVHLE9BQU87SUFDbkUsT0FBTztRQUNIQyxhQUFhRyxVQUFVLENBQUM7UUFDeEIsT0FBT1YsVUFBVVMsUUFBUSxDQUFDTixPQUFPLENBQUMsZ0JBQWdCO0lBQ3REO0FBQ0osRUFBRTtBQUVLLE1BQU1RLGFBQWE7SUFDdEJDLEtBQU0sQ0FBQ0MsS0FBS0MsU0FBUyxDQUFDLENBQUMsR0FBUWQsVUFBVVksR0FBRyxDQUFDQyxLQUFLO1lBQUVDO1FBQU87SUFDM0RDLE1BQU0sQ0FBQ0YsS0FBS0csT0FBbUJoQixVQUFVZSxJQUFJLENBQUNGLEtBQUtHO0lBQ25EQyxLQUFNLENBQUNKLEtBQUtHLE9BQW1CaEIsVUFBVWlCLEdBQUcsQ0FBQ0osS0FBS0c7SUFDbERFLFFBQVEsQ0FBQ0wsTUFBc0JiLFVBQVVrQixNQUFNLENBQUNMO0FBQ3BELEVBQUUiLCJzb3VyY2VzIjpbIkM6XFxEZW5pc2VcXFByb2plY3RcXGdlbnZvaWNlLXN1cnZleXNcXGZyb250ZW5kXFxzZXJ2aWNlc1xcYXBpU2VydmljZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IGxvZ291dCB9IGZyb20gJy4uL3NlcnZpY2VzL2F1dGhTZXJ2aWNlJztcclxuXHJcbmNvbnN0IEFQSV9VUkwgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfVVJMO1xyXG5cclxuY29uc3QgYXBpQ2xpZW50ID0gYXhpb3MuY3JlYXRlKHtcclxuICAgIGJhc2VVUkw6IEFQSV9VUkwsXHJcbiAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCIgOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxyXG4gICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlLFxyXG59KVxyXG5cclxuLy8gQWRkIGEgcmVxdWVzdCBpbnRlcmNlcHRvclxyXG4vLyBhcGlDbGllbnQuaW50ZXJjZXB0b3JzLnJlcXVlc3QudXNlKChjb25maWcpID0+IHtcclxuLy8gICAgIGNvbnNvbGUubG9nKFwiT3V0Z29pbmcgcmVxdWVzdDpcIiwgY29uZmlnLnVybCk7XHJcbi8vICAgICBjb25zb2xlLmxvZyhcIkF1dGhvcml6YXRpb24gSGVhZGVyOlwiLCBjb25maWcuaGVhZGVycy5BdXRob3JpemF0aW9uKTtcclxuLy8gICAgIGNvbnNvbGUubG9nKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYXV0aFRva2VuXCIpKTtcclxuXHJcbi8vICAgICByZXR1cm4gY29uZmlnO1xyXG4vLyB9KTtcclxuXHJcbi8vIEZ1bmN0aW9uIDogc2V0IHRoZSBCZWFyZXIgdG9rZW5cclxuZXhwb3J0IGNvbnN0IHNldEF1dGhUb2tlbiA9ICh0b2tlbikgPT4ge1xyXG4gICAgaWYgKHRva2VuKSB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJhdXRoVG9rZW5cIiwgdG9rZW4pO1xyXG4gICAgICAgIGFwaUNsaWVudC5kZWZhdWx0cy5oZWFkZXJzW1wiQXV0aG9yaXphdGlvblwiXSA9IGBCZWFyZXIgJHt0b2tlbn1gO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcImF1dGhUb2tlblwiKTtcclxuICAgICAgICBkZWxldGUgYXBpQ2xpZW50LmRlZmF1bHRzLmhlYWRlcnNbXCJBdXRob3JpemF0aW9uXCJdO1xyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGFwaVNlcnZpY2UgPSB7XHJcbiAgICBnZXQgOiAodXJsLCBwYXJhbXMgPSB7fSkgICAgPT4gYXBpQ2xpZW50LmdldCh1cmwsIHsgcGFyYW1zIH0pLFxyXG4gICAgcG9zdDogKHVybCwgZGF0YSkgICAgICAgICAgID0+IGFwaUNsaWVudC5wb3N0KHVybCwgZGF0YSksXHJcbiAgICBwdXQgOiAodXJsLCBkYXRhKSAgICAgICAgICAgPT4gYXBpQ2xpZW50LnB1dCh1cmwsIGRhdGEpLFxyXG4gICAgZGVsZXRlOiAodXJsKSAgICAgICAgICAgICAgID0+IGFwaUNsaWVudC5kZWxldGUodXJsKSBcclxufTsiXSwibmFtZXMiOlsiYXhpb3MiLCJsb2dvdXQiLCJBUElfVVJMIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0FQSV9VUkwiLCJhcGlDbGllbnQiLCJjcmVhdGUiLCJiYXNlVVJMIiwiaGVhZGVycyIsIndpdGhDcmVkZW50aWFscyIsInNldEF1dGhUb2tlbiIsInRva2VuIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsImRlZmF1bHRzIiwicmVtb3ZlSXRlbSIsImFwaVNlcnZpY2UiLCJnZXQiLCJ1cmwiLCJwYXJhbXMiLCJwb3N0IiwiZGF0YSIsInB1dCIsImRlbGV0ZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./services/apiService.js\n");

/***/ }),

/***/ "./services/authService.js":
/*!*********************************!*\
  !*** ./services/authService.js ***!
  \*********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authService: () => (/* binding */ authService)\n/* harmony export */ });\n/* harmony import */ var _apiService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apiService */ \"./services/apiService.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_apiService__WEBPACK_IMPORTED_MODULE_0__]);\n_apiService__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst authService = {\n    register: async (username, password)=>{\n        try {\n            const res = await _apiService__WEBPACK_IMPORTED_MODULE_0__.apiService.post(\"/register\", {\n                username,\n                password\n            });\n            (0,_apiService__WEBPACK_IMPORTED_MODULE_0__.setAuthToken)(res.data.token);\n            return res.data;\n        } catch (e) {\n            console.log(\"register error:\", e);\n            throw new Error(e.response?.data?.message || \"Registration failed\");\n        }\n    },\n    login: async (username, password)=>{\n        try {\n            // console.log(\"Login request body:\", { username, password });\n            const res = await _apiService__WEBPACK_IMPORTED_MODULE_0__.apiService.post(\"/login\", {\n                username,\n                password\n            });\n            (0,_apiService__WEBPACK_IMPORTED_MODULE_0__.setAuthToken)(res.data.token);\n            return res.data;\n        } catch (e) {\n            console.log(\"login error:\", e);\n            throw new Error(e.response?.data?.message || \"Login failed\");\n        }\n    },\n    logout: async ()=>{\n        try {\n            await _apiService__WEBPACK_IMPORTED_MODULE_0__.apiService.post(\"/logout\");\n            (0,_apiService__WEBPACK_IMPORTED_MODULE_0__.setAuthToken)(null);\n        } catch (e) {\n            console.log(\"logout error:\", e);\n            throw new Error(e.response?.data?.message || \"Logout failed\");\n        }\n    }\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZXJ2aWNlcy9hdXRoU2VydmljZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUF3RDtBQUVqRCxNQUFNRSxjQUFjO0lBQ3ZCQyxVQUFVLE9BQU9DLFVBQVVDO1FBQ3ZCLElBQUk7WUFDQSxNQUFNQyxNQUFNLE1BQU1OLG1EQUFVQSxDQUFDTyxJQUFJLENBQUMsYUFBYTtnQkFBRUg7Z0JBQVVDO1lBQVM7WUFDcEVKLHlEQUFZQSxDQUFDSyxJQUFJRSxJQUFJLENBQUNDLEtBQUs7WUFDM0IsT0FBT0gsSUFBSUUsSUFBSTtRQUNuQixFQUFFLE9BQU9FLEdBQUc7WUFDUkMsUUFBUUMsR0FBRyxDQUFDLG1CQUFtQkY7WUFDL0IsTUFBTSxJQUFJRyxNQUFNSCxFQUFFSSxRQUFRLEVBQUVOLE1BQU1PLFdBQVc7UUFDakQ7SUFDSjtJQUNBQyxPQUFPLE9BQU9aLFVBQVVDO1FBQ3BCLElBQUk7WUFDQSw4REFBOEQ7WUFFOUQsTUFBTUMsTUFBTSxNQUFNTixtREFBVUEsQ0FBQ08sSUFBSSxDQUFDLFVBQVU7Z0JBQUVIO2dCQUFVQztZQUFTO1lBQ2pFSix5REFBWUEsQ0FBQ0ssSUFBSUUsSUFBSSxDQUFDQyxLQUFLO1lBQzNCLE9BQU9ILElBQUlFLElBQUk7UUFDbkIsRUFBRSxPQUFPRSxHQUFHO1lBQ1JDLFFBQVFDLEdBQUcsQ0FBQyxnQkFBZ0JGO1lBQzVCLE1BQU0sSUFBSUcsTUFBTUgsRUFBRUksUUFBUSxFQUFFTixNQUFNTyxXQUFXO1FBQ2pEO0lBQ0o7SUFDQUUsUUFBUTtRQUNKLElBQUk7WUFDQSxNQUFNakIsbURBQVVBLENBQUNPLElBQUksQ0FBQztZQUN0Qk4seURBQVlBLENBQUM7UUFDakIsRUFBRSxPQUFPUyxHQUFHO1lBQ1JDLFFBQVFDLEdBQUcsQ0FBQyxpQkFBaUJGO1lBQzdCLE1BQU0sSUFBSUcsTUFBTUgsRUFBRUksUUFBUSxFQUFFTixNQUFNTyxXQUFXO1FBQ2pEO0lBQ0o7QUFDSixFQUFFIiwic291cmNlcyI6WyJDOlxcRGVuaXNlXFxQcm9qZWN0XFxnZW52b2ljZS1zdXJ2ZXlzXFxmcm9udGVuZFxcc2VydmljZXNcXGF1dGhTZXJ2aWNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFwaVNlcnZpY2UsIHNldEF1dGhUb2tlbiB9IGZyb20gXCIuL2FwaVNlcnZpY2VcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBhdXRoU2VydmljZSA9IHtcclxuICAgIHJlZ2lzdGVyOiBhc3luYyAodXNlcm5hbWUsIHBhc3N3b3JkKSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXBpU2VydmljZS5wb3N0KFwiL3JlZ2lzdGVyXCIsIHsgdXNlcm5hbWUsIHBhc3N3b3JkIH0pO1xyXG4gICAgICAgICAgICBzZXRBdXRoVG9rZW4ocmVzLmRhdGEudG9rZW4pO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzLmRhdGE7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInJlZ2lzdGVyIGVycm9yOlwiLCBlKTtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGUucmVzcG9uc2U/LmRhdGE/Lm1lc3NhZ2UgfHwgXCJSZWdpc3RyYXRpb24gZmFpbGVkXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBsb2dpbjogYXN5bmMgKHVzZXJuYW1lLCBwYXNzd29yZCkgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiTG9naW4gcmVxdWVzdCBib2R5OlwiLCB7IHVzZXJuYW1lLCBwYXNzd29yZCB9KTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGFwaVNlcnZpY2UucG9zdChcIi9sb2dpblwiLCB7IHVzZXJuYW1lLCBwYXNzd29yZCB9KTtcclxuICAgICAgICAgICAgc2V0QXV0aFRva2VuKHJlcy5kYXRhLnRva2VuKVxyXG4gICAgICAgICAgICByZXR1cm4gcmVzLmRhdGE7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImxvZ2luIGVycm9yOlwiLCBlKTtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGUucmVzcG9uc2U/LmRhdGE/Lm1lc3NhZ2UgfHwgXCJMb2dpbiBmYWlsZWRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGxvZ291dDogYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGF3YWl0IGFwaVNlcnZpY2UucG9zdChcIi9sb2dvdXRcIik7XHJcbiAgICAgICAgICAgIHNldEF1dGhUb2tlbihudWxsKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibG9nb3V0IGVycm9yOlwiLCBlKTtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGUucmVzcG9uc2U/LmRhdGE/Lm1lc3NhZ2UgfHwgXCJMb2dvdXQgZmFpbGVkXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbn07Il0sIm5hbWVzIjpbImFwaVNlcnZpY2UiLCJzZXRBdXRoVG9rZW4iLCJhdXRoU2VydmljZSIsInJlZ2lzdGVyIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsInJlcyIsInBvc3QiLCJkYXRhIiwidG9rZW4iLCJlIiwiY29uc29sZSIsImxvZyIsIkVycm9yIiwicmVzcG9uc2UiLCJtZXNzYWdlIiwibG9naW4iLCJsb2dvdXQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./services/authService.js\n");

/***/ }),

/***/ "./styles/adminDashboard.css":
/*!***********************************!*\
  !*** ./styles/adminDashboard.css ***!
  \***********************************/
/***/ (() => {



/***/ }),

/***/ "./styles/auth.css":
/*!*************************!*\
  !*** ./styles/auth.css ***!
  \*************************/
/***/ (() => {



/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "./styles/navbar.css":
/*!***************************!*\
  !*** ./styles/navbar.css ***!
  \***************************/
/***/ (() => {



/***/ }),

/***/ "./styles/settings.css":
/*!*****************************!*\
  !*** ./styles/settings.css ***!
  \*****************************/
/***/ (() => {



/***/ }),

/***/ "./styles/survey.css":
/*!***************************!*\
  !*** ./styles/survey.css ***!
  \***************************/
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

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

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
var __webpack_require__ = require("./webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2F_error&preferredRegion=&absolutePagePath=.%2Fnode_modules%5Cnext%5Cdist%5Cpages%5C_error.js&absoluteAppPath=private-next-pages%2F_app&absoluteDocumentPath=private-next-pages%2F_document&middlewareConfigBase64=e30%3D!")));
module.exports = __webpack_exports__;

})();