/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ListOfBookmarks_BookmarkList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/ListOfBookmarks/BookmarkList */ "./src/components/ListOfBookmarks/BookmarkList.js");
/* harmony import */ var _App_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.module.scss */ "./src/App.module.scss");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }



function App() {
  const [bookmarks, setBookmarks] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [newBookmark, setNewBookmark] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    title: '',
    url: ''
  });
  const createBookmark = async () => {
    const body = _objectSpread({}, newBookmark);
    try {
      const response = await fetch('/api/bookmarks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      });
      if (!response.ok) throw new Error('Network response was not ok');
      const createdBookmark = await response.json();
      setBookmarks(prevBookmarks => [createdBookmark, ...prevBookmarks]);
      setNewBookmark({
        title: '',
        url: ''
      });
    } catch (error) {
      console.error('Failed to create bookmark:', error);
    }
  };
  const deleteBookmark = async id => {
    try {
      const response = await fetch("/api/bookmarks/".concat(id), {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (!response.ok) {
        throw new Error("Failed to delete bookmark with id ".concat(id, ": ").concat(response.statusText));
      }
      setBookmarks(prevBookmarks => prevBookmarks.filter(bookmark => bookmark._id !== id));
    } catch (error) {
      console.error('Error deleting bookmark:', error);
    }
  };
  const getBookmarks = async () => {
    try {
      const response = await fetch('/api/bookmarks');
      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      setBookmarks(data.reverse());
    } catch (error) {
      console.error('Failed to fetch bookmarks:', error);
    }
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    getBookmarks();
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: _App_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].App
  }, /*#__PURE__*/React.createElement(_components_ListOfBookmarks_BookmarkList__WEBPACK_IMPORTED_MODULE_1__["default"], {
    newBookmark: newBookmark,
    setNewBookmark: setNewBookmark,
    createBookmark: createBookmark,
    bookmarks: bookmarks,
    deleteBookmark: deleteBookmark
  }));
}

/***/ }),

/***/ "./src/components/Bookmark/Bookmark.js":
/*!*********************************************!*\
  !*** ./src/components/Bookmark/Bookmark.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Bookmark_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Bookmark.module.scss */ "./src/components/Bookmark/Bookmark.module.scss");


const Bookmark = _ref => {
  let {
    bookmark,
    deleteBookmark
  } = _ref;
  const [editMode, setEditMode] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(bookmark.title);
  const [url, setUrl] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(bookmark.url);
  const bookmarkIconUrl = 'https://endlessicons.com/wp-content/uploads/2014/03/bookmark-icon-1-614x460.png';
  const goButtonIconUrl = 'https://cdn3.iconfinder.com/data/icons/web-ui-3/128/Globe-2-512.png';
  const editButtonIconUrl = 'https://cdn3.iconfinder.com/data/icons/web-ui-3/128/Compose-2-512.png';
  const deleteButtonIconUrl = 'https://cdn3.iconfinder.com/data/icons/web-ui-3/128/Close-2-512.png';
  const saveButtonIconUrl = 'https://cdn0.iconfinder.com/data/icons/ie_Bright/512/disk_save.png';
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _Bookmark_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].bookmarkContainer
  }, editMode ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    className: _Bookmark_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].input,
    value: title,
    onChange: e => setTitle(e.target.value)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    className: _Bookmark_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].input,
    value: url,
    onChange: e => setUrl(e.target.value)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: _Bookmark_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].saveButton,
    onClick: () => setEditMode(false)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: saveButtonIconUrl,
    alt: "Save",
    style: {
      width: '20px',
      height: '20px'
    }
  }))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _Bookmark_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].titleWithIcon
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: bookmarkIconUrl,
    alt: "Bookmark Icon",
    className: _Bookmark_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].bookmarkIcon
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", null, title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _Bookmark_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].buttonContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: _Bookmark_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].button,
    onClick: () => window.open(url, '_blank', 'noopener,noreferrer')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: goButtonIconUrl,
    alt: "Go",
    style: {
      width: '20px',
      height: '20px'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: _Bookmark_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].button,
    onClick: () => setEditMode(true)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: editButtonIconUrl,
    alt: "Edit",
    style: {
      width: '20px',
      height: '20px'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: _Bookmark_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].button,
    onClick: () => deleteBookmark(bookmark._id)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: deleteButtonIconUrl,
    alt: "Delete",
    style: {
      width: '20px',
      height: '20px'
    }
  })))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Bookmark);

/***/ }),

