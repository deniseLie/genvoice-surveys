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
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AuthProvider: () => (/* binding */ AuthProvider),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"(pages-dir-node)/./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _services_authService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/authService */ \"(pages-dir-node)/./services/authService.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_authService__WEBPACK_IMPORTED_MODULE_3__]);\n_services_authService__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);\nconst AuthProvider = ({ children })=>{\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [authToken, setAuthToken] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"AuthProvider.useEffect\": ()=>{\n            if (false) {}\n            if (false) {}\n        }\n    }[\"AuthProvider.useEffect\"], []);\n    // Sync token with axios default headers\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"AuthProvider.useEffect\": ()=>{\n            setAuthToken(authToken); // Set token in API client\n        }\n    }[\"AuthProvider.useEffect\"], [\n        authToken\n    ]);\n    // Auto-logout if no token\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"AuthProvider.useEffect\": ()=>{\n            if (!authToken) {\n                logout();\n            }\n        }\n    }[\"AuthProvider.useEffect\"], [\n        authToken\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"AuthProvider.useEffect\": ()=>{\n            if (user) {\n                localStorage.setItem(\"user\", JSON.stringify(user));\n            } else {\n                localStorage.removeItem(\"user\");\n            }\n        }\n    }[\"AuthProvider.useEffect\"], [\n        user\n    ]);\n    // LOGIN \n    const login = async (username, password)=>{\n        try {\n            const userData = await _services_authService__WEBPACK_IMPORTED_MODULE_3__.authService.login(username, password);\n            if (!userData) return;\n            setUser(userData?.user);\n            setAuthToken(userData?.token);\n            localStorage.setItem(\"authToken\", userData?.token);\n            // console.log(userData)\n            router.push('/');\n        } catch (error) {\n            console.log(\"Login failed:\", error);\n            throw error;\n        }\n    };\n    // REGISTER\n    const register = async (username, password)=>{\n        try {\n            const userData = await _services_authService__WEBPACK_IMPORTED_MODULE_3__.authService.register(username, password);\n            if (!userData) return;\n            setUser(userData?.user);\n            setAuthToken(userData?.token);\n            localStorage.setItem(\"authToken\", userData?.token);\n            router.push('/');\n        } catch (error) {\n            console.log(\"Registration failed:\", error);\n            throw error;\n        }\n    };\n    // LOGOUT\n    const logout = async ()=>{\n        try {\n            await _services_authService__WEBPACK_IMPORTED_MODULE_3__.authService.logout();\n        } catch (error) {\n            console.log(\"Logout failed:\", error);\n        } finally{\n            setUser(null);\n            setAuthToken(null);\n            localStorage.removeItem(\"user\");\n            localStorage.removeItem(\"authToken\");\n            router.push(\"/auth\");\n        }\n    };\n    const value = {\n        user,\n        authToken,\n        isAuthenticated: !!user,\n        login,\n        register,\n        logout\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: value,\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Denise\\\\Project\\\\genvoice-surveys\\\\frontend\\\\context\\\\AuthContext.js\",\n        lineNumber: 105,\n        columnNumber: 9\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AuthContext);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL2NvbnRleHQvQXV0aENvbnRleHQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUEyRDtBQUNuQjtBQUNjO0FBRXRELE1BQU1LLDRCQUFjTCxvREFBYUEsQ0FBQztBQUUzQixNQUFNTSxlQUFlLENBQUMsRUFBRUMsUUFBUSxFQUFFO0lBRXJDLE1BQU1DLFNBQVNMLHNEQUFTQTtJQUV4QixNQUFNLENBQUNNLE1BQU1DLFFBQVEsR0FBR1QsK0NBQVFBLENBQUM7SUFDakMsTUFBTSxDQUFDVSxXQUFXQyxhQUFhLEdBQUdYLCtDQUFRQSxDQUFDO0lBRTNDQyxnREFBU0E7a0NBQUM7WUFDTixJQUFJLEtBQTZCLEVBQUUsRUFHbEM7WUFFRCxJQUFJLEtBQTZCLEVBQUUsRUFFbEM7UUFDTDtpQ0FBRyxFQUFFO0lBRUwsd0NBQXdDO0lBQ3hDQSxnREFBU0E7a0NBQUM7WUFDTlUsYUFBYUQsWUFBWSwwQkFBMEI7UUFDdkQ7aUNBQUc7UUFBQ0E7S0FBVTtJQUVkLDBCQUEwQjtJQUMxQlQsZ0RBQVNBO2tDQUFDO1lBQ04sSUFBSSxDQUFDUyxXQUFXO2dCQUNaTztZQUNKO1FBQ0o7aUNBQUc7UUFBQ1A7S0FBVTtJQUVkVCxnREFBU0E7a0NBQUM7WUFDTixJQUFJTyxNQUFNO2dCQUNOSyxhQUFhSyxPQUFPLENBQUMsUUFBUUgsS0FBS0ksU0FBUyxDQUFDWDtZQUNoRCxPQUFPO2dCQUNISyxhQUFhTyxVQUFVLENBQUM7WUFDNUI7UUFDSjtpQ0FBRztRQUFDWjtLQUFLO0lBRVQsU0FBUztJQUNULE1BQU1hLFFBQVEsT0FBT0MsVUFBVUM7UUFDM0IsSUFBSTtZQUNBLE1BQU1DLFdBQVcsTUFBTXJCLDhEQUFXQSxDQUFDa0IsS0FBSyxDQUFDQyxVQUFVQztZQUNuRCxJQUFJLENBQUNDLFVBQVU7WUFFZmYsUUFBUWUsVUFBVWhCO1lBQ2xCRyxhQUFhYSxVQUFVQztZQUN2QlosYUFBYUssT0FBTyxDQUFDLGFBQWFNLFVBQVVDO1lBRTVDLHdCQUF3QjtZQUN4QmxCLE9BQU9tQixJQUFJLENBQUM7UUFDaEIsRUFBRSxPQUFPQyxPQUFPO1lBQ1pDLFFBQVFDLEdBQUcsQ0FBQyxpQkFBaUJGO1lBQzdCLE1BQU1BO1FBQ1Y7SUFDSjtJQUVBLFdBQVc7SUFDWCxNQUFNRyxXQUFXLE9BQU9SLFVBQVVDO1FBQzlCLElBQUk7WUFDQSxNQUFNQyxXQUFXLE1BQU1yQiw4REFBV0EsQ0FBQzJCLFFBQVEsQ0FBQ1IsVUFBVUM7WUFDdEQsSUFBSSxDQUFDQyxVQUFVO1lBRWZmLFFBQVFlLFVBQVVoQjtZQUNsQkcsYUFBYWEsVUFBVUM7WUFDdkJaLGFBQWFLLE9BQU8sQ0FBQyxhQUFhTSxVQUFVQztZQUU1Q2xCLE9BQU9tQixJQUFJLENBQUM7UUFDaEIsRUFBRSxPQUFPQyxPQUFPO1lBQ1pDLFFBQVFDLEdBQUcsQ0FBQyx3QkFBd0JGO1lBQ3BDLE1BQU1BO1FBQ1Y7SUFDSjtJQUVBLFNBQVM7SUFDVCxNQUFNVixTQUFTO1FBQ1gsSUFBSTtZQUNBLE1BQU1kLDhEQUFXQSxDQUFDYyxNQUFNO1FBQzVCLEVBQUUsT0FBT1UsT0FBTztZQUNaQyxRQUFRQyxHQUFHLENBQUMsa0JBQWtCRjtRQUNsQyxTQUFVO1lBQ05sQixRQUFRO1lBQ1JFLGFBQWE7WUFDYkUsYUFBYU8sVUFBVSxDQUFDO1lBQ3hCUCxhQUFhTyxVQUFVLENBQUM7WUFDeEJiLE9BQU9tQixJQUFJLENBQUM7UUFDaEI7SUFDSjtJQUVBLE1BQU1LLFFBQVE7UUFDVnZCO1FBQ0FFO1FBQ0FzQixpQkFBaUIsQ0FBQyxDQUFDeEI7UUFDbkJhO1FBQ0FTO1FBQ0FiO0lBQ0o7SUFFQSxxQkFDSSw4REFBQ2IsWUFBWTZCLFFBQVE7UUFBQ0YsT0FBT0E7a0JBQ3hCekI7Ozs7OztBQUdiLEVBQUU7QUFFRixpRUFBZUYsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsiQzpcXERlbmlzZVxcUHJvamVjdFxcZ2Vudm9pY2Utc3VydmV5c1xcZnJvbnRlbmRcXGNvbnRleHRcXEF1dGhDb250ZXh0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgYXV0aFNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9hdXRoU2VydmljZSc7XHJcblxyXG5jb25zdCBBdXRoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQobnVsbCk7XHJcblxyXG5leHBvcnQgY29uc3QgQXV0aFByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gICAgXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IFthdXRoVG9rZW4sIHNldEF1dGhUb2tlbl0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0b3JlZFVzZXIgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJcIik7XHJcbiAgICAgICAgICAgIHNldFVzZXIoc3RvcmVkVXNlciA/IEpTT04ucGFyc2Uoc3RvcmVkVXNlcikgOiBudWxsKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgIHNldEF1dGhUb2tlbihsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImF1dGhUb2tlblwiKSB8fCBudWxsKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbXSk7XHJcbiAgICBcclxuICAgIC8vIFN5bmMgdG9rZW4gd2l0aCBheGlvcyBkZWZhdWx0IGhlYWRlcnNcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgc2V0QXV0aFRva2VuKGF1dGhUb2tlbik7IC8vIFNldCB0b2tlbiBpbiBBUEkgY2xpZW50XHJcbiAgICB9LCBbYXV0aFRva2VuXSk7XHJcblxyXG4gICAgLy8gQXV0by1sb2dvdXQgaWYgbm8gdG9rZW5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKCFhdXRoVG9rZW4pIHtcclxuICAgICAgICAgICAgbG9nb3V0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2F1dGhUb2tlbl0pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHVzZXIpIHtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ1c2VyXCIsIEpTT04uc3RyaW5naWZ5KHVzZXIpKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcInVzZXJcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3VzZXJdKTtcclxuXHJcbiAgICAvLyBMT0dJTiBcclxuICAgIGNvbnN0IGxvZ2luID0gYXN5bmMgKHVzZXJuYW1lLCBwYXNzd29yZCkgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHVzZXJEYXRhID0gYXdhaXQgYXV0aFNlcnZpY2UubG9naW4odXNlcm5hbWUsIHBhc3N3b3JkKTtcclxuICAgICAgICAgICAgaWYgKCF1c2VyRGF0YSkgcmV0dXJuO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgc2V0VXNlcih1c2VyRGF0YT8udXNlcik7XHJcbiAgICAgICAgICAgIHNldEF1dGhUb2tlbih1c2VyRGF0YT8udG9rZW4pO1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImF1dGhUb2tlblwiLCB1c2VyRGF0YT8udG9rZW4pO1xyXG5cclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codXNlckRhdGEpXHJcbiAgICAgICAgICAgIHJvdXRlci5wdXNoKCcvJyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJMb2dpbiBmYWlsZWQ6XCIsIGVycm9yKTtcclxuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAvLyBSRUdJU1RFUlxyXG4gICAgY29uc3QgcmVnaXN0ZXIgPSBhc3luYyAodXNlcm5hbWUsIHBhc3N3b3JkKSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgdXNlckRhdGEgPSBhd2FpdCBhdXRoU2VydmljZS5yZWdpc3Rlcih1c2VybmFtZSwgcGFzc3dvcmQpO1xyXG4gICAgICAgICAgICBpZiAoIXVzZXJEYXRhKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICBzZXRVc2VyKHVzZXJEYXRhPy51c2VyKTtcclxuICAgICAgICAgICAgc2V0QXV0aFRva2VuKHVzZXJEYXRhPy50b2tlbik7XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYXV0aFRva2VuXCIsIHVzZXJEYXRhPy50b2tlbik7XHJcblxyXG4gICAgICAgICAgICByb3V0ZXIucHVzaCgnLycpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUmVnaXN0cmF0aW9uIGZhaWxlZDpcIiwgZXJyb3IpO1xyXG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIExPR09VVFxyXG4gICAgY29uc3QgbG9nb3V0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGF3YWl0IGF1dGhTZXJ2aWNlLmxvZ291dCgpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTG9nb3V0IGZhaWxlZDpcIiwgZXJyb3IpO1xyXG4gICAgICAgIH0gZmluYWxseSB7XHJcbiAgICAgICAgICAgIHNldFVzZXIobnVsbCk7XHJcbiAgICAgICAgICAgIHNldEF1dGhUb2tlbihudWxsKTtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJ1c2VyXCIpO1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcImF1dGhUb2tlblwiKTtcclxuICAgICAgICAgICAgcm91dGVyLnB1c2goXCIvYXV0aFwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdmFsdWUgPSB7XHJcbiAgICAgICAgdXNlcixcclxuICAgICAgICBhdXRoVG9rZW4sXHJcbiAgICAgICAgaXNBdXRoZW50aWNhdGVkOiAhIXVzZXIsXHJcbiAgICAgICAgbG9naW4sIFxyXG4gICAgICAgIHJlZ2lzdGVyLFxyXG4gICAgICAgIGxvZ291dFxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxBdXRoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17dmFsdWV9PlxyXG4gICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9BdXRoQ29udGV4dC5Qcm92aWRlcj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBdXRoQ29udGV4dDsiXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUm91dGVyIiwiYXV0aFNlcnZpY2UiLCJBdXRoQ29udGV4dCIsIkF1dGhQcm92aWRlciIsImNoaWxkcmVuIiwicm91dGVyIiwidXNlciIsInNldFVzZXIiLCJhdXRoVG9rZW4iLCJzZXRBdXRoVG9rZW4iLCJzdG9yZWRVc2VyIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIkpTT04iLCJwYXJzZSIsImxvZ291dCIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJyZW1vdmVJdGVtIiwibG9naW4iLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwidXNlckRhdGEiLCJ0b2tlbiIsInB1c2giLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJyZWdpc3RlciIsInZhbHVlIiwiaXNBdXRoZW50aWNhdGVkIiwiUHJvdmlkZXIiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(pages-dir-node)/./context/AuthContext.js\n");

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
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   apiService: () => (/* binding */ apiService),\n/* harmony export */   setAuthToken: () => (/* binding */ setAuthToken)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var _services_authService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/authService */ \"(pages-dir-node)/./services/authService.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__, _services_authService__WEBPACK_IMPORTED_MODULE_1__]);\n([axios__WEBPACK_IMPORTED_MODULE_0__, _services_authService__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\nconst API_URL = \"http://localhost:5000\";\nconst apiClient = axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].create({\n    baseURL: API_URL,\n    headers: {\n        \"Content-Type\": \"application/json\"\n    },\n    withCredentials: true\n});\n// Add a request interceptor\n// apiClient.interceptors.request.use((config) => {\n//     console.log(\"Outgoing request:\", config.url);\n//     console.log(\"Authorization Header:\", config.headers.Authorization);\n//     console.log(localStorage.getItem(\"authToken\"));\n//     return config;\n// });\n// Function : set the Bearer token\nconst setAuthToken = (token)=>{\n    if (token) {\n        localStorage.setItem(\"authToken\", token);\n        apiClient.defaults.headers[\"Authorization\"] = `Bearer ${token}`;\n    } else {\n        localStorage.removeItem(\"authToken\");\n        delete apiClient.defaults.headers[\"Authorization\"];\n    }\n};\nconst apiService = {\n    get: (url, params = {})=>apiClient.get(url, {\n            params\n        }),\n    post: (url, data)=>apiClient.post(url, data),\n    put: (url, data)=>apiClient.put(url, data),\n    delete: (url)=>apiClient.delete(url)\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3NlcnZpY2VzL2FwaVNlcnZpY2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUEwQjtBQUN1QjtBQUVqRCxNQUFNRSxVQUFVQyx1QkFBK0I7QUFFL0MsTUFBTUcsWUFBWU4sb0RBQVksQ0FBQztJQUMzQlEsU0FBU047SUFDVE8sU0FBUztRQUFFLGdCQUFpQjtJQUFtQjtJQUMvQ0MsaUJBQWlCO0FBQ3JCO0FBRUEsNEJBQTRCO0FBQzVCLG1EQUFtRDtBQUNuRCxvREFBb0Q7QUFDcEQsMEVBQTBFO0FBQzFFLHNEQUFzRDtBQUV0RCxxQkFBcUI7QUFDckIsTUFBTTtBQUVOLGtDQUFrQztBQUMzQixNQUFNQyxlQUFlLENBQUNDO0lBQ3pCLElBQUlBLE9BQU87UUFDUEMsYUFBYUMsT0FBTyxDQUFDLGFBQWFGO1FBQ2xDTixVQUFVUyxRQUFRLENBQUNOLE9BQU8sQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLE9BQU8sRUFBRUcsT0FBTztJQUNuRSxPQUFPO1FBQ0hDLGFBQWFHLFVBQVUsQ0FBQztRQUN4QixPQUFPVixVQUFVUyxRQUFRLENBQUNOLE9BQU8sQ0FBQyxnQkFBZ0I7SUFDdEQ7QUFDSixFQUFFO0FBRUssTUFBTVEsYUFBYTtJQUN0QkMsS0FBTSxDQUFDQyxLQUFLQyxTQUFTLENBQUMsQ0FBQyxHQUFRZCxVQUFVWSxHQUFHLENBQUNDLEtBQUs7WUFBRUM7UUFBTztJQUMzREMsTUFBTSxDQUFDRixLQUFLRyxPQUFtQmhCLFVBQVVlLElBQUksQ0FBQ0YsS0FBS0c7SUFDbkRDLEtBQU0sQ0FBQ0osS0FBS0csT0FBbUJoQixVQUFVaUIsR0FBRyxDQUFDSixLQUFLRztJQUNsREUsUUFBUSxDQUFDTCxNQUFzQmIsVUFBVWtCLE1BQU0sQ0FBQ0w7QUFDcEQsRUFBRSIsInNvdXJjZXMiOlsiQzpcXERlbmlzZVxcUHJvamVjdFxcZ2Vudm9pY2Utc3VydmV5c1xcZnJvbnRlbmRcXHNlcnZpY2VzXFxhcGlTZXJ2aWNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgbG9nb3V0IH0gZnJvbSAnLi4vc2VydmljZXMvYXV0aFNlcnZpY2UnO1xyXG5cclxuY29uc3QgQVBJX1VSTCA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9VUkw7XHJcblxyXG5jb25zdCBhcGlDbGllbnQgPSBheGlvcy5jcmVhdGUoe1xyXG4gICAgYmFzZVVSTDogQVBJX1VSTCxcclxuICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIiA6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXHJcbiAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWUsXHJcbn0pXHJcblxyXG4vLyBBZGQgYSByZXF1ZXN0IGludGVyY2VwdG9yXHJcbi8vIGFwaUNsaWVudC5pbnRlcmNlcHRvcnMucmVxdWVzdC51c2UoKGNvbmZpZykgPT4ge1xyXG4vLyAgICAgY29uc29sZS5sb2coXCJPdXRnb2luZyByZXF1ZXN0OlwiLCBjb25maWcudXJsKTtcclxuLy8gICAgIGNvbnNvbGUubG9nKFwiQXV0aG9yaXphdGlvbiBIZWFkZXI6XCIsIGNvbmZpZy5oZWFkZXJzLkF1dGhvcml6YXRpb24pO1xyXG4vLyAgICAgY29uc29sZS5sb2cobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhdXRoVG9rZW5cIikpO1xyXG5cclxuLy8gICAgIHJldHVybiBjb25maWc7XHJcbi8vIH0pO1xyXG5cclxuLy8gRnVuY3Rpb24gOiBzZXQgdGhlIEJlYXJlciB0b2tlblxyXG5leHBvcnQgY29uc3Qgc2V0QXV0aFRva2VuID0gKHRva2VuKSA9PiB7XHJcbiAgICBpZiAodG9rZW4pIHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImF1dGhUb2tlblwiLCB0b2tlbik7XHJcbiAgICAgICAgYXBpQ2xpZW50LmRlZmF1bHRzLmhlYWRlcnNbXCJBdXRob3JpemF0aW9uXCJdID0gYEJlYXJlciAke3Rva2VufWA7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwiYXV0aFRva2VuXCIpO1xyXG4gICAgICAgIGRlbGV0ZSBhcGlDbGllbnQuZGVmYXVsdHMuaGVhZGVyc1tcIkF1dGhvcml6YXRpb25cIl07XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgYXBpU2VydmljZSA9IHtcclxuICAgIGdldCA6ICh1cmwsIHBhcmFtcyA9IHt9KSAgICA9PiBhcGlDbGllbnQuZ2V0KHVybCwgeyBwYXJhbXMgfSksXHJcbiAgICBwb3N0OiAodXJsLCBkYXRhKSAgICAgICAgICAgPT4gYXBpQ2xpZW50LnBvc3QodXJsLCBkYXRhKSxcclxuICAgIHB1dCA6ICh1cmwsIGRhdGEpICAgICAgICAgICA9PiBhcGlDbGllbnQucHV0KHVybCwgZGF0YSksXHJcbiAgICBkZWxldGU6ICh1cmwpICAgICAgICAgICAgICAgPT4gYXBpQ2xpZW50LmRlbGV0ZSh1cmwpIFxyXG59OyJdLCJuYW1lcyI6WyJheGlvcyIsImxvZ291dCIsIkFQSV9VUkwiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQVBJX1VSTCIsImFwaUNsaWVudCIsImNyZWF0ZSIsImJhc2VVUkwiLCJoZWFkZXJzIiwid2l0aENyZWRlbnRpYWxzIiwic2V0QXV0aFRva2VuIiwidG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiZGVmYXVsdHMiLCJyZW1vdmVJdGVtIiwiYXBpU2VydmljZSIsImdldCIsInVybCIsInBhcmFtcyIsInBvc3QiLCJkYXRhIiwicHV0IiwiZGVsZXRlIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(pages-dir-node)/./services/apiService.js\n");