/***/ "./src/components/ListOfBookmarks/BookmarkList.js":
/*!********************************************************!*\
  !*** ./src/components/ListOfBookmarks/BookmarkList.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BookmarkList)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _BookmarkList_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BookmarkList.module.scss */ "./src/components/ListOfBookmarks/BookmarkList.module.scss");
/* harmony import */ var _Bookmark_Bookmark__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Bookmark/Bookmark */ "./src/components/Bookmark/Bookmark.js");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }



const iconUrl = 'https://endlessicons.com/wp-content/uploads/2014/03/bookmark-icon-1-614x460.png';
function BookmarkList(_ref) {
  let {
    newBookmark,
    createBookmark,
    setNewBookmark,
    bookmarks,
    deleteBookmark
  } = _ref;
  function handleCreateBookmark() {
    if (newBookmark.title && newBookmark.url && newBookmark.url !== 'http://' && newBookmark.url !== 'https://') {
      createBookmark(newBookmark);
    }
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _BookmarkList_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].headerContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "BOOKMARKS"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: iconUrl,
    alt: "Bookmark Icon",
    className: _BookmarkList_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].bookmarkIcon
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _BookmarkList_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].container
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _BookmarkList_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].inputContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _BookmarkList_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].titleContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: _BookmarkList_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].siteName
  }, "SITE NAME"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    className: _BookmarkList_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].input,
    type: "text",
    value: newBookmark.title,
    onChange: e => setNewBookmark(_objectSpread(_objectSpread({}, newBookmark), {}, {
      title: e.target.value
    })),
    onKeyDown: e => {
      if (e.key === 'Enter') {
        handleCreateBookmark();
      }
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _BookmarkList_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].urlContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: _BookmarkList_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].siteUrl
  }, "URL"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    className: _BookmarkList_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].input,
    type: "text",
    value: newBookmark.url || 'https://',
    onChange: e => setNewBookmark(_objectSpread(_objectSpread({}, newBookmark), {}, {
      url: e.target.value
    })),
    onKeyDown: e => {
      if (e.key === 'Enter') {
        handleCreateBookmark();
      }
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _BookmarkList_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].bookmarksContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "MY SITES"), bookmarks.length > 0 ? bookmarks.map(bookmark => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Bookmark_Bookmark__WEBPACK_IMPORTED_MODULE_2__["default"], {
    key: bookmark._id,
    bookmark: bookmark,
    deleteBookmark: deleteBookmark
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "You dont have any bookmarks yet."))));
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");



const root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(document.getElementById("app"));
root.render( /*#__PURE__*/React.createElement(react__WEBPACK_IMPORTED_MODULE_0__.StrictMode, null, /*#__PURE__*/React.createElement(_App__WEBPACK_IMPORTED_MODULE_2__["default"], null)));

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/App.module.scss":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/App.module.scss ***!
  \********************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body {
  margin: 0;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: tan;
}