/***/ }),

/***/ "(pages-dir-node)/./services/authService.js":
/*!*********************************!*\
  !*** ./services/authService.js ***!
  \*********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authService: () => (/* binding */ authService)\n/* harmony export */ });\n/* harmony import */ var _apiService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apiService */ \"(pages-dir-node)/./services/apiService.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_apiService__WEBPACK_IMPORTED_MODULE_0__]);\n_apiService__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst authService = {\n    register: async (username, password)=>{\n        try {\n            const res = await _apiService__WEBPACK_IMPORTED_MODULE_0__.apiService.post(\"/register\", {\n                username,\n                password\n            });\n            (0,_apiService__WEBPACK_IMPORTED_MODULE_0__.setAuthToken)(res.data.token);\n            return res.data;\n        } catch (e) {\n            console.log(\"register error:\", e);\n            throw new Error(e.response?.data?.message || \"Registration failed\");\n        }\n    },\n    login: async (username, password)=>{\n        try {\n            // console.log(\"Login request body:\", { username, password });\n            const res = await _apiService__WEBPACK_IMPORTED_MODULE_0__.apiService.post(\"/login\", {\n                username,\n                password\n            });\n            (0,_apiService__WEBPACK_IMPORTED_MODULE_0__.setAuthToken)(res.data.token);\n            return res.data;\n        } catch (e) {\n            console.log(\"login error:\", e);\n            throw new Error(e.response?.data?.message || \"Login failed\");\n        }\n    },\n    logout: async ()=>{\n        try {\n            await _apiService__WEBPACK_IMPORTED_MODULE_0__.apiService.post(\"/logout\");\n            (0,_apiService__WEBPACK_IMPORTED_MODULE_0__.setAuthToken)(null);\n        } catch (e) {\n            console.log(\"logout error:\", e);\n            throw new Error(e.response?.data?.message || \"Logout failed\");\n        }\n    }\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3NlcnZpY2VzL2F1dGhTZXJ2aWNlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXdEO0FBRWpELE1BQU1FLGNBQWM7SUFDdkJDLFVBQVUsT0FBT0MsVUFBVUM7UUFDdkIsSUFBSTtZQUNBLE1BQU1DLE1BQU0sTUFBTU4sbURBQVVBLENBQUNPLElBQUksQ0FBQyxhQUFhO2dCQUFFSDtnQkFBVUM7WUFBUztZQUNwRUoseURBQVlBLENBQUNLLElBQUlFLElBQUksQ0FBQ0MsS0FBSztZQUMzQixPQUFPSCxJQUFJRSxJQUFJO1FBQ25CLEVBQUUsT0FBT0UsR0FBRztZQUNSQyxRQUFRQyxHQUFHLENBQUMsbUJBQW1CRjtZQUMvQixNQUFNLElBQUlHLE1BQU1ILEVBQUVJLFFBQVEsRUFBRU4sTUFBTU8sV0FBVztRQUNqRDtJQUNKO0lBQ0FDLE9BQU8sT0FBT1osVUFBVUM7UUFDcEIsSUFBSTtZQUNBLDhEQUE4RDtZQUU5RCxNQUFNQyxNQUFNLE1BQU1OLG1EQUFVQSxDQUFDTyxJQUFJLENBQUMsVUFBVTtnQkFBRUg7Z0JBQVVDO1lBQVM7WUFDakVKLHlEQUFZQSxDQUFDSyxJQUFJRSxJQUFJLENBQUNDLEtBQUs7WUFDM0IsT0FBT0gsSUFBSUUsSUFBSTtRQUNuQixFQUFFLE9BQU9FLEdBQUc7WUFDUkMsUUFBUUMsR0FBRyxDQUFDLGdCQUFnQkY7WUFDNUIsTUFBTSxJQUFJRyxNQUFNSCxFQUFFSSxRQUFRLEVBQUVOLE1BQU1PLFdBQVc7UUFDakQ7SUFDSjtJQUNBRSxRQUFRO1FBQ0osSUFBSTtZQUNBLE1BQU1qQixtREFBVUEsQ0FBQ08sSUFBSSxDQUFDO1lBQ3RCTix5REFBWUEsQ0FBQztRQUNqQixFQUFFLE9BQU9TLEdBQUc7WUFDUkMsUUFBUUMsR0FBRyxDQUFDLGlCQUFpQkY7WUFDN0IsTUFBTSxJQUFJRyxNQUFNSCxFQUFFSSxRQUFRLEVBQUVOLE1BQU1PLFdBQVc7UUFDakQ7SUFDSjtBQUNKLEVBQUUiLCJzb3VyY2VzIjpbIkM6XFxEZW5pc2VcXFByb2plY3RcXGdlbnZvaWNlLXN1cnZleXNcXGZyb250ZW5kXFxzZXJ2aWNlc1xcYXV0aFNlcnZpY2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXBpU2VydmljZSwgc2V0QXV0aFRva2VuIH0gZnJvbSBcIi4vYXBpU2VydmljZVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGF1dGhTZXJ2aWNlID0ge1xyXG4gICAgcmVnaXN0ZXI6IGFzeW5jICh1c2VybmFtZSwgcGFzc3dvcmQpID0+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBhcGlTZXJ2aWNlLnBvc3QoXCIvcmVnaXN0ZXJcIiwgeyB1c2VybmFtZSwgcGFzc3dvcmQgfSk7XHJcbiAgICAgICAgICAgIHNldEF1dGhUb2tlbihyZXMuZGF0YS50b2tlbik7XHJcbiAgICAgICAgICAgIHJldHVybiByZXMuZGF0YTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicmVnaXN0ZXIgZXJyb3I6XCIsIGUpO1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZS5yZXNwb25zZT8uZGF0YT8ubWVzc2FnZSB8fCBcIlJlZ2lzdHJhdGlvbiBmYWlsZWRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGxvZ2luOiBhc3luYyAodXNlcm5hbWUsIHBhc3N3b3JkKSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJMb2dpbiByZXF1ZXN0IGJvZHk6XCIsIHsgdXNlcm5hbWUsIHBhc3N3b3JkIH0pO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXBpU2VydmljZS5wb3N0KFwiL2xvZ2luXCIsIHsgdXNlcm5hbWUsIHBhc3N3b3JkIH0pO1xyXG4gICAgICAgICAgICBzZXRBdXRoVG9rZW4ocmVzLmRhdGEudG9rZW4pXHJcbiAgICAgICAgICAgIHJldHVybiByZXMuZGF0YTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibG9naW4gZXJyb3I6XCIsIGUpO1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZS5yZXNwb25zZT8uZGF0YT8ubWVzc2FnZSB8fCBcIkxvZ2luIGZhaWxlZFwiKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgbG9nb3V0OiBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgYXdhaXQgYXBpU2VydmljZS5wb3N0KFwiL2xvZ291dFwiKTtcclxuICAgICAgICAgICAgc2V0QXV0aFRva2VuKG51bGwpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJsb2dvdXQgZXJyb3I6XCIsIGUpO1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZS5yZXNwb25zZT8uZGF0YT8ubWVzc2FnZSB8fCBcIkxvZ291dCBmYWlsZWRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxufTsiXSwibmFtZXMiOlsiYXBpU2VydmljZSIsInNldEF1dGhUb2tlbiIsImF1dGhTZXJ2aWNlIiwicmVnaXN0ZXIiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwicmVzIiwicG9zdCIsImRhdGEiLCJ0b2tlbiIsImUiLCJjb25zb2xlIiwibG9nIiwiRXJyb3IiLCJyZXNwb25zZSIsIm1lc3NhZ2UiLCJsb2dpbiIsImxvZ291dCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(pages-dir-node)/./services/authService.js\n");

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