.KTmxx2sH00E53HXHCND1 {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.KTmxx2sH00E53HXHCND1 img {
  width: 50%;
  max-height: 300px;
}
.KTmxx2sH00E53HXHCND1 h1 {
  width: 100%;
  text-align: center;
  color: rgba(23, 5, 58, 0.8);
}`, "",{"version":3,"sources":["webpack://./src/App.module.scss"],"names":[],"mappings":"AAAA;EACI,SAAA;EACA,iBAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,qBAAA;AACJ;;AAEA;EACI,WAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,sBAAA;AACJ;AAAI;EACI,UAAA;EACA,iBAAA;AAER;AAAI;EACI,WAAA;EACA,kBAAA;EACA,2BAAA;AAER","sourcesContent":["body {\n    margin: 0;\n    min-height: 100vh;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    background-color: tan;\n}\n\n.banner{\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    img {\n        width: 50%;\n        max-height: 300px;\n    }\n    h1 {\n        width: 100%;\n        text-align: center;\n        color: rgba(23,5, 58, 0.8);\n    }\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"banner": `KTmxx2sH00E53HXHCND1`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/Bookmark/Bookmark.module.scss":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/Bookmark/Bookmark.module.scss ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.k6ypUdZIToQcx5q02lTg {
  background-color: rgba(210, 180, 140, 0.92);
  padding: 1rem;
  border-radius: 5px;
  margin-bottom: 1rem;
  text-align: left;
  font-size: 1.2rem;
  border: 8px solid black;
  border-style: inset;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 5px;
}
.k6ypUdZIToQcx5q02lTg ._5T_mzJtpwzfnwKchHpU {
  display: flex;
  align-items: center;
  justify-content: left;
}
.k6ypUdZIToQcx5q02lTg ._5T_mzJtpwzfnwKchHpU .JJV6DZt6e75nPQ0DFMP4 {
  width: 35px;
  height: 35px;
}
.k6ypUdZIToQcx5q02lTg ._Q5F7WGi6iBVI5TDO0tW {
  background-color: black;
  color: tan;
  padding: 0.5rem 0.5rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0.5rem;
  font-size: 1rem;
  width: 26px;
  height: 26px;
  overflow: hidden;
}
.k6ypUdZIToQcx5q02lTg ._Q5F7WGi6iBVI5TDO0tW:hover {
  background-color: #c49c67;
}
.k6ypUdZIToQcx5q02lTg .jPzABAZOS6kPxcKPsPRF {
  border: 3px solid black;
  border-radius: 5px;
  border-style: inset;
}
.k6ypUdZIToQcx5q02lTg .jPzABAZOS6kPxcKPsPRF .JSmS6vn316ABbTaYqDzk {
  background-color: black;
  color: tan;
  padding: 0.5rem 0.5rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0.5rem;
  font-size: 1rem;
  width: 26px;
  height: 26px;
  overflow: hidden;
}
.k6ypUdZIToQcx5q02lTg .jPzABAZOS6kPxcKPsPRF .JSmS6vn316ABbTaYqDzk:hover {
  background-color: #c49c67;
}
.k6ypUdZIToQcx5q02lTg .g4QZS3Rxwb17vZ7q0GAi {
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: calc(100% - 1rem);
}`, "",{"version":3,"sources":["webpack://./src/components/Bookmark/Bookmark.module.scss"],"names":[],"mappings":"AAAA;EACE,2CAAA;EACA,aAAA;EACA,kBAAA;EACA,mBAAA;EACA,gBAAA;EACA,iBAAA;EACA,uBAAA;EACA,mBAAA;EACA,aAAA;EACA,mBAAA;EACA,mBAAA;EACA,8BAAA;EACA,eAAA;EACA,QAAA;AACF;AACE;EACE,aAAA;EACA,mBAAA;EACA,qBAAA;AACJ;AACI;EACE,WAAA;EACA,YAAA;AACN;AAGA;EACE,uBAAA;EACA,UAAA;EACA,sBAAA;EACA,YAAA;EACA,kBAAA;EACA,eAAA;EACA,qBAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,cAAA;EACA,eAAA;EACA,WAAA;EACA,YAAA;EACA,gBAAA;AADF;AAEI;EACE,yBAAA;AAAN;AAIA;EACE,uBAAA;EACA,kBAAA;EACA,mBAAA;AAFF;AAIE;EACE,uBAAA;EACA,UAAA;EACA,sBAAA;EACA,YAAA;EACA,kBAAA;EACA,eAAA;EACA,qBAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,cAAA;EACA,eAAA;EACA,WAAA;EACA,YAAA;EACA,gBAAA;AAFJ;AAII;EACE,yBAAA;AAFN;AAOE;EACE,eAAA;EACA,qBAAA;EACA,sBAAA;EACA,kBAAA;EACA,wBAAA;AALJ","sourcesContent":[".bookmarkContainer {\n  background-color: rgba(210, 180, 140, 0.92);\n  padding: 1rem;\n  border-radius: 5px;\n  margin-bottom: 1rem;\n  text-align: left;\n  font-size: 1.2rem;\n  border: 8px solid black;\n  border-style: inset;\n  display: flex;\n  flex-direction: row; \n  align-items: center; \n  justify-content: space-between; \n  flex-wrap: wrap; \n  gap: 5px;\n\n  .titleWithIcon {\n    display: flex;\n    align-items: center;\n    justify-content: left;\n\n    .bookmarkIcon {\n      width: 35px; \n      height: 35px;\n  }\n}\n\n.saveButton {\n  background-color: black;\n  color: tan;\n  padding: 0.5rem .5rem;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n  text-decoration: none;\n  display: flex; \n  align-items: center;\n  justify-content: center;\n  margin: 0.5rem;\n  font-size: 1rem;\n  width: 26px;\n  height: 26px;\n  overflow: hidden;\n    &:hover {\n      background-color: darken(tan, 10%);\n  }\n}\n\n.buttonContainer {\n  border: 3px solid black;\n  border-radius: 5px;\n  border-style: inset;\n  \n  .button {\n    background-color: black;\n    color: tan;\n    padding: 0.5rem .5rem;\n    border: none;\n    border-radius: 5px;\n    cursor: pointer;\n    text-decoration: none;\n    display: flex; \n    align-items: center;\n    justify-content: center;\n    margin: 0.5rem;\n    font-size: 1rem;\n    width: 26px;\n    height: 26px;\n    overflow: hidden;\n\n    &:hover {\n      background-color: darken(tan, 10%);\n    }\n  }\n}\n\n  .input {\n    padding: 0.5rem;\n    margin-bottom: 0.5rem; \n    border: 1px solid #ccc;\n    border-radius: 5px;\n    width: calc(100% - 1rem); \n  }\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"bookmarkContainer": `k6ypUdZIToQcx5q02lTg`,
	"titleWithIcon": `_5T_mzJtpwzfnwKchHpU`,
	"bookmarkIcon": `JJV6DZt6e75nPQ0DFMP4`,
	"saveButton": `_Q5F7WGi6iBVI5TDO0tW`,
	"buttonContainer": `jPzABAZOS6kPxcKPsPRF`,
	"button": `JSmS6vn316ABbTaYqDzk`,
	"input": `g4QZS3Rxwb17vZ7q0GAi`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/ListOfBookmarks/BookmarkList.module.scss":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/ListOfBookmarks/BookmarkList.module.scss ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `h1 {
  font-size: 4.5rem;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande", "Lucida Sans", Arial, sans-serif;
  text-align: center;
  padding-left: 3rem;
  margin-bottom: 1rem;
}

.cV6U8lCaS0lWz2KLekVQ {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  animation: AHJca_24Sc08daa9niO1 1.2s ease-out forwards;
}

.YH7xdljdtDlmwBgdPP0d {
  width: 7rem;
  height: 7rem;
  padding-left: 1rem;
  margin-top: 2.2rem;
}
.YH7xdljdtDlmwBgdPP0d:hover {
  animation: lwBf5lhpubIk3TxuNBLB 2s ease forwards infinite;
}

.tZLRAyOJvWQtFoUkUHln {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  background-color: tan;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande", "Lucida Sans", Arial, sans-serif;
  border: 4px solid black;
  border-radius: 6px;
}

.lIbtNV92GIuH1Of0iqPT {
  display: flex;
  justify-content: center;
  width: 100%;
}

.KZyuchRv7BkzFEXXK0BL, .zxEw_os2xL_wzTZ9BbVm {
  display: flex;
  flex-direction: column;
  margin: 0 10px;
}

.rPlQstssfMhfWomZ8B9M {
  padding: 8px;
  margin: 5px 0;
  border-radius: 4px;
}

.w9Vtdqyyl8PT4KOLKjJv {
  font-size: 15px;
  margin-bottom: -1px;
}

.jfNXgLV_gziu4s9FjYCx {
  font-size: 15px;
  margin-bottom: -1px;
}

h3 {
  text-align: left;
  margin-top: 0.5rem;
}

.C22zoUMKQswkthhLnKaF {
  width: 100%;
  margin-top: 20px;
  text-align: center;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 8px;
}

@keyframes AHJca_24Sc08daa9niO1 {
  from {
    opacity: 0;
    transform: translateY(-15px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes lwBf5lhpubIk3TxuNBLB {
  0% {
    transform: scale(1);
    color: #000;
  }
  50% {
    transform: scale(1.1);
    color: tan;
  }
  100% {
    transform: scale(1);
    color: #000;
  }
}`, "",{"version":3,"sources":["webpack://./src/components/ListOfBookmarks/BookmarkList.module.scss"],"names":[],"mappings":"AAAA;EACE,iBAAA;EACA,qGAAA;EACA,kBAAA;EACA,kBAAA;EACA,mBAAA;AACF;;AACA;EACE,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,kBAAA;EACA,sDAAA;AAEF;;AACA;EACE,WAAA;EACA,YAAA;EACA,kBAAA;EACA,kBAAA;AAEF;AADE;EACE,yDAAA;AAGJ;;AACA;EACE,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,WAAA;EACA,aAAA;EACA,sBAAA;EACA,qBAAA;EACA,qGAAA;EACA,uBAAA;EACA,kBAAA;AAEF;;AACA;EACE,aAAA;EACA,uBAAA;EACA,WAAA;AAEF;;AACA;EACE,aAAA;EACA,sBAAA;EACA,cAAA;AAEF;;AACA;EACE,YAAA;EACA,aAAA;EACA,kBAAA;AAEF;;AACA;EACE,eAAA;EACA,mBAAA;AAEF;;AACA;EACE,eAAA;EACA,mBAAA;AAEF;;AACA;EACE,gBAAA;EACA,kBAAA;AAEF;;AACA;EACE,WAAA;EACA,gBAAA;EACA,kBAAA;EACA,aAAA;EACA,sBAAA;EACA,kBAAA;AAEF;;AACA;EACE;IACE,UAAA;IACA,4BAAA;EAEF;EAAA;IACE,UAAA;IACA,wBAAA;EAEF;AACF;AACA;EACE;IACE,mBAAA;IACA,WAAA;EACF;EACA;IACE,qBAAA;IACA,UAAA;EACF;EACA;IACE,mBAAA;IACA,WAAA;EACF;AACF","sourcesContent":["h1 {\n  font-size: 4.5rem;\n  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\n  text-align: center; \n  padding-left: 3rem;\n  margin-bottom: 1rem;\n}\n.headerContainer {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  animation: fadeDown 1.2s ease-out forwards;\n}\n\n.bookmarkIcon {\n  width: 7rem; \n  height: 7rem;\n  padding-left: 1rem;\n  margin-top: 2.2rem;\n  &:hover {\n    animation: pulse 2s ease forwards infinite;\n  }\n}\n\n.container {\n  display: flex;\n  flex-direction: column; \n  align-items: center; \n  width: 100%; \n  padding: 10px;\n  box-sizing: border-box;\n  background-color: tan;\n  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\n  border: 4px solid black;\n  border-radius: 6px;\n}\n\n.inputContainer {\n  display: flex;\n  justify-content: center; \n  width: 100%; \n}\n\n.titleContainer, .urlContainer {\n  display: flex;\n  flex-direction: column;\n  margin: 0 10px; \n}\n\n.input {\n  padding: 8px;\n  margin: 5px 0; \n  border-radius: 4px;\n}\n\n.siteName {\n  font-size: 15px;\n  margin-bottom: -1px;\n}\n\n.siteUrl {\n  font-size: 15px;\n  margin-bottom: -1px;\n}\n\nh3 {\n  text-align: left; \n  margin-top: .5rem;\n}\n\n.bookmarksContainer {\n  width: 100%; \n  margin-top: 20px; \n  text-align: center; \n  padding: 10px;\n  box-sizing: border-box;\n  border-radius: 8px;\n}\n\n@keyframes fadeDown {\n  from {\n    opacity: 0;\n    transform: translateY(-15px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n@keyframes pulse {\n  0% {\n    transform: scale(1);\n    color: #000; \n  }\n  50% {\n    transform: scale(1.1);\n    color: tan; \n  }\n  100% {\n    transform: scale(1);\n    color: #000; \n  }\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"headerContainer": `cV6U8lCaS0lWz2KLekVQ`,
	"fadeDown": `AHJca_24Sc08daa9niO1`,
	"bookmarkIcon": `YH7xdljdtDlmwBgdPP0d`,
	"pulse": `lwBf5lhpubIk3TxuNBLB`,
	"container": `tZLRAyOJvWQtFoUkUHln`,
	"inputContainer": `lIbtNV92GIuH1Of0iqPT`,
	"titleContainer": `KZyuchRv7BkzFEXXK0BL`,
	"urlContainer": `zxEw_os2xL_wzTZ9BbVm`,
	"input": `rPlQstssfMhfWomZ8B9M`,
	"siteName": `w9Vtdqyyl8PT4KOLKjJv`,
	"siteUrl": `jfNXgLV_gziu4s9FjYCx`,
	"bookmarksContainer": `C22zoUMKQswkthhLnKaF`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/App.module.scss":
/*!*****************************!*\
  !*** ./src/App.module.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_App_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../node_modules/sass-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!./App.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/App.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_App_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_App_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_App_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_App_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/Bookmark/Bookmark.module.scss":
/*!******************************************************!*\
  !*** ./src/components/Bookmark/Bookmark.module.scss ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Bookmark_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./Bookmark.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/Bookmark/Bookmark.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Bookmark_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Bookmark_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Bookmark_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Bookmark_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/ListOfBookmarks/BookmarkList.module.scss":
/*!*****************************************************************!*\
  !*** ./src/components/ListOfBookmarks/BookmarkList.module.scss ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_BookmarkList_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./BookmarkList.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/ListOfBookmarks/BookmarkList.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_BookmarkList_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_BookmarkList_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_BookmarkList_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_BookmarkList_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"App": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkbig_poppa_code_react_starter_kit"] = self["webpackChunkbig_poppa_code_react_starter_kit"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_css-loader_dist_runtime_api_js-node_modules_css-loader_dist_runtime_sour-b53f7e"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=App.99e4270f6c661391a728ff80b8c5cd80.js.map