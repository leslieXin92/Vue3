/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@vue/compiler-core/dist/compiler-core.esm-bundler.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@vue/compiler-core/dist/compiler-core.esm-bundler.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BASE_TRANSITION": () => (/* binding */ BASE_TRANSITION),
/* harmony export */   "CAMELIZE": () => (/* binding */ CAMELIZE),
/* harmony export */   "CAPITALIZE": () => (/* binding */ CAPITALIZE),
/* harmony export */   "CREATE_BLOCK": () => (/* binding */ CREATE_BLOCK),
/* harmony export */   "CREATE_COMMENT": () => (/* binding */ CREATE_COMMENT),
/* harmony export */   "CREATE_ELEMENT_BLOCK": () => (/* binding */ CREATE_ELEMENT_BLOCK),
/* harmony export */   "CREATE_ELEMENT_VNODE": () => (/* binding */ CREATE_ELEMENT_VNODE),
/* harmony export */   "CREATE_SLOTS": () => (/* binding */ CREATE_SLOTS),
/* harmony export */   "CREATE_STATIC": () => (/* binding */ CREATE_STATIC),
/* harmony export */   "CREATE_TEXT": () => (/* binding */ CREATE_TEXT),
/* harmony export */   "CREATE_VNODE": () => (/* binding */ CREATE_VNODE),
/* harmony export */   "FRAGMENT": () => (/* binding */ FRAGMENT),
/* harmony export */   "GUARD_REACTIVE_PROPS": () => (/* binding */ GUARD_REACTIVE_PROPS),
/* harmony export */   "IS_MEMO_SAME": () => (/* binding */ IS_MEMO_SAME),
/* harmony export */   "IS_REF": () => (/* binding */ IS_REF),
/* harmony export */   "KEEP_ALIVE": () => (/* binding */ KEEP_ALIVE),
/* harmony export */   "MERGE_PROPS": () => (/* binding */ MERGE_PROPS),
/* harmony export */   "NORMALIZE_CLASS": () => (/* binding */ NORMALIZE_CLASS),
/* harmony export */   "NORMALIZE_PROPS": () => (/* binding */ NORMALIZE_PROPS),
/* harmony export */   "NORMALIZE_STYLE": () => (/* binding */ NORMALIZE_STYLE),
/* harmony export */   "OPEN_BLOCK": () => (/* binding */ OPEN_BLOCK),
/* harmony export */   "POP_SCOPE_ID": () => (/* binding */ POP_SCOPE_ID),
/* harmony export */   "PUSH_SCOPE_ID": () => (/* binding */ PUSH_SCOPE_ID),
/* harmony export */   "RENDER_LIST": () => (/* binding */ RENDER_LIST),
/* harmony export */   "RENDER_SLOT": () => (/* binding */ RENDER_SLOT),
/* harmony export */   "RESOLVE_COMPONENT": () => (/* binding */ RESOLVE_COMPONENT),
/* harmony export */   "RESOLVE_DIRECTIVE": () => (/* binding */ RESOLVE_DIRECTIVE),
/* harmony export */   "RESOLVE_DYNAMIC_COMPONENT": () => (/* binding */ RESOLVE_DYNAMIC_COMPONENT),
/* harmony export */   "RESOLVE_FILTER": () => (/* binding */ RESOLVE_FILTER),
/* harmony export */   "SET_BLOCK_TRACKING": () => (/* binding */ SET_BLOCK_TRACKING),
/* harmony export */   "SUSPENSE": () => (/* binding */ SUSPENSE),
/* harmony export */   "TELEPORT": () => (/* binding */ TELEPORT),
/* harmony export */   "TO_DISPLAY_STRING": () => (/* binding */ TO_DISPLAY_STRING),
/* harmony export */   "TO_HANDLERS": () => (/* binding */ TO_HANDLERS),
/* harmony export */   "TO_HANDLER_KEY": () => (/* binding */ TO_HANDLER_KEY),
/* harmony export */   "UNREF": () => (/* binding */ UNREF),
/* harmony export */   "WITH_CTX": () => (/* binding */ WITH_CTX),
/* harmony export */   "WITH_DIRECTIVES": () => (/* binding */ WITH_DIRECTIVES),
/* harmony export */   "WITH_MEMO": () => (/* binding */ WITH_MEMO),
/* harmony export */   "advancePositionWithClone": () => (/* binding */ advancePositionWithClone),
/* harmony export */   "advancePositionWithMutation": () => (/* binding */ advancePositionWithMutation),
/* harmony export */   "assert": () => (/* binding */ assert),
/* harmony export */   "baseCompile": () => (/* binding */ baseCompile),
/* harmony export */   "baseParse": () => (/* binding */ baseParse),
/* harmony export */   "buildDirectiveArgs": () => (/* binding */ buildDirectiveArgs),
/* harmony export */   "buildProps": () => (/* binding */ buildProps),
/* harmony export */   "buildSlots": () => (/* binding */ buildSlots),
/* harmony export */   "checkCompatEnabled": () => (/* binding */ checkCompatEnabled),
/* harmony export */   "createArrayExpression": () => (/* binding */ createArrayExpression),
/* harmony export */   "createAssignmentExpression": () => (/* binding */ createAssignmentExpression),
/* harmony export */   "createBlockStatement": () => (/* binding */ createBlockStatement),
/* harmony export */   "createCacheExpression": () => (/* binding */ createCacheExpression),
/* harmony export */   "createCallExpression": () => (/* binding */ createCallExpression),
/* harmony export */   "createCompilerError": () => (/* binding */ createCompilerError),
/* harmony export */   "createCompoundExpression": () => (/* binding */ createCompoundExpression),
/* harmony export */   "createConditionalExpression": () => (/* binding */ createConditionalExpression),
/* harmony export */   "createForLoopParams": () => (/* binding */ createForLoopParams),
/* harmony export */   "createFunctionExpression": () => (/* binding */ createFunctionExpression),
/* harmony export */   "createIfStatement": () => (/* binding */ createIfStatement),
/* harmony export */   "createInterpolation": () => (/* binding */ createInterpolation),
/* harmony export */   "createObjectExpression": () => (/* binding */ createObjectExpression),
/* harmony export */   "createObjectProperty": () => (/* binding */ createObjectProperty),
/* harmony export */   "createReturnStatement": () => (/* binding */ createReturnStatement),
/* harmony export */   "createRoot": () => (/* binding */ createRoot),
/* harmony export */   "createSequenceExpression": () => (/* binding */ createSequenceExpression),
/* harmony export */   "createSimpleExpression": () => (/* binding */ createSimpleExpression),
/* harmony export */   "createStructuralDirectiveTransform": () => (/* binding */ createStructuralDirectiveTransform),
/* harmony export */   "createTemplateLiteral": () => (/* binding */ createTemplateLiteral),
/* harmony export */   "createTransformContext": () => (/* binding */ createTransformContext),
/* harmony export */   "createVNodeCall": () => (/* binding */ createVNodeCall),
/* harmony export */   "extractIdentifiers": () => (/* binding */ extractIdentifiers),
/* harmony export */   "findDir": () => (/* binding */ findDir),
/* harmony export */   "findProp": () => (/* binding */ findProp),
/* harmony export */   "generate": () => (/* binding */ generate),
/* harmony export */   "generateCodeFrame": () => (/* reexport safe */ _vue_shared__WEBPACK_IMPORTED_MODULE_0__.generateCodeFrame),
/* harmony export */   "getBaseTransformPreset": () => (/* binding */ getBaseTransformPreset),
/* harmony export */   "getConstantType": () => (/* binding */ getConstantType),
/* harmony export */   "getInnerRange": () => (/* binding */ getInnerRange),
/* harmony export */   "getMemoedVNodeCall": () => (/* binding */ getMemoedVNodeCall),
/* harmony export */   "getVNodeBlockHelper": () => (/* binding */ getVNodeBlockHelper),
/* harmony export */   "getVNodeHelper": () => (/* binding */ getVNodeHelper),
/* harmony export */   "hasDynamicKeyVBind": () => (/* binding */ hasDynamicKeyVBind),
/* harmony export */   "hasScopeRef": () => (/* binding */ hasScopeRef),
/* harmony export */   "helperNameMap": () => (/* binding */ helperNameMap),
/* harmony export */   "injectProp": () => (/* binding */ injectProp),
/* harmony export */   "isBuiltInType": () => (/* binding */ isBuiltInType),
/* harmony export */   "isCoreComponent": () => (/* binding */ isCoreComponent),
/* harmony export */   "isFunctionType": () => (/* binding */ isFunctionType),
/* harmony export */   "isInDestructureAssignment": () => (/* binding */ isInDestructureAssignment),
/* harmony export */   "isMemberExpression": () => (/* binding */ isMemberExpression),
/* harmony export */   "isMemberExpressionBrowser": () => (/* binding */ isMemberExpressionBrowser),
/* harmony export */   "isMemberExpressionNode": () => (/* binding */ isMemberExpressionNode),
/* harmony export */   "isReferencedIdentifier": () => (/* binding */ isReferencedIdentifier),
/* harmony export */   "isSimpleIdentifier": () => (/* binding */ isSimpleIdentifier),
/* harmony export */   "isSlotOutlet": () => (/* binding */ isSlotOutlet),
/* harmony export */   "isStaticArgOf": () => (/* binding */ isStaticArgOf),
/* harmony export */   "isStaticExp": () => (/* binding */ isStaticExp),
/* harmony export */   "isStaticProperty": () => (/* binding */ isStaticProperty),
/* harmony export */   "isStaticPropertyKey": () => (/* binding */ isStaticPropertyKey),
/* harmony export */   "isTemplateNode": () => (/* binding */ isTemplateNode),
/* harmony export */   "isText": () => (/* binding */ isText),
/* harmony export */   "isVSlot": () => (/* binding */ isVSlot),
/* harmony export */   "locStub": () => (/* binding */ locStub),
/* harmony export */   "makeBlock": () => (/* binding */ makeBlock),
/* harmony export */   "noopDirectiveTransform": () => (/* binding */ noopDirectiveTransform),
/* harmony export */   "processExpression": () => (/* binding */ processExpression),
/* harmony export */   "processFor": () => (/* binding */ processFor),
/* harmony export */   "processIf": () => (/* binding */ processIf),
/* harmony export */   "processSlotOutlet": () => (/* binding */ processSlotOutlet),
/* harmony export */   "registerRuntimeHelpers": () => (/* binding */ registerRuntimeHelpers),
/* harmony export */   "resolveComponentType": () => (/* binding */ resolveComponentType),
/* harmony export */   "toValidAssetId": () => (/* binding */ toValidAssetId),
/* harmony export */   "trackSlotScopes": () => (/* binding */ trackSlotScopes),
/* harmony export */   "trackVForSlotScopes": () => (/* binding */ trackVForSlotScopes),
/* harmony export */   "transform": () => (/* binding */ transform),
/* harmony export */   "transformBind": () => (/* binding */ transformBind),
/* harmony export */   "transformElement": () => (/* binding */ transformElement),
/* harmony export */   "transformExpression": () => (/* binding */ transformExpression),
/* harmony export */   "transformModel": () => (/* binding */ transformModel),
/* harmony export */   "transformOn": () => (/* binding */ transformOn),
/* harmony export */   "traverseNode": () => (/* binding */ traverseNode),
/* harmony export */   "walkBlockDeclarations": () => (/* binding */ walkBlockDeclarations),
/* harmony export */   "walkFunctionParams": () => (/* binding */ walkFunctionParams),
/* harmony export */   "walkIdentifiers": () => (/* binding */ walkIdentifiers),
/* harmony export */   "warnDeprecation": () => (/* binding */ warnDeprecation)
/* harmony export */ });
/* harmony import */ var _vue_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue/shared */ "./node_modules/@vue/shared/dist/shared.esm-bundler.js");
var _errorMessages, _helperNameMap, _deprecationData;

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function defaultOnError(error) {
  throw error;
}

function defaultOnWarn(msg) {
   true && console.warn("[Vue warn] ".concat(msg.message));
}

function createCompilerError(code, loc, messages, additionalMessage) {
  var msg =  true ? (messages || errorMessages)[code] + (additionalMessage || "") : 0;
  var error = new SyntaxError(String(msg));
  error.code = code;
  error.loc = loc;
  return error;
}

var errorMessages = (_errorMessages = {}, _defineProperty(_errorMessages, 0
/* ABRUPT_CLOSING_OF_EMPTY_COMMENT */
, 'Illegal comment.'), _defineProperty(_errorMessages, 1
/* CDATA_IN_HTML_CONTENT */
, 'CDATA section is allowed only in XML context.'), _defineProperty(_errorMessages, 2
/* DUPLICATE_ATTRIBUTE */
, 'Duplicate attribute.'), _defineProperty(_errorMessages, 3
/* END_TAG_WITH_ATTRIBUTES */
, 'End tag cannot have attributes.'), _defineProperty(_errorMessages, 4
/* END_TAG_WITH_TRAILING_SOLIDUS */
, "Illegal '/' in tags."), _defineProperty(_errorMessages, 5
/* EOF_BEFORE_TAG_NAME */
, 'Unexpected EOF in tag.'), _defineProperty(_errorMessages, 6
/* EOF_IN_CDATA */
, 'Unexpected EOF in CDATA section.'), _defineProperty(_errorMessages, 7
/* EOF_IN_COMMENT */
, 'Unexpected EOF in comment.'), _defineProperty(_errorMessages, 8
/* EOF_IN_SCRIPT_HTML_COMMENT_LIKE_TEXT */
, 'Unexpected EOF in script.'), _defineProperty(_errorMessages, 9
/* EOF_IN_TAG */
, 'Unexpected EOF in tag.'), _defineProperty(_errorMessages, 10
/* INCORRECTLY_CLOSED_COMMENT */
, 'Incorrectly closed comment.'), _defineProperty(_errorMessages, 11
/* INCORRECTLY_OPENED_COMMENT */
, 'Incorrectly opened comment.'), _defineProperty(_errorMessages, 12
/* INVALID_FIRST_CHARACTER_OF_TAG_NAME */
, "Illegal tag name. Use '&lt;' to print '<'."), _defineProperty(_errorMessages, 13
/* MISSING_ATTRIBUTE_VALUE */
, 'Attribute value was expected.'), _defineProperty(_errorMessages, 14
/* MISSING_END_TAG_NAME */
, 'End tag name was expected.'), _defineProperty(_errorMessages, 15
/* MISSING_WHITESPACE_BETWEEN_ATTRIBUTES */
, 'Whitespace was expected.'), _defineProperty(_errorMessages, 16
/* NESTED_COMMENT */
, "Unexpected '<!--' in comment."), _defineProperty(_errorMessages, 17
/* UNEXPECTED_CHARACTER_IN_ATTRIBUTE_NAME */
, 'Attribute name cannot contain U+0022 ("), U+0027 (\'), and U+003C (<).'), _defineProperty(_errorMessages, 18
/* UNEXPECTED_CHARACTER_IN_UNQUOTED_ATTRIBUTE_VALUE */
, 'Unquoted attribute value cannot contain U+0022 ("), U+0027 (\'), U+003C (<), U+003D (=), and U+0060 (`).'), _defineProperty(_errorMessages, 19
/* UNEXPECTED_EQUALS_SIGN_BEFORE_ATTRIBUTE_NAME */
, "Attribute name cannot start with '='."), _defineProperty(_errorMessages, 21
/* UNEXPECTED_QUESTION_MARK_INSTEAD_OF_TAG_NAME */
, "'<?' is allowed only in XML context."), _defineProperty(_errorMessages, 20
/* UNEXPECTED_NULL_CHARACTER */
, "Unexpected null character."), _defineProperty(_errorMessages, 22
/* UNEXPECTED_SOLIDUS_IN_TAG */
, "Illegal '/' in tags."), _defineProperty(_errorMessages, 23
/* X_INVALID_END_TAG */
, 'Invalid end tag.'), _defineProperty(_errorMessages, 24
/* X_MISSING_END_TAG */
, 'Element is missing end tag.'), _defineProperty(_errorMessages, 25
/* X_MISSING_INTERPOLATION_END */
, 'Interpolation end sign was not found.'), _defineProperty(_errorMessages, 27
/* X_MISSING_DYNAMIC_DIRECTIVE_ARGUMENT_END */
, 'End bracket for dynamic directive argument was not found. ' + 'Note that dynamic directive argument cannot contain spaces.'), _defineProperty(_errorMessages, 26
/* X_MISSING_DIRECTIVE_NAME */
, 'Legal directive name was expected.'), _defineProperty(_errorMessages, 28
/* X_V_IF_NO_EXPRESSION */
, "v-if/v-else-if is missing expression."), _defineProperty(_errorMessages, 29
/* X_V_IF_SAME_KEY */
, "v-if/else branches must use unique keys."), _defineProperty(_errorMessages, 30
/* X_V_ELSE_NO_ADJACENT_IF */
, "v-else/v-else-if has no adjacent v-if or v-else-if."), _defineProperty(_errorMessages, 31
/* X_V_FOR_NO_EXPRESSION */
, "v-for is missing expression."), _defineProperty(_errorMessages, 32
/* X_V_FOR_MALFORMED_EXPRESSION */
, "v-for has invalid expression."), _defineProperty(_errorMessages, 33
/* X_V_FOR_TEMPLATE_KEY_PLACEMENT */
, "<template v-for> key should be placed on the <template> tag."), _defineProperty(_errorMessages, 34
/* X_V_BIND_NO_EXPRESSION */
, "v-bind is missing expression."), _defineProperty(_errorMessages, 35
/* X_V_ON_NO_EXPRESSION */
, "v-on is missing expression."), _defineProperty(_errorMessages, 36
/* X_V_SLOT_UNEXPECTED_DIRECTIVE_ON_SLOT_OUTLET */
, "Unexpected custom directive on <slot> outlet."), _defineProperty(_errorMessages, 37
/* X_V_SLOT_MIXED_SLOT_USAGE */
, "Mixed v-slot usage on both the component and nested <template>." + "When there are multiple named slots, all slots should use <template> " + "syntax to avoid scope ambiguity."), _defineProperty(_errorMessages, 38
/* X_V_SLOT_DUPLICATE_SLOT_NAMES */
, "Duplicate slot names found. "), _defineProperty(_errorMessages, 39
/* X_V_SLOT_EXTRANEOUS_DEFAULT_SLOT_CHILDREN */
, "Extraneous children found when component already has explicitly named " + "default slot. These children will be ignored."), _defineProperty(_errorMessages, 40
/* X_V_SLOT_MISPLACED */
, "v-slot can only be used on components or <template> tags."), _defineProperty(_errorMessages, 41
/* X_V_MODEL_NO_EXPRESSION */
, "v-model is missing expression."), _defineProperty(_errorMessages, 42
/* X_V_MODEL_MALFORMED_EXPRESSION */
, "v-model value must be a valid JavaScript member expression."), _defineProperty(_errorMessages, 43
/* X_V_MODEL_ON_SCOPE_VARIABLE */
, "v-model cannot be used on v-for or v-slot scope variables because they are not writable."), _defineProperty(_errorMessages, 44
/* X_INVALID_EXPRESSION */
, "Error parsing JavaScript expression: "), _defineProperty(_errorMessages, 45
/* X_KEEP_ALIVE_INVALID_CHILDREN */
, "<KeepAlive> expects exactly one child component."), _defineProperty(_errorMessages, 46
/* X_PREFIX_ID_NOT_SUPPORTED */
, "\"prefixIdentifiers\" option is not supported in this build of compiler."), _defineProperty(_errorMessages, 47
/* X_MODULE_MODE_NOT_SUPPORTED */
, "ES module mode is not supported in this build of compiler."), _defineProperty(_errorMessages, 48
/* X_CACHE_HANDLER_NOT_SUPPORTED */
, "\"cacheHandlers\" option is only supported when the \"prefixIdentifiers\" option is enabled."), _defineProperty(_errorMessages, 49
/* X_SCOPE_ID_NOT_SUPPORTED */
, "\"scopeId\" option is only supported in module mode."), _defineProperty(_errorMessages, 50
/* __EXTEND_POINT__ */
, ""), _errorMessages);
var FRAGMENT = Symbol( true ? "Fragment" : 0);
var TELEPORT = Symbol( true ? "Teleport" : 0);
var SUSPENSE = Symbol( true ? "Suspense" : 0);
var KEEP_ALIVE = Symbol( true ? "KeepAlive" : 0);
var BASE_TRANSITION = Symbol( true ? "BaseTransition" : 0);
var OPEN_BLOCK = Symbol( true ? "openBlock" : 0);
var CREATE_BLOCK = Symbol( true ? "createBlock" : 0);
var CREATE_ELEMENT_BLOCK = Symbol( true ? "createElementBlock" : 0);
var CREATE_VNODE = Symbol( true ? "createVNode" : 0);
var CREATE_ELEMENT_VNODE = Symbol( true ? "createElementVNode" : 0);
var CREATE_COMMENT = Symbol( true ? "createCommentVNode" : 0);
var CREATE_TEXT = Symbol( true ? "createTextVNode" : 0);
var CREATE_STATIC = Symbol( true ? "createStaticVNode" : 0);
var RESOLVE_COMPONENT = Symbol( true ? "resolveComponent" : 0);
var RESOLVE_DYNAMIC_COMPONENT = Symbol( true ? "resolveDynamicComponent" : 0);
var RESOLVE_DIRECTIVE = Symbol( true ? "resolveDirective" : 0);
var RESOLVE_FILTER = Symbol( true ? "resolveFilter" : 0);
var WITH_DIRECTIVES = Symbol( true ? "withDirectives" : 0);
var RENDER_LIST = Symbol( true ? "renderList" : 0);
var RENDER_SLOT = Symbol( true ? "renderSlot" : 0);
var CREATE_SLOTS = Symbol( true ? "createSlots" : 0);
var TO_DISPLAY_STRING = Symbol( true ? "toDisplayString" : 0);
var MERGE_PROPS = Symbol( true ? "mergeProps" : 0);
var NORMALIZE_CLASS = Symbol( true ? "normalizeClass" : 0);
var NORMALIZE_STYLE = Symbol( true ? "normalizeStyle" : 0);
var NORMALIZE_PROPS = Symbol( true ? "normalizeProps" : 0);
var GUARD_REACTIVE_PROPS = Symbol( true ? "guardReactiveProps" : 0);
var TO_HANDLERS = Symbol( true ? "toHandlers" : 0);
var CAMELIZE = Symbol( true ? "camelize" : 0);
var CAPITALIZE = Symbol( true ? "capitalize" : 0);
var TO_HANDLER_KEY = Symbol( true ? "toHandlerKey" : 0);
var SET_BLOCK_TRACKING = Symbol( true ? "setBlockTracking" : 0);
var PUSH_SCOPE_ID = Symbol( true ? "pushScopeId" : 0);
var POP_SCOPE_ID = Symbol( true ? "popScopeId" : 0);
var WITH_CTX = Symbol( true ? "withCtx" : 0);
var UNREF = Symbol( true ? "unref" : 0);
var IS_REF = Symbol( true ? "isRef" : 0);
var WITH_MEMO = Symbol( true ? "withMemo" : 0);
var IS_MEMO_SAME = Symbol( true ? "isMemoSame" : 0); // Name mapping for runtime helpers that need to be imported from 'vue' in
// generated code. Make sure these are correctly exported in the runtime!
// Using `any` here because TS doesn't allow symbols as index type.

var helperNameMap = (_helperNameMap = {}, _defineProperty(_helperNameMap, FRAGMENT, "Fragment"), _defineProperty(_helperNameMap, TELEPORT, "Teleport"), _defineProperty(_helperNameMap, SUSPENSE, "Suspense"), _defineProperty(_helperNameMap, KEEP_ALIVE, "KeepAlive"), _defineProperty(_helperNameMap, BASE_TRANSITION, "BaseTransition"), _defineProperty(_helperNameMap, OPEN_BLOCK, "openBlock"), _defineProperty(_helperNameMap, CREATE_BLOCK, "createBlock"), _defineProperty(_helperNameMap, CREATE_ELEMENT_BLOCK, "createElementBlock"), _defineProperty(_helperNameMap, CREATE_VNODE, "createVNode"), _defineProperty(_helperNameMap, CREATE_ELEMENT_VNODE, "createElementVNode"), _defineProperty(_helperNameMap, CREATE_COMMENT, "createCommentVNode"), _defineProperty(_helperNameMap, CREATE_TEXT, "createTextVNode"), _defineProperty(_helperNameMap, CREATE_STATIC, "createStaticVNode"), _defineProperty(_helperNameMap, RESOLVE_COMPONENT, "resolveComponent"), _defineProperty(_helperNameMap, RESOLVE_DYNAMIC_COMPONENT, "resolveDynamicComponent"), _defineProperty(_helperNameMap, RESOLVE_DIRECTIVE, "resolveDirective"), _defineProperty(_helperNameMap, RESOLVE_FILTER, "resolveFilter"), _defineProperty(_helperNameMap, WITH_DIRECTIVES, "withDirectives"), _defineProperty(_helperNameMap, RENDER_LIST, "renderList"), _defineProperty(_helperNameMap, RENDER_SLOT, "renderSlot"), _defineProperty(_helperNameMap, CREATE_SLOTS, "createSlots"), _defineProperty(_helperNameMap, TO_DISPLAY_STRING, "toDisplayString"), _defineProperty(_helperNameMap, MERGE_PROPS, "mergeProps"), _defineProperty(_helperNameMap, NORMALIZE_CLASS, "normalizeClass"), _defineProperty(_helperNameMap, NORMALIZE_STYLE, "normalizeStyle"), _defineProperty(_helperNameMap, NORMALIZE_PROPS, "normalizeProps"), _defineProperty(_helperNameMap, GUARD_REACTIVE_PROPS, "guardReactiveProps"), _defineProperty(_helperNameMap, TO_HANDLERS, "toHandlers"), _defineProperty(_helperNameMap, CAMELIZE, "camelize"), _defineProperty(_helperNameMap, CAPITALIZE, "capitalize"), _defineProperty(_helperNameMap, TO_HANDLER_KEY, "toHandlerKey"), _defineProperty(_helperNameMap, SET_BLOCK_TRACKING, "setBlockTracking"), _defineProperty(_helperNameMap, PUSH_SCOPE_ID, "pushScopeId"), _defineProperty(_helperNameMap, POP_SCOPE_ID, "popScopeId"), _defineProperty(_helperNameMap, WITH_CTX, "withCtx"), _defineProperty(_helperNameMap, UNREF, "unref"), _defineProperty(_helperNameMap, IS_REF, "isRef"), _defineProperty(_helperNameMap, WITH_MEMO, "withMemo"), _defineProperty(_helperNameMap, IS_MEMO_SAME, "isMemoSame"), _helperNameMap);

function registerRuntimeHelpers(helpers) {
  Object.getOwnPropertySymbols(helpers).forEach(function (s) {
    helperNameMap[s] = helpers[s];
  });
} // AST Utilities ---------------------------------------------------------------
// Some expressions, e.g. sequence and conditional expressions, are never
// associated with template nodes, so their source locations are just a stub.
// Container types like CompoundExpression also don't need a real location.


var locStub = {
  source: '',
  start: {
    line: 1,
    column: 1,
    offset: 0
  },
  end: {
    line: 1,
    column: 1,
    offset: 0
  }
};

function createRoot(children) {
  var loc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : locStub;
  return {
    type: 0
    /* ROOT */
    ,
    children: children,
    helpers: [],
    components: [],
    directives: [],
    hoists: [],
    imports: [],
    cached: 0,
    temps: 0,
    codegenNode: undefined,
    loc: loc
  };
}

function createVNodeCall(context, tag, props, children, patchFlag, dynamicProps, directives) {
  var isBlock = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : false;
  var disableTracking = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : false;
  var isComponent = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : false;
  var loc = arguments.length > 10 && arguments[10] !== undefined ? arguments[10] : locStub;

  if (context) {
    if (isBlock) {
      context.helper(OPEN_BLOCK);
      context.helper(getVNodeBlockHelper(context.inSSR, isComponent));
    } else {
      context.helper(getVNodeHelper(context.inSSR, isComponent));
    }

    if (directives) {
      context.helper(WITH_DIRECTIVES);
    }
  }

  return {
    type: 13
    /* VNODE_CALL */
    ,
    tag: tag,
    props: props,
    children: children,
    patchFlag: patchFlag,
    dynamicProps: dynamicProps,
    directives: directives,
    isBlock: isBlock,
    disableTracking: disableTracking,
    isComponent: isComponent,
    loc: loc
  };
}

function createArrayExpression(elements) {
  var loc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : locStub;
  return {
    type: 17
    /* JS_ARRAY_EXPRESSION */
    ,
    loc: loc,
    elements: elements
  };
}

function createObjectExpression(properties) {
  var loc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : locStub;
  return {
    type: 15
    /* JS_OBJECT_EXPRESSION */
    ,
    loc: loc,
    properties: properties
  };
}

function createObjectProperty(key, value) {
  return {
    type: 16
    /* JS_PROPERTY */
    ,
    loc: locStub,
    key: (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isString)(key) ? createSimpleExpression(key, true) : key,
    value: value
  };
}

function createSimpleExpression(content) {
  var isStatic = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var loc = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : locStub;
  var constType = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  return {
    type: 4
    /* SIMPLE_EXPRESSION */
    ,
    loc: loc,
    content: content,
    isStatic: isStatic,
    constType: isStatic ? 3
    /* CAN_STRINGIFY */
    : constType
  };
}

function createInterpolation(content, loc) {
  return {
    type: 5
    /* INTERPOLATION */
    ,
    loc: loc,
    content: (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isString)(content) ? createSimpleExpression(content, false, loc) : content
  };
}

function createCompoundExpression(children) {
  var loc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : locStub;
  return {
    type: 8
    /* COMPOUND_EXPRESSION */
    ,
    loc: loc,
    children: children
  };
}

function createCallExpression(callee) {
  var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var loc = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : locStub;
  return {
    type: 14
    /* JS_CALL_EXPRESSION */
    ,
    loc: loc,
    callee: callee,
    arguments: args
  };
}

function createFunctionExpression(params) {
  var returns = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
  var newline = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var isSlot = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var loc = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : locStub;
  return {
    type: 18
    /* JS_FUNCTION_EXPRESSION */
    ,
    params: params,
    returns: returns,
    newline: newline,
    isSlot: isSlot,
    loc: loc
  };
}

function createConditionalExpression(test, consequent, alternate) {
  var newline = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
  return {
    type: 19
    /* JS_CONDITIONAL_EXPRESSION */
    ,
    test: test,
    consequent: consequent,
    alternate: alternate,
    newline: newline,
    loc: locStub
  };
}

function createCacheExpression(index, value) {
  var isVNode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  return {
    type: 20
    /* JS_CACHE_EXPRESSION */
    ,
    index: index,
    value: value,
    isVNode: isVNode,
    loc: locStub
  };
}

function createBlockStatement(body) {
  return {
    type: 21
    /* JS_BLOCK_STATEMENT */
    ,
    body: body,
    loc: locStub
  };
}

function createTemplateLiteral(elements) {
  return {
    type: 22
    /* JS_TEMPLATE_LITERAL */
    ,
    elements: elements,
    loc: locStub
  };
}

function createIfStatement(test, consequent, alternate) {
  return {
    type: 23
    /* JS_IF_STATEMENT */
    ,
    test: test,
    consequent: consequent,
    alternate: alternate,
    loc: locStub
  };
}

function createAssignmentExpression(left, right) {
  return {
    type: 24
    /* JS_ASSIGNMENT_EXPRESSION */
    ,
    left: left,
    right: right,
    loc: locStub
  };
}

function createSequenceExpression(expressions) {
  return {
    type: 25
    /* JS_SEQUENCE_EXPRESSION */
    ,
    expressions: expressions,
    loc: locStub
  };
}

function createReturnStatement(returns) {
  return {
    type: 26
    /* JS_RETURN_STATEMENT */
    ,
    returns: returns,
    loc: locStub
  };
}

var isStaticExp = function isStaticExp(p) {
  return p.type === 4
  /* SIMPLE_EXPRESSION */
  && p.isStatic;
};

var isBuiltInType = function isBuiltInType(tag, expected) {
  return tag === expected || tag === (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.hyphenate)(expected);
};

function isCoreComponent(tag) {
  if (isBuiltInType(tag, 'Teleport')) {
    return TELEPORT;
  } else if (isBuiltInType(tag, 'Suspense')) {
    return SUSPENSE;
  } else if (isBuiltInType(tag, 'KeepAlive')) {
    return KEEP_ALIVE;
  } else if (isBuiltInType(tag, 'BaseTransition')) {
    return BASE_TRANSITION;
  }
}

var nonIdentifierRE = /^\d|[^\$\w]/;

var isSimpleIdentifier = function isSimpleIdentifier(name) {
  return !nonIdentifierRE.test(name);
};

var validFirstIdentCharRE = /[A-Za-z_$\xA0-\uFFFF]/;
var validIdentCharRE = /[\.\?\w$\xA0-\uFFFF]/;
var whitespaceRE = /\s+[.[]\s*|\s*[.[]\s+/g;
/**
 * Simple lexer to check if an expression is a member expression. This is
 * lax and only checks validity at the root level (i.e. does not validate exps
 * inside square brackets), but it's ok since these are only used on template
 * expressions and false positives are invalid expressions in the first place.
 */

var isMemberExpressionBrowser = function isMemberExpressionBrowser(path) {
  // remove whitespaces around . or [ first
  path = path.trim().replace(whitespaceRE, function (s) {
    return s.trim();
  });
  var state = 0
  /* inMemberExp */
  ;
  var stateStack = [];
  var currentOpenBracketCount = 0;
  var currentOpenParensCount = 0;
  var currentStringType = null;

  for (var i = 0; i < path.length; i++) {
    var _char = path.charAt(i);

    switch (state) {
      case 0
      /* inMemberExp */
      :
        if (_char === '[') {
          stateStack.push(state);
          state = 1
          /* inBrackets */
          ;
          currentOpenBracketCount++;
        } else if (_char === '(') {
          stateStack.push(state);
          state = 2
          /* inParens */
          ;
          currentOpenParensCount++;
        } else if (!(i === 0 ? validFirstIdentCharRE : validIdentCharRE).test(_char)) {
          return false;
        }

        break;

      case 1
      /* inBrackets */
      :
        if (_char === "'" || _char === "\"" || _char === '`') {
          stateStack.push(state);
          state = 3
          /* inString */
          ;
          currentStringType = _char;
        } else if (_char === "[") {
          currentOpenBracketCount++;
        } else if (_char === "]") {
          if (! --currentOpenBracketCount) {
            state = stateStack.pop();
          }
        }

        break;

      case 2
      /* inParens */
      :
        if (_char === "'" || _char === "\"" || _char === '`') {
          stateStack.push(state);
          state = 3
          /* inString */
          ;
          currentStringType = _char;
        } else if (_char === "(") {
          currentOpenParensCount++;
        } else if (_char === ")") {
          // if the exp ends as a call then it should not be considered valid
          if (i === path.length - 1) {
            return false;
          }

          if (! --currentOpenParensCount) {
            state = stateStack.pop();
          }
        }

        break;

      case 3
      /* inString */
      :
        if (_char === currentStringType) {
          state = stateStack.pop();
          currentStringType = null;
        }

        break;
    }
  }

  return !currentOpenBracketCount && !currentOpenParensCount;
};

var isMemberExpressionNode = _vue_shared__WEBPACK_IMPORTED_MODULE_0__.NOOP;
var isMemberExpression = isMemberExpressionBrowser;

function getInnerRange(loc, offset, length) {
  var source = loc.source.slice(offset, offset + length);
  var newLoc = {
    source: source,
    start: advancePositionWithClone(loc.start, loc.source, offset),
    end: loc.end
  };

  if (length != null) {
    newLoc.end = advancePositionWithClone(loc.start, loc.source, offset + length);
  }

  return newLoc;
}

function advancePositionWithClone(pos, source) {
  var numberOfCharacters = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : source.length;
  return advancePositionWithMutation((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.extend)({}, pos), source, numberOfCharacters);
} // advance by mutation without cloning (for performance reasons), since this
// gets called a lot in the parser


function advancePositionWithMutation(pos, source) {
  var numberOfCharacters = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : source.length;
  var linesCount = 0;
  var lastNewLinePos = -1;

  for (var i = 0; i < numberOfCharacters; i++) {
    if (source.charCodeAt(i) === 10
    /* newline char code */
    ) {
      linesCount++;
      lastNewLinePos = i;
    }
  }

  pos.offset += numberOfCharacters;
  pos.line += linesCount;
  pos.column = lastNewLinePos === -1 ? pos.column + numberOfCharacters : numberOfCharacters - lastNewLinePos;
  return pos;
}

function assert(condition, msg) {
  /* istanbul ignore if */
  if (!condition) {
    throw new Error(msg || "unexpected compiler condition");
  }
}

function findDir(node, name) {
  var allowEmpty = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  for (var i = 0; i < node.props.length; i++) {
    var p = node.props[i];

    if (p.type === 7
    /* DIRECTIVE */
    && (allowEmpty || p.exp) && ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isString)(name) ? p.name === name : name.test(p.name))) {
      return p;
    }
  }
}

function findProp(node, name) {
  var dynamicOnly = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var allowEmpty = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  for (var i = 0; i < node.props.length; i++) {
    var p = node.props[i];

    if (p.type === 6
    /* ATTRIBUTE */
    ) {
      if (dynamicOnly) continue;

      if (p.name === name && (p.value || allowEmpty)) {
        return p;
      }
    } else if (p.name === 'bind' && (p.exp || allowEmpty) && isStaticArgOf(p.arg, name)) {
      return p;
    }
  }
}

function isStaticArgOf(arg, name) {
  return !!(arg && isStaticExp(arg) && arg.content === name);
}

function hasDynamicKeyVBind(node) {
  return node.props.some(function (p) {
    return p.type === 7
    /* DIRECTIVE */
    && p.name === 'bind' && (!p.arg || // v-bind="obj"
    p.arg.type !== 4
    /* SIMPLE_EXPRESSION */
    || // v-bind:[_ctx.foo]
    !p.arg.isStatic);
  } // v-bind:[foo]
  );
}

function isText(node) {
  return node.type === 5
  /* INTERPOLATION */
  || node.type === 2
  /* TEXT */
  ;
}

function isVSlot(p) {
  return p.type === 7
  /* DIRECTIVE */
  && p.name === 'slot';
}

function isTemplateNode(node) {
  return node.type === 1
  /* ELEMENT */
  && node.tagType === 3
  /* TEMPLATE */
  ;
}

function isSlotOutlet(node) {
  return node.type === 1
  /* ELEMENT */
  && node.tagType === 2
  /* SLOT */
  ;
}

function getVNodeHelper(ssr, isComponent) {
  return ssr || isComponent ? CREATE_VNODE : CREATE_ELEMENT_VNODE;
}

function getVNodeBlockHelper(ssr, isComponent) {
  return ssr || isComponent ? CREATE_BLOCK : CREATE_ELEMENT_BLOCK;
}

var propsHelperSet = new Set([NORMALIZE_PROPS, GUARD_REACTIVE_PROPS]);

function getUnnormalizedProps(props) {
  var callPath = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  if (props && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isString)(props) && props.type === 14
  /* JS_CALL_EXPRESSION */
  ) {
    var callee = props.callee;

    if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isString)(callee) && propsHelperSet.has(callee)) {
      return getUnnormalizedProps(props.arguments[0], callPath.concat(props));
    }
  }

  return [props, callPath];
}

function injectProp(node, prop, context) {
  var propsWithInjection;
  /**
   * 1. mergeProps(...)
   * 2. toHandlers(...)
   * 3. normalizeProps(...)
   * 4. normalizeProps(guardReactiveProps(...))
   *
   * we need to get the real props before normalization
   */

  var props = node.type === 13
  /* VNODE_CALL */
  ? node.props : node.arguments[2];
  var callPath = [];
  var parentCall;

  if (props && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isString)(props) && props.type === 14
  /* JS_CALL_EXPRESSION */
  ) {
    var ret = getUnnormalizedProps(props);
    props = ret[0];
    callPath = ret[1];
    parentCall = callPath[callPath.length - 1];
  }

  if (props == null || (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isString)(props)) {
    propsWithInjection = createObjectExpression([prop]);
  } else if (props.type === 14
  /* JS_CALL_EXPRESSION */
  ) {
    // merged props... add ours
    // only inject key to object literal if it's the first argument so that
    // if doesn't override user provided keys
    var first = props.arguments[0];

    if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isString)(first) && first.type === 15
    /* JS_OBJECT_EXPRESSION */
    ) {
      first.properties.unshift(prop);
    } else {
      if (props.callee === TO_HANDLERS) {
        // #2366
        propsWithInjection = createCallExpression(context.helper(MERGE_PROPS), [createObjectExpression([prop]), props]);
      } else {
        props.arguments.unshift(createObjectExpression([prop]));
      }
    }

    !propsWithInjection && (propsWithInjection = props);
  } else if (props.type === 15
  /* JS_OBJECT_EXPRESSION */
  ) {
    var alreadyExists = false; // check existing key to avoid overriding user provided keys

    if (prop.key.type === 4
    /* SIMPLE_EXPRESSION */
    ) {
      var propKeyName = prop.key.content;
      alreadyExists = props.properties.some(function (p) {
        return p.key.type === 4
        /* SIMPLE_EXPRESSION */
        && p.key.content === propKeyName;
      });
    }

    if (!alreadyExists) {
      props.properties.unshift(prop);
    }

    propsWithInjection = props;
  } else {
    // single v-bind with expression, return a merged replacement
    propsWithInjection = createCallExpression(context.helper(MERGE_PROPS), [createObjectExpression([prop]), props]); // in the case of nested helper call, e.g. `normalizeProps(guardReactiveProps(props))`,
    // it will be rewritten as `normalizeProps(mergeProps({ key: 0 }, props))`,
    // the `guardReactiveProps` will no longer be needed

    if (parentCall && parentCall.callee === GUARD_REACTIVE_PROPS) {
      parentCall = callPath[callPath.length - 2];
    }
  }

  if (node.type === 13
  /* VNODE_CALL */
  ) {
    if (parentCall) {
      parentCall.arguments[0] = propsWithInjection;
    } else {
      node.props = propsWithInjection;
    }
  } else {
    if (parentCall) {
      parentCall.arguments[0] = propsWithInjection;
    } else {
      node.arguments[2] = propsWithInjection;
    }
  }
}

function toValidAssetId(name, type) {
  // see issue#4422, we need adding identifier on validAssetId if variable `name` has specific character
  return "_".concat(type, "_").concat(name.replace(/[^\w]/g, function (searchValue, replaceValue) {
    return searchValue === '-' ? '_' : name.charCodeAt(replaceValue).toString();
  }));
} // Check if a node contains expressions that reference current context scope ids


function hasScopeRef(node, ids) {
  if (!node || Object.keys(ids).length === 0) {
    return false;
  }

  switch (node.type) {
    case 1
    /* ELEMENT */
    :
      for (var i = 0; i < node.props.length; i++) {
        var p = node.props[i];

        if (p.type === 7
        /* DIRECTIVE */
        && (hasScopeRef(p.arg, ids) || hasScopeRef(p.exp, ids))) {
          return true;
        }
      }

      return node.children.some(function (c) {
        return hasScopeRef(c, ids);
      });

    case 11
    /* FOR */
    :
      if (hasScopeRef(node.source, ids)) {
        return true;
      }

      return node.children.some(function (c) {
        return hasScopeRef(c, ids);
      });

    case 9
    /* IF */
    :
      return node.branches.some(function (b) {
        return hasScopeRef(b, ids);
      });

    case 10
    /* IF_BRANCH */
    :
      if (hasScopeRef(node.condition, ids)) {
        return true;
      }

      return node.children.some(function (c) {
        return hasScopeRef(c, ids);
      });

    case 4
    /* SIMPLE_EXPRESSION */
    :
      return !node.isStatic && isSimpleIdentifier(node.content) && !!ids[node.content];

    case 8
    /* COMPOUND_EXPRESSION */
    :
      return node.children.some(function (c) {
        return (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isObject)(c) && hasScopeRef(c, ids);
      });

    case 5
    /* INTERPOLATION */
    :
    case 12
    /* TEXT_CALL */
    :
      return hasScopeRef(node.content, ids);

    case 2
    /* TEXT */
    :
    case 3
    /* COMMENT */
    :
      return false;

    default:
      if (true) ;
      return false;
  }
}

function getMemoedVNodeCall(node) {
  if (node.type === 14
  /* JS_CALL_EXPRESSION */
  && node.callee === WITH_MEMO) {
    return node.arguments[1].returns;
  } else {
    return node;
  }
}

function makeBlock(node, _ref) {
  var helper = _ref.helper,
      removeHelper = _ref.removeHelper,
      inSSR = _ref.inSSR;

  if (!node.isBlock) {
    node.isBlock = true;
    removeHelper(getVNodeHelper(inSSR, node.isComponent));
    helper(OPEN_BLOCK);
    helper(getVNodeBlockHelper(inSSR, node.isComponent));
  }
}

var deprecationData = (_deprecationData = {}, _defineProperty(_deprecationData, "COMPILER_IS_ON_ELEMENT"
/* COMPILER_IS_ON_ELEMENT */
, {
  message: "Platform-native elements with \"is\" prop will no longer be " + "treated as components in Vue 3 unless the \"is\" value is explicitly " + "prefixed with \"vue:\".",
  link: "https://v3-migration.vuejs.org/breaking-changes/custom-elements-interop.html"
}), _defineProperty(_deprecationData, "COMPILER_V_BIND_SYNC"
/* COMPILER_V_BIND_SYNC */
, {
  message: function message(key) {
    return ".sync modifier for v-bind has been removed. Use v-model with " + "argument instead. `v-bind:".concat(key, ".sync` should be changed to ") + "`v-model:".concat(key, "`.");
  },
  link: "https://v3-migration.vuejs.org/breaking-changes/v-model.html"
}), _defineProperty(_deprecationData, "COMPILER_V_BIND_PROP"
/* COMPILER_V_BIND_PROP */
, {
  message: ".prop modifier for v-bind has been removed and no longer necessary. " + "Vue 3 will automatically set a binding as DOM property when appropriate."
}), _defineProperty(_deprecationData, "COMPILER_V_BIND_OBJECT_ORDER"
/* COMPILER_V_BIND_OBJECT_ORDER */
, {
  message: "v-bind=\"obj\" usage is now order sensitive and behaves like JavaScript " + "object spread: it will now overwrite an existing non-mergeable attribute " + "that appears before v-bind in the case of conflict. " + "To retain 2.x behavior, move v-bind to make it the first attribute. " + "You can also suppress this warning if the usage is intended.",
  link: "https://v3-migration.vuejs.org/breaking-changes/v-bind.html"
}), _defineProperty(_deprecationData, "COMPILER_V_ON_NATIVE"
/* COMPILER_V_ON_NATIVE */
, {
  message: ".native modifier for v-on has been removed as is no longer necessary.",
  link: "https://v3-migration.vuejs.org/breaking-changes/v-on-native-modifier-removed.html"
}), _defineProperty(_deprecationData, "COMPILER_V_IF_V_FOR_PRECEDENCE"
/* COMPILER_V_IF_V_FOR_PRECEDENCE */
, {
  message: "v-if / v-for precedence when used on the same element has changed " + "in Vue 3: v-if now takes higher precedence and will no longer have " + "access to v-for scope variables. It is best to avoid the ambiguity " + "with <template> tags or use a computed property that filters v-for " + "data source.",
  link: "https://v3-migration.vuejs.org/breaking-changes/v-if-v-for.html"
}), _defineProperty(_deprecationData, "COMPILER_NATIVE_TEMPLATE"
/* COMPILER_NATIVE_TEMPLATE */
, {
  message: "<template> with no special directives will render as a native template " + "element instead of its inner content in Vue 3."
}), _defineProperty(_deprecationData, "COMPILER_INLINE_TEMPLATE"
/* COMPILER_INLINE_TEMPLATE */
, {
  message: "\"inline-template\" has been removed in Vue 3.",
  link: "https://v3-migration.vuejs.org/breaking-changes/inline-template-attribute.html"
}), _defineProperty(_deprecationData, "COMPILER_FILTER"
/* COMPILER_FILTERS */
, {
  message: "filters have been removed in Vue 3. " + "The \"|\" symbol will be treated as native JavaScript bitwise OR operator. " + "Use method calls or computed properties instead.",
  link: "https://v3-migration.vuejs.org/breaking-changes/filters.html"
}), _deprecationData);

function getCompatValue(key, context) {
  var config = context.options ? context.options.compatConfig : context.compatConfig;
  var value = config && config[key];

  if (key === 'MODE') {
    return value || 3; // compiler defaults to v3 behavior
  } else {
    return value;
  }
}

function isCompatEnabled(key, context) {
  var mode = getCompatValue('MODE', context);
  var value = getCompatValue(key, context); // in v3 mode, only enable if explicitly set to true
  // otherwise enable for any non-false value

  return mode === 3 ? value === true : value !== false;
}

function checkCompatEnabled(key, context, loc) {
  var enabled = isCompatEnabled(key, context);

  if ( true && enabled) {
    for (var _len = arguments.length, args = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
      args[_key - 3] = arguments[_key];
    }

    warnDeprecation.apply(void 0, [key, context, loc].concat(args));
  }

  return enabled;
}

function warnDeprecation(key, context, loc) {
  var val = getCompatValue(key, context);

  if (val === 'suppress-warning') {
    return;
  }

  var _deprecationData$key = deprecationData[key],
      message = _deprecationData$key.message,
      link = _deprecationData$key.link;

  for (var _len2 = arguments.length, args = new Array(_len2 > 3 ? _len2 - 3 : 0), _key2 = 3; _key2 < _len2; _key2++) {
    args[_key2 - 3] = arguments[_key2];
  }

  var msg = "(deprecation ".concat(key, ") ").concat(typeof message === 'function' ? message.apply(void 0, args) : message).concat(link ? "\n  Details: ".concat(link) : "");
  var err = new SyntaxError(msg);
  err.code = key;
  if (loc) err.loc = loc;
  context.onWarn(err);
} // The default decoder only provides escapes for characters reserved as part of
// the template syntax, and is only used if the custom renderer did not provide
// a platform-specific decoder.


var decodeRE = /&(gt|lt|amp|apos|quot);/g;
var decodeMap = {
  gt: '>',
  lt: '<',
  amp: '&',
  apos: "'",
  quot: '"'
};
var defaultParserOptions = {
  delimiters: ["{{", "}}"],
  getNamespace: function getNamespace() {
    return 0;
  }
  /* HTML */
  ,
  getTextMode: function getTextMode() {
    return 0;
  }
  /* DATA */
  ,
  isVoidTag: _vue_shared__WEBPACK_IMPORTED_MODULE_0__.NO,
  isPreTag: _vue_shared__WEBPACK_IMPORTED_MODULE_0__.NO,
  isCustomElement: _vue_shared__WEBPACK_IMPORTED_MODULE_0__.NO,
  decodeEntities: function decodeEntities(rawText) {
    return rawText.replace(decodeRE, function (_, p1) {
      return decodeMap[p1];
    });
  },
  onError: defaultOnError,
  onWarn: defaultOnWarn,
  comments: "development" !== 'production'
};

function baseParse(content) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var context = createParserContext(content, options);
  var start = getCursor(context);
  return createRoot(parseChildren(context, 0
  /* DATA */
  , []), getSelection(context, start));
}

function createParserContext(content, rawOptions) {
  var options = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.extend)({}, defaultParserOptions);
  var key;

  for (key in rawOptions) {
    // @ts-ignore
    options[key] = rawOptions[key] === undefined ? defaultParserOptions[key] : rawOptions[key];
  }

  return {
    options: options,
    column: 1,
    line: 1,
    offset: 0,
    originalSource: content,
    source: content,
    inPre: false,
    inVPre: false,
    onWarn: options.onWarn
  };
}

function parseChildren(context, mode, ancestors) {
  var parent = last(ancestors);
  var ns = parent ? parent.ns : 0
  /* HTML */
  ;
  var nodes = [];

  while (!isEnd(context, mode, ancestors)) {
    var s = context.source;
    var node = undefined;

    if (mode === 0
    /* DATA */
    || mode === 1
    /* RCDATA */
    ) {
      if (!context.inVPre && startsWith(s, context.options.delimiters[0])) {
        // '{{'
        node = parseInterpolation(context, mode);
      } else if (mode === 0
      /* DATA */
      && s[0] === '<') {
        // https://html.spec.whatwg.org/multipage/parsing.html#tag-open-state
        if (s.length === 1) {
          emitError(context, 5
          /* EOF_BEFORE_TAG_NAME */
          , 1);
        } else if (s[1] === '!') {
          // https://html.spec.whatwg.org/multipage/parsing.html#markup-declaration-open-state
          if (startsWith(s, '<!--')) {
            node = parseComment(context);
          } else if (startsWith(s, '<!DOCTYPE')) {
            // Ignore DOCTYPE by a limitation.
            node = parseBogusComment(context);
          } else if (startsWith(s, '<![CDATA[')) {
            if (ns !== 0
            /* HTML */
            ) {
              node = parseCDATA(context, ancestors);
            } else {
              emitError(context, 1
              /* CDATA_IN_HTML_CONTENT */
              );
              node = parseBogusComment(context);
            }
          } else {
            emitError(context, 11
            /* INCORRECTLY_OPENED_COMMENT */
            );
            node = parseBogusComment(context);
          }
        } else if (s[1] === '/') {
          // https://html.spec.whatwg.org/multipage/parsing.html#end-tag-open-state
          if (s.length === 2) {
            emitError(context, 5
            /* EOF_BEFORE_TAG_NAME */
            , 2);
          } else if (s[2] === '>') {
            emitError(context, 14
            /* MISSING_END_TAG_NAME */
            , 2);
            advanceBy(context, 3);
            continue;
          } else if (/[a-z]/i.test(s[2])) {
            emitError(context, 23
            /* X_INVALID_END_TAG */
            );
            parseTag(context, 1
            /* End */
            , parent);
            continue;
          } else {
            emitError(context, 12
            /* INVALID_FIRST_CHARACTER_OF_TAG_NAME */
            , 2);
            node = parseBogusComment(context);
          }
        } else if (/[a-z]/i.test(s[1])) {
          node = parseElement(context, ancestors); // 2.x <template> with no directive compat

          if (isCompatEnabled("COMPILER_NATIVE_TEMPLATE"
          /* COMPILER_NATIVE_TEMPLATE */
          , context) && node && node.tag === 'template' && !node.props.some(function (p) {
            return p.type === 7
            /* DIRECTIVE */
            && isSpecialTemplateDirective(p.name);
          })) {
             true && warnDeprecation("COMPILER_NATIVE_TEMPLATE"
            /* COMPILER_NATIVE_TEMPLATE */
            , context, node.loc);
            node = node.children;
          }
        } else if (s[1] === '?') {
          emitError(context, 21
          /* UNEXPECTED_QUESTION_MARK_INSTEAD_OF_TAG_NAME */
          , 1);
          node = parseBogusComment(context);
        } else {
          emitError(context, 12
          /* INVALID_FIRST_CHARACTER_OF_TAG_NAME */
          , 1);
        }
      }
    }

    if (!node) {
      node = parseText(context, mode);
    }

    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isArray)(node)) {
      for (var i = 0; i < node.length; i++) {
        pushNode(nodes, node[i]);
      }
    } else {
      pushNode(nodes, node);
    }
  } // Whitespace handling strategy like v2


  var removedWhitespace = false;

  if (mode !== 2
  /* RAWTEXT */
  && mode !== 1
  /* RCDATA */
  ) {
    var shouldCondense = context.options.whitespace !== 'preserve';

    for (var _i = 0; _i < nodes.length; _i++) {
      var _node2 = nodes[_i];

      if (!context.inPre && _node2.type === 2
      /* TEXT */
      ) {
        if (!/[^\t\r\n\f ]/.test(_node2.content)) {
          var prev = nodes[_i - 1];
          var next = nodes[_i + 1]; // Remove if:
          // - the whitespace is the first or last node, or:
          // - (condense mode) the whitespace is adjacent to a comment, or:
          // - (condense mode) the whitespace is between two elements AND contains newline

          if (!prev || !next || shouldCondense && (prev.type === 3
          /* COMMENT */
          || next.type === 3
          /* COMMENT */
          || prev.type === 1
          /* ELEMENT */
          && next.type === 1
          /* ELEMENT */
          && /[\r\n]/.test(_node2.content))) {
            removedWhitespace = true;
            nodes[_i] = null;
          } else {
            // Otherwise, the whitespace is condensed into a single space
            _node2.content = ' ';
          }
        } else if (shouldCondense) {
          // in condense mode, consecutive whitespaces in text are condensed
          // down to a single space.
          _node2.content = _node2.content.replace(/[\t\r\n\f ]+/g, ' ');
        }
      } // Remove comment nodes if desired by configuration.
      else if (_node2.type === 3
      /* COMMENT */
      && !context.options.comments) {
        removedWhitespace = true;
        nodes[_i] = null;
      }
    }

    if (context.inPre && parent && context.options.isPreTag(parent.tag)) {
      // remove leading newline per html spec
      // https://html.spec.whatwg.org/multipage/grouping-content.html#the-pre-element
      var first = nodes[0];

      if (first && first.type === 2
      /* TEXT */
      ) {
        first.content = first.content.replace(/^\r?\n/, '');
      }
    }
  }

  return removedWhitespace ? nodes.filter(Boolean) : nodes;
}

function pushNode(nodes, node) {
  if (node.type === 2
  /* TEXT */
  ) {
    var prev = last(nodes); // Merge if both this and the previous node are text and those are
    // consecutive. This happens for cases like "a < b".

    if (prev && prev.type === 2
    /* TEXT */
    && prev.loc.end.offset === node.loc.start.offset) {
      prev.content += node.content;
      prev.loc.end = node.loc.end;
      prev.loc.source += node.loc.source;
      return;
    }
  }

  nodes.push(node);
}

function parseCDATA(context, ancestors) {
  advanceBy(context, 9);
  var nodes = parseChildren(context, 3
  /* CDATA */
  , ancestors);

  if (context.source.length === 0) {
    emitError(context, 6
    /* EOF_IN_CDATA */
    );
  } else {
    advanceBy(context, 3);
  }

  return nodes;
}

function parseComment(context) {
  var start = getCursor(context);
  var content; // Regular comment.

  var match = /--(\!)?>/.exec(context.source);

  if (!match) {
    content = context.source.slice(4);
    advanceBy(context, context.source.length);
    emitError(context, 7
    /* EOF_IN_COMMENT */
    );
  } else {
    if (match.index <= 3) {
      emitError(context, 0
      /* ABRUPT_CLOSING_OF_EMPTY_COMMENT */
      );
    }

    if (match[1]) {
      emitError(context, 10
      /* INCORRECTLY_CLOSED_COMMENT */
      );
    }

    content = context.source.slice(4, match.index); // Advancing with reporting nested comments.

    var s = context.source.slice(0, match.index);
    var prevIndex = 1,
        nestedIndex = 0;

    while ((nestedIndex = s.indexOf('<!--', prevIndex)) !== -1) {
      advanceBy(context, nestedIndex - prevIndex + 1);

      if (nestedIndex + 4 < s.length) {
        emitError(context, 16
        /* NESTED_COMMENT */
        );
      }

      prevIndex = nestedIndex + 1;
    }

    advanceBy(context, match.index + match[0].length - prevIndex + 1);
  }

  return {
    type: 3
    /* COMMENT */
    ,
    content: content,
    loc: getSelection(context, start)
  };
}

function parseBogusComment(context) {
  var start = getCursor(context);
  var contentStart = context.source[1] === '?' ? 1 : 2;
  var content;
  var closeIndex = context.source.indexOf('>');

  if (closeIndex === -1) {
    content = context.source.slice(contentStart);
    advanceBy(context, context.source.length);
  } else {
    content = context.source.slice(contentStart, closeIndex);
    advanceBy(context, closeIndex + 1);
  }

  return {
    type: 3
    /* COMMENT */
    ,
    content: content,
    loc: getSelection(context, start)
  };
}

function parseElement(context, ancestors) {
  // Start tag.
  var wasInPre = context.inPre;
  var wasInVPre = context.inVPre;
  var parent = last(ancestors);
  var element = parseTag(context, 0
  /* Start */
  , parent);
  var isPreBoundary = context.inPre && !wasInPre;
  var isVPreBoundary = context.inVPre && !wasInVPre;

  if (element.isSelfClosing || context.options.isVoidTag(element.tag)) {
    // #4030 self-closing <pre> tag
    if (isPreBoundary) {
      context.inPre = false;
    }

    if (isVPreBoundary) {
      context.inVPre = false;
    }

    return element;
  } // Children.


  ancestors.push(element);
  var mode = context.options.getTextMode(element, parent);
  var children = parseChildren(context, mode, ancestors);
  ancestors.pop(); // 2.x inline-template compat

  {
    var inlineTemplateProp = element.props.find(function (p) {
      return p.type === 6
      /* ATTRIBUTE */
      && p.name === 'inline-template';
    });

    if (inlineTemplateProp && checkCompatEnabled("COMPILER_INLINE_TEMPLATE"
    /* COMPILER_INLINE_TEMPLATE */
    , context, inlineTemplateProp.loc)) {
      var loc = getSelection(context, element.loc.end);
      inlineTemplateProp.value = {
        type: 2
        /* TEXT */
        ,
        content: loc.source,
        loc: loc
      };
    }
  }
  element.children = children; // End tag.

  if (startsWithEndTagOpen(context.source, element.tag)) {
    parseTag(context, 1
    /* End */
    , parent);
  } else {
    emitError(context, 24
    /* X_MISSING_END_TAG */
    , 0, element.loc.start);

    if (context.source.length === 0 && element.tag.toLowerCase() === 'script') {
      var first = children[0];

      if (first && startsWith(first.loc.source, '<!--')) {
        emitError(context, 8
        /* EOF_IN_SCRIPT_HTML_COMMENT_LIKE_TEXT */
        );
      }
    }
  }

  element.loc = getSelection(context, element.loc.start);

  if (isPreBoundary) {
    context.inPre = false;
  }

  if (isVPreBoundary) {
    context.inVPre = false;
  }

  return element;
}

var isSpecialTemplateDirective = /*#__PURE__*/(0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.makeMap)("if,else,else-if,for,slot");

function parseTag(context, type, parent) {
  // Tag open.
  var start = getCursor(context);
  var match = /^<\/?([a-z][^\t\r\n\f />]*)/i.exec(context.source);
  var tag = match[1];
  var ns = context.options.getNamespace(tag, parent);
  advanceBy(context, match[0].length);
  advanceSpaces(context); // save current state in case we need to re-parse attributes with v-pre

  var cursor = getCursor(context);
  var currentSource = context.source; // check <pre> tag

  if (context.options.isPreTag(tag)) {
    context.inPre = true;
  } // Attributes.


  var props = parseAttributes(context, type); // check v-pre

  if (type === 0
  /* Start */
  && !context.inVPre && props.some(function (p) {
    return p.type === 7
    /* DIRECTIVE */
    && p.name === 'pre';
  })) {
    context.inVPre = true; // reset context

    (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.extend)(context, cursor);
    context.source = currentSource; // re-parse attrs and filter out v-pre itself

    props = parseAttributes(context, type).filter(function (p) {
      return p.name !== 'v-pre';
    });
  } // Tag close.


  var isSelfClosing = false;

  if (context.source.length === 0) {
    emitError(context, 9
    /* EOF_IN_TAG */
    );
  } else {
    isSelfClosing = startsWith(context.source, '/>');

    if (type === 1
    /* End */
    && isSelfClosing) {
      emitError(context, 4
      /* END_TAG_WITH_TRAILING_SOLIDUS */
      );
    }

    advanceBy(context, isSelfClosing ? 2 : 1);
  }

  if (type === 1
  /* End */
  ) {
    return;
  } // 2.x deprecation checks


  if ( true && isCompatEnabled("COMPILER_V_IF_V_FOR_PRECEDENCE"
  /* COMPILER_V_IF_V_FOR_PRECEDENCE */
  , context)) {
    var hasIf = false;
    var hasFor = false;

    for (var i = 0; i < props.length; i++) {
      var p = props[i];

      if (p.type === 7
      /* DIRECTIVE */
      ) {
        if (p.name === 'if') {
          hasIf = true;
        } else if (p.name === 'for') {
          hasFor = true;
        }
      }

      if (hasIf && hasFor) {
        warnDeprecation("COMPILER_V_IF_V_FOR_PRECEDENCE"
        /* COMPILER_V_IF_V_FOR_PRECEDENCE */
        , context, getSelection(context, start));
        break;
      }
    }
  }

  var tagType = 0
  /* ELEMENT */
  ;

  if (!context.inVPre) {
    if (tag === 'slot') {
      tagType = 2
      /* SLOT */
      ;
    } else if (tag === 'template') {
      if (props.some(function (p) {
        return p.type === 7
        /* DIRECTIVE */
        && isSpecialTemplateDirective(p.name);
      })) {
        tagType = 3
        /* TEMPLATE */
        ;
      }
    } else if (isComponent(tag, props, context)) {
      tagType = 1
      /* COMPONENT */
      ;
    }
  }

  return {
    type: 1
    /* ELEMENT */
    ,
    ns: ns,
    tag: tag,
    tagType: tagType,
    props: props,
    isSelfClosing: isSelfClosing,
    children: [],
    loc: getSelection(context, start),
    codegenNode: undefined // to be created during transform phase

  };
}

function isComponent(tag, props, context) {
  var options = context.options;

  if (options.isCustomElement(tag)) {
    return false;
  }

  if (tag === 'component' || /^[A-Z]/.test(tag) || isCoreComponent(tag) || options.isBuiltInComponent && options.isBuiltInComponent(tag) || options.isNativeTag && !options.isNativeTag(tag)) {
    return true;
  } // at this point the tag should be a native tag, but check for potential "is"
  // casting


  for (var i = 0; i < props.length; i++) {
    var p = props[i];

    if (p.type === 6
    /* ATTRIBUTE */
    ) {
      if (p.name === 'is' && p.value) {
        if (p.value.content.startsWith('vue:')) {
          return true;
        } else if (checkCompatEnabled("COMPILER_IS_ON_ELEMENT"
        /* COMPILER_IS_ON_ELEMENT */
        , context, p.loc)) {
          return true;
        }
      }
    } else {
      // directive
      // v-is (TODO Deprecate)
      if (p.name === 'is') {
        return true;
      } else if ( // :is on plain element - only treat as component in compat mode
      p.name === 'bind' && isStaticArgOf(p.arg, 'is') && true && checkCompatEnabled("COMPILER_IS_ON_ELEMENT"
      /* COMPILER_IS_ON_ELEMENT */
      , context, p.loc)) {
        return true;
      }
    }
  }
}

function parseAttributes(context, type) {
  var props = [];
  var attributeNames = new Set();

  while (context.source.length > 0 && !startsWith(context.source, '>') && !startsWith(context.source, '/>')) {
    if (startsWith(context.source, '/')) {
      emitError(context, 22
      /* UNEXPECTED_SOLIDUS_IN_TAG */
      );
      advanceBy(context, 1);
      advanceSpaces(context);
      continue;
    }

    if (type === 1
    /* End */
    ) {
      emitError(context, 3
      /* END_TAG_WITH_ATTRIBUTES */
      );
    }

    var attr = parseAttribute(context, attributeNames); // Trim whitespace between class
    // https://github.com/vuejs/core/issues/4251

    if (attr.type === 6
    /* ATTRIBUTE */
    && attr.value && attr.name === 'class') {
      attr.value.content = attr.value.content.replace(/\s+/g, ' ').trim();
    }

    if (type === 0
    /* Start */
    ) {
      props.push(attr);
    }

    if (/^[^\t\r\n\f />]/.test(context.source)) {
      emitError(context, 15
      /* MISSING_WHITESPACE_BETWEEN_ATTRIBUTES */
      );
    }

    advanceSpaces(context);
  }

  return props;
}

function parseAttribute(context, nameSet) {
  // Name.
  var start = getCursor(context);
  var match = /^[^\t\r\n\f />][^\t\r\n\f />=]*/.exec(context.source);
  var name = match[0];

  if (nameSet.has(name)) {
    emitError(context, 2
    /* DUPLICATE_ATTRIBUTE */
    );
  }

  nameSet.add(name);

  if (name[0] === '=') {
    emitError(context, 19
    /* UNEXPECTED_EQUALS_SIGN_BEFORE_ATTRIBUTE_NAME */
    );
  }

  {
    var pattern = /["'<]/g;
    var m;

    while (m = pattern.exec(name)) {
      emitError(context, 17
      /* UNEXPECTED_CHARACTER_IN_ATTRIBUTE_NAME */
      , m.index);
    }
  }
  advanceBy(context, name.length); // Value

  var value = undefined;

  if (/^[\t\r\n\f ]*=/.test(context.source)) {
    advanceSpaces(context);
    advanceBy(context, 1);
    advanceSpaces(context);
    value = parseAttributeValue(context);

    if (!value) {
      emitError(context, 13
      /* MISSING_ATTRIBUTE_VALUE */
      );
    }
  }

  var loc = getSelection(context, start);

  if (!context.inVPre && /^(v-[A-Za-z0-9-]|:|\.|@|#)/.test(name)) {
    var _match = /(?:^v-([a-z0-9-]+))?(?:(?::|^\.|^@|^#)(\[[^\]]+\]|[^\.]+))?(.+)?$/i.exec(name);

    var isPropShorthand = startsWith(name, '.');
    var dirName = _match[1] || (isPropShorthand || startsWith(name, ':') ? 'bind' : startsWith(name, '@') ? 'on' : 'slot');
    var arg;

    if (_match[2]) {
      var isSlot = dirName === 'slot';
      var startOffset = name.lastIndexOf(_match[2]);

      var _loc = getSelection(context, getNewPosition(context, start, startOffset), getNewPosition(context, start, startOffset + _match[2].length + (isSlot && _match[3] || '').length));

      var content = _match[2];
      var isStatic = true;

      if (content.startsWith('[')) {
        isStatic = false;

        if (!content.endsWith(']')) {
          emitError(context, 27
          /* X_MISSING_DYNAMIC_DIRECTIVE_ARGUMENT_END */
          );
          content = content.slice(1);
        } else {
          content = content.slice(1, content.length - 1);
        }
      } else if (isSlot) {
        // #1241 special case for v-slot: vuetify relies extensively on slot
        // names containing dots. v-slot doesn't have any modifiers and Vue 2.x
        // supports such usage so we are keeping it consistent with 2.x.
        content += _match[3] || '';
      }

      arg = {
        type: 4
        /* SIMPLE_EXPRESSION */
        ,
        content: content,
        isStatic: isStatic,
        constType: isStatic ? 3
        /* CAN_STRINGIFY */
        : 0
        /* NOT_CONSTANT */
        ,
        loc: _loc
      };
    }

    if (value && value.isQuoted) {
      var valueLoc = value.loc;
      valueLoc.start.offset++;
      valueLoc.start.column++;
      valueLoc.end = advancePositionWithClone(valueLoc.start, value.content);
      valueLoc.source = valueLoc.source.slice(1, -1);
    }

    var modifiers = _match[3] ? _match[3].slice(1).split('.') : [];
    if (isPropShorthand) modifiers.push('prop'); // 2.x compat v-bind:foo.sync -> v-model:foo

    if (dirName === 'bind' && arg) {
      if (modifiers.includes('sync') && checkCompatEnabled("COMPILER_V_BIND_SYNC"
      /* COMPILER_V_BIND_SYNC */
      , context, loc, arg.loc.source)) {
        dirName = 'model';
        modifiers.splice(modifiers.indexOf('sync'), 1);
      }

      if ( true && modifiers.includes('prop')) {
        checkCompatEnabled("COMPILER_V_BIND_PROP"
        /* COMPILER_V_BIND_PROP */
        , context, loc);
      }
    }

    return {
      type: 7
      /* DIRECTIVE */
      ,
      name: dirName,
      exp: value && {
        type: 4
        /* SIMPLE_EXPRESSION */
        ,
        content: value.content,
        isStatic: false,
        // Treat as non-constant by default. This can be potentially set to
        // other values by `transformExpression` to make it eligible for hoisting.
        constType: 0
        /* NOT_CONSTANT */
        ,
        loc: value.loc
      },
      arg: arg,
      modifiers: modifiers,
      loc: loc
    };
  } // missing directive name or illegal directive name


  if (!context.inVPre && startsWith(name, 'v-')) {
    emitError(context, 26
    /* X_MISSING_DIRECTIVE_NAME */
    );
  }

  return {
    type: 6
    /* ATTRIBUTE */
    ,
    name: name,
    value: value && {
      type: 2
      /* TEXT */
      ,
      content: value.content,
      loc: value.loc
    },
    loc: loc
  };
}

function parseAttributeValue(context) {
  var start = getCursor(context);
  var content;
  var quote = context.source[0];
  var isQuoted = quote === "\"" || quote === "'";

  if (isQuoted) {
    // Quoted value.
    advanceBy(context, 1);
    var endIndex = context.source.indexOf(quote);

    if (endIndex === -1) {
      content = parseTextData(context, context.source.length, 4
      /* ATTRIBUTE_VALUE */
      );
    } else {
      content = parseTextData(context, endIndex, 4
      /* ATTRIBUTE_VALUE */
      );
      advanceBy(context, 1);
    }
  } else {
    // Unquoted
    var match = /^[^\t\r\n\f >]+/.exec(context.source);

    if (!match) {
      return undefined;
    }

    var unexpectedChars = /["'<=`]/g;
    var m;

    while (m = unexpectedChars.exec(match[0])) {
      emitError(context, 18
      /* UNEXPECTED_CHARACTER_IN_UNQUOTED_ATTRIBUTE_VALUE */
      , m.index);
    }

    content = parseTextData(context, match[0].length, 4
    /* ATTRIBUTE_VALUE */
    );
  }

  return {
    content: content,
    isQuoted: isQuoted,
    loc: getSelection(context, start)
  };
}

function parseInterpolation(context, mode) {
  var _context$options$deli = _slicedToArray(context.options.delimiters, 2),
      open = _context$options$deli[0],
      close = _context$options$deli[1];

  var closeIndex = context.source.indexOf(close, open.length);

  if (closeIndex === -1) {
    emitError(context, 25
    /* X_MISSING_INTERPOLATION_END */
    );
    return undefined;
  }

  var start = getCursor(context);
  advanceBy(context, open.length);
  var innerStart = getCursor(context);
  var innerEnd = getCursor(context);
  var rawContentLength = closeIndex - open.length;
  var rawContent = context.source.slice(0, rawContentLength);
  var preTrimContent = parseTextData(context, rawContentLength, mode);
  var content = preTrimContent.trim();
  var startOffset = preTrimContent.indexOf(content);

  if (startOffset > 0) {
    advancePositionWithMutation(innerStart, rawContent, startOffset);
  }

  var endOffset = rawContentLength - (preTrimContent.length - content.length - startOffset);
  advancePositionWithMutation(innerEnd, rawContent, endOffset);
  advanceBy(context, close.length);
  return {
    type: 5
    /* INTERPOLATION */
    ,
    content: {
      type: 4
      /* SIMPLE_EXPRESSION */
      ,
      isStatic: false,
      // Set `isConstant` to false by default and will decide in transformExpression
      constType: 0
      /* NOT_CONSTANT */
      ,
      content: content,
      loc: getSelection(context, innerStart, innerEnd)
    },
    loc: getSelection(context, start)
  };
}

function parseText(context, mode) {
  var endTokens = mode === 3
  /* CDATA */
  ? [']]>'] : ['<', context.options.delimiters[0]];
  var endIndex = context.source.length;

  for (var i = 0; i < endTokens.length; i++) {
    var index = context.source.indexOf(endTokens[i], 1);

    if (index !== -1 && endIndex > index) {
      endIndex = index;
    }
  }

  var start = getCursor(context);
  var content = parseTextData(context, endIndex, mode);
  return {
    type: 2
    /* TEXT */
    ,
    content: content,
    loc: getSelection(context, start)
  };
}
/**
 * Get text data with a given length from the current location.
 * This translates HTML entities in the text data.
 */


function parseTextData(context, length, mode) {
  var rawText = context.source.slice(0, length);
  advanceBy(context, length);

  if (mode === 2
  /* RAWTEXT */
  || mode === 3
  /* CDATA */
  || !rawText.includes('&')) {
    return rawText;
  } else {
    // DATA or RCDATA containing "&"". Entity decoding required.
    return context.options.decodeEntities(rawText, mode === 4
    /* ATTRIBUTE_VALUE */
    );
  }
}

function getCursor(context) {
  var column = context.column,
      line = context.line,
      offset = context.offset;
  return {
    column: column,
    line: line,
    offset: offset
  };
}

function getSelection(context, start, end) {
  end = end || getCursor(context);
  return {
    start: start,
    end: end,
    source: context.originalSource.slice(start.offset, end.offset)
  };
}

function last(xs) {
  return xs[xs.length - 1];
}

function startsWith(source, searchString) {
  return source.startsWith(searchString);
}

function advanceBy(context, numberOfCharacters) {
  var source = context.source;
  advancePositionWithMutation(context, source, numberOfCharacters);
  context.source = source.slice(numberOfCharacters);
}

function advanceSpaces(context) {
  var match = /^[\t\r\n\f ]+/.exec(context.source);

  if (match) {
    advanceBy(context, match[0].length);
  }
}

function getNewPosition(context, start, numberOfCharacters) {
  return advancePositionWithClone(start, context.originalSource.slice(start.offset, numberOfCharacters), numberOfCharacters);
}

function emitError(context, code, offset) {
  var loc = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : getCursor(context);

  if (offset) {
    loc.offset += offset;
    loc.column += offset;
  }

  context.options.onError(createCompilerError(code, {
    start: loc,
    end: loc,
    source: ''
  }));
}

function isEnd(context, mode, ancestors) {
  var s = context.source;

  switch (mode) {
    case 0
    /* DATA */
    :
      if (startsWith(s, '</')) {
        // TODO: probably bad performance
        for (var i = ancestors.length - 1; i >= 0; --i) {
          if (startsWithEndTagOpen(s, ancestors[i].tag)) {
            return true;
          }
        }
      }

      break;

    case 1
    /* RCDATA */
    :
    case 2
    /* RAWTEXT */
    :
      {
        var parent = last(ancestors);

        if (parent && startsWithEndTagOpen(s, parent.tag)) {
          return true;
        }

        break;
      }

    case 3
    /* CDATA */
    :
      if (startsWith(s, ']]>')) {
        return true;
      }

      break;
  }

  return !s;
}

function startsWithEndTagOpen(source, tag) {
  return startsWith(source, '</') && source.slice(2, 2 + tag.length).toLowerCase() === tag.toLowerCase() && /[\t\r\n\f />]/.test(source[2 + tag.length] || '>');
}

function hoistStatic(root, context) {
  walk(root, context, // Root node is unfortunately non-hoistable due to potential parent
  // fallthrough attributes.
  isSingleElementRoot(root, root.children[0]));
}

function isSingleElementRoot(root, child) {
  var children = root.children;
  return children.length === 1 && child.type === 1
  /* ELEMENT */
  && !isSlotOutlet(child);
}

function walk(node, context) {
  var doNotHoistNode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var children = node.children;
  var originalCount = children.length;
  var hoistedCount = 0;

  for (var i = 0; i < children.length; i++) {
    var child = children[i]; // only plain elements & text calls are eligible for hoisting.

    if (child.type === 1
    /* ELEMENT */
    && child.tagType === 0
    /* ELEMENT */
    ) {
      var constantType = doNotHoistNode ? 0
      /* NOT_CONSTANT */
      : getConstantType(child, context);

      if (constantType > 0
      /* NOT_CONSTANT */
      ) {
        if (constantType >= 2
        /* CAN_HOIST */
        ) {
          child.codegenNode.patchFlag = -1
          /* HOISTED */
          + ( true ? " /* HOISTED */" : 0);
          child.codegenNode = context.hoist(child.codegenNode);
          hoistedCount++;
          continue;
        }
      } else {
        // node may contain dynamic children, but its props may be eligible for
        // hoisting.
        var codegenNode = child.codegenNode;

        if (codegenNode.type === 13
        /* VNODE_CALL */
        ) {
          var flag = getPatchFlag(codegenNode);

          if ((!flag || flag === 512
          /* NEED_PATCH */
          || flag === 1
          /* TEXT */
          ) && getGeneratedPropsConstantType(child, context) >= 2
          /* CAN_HOIST */
          ) {
            var props = getNodeProps(child);

            if (props) {
              codegenNode.props = context.hoist(props);
            }
          }

          if (codegenNode.dynamicProps) {
            codegenNode.dynamicProps = context.hoist(codegenNode.dynamicProps);
          }
        }
      }
    } else if (child.type === 12
    /* TEXT_CALL */
    && getConstantType(child.content, context) >= 2
    /* CAN_HOIST */
    ) {
      child.codegenNode = context.hoist(child.codegenNode);
      hoistedCount++;
    } // walk further


    if (child.type === 1
    /* ELEMENT */
    ) {
      var _isComponent = child.tagType === 1
      /* COMPONENT */
      ;

      if (_isComponent) {
        context.scopes.vSlot++;
      }

      walk(child, context);

      if (_isComponent) {
        context.scopes.vSlot--;
      }
    } else if (child.type === 11
    /* FOR */
    ) {
      // Do not hoist v-for single child because it has to be a block
      walk(child, context, child.children.length === 1);
    } else if (child.type === 9
    /* IF */
    ) {
      for (var _i2 = 0; _i2 < child.branches.length; _i2++) {
        // Do not hoist v-if single child because it has to be a block
        walk(child.branches[_i2], context, child.branches[_i2].children.length === 1);
      }
    }
  }

  if (hoistedCount && context.transformHoist) {
    context.transformHoist(children, context, node);
  } // all children were hoisted - the entire children array is hoistable.


  if (hoistedCount && hoistedCount === originalCount && node.type === 1
  /* ELEMENT */
  && node.tagType === 0
  /* ELEMENT */
  && node.codegenNode && node.codegenNode.type === 13
  /* VNODE_CALL */
  && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isArray)(node.codegenNode.children)) {
    node.codegenNode.children = context.hoist(createArrayExpression(node.codegenNode.children));
  }
}

function getConstantType(node, context) {
  var constantCache = context.constantCache;

  switch (node.type) {
    case 1
    /* ELEMENT */
    :
      if (node.tagType !== 0
      /* ELEMENT */
      ) {
        return 0
        /* NOT_CONSTANT */
        ;
      }

      var cached = constantCache.get(node);

      if (cached !== undefined) {
        return cached;
      }

      var codegenNode = node.codegenNode;

      if (codegenNode.type !== 13
      /* VNODE_CALL */
      ) {
        return 0
        /* NOT_CONSTANT */
        ;
      }

      if (codegenNode.isBlock && node.tag !== 'svg' && node.tag !== 'foreignObject') {
        return 0
        /* NOT_CONSTANT */
        ;
      }

      var flag = getPatchFlag(codegenNode);

      if (!flag) {
        var _returnType = 3
        /* CAN_STRINGIFY */
        ; // Element itself has no patch flag. However we still need to check:
        // 1. Even for a node with no patch flag, it is possible for it to contain
        // non-hoistable expressions that refers to scope variables, e.g. compiler
        // injected keys or cached event handlers. Therefore we need to always
        // check the codegenNode's props to be sure.

        var generatedPropsType = getGeneratedPropsConstantType(node, context);

        if (generatedPropsType === 0
        /* NOT_CONSTANT */
        ) {
          constantCache.set(node, 0
          /* NOT_CONSTANT */
          );
          return 0
          /* NOT_CONSTANT */
          ;
        }

        if (generatedPropsType < _returnType) {
          _returnType = generatedPropsType;
        } // 2. its children.


        for (var i = 0; i < node.children.length; i++) {
          var childType = getConstantType(node.children[i], context);

          if (childType === 0
          /* NOT_CONSTANT */
          ) {
            constantCache.set(node, 0
            /* NOT_CONSTANT */
            );
            return 0
            /* NOT_CONSTANT */
            ;
          }

          if (childType < _returnType) {
            _returnType = childType;
          }
        } // 3. if the type is not already CAN_SKIP_PATCH which is the lowest non-0
        // type, check if any of the props can cause the type to be lowered
        // we can skip can_patch because it's guaranteed by the absence of a
        // patchFlag.


        if (_returnType > 1
        /* CAN_SKIP_PATCH */
        ) {
          for (var _i3 = 0; _i3 < node.props.length; _i3++) {
            var p = node.props[_i3];

            if (p.type === 7
            /* DIRECTIVE */
            && p.name === 'bind' && p.exp) {
              var expType = getConstantType(p.exp, context);

              if (expType === 0
              /* NOT_CONSTANT */
              ) {
                constantCache.set(node, 0
                /* NOT_CONSTANT */
                );
                return 0
                /* NOT_CONSTANT */
                ;
              }

              if (expType < _returnType) {
                _returnType = expType;
              }
            }
          }
        } // only svg/foreignObject could be block here, however if they are
        // static then they don't need to be blocks since there will be no
        // nested updates.


        if (codegenNode.isBlock) {
          // except set custom directives.
          for (var _i4 = 0; _i4 < node.props.length; _i4++) {
            var _p = node.props[_i4];

            if (_p.type === 7
            /* DIRECTIVE */
            ) {
              constantCache.set(node, 0
              /* NOT_CONSTANT */
              );
              return 0
              /* NOT_CONSTANT */
              ;
            }
          }

          context.removeHelper(OPEN_BLOCK);
          context.removeHelper(getVNodeBlockHelper(context.inSSR, codegenNode.isComponent));
          codegenNode.isBlock = false;
          context.helper(getVNodeHelper(context.inSSR, codegenNode.isComponent));
        }

        constantCache.set(node, _returnType);
        return _returnType;
      } else {
        constantCache.set(node, 0
        /* NOT_CONSTANT */
        );
        return 0
        /* NOT_CONSTANT */
        ;
      }

    case 2
    /* TEXT */
    :
    case 3
    /* COMMENT */
    :
      return 3
      /* CAN_STRINGIFY */
      ;

    case 9
    /* IF */
    :
    case 11
    /* FOR */
    :
    case 10
    /* IF_BRANCH */
    :
      return 0
      /* NOT_CONSTANT */
      ;

    case 5
    /* INTERPOLATION */
    :
    case 12
    /* TEXT_CALL */
    :
      return getConstantType(node.content, context);

    case 4
    /* SIMPLE_EXPRESSION */
    :
      return node.constType;

    case 8
    /* COMPOUND_EXPRESSION */
    :
      var returnType = 3
      /* CAN_STRINGIFY */
      ;

      for (var _i5 = 0; _i5 < node.children.length; _i5++) {
        var child = node.children[_i5];

        if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isString)(child) || (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isSymbol)(child)) {
          continue;
        }

        var _childType = getConstantType(child, context);

        if (_childType === 0
        /* NOT_CONSTANT */
        ) {
          return 0
          /* NOT_CONSTANT */
          ;
        } else if (_childType < returnType) {
          returnType = _childType;
        }
      }

      return returnType;

    default:
      if (true) ;
      return 0
      /* NOT_CONSTANT */
      ;
  }
}

var allowHoistedHelperSet = new Set([NORMALIZE_CLASS, NORMALIZE_STYLE, NORMALIZE_PROPS, GUARD_REACTIVE_PROPS]);

function getConstantTypeOfHelperCall(value, context) {
  if (value.type === 14
  /* JS_CALL_EXPRESSION */
  && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isString)(value.callee) && allowHoistedHelperSet.has(value.callee)) {
    var arg = value.arguments[0];

    if (arg.type === 4
    /* SIMPLE_EXPRESSION */
    ) {
      return getConstantType(arg, context);
    } else if (arg.type === 14
    /* JS_CALL_EXPRESSION */
    ) {
      // in the case of nested helper call, e.g. `normalizeProps(guardReactiveProps(exp))`
      return getConstantTypeOfHelperCall(arg, context);
    }
  }

  return 0
  /* NOT_CONSTANT */
  ;
}

function getGeneratedPropsConstantType(node, context) {
  var returnType = 3
  /* CAN_STRINGIFY */
  ;
  var props = getNodeProps(node);

  if (props && props.type === 15
  /* JS_OBJECT_EXPRESSION */
  ) {
    var properties = props.properties;

    for (var i = 0; i < properties.length; i++) {
      var _properties$i = properties[i],
          key = _properties$i.key,
          value = _properties$i.value;
      var keyType = getConstantType(key, context);

      if (keyType === 0
      /* NOT_CONSTANT */
      ) {
        return keyType;
      }

      if (keyType < returnType) {
        returnType = keyType;
      }

      var valueType = void 0;

      if (value.type === 4
      /* SIMPLE_EXPRESSION */
      ) {
        valueType = getConstantType(value, context);
      } else if (value.type === 14
      /* JS_CALL_EXPRESSION */
      ) {
        // some helper calls can be hoisted,
        // such as the `normalizeProps` generated by the compiler for pre-normalize class,
        // in this case we need to respect the ConstantType of the helper's arguments
        valueType = getConstantTypeOfHelperCall(value, context);
      } else {
        valueType = 0
        /* NOT_CONSTANT */
        ;
      }

      if (valueType === 0
      /* NOT_CONSTANT */
      ) {
        return valueType;
      }

      if (valueType < returnType) {
        returnType = valueType;
      }
    }
  }

  return returnType;
}

function getNodeProps(node) {
  var codegenNode = node.codegenNode;

  if (codegenNode.type === 13
  /* VNODE_CALL */
  ) {
    return codegenNode.props;
  }
}

function getPatchFlag(node) {
  var flag = node.patchFlag;
  return flag ? parseInt(flag, 10) : undefined;
}

function createTransformContext(root, _ref2) {
  var _ref2$filename = _ref2.filename,
      filename = _ref2$filename === void 0 ? '' : _ref2$filename,
      _ref2$prefixIdentifie = _ref2.prefixIdentifiers,
      prefixIdentifiers = _ref2$prefixIdentifie === void 0 ? false : _ref2$prefixIdentifie,
      _ref2$hoistStatic = _ref2.hoistStatic,
      hoistStatic = _ref2$hoistStatic === void 0 ? false : _ref2$hoistStatic,
      _ref2$cacheHandlers = _ref2.cacheHandlers,
      cacheHandlers = _ref2$cacheHandlers === void 0 ? false : _ref2$cacheHandlers,
      _ref2$nodeTransforms = _ref2.nodeTransforms,
      nodeTransforms = _ref2$nodeTransforms === void 0 ? [] : _ref2$nodeTransforms,
      _ref2$directiveTransf = _ref2.directiveTransforms,
      directiveTransforms = _ref2$directiveTransf === void 0 ? {} : _ref2$directiveTransf,
      _ref2$transformHoist = _ref2.transformHoist,
      transformHoist = _ref2$transformHoist === void 0 ? null : _ref2$transformHoist,
      _ref2$isBuiltInCompon = _ref2.isBuiltInComponent,
      isBuiltInComponent = _ref2$isBuiltInCompon === void 0 ? _vue_shared__WEBPACK_IMPORTED_MODULE_0__.NOOP : _ref2$isBuiltInCompon,
      _ref2$isCustomElement = _ref2.isCustomElement,
      isCustomElement = _ref2$isCustomElement === void 0 ? _vue_shared__WEBPACK_IMPORTED_MODULE_0__.NOOP : _ref2$isCustomElement,
      _ref2$expressionPlugi = _ref2.expressionPlugins,
      expressionPlugins = _ref2$expressionPlugi === void 0 ? [] : _ref2$expressionPlugi,
      _ref2$scopeId = _ref2.scopeId,
      scopeId = _ref2$scopeId === void 0 ? null : _ref2$scopeId,
      _ref2$slotted = _ref2.slotted,
      slotted = _ref2$slotted === void 0 ? true : _ref2$slotted,
      _ref2$ssr = _ref2.ssr,
      ssr = _ref2$ssr === void 0 ? false : _ref2$ssr,
      _ref2$inSSR = _ref2.inSSR,
      inSSR = _ref2$inSSR === void 0 ? false : _ref2$inSSR,
      _ref2$ssrCssVars = _ref2.ssrCssVars,
      ssrCssVars = _ref2$ssrCssVars === void 0 ? "" : _ref2$ssrCssVars,
      _ref2$bindingMetadata = _ref2.bindingMetadata,
      bindingMetadata = _ref2$bindingMetadata === void 0 ? _vue_shared__WEBPACK_IMPORTED_MODULE_0__.EMPTY_OBJ : _ref2$bindingMetadata,
      _ref2$inline = _ref2.inline,
      inline = _ref2$inline === void 0 ? false : _ref2$inline,
      _ref2$isTS = _ref2.isTS,
      isTS = _ref2$isTS === void 0 ? false : _ref2$isTS,
      _ref2$onError = _ref2.onError,
      onError = _ref2$onError === void 0 ? defaultOnError : _ref2$onError,
      _ref2$onWarn = _ref2.onWarn,
      onWarn = _ref2$onWarn === void 0 ? defaultOnWarn : _ref2$onWarn,
      compatConfig = _ref2.compatConfig;
  var nameMatch = filename.replace(/\?.*$/, '').match(/([^/\\]+)\.\w+$/);
  var context = {
    // options
    selfName: nameMatch && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.capitalize)((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.camelize)(nameMatch[1])),
    prefixIdentifiers: prefixIdentifiers,
    hoistStatic: hoistStatic,
    cacheHandlers: cacheHandlers,
    nodeTransforms: nodeTransforms,
    directiveTransforms: directiveTransforms,
    transformHoist: transformHoist,
    isBuiltInComponent: isBuiltInComponent,
    isCustomElement: isCustomElement,
    expressionPlugins: expressionPlugins,
    scopeId: scopeId,
    slotted: slotted,
    ssr: ssr,
    inSSR: inSSR,
    ssrCssVars: ssrCssVars,
    bindingMetadata: bindingMetadata,
    inline: inline,
    isTS: isTS,
    onError: onError,
    onWarn: onWarn,
    compatConfig: compatConfig,
    // state
    root: root,
    helpers: new Map(),
    components: new Set(),
    directives: new Set(),
    hoists: [],
    imports: [],
    constantCache: new Map(),
    temps: 0,
    cached: 0,
    identifiers: Object.create(null),
    scopes: {
      vFor: 0,
      vSlot: 0,
      vPre: 0,
      vOnce: 0
    },
    parent: null,
    currentNode: root,
    childIndex: 0,
    inVOnce: false,
    // methods
    helper: function helper(name) {
      var count = context.helpers.get(name) || 0;
      context.helpers.set(name, count + 1);
      return name;
    },
    removeHelper: function removeHelper(name) {
      var count = context.helpers.get(name);

      if (count) {
        var currentCount = count - 1;

        if (!currentCount) {
          context.helpers["delete"](name);
        } else {
          context.helpers.set(name, currentCount);
        }
      }
    },
    helperString: function helperString(name) {
      return "_".concat(helperNameMap[context.helper(name)]);
    },
    replaceNode: function replaceNode(node) {
      /* istanbul ignore if */
      if (true) {
        if (!context.currentNode) {
          throw new Error("Node being replaced is already removed.");
        }

        if (!context.parent) {
          throw new Error("Cannot replace root node.");
        }
      }

      context.parent.children[context.childIndex] = context.currentNode = node;
    },
    removeNode: function removeNode(node) {
      if ( true && !context.parent) {
        throw new Error("Cannot remove root node.");
      }

      var list = context.parent.children;
      var removalIndex = node ? list.indexOf(node) : context.currentNode ? context.childIndex : -1;
      /* istanbul ignore if */

      if ( true && removalIndex < 0) {
        throw new Error("node being removed is not a child of current parent");
      }

      if (!node || node === context.currentNode) {
        // current node removed
        context.currentNode = null;
        context.onNodeRemoved();
      } else {
        // sibling node removed
        if (context.childIndex > removalIndex) {
          context.childIndex--;
          context.onNodeRemoved();
        }
      }

      context.parent.children.splice(removalIndex, 1);
    },
    onNodeRemoved: function onNodeRemoved() {},
    addIdentifiers: function addIdentifiers(exp) {},
    removeIdentifiers: function removeIdentifiers(exp) {},
    hoist: function hoist(exp) {
      if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isString)(exp)) exp = createSimpleExpression(exp);
      context.hoists.push(exp);
      var identifier = createSimpleExpression("_hoisted_".concat(context.hoists.length), false, exp.loc, 2
      /* CAN_HOIST */
      );
      identifier.hoisted = exp;
      return identifier;
    },
    cache: function cache(exp) {
      var isVNode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      return createCacheExpression(context.cached++, exp, isVNode);
    }
  };
  {
    context.filters = new Set();
  }
  return context;
}

function transform(root, options) {
  var context = createTransformContext(root, options);
  traverseNode(root, context);

  if (options.hoistStatic) {
    hoistStatic(root, context);
  }

  if (!options.ssr) {
    createRootCodegen(root, context);
  } // finalize meta information


  root.helpers = _toConsumableArray(context.helpers.keys());
  root.components = _toConsumableArray(context.components);
  root.directives = _toConsumableArray(context.directives);
  root.imports = context.imports;
  root.hoists = context.hoists;
  root.temps = context.temps;
  root.cached = context.cached;
  {
    root.filters = _toConsumableArray(context.filters);
  }
}

function createRootCodegen(root, context) {
  var helper = context.helper;
  var children = root.children;

  if (children.length === 1) {
    var child = children[0]; // if the single child is an element, turn it into a block.

    if (isSingleElementRoot(root, child) && child.codegenNode) {
      // single element root is never hoisted so codegenNode will never be
      // SimpleExpressionNode
      var codegenNode = child.codegenNode;

      if (codegenNode.type === 13
      /* VNODE_CALL */
      ) {
        makeBlock(codegenNode, context);
      }

      root.codegenNode = codegenNode;
    } else {
      // - single <slot/>, IfNode, ForNode: already blocks.
      // - single text node: always patched.
      // root codegen falls through via genNode()
      root.codegenNode = child;
    }
  } else if (children.length > 1) {
    // root has multiple nodes - return a fragment block.
    var patchFlag = 64
    /* STABLE_FRAGMENT */
    ;
    var patchFlagText = _vue_shared__WEBPACK_IMPORTED_MODULE_0__.PatchFlagNames[64]; // check if the fragment actually contains a single valid child with
    // the rest being comments

    if ( true && children.filter(function (c) {
      return c.type !== 3;
    }
    /* COMMENT */
    ).length === 1) {
      patchFlag |= 2048
      /* DEV_ROOT_FRAGMENT */
      ;
      patchFlagText += ", ".concat(_vue_shared__WEBPACK_IMPORTED_MODULE_0__.PatchFlagNames[2048]);
    }

    root.codegenNode = createVNodeCall(context, helper(FRAGMENT), undefined, root.children, patchFlag + ( true ? " /* ".concat(patchFlagText, " */") : 0), undefined, undefined, true, undefined, false
    /* isComponent */
    );
  } else ;
}

function traverseChildren(parent, context) {
  var i = 0;

  var nodeRemoved = function nodeRemoved() {
    i--;
  };

  for (; i < parent.children.length; i++) {
    var child = parent.children[i];
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isString)(child)) continue;
    context.parent = parent;
    context.childIndex = i;
    context.onNodeRemoved = nodeRemoved;
    traverseNode(child, context);
  }
}

function traverseNode(node, context) {
  context.currentNode = node; // apply transform plugins

  var nodeTransforms = context.nodeTransforms;
  var exitFns = [];

  for (var _i6 = 0; _i6 < nodeTransforms.length; _i6++) {
    var onExit = nodeTransforms[_i6](node, context);

    if (onExit) {
      if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isArray)(onExit)) {
        exitFns.push.apply(exitFns, _toConsumableArray(onExit));
      } else {
        exitFns.push(onExit);
      }
    }

    if (!context.currentNode) {
      // node was removed
      return;
    } else {
      // node may have been replaced
      node = context.currentNode;
    }
  }

  switch (node.type) {
    case 3
    /* COMMENT */
    :
      if (!context.ssr) {
        // inject import for the Comment symbol, which is needed for creating
        // comment nodes with `createVNode`
        context.helper(CREATE_COMMENT);
      }

      break;

    case 5
    /* INTERPOLATION */
    :
      // no need to traverse, but we need to inject toString helper
      if (!context.ssr) {
        context.helper(TO_DISPLAY_STRING);
      }

      break;
    // for container types, further traverse downwards

    case 9
    /* IF */
    :
      for (var _i7 = 0; _i7 < node.branches.length; _i7++) {
        traverseNode(node.branches[_i7], context);
      }

      break;

    case 10
    /* IF_BRANCH */
    :
    case 11
    /* FOR */
    :
    case 1
    /* ELEMENT */
    :
    case 0
    /* ROOT */
    :
      traverseChildren(node, context);
      break;
  } // exit transforms


  context.currentNode = node;
  var i = exitFns.length;

  while (i--) {
    exitFns[i]();
  }
}

function createStructuralDirectiveTransform(name, fn) {
  var matches = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isString)(name) ? function (n) {
    return n === name;
  } : function (n) {
    return name.test(n);
  };
  return function (node, context) {
    if (node.type === 1
    /* ELEMENT */
    ) {
      var props = node.props; // structural directive transforms are not concerned with slots
      // as they are handled separately in vSlot.ts

      if (node.tagType === 3
      /* TEMPLATE */
      && props.some(isVSlot)) {
        return;
      }

      var exitFns = [];

      for (var i = 0; i < props.length; i++) {
        var prop = props[i];

        if (prop.type === 7
        /* DIRECTIVE */
        && matches(prop.name)) {
          // structural directives are removed to avoid infinite recursion
          // also we remove them *before* applying so that it can further
          // traverse itself in case it moves the node around
          props.splice(i, 1);
          i--;
          var onExit = fn(node, prop, context);
          if (onExit) exitFns.push(onExit);
        }
      }

      return exitFns;
    }
  };
}

var PURE_ANNOTATION = "/*#__PURE__*/";

var aliasHelper = function aliasHelper(s) {
  return "".concat(helperNameMap[s], ": _").concat(helperNameMap[s]);
};

function createCodegenContext(ast, _ref3) {
  var _ref3$mode = _ref3.mode,
      mode = _ref3$mode === void 0 ? 'function' : _ref3$mode,
      _ref3$prefixIdentifie = _ref3.prefixIdentifiers,
      prefixIdentifiers = _ref3$prefixIdentifie === void 0 ? mode === 'module' : _ref3$prefixIdentifie,
      _ref3$sourceMap = _ref3.sourceMap,
      sourceMap = _ref3$sourceMap === void 0 ? false : _ref3$sourceMap,
      _ref3$filename = _ref3.filename,
      filename = _ref3$filename === void 0 ? "template.vue.html" : _ref3$filename,
      _ref3$scopeId = _ref3.scopeId,
      scopeId = _ref3$scopeId === void 0 ? null : _ref3$scopeId,
      _ref3$optimizeImports = _ref3.optimizeImports,
      optimizeImports = _ref3$optimizeImports === void 0 ? false : _ref3$optimizeImports,
      _ref3$runtimeGlobalNa = _ref3.runtimeGlobalName,
      runtimeGlobalName = _ref3$runtimeGlobalNa === void 0 ? "Vue" : _ref3$runtimeGlobalNa,
      _ref3$runtimeModuleNa = _ref3.runtimeModuleName,
      runtimeModuleName = _ref3$runtimeModuleNa === void 0 ? "vue" : _ref3$runtimeModuleNa,
      _ref3$ssrRuntimeModul = _ref3.ssrRuntimeModuleName,
      ssrRuntimeModuleName = _ref3$ssrRuntimeModul === void 0 ? 'vue/server-renderer' : _ref3$ssrRuntimeModul,
      _ref3$ssr = _ref3.ssr,
      ssr = _ref3$ssr === void 0 ? false : _ref3$ssr,
      _ref3$isTS = _ref3.isTS,
      isTS = _ref3$isTS === void 0 ? false : _ref3$isTS,
      _ref3$inSSR = _ref3.inSSR,
      inSSR = _ref3$inSSR === void 0 ? false : _ref3$inSSR;
  var context = {
    mode: mode,
    prefixIdentifiers: prefixIdentifiers,
    sourceMap: sourceMap,
    filename: filename,
    scopeId: scopeId,
    optimizeImports: optimizeImports,
    runtimeGlobalName: runtimeGlobalName,
    runtimeModuleName: runtimeModuleName,
    ssrRuntimeModuleName: ssrRuntimeModuleName,
    ssr: ssr,
    isTS: isTS,
    inSSR: inSSR,
    source: ast.loc.source,
    code: "",
    column: 1,
    line: 1,
    offset: 0,
    indentLevel: 0,
    pure: false,
    map: undefined,
    helper: function helper(key) {
      return "_".concat(helperNameMap[key]);
    },
    push: function push(code, node) {
      context.code += code;
    },
    indent: function indent() {
      _newline(++context.indentLevel);
    },
    deindent: function deindent() {
      var withoutNewLine = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (withoutNewLine) {
        --context.indentLevel;
      } else {
        _newline(--context.indentLevel);
      }
    },
    newline: function newline() {
      _newline(context.indentLevel);
    }
  };

  function _newline(n) {
    context.push('\n' + "  ".repeat(n));
  }

  return context;
}

function generate(ast) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var context = createCodegenContext(ast, options);
  if (options.onContextCreated) options.onContextCreated(context);
  var mode = context.mode,
      push = context.push,
      prefixIdentifiers = context.prefixIdentifiers,
      indent = context.indent,
      deindent = context.deindent,
      newline = context.newline,
      scopeId = context.scopeId,
      ssr = context.ssr;
  var hasHelpers = ast.helpers.length > 0;
  var useWithBlock = !prefixIdentifiers && mode !== 'module'; // preambles
  // in setup() inline mode, the preamble is generated in a sub context
  // and returned separately.

  var preambleContext = context;
  {
    genFunctionPreamble(ast, preambleContext);
  } // enter render function

  var functionName = ssr ? "ssrRender" : "render";
  var args = ssr ? ['_ctx', '_push', '_parent', '_attrs'] : ['_ctx', '_cache'];
  var signature = args.join(', ');
  {
    push("function ".concat(functionName, "(").concat(signature, ") {"));
  }
  indent();

  if (useWithBlock) {
    push("with (_ctx) {");
    indent(); // function mode const declarations should be inside with block
    // also they should be renamed to avoid collision with user properties

    if (hasHelpers) {
      push("const { ".concat(ast.helpers.map(aliasHelper).join(', '), " } = _Vue"));
      push("\n");
      newline();
    }
  } // generate asset resolution statements


  if (ast.components.length) {
    genAssets(ast.components, 'component', context);

    if (ast.directives.length || ast.temps > 0) {
      newline();
    }
  }

  if (ast.directives.length) {
    genAssets(ast.directives, 'directive', context);

    if (ast.temps > 0) {
      newline();
    }
  }

  if (ast.filters && ast.filters.length) {
    newline();
    genAssets(ast.filters, 'filter', context);
    newline();
  }

  if (ast.temps > 0) {
    push("let ");

    for (var i = 0; i < ast.temps; i++) {
      push("".concat(i > 0 ? ", " : "", "_temp").concat(i));
    }
  }

  if (ast.components.length || ast.directives.length || ast.temps) {
    push("\n");
    newline();
  } // generate the VNode tree expression


  if (!ssr) {
    push("return ");
  }

  if (ast.codegenNode) {
    genNode(ast.codegenNode, context);
  } else {
    push("null");
  }

  if (useWithBlock) {
    deindent();
    push("}");
  }

  deindent();
  push("}");
  return {
    ast: ast,
    code: context.code,
    preamble: "",
    // SourceMapGenerator does have toJSON() method but it's not in the types
    map: context.map ? context.map.toJSON() : undefined
  };
}

function genFunctionPreamble(ast, context) {
  var ssr = context.ssr,
      prefixIdentifiers = context.prefixIdentifiers,
      push = context.push,
      newline = context.newline,
      runtimeModuleName = context.runtimeModuleName,
      runtimeGlobalName = context.runtimeGlobalName,
      ssrRuntimeModuleName = context.ssrRuntimeModuleName;
  var VueBinding = runtimeGlobalName; // Generate const declaration for helpers
  // In prefix mode, we place the const declaration at top so it's done
  // only once; But if we not prefixing, we place the declaration inside the
  // with block so it doesn't incur the `in` check cost for every helper access.

  if (ast.helpers.length > 0) {
    {
      // "with" mode.
      // save Vue in a separate variable to avoid collision
      push("const _Vue = ".concat(VueBinding, "\n")); // in "with" mode, helpers are declared inside the with block to avoid
      // has check cost, but hoists are lifted out of the function - we need
      // to provide the helper here.

      if (ast.hoists.length) {
        var staticHelpers = [CREATE_VNODE, CREATE_ELEMENT_VNODE, CREATE_COMMENT, CREATE_TEXT, CREATE_STATIC].filter(function (helper) {
          return ast.helpers.includes(helper);
        }).map(aliasHelper).join(', ');
        push("const { ".concat(staticHelpers, " } = _Vue\n"));
      }
    }
  }

  genHoists(ast.hoists, context);
  newline();
  push("return ");
}

function genAssets(assets, type, _ref4) {
  var helper = _ref4.helper,
      push = _ref4.push,
      newline = _ref4.newline,
      isTS = _ref4.isTS;
  var resolver = helper(type === 'filter' ? RESOLVE_FILTER : type === 'component' ? RESOLVE_COMPONENT : RESOLVE_DIRECTIVE);

  for (var i = 0; i < assets.length; i++) {
    var id = assets[i]; // potential component implicit self-reference inferred from SFC filename

    var maybeSelfReference = id.endsWith('__self');

    if (maybeSelfReference) {
      id = id.slice(0, -6);
    }

    push("const ".concat(toValidAssetId(id, type), " = ").concat(resolver, "(").concat(JSON.stringify(id)).concat(maybeSelfReference ? ", true" : "", ")").concat(isTS ? "!" : ""));

    if (i < assets.length - 1) {
      newline();
    }
  }
}

function genHoists(hoists, context) {
  if (!hoists.length) {
    return;
  }

  context.pure = true;
  var push = context.push,
      newline = context.newline,
      helper = context.helper,
      scopeId = context.scopeId,
      mode = context.mode;
  newline();

  for (var i = 0; i < hoists.length; i++) {
    var exp = hoists[i];

    if (exp) {
      push("const _hoisted_".concat(i + 1, " = ", ""));
      genNode(exp, context);
      newline();
    }
  }

  context.pure = false;
}

function isText$1(n) {
  return (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isString)(n) || n.type === 4
  /* SIMPLE_EXPRESSION */
  || n.type === 2
  /* TEXT */
  || n.type === 5
  /* INTERPOLATION */
  || n.type === 8
  /* COMPOUND_EXPRESSION */
  ;
}

function genNodeListAsArray(nodes, context) {
  var multilines = nodes.length > 3 ||  true && nodes.some(function (n) {
    return (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isArray)(n) || !isText$1(n);
  });
  context.push("[");
  multilines && context.indent();
  genNodeList(nodes, context, multilines);
  multilines && context.deindent();
  context.push("]");
}

function genNodeList(nodes, context) {
  var multilines = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var comma = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
  var push = context.push,
      newline = context.newline;

  for (var i = 0; i < nodes.length; i++) {
    var node = nodes[i];

    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isString)(node)) {
      push(node);
    } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isArray)(node)) {
      genNodeListAsArray(node, context);
    } else {
      genNode(node, context);
    }

    if (i < nodes.length - 1) {
      if (multilines) {
        comma && push(',');
        newline();
      } else {
        comma && push(', ');
      }
    }
  }
}

function genNode(node, context) {
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isString)(node)) {
    context.push(node);
    return;
  }

  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isSymbol)(node)) {
    context.push(context.helper(node));
    return;
  }

  switch (node.type) {
    case 1
    /* ELEMENT */
    :
    case 9
    /* IF */
    :
    case 11
    /* FOR */
    :
       true && assert(node.codegenNode != null, "Codegen node is missing for element/if/for node. " + "Apply appropriate transforms first.");
      genNode(node.codegenNode, context);
      break;

    case 2
    /* TEXT */
    :
      genText(node, context);
      break;

    case 4
    /* SIMPLE_EXPRESSION */
    :
      genExpression(node, context);
      break;

    case 5
    /* INTERPOLATION */
    :
      genInterpolation(node, context);
      break;

    case 12
    /* TEXT_CALL */
    :
      genNode(node.codegenNode, context);
      break;

    case 8
    /* COMPOUND_EXPRESSION */
    :
      genCompoundExpression(node, context);
      break;

    case 3
    /* COMMENT */
    :
      genComment(node, context);
      break;

    case 13
    /* VNODE_CALL */
    :
      genVNodeCall(node, context);
      break;

    case 14
    /* JS_CALL_EXPRESSION */
    :
      genCallExpression(node, context);
      break;

    case 15
    /* JS_OBJECT_EXPRESSION */
    :
      genObjectExpression(node, context);
      break;

    case 17
    /* JS_ARRAY_EXPRESSION */
    :
      genArrayExpression(node, context);
      break;

    case 18
    /* JS_FUNCTION_EXPRESSION */
    :
      genFunctionExpression(node, context);
      break;

    case 19
    /* JS_CONDITIONAL_EXPRESSION */
    :
      genConditionalExpression(node, context);
      break;

    case 20
    /* JS_CACHE_EXPRESSION */
    :
      genCacheExpression(node, context);
      break;

    case 21
    /* JS_BLOCK_STATEMENT */
    :
      genNodeList(node.body, context, true, false);
      break;
    // SSR only types

    case 22
    /* JS_TEMPLATE_LITERAL */
    :
      break;

    case 23
    /* JS_IF_STATEMENT */
    :
      break;

    case 24
    /* JS_ASSIGNMENT_EXPRESSION */
    :
      break;

    case 25
    /* JS_SEQUENCE_EXPRESSION */
    :
      break;

    case 26
    /* JS_RETURN_STATEMENT */
    :
      break;

    /* istanbul ignore next */

    case 10
    /* IF_BRANCH */
    :
      // noop
      break;

    default:
      if (true) {
        assert(false, "unhandled codegen node type: ".concat(node.type)); // make sure we exhaust all possible types

        var exhaustiveCheck = node;
        return exhaustiveCheck;
      }

  }
}

function genText(node, context) {
  context.push(JSON.stringify(node.content), node);
}

function genExpression(node, context) {
  var content = node.content,
      isStatic = node.isStatic;
  context.push(isStatic ? JSON.stringify(content) : content, node);
}

function genInterpolation(node, context) {
  var push = context.push,
      helper = context.helper,
      pure = context.pure;
  if (pure) push(PURE_ANNOTATION);
  push("".concat(helper(TO_DISPLAY_STRING), "("));
  genNode(node.content, context);
  push(")");
}

function genCompoundExpression(node, context) {
  for (var i = 0; i < node.children.length; i++) {
    var child = node.children[i];

    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isString)(child)) {
      context.push(child);
    } else {
      genNode(child, context);
    }
  }
}

function genExpressionAsPropertyKey(node, context) {
  var push = context.push;

  if (node.type === 8
  /* COMPOUND_EXPRESSION */
  ) {
    push("[");
    genCompoundExpression(node, context);
    push("]");
  } else if (node.isStatic) {
    // only quote keys if necessary
    var text = isSimpleIdentifier(node.content) ? node.content : JSON.stringify(node.content);
    push(text, node);
  } else {
    push("[".concat(node.content, "]"), node);
  }
}

function genComment(node, context) {
  var push = context.push,
      helper = context.helper,
      pure = context.pure;

  if (pure) {
    push(PURE_ANNOTATION);
  }

  push("".concat(helper(CREATE_COMMENT), "(").concat(JSON.stringify(node.content), ")"), node);
}

function genVNodeCall(node, context) {
  var push = context.push,
      helper = context.helper,
      pure = context.pure;
  var tag = node.tag,
      props = node.props,
      children = node.children,
      patchFlag = node.patchFlag,
      dynamicProps = node.dynamicProps,
      directives = node.directives,
      isBlock = node.isBlock,
      disableTracking = node.disableTracking,
      isComponent = node.isComponent;

  if (directives) {
    push(helper(WITH_DIRECTIVES) + "(");
  }

  if (isBlock) {
    push("(".concat(helper(OPEN_BLOCK), "(").concat(disableTracking ? "true" : "", "), "));
  }

  if (pure) {
    push(PURE_ANNOTATION);
  }

  var callHelper = isBlock ? getVNodeBlockHelper(context.inSSR, isComponent) : getVNodeHelper(context.inSSR, isComponent);
  push(helper(callHelper) + "(", node);
  genNodeList(genNullableArgs([tag, props, children, patchFlag, dynamicProps]), context);
  push(")");

  if (isBlock) {
    push(")");
  }

  if (directives) {
    push(", ");
    genNode(directives, context);
    push(")");
  }
}

function genNullableArgs(args) {
  var i = args.length;

  while (i--) {
    if (args[i] != null) break;
  }

  return args.slice(0, i + 1).map(function (arg) {
    return arg || "null";
  });
} // JavaScript


function genCallExpression(node, context) {
  var push = context.push,
      helper = context.helper,
      pure = context.pure;
  var callee = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isString)(node.callee) ? node.callee : helper(node.callee);

  if (pure) {
    push(PURE_ANNOTATION);
  }

  push(callee + "(", node);
  genNodeList(node.arguments, context);
  push(")");
}

function genObjectExpression(node, context) {
  var push = context.push,
      indent = context.indent,
      deindent = context.deindent,
      newline = context.newline;
  var properties = node.properties;

  if (!properties.length) {
    push("{}", node);
    return;
  }

  var multilines = properties.length > 1 ||  true && properties.some(function (p) {
    return p.value.type !== 4;
  }
  /* SIMPLE_EXPRESSION */
  );
  push(multilines ? "{" : "{ ");
  multilines && indent();

  for (var i = 0; i < properties.length; i++) {
    var _properties$i2 = properties[i],
        key = _properties$i2.key,
        value = _properties$i2.value; // key

    genExpressionAsPropertyKey(key, context);
    push(": "); // value

    genNode(value, context);

    if (i < properties.length - 1) {
      // will only reach this if it's multilines
      push(",");
      newline();
    }
  }

  multilines && deindent();
  push(multilines ? "}" : " }");
}

function genArrayExpression(node, context) {
  genNodeListAsArray(node.elements, context);
}

function genFunctionExpression(node, context) {
  var push = context.push,
      indent = context.indent,
      deindent = context.deindent;
  var params = node.params,
      returns = node.returns,
      body = node.body,
      newline = node.newline,
      isSlot = node.isSlot;

  if (isSlot) {
    // wrap slot functions with owner context
    push("_".concat(helperNameMap[WITH_CTX], "("));
  }

  push("(", node);

  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isArray)(params)) {
    genNodeList(params, context);
  } else if (params) {
    genNode(params, context);
  }

  push(") => ");

  if (newline || body) {
    push("{");
    indent();
  }

  if (returns) {
    if (newline) {
      push("return ");
    }

    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isArray)(returns)) {
      genNodeListAsArray(returns, context);
    } else {
      genNode(returns, context);
    }
  } else if (body) {
    genNode(body, context);
  }

  if (newline || body) {
    deindent();
    push("}");
  }

  if (isSlot) {
    if (node.isNonScopedSlot) {
      push(", undefined, true");
    }

    push(")");
  }
}

function genConditionalExpression(node, context) {
  var test = node.test,
      consequent = node.consequent,
      alternate = node.alternate,
      needNewline = node.newline;
  var push = context.push,
      indent = context.indent,
      deindent = context.deindent,
      newline = context.newline;

  if (test.type === 4
  /* SIMPLE_EXPRESSION */
  ) {
    var needsParens = !isSimpleIdentifier(test.content);
    needsParens && push("(");
    genExpression(test, context);
    needsParens && push(")");
  } else {
    push("(");
    genNode(test, context);
    push(")");
  }

  needNewline && indent();
  context.indentLevel++;
  needNewline || push(" ");
  push("? ");
  genNode(consequent, context);
  context.indentLevel--;
  needNewline && newline();
  needNewline || push(" ");
  push(": ");
  var isNested = alternate.type === 19
  /* JS_CONDITIONAL_EXPRESSION */
  ;

  if (!isNested) {
    context.indentLevel++;
  }

  genNode(alternate, context);

  if (!isNested) {
    context.indentLevel--;
  }

  needNewline && deindent(true
  /* without newline */
  );
}

function genCacheExpression(node, context) {
  var push = context.push,
      helper = context.helper,
      indent = context.indent,
      deindent = context.deindent,
      newline = context.newline;
  push("_cache[".concat(node.index, "] || ("));

  if (node.isVNode) {
    indent();
    push("".concat(helper(SET_BLOCK_TRACKING), "(-1),"));
    newline();
  }

  push("_cache[".concat(node.index, "] = "));
  genNode(node.value, context);

  if (node.isVNode) {
    push(",");
    newline();
    push("".concat(helper(SET_BLOCK_TRACKING), "(1),"));
    newline();
    push("_cache[".concat(node.index, "]"));
    deindent();
  }

  push(")");
}

function walkIdentifiers(root, onIdentifier) {
  var includeAll = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var parentStack = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
  var knownIds = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : Object.create(null);
  {
    return;
  }
}

function isReferencedIdentifier(id, parent, parentStack) {
  {
    return false;
  }
}

function isInDestructureAssignment(parent, parentStack) {
  if (parent && (parent.type === 'ObjectProperty' || parent.type === 'ArrayPattern')) {
    var i = parentStack.length;

    while (i--) {
      var p = parentStack[i];

      if (p.type === 'AssignmentExpression') {
        return true;
      } else if (p.type !== 'ObjectProperty' && !p.type.endsWith('Pattern')) {
        break;
      }
    }
  }

  return false;
}

function walkFunctionParams(node, onIdent) {
  var _iterator = _createForOfIteratorHelper(node.params),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var p = _step.value;

      var _iterator2 = _createForOfIteratorHelper(extractIdentifiers(p)),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var id = _step2.value;
          onIdent(id);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}

function walkBlockDeclarations(block, onIdent) {
  var _iterator3 = _createForOfIteratorHelper(block.body),
      _step3;

  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var stmt = _step3.value;

      if (stmt.type === 'VariableDeclaration') {
        if (stmt.declare) continue;

        var _iterator4 = _createForOfIteratorHelper(stmt.declarations),
            _step4;

        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
            var decl = _step4.value;

            var _iterator5 = _createForOfIteratorHelper(extractIdentifiers(decl.id)),
                _step5;

            try {
              for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                var id = _step5.value;
                onIdent(id);
              }
            } catch (err) {
              _iterator5.e(err);
            } finally {
              _iterator5.f();
            }
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }
      } else if (stmt.type === 'FunctionDeclaration' || stmt.type === 'ClassDeclaration') {
        if (stmt.declare || !stmt.id) continue;
        onIdent(stmt.id);
      }
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }
}

function extractIdentifiers(param) {
  var nodes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  switch (param.type) {
    case 'Identifier':
      nodes.push(param);
      break;

    case 'MemberExpression':
      var object = param;

      while (object.type === 'MemberExpression') {
        object = object.object;
      }

      nodes.push(object);
      break;

    case 'ObjectPattern':
      var _iterator6 = _createForOfIteratorHelper(param.properties),
          _step6;

      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
          var prop = _step6.value;

          if (prop.type === 'RestElement') {
            extractIdentifiers(prop.argument, nodes);
          } else {
            extractIdentifiers(prop.value, nodes);
          }
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }

      break;

    case 'ArrayPattern':
      param.elements.forEach(function (element) {
        if (element) extractIdentifiers(element, nodes);
      });
      break;

    case 'RestElement':
      extractIdentifiers(param.argument, nodes);
      break;

    case 'AssignmentPattern':
      extractIdentifiers(param.left, nodes);
      break;
  }

  return nodes;
}

var isFunctionType = function isFunctionType(node) {
  return /Function(?:Expression|Declaration)$|Method$/.test(node.type);
};

var isStaticProperty = function isStaticProperty(node) {
  return node && (node.type === 'ObjectProperty' || node.type === 'ObjectMethod') && !node.computed;
};

var isStaticPropertyKey = function isStaticPropertyKey(node, parent) {
  return isStaticProperty(parent) && parent.key === node;
}; // these keywords should not appear inside expressions, but operators like
// typeof, instanceof and in are allowed


var prohibitedKeywordRE = new RegExp('\\b' + ('do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,' + 'super,throw,while,yield,delete,export,import,return,switch,default,' + 'extends,finally,continue,debugger,function,arguments,typeof,void').split(',').join('\\b|\\b') + '\\b'); // strip strings in expressions

var stripStringRE = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;
/**
 * Validate a non-prefixed expression.
 * This is only called when using the in-browser runtime compiler since it
 * doesn't prefix expressions.
 */

function validateBrowserExpression(node, context) {
  var asParams = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var asRawStatements = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var exp = node.content; // empty expressions are validated per-directive since some directives
  // do allow empty expressions.

  if (!exp.trim()) {
    return;
  }

  try {
    new Function(asRawStatements ? " ".concat(exp, " ") : "return ".concat(asParams ? "(".concat(exp, ") => {}") : "(".concat(exp, ")")));
  } catch (e) {
    var message = e.message;
    var keywordMatch = exp.replace(stripStringRE, '').match(prohibitedKeywordRE);

    if (keywordMatch) {
      message = "avoid using JavaScript keyword as property name: \"".concat(keywordMatch[0], "\"");
    }

    context.onError(createCompilerError(44
    /* X_INVALID_EXPRESSION */
    , node.loc, undefined, message));
  }
}

var transformExpression = function transformExpression(node, context) {
  if (node.type === 5
  /* INTERPOLATION */
  ) {
    node.content = processExpression(node.content, context);
  } else if (node.type === 1
  /* ELEMENT */
  ) {
    // handle directives on element
    for (var i = 0; i < node.props.length; i++) {
      var dir = node.props[i]; // do not process for v-on & v-for since they are special handled

      if (dir.type === 7
      /* DIRECTIVE */
      && dir.name !== 'for') {
        var exp = dir.exp;
        var arg = dir.arg; // do not process exp if this is v-on:arg - we need special handling
        // for wrapping inline statements.

        if (exp && exp.type === 4
        /* SIMPLE_EXPRESSION */
        && !(dir.name === 'on' && arg)) {
          dir.exp = processExpression(exp, context, // slot args must be processed as function params
          dir.name === 'slot');
        }

        if (arg && arg.type === 4
        /* SIMPLE_EXPRESSION */
        && !arg.isStatic) {
          dir.arg = processExpression(arg, context);
        }
      }
    }
  }
}; // Important: since this function uses Node.js only dependencies, it should
// always be used with a leading !true check so that it can be
// tree-shaken from the browser build.


function processExpression(node, context) {
  var asParams = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var asRawStatements = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var localVars = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : Object.create(context.identifiers);
  {
    if (true) {
      // simple in-browser validation (same logic in 2.x)
      validateBrowserExpression(node, context, asParams, asRawStatements);
    }

    return node;
  }
}

var transformIf = createStructuralDirectiveTransform(/^(if|else|else-if)$/, function (node, dir, context) {
  return processIf(node, dir, context, function (ifNode, branch, isRoot) {
    // #1587: We need to dynamically increment the key based on the current
    // node's sibling nodes, since chained v-if/else branches are
    // rendered at the same depth
    var siblings = context.parent.children;
    var i = siblings.indexOf(ifNode);
    var key = 0;

    while (i-- >= 0) {
      var sibling = siblings[i];

      if (sibling && sibling.type === 9
      /* IF */
      ) {
        key += sibling.branches.length;
      }
    } // Exit callback. Complete the codegenNode when all children have been
    // transformed.


    return function () {
      if (isRoot) {
        ifNode.codegenNode = createCodegenNodeForBranch(branch, key, context);
      } else {
        // attach this branch's codegen node to the v-if root.
        var parentCondition = getParentCondition(ifNode.codegenNode);
        parentCondition.alternate = createCodegenNodeForBranch(branch, key + ifNode.branches.length - 1, context);
      }
    };
  });
}); // target-agnostic transform used for both Client and SSR

function processIf(node, dir, context, processCodegen) {
  if (dir.name !== 'else' && (!dir.exp || !dir.exp.content.trim())) {
    var loc = dir.exp ? dir.exp.loc : node.loc;
    context.onError(createCompilerError(28
    /* X_V_IF_NO_EXPRESSION */
    , dir.loc));
    dir.exp = createSimpleExpression("true", false, loc);
  }

  if ( true && dir.exp) {
    validateBrowserExpression(dir.exp, context);
  }

  if (dir.name === 'if') {
    var branch = createIfBranch(node, dir);
    var ifNode = {
      type: 9
      /* IF */
      ,
      loc: node.loc,
      branches: [branch]
    };
    context.replaceNode(ifNode);

    if (processCodegen) {
      return processCodegen(ifNode, branch, true);
    }
  } else {
    // locate the adjacent v-if
    var siblings = context.parent.children;
    var comments = [];
    var i = siblings.indexOf(node);

    while (i-- >= -1) {
      var sibling = siblings[i];

      if ( true && sibling && sibling.type === 3
      /* COMMENT */
      ) {
        context.removeNode(sibling);
        comments.unshift(sibling);
        continue;
      }

      if (sibling && sibling.type === 2
      /* TEXT */
      && !sibling.content.trim().length) {
        context.removeNode(sibling);
        continue;
      }

      if (sibling && sibling.type === 9
      /* IF */
      ) {
        (function () {
          // Check if v-else was followed by v-else-if
          if (dir.name === 'else-if' && sibling.branches[sibling.branches.length - 1].condition === undefined) {
            context.onError(createCompilerError(30
            /* X_V_ELSE_NO_ADJACENT_IF */
            , node.loc));
          } // move the node to the if node's branches


          context.removeNode();
          var branch = createIfBranch(node, dir);

          if ( true && comments.length && // #3619 ignore comments if the v-if is direct child of <transition>
          !(context.parent && context.parent.type === 1
          /* ELEMENT */
          && isBuiltInType(context.parent.tag, 'transition'))) {
            branch.children = [].concat(comments, _toConsumableArray(branch.children));
          } // check if user is forcing same key on different branches


          if (true) {
            var key = branch.userKey;

            if (key) {
              sibling.branches.forEach(function (_ref5) {
                var userKey = _ref5.userKey;

                if (isSameKey(userKey, key)) {
                  context.onError(createCompilerError(29
                  /* X_V_IF_SAME_KEY */
                  , branch.userKey.loc));
                }
              });
            }
          }

          sibling.branches.push(branch);
          var onExit = processCodegen && processCodegen(sibling, branch, false); // since the branch was removed, it will not be traversed.
          // make sure to traverse here.

          traverseNode(branch, context); // call on exit

          if (onExit) onExit(); // make sure to reset currentNode after traversal to indicate this
          // node has been removed.

          context.currentNode = null;
        })();
      } else {
        context.onError(createCompilerError(30
        /* X_V_ELSE_NO_ADJACENT_IF */
        , node.loc));
      }

      break;
    }
  }
}

function createIfBranch(node, dir) {
  var isTemplateIf = node.tagType === 3
  /* TEMPLATE */
  ;
  return {
    type: 10
    /* IF_BRANCH */
    ,
    loc: node.loc,
    condition: dir.name === 'else' ? undefined : dir.exp,
    children: isTemplateIf && !findDir(node, 'for') ? node.children : [node],
    userKey: findProp(node, "key"),
    isTemplateIf: isTemplateIf
  };
}

function createCodegenNodeForBranch(branch, keyIndex, context) {
  if (branch.condition) {
    return createConditionalExpression(branch.condition, createChildrenCodegenNode(branch, keyIndex, context), // make sure to pass in asBlock: true so that the comment node call
    // closes the current block.
    createCallExpression(context.helper(CREATE_COMMENT), [ true ? '"v-if"' : 0, 'true']));
  } else {
    return createChildrenCodegenNode(branch, keyIndex, context);
  }
}

function createChildrenCodegenNode(branch, keyIndex, context) {
  var helper = context.helper;
  var keyProperty = createObjectProperty("key", createSimpleExpression("".concat(keyIndex), false, locStub, 2
  /* CAN_HOIST */
  ));
  var children = branch.children;
  var firstChild = children[0];
  var needFragmentWrapper = children.length !== 1 || firstChild.type !== 1
  /* ELEMENT */
  ;

  if (needFragmentWrapper) {
    if (children.length === 1 && firstChild.type === 11
    /* FOR */
    ) {
      // optimize away nested fragments when child is a ForNode
      var vnodeCall = firstChild.codegenNode;
      injectProp(vnodeCall, keyProperty, context);
      return vnodeCall;
    } else {
      var patchFlag = 64
      /* STABLE_FRAGMENT */
      ;
      var patchFlagText = _vue_shared__WEBPACK_IMPORTED_MODULE_0__.PatchFlagNames[64]; // check if the fragment actually contains a single valid child with
      // the rest being comments

      if ( true && !branch.isTemplateIf && children.filter(function (c) {
        return c.type !== 3;
      }
      /* COMMENT */
      ).length === 1) {
        patchFlag |= 2048
        /* DEV_ROOT_FRAGMENT */
        ;
        patchFlagText += ", ".concat(_vue_shared__WEBPACK_IMPORTED_MODULE_0__.PatchFlagNames[2048]);
      }

      return createVNodeCall(context, helper(FRAGMENT), createObjectExpression([keyProperty]), children, patchFlag + ( true ? " /* ".concat(patchFlagText, " */") : 0), undefined, undefined, true, false, false
      /* isComponent */
      , branch.loc);
    }
  } else {
    var ret = firstChild.codegenNode;

    var _vnodeCall = getMemoedVNodeCall(ret); // Change createVNode to createBlock.


    if (_vnodeCall.type === 13
    /* VNODE_CALL */
    ) {
      makeBlock(_vnodeCall, context);
    } // inject branch key


    injectProp(_vnodeCall, keyProperty, context);
    return ret;
  }
}

function isSameKey(a, b) {
  if (!a || a.type !== b.type) {
    return false;
  }

  if (a.type === 6
  /* ATTRIBUTE */
  ) {
    if (a.value.content !== b.value.content) {
      return false;
    }
  } else {
    // directive
    var exp = a.exp;
    var branchExp = b.exp;

    if (exp.type !== branchExp.type) {
      return false;
    }

    if (exp.type !== 4
    /* SIMPLE_EXPRESSION */
    || exp.isStatic !== branchExp.isStatic || exp.content !== branchExp.content) {
      return false;
    }
  }

  return true;
}

function getParentCondition(node) {
  while (true) {
    if (node.type === 19
    /* JS_CONDITIONAL_EXPRESSION */
    ) {
      if (node.alternate.type === 19
      /* JS_CONDITIONAL_EXPRESSION */
      ) {
        node = node.alternate;
      } else {
        return node;
      }
    } else if (node.type === 20
    /* JS_CACHE_EXPRESSION */
    ) {
      node = node.value;
    }
  }
}

var transformFor = createStructuralDirectiveTransform('for', function (node, dir, context) {
  var helper = context.helper,
      removeHelper = context.removeHelper;
  return processFor(node, dir, context, function (forNode) {
    // create the loop render function expression now, and add the
    // iterator on exit after all children have been traversed
    var renderExp = createCallExpression(helper(RENDER_LIST), [forNode.source]);
    var isTemplate = isTemplateNode(node);
    var memo = findDir(node, 'memo');
    var keyProp = findProp(node, "key");
    var keyExp = keyProp && (keyProp.type === 6
    /* ATTRIBUTE */
    ? createSimpleExpression(keyProp.value.content, true) : keyProp.exp);
    var keyProperty = keyProp ? createObjectProperty("key", keyExp) : null;
    var isStableFragment = forNode.source.type === 4
    /* SIMPLE_EXPRESSION */
    && forNode.source.constType > 0
    /* NOT_CONSTANT */
    ;
    var fragmentFlag = isStableFragment ? 64
    /* STABLE_FRAGMENT */
    : keyProp ? 128
    /* KEYED_FRAGMENT */
    : 256
    /* UNKEYED_FRAGMENT */
    ;
    forNode.codegenNode = createVNodeCall(context, helper(FRAGMENT), undefined, renderExp, fragmentFlag + ( true ? " /* ".concat(_vue_shared__WEBPACK_IMPORTED_MODULE_0__.PatchFlagNames[fragmentFlag], " */") : 0), undefined, undefined, true
    /* isBlock */
    , !isStableFragment
    /* disableTracking */
    , false
    /* isComponent */
    , node.loc);
    return function () {
      // finish the codegen now that all children have been traversed
      var childBlock;
      var children = forNode.children; // check <template v-for> key placement

      if (( true) && isTemplate) {
        node.children.some(function (c) {
          if (c.type === 1
          /* ELEMENT */
          ) {
            var key = findProp(c, 'key');

            if (key) {
              context.onError(createCompilerError(33
              /* X_V_FOR_TEMPLATE_KEY_PLACEMENT */
              , key.loc));
              return true;
            }
          }
        });
      }

      var needFragmentWrapper = children.length !== 1 || children[0].type !== 1
      /* ELEMENT */
      ;
      var slotOutlet = isSlotOutlet(node) ? node : isTemplate && node.children.length === 1 && isSlotOutlet(node.children[0]) ? node.children[0] // api-extractor somehow fails to infer this
      : null;

      if (slotOutlet) {
        // <slot v-for="..."> or <template v-for="..."><slot/></template>
        childBlock = slotOutlet.codegenNode;

        if (isTemplate && keyProperty) {
          // <template v-for="..." :key="..."><slot/></template>
          // we need to inject the key to the renderSlot() call.
          // the props for renderSlot is passed as the 3rd argument.
          injectProp(childBlock, keyProperty, context);
        }
      } else if (needFragmentWrapper) {
        // <template v-for="..."> with text or multi-elements
        // should generate a fragment block for each loop
        childBlock = createVNodeCall(context, helper(FRAGMENT), keyProperty ? createObjectExpression([keyProperty]) : undefined, node.children, 64
        /* STABLE_FRAGMENT */
        + ( true ? " /* ".concat(_vue_shared__WEBPACK_IMPORTED_MODULE_0__.PatchFlagNames[64], " */") : 0), undefined, undefined, true, undefined, false
        /* isComponent */
        );
      } else {
        // Normal element v-for. Directly use the child's codegenNode
        // but mark it as a block.
        childBlock = children[0].codegenNode;

        if (isTemplate && keyProperty) {
          injectProp(childBlock, keyProperty, context);
        }

        if (childBlock.isBlock !== !isStableFragment) {
          if (childBlock.isBlock) {
            // switch from block to vnode
            removeHelper(OPEN_BLOCK);
            removeHelper(getVNodeBlockHelper(context.inSSR, childBlock.isComponent));
          } else {
            // switch from vnode to block
            removeHelper(getVNodeHelper(context.inSSR, childBlock.isComponent));
          }
        }

        childBlock.isBlock = !isStableFragment;

        if (childBlock.isBlock) {
          helper(OPEN_BLOCK);
          helper(getVNodeBlockHelper(context.inSSR, childBlock.isComponent));
        } else {
          helper(getVNodeHelper(context.inSSR, childBlock.isComponent));
        }
      }

      if (memo) {
        var loop = createFunctionExpression(createForLoopParams(forNode.parseResult, [createSimpleExpression("_cached")]));
        loop.body = createBlockStatement([createCompoundExpression(["const _memo = (", memo.exp, ")"]), createCompoundExpression(["if (_cached"].concat(_toConsumableArray(keyExp ? [" && _cached.key === ", keyExp] : []), [" && ".concat(context.helperString(IS_MEMO_SAME), "(_cached, _memo)) return _cached")])), createCompoundExpression(["const _item = ", childBlock]), createSimpleExpression("_item.memo = _memo"), createSimpleExpression("return _item")]);
        renderExp.arguments.push(loop, createSimpleExpression("_cache"), createSimpleExpression(String(context.cached++)));
      } else {
        renderExp.arguments.push(createFunctionExpression(createForLoopParams(forNode.parseResult), childBlock, true
        /* force newline */
        ));
      }
    };
  });
}); // target-agnostic transform used for both Client and SSR

function processFor(node, dir, context, processCodegen) {
  if (!dir.exp) {
    context.onError(createCompilerError(31
    /* X_V_FOR_NO_EXPRESSION */
    , dir.loc));
    return;
  }

  var parseResult = parseForExpression( // can only be simple expression because vFor transform is applied
  // before expression transform.
  dir.exp, context);

  if (!parseResult) {
    context.onError(createCompilerError(32
    /* X_V_FOR_MALFORMED_EXPRESSION */
    , dir.loc));
    return;
  }

  var addIdentifiers = context.addIdentifiers,
      removeIdentifiers = context.removeIdentifiers,
      scopes = context.scopes;
  var source = parseResult.source,
      value = parseResult.value,
      key = parseResult.key,
      index = parseResult.index;
  var forNode = {
    type: 11
    /* FOR */
    ,
    loc: dir.loc,
    source: source,
    valueAlias: value,
    keyAlias: key,
    objectIndexAlias: index,
    parseResult: parseResult,
    children: isTemplateNode(node) ? node.children : [node]
  };
  context.replaceNode(forNode); // bookkeeping

  scopes.vFor++;
  var onExit = processCodegen && processCodegen(forNode);
  return function () {
    scopes.vFor--;
    if (onExit) onExit();
  };
}

var forAliasRE = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/; // This regex doesn't cover the case if key or index aliases have destructuring,
// but those do not make sense in the first place, so this works in practice.

var forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
var stripParensRE = /^\(|\)$/g;

function parseForExpression(input, context) {
  var loc = input.loc;
  var exp = input.content;
  var inMatch = exp.match(forAliasRE);
  if (!inMatch) return;

  var _inMatch = _slicedToArray(inMatch, 3),
      LHS = _inMatch[1],
      RHS = _inMatch[2];

  var result = {
    source: createAliasExpression(loc, RHS.trim(), exp.indexOf(RHS, LHS.length)),
    value: undefined,
    key: undefined,
    index: undefined
  };

  if (true) {
    validateBrowserExpression(result.source, context);
  }

  var valueContent = LHS.trim().replace(stripParensRE, '').trim();
  var trimmedOffset = LHS.indexOf(valueContent);
  var iteratorMatch = valueContent.match(forIteratorRE);

  if (iteratorMatch) {
    valueContent = valueContent.replace(forIteratorRE, '').trim();
    var keyContent = iteratorMatch[1].trim();
    var keyOffset;

    if (keyContent) {
      keyOffset = exp.indexOf(keyContent, trimmedOffset + valueContent.length);
      result.key = createAliasExpression(loc, keyContent, keyOffset);

      if (true) {
        validateBrowserExpression(result.key, context, true);
      }
    }

    if (iteratorMatch[2]) {
      var indexContent = iteratorMatch[2].trim();

      if (indexContent) {
        result.index = createAliasExpression(loc, indexContent, exp.indexOf(indexContent, result.key ? keyOffset + keyContent.length : trimmedOffset + valueContent.length));

        if (true) {
          validateBrowserExpression(result.index, context, true);
        }
      }
    }
  }

  if (valueContent) {
    result.value = createAliasExpression(loc, valueContent, trimmedOffset);

    if (true) {
      validateBrowserExpression(result.value, context, true);
    }
  }

  return result;
}

function createAliasExpression(range, content, offset) {
  return createSimpleExpression(content, false, getInnerRange(range, offset, content.length));
}

function createForLoopParams(_ref6) {
  var value = _ref6.value,
      key = _ref6.key,
      index = _ref6.index;
  var memoArgs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  return createParamsList([value, key, index].concat(_toConsumableArray(memoArgs)));
}

function createParamsList(args) {
  var i = args.length;

  while (i--) {
    if (args[i]) break;
  }

  return args.slice(0, i + 1).map(function (arg, i) {
    return arg || createSimpleExpression("_".repeat(i + 1), false);
  });
}

var defaultFallback = createSimpleExpression("undefined", false); // A NodeTransform that:
// 1. Tracks scope identifiers for scoped slots so that they don't get prefixed
//    by transformExpression. This is only applied in non-browser builds with
//    { prefixIdentifiers: true }.
// 2. Track v-slot depths so that we know a slot is inside another slot.
//    Note the exit callback is executed before buildSlots() on the same node,
//    so only nested slots see positive numbers.

var trackSlotScopes = function trackSlotScopes(node, context) {
  if (node.type === 1
  /* ELEMENT */
  && (node.tagType === 1
  /* COMPONENT */
  || node.tagType === 3
  /* TEMPLATE */
  )) {
    // We are only checking non-empty v-slot here
    // since we only care about slots that introduce scope variables.
    var vSlot = findDir(node, 'slot');

    if (vSlot) {
      vSlot.exp;
      context.scopes.vSlot++;
      return function () {
        context.scopes.vSlot--;
      };
    }
  }
}; // A NodeTransform that tracks scope identifiers for scoped slots with v-for.
// This transform is only applied in non-browser builds with { prefixIdentifiers: true }


var trackVForSlotScopes = function trackVForSlotScopes(node, context) {
  var vFor;

  if (isTemplateNode(node) && node.props.some(isVSlot) && (vFor = findDir(node, 'for'))) {
    var result = vFor.parseResult = parseForExpression(vFor.exp, context);

    if (result) {
      var value = result.value,
          key = result.key,
          index = result.index;
      var addIdentifiers = context.addIdentifiers,
          removeIdentifiers = context.removeIdentifiers;
      value && addIdentifiers(value);
      key && addIdentifiers(key);
      index && addIdentifiers(index);
      return function () {
        value && removeIdentifiers(value);
        key && removeIdentifiers(key);
        index && removeIdentifiers(index);
      };
    }
  }
};

var buildClientSlotFn = function buildClientSlotFn(props, children, loc) {
  return createFunctionExpression(props, children, false
  /* newline */
  , true
  /* isSlot */
  , children.length ? children[0].loc : loc);
}; // Instead of being a DirectiveTransform, v-slot processing is called during
// transformElement to build the slots object for a component.


function buildSlots(node, context) {
  var buildSlotFn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : buildClientSlotFn;
  context.helper(WITH_CTX);
  var children = node.children,
      loc = node.loc;
  var slotsProperties = [];
  var dynamicSlots = []; // If the slot is inside a v-for or another v-slot, force it to be dynamic
  // since it likely uses a scope variable.

  var hasDynamicSlots = context.scopes.vSlot > 0 || context.scopes.vFor > 0; // 1. Check for slot with slotProps on component itself.
  //    <Comp v-slot="{ prop }"/>

  var onComponentSlot = findDir(node, 'slot', true);

  if (onComponentSlot) {
    var arg = onComponentSlot.arg,
        exp = onComponentSlot.exp;

    if (arg && !isStaticExp(arg)) {
      hasDynamicSlots = true;
    }

    slotsProperties.push(createObjectProperty(arg || createSimpleExpression('default', true), buildSlotFn(exp, children, loc)));
  } // 2. Iterate through children and check for template slots
  //    <template v-slot:foo="{ prop }">


  var hasTemplateSlots = false;
  var hasNamedDefaultSlot = false;
  var implicitDefaultChildren = [];
  var seenSlotNames = new Set();

  for (var i = 0; i < children.length; i++) {
    var slotElement = children[i];
    var slotDir = void 0;

    if (!isTemplateNode(slotElement) || !(slotDir = findDir(slotElement, 'slot', true))) {
      // not a <template v-slot>, skip.
      if (slotElement.type !== 3
      /* COMMENT */
      ) {
        implicitDefaultChildren.push(slotElement);
      }

      continue;
    }

    if (onComponentSlot) {
      // already has on-component slot - this is incorrect usage.
      context.onError(createCompilerError(37
      /* X_V_SLOT_MIXED_SLOT_USAGE */
      , slotDir.loc));
      break;
    }

    hasTemplateSlots = true;
    var slotChildren = slotElement.children,
        slotLoc = slotElement.loc;
    var _slotDir = slotDir,
        _slotDir$arg = _slotDir.arg,
        slotName = _slotDir$arg === void 0 ? createSimpleExpression("default", true) : _slotDir$arg,
        slotProps = _slotDir.exp,
        dirLoc = _slotDir.loc; // check if name is dynamic.

    var staticSlotName = void 0;

    if (isStaticExp(slotName)) {
      staticSlotName = slotName ? slotName.content : "default";
    } else {
      hasDynamicSlots = true;
    }

    var slotFunction = buildSlotFn(slotProps, slotChildren, slotLoc); // check if this slot is conditional (v-if/v-for)

    var vIf = void 0;
    var vElse = void 0;
    var vFor = void 0;

    if (vIf = findDir(slotElement, 'if')) {
      hasDynamicSlots = true;
      dynamicSlots.push(createConditionalExpression(vIf.exp, buildDynamicSlot(slotName, slotFunction), defaultFallback));
    } else if (vElse = findDir(slotElement, /^else(-if)?$/, true
    /* allowEmpty */
    )) {
      // find adjacent v-if
      var j = i;
      var prev = void 0;

      while (j--) {
        prev = children[j];

        if (prev.type !== 3
        /* COMMENT */
        ) {
          break;
        }
      }

      if (prev && isTemplateNode(prev) && findDir(prev, 'if')) {
        // remove node
        children.splice(i, 1);
        i--; // attach this slot to previous conditional

        var conditional = dynamicSlots[dynamicSlots.length - 1];

        while (conditional.alternate.type === 19
        /* JS_CONDITIONAL_EXPRESSION */
        ) {
          conditional = conditional.alternate;
        }

        conditional.alternate = vElse.exp ? createConditionalExpression(vElse.exp, buildDynamicSlot(slotName, slotFunction), defaultFallback) : buildDynamicSlot(slotName, slotFunction);
      } else {
        context.onError(createCompilerError(30
        /* X_V_ELSE_NO_ADJACENT_IF */
        , vElse.loc));
      }
    } else if (vFor = findDir(slotElement, 'for')) {
      hasDynamicSlots = true;
      var parseResult = vFor.parseResult || parseForExpression(vFor.exp, context);

      if (parseResult) {
        // Render the dynamic slots as an array and add it to the createSlot()
        // args. The runtime knows how to handle it appropriately.
        dynamicSlots.push(createCallExpression(context.helper(RENDER_LIST), [parseResult.source, createFunctionExpression(createForLoopParams(parseResult), buildDynamicSlot(slotName, slotFunction), true
        /* force newline */
        )]));
      } else {
        context.onError(createCompilerError(32
        /* X_V_FOR_MALFORMED_EXPRESSION */
        , vFor.loc));
      }
    } else {
      // check duplicate static names
      if (staticSlotName) {
        if (seenSlotNames.has(staticSlotName)) {
          context.onError(createCompilerError(38
          /* X_V_SLOT_DUPLICATE_SLOT_NAMES */
          , dirLoc));
          continue;
        }

        seenSlotNames.add(staticSlotName);

        if (staticSlotName === 'default') {
          hasNamedDefaultSlot = true;
        }
      }

      slotsProperties.push(createObjectProperty(slotName, slotFunction));
    }
  }

  if (!onComponentSlot) {
    var buildDefaultSlotProperty = function buildDefaultSlotProperty(props, children) {
      var fn = buildSlotFn(props, children, loc);

      if (context.compatConfig) {
        fn.isNonScopedSlot = true;
      }

      return createObjectProperty("default", fn);
    };

    if (!hasTemplateSlots) {
      // implicit default slot (on component)
      slotsProperties.push(buildDefaultSlotProperty(undefined, children));
    } else if (implicitDefaultChildren.length && // #3766
    // with whitespace: 'preserve', whitespaces between slots will end up in
    // implicitDefaultChildren. Ignore if all implicit children are whitespaces.
    implicitDefaultChildren.some(function (node) {
      return isNonWhitespaceContent(node);
    })) {
      // implicit default slot (mixed with named slots)
      if (hasNamedDefaultSlot) {
        context.onError(createCompilerError(39
        /* X_V_SLOT_EXTRANEOUS_DEFAULT_SLOT_CHILDREN */
        , implicitDefaultChildren[0].loc));
      } else {
        slotsProperties.push(buildDefaultSlotProperty(undefined, implicitDefaultChildren));
      }
    }
  }

  var slotFlag = hasDynamicSlots ? 2
  /* DYNAMIC */
  : hasForwardedSlots(node.children) ? 3
  /* FORWARDED */
  : 1
  /* STABLE */
  ;
  var slots = createObjectExpression(slotsProperties.concat(createObjectProperty("_", // 2 = compiled but dynamic = can skip normalization, but must run diff
  // 1 = compiled and static = can skip normalization AND diff as optimized
  createSimpleExpression(slotFlag + ( true ? " /* ".concat(_vue_shared__WEBPACK_IMPORTED_MODULE_0__.slotFlagsText[slotFlag], " */") : 0), false))), loc);

  if (dynamicSlots.length) {
    slots = createCallExpression(context.helper(CREATE_SLOTS), [slots, createArrayExpression(dynamicSlots)]);
  }

  return {
    slots: slots,
    hasDynamicSlots: hasDynamicSlots
  };
}

function buildDynamicSlot(name, fn) {
  return createObjectExpression([createObjectProperty("name", name), createObjectProperty("fn", fn)]);
}

function hasForwardedSlots(children) {
  for (var i = 0; i < children.length; i++) {
    var child = children[i];

    switch (child.type) {
      case 1
      /* ELEMENT */
      :
        if (child.tagType === 2
        /* SLOT */
        || hasForwardedSlots(child.children)) {
          return true;
        }

        break;

      case 9
      /* IF */
      :
        if (hasForwardedSlots(child.branches)) return true;
        break;

      case 10
      /* IF_BRANCH */
      :
      case 11
      /* FOR */
      :
        if (hasForwardedSlots(child.children)) return true;
        break;
    }
  }

  return false;
}

function isNonWhitespaceContent(node) {
  if (node.type !== 2
  /* TEXT */
  && node.type !== 12
  /* TEXT_CALL */
  ) return true;
  return node.type === 2
  /* TEXT */
  ? !!node.content.trim() : isNonWhitespaceContent(node.content);
} // some directive transforms (e.g. v-model) may return a symbol for runtime
// import, which should be used instead of a resolveDirective call.


var directiveImportMap = new WeakMap(); // generate a JavaScript AST for this element's codegen

var transformElement = function transformElement(node, context) {
  // perform the work on exit, after all child expressions have been
  // processed and merged.
  return function postTransformElement() {
    node = context.currentNode;

    if (!(node.type === 1
    /* ELEMENT */
    && (node.tagType === 0
    /* ELEMENT */
    || node.tagType === 1
    /* COMPONENT */
    ))) {
      return;
    }

    var _node3 = node,
        tag = _node3.tag,
        props = _node3.props;
    var isComponent = node.tagType === 1
    /* COMPONENT */
    ; // The goal of the transform is to create a codegenNode implementing the
    // VNodeCall interface.

    var vnodeTag = isComponent ? resolveComponentType(node, context) : "\"".concat(tag, "\"");
    var isDynamicComponent = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isObject)(vnodeTag) && vnodeTag.callee === RESOLVE_DYNAMIC_COMPONENT;
    var vnodeProps;
    var vnodeChildren;
    var vnodePatchFlag;
    var patchFlag = 0;
    var vnodeDynamicProps;
    var dynamicPropNames;
    var vnodeDirectives;
    var shouldUseBlock = // dynamic component may resolve to plain elements
    isDynamicComponent || vnodeTag === TELEPORT || vnodeTag === SUSPENSE || !isComponent && ( // <svg> and <foreignObject> must be forced into blocks so that block
    // updates inside get proper isSVG flag at runtime. (#639, #643)
    // This is technically web-specific, but splitting the logic out of core
    // leads to too much unnecessary complexity.
    tag === 'svg' || tag === 'foreignObject'); // props

    if (props.length > 0) {
      var propsBuildResult = buildProps(node, context, undefined, isComponent, isDynamicComponent);
      vnodeProps = propsBuildResult.props;
      patchFlag = propsBuildResult.patchFlag;
      dynamicPropNames = propsBuildResult.dynamicPropNames;
      var directives = propsBuildResult.directives;
      vnodeDirectives = directives && directives.length ? createArrayExpression(directives.map(function (dir) {
        return buildDirectiveArgs(dir, context);
      })) : undefined;

      if (propsBuildResult.shouldUseBlock) {
        shouldUseBlock = true;
      }
    } // children


    if (node.children.length > 0) {
      if (vnodeTag === KEEP_ALIVE) {
        // Although a built-in component, we compile KeepAlive with raw children
        // instead of slot functions so that it can be used inside Transition
        // or other Transition-wrapping HOCs.
        // To ensure correct updates with block optimizations, we need to:
        // 1. Force keep-alive into a block. This avoids its children being
        //    collected by a parent block.
        shouldUseBlock = true; // 2. Force keep-alive to always be updated, since it uses raw children.

        patchFlag |= 1024
        /* DYNAMIC_SLOTS */
        ;

        if ( true && node.children.length > 1) {
          context.onError(createCompilerError(45
          /* X_KEEP_ALIVE_INVALID_CHILDREN */
          , {
            start: node.children[0].loc.start,
            end: node.children[node.children.length - 1].loc.end,
            source: ''
          }));
        }
      }

      var shouldBuildAsSlots = isComponent && // Teleport is not a real component and has dedicated runtime handling
      vnodeTag !== TELEPORT && // explained above.
      vnodeTag !== KEEP_ALIVE;

      if (shouldBuildAsSlots) {
        var _buildSlots = buildSlots(node, context),
            slots = _buildSlots.slots,
            hasDynamicSlots = _buildSlots.hasDynamicSlots;

        vnodeChildren = slots;

        if (hasDynamicSlots) {
          patchFlag |= 1024
          /* DYNAMIC_SLOTS */
          ;
        }
      } else if (node.children.length === 1 && vnodeTag !== TELEPORT) {
        var child = node.children[0];
        var type = child.type; // check for dynamic text children

        var hasDynamicTextChild = type === 5
        /* INTERPOLATION */
        || type === 8
        /* COMPOUND_EXPRESSION */
        ;

        if (hasDynamicTextChild && getConstantType(child, context) === 0
        /* NOT_CONSTANT */
        ) {
          patchFlag |= 1
          /* TEXT */
          ;
        } // pass directly if the only child is a text node
        // (plain / interpolation / expression)


        if (hasDynamicTextChild || type === 2
        /* TEXT */
        ) {
          vnodeChildren = child;
        } else {
          vnodeChildren = node.children;
        }
      } else {
        vnodeChildren = node.children;
      }
    } // patchFlag & dynamicPropNames


    if (patchFlag !== 0) {
      if (true) {
        if (patchFlag < 0) {
          // special flags (negative and mutually exclusive)
          vnodePatchFlag = patchFlag + " /* ".concat(_vue_shared__WEBPACK_IMPORTED_MODULE_0__.PatchFlagNames[patchFlag], " */");
        } else {
          // bitwise flags
          var flagNames = Object.keys(_vue_shared__WEBPACK_IMPORTED_MODULE_0__.PatchFlagNames).map(Number).filter(function (n) {
            return n > 0 && patchFlag & n;
          }).map(function (n) {
            return _vue_shared__WEBPACK_IMPORTED_MODULE_0__.PatchFlagNames[n];
          }).join(", ");
          vnodePatchFlag = patchFlag + " /* ".concat(flagNames, " */");
        }
      } else {}

      if (dynamicPropNames && dynamicPropNames.length) {
        vnodeDynamicProps = stringifyDynamicPropNames(dynamicPropNames);
      }
    }

    node.codegenNode = createVNodeCall(context, vnodeTag, vnodeProps, vnodeChildren, vnodePatchFlag, vnodeDynamicProps, vnodeDirectives, !!shouldUseBlock, false
    /* disableTracking */
    , isComponent, node.loc);
  };
};

function resolveComponentType(node, context) {
  var ssr = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var tag = node.tag; // 1. dynamic component

  var isExplicitDynamic = isComponentTag(tag);
  var isProp = findProp(node, 'is');

  if (isProp) {
    if (isExplicitDynamic || isCompatEnabled("COMPILER_IS_ON_ELEMENT"
    /* COMPILER_IS_ON_ELEMENT */
    , context)) {
      var exp = isProp.type === 6
      /* ATTRIBUTE */
      ? isProp.value && createSimpleExpression(isProp.value.content, true) : isProp.exp;

      if (exp) {
        return createCallExpression(context.helper(RESOLVE_DYNAMIC_COMPONENT), [exp]);
      }
    } else if (isProp.type === 6
    /* ATTRIBUTE */
    && isProp.value.content.startsWith('vue:')) {
      // <button is="vue:xxx">
      // if not <component>, only is value that starts with "vue:" will be
      // treated as component by the parse phase and reach here, unless it's
      // compat mode where all is values are considered components
      tag = isProp.value.content.slice(4);
    }
  } // 1.5 v-is (TODO: Deprecate)


  var isDir = !isExplicitDynamic && findDir(node, 'is');

  if (isDir && isDir.exp) {
    return createCallExpression(context.helper(RESOLVE_DYNAMIC_COMPONENT), [isDir.exp]);
  } // 2. built-in components (Teleport, Transition, KeepAlive, Suspense...)


  var builtIn = isCoreComponent(tag) || context.isBuiltInComponent(tag);

  if (builtIn) {
    // built-ins are simply fallthroughs / have special handling during ssr
    // so we don't need to import their runtime equivalents
    if (!ssr) context.helper(builtIn);
    return builtIn;
  } // 5. user component (resolve)


  context.helper(RESOLVE_COMPONENT);
  context.components.add(tag);
  return toValidAssetId(tag, "component");
}

function buildProps(node, context) {
  var props = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : node.props;
  var isComponent = arguments.length > 3 ? arguments[3] : undefined;
  var isDynamicComponent = arguments.length > 4 ? arguments[4] : undefined;
  var ssr = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
  var tag = node.tag,
      elementLoc = node.loc,
      children = node.children;
  var properties = [];
  var mergeArgs = [];
  var runtimeDirectives = [];
  var hasChildren = children.length > 0;
  var shouldUseBlock = false; // patchFlag analysis

  var patchFlag = 0;
  var hasRef = false;
  var hasClassBinding = false;
  var hasStyleBinding = false;
  var hasHydrationEventBinding = false;
  var hasDynamicKeys = false;
  var hasVnodeHook = false;
  var dynamicPropNames = [];

  var analyzePatchFlag = function analyzePatchFlag(_ref7) {
    var key = _ref7.key,
        value = _ref7.value;

    if (isStaticExp(key)) {
      var name = key.content;
      var isEventHandler = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isOn)(name);

      if (isEventHandler && (!isComponent || isDynamicComponent) && // omit the flag for click handlers because hydration gives click
      // dedicated fast path.
      name.toLowerCase() !== 'onclick' && // omit v-model handlers
      name !== 'onUpdate:modelValue' && // omit onVnodeXXX hooks
      !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isReservedProp)(name)) {
        hasHydrationEventBinding = true;
      }

      if (isEventHandler && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isReservedProp)(name)) {
        hasVnodeHook = true;
      }

      if (value.type === 20
      /* JS_CACHE_EXPRESSION */
      || (value.type === 4
      /* SIMPLE_EXPRESSION */
      || value.type === 8
      /* COMPOUND_EXPRESSION */
      ) && getConstantType(value, context) > 0) {
        // skip if the prop is a cached handler or has constant value
        return;
      }

      if (name === 'ref') {
        hasRef = true;
      } else if (name === 'class') {
        hasClassBinding = true;
      } else if (name === 'style') {
        hasStyleBinding = true;
      } else if (name !== 'key' && !dynamicPropNames.includes(name)) {
        dynamicPropNames.push(name);
      } // treat the dynamic class and style binding of the component as dynamic props


      if (isComponent && (name === 'class' || name === 'style') && !dynamicPropNames.includes(name)) {
        dynamicPropNames.push(name);
      }
    } else {
      hasDynamicKeys = true;
    }
  };

  for (var i = 0; i < props.length; i++) {
    // static attribute
    var prop = props[i];

    if (prop.type === 6
    /* ATTRIBUTE */
    ) {
      var loc = prop.loc,
          name = prop.name,
          value = prop.value;
      var isStatic = true;

      if (name === 'ref') {
        hasRef = true;

        if (context.scopes.vFor > 0) {
          properties.push(createObjectProperty(createSimpleExpression('ref_for', true), createSimpleExpression('true')));
        }
      } // skip is on <component>, or is="vue:xxx"


      if (name === 'is' && (isComponentTag(tag) || value && value.content.startsWith('vue:') || isCompatEnabled("COMPILER_IS_ON_ELEMENT"
      /* COMPILER_IS_ON_ELEMENT */
      , context))) {
        continue;
      }

      properties.push(createObjectProperty(createSimpleExpression(name, true, getInnerRange(loc, 0, name.length)), createSimpleExpression(value ? value.content : '', isStatic, value ? value.loc : loc)));
    } else {
      // directives
      var _name = prop.name,
          arg = prop.arg,
          exp = prop.exp,
          _loc2 = prop.loc;
      var isVBind = _name === 'bind';
      var isVOn = _name === 'on'; // skip v-slot - it is handled by its dedicated transform.

      if (_name === 'slot') {
        if (!isComponent) {
          context.onError(createCompilerError(40
          /* X_V_SLOT_MISPLACED */
          , _loc2));
        }

        continue;
      } // skip v-once/v-memo - they are handled by dedicated transforms.


      if (_name === 'once' || _name === 'memo') {
        continue;
      } // skip v-is and :is on <component>


      if (_name === 'is' || isVBind && isStaticArgOf(arg, 'is') && (isComponentTag(tag) || isCompatEnabled("COMPILER_IS_ON_ELEMENT"
      /* COMPILER_IS_ON_ELEMENT */
      , context))) {
        continue;
      } // skip v-on in SSR compilation


      if (isVOn && ssr) {
        continue;
      }

      if ( // #938: elements with dynamic keys should be forced into blocks
      isVBind && isStaticArgOf(arg, 'key') || // inline before-update hooks need to force block so that it is invoked
      // before children
      isVOn && hasChildren && isStaticArgOf(arg, 'vue:before-update')) {
        shouldUseBlock = true;
      }

      if (isVBind && isStaticArgOf(arg, 'ref') && context.scopes.vFor > 0) {
        properties.push(createObjectProperty(createSimpleExpression('ref_for', true), createSimpleExpression('true')));
      } // special case for v-bind and v-on with no argument


      if (!arg && (isVBind || isVOn)) {
        hasDynamicKeys = true;

        if (exp) {
          if (properties.length) {
            mergeArgs.push(createObjectExpression(dedupeProperties(properties), elementLoc));
            properties = [];
          }

          if (isVBind) {
            {
              // 2.x v-bind object order compat
              if (true) {
                var hasOverridableKeys = mergeArgs.some(function (arg) {
                  if (arg.type === 15
                  /* JS_OBJECT_EXPRESSION */
                  ) {
                    return arg.properties.some(function (_ref8) {
                      var key = _ref8.key;

                      if (key.type !== 4
                      /* SIMPLE_EXPRESSION */
                      || !key.isStatic) {
                        return true;
                      }

                      return key.content !== 'class' && key.content !== 'style' && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isOn)(key.content);
                    });
                  } else {
                    // dynamic expression
                    return true;
                  }
                });

                if (hasOverridableKeys) {
                  checkCompatEnabled("COMPILER_V_BIND_OBJECT_ORDER"
                  /* COMPILER_V_BIND_OBJECT_ORDER */
                  , context, _loc2);
                }
              }

              if (isCompatEnabled("COMPILER_V_BIND_OBJECT_ORDER"
              /* COMPILER_V_BIND_OBJECT_ORDER */
              , context)) {
                mergeArgs.unshift(exp);
                continue;
              }
            }
            mergeArgs.push(exp);
          } else {
            // v-on="obj" -> toHandlers(obj)
            mergeArgs.push({
              type: 14
              /* JS_CALL_EXPRESSION */
              ,
              loc: _loc2,
              callee: context.helper(TO_HANDLERS),
              arguments: [exp]
            });
          }
        } else {
          context.onError(createCompilerError(isVBind ? 34
          /* X_V_BIND_NO_EXPRESSION */
          : 35
          /* X_V_ON_NO_EXPRESSION */
          , _loc2));
        }

        continue;
      }

      var directiveTransform = context.directiveTransforms[_name];

      if (directiveTransform) {
        var _properties;

        // has built-in directive transform.
        var _directiveTransform = directiveTransform(prop, node, context),
            _props = _directiveTransform.props,
            needRuntime = _directiveTransform.needRuntime;

        !ssr && _props.forEach(analyzePatchFlag);

        (_properties = properties).push.apply(_properties, _toConsumableArray(_props));

        if (needRuntime) {
          runtimeDirectives.push(prop);

          if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isSymbol)(needRuntime)) {
            directiveImportMap.set(prop, needRuntime);
          }
        }
      } else if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isBuiltInDirective)(_name)) {
        // no built-in transform, this is a user custom directive.
        runtimeDirectives.push(prop); // custom dirs may use beforeUpdate so they need to force blocks
        // to ensure before-update gets called before children update

        if (hasChildren) {
          shouldUseBlock = true;
        }
      }
    }
  }

  var propsExpression = undefined; // has v-bind="object" or v-on="object", wrap with mergeProps

  if (mergeArgs.length) {
    if (properties.length) {
      mergeArgs.push(createObjectExpression(dedupeProperties(properties), elementLoc));
    }

    if (mergeArgs.length > 1) {
      propsExpression = createCallExpression(context.helper(MERGE_PROPS), mergeArgs, elementLoc);
    } else {
      // single v-bind with nothing else - no need for a mergeProps call
      propsExpression = mergeArgs[0];
    }
  } else if (properties.length) {
    propsExpression = createObjectExpression(dedupeProperties(properties), elementLoc);
  } // patchFlag analysis


  if (hasDynamicKeys) {
    patchFlag |= 16
    /* FULL_PROPS */
    ;
  } else {
    if (hasClassBinding && !isComponent) {
      patchFlag |= 2
      /* CLASS */
      ;
    }

    if (hasStyleBinding && !isComponent) {
      patchFlag |= 4
      /* STYLE */
      ;
    }

    if (dynamicPropNames.length) {
      patchFlag |= 8
      /* PROPS */
      ;
    }

    if (hasHydrationEventBinding) {
      patchFlag |= 32
      /* HYDRATE_EVENTS */
      ;
    }
  }

  if (!shouldUseBlock && (patchFlag === 0 || patchFlag === 32
  /* HYDRATE_EVENTS */
  ) && (hasRef || hasVnodeHook || runtimeDirectives.length > 0)) {
    patchFlag |= 512
    /* NEED_PATCH */
    ;
  } // pre-normalize props, SSR is skipped for now


  if (!context.inSSR && propsExpression) {
    switch (propsExpression.type) {
      case 15
      /* JS_OBJECT_EXPRESSION */
      :
        // means that there is no v-bind,
        // but still need to deal with dynamic key binding
        var classKeyIndex = -1;
        var styleKeyIndex = -1;
        var hasDynamicKey = false;

        for (var _i8 = 0; _i8 < propsExpression.properties.length; _i8++) {
          var key = propsExpression.properties[_i8].key;

          if (isStaticExp(key)) {
            if (key.content === 'class') {
              classKeyIndex = _i8;
            } else if (key.content === 'style') {
              styleKeyIndex = _i8;
            }
          } else if (!key.isHandlerKey) {
            hasDynamicKey = true;
          }
        }

        var classProp = propsExpression.properties[classKeyIndex];
        var styleProp = propsExpression.properties[styleKeyIndex]; // no dynamic key

        if (!hasDynamicKey) {
          if (classProp && !isStaticExp(classProp.value)) {
            classProp.value = createCallExpression(context.helper(NORMALIZE_CLASS), [classProp.value]);
          }

          if (styleProp && ( // the static style is compiled into an object,
          // so use `hasStyleBinding` to ensure that it is a dynamic style binding
          hasStyleBinding || styleProp.value.type === 4
          /* SIMPLE_EXPRESSION */
          && styleProp.value.content.trim()[0] === "[" || // v-bind:style and style both exist,
          // v-bind:style with static literal object
          styleProp.value.type === 17
          /* JS_ARRAY_EXPRESSION */
          )) {
            styleProp.value = createCallExpression(context.helper(NORMALIZE_STYLE), [styleProp.value]);
          }
        } else {
          // dynamic key binding, wrap with `normalizeProps`
          propsExpression = createCallExpression(context.helper(NORMALIZE_PROPS), [propsExpression]);
        }

        break;

      case 14
      /* JS_CALL_EXPRESSION */
      :
        // mergeProps call, do nothing
        break;

      default:
        // single v-bind
        propsExpression = createCallExpression(context.helper(NORMALIZE_PROPS), [createCallExpression(context.helper(GUARD_REACTIVE_PROPS), [propsExpression])]);
        break;
    }
  }

  return {
    props: propsExpression,
    directives: runtimeDirectives,
    patchFlag: patchFlag,
    dynamicPropNames: dynamicPropNames,
    shouldUseBlock: shouldUseBlock
  };
} // Dedupe props in an object literal.
// Literal duplicated attributes would have been warned during the parse phase,
// however, it's possible to encounter duplicated `onXXX` handlers with different
// modifiers. We also need to merge static and dynamic class / style attributes.
// - onXXX handlers / style: merge into array
// - class: merge into single expression with concatenation


function dedupeProperties(properties) {
  var knownProps = new Map();
  var deduped = [];

  for (var i = 0; i < properties.length; i++) {
    var prop = properties[i]; // dynamic keys are always allowed

    if (prop.key.type === 8
    /* COMPOUND_EXPRESSION */
    || !prop.key.isStatic) {
      deduped.push(prop);
      continue;
    }

    var name = prop.key.content;
    var existing = knownProps.get(name);

    if (existing) {
      if (name === 'style' || name === 'class' || (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isOn)(name)) {
        mergeAsArray(existing, prop);
      } // unexpected duplicate, should have emitted error during parse

    } else {
      knownProps.set(name, prop);
      deduped.push(prop);
    }
  }

  return deduped;
}

function mergeAsArray(existing, incoming) {
  if (existing.value.type === 17
  /* JS_ARRAY_EXPRESSION */
  ) {
    existing.value.elements.push(incoming.value);
  } else {
    existing.value = createArrayExpression([existing.value, incoming.value], existing.loc);
  }
}

function buildDirectiveArgs(dir, context) {
  var dirArgs = [];
  var runtime = directiveImportMap.get(dir);

  if (runtime) {
    // built-in directive with runtime
    dirArgs.push(context.helperString(runtime));
  } else {
    {
      // inject statement for resolving directive
      context.helper(RESOLVE_DIRECTIVE);
      context.directives.add(dir.name);
      dirArgs.push(toValidAssetId(dir.name, "directive"));
    }
  }

  var loc = dir.loc;
  if (dir.exp) dirArgs.push(dir.exp);

  if (dir.arg) {
    if (!dir.exp) {
      dirArgs.push("void 0");
    }

    dirArgs.push(dir.arg);
  }

  if (Object.keys(dir.modifiers).length) {
    if (!dir.arg) {
      if (!dir.exp) {
        dirArgs.push("void 0");
      }

      dirArgs.push("void 0");
    }

    var trueExpression = createSimpleExpression("true", false, loc);
    dirArgs.push(createObjectExpression(dir.modifiers.map(function (modifier) {
      return createObjectProperty(modifier, trueExpression);
    }), loc));
  }

  return createArrayExpression(dirArgs, dir.loc);
}

function stringifyDynamicPropNames(props) {
  var propsNamesString = "[";

  for (var i = 0, l = props.length; i < l; i++) {
    propsNamesString += JSON.stringify(props[i]);
    if (i < l - 1) propsNamesString += ', ';
  }

  return propsNamesString + "]";
}

function isComponentTag(tag) {
  return tag === 'component' || tag === 'Component';
}

 true ? Object.freeze({}) : 0;
 true ? Object.freeze([]) : 0;

var cacheStringFunction = function cacheStringFunction(fn) {
  var cache = Object.create(null);
  return function (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
};

var camelizeRE = /-(\w)/g;
/**
 * @private
 */

var camelize = cacheStringFunction(function (str) {
  return str.replace(camelizeRE, function (_, c) {
    return c ? c.toUpperCase() : '';
  });
});

var transformSlotOutlet = function transformSlotOutlet(node, context) {
  if (isSlotOutlet(node)) {
    var children = node.children,
        loc = node.loc;

    var _processSlotOutlet = processSlotOutlet(node, context),
        slotName = _processSlotOutlet.slotName,
        slotProps = _processSlotOutlet.slotProps;

    var slotArgs = [context.prefixIdentifiers ? "_ctx.$slots" : "$slots", slotName, '{}', 'undefined', 'true'];
    var expectedLen = 2;

    if (slotProps) {
      slotArgs[2] = slotProps;
      expectedLen = 3;
    }

    if (children.length) {
      slotArgs[3] = createFunctionExpression([], children, false, false, loc);
      expectedLen = 4;
    }

    if (context.scopeId && !context.slotted) {
      expectedLen = 5;
    }

    slotArgs.splice(expectedLen); // remove unused arguments

    node.codegenNode = createCallExpression(context.helper(RENDER_SLOT), slotArgs, loc);
  }
};

function processSlotOutlet(node, context) {
  var slotName = "\"default\"";
  var slotProps = undefined;
  var nonNameProps = [];

  for (var i = 0; i < node.props.length; i++) {
    var p = node.props[i];

    if (p.type === 6
    /* ATTRIBUTE */
    ) {
      if (p.value) {
        if (p.name === 'name') {
          slotName = JSON.stringify(p.value.content);
        } else {
          p.name = camelize(p.name);
          nonNameProps.push(p);
        }
      }
    } else {
      if (p.name === 'bind' && isStaticArgOf(p.arg, 'name')) {
        if (p.exp) slotName = p.exp;
      } else {
        if (p.name === 'bind' && p.arg && isStaticExp(p.arg)) {
          p.arg.content = camelize(p.arg.content);
        }

        nonNameProps.push(p);
      }
    }
  }

  if (nonNameProps.length > 0) {
    var _buildProps = buildProps(node, context, nonNameProps, false, false),
        props = _buildProps.props,
        directives = _buildProps.directives;

    slotProps = props;

    if (directives.length) {
      context.onError(createCompilerError(36
      /* X_V_SLOT_UNEXPECTED_DIRECTIVE_ON_SLOT_OUTLET */
      , directives[0].loc));
    }
  }

  return {
    slotName: slotName,
    slotProps: slotProps
  };
}

var fnExpRE = /^\s*([\w$_]+|(async\s*)?\([^)]*?\))\s*=>|^\s*(async\s+)?function(?:\s+[\w$]+)?\s*\(/;

var transformOn = function transformOn(dir, node, context, augmentor) {
  var loc = dir.loc,
      modifiers = dir.modifiers,
      arg = dir.arg;

  if (!dir.exp && !modifiers.length) {
    context.onError(createCompilerError(35
    /* X_V_ON_NO_EXPRESSION */
    , loc));
  }

  var eventName;

  if (arg.type === 4
  /* SIMPLE_EXPRESSION */
  ) {
    if (arg.isStatic) {
      var rawName = arg.content; // TODO deprecate @vnodeXXX usage

      if (rawName.startsWith('vue:')) {
        rawName = "vnode-".concat(rawName.slice(4));
      } // for all event listeners, auto convert it to camelCase. See issue #2249


      eventName = createSimpleExpression((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.toHandlerKey)((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.camelize)(rawName)), true, arg.loc);
    } else {
      // #2388
      eventName = createCompoundExpression(["".concat(context.helperString(TO_HANDLER_KEY), "("), arg, ")"]);
    }
  } else {
    // already a compound expression.
    eventName = arg;
    eventName.children.unshift("".concat(context.helperString(TO_HANDLER_KEY), "("));
    eventName.children.push(")");
  } // handler processing


  var exp = dir.exp;

  if (exp && !exp.content.trim()) {
    exp = undefined;
  }

  var shouldCache = context.cacheHandlers && !exp && !context.inVOnce;

  if (exp) {
    var isMemberExp = isMemberExpression(exp.content);
    var isInlineStatement = !(isMemberExp || fnExpRE.test(exp.content));
    var hasMultipleStatements = exp.content.includes(";");

    if (true) {
      validateBrowserExpression(exp, context, false, hasMultipleStatements);
    }

    if (isInlineStatement || shouldCache && isMemberExp) {
      // wrap inline statement in a function expression
      exp = createCompoundExpression(["".concat(isInlineStatement ? "$event" : "".concat("", "(...args)"), " => ").concat(hasMultipleStatements ? "{" : "("), exp, hasMultipleStatements ? "}" : ")"]);
    }
  }

  var ret = {
    props: [createObjectProperty(eventName, exp || createSimpleExpression("() => {}", false, loc))]
  }; // apply extended compiler augmentor

  if (augmentor) {
    ret = augmentor(ret);
  }

  if (shouldCache) {
    // cache handlers so that it's always the same handler being passed down.
    // this avoids unnecessary re-renders when users use inline handlers on
    // components.
    ret.props[0].value = context.cache(ret.props[0].value);
  } // mark the key as handler for props normalization check


  ret.props.forEach(function (p) {
    return p.key.isHandlerKey = true;
  });
  return ret;
}; // v-bind without arg is handled directly in ./transformElements.ts due to it affecting
// codegen for the entire props object. This transform here is only for v-bind
// *with* args.


var transformBind = function transformBind(dir, _node, context) {
  var exp = dir.exp,
      modifiers = dir.modifiers,
      loc = dir.loc;
  var arg = dir.arg;

  if (arg.type !== 4
  /* SIMPLE_EXPRESSION */
  ) {
    arg.children.unshift("(");
    arg.children.push(") || \"\"");
  } else if (!arg.isStatic) {
    arg.content = "".concat(arg.content, " || \"\"");
  } // .sync is replaced by v-model:arg


  if (modifiers.includes('camel')) {
    if (arg.type === 4
    /* SIMPLE_EXPRESSION */
    ) {
      if (arg.isStatic) {
        arg.content = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.camelize)(arg.content);
      } else {
        arg.content = "".concat(context.helperString(CAMELIZE), "(").concat(arg.content, ")");
      }
    } else {
      arg.children.unshift("".concat(context.helperString(CAMELIZE), "("));
      arg.children.push(")");
    }
  }

  if (!context.inSSR) {
    if (modifiers.includes('prop')) {
      injectPrefix(arg, '.');
    }

    if (modifiers.includes('attr')) {
      injectPrefix(arg, '^');
    }
  }

  if (!exp || exp.type === 4
  /* SIMPLE_EXPRESSION */
  && !exp.content.trim()) {
    context.onError(createCompilerError(34
    /* X_V_BIND_NO_EXPRESSION */
    , loc));
    return {
      props: [createObjectProperty(arg, createSimpleExpression('', true, loc))]
    };
  }

  return {
    props: [createObjectProperty(arg, exp)]
  };
};

var injectPrefix = function injectPrefix(arg, prefix) {
  if (arg.type === 4
  /* SIMPLE_EXPRESSION */
  ) {
    if (arg.isStatic) {
      arg.content = prefix + arg.content;
    } else {
      arg.content = "`".concat(prefix, "${").concat(arg.content, "}`");
    }
  } else {
    arg.children.unshift("'".concat(prefix, "' + ("));
    arg.children.push(")");
  }
}; // Merge adjacent text nodes and expressions into a single expression
// e.g. <div>abc {{ d }} {{ e }}</div> should have a single expression node as child.


var transformText = function transformText(node, context) {
  if (node.type === 0
  /* ROOT */
  || node.type === 1
  /* ELEMENT */
  || node.type === 11
  /* FOR */
  || node.type === 10
  /* IF_BRANCH */
  ) {
    // perform the transform on node exit so that all expressions have already
    // been processed.
    return function () {
      var children = node.children;
      var currentContainer = undefined;
      var hasText = false;

      for (var i = 0; i < children.length; i++) {
        var child = children[i];

        if (isText(child)) {
          hasText = true;

          for (var j = i + 1; j < children.length; j++) {
            var next = children[j];

            if (isText(next)) {
              if (!currentContainer) {
                currentContainer = children[i] = createCompoundExpression([child], child.loc);
              } // merge adjacent text node into current


              currentContainer.children.push(" + ", next);
              children.splice(j, 1);
              j--;
            } else {
              currentContainer = undefined;
              break;
            }
          }
        }
      }

      if (!hasText || // if this is a plain element with a single text child, leave it
      // as-is since the runtime has dedicated fast path for this by directly
      // setting textContent of the element.
      // for component root it's always normalized anyway.
      children.length === 1 && (node.type === 0
      /* ROOT */
      || node.type === 1
      /* ELEMENT */
      && node.tagType === 0
      /* ELEMENT */
      && // #3756
      // custom directives can potentially add DOM elements arbitrarily,
      // we need to avoid setting textContent of the element at runtime
      // to avoid accidentally overwriting the DOM elements added
      // by the user through custom directives.
      !node.props.find(function (p) {
        return p.type === 7
        /* DIRECTIVE */
        && !context.directiveTransforms[p.name];
      }) && // in compat mode, <template> tags with no special directives
      // will be rendered as a fragment so its children must be
      // converted into vnodes.
      !(node.tag === 'template'))) {
        return;
      } // pre-convert text nodes into createTextVNode(text) calls to avoid
      // runtime normalization.


      for (var _i9 = 0; _i9 < children.length; _i9++) {
        var _child = children[_i9];

        if (isText(_child) || _child.type === 8
        /* COMPOUND_EXPRESSION */
        ) {
          var callArgs = []; // createTextVNode defaults to single whitespace, so if it is a
          // single space the code could be an empty call to save bytes.

          if (_child.type !== 2
          /* TEXT */
          || _child.content !== ' ') {
            callArgs.push(_child);
          } // mark dynamic text with flag so it gets patched inside a block


          if (!context.ssr && getConstantType(_child, context) === 0
          /* NOT_CONSTANT */
          ) {
            callArgs.push(1
            /* TEXT */
            + ( true ? " /* ".concat(_vue_shared__WEBPACK_IMPORTED_MODULE_0__.PatchFlagNames[1], " */") : 0));
          }

          children[_i9] = {
            type: 12
            /* TEXT_CALL */
            ,
            content: _child,
            loc: _child.loc,
            codegenNode: createCallExpression(context.helper(CREATE_TEXT), callArgs)
          };
        }
      }
    };
  }
};

var seen = new WeakSet();

var transformOnce = function transformOnce(node, context) {
  if (node.type === 1
  /* ELEMENT */
  && findDir(node, 'once', true)) {
    if (seen.has(node) || context.inVOnce) {
      return;
    }

    seen.add(node);
    context.inVOnce = true;
    context.helper(SET_BLOCK_TRACKING);
    return function () {
      context.inVOnce = false;
      var cur = context.currentNode;

      if (cur.codegenNode) {
        cur.codegenNode = context.cache(cur.codegenNode, true
        /* isVNode */
        );
      }
    };
  }
};

var transformModel = function transformModel(dir, node, context) {
  var exp = dir.exp,
      arg = dir.arg;

  if (!exp) {
    context.onError(createCompilerError(41
    /* X_V_MODEL_NO_EXPRESSION */
    , dir.loc));
    return createTransformProps();
  }

  var rawExp = exp.loc.source;
  var expString = exp.type === 4
  /* SIMPLE_EXPRESSION */
  ? exp.content : rawExp; // im SFC <script setup> inline mode, the exp may have been transformed into
  // _unref(exp)

  context.bindingMetadata[rawExp];
  var maybeRef = !true
  /* SETUP_CONST */
  ;

  if (!expString.trim() || !isMemberExpression(expString) && !maybeRef) {
    context.onError(createCompilerError(42
    /* X_V_MODEL_MALFORMED_EXPRESSION */
    , exp.loc));
    return createTransformProps();
  }

  var propName = arg ? arg : createSimpleExpression('modelValue', true);
  var eventName = arg ? isStaticExp(arg) ? "onUpdate:".concat(arg.content) : createCompoundExpression(['"onUpdate:" + ', arg]) : "onUpdate:modelValue";
  var assignmentExp;
  var eventArg = context.isTS ? "($event: any)" : "$event";
  {
    assignmentExp = createCompoundExpression(["".concat(eventArg, " => (("), exp, ") = $event)"]);
  }
  var props = [// modelValue: foo
  createObjectProperty(propName, dir.exp), // "onUpdate:modelValue": $event => (foo = $event)
  createObjectProperty(eventName, assignmentExp)]; // modelModifiers: { foo: true, "bar-baz": true }

  if (dir.modifiers.length && node.tagType === 1
  /* COMPONENT */
  ) {
    var modifiers = dir.modifiers.map(function (m) {
      return (isSimpleIdentifier(m) ? m : JSON.stringify(m)) + ": true";
    }).join(", ");
    var modifiersKey = arg ? isStaticExp(arg) ? "".concat(arg.content, "Modifiers") : createCompoundExpression([arg, ' + "Modifiers"']) : "modelModifiers";
    props.push(createObjectProperty(modifiersKey, createSimpleExpression("{ ".concat(modifiers, " }"), false, dir.loc, 2
    /* CAN_HOIST */
    )));
  }

  return createTransformProps(props);
};

function createTransformProps() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return {
    props: props
  };
}

var validDivisionCharRE = /[\w).+\-_$\]]/;

var transformFilter = function transformFilter(node, context) {
  if (!isCompatEnabled("COMPILER_FILTER"
  /* COMPILER_FILTERS */
  , context)) {
    return;
  }

  if (node.type === 5
  /* INTERPOLATION */
  ) {
    // filter rewrite is applied before expression transform so only
    // simple expressions are possible at this stage
    rewriteFilter(node.content, context);
  }

  if (node.type === 1
  /* ELEMENT */
  ) {
    node.props.forEach(function (prop) {
      if (prop.type === 7
      /* DIRECTIVE */
      && prop.name !== 'for' && prop.exp) {
        rewriteFilter(prop.exp, context);
      }
    });
  }
};

function rewriteFilter(node, context) {
  if (node.type === 4
  /* SIMPLE_EXPRESSION */
  ) {
    parseFilter(node, context);
  } else {
    for (var i = 0; i < node.children.length; i++) {
      var child = node.children[i];
      if (_typeof(child) !== 'object') continue;

      if (child.type === 4
      /* SIMPLE_EXPRESSION */
      ) {
        parseFilter(child, context);
      } else if (child.type === 8
      /* COMPOUND_EXPRESSION */
      ) {
        rewriteFilter(node, context);
      } else if (child.type === 5
      /* INTERPOLATION */
      ) {
        rewriteFilter(child.content, context);
      }
    }
  }
}

function parseFilter(node, context) {
  var exp = node.content;
  var inSingle = false;
  var inDouble = false;
  var inTemplateString = false;
  var inRegex = false;
  var curly = 0;
  var square = 0;
  var paren = 0;
  var lastFilterIndex = 0;
  var c,
      prev,
      i,
      expression,
      filters = [];

  for (i = 0; i < exp.length; i++) {
    prev = c;
    c = exp.charCodeAt(i);

    if (inSingle) {
      if (c === 0x27 && prev !== 0x5c) inSingle = false;
    } else if (inDouble) {
      if (c === 0x22 && prev !== 0x5c) inDouble = false;
    } else if (inTemplateString) {
      if (c === 0x60 && prev !== 0x5c) inTemplateString = false;
    } else if (inRegex) {
      if (c === 0x2f && prev !== 0x5c) inRegex = false;
    } else if (c === 0x7c && // pipe
    exp.charCodeAt(i + 1) !== 0x7c && exp.charCodeAt(i - 1) !== 0x7c && !curly && !square && !paren) {
      if (expression === undefined) {
        // first filter, end of expression
        lastFilterIndex = i + 1;
        expression = exp.slice(0, i).trim();
      } else {
        pushFilter();
      }
    } else {
      switch (c) {
        case 0x22:
          inDouble = true;
          break;
        // "

        case 0x27:
          inSingle = true;
          break;
        // '

        case 0x60:
          inTemplateString = true;
          break;
        // `

        case 0x28:
          paren++;
          break;
        // (

        case 0x29:
          paren--;
          break;
        // )

        case 0x5b:
          square++;
          break;
        // [

        case 0x5d:
          square--;
          break;
        // ]

        case 0x7b:
          curly++;
          break;
        // {

        case 0x7d:
          curly--;
          break;
        // }
      }

      if (c === 0x2f) {
        // /
        var j = i - 1;
        var p = void 0; // find first non-whitespace prev char

        for (; j >= 0; j--) {
          p = exp.charAt(j);
          if (p !== ' ') break;
        }

        if (!p || !validDivisionCharRE.test(p)) {
          inRegex = true;
        }
      }
    }
  }

  if (expression === undefined) {
    expression = exp.slice(0, i).trim();
  } else if (lastFilterIndex !== 0) {
    pushFilter();
  }

  function pushFilter() {
    filters.push(exp.slice(lastFilterIndex, i).trim());
    lastFilterIndex = i + 1;
  }

  if (filters.length) {
     true && warnDeprecation("COMPILER_FILTER"
    /* COMPILER_FILTERS */
    , context, node.loc);

    for (i = 0; i < filters.length; i++) {
      expression = wrapFilter(expression, filters[i], context);
    }

    node.content = expression;
  }
}

function wrapFilter(exp, filter, context) {
  context.helper(RESOLVE_FILTER);
  var i = filter.indexOf('(');

  if (i < 0) {
    context.filters.add(filter);
    return "".concat(toValidAssetId(filter, 'filter'), "(").concat(exp, ")");
  } else {
    var name = filter.slice(0, i);
    var args = filter.slice(i + 1);
    context.filters.add(name);
    return "".concat(toValidAssetId(name, 'filter'), "(").concat(exp).concat(args !== ')' ? ',' + args : args);
  }
}

var seen$1 = new WeakSet();

var transformMemo = function transformMemo(node, context) {
  if (node.type === 1
  /* ELEMENT */
  ) {
    var dir = findDir(node, 'memo');

    if (!dir || seen$1.has(node)) {
      return;
    }

    seen$1.add(node);
    return function () {
      var codegenNode = node.codegenNode || context.currentNode.codegenNode;

      if (codegenNode && codegenNode.type === 13
      /* VNODE_CALL */
      ) {
        // non-component sub tree should be turned into a block
        if (node.tagType !== 1
        /* COMPONENT */
        ) {
          makeBlock(codegenNode, context);
        }

        node.codegenNode = createCallExpression(context.helper(WITH_MEMO), [dir.exp, createFunctionExpression(undefined, codegenNode), "_cache", String(context.cached++)]);
      }
    };
  }
};

function getBaseTransformPreset(prefixIdentifiers) {
  return [[transformOnce, transformIf, transformMemo, transformFor].concat([transformFilter], _toConsumableArray( true ? [transformExpression] : 0), [transformSlotOutlet, transformElement, trackSlotScopes, transformText]), {
    on: transformOn,
    bind: transformBind,
    model: transformModel
  }];
} // we name it `baseCompile` so that higher order compilers like
// @vue/compiler-dom can export `compile` while re-exporting everything else.


function baseCompile(template) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var onError = options.onError || defaultOnError;
  var isModuleMode = options.mode === 'module';
  /* istanbul ignore if */

  {
    if (options.prefixIdentifiers === true) {
      onError(createCompilerError(46
      /* X_PREFIX_ID_NOT_SUPPORTED */
      ));
    } else if (isModuleMode) {
      onError(createCompilerError(47
      /* X_MODULE_MODE_NOT_SUPPORTED */
      ));
    }
  }
  var prefixIdentifiers = !true;

  if (options.cacheHandlers) {
    onError(createCompilerError(48
    /* X_CACHE_HANDLER_NOT_SUPPORTED */
    ));
  }

  if (options.scopeId && !isModuleMode) {
    onError(createCompilerError(49
    /* X_SCOPE_ID_NOT_SUPPORTED */
    ));
  }

  var ast = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isString)(template) ? baseParse(template, options) : template;

  var _getBaseTransformPres = getBaseTransformPreset(),
      _getBaseTransformPres2 = _slicedToArray(_getBaseTransformPres, 2),
      nodeTransforms = _getBaseTransformPres2[0],
      directiveTransforms = _getBaseTransformPres2[1];

  transform(ast, (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.extend)({}, options, {
    prefixIdentifiers: prefixIdentifiers,
    nodeTransforms: [].concat(_toConsumableArray(nodeTransforms), _toConsumableArray(options.nodeTransforms || [])),
    directiveTransforms: (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.extend)({}, directiveTransforms, options.directiveTransforms || {} // user transforms
    )
  }));
  return generate(ast, (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.extend)({}, options, {
    prefixIdentifiers: prefixIdentifiers
  }));
}

var noopDirectiveTransform = function noopDirectiveTransform() {
  return {
    props: []
  };
};



/***/ }),

/***/ "./node_modules/@vue/compiler-dom/dist/compiler-dom.esm-bundler.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@vue/compiler-dom/dist/compiler-dom.esm-bundler.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BASE_TRANSITION": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.BASE_TRANSITION),
/* harmony export */   "CAMELIZE": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.CAMELIZE),
/* harmony export */   "CAPITALIZE": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.CAPITALIZE),
/* harmony export */   "CREATE_BLOCK": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.CREATE_BLOCK),
/* harmony export */   "CREATE_COMMENT": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.CREATE_COMMENT),
/* harmony export */   "CREATE_ELEMENT_BLOCK": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.CREATE_ELEMENT_BLOCK),
/* harmony export */   "CREATE_ELEMENT_VNODE": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.CREATE_ELEMENT_VNODE),
/* harmony export */   "CREATE_SLOTS": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.CREATE_SLOTS),
/* harmony export */   "CREATE_STATIC": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.CREATE_STATIC),
/* harmony export */   "CREATE_TEXT": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.CREATE_TEXT),
/* harmony export */   "CREATE_VNODE": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.CREATE_VNODE),
/* harmony export */   "DOMDirectiveTransforms": () => (/* binding */ DOMDirectiveTransforms),
/* harmony export */   "DOMNodeTransforms": () => (/* binding */ DOMNodeTransforms),
/* harmony export */   "FRAGMENT": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.FRAGMENT),
/* harmony export */   "GUARD_REACTIVE_PROPS": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.GUARD_REACTIVE_PROPS),
/* harmony export */   "IS_MEMO_SAME": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.IS_MEMO_SAME),
/* harmony export */   "IS_REF": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.IS_REF),
/* harmony export */   "KEEP_ALIVE": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.KEEP_ALIVE),
/* harmony export */   "MERGE_PROPS": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.MERGE_PROPS),
/* harmony export */   "NORMALIZE_CLASS": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.NORMALIZE_CLASS),
/* harmony export */   "NORMALIZE_PROPS": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.NORMALIZE_PROPS),
/* harmony export */   "NORMALIZE_STYLE": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.NORMALIZE_STYLE),
/* harmony export */   "OPEN_BLOCK": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.OPEN_BLOCK),
/* harmony export */   "POP_SCOPE_ID": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.POP_SCOPE_ID),
/* harmony export */   "PUSH_SCOPE_ID": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.PUSH_SCOPE_ID),
/* harmony export */   "RENDER_LIST": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.RENDER_LIST),
/* harmony export */   "RENDER_SLOT": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.RENDER_SLOT),
/* harmony export */   "RESOLVE_COMPONENT": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.RESOLVE_COMPONENT),
/* harmony export */   "RESOLVE_DIRECTIVE": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.RESOLVE_DIRECTIVE),
/* harmony export */   "RESOLVE_DYNAMIC_COMPONENT": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.RESOLVE_DYNAMIC_COMPONENT),
/* harmony export */   "RESOLVE_FILTER": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.RESOLVE_FILTER),
/* harmony export */   "SET_BLOCK_TRACKING": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.SET_BLOCK_TRACKING),
/* harmony export */   "SUSPENSE": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.SUSPENSE),
/* harmony export */   "TELEPORT": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.TELEPORT),
/* harmony export */   "TO_DISPLAY_STRING": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.TO_DISPLAY_STRING),
/* harmony export */   "TO_HANDLERS": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.TO_HANDLERS),
/* harmony export */   "TO_HANDLER_KEY": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.TO_HANDLER_KEY),
/* harmony export */   "TRANSITION": () => (/* binding */ TRANSITION),
/* harmony export */   "TRANSITION_GROUP": () => (/* binding */ TRANSITION_GROUP),
/* harmony export */   "UNREF": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.UNREF),
/* harmony export */   "V_MODEL_CHECKBOX": () => (/* binding */ V_MODEL_CHECKBOX),
/* harmony export */   "V_MODEL_DYNAMIC": () => (/* binding */ V_MODEL_DYNAMIC),
/* harmony export */   "V_MODEL_RADIO": () => (/* binding */ V_MODEL_RADIO),
/* harmony export */   "V_MODEL_SELECT": () => (/* binding */ V_MODEL_SELECT),
/* harmony export */   "V_MODEL_TEXT": () => (/* binding */ V_MODEL_TEXT),
/* harmony export */   "V_ON_WITH_KEYS": () => (/* binding */ V_ON_WITH_KEYS),
/* harmony export */   "V_ON_WITH_MODIFIERS": () => (/* binding */ V_ON_WITH_MODIFIERS),
/* harmony export */   "V_SHOW": () => (/* binding */ V_SHOW),
/* harmony export */   "WITH_CTX": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.WITH_CTX),
/* harmony export */   "WITH_DIRECTIVES": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.WITH_DIRECTIVES),
/* harmony export */   "WITH_MEMO": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.WITH_MEMO),
/* harmony export */   "advancePositionWithClone": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.advancePositionWithClone),
/* harmony export */   "advancePositionWithMutation": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.advancePositionWithMutation),
/* harmony export */   "assert": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.assert),
/* harmony export */   "baseCompile": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.baseCompile),
/* harmony export */   "baseParse": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.baseParse),
/* harmony export */   "buildDirectiveArgs": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.buildDirectiveArgs),
/* harmony export */   "buildProps": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.buildProps),
/* harmony export */   "buildSlots": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.buildSlots),
/* harmony export */   "checkCompatEnabled": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.checkCompatEnabled),
/* harmony export */   "compile": () => (/* binding */ compile),
/* harmony export */   "createArrayExpression": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createArrayExpression),
/* harmony export */   "createAssignmentExpression": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createAssignmentExpression),
/* harmony export */   "createBlockStatement": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createBlockStatement),
/* harmony export */   "createCacheExpression": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createCacheExpression),
/* harmony export */   "createCallExpression": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createCallExpression),
/* harmony export */   "createCompilerError": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createCompilerError),
/* harmony export */   "createCompoundExpression": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createCompoundExpression),
/* harmony export */   "createConditionalExpression": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createConditionalExpression),
/* harmony export */   "createDOMCompilerError": () => (/* binding */ createDOMCompilerError),
/* harmony export */   "createForLoopParams": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createForLoopParams),
/* harmony export */   "createFunctionExpression": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createFunctionExpression),
/* harmony export */   "createIfStatement": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createIfStatement),
/* harmony export */   "createInterpolation": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createInterpolation),
/* harmony export */   "createObjectExpression": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createObjectExpression),
/* harmony export */   "createObjectProperty": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createObjectProperty),
/* harmony export */   "createReturnStatement": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createReturnStatement),
/* harmony export */   "createRoot": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createRoot),
/* harmony export */   "createSequenceExpression": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createSequenceExpression),
/* harmony export */   "createSimpleExpression": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createSimpleExpression),
/* harmony export */   "createStructuralDirectiveTransform": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createStructuralDirectiveTransform),
/* harmony export */   "createTemplateLiteral": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createTemplateLiteral),
/* harmony export */   "createTransformContext": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createTransformContext),
/* harmony export */   "createVNodeCall": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createVNodeCall),
/* harmony export */   "extractIdentifiers": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.extractIdentifiers),
/* harmony export */   "findDir": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.findDir),
/* harmony export */   "findProp": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.findProp),
/* harmony export */   "generate": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.generate),
/* harmony export */   "generateCodeFrame": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.generateCodeFrame),
/* harmony export */   "getBaseTransformPreset": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.getBaseTransformPreset),
/* harmony export */   "getConstantType": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.getConstantType),
/* harmony export */   "getInnerRange": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.getInnerRange),
/* harmony export */   "getMemoedVNodeCall": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.getMemoedVNodeCall),
/* harmony export */   "getVNodeBlockHelper": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.getVNodeBlockHelper),
/* harmony export */   "getVNodeHelper": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.getVNodeHelper),
/* harmony export */   "hasDynamicKeyVBind": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.hasDynamicKeyVBind),
/* harmony export */   "hasScopeRef": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.hasScopeRef),
/* harmony export */   "helperNameMap": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.helperNameMap),
/* harmony export */   "injectProp": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.injectProp),
/* harmony export */   "isBuiltInType": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.isBuiltInType),
/* harmony export */   "isCoreComponent": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.isCoreComponent),
/* harmony export */   "isFunctionType": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.isFunctionType),
/* harmony export */   "isInDestructureAssignment": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.isInDestructureAssignment),
/* harmony export */   "isMemberExpression": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.isMemberExpression),
/* harmony export */   "isMemberExpressionBrowser": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.isMemberExpressionBrowser),
/* harmony export */   "isMemberExpressionNode": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.isMemberExpressionNode),
/* harmony export */   "isReferencedIdentifier": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.isReferencedIdentifier),
/* harmony export */   "isSimpleIdentifier": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.isSimpleIdentifier),
/* harmony export */   "isSlotOutlet": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.isSlotOutlet),
/* harmony export */   "isStaticArgOf": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.isStaticArgOf),
/* harmony export */   "isStaticExp": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.isStaticExp),
/* harmony export */   "isStaticProperty": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.isStaticProperty),
/* harmony export */   "isStaticPropertyKey": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.isStaticPropertyKey),
/* harmony export */   "isTemplateNode": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.isTemplateNode),
/* harmony export */   "isText": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.isText),
/* harmony export */   "isVSlot": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.isVSlot),
/* harmony export */   "locStub": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.locStub),
/* harmony export */   "makeBlock": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.makeBlock),
/* harmony export */   "noopDirectiveTransform": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.noopDirectiveTransform),
/* harmony export */   "parse": () => (/* binding */ parse),
/* harmony export */   "parserOptions": () => (/* binding */ parserOptions),
/* harmony export */   "processExpression": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.processExpression),
/* harmony export */   "processFor": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.processFor),
/* harmony export */   "processIf": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.processIf),
/* harmony export */   "processSlotOutlet": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.processSlotOutlet),
/* harmony export */   "registerRuntimeHelpers": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.registerRuntimeHelpers),
/* harmony export */   "resolveComponentType": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.resolveComponentType),
/* harmony export */   "toValidAssetId": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.toValidAssetId),
/* harmony export */   "trackSlotScopes": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.trackSlotScopes),
/* harmony export */   "trackVForSlotScopes": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.trackVForSlotScopes),
/* harmony export */   "transform": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.transform),
/* harmony export */   "transformBind": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.transformBind),
/* harmony export */   "transformElement": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.transformElement),
/* harmony export */   "transformExpression": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.transformExpression),
/* harmony export */   "transformModel": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.transformModel),
/* harmony export */   "transformOn": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.transformOn),
/* harmony export */   "transformStyle": () => (/* binding */ transformStyle),
/* harmony export */   "traverseNode": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.traverseNode),
/* harmony export */   "walkBlockDeclarations": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.walkBlockDeclarations),
/* harmony export */   "walkFunctionParams": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.walkFunctionParams),
/* harmony export */   "walkIdentifiers": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.walkIdentifiers),
/* harmony export */   "warnDeprecation": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.warnDeprecation)
/* harmony export */ });
/* harmony import */ var _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue/compiler-core */ "./node_modules/@vue/compiler-core/dist/compiler-core.esm-bundler.js");
/* harmony import */ var _vue_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vue/shared */ "./node_modules/@vue/shared/dist/shared.esm-bundler.js");
var _registerRuntimeHelpe, _DOMErrorMessages;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var V_MODEL_RADIO = Symbol( true ? "vModelRadio" : 0);
var V_MODEL_CHECKBOX = Symbol( true ? "vModelCheckbox" : 0);
var V_MODEL_TEXT = Symbol( true ? "vModelText" : 0);
var V_MODEL_SELECT = Symbol( true ? "vModelSelect" : 0);
var V_MODEL_DYNAMIC = Symbol( true ? "vModelDynamic" : 0);
var V_ON_WITH_MODIFIERS = Symbol( true ? "vOnModifiersGuard" : 0);
var V_ON_WITH_KEYS = Symbol( true ? "vOnKeysGuard" : 0);
var V_SHOW = Symbol( true ? "vShow" : 0);
var TRANSITION = Symbol( true ? "Transition" : 0);
var TRANSITION_GROUP = Symbol( true ? "TransitionGroup" : 0);
(0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.registerRuntimeHelpers)((_registerRuntimeHelpe = {}, _defineProperty(_registerRuntimeHelpe, V_MODEL_RADIO, "vModelRadio"), _defineProperty(_registerRuntimeHelpe, V_MODEL_CHECKBOX, "vModelCheckbox"), _defineProperty(_registerRuntimeHelpe, V_MODEL_TEXT, "vModelText"), _defineProperty(_registerRuntimeHelpe, V_MODEL_SELECT, "vModelSelect"), _defineProperty(_registerRuntimeHelpe, V_MODEL_DYNAMIC, "vModelDynamic"), _defineProperty(_registerRuntimeHelpe, V_ON_WITH_MODIFIERS, "withModifiers"), _defineProperty(_registerRuntimeHelpe, V_ON_WITH_KEYS, "withKeys"), _defineProperty(_registerRuntimeHelpe, V_SHOW, "vShow"), _defineProperty(_registerRuntimeHelpe, TRANSITION, "Transition"), _defineProperty(_registerRuntimeHelpe, TRANSITION_GROUP, "TransitionGroup"), _registerRuntimeHelpe));
/* eslint-disable no-restricted-globals */

var decoder;

function decodeHtmlBrowser(raw) {
  var asAttr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (!decoder) {
    decoder = document.createElement('div');
  }

  if (asAttr) {
    decoder.innerHTML = "<div foo=\"".concat(raw.replace(/"/g, '&quot;'), "\">");
    return decoder.children[0].getAttribute('foo');
  } else {
    decoder.innerHTML = raw;
    return decoder.textContent;
  }
}

var isRawTextContainer = /*#__PURE__*/(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.makeMap)('style,iframe,script,noscript', true);
var parserOptions = {
  isVoidTag: _vue_shared__WEBPACK_IMPORTED_MODULE_1__.isVoidTag,
  isNativeTag: function isNativeTag(tag) {
    return (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isHTMLTag)(tag) || (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isSVGTag)(tag);
  },
  isPreTag: function isPreTag(tag) {
    return tag === 'pre';
  },
  decodeEntities: decodeHtmlBrowser,
  isBuiltInComponent: function isBuiltInComponent(tag) {
    if ((0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.isBuiltInType)(tag, "Transition")) {
      return TRANSITION;
    } else if ((0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.isBuiltInType)(tag, "TransitionGroup")) {
      return TRANSITION_GROUP;
    }
  },
  // https://html.spec.whatwg.org/multipage/parsing.html#tree-construction-dispatcher
  getNamespace: function getNamespace(tag, parent) {
    var ns = parent ? parent.ns : 0
    /* HTML */
    ;

    if (parent && ns === 2
    /* MATH_ML */
    ) {
      if (parent.tag === 'annotation-xml') {
        if (tag === 'svg') {
          return 1
          /* SVG */
          ;
        }

        if (parent.props.some(function (a) {
          return a.type === 6
          /* ATTRIBUTE */
          && a.name === 'encoding' && a.value != null && (a.value.content === 'text/html' || a.value.content === 'application/xhtml+xml');
        })) {
          ns = 0
          /* HTML */
          ;
        }
      } else if (/^m(?:[ions]|text)$/.test(parent.tag) && tag !== 'mglyph' && tag !== 'malignmark') {
        ns = 0
        /* HTML */
        ;
      }
    } else if (parent && ns === 1
    /* SVG */
    ) {
      if (parent.tag === 'foreignObject' || parent.tag === 'desc' || parent.tag === 'title') {
        ns = 0
        /* HTML */
        ;
      }
    }

    if (ns === 0
    /* HTML */
    ) {
      if (tag === 'svg') {
        return 1
        /* SVG */
        ;
      }

      if (tag === 'math') {
        return 2
        /* MATH_ML */
        ;
      }
    }

    return ns;
  },
  // https://html.spec.whatwg.org/multipage/parsing.html#parsing-html-fragments
  getTextMode: function getTextMode(_ref) {
    var tag = _ref.tag,
        ns = _ref.ns;

    if (ns === 0
    /* HTML */
    ) {
      if (tag === 'textarea' || tag === 'title') {
        return 1
        /* RCDATA */
        ;
      }

      if (isRawTextContainer(tag)) {
        return 2
        /* RAWTEXT */
        ;
      }
    }

    return 0
    /* DATA */
    ;
  }
}; // Parse inline CSS strings for static style attributes into an object.
// This is a NodeTransform since it works on the static `style` attribute and
// converts it into a dynamic equivalent:
// style="color: red" -> :style='{ "color": "red" }'
// It is then processed by `transformElement` and included in the generated
// props.

var transformStyle = function transformStyle(node) {
  if (node.type === 1
  /* ELEMENT */
  ) {
    node.props.forEach(function (p, i) {
      if (p.type === 6
      /* ATTRIBUTE */
      && p.name === 'style' && p.value) {
        // replace p with an expression node
        node.props[i] = {
          type: 7
          /* DIRECTIVE */
          ,
          name: "bind",
          arg: (0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createSimpleExpression)("style", true, p.loc),
          exp: parseInlineCSS(p.value.content, p.loc),
          modifiers: [],
          loc: p.loc
        };
      }
    });
  }
};

var parseInlineCSS = function parseInlineCSS(cssText, loc) {
  var normalized = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.parseStringStyle)(cssText);
  return (0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createSimpleExpression)(JSON.stringify(normalized), false, loc, 3
  /* CAN_STRINGIFY */
  );
};

function createDOMCompilerError(code, loc) {
  return (0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createCompilerError)(code, loc,  true ? DOMErrorMessages : 0);
}

var DOMErrorMessages = (_DOMErrorMessages = {}, _defineProperty(_DOMErrorMessages, 50
/* X_V_HTML_NO_EXPRESSION */
, "v-html is missing expression."), _defineProperty(_DOMErrorMessages, 51
/* X_V_HTML_WITH_CHILDREN */
, "v-html will override element children."), _defineProperty(_DOMErrorMessages, 52
/* X_V_TEXT_NO_EXPRESSION */
, "v-text is missing expression."), _defineProperty(_DOMErrorMessages, 53
/* X_V_TEXT_WITH_CHILDREN */
, "v-text will override element children."), _defineProperty(_DOMErrorMessages, 54
/* X_V_MODEL_ON_INVALID_ELEMENT */
, "v-model can only be used on <input>, <textarea> and <select> elements."), _defineProperty(_DOMErrorMessages, 55
/* X_V_MODEL_ARG_ON_ELEMENT */
, "v-model argument is not supported on plain elements."), _defineProperty(_DOMErrorMessages, 56
/* X_V_MODEL_ON_FILE_INPUT_ELEMENT */
, "v-model cannot be used on file inputs since they are read-only. Use a v-on:change listener instead."), _defineProperty(_DOMErrorMessages, 57
/* X_V_MODEL_UNNECESSARY_VALUE */
, "Unnecessary value binding used alongside v-model. It will interfere with v-model's behavior."), _defineProperty(_DOMErrorMessages, 58
/* X_V_SHOW_NO_EXPRESSION */
, "v-show is missing expression."), _defineProperty(_DOMErrorMessages, 59
/* X_TRANSITION_INVALID_CHILDREN */
, "<Transition> expects exactly one child element or component."), _defineProperty(_DOMErrorMessages, 60
/* X_IGNORED_SIDE_EFFECT_TAG */
, "Tags with side effect (<script> and <style>) are ignored in client component templates."), _DOMErrorMessages);

var transformVHtml = function transformVHtml(dir, node, context) {
  var exp = dir.exp,
      loc = dir.loc;

  if (!exp) {
    context.onError(createDOMCompilerError(50
    /* X_V_HTML_NO_EXPRESSION */
    , loc));
  }

  if (node.children.length) {
    context.onError(createDOMCompilerError(51
    /* X_V_HTML_WITH_CHILDREN */
    , loc));
    node.children.length = 0;
  }

  return {
    props: [(0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createObjectProperty)((0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createSimpleExpression)("innerHTML", true, loc), exp || (0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createSimpleExpression)('', true))]
  };
};

var transformVText = function transformVText(dir, node, context) {
  var exp = dir.exp,
      loc = dir.loc;

  if (!exp) {
    context.onError(createDOMCompilerError(52
    /* X_V_TEXT_NO_EXPRESSION */
    , loc));
  }

  if (node.children.length) {
    context.onError(createDOMCompilerError(53
    /* X_V_TEXT_WITH_CHILDREN */
    , loc));
    node.children.length = 0;
  }

  return {
    props: [(0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createObjectProperty)((0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createSimpleExpression)("textContent", true), exp ? (0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.getConstantType)(exp, context) > 0 ? exp : (0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createCallExpression)(context.helperString(_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.TO_DISPLAY_STRING), [exp], loc) : (0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createSimpleExpression)('', true))]
  };
};

var transformModel = function transformModel(dir, node, context) {
  var baseResult = (0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.transformModel)(dir, node, context); // base transform has errors OR component v-model (only need props)

  if (!baseResult.props.length || node.tagType === 1
  /* COMPONENT */
  ) {
    return baseResult;
  }

  if (dir.arg) {
    context.onError(createDOMCompilerError(55
    /* X_V_MODEL_ARG_ON_ELEMENT */
    , dir.arg.loc));
  }

  function checkDuplicatedValue() {
    var value = (0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.findProp)(node, 'value');

    if (value) {
      context.onError(createDOMCompilerError(57
      /* X_V_MODEL_UNNECESSARY_VALUE */
      , value.loc));
    }
  }

  var tag = node.tag;
  var isCustomElement = context.isCustomElement(tag);

  if (tag === 'input' || tag === 'textarea' || tag === 'select' || isCustomElement) {
    var directiveToUse = V_MODEL_TEXT;
    var isInvalidType = false;

    if (tag === 'input' || isCustomElement) {
      var type = (0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.findProp)(node, "type");

      if (type) {
        if (type.type === 7
        /* DIRECTIVE */
        ) {
          // :type="foo"
          directiveToUse = V_MODEL_DYNAMIC;
        } else if (type.value) {
          switch (type.value.content) {
            case 'radio':
              directiveToUse = V_MODEL_RADIO;
              break;

            case 'checkbox':
              directiveToUse = V_MODEL_CHECKBOX;
              break;

            case 'file':
              isInvalidType = true;
              context.onError(createDOMCompilerError(56
              /* X_V_MODEL_ON_FILE_INPUT_ELEMENT */
              , dir.loc));
              break;

            default:
              // text type
               true && checkDuplicatedValue();
              break;
          }
        }
      } else if ((0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.hasDynamicKeyVBind)(node)) {
        // element has bindings with dynamic keys, which can possibly contain
        // "type".
        directiveToUse = V_MODEL_DYNAMIC;
      } else {
        // text type
         true && checkDuplicatedValue();
      }
    } else if (tag === 'select') {
      directiveToUse = V_MODEL_SELECT;
    } else {
      // textarea
       true && checkDuplicatedValue();
    } // inject runtime directive
    // by returning the helper symbol via needRuntime
    // the import will replaced a resolveDirective call.


    if (!isInvalidType) {
      baseResult.needRuntime = context.helper(directiveToUse);
    }
  } else {
    context.onError(createDOMCompilerError(54
    /* X_V_MODEL_ON_INVALID_ELEMENT */
    , dir.loc));
  } // native vmodel doesn't need the `modelValue` props since they are also
  // passed to the runtime as `binding.value`. removing it reduces code size.


  baseResult.props = baseResult.props.filter(function (p) {
    return !(p.key.type === 4
    /* SIMPLE_EXPRESSION */
    && p.key.content === 'modelValue');
  });
  return baseResult;
};

var isEventOptionModifier = /*#__PURE__*/(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.makeMap)("passive,once,capture");
var isNonKeyModifier = /*#__PURE__*/(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.makeMap)( // event propagation management
"stop,prevent,self," + // system modifiers + exact
"ctrl,shift,alt,meta,exact," + // mouse
"middle"); // left & right could be mouse or key modifiers based on event type

var maybeKeyModifier = /*#__PURE__*/(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.makeMap)('left,right');
var isKeyboardEvent = /*#__PURE__*/(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.makeMap)("onkeyup,onkeydown,onkeypress", true);

var resolveModifiers = function resolveModifiers(key, modifiers, context, loc) {
  var keyModifiers = [];
  var nonKeyModifiers = [];
  var eventOptionModifiers = [];

  for (var i = 0; i < modifiers.length; i++) {
    var modifier = modifiers[i];

    if (modifier === 'native' && (0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.checkCompatEnabled)("COMPILER_V_ON_NATIVE"
    /* COMPILER_V_ON_NATIVE */
    , context, loc)) {
      eventOptionModifiers.push(modifier);
    } else if (isEventOptionModifier(modifier)) {
      // eventOptionModifiers: modifiers for addEventListener() options,
      // e.g. .passive & .capture
      eventOptionModifiers.push(modifier);
    } else {
      // runtimeModifiers: modifiers that needs runtime guards
      if (maybeKeyModifier(modifier)) {
        if ((0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.isStaticExp)(key)) {
          if (isKeyboardEvent(key.content)) {
            keyModifiers.push(modifier);
          } else {
            nonKeyModifiers.push(modifier);
          }
        } else {
          keyModifiers.push(modifier);
          nonKeyModifiers.push(modifier);
        }
      } else {
        if (isNonKeyModifier(modifier)) {
          nonKeyModifiers.push(modifier);
        } else {
          keyModifiers.push(modifier);
        }
      }
    }
  }

  return {
    keyModifiers: keyModifiers,
    nonKeyModifiers: nonKeyModifiers,
    eventOptionModifiers: eventOptionModifiers
  };
};

var transformClick = function transformClick(key, event) {
  var isStaticClick = (0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.isStaticExp)(key) && key.content.toLowerCase() === 'onclick';
  return isStaticClick ? (0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createSimpleExpression)(event, true) : key.type !== 4
  /* SIMPLE_EXPRESSION */
  ? (0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createCompoundExpression)(["(", key, ") === \"onClick\" ? \"".concat(event, "\" : ("), key, ")"]) : key;
};

var transformOn = function transformOn(dir, node, context) {
  return (0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.transformOn)(dir, node, context, function (baseResult) {
    var modifiers = dir.modifiers;
    if (!modifiers.length) return baseResult;
    var _baseResult$props$ = baseResult.props[0],
        key = _baseResult$props$.key,
        handlerExp = _baseResult$props$.value;

    var _resolveModifiers = resolveModifiers(key, modifiers, context, dir.loc),
        keyModifiers = _resolveModifiers.keyModifiers,
        nonKeyModifiers = _resolveModifiers.nonKeyModifiers,
        eventOptionModifiers = _resolveModifiers.eventOptionModifiers; // normalize click.right and click.middle since they don't actually fire


    if (nonKeyModifiers.includes('right')) {
      key = transformClick(key, "onContextmenu");
    }

    if (nonKeyModifiers.includes('middle')) {
      key = transformClick(key, "onMouseup");
    }

    if (nonKeyModifiers.length) {
      handlerExp = (0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createCallExpression)(context.helper(V_ON_WITH_MODIFIERS), [handlerExp, JSON.stringify(nonKeyModifiers)]);
    }

    if (keyModifiers.length && ( // if event name is dynamic, always wrap with keys guard
    !(0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.isStaticExp)(key) || isKeyboardEvent(key.content))) {
      handlerExp = (0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createCallExpression)(context.helper(V_ON_WITH_KEYS), [handlerExp, JSON.stringify(keyModifiers)]);
    }

    if (eventOptionModifiers.length) {
      var modifierPostfix = eventOptionModifiers.map(_vue_shared__WEBPACK_IMPORTED_MODULE_1__.capitalize).join('');
      key = (0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.isStaticExp)(key) ? (0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createSimpleExpression)("".concat(key.content).concat(modifierPostfix), true) : (0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createCompoundExpression)(["(", key, ") + \"".concat(modifierPostfix, "\"")]);
    }

    return {
      props: [(0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createObjectProperty)(key, handlerExp)]
    };
  });
};

var transformShow = function transformShow(dir, node, context) {
  var exp = dir.exp,
      loc = dir.loc;

  if (!exp) {
    context.onError(createDOMCompilerError(58
    /* X_V_SHOW_NO_EXPRESSION */
    , loc));
  }

  return {
    props: [],
    needRuntime: context.helper(V_SHOW)
  };
};

var transformTransition = function transformTransition(node, context) {
  if (node.type === 1
  /* ELEMENT */
  && node.tagType === 1
  /* COMPONENT */
  ) {
    var component = context.isBuiltInComponent(node.tag);

    if (component === TRANSITION) {
      return function () {
        if (!node.children.length) {
          return;
        } // warn multiple transition children


        if (hasMultipleChildren(node)) {
          context.onError(createDOMCompilerError(59
          /* X_TRANSITION_INVALID_CHILDREN */
          , {
            start: node.children[0].loc.start,
            end: node.children[node.children.length - 1].loc.end,
            source: ''
          }));
        } // check if it's s single child w/ v-show
        // if yes, inject "persisted: true" to the transition props


        var child = node.children[0];

        if (child.type === 1
        /* ELEMENT */
        ) {
          var _iterator = _createForOfIteratorHelper(child.props),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var p = _step.value;

              if (p.type === 7
              /* DIRECTIVE */
              && p.name === 'show') {
                node.props.push({
                  type: 6
                  /* ATTRIBUTE */
                  ,
                  name: 'persisted',
                  value: undefined,
                  loc: node.loc
                });
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }
      };
    }
  }
};

function hasMultipleChildren(node) {
  // #1352 filter out potential comment nodes.
  var children = node.children = node.children.filter(function (c) {
    return c.type !== 3
    /* COMMENT */
    && !(c.type === 2
    /* TEXT */
    && !c.content.trim());
  });
  var child = children[0];
  return children.length !== 1 || child.type === 11
  /* FOR */
  || child.type === 9
  /* IF */
  && child.branches.some(hasMultipleChildren);
}

var ignoreSideEffectTags = function ignoreSideEffectTags(node, context) {
  if (node.type === 1
  /* ELEMENT */
  && node.tagType === 0
  /* ELEMENT */
  && (node.tag === 'script' || node.tag === 'style')) {
    context.onError(createDOMCompilerError(60
    /* X_IGNORED_SIDE_EFFECT_TAG */
    , node.loc));
    context.removeNode();
  }
};

var DOMNodeTransforms = [transformStyle].concat(_toConsumableArray( true ? [transformTransition] : 0));
var DOMDirectiveTransforms = {
  cloak: _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.noopDirectiveTransform,
  html: transformVHtml,
  text: transformVText,
  model: transformModel,
  on: transformOn,
  show: transformShow
};

function compile(template) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return (0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.baseCompile)(template, (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)({}, parserOptions, options, {
    nodeTransforms: [// ignore <script> and <tag>
    // this is not put inside DOMNodeTransforms because that list is used
    // by compiler-ssr to generate vnode fallback branches
    ignoreSideEffectTags].concat(_toConsumableArray(DOMNodeTransforms), _toConsumableArray(options.nodeTransforms || [])),
    directiveTransforms: (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)({}, DOMDirectiveTransforms, options.directiveTransforms || {}),
    transformHoist: null
  }));
}

function parse(template) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return (0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.baseParse)(template, (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)({}, parserOptions, options));
}



/***/ }),

/***/ "./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EffectScope": () => (/* binding */ EffectScope),
/* harmony export */   "ITERATE_KEY": () => (/* binding */ ITERATE_KEY),
/* harmony export */   "ReactiveEffect": () => (/* binding */ ReactiveEffect),
/* harmony export */   "computed": () => (/* binding */ computed),
/* harmony export */   "customRef": () => (/* binding */ customRef),
/* harmony export */   "deferredComputed": () => (/* binding */ deferredComputed),
/* harmony export */   "effect": () => (/* binding */ effect),
/* harmony export */   "effectScope": () => (/* binding */ effectScope),
/* harmony export */   "enableTracking": () => (/* binding */ enableTracking),
/* harmony export */   "getCurrentScope": () => (/* binding */ getCurrentScope),
/* harmony export */   "isProxy": () => (/* binding */ isProxy),
/* harmony export */   "isReactive": () => (/* binding */ isReactive),
/* harmony export */   "isReadonly": () => (/* binding */ isReadonly),
/* harmony export */   "isRef": () => (/* binding */ isRef),
/* harmony export */   "isShallow": () => (/* binding */ isShallow),
/* harmony export */   "markRaw": () => (/* binding */ markRaw),
/* harmony export */   "onScopeDispose": () => (/* binding */ onScopeDispose),
/* harmony export */   "pauseTracking": () => (/* binding */ pauseTracking),
/* harmony export */   "proxyRefs": () => (/* binding */ proxyRefs),
/* harmony export */   "reactive": () => (/* binding */ reactive),
/* harmony export */   "readonly": () => (/* binding */ readonly),
/* harmony export */   "ref": () => (/* binding */ ref),
/* harmony export */   "resetTracking": () => (/* binding */ resetTracking),
/* harmony export */   "shallowReactive": () => (/* binding */ shallowReactive),
/* harmony export */   "shallowReadonly": () => (/* binding */ shallowReadonly),
/* harmony export */   "shallowRef": () => (/* binding */ shallowRef),
/* harmony export */   "stop": () => (/* binding */ stop),
/* harmony export */   "toRaw": () => (/* binding */ toRaw),
/* harmony export */   "toRef": () => (/* binding */ toRef),
/* harmony export */   "toRefs": () => (/* binding */ toRefs),
/* harmony export */   "track": () => (/* binding */ track),
/* harmony export */   "trigger": () => (/* binding */ trigger),
/* harmony export */   "triggerRef": () => (/* binding */ triggerRef),
/* harmony export */   "unref": () => (/* binding */ unref)
/* harmony export */ });
/* harmony import */ var _vue_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue/shared */ "./node_modules/@vue/shared/dist/shared.esm-bundler.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }



function warn(msg) {
  var _console;

  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key2 = 1; _key2 < _len; _key2++) {
    args[_key2 - 1] = arguments[_key2];
  }

  (_console = console).warn.apply(_console, ["[Vue warn] ".concat(msg)].concat(args));
}

var activeEffectScope;

var EffectScope = /*#__PURE__*/function () {
  function EffectScope() {
    var detached = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    _classCallCheck(this, EffectScope);

    /**
     * @internal
     */
    this.active = true;
    /**
     * @internal
     */

    this.effects = [];
    /**
     * @internal
     */

    this.cleanups = [];

    if (!detached && activeEffectScope) {
      this.parent = activeEffectScope;
      this.index = (activeEffectScope.scopes || (activeEffectScope.scopes = [])).push(this) - 1;
    }
  }

  _createClass(EffectScope, [{
    key: "run",
    value: function run(fn) {
      if (this.active) {
        var currentEffectScope = activeEffectScope;

        try {
          activeEffectScope = this;
          return fn();
        } finally {
          activeEffectScope = currentEffectScope;
        }
      } else if (true) {
        warn("cannot run an inactive effect scope.");
      }
    }
    /**
     * This should only be called on non-detached scopes
     * @internal
     */

  }, {
    key: "on",
    value: function on() {
      activeEffectScope = this;
    }
    /**
     * This should only be called on non-detached scopes
     * @internal
     */

  }, {
    key: "off",
    value: function off() {
      activeEffectScope = this.parent;
    }
  }, {
    key: "stop",
    value: function stop(fromParent) {
      if (this.active) {
        var i, l;

        for (i = 0, l = this.effects.length; i < l; i++) {
          this.effects[i].stop();
        }

        for (i = 0, l = this.cleanups.length; i < l; i++) {
          this.cleanups[i]();
        }

        if (this.scopes) {
          for (i = 0, l = this.scopes.length; i < l; i++) {
            this.scopes[i].stop(true);
          }
        } // nested scope, dereference from parent to avoid memory leaks


        if (this.parent && !fromParent) {
          // optimized O(1) removal
          var last = this.parent.scopes.pop();

          if (last && last !== this) {
            this.parent.scopes[this.index] = last;
            last.index = this.index;
          }
        }

        this.active = false;
      }
    }
  }]);

  return EffectScope;
}();

function effectScope(detached) {
  return new EffectScope(detached);
}

function recordEffectScope(effect) {
  var scope = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : activeEffectScope;

  if (scope && scope.active) {
    scope.effects.push(effect);
  }
}

function getCurrentScope() {
  return activeEffectScope;
}

function onScopeDispose(fn) {
  if (activeEffectScope) {
    activeEffectScope.cleanups.push(fn);
  } else if (true) {
    warn("onScopeDispose() is called when there is no active effect scope" + " to be associated with.");
  }
}

var createDep = function createDep(effects) {
  var dep = new Set(effects);
  dep.w = 0;
  dep.n = 0;
  return dep;
};

var wasTracked = function wasTracked(dep) {
  return (dep.w & trackOpBit) > 0;
};

var newTracked = function newTracked(dep) {
  return (dep.n & trackOpBit) > 0;
};

var initDepMarkers = function initDepMarkers(_ref) {
  var deps = _ref.deps;

  if (deps.length) {
    for (var i = 0; i < deps.length; i++) {
      deps[i].w |= trackOpBit; // set was tracked
    }
  }
};

var finalizeDepMarkers = function finalizeDepMarkers(effect) {
  var deps = effect.deps;

  if (deps.length) {
    var ptr = 0;

    for (var i = 0; i < deps.length; i++) {
      var dep = deps[i];

      if (wasTracked(dep) && !newTracked(dep)) {
        dep["delete"](effect);
      } else {
        deps[ptr++] = dep;
      } // clear bits


      dep.w &= ~trackOpBit;
      dep.n &= ~trackOpBit;
    }

    deps.length = ptr;
  }
};

var targetMap = new WeakMap(); // The number of effects currently being tracked recursively.

var effectTrackDepth = 0;
var trackOpBit = 1;
/**
 * The bitwise track markers support at most 30 levels of recursion.
 * This value is chosen to enable modern JS engines to use a SMI on all platforms.
 * When recursion depth is greater, fall back to using a full cleanup.
 */

var maxMarkerBits = 30;
var activeEffect;
var ITERATE_KEY = Symbol( true ? 'iterate' : 0);
var MAP_KEY_ITERATE_KEY = Symbol( true ? 'Map key iterate' : 0);

var ReactiveEffect = /*#__PURE__*/function () {
  function ReactiveEffect(fn) {
    var scheduler = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var scope = arguments.length > 2 ? arguments[2] : undefined;

    _classCallCheck(this, ReactiveEffect);

    this.fn = fn;
    this.scheduler = scheduler;
    this.active = true;
    this.deps = [];
    this.parent = undefined;
    recordEffectScope(this, scope);
  }

  _createClass(ReactiveEffect, [{
    key: "run",
    value: function run() {
      if (!this.active) {
        return this.fn();
      }

      var parent = activeEffect;
      var lastShouldTrack = shouldTrack;

      while (parent) {
        if (parent === this) {
          return;
        }

        parent = parent.parent;
      }

      try {
        this.parent = activeEffect;
        activeEffect = this;
        shouldTrack = true;
        trackOpBit = 1 << ++effectTrackDepth;

        if (effectTrackDepth <= maxMarkerBits) {
          initDepMarkers(this);
        } else {
          cleanupEffect(this);
        }

        return this.fn();
      } finally {
        if (effectTrackDepth <= maxMarkerBits) {
          finalizeDepMarkers(this);
        }

        trackOpBit = 1 << --effectTrackDepth;
        activeEffect = this.parent;
        shouldTrack = lastShouldTrack;
        this.parent = undefined;

        if (this.deferStop) {
          this.stop();
        }
      }
    }
  }, {
    key: "stop",
    value: function stop() {
      // stopped while running itself - defer the cleanup
      if (activeEffect === this) {
        this.deferStop = true;
      } else if (this.active) {
        cleanupEffect(this);

        if (this.onStop) {
          this.onStop();
        }

        this.active = false;
      }
    }
  }]);

  return ReactiveEffect;
}();

function cleanupEffect(effect) {
  var deps = effect.deps;

  if (deps.length) {
    for (var i = 0; i < deps.length; i++) {
      deps[i]["delete"](effect);
    }

    deps.length = 0;
  }
}

function effect(fn, options) {
  if (fn.effect) {
    fn = fn.effect.fn;
  }

  var _effect = new ReactiveEffect(fn);

  if (options) {
    (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.extend)(_effect, options);
    if (options.scope) recordEffectScope(_effect, options.scope);
  }

  if (!options || !options.lazy) {
    _effect.run();
  }

  var runner = _effect.run.bind(_effect);

  runner.effect = _effect;
  return runner;
}

function stop(runner) {
  runner.effect.stop();
}

var shouldTrack = true;
var trackStack = [];

function pauseTracking() {
  trackStack.push(shouldTrack);
  shouldTrack = false;
}

function enableTracking() {
  trackStack.push(shouldTrack);
  shouldTrack = true;
}

function resetTracking() {
  var last = trackStack.pop();
  shouldTrack = last === undefined ? true : last;
}

function track(target, type, key) {
  if (shouldTrack && activeEffect) {
    var depsMap = targetMap.get(target);

    if (!depsMap) {
      targetMap.set(target, depsMap = new Map());
    }

    var dep = depsMap.get(key);

    if (!dep) {
      depsMap.set(key, dep = createDep());
    }

    var eventInfo =  true ? {
      effect: activeEffect,
      target: target,
      type: type,
      key: key
    } : 0;
    trackEffects(dep, eventInfo);
  }
}

function trackEffects(dep, debuggerEventExtraInfo) {
  var shouldTrack = false;

  if (effectTrackDepth <= maxMarkerBits) {
    if (!newTracked(dep)) {
      dep.n |= trackOpBit; // set newly tracked

      shouldTrack = !wasTracked(dep);
    }
  } else {
    // Full cleanup mode.
    shouldTrack = !dep.has(activeEffect);
  }

  if (shouldTrack) {
    dep.add(activeEffect);
    activeEffect.deps.push(dep);

    if ( true && activeEffect.onTrack) {
      activeEffect.onTrack(Object.assign({
        effect: activeEffect
      }, debuggerEventExtraInfo));
    }
  }
}

function trigger(target, type, key, newValue, oldValue, oldTarget) {
  var depsMap = targetMap.get(target);

  if (!depsMap) {
    // never been tracked
    return;
  }

  var deps = [];

  if (type === "clear"
  /* CLEAR */
  ) {
    // collection being cleared
    // trigger all effects for target
    deps = _toConsumableArray(depsMap.values());
  } else if (key === 'length' && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isArray)(target)) {
    depsMap.forEach(function (dep, key) {
      if (key === 'length' || key >= newValue) {
        deps.push(dep);
      }
    });
  } else {
    // schedule runs for SET | ADD | DELETE
    if (key !== void 0) {
      deps.push(depsMap.get(key));
    } // also run for iteration key on ADD | DELETE | Map.SET


    switch (type) {
      case "add"
      /* ADD */
      :
        if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isArray)(target)) {
          deps.push(depsMap.get(ITERATE_KEY));

          if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isMap)(target)) {
            deps.push(depsMap.get(MAP_KEY_ITERATE_KEY));
          }
        } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isIntegerKey)(key)) {
          // new index added to array -> length changes
          deps.push(depsMap.get('length'));
        }

        break;

      case "delete"
      /* DELETE */
      :
        if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isArray)(target)) {
          deps.push(depsMap.get(ITERATE_KEY));

          if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isMap)(target)) {
            deps.push(depsMap.get(MAP_KEY_ITERATE_KEY));
          }
        }

        break;

      case "set"
      /* SET */
      :
        if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isMap)(target)) {
          deps.push(depsMap.get(ITERATE_KEY));
        }

        break;
    }
  }

  var eventInfo =  true ? {
    target: target,
    type: type,
    key: key,
    newValue: newValue,
    oldValue: oldValue,
    oldTarget: oldTarget
  } : 0;

  if (deps.length === 1) {
    if (deps[0]) {
      if (true) {
        triggerEffects(deps[0], eventInfo);
      } else {}
    }
  } else {
    var effects = [];

    var _iterator = _createForOfIteratorHelper(deps),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var dep = _step.value;

        if (dep) {
          effects.push.apply(effects, _toConsumableArray(dep));
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    if (true) {
      triggerEffects(createDep(effects), eventInfo);
    } else {}
  }
}

function triggerEffects(dep, debuggerEventExtraInfo) {
  // spread into array for stabilization
  var effects = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isArray)(dep) ? dep : _toConsumableArray(dep);

  var _iterator2 = _createForOfIteratorHelper(effects),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var _effect2 = _step2.value;

      if (_effect2.computed) {
        triggerEffect(_effect2, debuggerEventExtraInfo);
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  var _iterator3 = _createForOfIteratorHelper(effects),
      _step3;

  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var _effect3 = _step3.value;

      if (!_effect3.computed) {
        triggerEffect(_effect3, debuggerEventExtraInfo);
      }
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }
}

function triggerEffect(effect, debuggerEventExtraInfo) {
  if (effect !== activeEffect || effect.allowRecurse) {
    if ( true && effect.onTrigger) {
      effect.onTrigger((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.extend)({
        effect: effect
      }, debuggerEventExtraInfo));
    }

    if (effect.scheduler) {
      effect.scheduler();
    } else {
      effect.run();
    }
  }
}

var isNonTrackableKeys = /*#__PURE__*/(0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.makeMap)("__proto__,__v_isRef,__isVue");
var builtInSymbols = new Set( /*#__PURE__*/Object.getOwnPropertyNames(Symbol) // ios10.x Object.getOwnPropertyNames(Symbol) can enumerate 'arguments' and 'caller'
// but accessing them on Symbol leads to TypeError because Symbol is a strict mode
// function
.filter(function (key) {
  return key !== 'arguments' && key !== 'caller';
}).map(function (key) {
  return Symbol[key];
}).filter(_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isSymbol));
var get = /*#__PURE__*/createGetter();
var shallowGet = /*#__PURE__*/createGetter(false, true);
var readonlyGet = /*#__PURE__*/createGetter(true);
var shallowReadonlyGet = /*#__PURE__*/createGetter(true, true);
var arrayInstrumentations = /*#__PURE__*/createArrayInstrumentations();

function createArrayInstrumentations() {
  var instrumentations = {};
  ['includes', 'indexOf', 'lastIndexOf'].forEach(function (key) {
    instrumentations[key] = function () {
      var arr = toRaw(this);

      for (var i = 0, l = this.length; i < l; i++) {
        track(arr, "get"
        /* GET */
        , i + '');
      } // we run the method using the original args first (which may be reactive)


      for (var _len2 = arguments.length, args = new Array(_len2), _key3 = 0; _key3 < _len2; _key3++) {
        args[_key3] = arguments[_key3];
      }

      var res = arr[key].apply(arr, args);

      if (res === -1 || res === false) {
        // if that didn't work, run it again using raw values.
        return arr[key].apply(arr, _toConsumableArray(args.map(toRaw)));
      } else {
        return res;
      }
    };
  });
  ['push', 'pop', 'shift', 'unshift', 'splice'].forEach(function (key) {
    instrumentations[key] = function () {
      pauseTracking();

      for (var _len3 = arguments.length, args = new Array(_len3), _key4 = 0; _key4 < _len3; _key4++) {
        args[_key4] = arguments[_key4];
      }

      var res = toRaw(this)[key].apply(this, args);
      resetTracking();
      return res;
    };
  });
  return instrumentations;
}

function createGetter() {
  var isReadonly = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var shallow = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return function get(target, key, receiver) {
    if (key === "__v_isReactive"
    /* IS_REACTIVE */
    ) {
      return !isReadonly;
    } else if (key === "__v_isReadonly"
    /* IS_READONLY */
    ) {
      return isReadonly;
    } else if (key === "__v_isShallow"
    /* IS_SHALLOW */
    ) {
      return shallow;
    } else if (key === "__v_raw"
    /* RAW */
    && receiver === (isReadonly ? shallow ? shallowReadonlyMap : readonlyMap : shallow ? shallowReactiveMap : reactiveMap).get(target)) {
      return target;
    }

    var targetIsArray = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isArray)(target);

    if (!isReadonly && targetIsArray && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.hasOwn)(arrayInstrumentations, key)) {
      return Reflect.get(arrayInstrumentations, key, receiver);
    }

    var res = Reflect.get(target, key, receiver);

    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isSymbol)(key) ? builtInSymbols.has(key) : isNonTrackableKeys(key)) {
      return res;
    }

    if (!isReadonly) {
      track(target, "get"
      /* GET */
      , key);
    }

    if (shallow) {
      return res;
    }

    if (isRef(res)) {
      // ref unwrapping - skip unwrap for Array + integer key.
      return targetIsArray && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isIntegerKey)(key) ? res : res.value;
    }

    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isObject)(res)) {
      // Convert returned value into a proxy as well. we do the isObject check
      // here to avoid invalid value warning. Also need to lazy access readonly
      // and reactive here to avoid circular dependency.
      return isReadonly ? readonly(res) : reactive(res);
    }

    return res;
  };
}

var set = /*#__PURE__*/createSetter();
var shallowSet = /*#__PURE__*/createSetter(true);

function createSetter() {
  var shallow = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  return function set(target, key, value, receiver) {
    var oldValue = target[key];

    if (isReadonly(oldValue) && isRef(oldValue) && !isRef(value)) {
      return false;
    }

    if (!shallow && !isReadonly(value)) {
      if (!isShallow(value)) {
        value = toRaw(value);
        oldValue = toRaw(oldValue);
      }

      if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isArray)(target) && isRef(oldValue) && !isRef(value)) {
        oldValue.value = value;
        return true;
      }
    }

    var hadKey = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isArray)(target) && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isIntegerKey)(key) ? Number(key) < target.length : (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.hasOwn)(target, key);
    var result = Reflect.set(target, key, value, receiver); // don't trigger if target is something up in the prototype chain of original

    if (target === toRaw(receiver)) {
      if (!hadKey) {
        trigger(target, "add"
        /* ADD */
        , key, value);
      } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.hasChanged)(value, oldValue)) {
        trigger(target, "set"
        /* SET */
        , key, value, oldValue);
      }
    }

    return result;
  };
}

function deleteProperty(target, key) {
  var hadKey = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.hasOwn)(target, key);
  var oldValue = target[key];
  var result = Reflect.deleteProperty(target, key);

  if (result && hadKey) {
    trigger(target, "delete"
    /* DELETE */
    , key, undefined, oldValue);
  }

  return result;
}

function has(target, key) {
  var result = Reflect.has(target, key);

  if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isSymbol)(key) || !builtInSymbols.has(key)) {
    track(target, "has"
    /* HAS */
    , key);
  }

  return result;
}

function ownKeys(target) {
  track(target, "iterate"
  /* ITERATE */
  , (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isArray)(target) ? 'length' : ITERATE_KEY);
  return Reflect.ownKeys(target);
}

var mutableHandlers = {
  get: get,
  set: set,
  deleteProperty: deleteProperty,
  has: has,
  ownKeys: ownKeys
};
var readonlyHandlers = {
  get: readonlyGet,
  set: function set(target, key) {
    if (true) {
      warn("Set operation on key \"".concat(String(key), "\" failed: target is readonly."), target);
    }

    return true;
  },
  deleteProperty: function deleteProperty(target, key) {
    if (true) {
      warn("Delete operation on key \"".concat(String(key), "\" failed: target is readonly."), target);
    }

    return true;
  }
};
var shallowReactiveHandlers = /*#__PURE__*/(0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.extend)({}, mutableHandlers, {
  get: shallowGet,
  set: shallowSet
}); // Props handlers are special in the sense that it should not unwrap top-level
// refs (in order to allow refs to be explicitly passed down), but should
// retain the reactivity of the normal readonly object.

var shallowReadonlyHandlers = /*#__PURE__*/(0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.extend)({}, readonlyHandlers, {
  get: shallowReadonlyGet
});

var toShallow = function toShallow(value) {
  return value;
};

var getProto = function getProto(v) {
  return Reflect.getPrototypeOf(v);
};

function get$1(target, key) {
  var isReadonly = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var isShallow = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  // #1772: readonly(reactive(Map)) should return readonly + reactive version
  // of the value
  target = target["__v_raw"
  /* RAW */
  ];
  var rawTarget = toRaw(target);
  var rawKey = toRaw(key);

  if (!isReadonly) {
    if (key !== rawKey) {
      track(rawTarget, "get"
      /* GET */
      , key);
    }

    track(rawTarget, "get"
    /* GET */
    , rawKey);
  }

  var _getProto = getProto(rawTarget),
      has = _getProto.has;

  var wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;

  if (has.call(rawTarget, key)) {
    return wrap(target.get(key));
  } else if (has.call(rawTarget, rawKey)) {
    return wrap(target.get(rawKey));
  } else if (target !== rawTarget) {
    // #3602 readonly(reactive(Map))
    // ensure that the nested reactive `Map` can do tracking for itself
    target.get(key);
  }
}

function has$1(key) {
  var isReadonly = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var target = this["__v_raw"
  /* RAW */
  ];
  var rawTarget = toRaw(target);
  var rawKey = toRaw(key);

  if (!isReadonly) {
    if (key !== rawKey) {
      track(rawTarget, "has"
      /* HAS */
      , key);
    }

    track(rawTarget, "has"
    /* HAS */
    , rawKey);
  }

  return key === rawKey ? target.has(key) : target.has(key) || target.has(rawKey);
}

function size(target) {
  var isReadonly = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  target = target["__v_raw"
  /* RAW */
  ];
  !isReadonly && track(toRaw(target), "iterate"
  /* ITERATE */
  , ITERATE_KEY);
  return Reflect.get(target, 'size', target);
}

function add(value) {
  value = toRaw(value);
  var target = toRaw(this);
  var proto = getProto(target);
  var hadKey = proto.has.call(target, value);

  if (!hadKey) {
    target.add(value);
    trigger(target, "add"
    /* ADD */
    , value, value);
  }

  return this;
}

function set$1(key, value) {
  value = toRaw(value);
  var target = toRaw(this);

  var _getProto2 = getProto(target),
      has = _getProto2.has,
      get = _getProto2.get;

  var hadKey = has.call(target, key);

  if (!hadKey) {
    key = toRaw(key);
    hadKey = has.call(target, key);
  } else if (true) {
    checkIdentityKeys(target, has, key);
  }

  var oldValue = get.call(target, key);
  target.set(key, value);

  if (!hadKey) {
    trigger(target, "add"
    /* ADD */
    , key, value);
  } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.hasChanged)(value, oldValue)) {
    trigger(target, "set"
    /* SET */
    , key, value, oldValue);
  }

  return this;
}

function deleteEntry(key) {
  var target = toRaw(this);

  var _getProto3 = getProto(target),
      has = _getProto3.has,
      get = _getProto3.get;

  var hadKey = has.call(target, key);

  if (!hadKey) {
    key = toRaw(key);
    hadKey = has.call(target, key);
  } else if (true) {
    checkIdentityKeys(target, has, key);
  }

  var oldValue = get ? get.call(target, key) : undefined; // forward the operation before queueing reactions

  var result = target["delete"](key);

  if (hadKey) {
    trigger(target, "delete"
    /* DELETE */
    , key, undefined, oldValue);
  }

  return result;
}

function clear() {
  var target = toRaw(this);
  var hadItems = target.size !== 0;
  var oldTarget =  true ? (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isMap)(target) ? new Map(target) : new Set(target) : 0; // forward the operation before queueing reactions

  var result = target.clear();

  if (hadItems) {
    trigger(target, "clear"
    /* CLEAR */
    , undefined, undefined, oldTarget);
  }

  return result;
}

function createForEach(isReadonly, isShallow) {
  return function forEach(callback, thisArg) {
    var observed = this;
    var target = observed["__v_raw"
    /* RAW */
    ];
    var rawTarget = toRaw(target);
    var wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;
    !isReadonly && track(rawTarget, "iterate"
    /* ITERATE */
    , ITERATE_KEY);
    return target.forEach(function (value, key) {
      // important: make sure the callback is
      // 1. invoked with the reactive map as `this` and 3rd arg
      // 2. the value received should be a corresponding reactive/readonly.
      return callback.call(thisArg, wrap(value), wrap(key), observed);
    });
  };
}

function createIterableMethod(method, isReadonly, isShallow) {
  return function () {
    var target = this["__v_raw"
    /* RAW */
    ];
    var rawTarget = toRaw(target);
    var targetIsMap = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isMap)(rawTarget);
    var isPair = method === 'entries' || method === Symbol.iterator && targetIsMap;
    var isKeyOnly = method === 'keys' && targetIsMap;
    var innerIterator = target[method].apply(target, arguments);
    var wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;
    !isReadonly && track(rawTarget, "iterate"
    /* ITERATE */
    , isKeyOnly ? MAP_KEY_ITERATE_KEY : ITERATE_KEY); // return a wrapped iterator which returns observed versions of the
    // values emitted from the real iterator

    return _defineProperty({
      // iterator protocol
      next: function next() {
        var _innerIterator$next = innerIterator.next(),
            value = _innerIterator$next.value,
            done = _innerIterator$next.done;

        return done ? {
          value: value,
          done: done
        } : {
          value: isPair ? [wrap(value[0]), wrap(value[1])] : wrap(value),
          done: done
        };
      }
    }, Symbol.iterator, function () {
      return this;
    });
  };
}

function createReadonlyMethod(type) {
  return function () {
    if (true) {
      var key = (arguments.length <= 0 ? undefined : arguments[0]) ? "on key \"".concat(arguments.length <= 0 ? undefined : arguments[0], "\" ") : "";
      console.warn("".concat((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.capitalize)(type), " operation ").concat(key, "failed: target is readonly."), toRaw(this));
    }

    return type === "delete"
    /* DELETE */
    ? false : this;
  };
}

function createInstrumentations() {
  var mutableInstrumentations = {
    get: function get(key) {
      return get$1(this, key);
    },

    get size() {
      return size(this);
    },

    has: has$1,
    add: add,
    set: set$1,
    "delete": deleteEntry,
    clear: clear,
    forEach: createForEach(false, false)
  };
  var shallowInstrumentations = {
    get: function get(key) {
      return get$1(this, key, false, true);
    },

    get size() {
      return size(this);
    },

    has: has$1,
    add: add,
    set: set$1,
    "delete": deleteEntry,
    clear: clear,
    forEach: createForEach(false, true)
  };
  var readonlyInstrumentations = {
    get: function get(key) {
      return get$1(this, key, true);
    },

    get size() {
      return size(this, true);
    },

    has: function has(key) {
      return has$1.call(this, key, true);
    },
    add: createReadonlyMethod("add"
    /* ADD */
    ),
    set: createReadonlyMethod("set"
    /* SET */
    ),
    "delete": createReadonlyMethod("delete"
    /* DELETE */
    ),
    clear: createReadonlyMethod("clear"
    /* CLEAR */
    ),
    forEach: createForEach(true, false)
  };
  var shallowReadonlyInstrumentations = {
    get: function get(key) {
      return get$1(this, key, true, true);
    },

    get size() {
      return size(this, true);
    },

    has: function has(key) {
      return has$1.call(this, key, true);
    },
    add: createReadonlyMethod("add"
    /* ADD */
    ),
    set: createReadonlyMethod("set"
    /* SET */
    ),
    "delete": createReadonlyMethod("delete"
    /* DELETE */
    ),
    clear: createReadonlyMethod("clear"
    /* CLEAR */
    ),
    forEach: createForEach(true, true)
  };
  var iteratorMethods = ['keys', 'values', 'entries', Symbol.iterator];
  iteratorMethods.forEach(function (method) {
    mutableInstrumentations[method] = createIterableMethod(method, false, false);
    readonlyInstrumentations[method] = createIterableMethod(method, true, false);
    shallowInstrumentations[method] = createIterableMethod(method, false, true);
    shallowReadonlyInstrumentations[method] = createIterableMethod(method, true, true);
  });
  return [mutableInstrumentations, readonlyInstrumentations, shallowInstrumentations, shallowReadonlyInstrumentations];
}

var _createInstrumentatio = /* #__PURE__*/createInstrumentations(),
    _createInstrumentatio2 = _slicedToArray(_createInstrumentatio, 4),
    mutableInstrumentations = _createInstrumentatio2[0],
    readonlyInstrumentations = _createInstrumentatio2[1],
    shallowInstrumentations = _createInstrumentatio2[2],
    shallowReadonlyInstrumentations = _createInstrumentatio2[3];

function createInstrumentationGetter(isReadonly, shallow) {
  var instrumentations = shallow ? isReadonly ? shallowReadonlyInstrumentations : shallowInstrumentations : isReadonly ? readonlyInstrumentations : mutableInstrumentations;
  return function (target, key, receiver) {
    if (key === "__v_isReactive"
    /* IS_REACTIVE */
    ) {
      return !isReadonly;
    } else if (key === "__v_isReadonly"
    /* IS_READONLY */
    ) {
      return isReadonly;
    } else if (key === "__v_raw"
    /* RAW */
    ) {
      return target;
    }

    return Reflect.get((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.hasOwn)(instrumentations, key) && key in target ? instrumentations : target, key, receiver);
  };
}

var mutableCollectionHandlers = {
  get: /*#__PURE__*/createInstrumentationGetter(false, false)
};
var shallowCollectionHandlers = {
  get: /*#__PURE__*/createInstrumentationGetter(false, true)
};
var readonlyCollectionHandlers = {
  get: /*#__PURE__*/createInstrumentationGetter(true, false)
};
var shallowReadonlyCollectionHandlers = {
  get: /*#__PURE__*/createInstrumentationGetter(true, true)
};

function checkIdentityKeys(target, has, key) {
  var rawKey = toRaw(key);

  if (rawKey !== key && has.call(target, rawKey)) {
    var type = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.toRawType)(target);
    console.warn("Reactive ".concat(type, " contains both the raw and reactive ") + "versions of the same object".concat(type === "Map" ? " as keys" : "", ", ") + "which can lead to inconsistencies. " + "Avoid differentiating between the raw and reactive versions " + "of an object and only use the reactive version if possible.");
  }
}

var reactiveMap = new WeakMap();
var shallowReactiveMap = new WeakMap();
var readonlyMap = new WeakMap();
var shallowReadonlyMap = new WeakMap();

function targetTypeMap(rawType) {
  switch (rawType) {
    case 'Object':
    case 'Array':
      return 1
      /* COMMON */
      ;

    case 'Map':
    case 'Set':
    case 'WeakMap':
    case 'WeakSet':
      return 2
      /* COLLECTION */
      ;

    default:
      return 0
      /* INVALID */
      ;
  }
}

function getTargetType(value) {
  return value["__v_skip"
  /* SKIP */
  ] || !Object.isExtensible(value) ? 0
  /* INVALID */
  : targetTypeMap((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.toRawType)(value));
}

function reactive(target) {
  // if trying to observe a readonly proxy, return the readonly version.
  if (isReadonly(target)) {
    return target;
  }

  return createReactiveObject(target, false, mutableHandlers, mutableCollectionHandlers, reactiveMap);
}
/**
 * Return a shallowly-reactive copy of the original object, where only the root
 * level properties are reactive. It also does not auto-unwrap refs (even at the
 * root level).
 */


function shallowReactive(target) {
  return createReactiveObject(target, false, shallowReactiveHandlers, shallowCollectionHandlers, shallowReactiveMap);
}
/**
 * Creates a readonly copy of the original object. Note the returned copy is not
 * made reactive, but `readonly` can be called on an already reactive object.
 */


function readonly(target) {
  return createReactiveObject(target, true, readonlyHandlers, readonlyCollectionHandlers, readonlyMap);
}
/**
 * Returns a reactive-copy of the original object, where only the root level
 * properties are readonly, and does NOT unwrap refs nor recursively convert
 * returned properties.
 * This is used for creating the props proxy object for stateful components.
 */


function shallowReadonly(target) {
  return createReactiveObject(target, true, shallowReadonlyHandlers, shallowReadonlyCollectionHandlers, shallowReadonlyMap);
}

function createReactiveObject(target, isReadonly, baseHandlers, collectionHandlers, proxyMap) {
  if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isObject)(target)) {
    if (true) {
      console.warn("value cannot be made reactive: ".concat(String(target)));
    }

    return target;
  } // target is already a Proxy, return it.
  // exception: calling readonly() on a reactive object


  if (target["__v_raw"
  /* RAW */
  ] && !(isReadonly && target["__v_isReactive"
  /* IS_REACTIVE */
  ])) {
    return target;
  } // target already has corresponding Proxy


  var existingProxy = proxyMap.get(target);

  if (existingProxy) {
    return existingProxy;
  } // only specific value types can be observed.


  var targetType = getTargetType(target);

  if (targetType === 0
  /* INVALID */
  ) {
    return target;
  }

  var proxy = new Proxy(target, targetType === 2
  /* COLLECTION */
  ? collectionHandlers : baseHandlers);
  proxyMap.set(target, proxy);
  return proxy;
}

function isReactive(value) {
  if (isReadonly(value)) {
    return isReactive(value["__v_raw"
    /* RAW */
    ]);
  }

  return !!(value && value["__v_isReactive"
  /* IS_REACTIVE */
  ]);
}

function isReadonly(value) {
  return !!(value && value["__v_isReadonly"
  /* IS_READONLY */
  ]);
}

function isShallow(value) {
  return !!(value && value["__v_isShallow"
  /* IS_SHALLOW */
  ]);
}

function isProxy(value) {
  return isReactive(value) || isReadonly(value);
}

function toRaw(observed) {
  var raw = observed && observed["__v_raw"
  /* RAW */
  ];
  return raw ? toRaw(raw) : observed;
}

function markRaw(value) {
  (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.def)(value, "__v_skip"
  /* SKIP */
  , true);
  return value;
}

var toReactive = function toReactive(value) {
  return (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isObject)(value) ? reactive(value) : value;
};

var toReadonly = function toReadonly(value) {
  return (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isObject)(value) ? readonly(value) : value;
};

function trackRefValue(ref) {
  if (shouldTrack && activeEffect) {
    ref = toRaw(ref);

    if (true) {
      trackEffects(ref.dep || (ref.dep = createDep()), {
        target: ref,
        type: "get"
        /* GET */
        ,
        key: 'value'
      });
    } else {}
  }
}

function triggerRefValue(ref, newVal) {
  ref = toRaw(ref);

  if (ref.dep) {
    if (true) {
      triggerEffects(ref.dep, {
        target: ref,
        type: "set"
        /* SET */
        ,
        key: 'value',
        newValue: newVal
      });
    } else {}
  }
}

function isRef(r) {
  return !!(r && r.__v_isRef === true);
}

function ref(value) {
  return createRef(value, false);
}

function shallowRef(value) {
  return createRef(value, true);
}

function createRef(rawValue, shallow) {
  if (isRef(rawValue)) {
    return rawValue;
  }

  return new RefImpl(rawValue, shallow);
}

var RefImpl = /*#__PURE__*/function () {
  function RefImpl(value, __v_isShallow) {
    _classCallCheck(this, RefImpl);

    this.__v_isShallow = __v_isShallow;
    this.dep = undefined;
    this.__v_isRef = true;
    this._rawValue = __v_isShallow ? value : toRaw(value);
    this._value = __v_isShallow ? value : toReactive(value);
  }

  _createClass(RefImpl, [{
    key: "value",
    get: function get() {
      trackRefValue(this);
      return this._value;
    },
    set: function set(newVal) {
      newVal = this.__v_isShallow ? newVal : toRaw(newVal);

      if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.hasChanged)(newVal, this._rawValue)) {
        this._rawValue = newVal;
        this._value = this.__v_isShallow ? newVal : toReactive(newVal);
        triggerRefValue(this, newVal);
      }
    }
  }]);

  return RefImpl;
}();

function triggerRef(ref) {
  triggerRefValue(ref,  true ? ref.value : 0);
}

function unref(ref) {
  return isRef(ref) ? ref.value : ref;
}

var shallowUnwrapHandlers = {
  get: function get(target, key, receiver) {
    return unref(Reflect.get(target, key, receiver));
  },
  set: function set(target, key, value, receiver) {
    var oldValue = target[key];

    if (isRef(oldValue) && !isRef(value)) {
      oldValue.value = value;
      return true;
    } else {
      return Reflect.set(target, key, value, receiver);
    }
  }
};

function proxyRefs(objectWithRefs) {
  return isReactive(objectWithRefs) ? objectWithRefs : new Proxy(objectWithRefs, shallowUnwrapHandlers);
}

var CustomRefImpl = /*#__PURE__*/function () {
  function CustomRefImpl(factory) {
    var _this = this;

    _classCallCheck(this, CustomRefImpl);

    this.dep = undefined;
    this.__v_isRef = true;

    var _factory = factory(function () {
      return trackRefValue(_this);
    }, function () {
      return triggerRefValue(_this);
    }),
        get = _factory.get,
        set = _factory.set;

    this._get = get;
    this._set = set;
  }

  _createClass(CustomRefImpl, [{
    key: "value",
    get: function get() {
      return this._get();
    },
    set: function set(newVal) {
      this._set(newVal);
    }
  }]);

  return CustomRefImpl;
}();

function customRef(factory) {
  return new CustomRefImpl(factory);
}

function toRefs(object) {
  if ( true && !isProxy(object)) {
    console.warn("toRefs() expects a reactive object but received a plain one.");
  }

  var ret = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isArray)(object) ? new Array(object.length) : {};

  for (var key in object) {
    ret[key] = toRef(object, key);
  }

  return ret;
}

var ObjectRefImpl = /*#__PURE__*/function () {
  function ObjectRefImpl(_object, _key, _defaultValue) {
    _classCallCheck(this, ObjectRefImpl);

    this._object = _object;
    this._key = _key;
    this._defaultValue = _defaultValue;
    this.__v_isRef = true;
  }

  _createClass(ObjectRefImpl, [{
    key: "value",
    get: function get() {
      var val = this._object[this._key];
      return val === undefined ? this._defaultValue : val;
    },
    set: function set(newVal) {
      this._object[this._key] = newVal;
    }
  }]);

  return ObjectRefImpl;
}();

function toRef(object, key, defaultValue) {
  var val = object[key];
  return isRef(val) ? val : new ObjectRefImpl(object, key, defaultValue);
}

var ComputedRefImpl = /*#__PURE__*/function () {
  function ComputedRefImpl(getter, _setter, isReadonly, isSSR) {
    var _this2 = this;

    _classCallCheck(this, ComputedRefImpl);

    this._setter = _setter;
    this.dep = undefined;
    this.__v_isRef = true;
    this._dirty = true;
    this.effect = new ReactiveEffect(getter, function () {
      if (!_this2._dirty) {
        _this2._dirty = true;
        triggerRefValue(_this2);
      }
    });
    this.effect.computed = this;
    this.effect.active = this._cacheable = !isSSR;
    this["__v_isReadonly"
    /* IS_READONLY */
    ] = isReadonly;
  }

  _createClass(ComputedRefImpl, [{
    key: "value",
    get: function get() {
      // the computed ref may get wrapped by other proxies e.g. readonly() #3376
      var self = toRaw(this);
      trackRefValue(self);

      if (self._dirty || !self._cacheable) {
        self._dirty = false;
        self._value = self.effect.run();
      }

      return self._value;
    },
    set: function set(newValue) {
      this._setter(newValue);
    }
  }]);

  return ComputedRefImpl;
}();

function computed(getterOrOptions, debugOptions) {
  var isSSR = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var getter;
  var setter;
  var onlyGetter = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isFunction)(getterOrOptions);

  if (onlyGetter) {
    getter = getterOrOptions;
    setter =  true ? function () {
      console.warn('Write operation failed: computed value is readonly');
    } : 0;
  } else {
    getter = getterOrOptions.get;
    setter = getterOrOptions.set;
  }

  var cRef = new ComputedRefImpl(getter, setter, onlyGetter || !setter, isSSR);

  if ( true && debugOptions && !isSSR) {
    cRef.effect.onTrack = debugOptions.onTrack;
    cRef.effect.onTrigger = debugOptions.onTrigger;
  }

  return cRef;
}

var _a;

var tick = /*#__PURE__*/Promise.resolve();
var queue = [];
var queued = false;

var scheduler = function scheduler(fn) {
  queue.push(fn);

  if (!queued) {
    queued = true;
    tick.then(flush);
  }
};

var flush = function flush() {
  for (var i = 0; i < queue.length; i++) {
    queue[i]();
  }

  queue.length = 0;
  queued = false;
};

var DeferredComputedRefImpl = /*#__PURE__*/function () {
  function DeferredComputedRefImpl(getter) {
    var _this3 = this;

    _classCallCheck(this, DeferredComputedRefImpl);

    this.dep = undefined;
    this._dirty = true;
    this.__v_isRef = true;
    this[_a] = true;
    var compareTarget;
    var hasCompareTarget = false;
    var scheduled = false;
    this.effect = new ReactiveEffect(getter, function (computedTrigger) {
      if (_this3.dep) {
        if (computedTrigger) {
          compareTarget = _this3._value;
          hasCompareTarget = true;
        } else if (!scheduled) {
          var valueToCompare = hasCompareTarget ? compareTarget : _this3._value;
          scheduled = true;
          hasCompareTarget = false;
          scheduler(function () {
            if (_this3.effect.active && _this3._get() !== valueToCompare) {
              triggerRefValue(_this3);
            }

            scheduled = false;
          });
        } // chained upstream computeds are notified synchronously to ensure
        // value invalidation in case of sync access; normal effects are
        // deferred to be triggered in scheduler.


        var _iterator4 = _createForOfIteratorHelper(_this3.dep),
            _step4;

        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
            var e = _step4.value;

            if (e.computed instanceof DeferredComputedRefImpl) {
              e.scheduler(true
              /* computedTrigger */
              );
            }
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }
      }

      _this3._dirty = true;
    });
    this.effect.computed = this;
  }

  _createClass(DeferredComputedRefImpl, [{
    key: "_get",
    value: function _get() {
      if (this._dirty) {
        this._dirty = false;
        return this._value = this.effect.run();
      }

      return this._value;
    }
  }, {
    key: "value",
    get: function get() {
      trackRefValue(this); // the computed ref may get wrapped by other proxies e.g. readonly() #3376

      return toRaw(this)._get();
    }
  }]);

  return DeferredComputedRefImpl;
}();

_a = "__v_isReadonly"
/* IS_READONLY */
;

function deferredComputed(getter) {
  return new DeferredComputedRefImpl(getter);
}



/***/ }),

/***/ "./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseTransition": () => (/* binding */ BaseTransition),
/* harmony export */   "Comment": () => (/* binding */ Comment),
/* harmony export */   "EffectScope": () => (/* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.EffectScope),
/* harmony export */   "Fragment": () => (/* binding */ Fragment),
/* harmony export */   "KeepAlive": () => (/* binding */ KeepAlive),
/* harmony export */   "ReactiveEffect": () => (/* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.ReactiveEffect),
/* harmony export */   "Static": () => (/* binding */ Static),
/* harmony export */   "Suspense": () => (/* binding */ Suspense),
/* harmony export */   "Teleport": () => (/* binding */ Teleport),
/* harmony export */   "Text": () => (/* binding */ Text),
/* harmony export */   "callWithAsyncErrorHandling": () => (/* binding */ callWithAsyncErrorHandling),
/* harmony export */   "callWithErrorHandling": () => (/* binding */ callWithErrorHandling),
/* harmony export */   "camelize": () => (/* reexport safe */ _vue_shared__WEBPACK_IMPORTED_MODULE_1__.camelize),
/* harmony export */   "capitalize": () => (/* reexport safe */ _vue_shared__WEBPACK_IMPORTED_MODULE_1__.capitalize),
/* harmony export */   "cloneVNode": () => (/* binding */ cloneVNode),
/* harmony export */   "compatUtils": () => (/* binding */ compatUtils),
/* harmony export */   "computed": () => (/* binding */ computed),
/* harmony export */   "createBlock": () => (/* binding */ createBlock),
/* harmony export */   "createCommentVNode": () => (/* binding */ createCommentVNode),
/* harmony export */   "createElementBlock": () => (/* binding */ createElementBlock),
/* harmony export */   "createElementVNode": () => (/* binding */ createBaseVNode),
/* harmony export */   "createHydrationRenderer": () => (/* binding */ createHydrationRenderer),
/* harmony export */   "createPropsRestProxy": () => (/* binding */ createPropsRestProxy),
/* harmony export */   "createRenderer": () => (/* binding */ createRenderer),
/* harmony export */   "createSlots": () => (/* binding */ createSlots),
/* harmony export */   "createStaticVNode": () => (/* binding */ createStaticVNode),
/* harmony export */   "createTextVNode": () => (/* binding */ createTextVNode),
/* harmony export */   "createVNode": () => (/* binding */ createVNode),
/* harmony export */   "customRef": () => (/* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.customRef),
/* harmony export */   "defineAsyncComponent": () => (/* binding */ defineAsyncComponent),
/* harmony export */   "defineComponent": () => (/* binding */ defineComponent),
/* harmony export */   "defineEmits": () => (/* binding */ defineEmits),
/* harmony export */   "defineExpose": () => (/* binding */ defineExpose),
/* harmony export */   "defineProps": () => (/* binding */ defineProps),
/* harmony export */   "devtools": () => (/* binding */ devtools),
/* harmony export */   "effect": () => (/* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.effect),
/* harmony export */   "effectScope": () => (/* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.effectScope),
/* harmony export */   "getCurrentInstance": () => (/* binding */ getCurrentInstance),
/* harmony export */   "getCurrentScope": () => (/* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.getCurrentScope),
/* harmony export */   "getTransitionRawChildren": () => (/* binding */ getTransitionRawChildren),
/* harmony export */   "guardReactiveProps": () => (/* binding */ guardReactiveProps),
/* harmony export */   "h": () => (/* binding */ h),
/* harmony export */   "handleError": () => (/* binding */ handleError),
/* harmony export */   "initCustomFormatter": () => (/* binding */ initCustomFormatter),
/* harmony export */   "inject": () => (/* binding */ inject),
/* harmony export */   "isMemoSame": () => (/* binding */ isMemoSame),
/* harmony export */   "isProxy": () => (/* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isProxy),
/* harmony export */   "isReactive": () => (/* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isReactive),
/* harmony export */   "isReadonly": () => (/* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isReadonly),
/* harmony export */   "isRef": () => (/* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isRef),
/* harmony export */   "isRuntimeOnly": () => (/* binding */ isRuntimeOnly),
/* harmony export */   "isShallow": () => (/* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isShallow),
/* harmony export */   "isVNode": () => (/* binding */ isVNode),
/* harmony export */   "markRaw": () => (/* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.markRaw),
/* harmony export */   "mergeDefaults": () => (/* binding */ mergeDefaults),
/* harmony export */   "mergeProps": () => (/* binding */ mergeProps),
/* harmony export */   "nextTick": () => (/* binding */ nextTick),
/* harmony export */   "normalizeClass": () => (/* reexport safe */ _vue_shared__WEBPACK_IMPORTED_MODULE_1__.normalizeClass),
/* harmony export */   "normalizeProps": () => (/* reexport safe */ _vue_shared__WEBPACK_IMPORTED_MODULE_1__.normalizeProps),
/* harmony export */   "normalizeStyle": () => (/* reexport safe */ _vue_shared__WEBPACK_IMPORTED_MODULE_1__.normalizeStyle),
/* harmony export */   "onActivated": () => (/* binding */ onActivated),
/* harmony export */   "onBeforeMount": () => (/* binding */ onBeforeMount),
/* harmony export */   "onBeforeUnmount": () => (/* binding */ onBeforeUnmount),
/* harmony export */   "onBeforeUpdate": () => (/* binding */ onBeforeUpdate),
/* harmony export */   "onDeactivated": () => (/* binding */ onDeactivated),
/* harmony export */   "onErrorCaptured": () => (/* binding */ onErrorCaptured),
/* harmony export */   "onMounted": () => (/* binding */ onMounted),
/* harmony export */   "onRenderTracked": () => (/* binding */ onRenderTracked),
/* harmony export */   "onRenderTriggered": () => (/* binding */ onRenderTriggered),
/* harmony export */   "onScopeDispose": () => (/* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.onScopeDispose),
/* harmony export */   "onServerPrefetch": () => (/* binding */ onServerPrefetch),
/* harmony export */   "onUnmounted": () => (/* binding */ onUnmounted),
/* harmony export */   "onUpdated": () => (/* binding */ onUpdated),
/* harmony export */   "openBlock": () => (/* binding */ openBlock),
/* harmony export */   "popScopeId": () => (/* binding */ popScopeId),
/* harmony export */   "provide": () => (/* binding */ provide),
/* harmony export */   "proxyRefs": () => (/* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.proxyRefs),
/* harmony export */   "pushScopeId": () => (/* binding */ pushScopeId),
/* harmony export */   "queuePostFlushCb": () => (/* binding */ queuePostFlushCb),
/* harmony export */   "reactive": () => (/* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.reactive),
/* harmony export */   "readonly": () => (/* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.readonly),
/* harmony export */   "ref": () => (/* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.ref),
/* harmony export */   "registerRuntimeCompiler": () => (/* binding */ registerRuntimeCompiler),
/* harmony export */   "renderList": () => (/* binding */ renderList),
/* harmony export */   "renderSlot": () => (/* binding */ renderSlot),
/* harmony export */   "resolveComponent": () => (/* binding */ resolveComponent),
/* harmony export */   "resolveDirective": () => (/* binding */ resolveDirective),
/* harmony export */   "resolveDynamicComponent": () => (/* binding */ resolveDynamicComponent),
/* harmony export */   "resolveFilter": () => (/* binding */ resolveFilter),
/* harmony export */   "resolveTransitionHooks": () => (/* binding */ resolveTransitionHooks),
/* harmony export */   "setBlockTracking": () => (/* binding */ setBlockTracking),
/* harmony export */   "setDevtoolsHook": () => (/* binding */ setDevtoolsHook),
/* harmony export */   "setTransitionHooks": () => (/* binding */ setTransitionHooks),
/* harmony export */   "shallowReactive": () => (/* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.shallowReactive),
/* harmony export */   "shallowReadonly": () => (/* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.shallowReadonly),
/* harmony export */   "shallowRef": () => (/* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.shallowRef),
/* harmony export */   "ssrContextKey": () => (/* binding */ ssrContextKey),
/* harmony export */   "ssrUtils": () => (/* binding */ ssrUtils),
/* harmony export */   "stop": () => (/* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.stop),
/* harmony export */   "toDisplayString": () => (/* reexport safe */ _vue_shared__WEBPACK_IMPORTED_MODULE_1__.toDisplayString),
/* harmony export */   "toHandlerKey": () => (/* reexport safe */ _vue_shared__WEBPACK_IMPORTED_MODULE_1__.toHandlerKey),
/* harmony export */   "toHandlers": () => (/* binding */ toHandlers),
/* harmony export */   "toRaw": () => (/* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.toRaw),
/* harmony export */   "toRef": () => (/* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.toRef),
/* harmony export */   "toRefs": () => (/* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.toRefs),
/* harmony export */   "transformVNodeArgs": () => (/* binding */ transformVNodeArgs),
/* harmony export */   "triggerRef": () => (/* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.triggerRef),
/* harmony export */   "unref": () => (/* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.unref),
/* harmony export */   "useAttrs": () => (/* binding */ useAttrs),
/* harmony export */   "useSSRContext": () => (/* binding */ useSSRContext),
/* harmony export */   "useSlots": () => (/* binding */ useSlots),
/* harmony export */   "useTransitionState": () => (/* binding */ useTransitionState),
/* harmony export */   "version": () => (/* binding */ version),
/* harmony export */   "warn": () => (/* binding */ warn),
/* harmony export */   "watch": () => (/* binding */ watch),
/* harmony export */   "watchEffect": () => (/* binding */ watchEffect),
/* harmony export */   "watchPostEffect": () => (/* binding */ watchPostEffect),
/* harmony export */   "watchSyncEffect": () => (/* binding */ watchSyncEffect),
/* harmony export */   "withAsyncContext": () => (/* binding */ withAsyncContext),
/* harmony export */   "withCtx": () => (/* binding */ withCtx),
/* harmony export */   "withDefaults": () => (/* binding */ withDefaults),
/* harmony export */   "withDirectives": () => (/* binding */ withDirectives),
/* harmony export */   "withMemo": () => (/* binding */ withMemo),
/* harmony export */   "withScopeId": () => (/* binding */ withScopeId)
/* harmony export */ });
/* harmony import */ var _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue/reactivity */ "./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js");
/* harmony import */ var _vue_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vue/shared */ "./node_modules/@vue/shared/dist/shared.esm-bundler.js");
var _ErrorTypeStrings;

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }





var stack = [];

function pushWarningContext(vnode) {
  stack.push(vnode);
}

function popWarningContext() {
  stack.pop();
}

function warn(msg) {
  // avoid props formatting or warn handler tracking deps that might be mutated
  // during patch, leading to infinite recursion.
  (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.pauseTracking)();
  var instance = stack.length ? stack[stack.length - 1].component : null;
  var appWarnHandler = instance && instance.appContext.config.warnHandler;
  var trace = getComponentTrace();

  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  if (appWarnHandler) {
    callWithErrorHandling(appWarnHandler, instance, 11
    /* APP_WARN_HANDLER */
    , [msg + args.join(''), instance && instance.proxy, trace.map(function (_ref) {
      var vnode = _ref.vnode;
      return "at <".concat(formatComponentName(instance, vnode.type), ">");
    }).join('\n'), trace]);
  } else {
    var _console;

    var warnArgs = ["[Vue warn]: ".concat(msg)].concat(args);
    /* istanbul ignore if */

    if (trace.length && // avoid spamming console during tests
    !false) {
      warnArgs.push.apply(warnArgs, ["\n"].concat(_toConsumableArray(formatTrace(trace))));
    }

    (_console = console).warn.apply(_console, _toConsumableArray(warnArgs));
  }

  (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.resetTracking)();
}

function getComponentTrace() {
  var currentVNode = stack[stack.length - 1];

  if (!currentVNode) {
    return [];
  } // we can't just use the stack because it will be incomplete during updates
  // that did not start from the root. Re-construct the parent chain using
  // instance parent pointers.


  var normalizedStack = [];

  while (currentVNode) {
    var last = normalizedStack[0];

    if (last && last.vnode === currentVNode) {
      last.recurseCount++;
    } else {
      normalizedStack.push({
        vnode: currentVNode,
        recurseCount: 0
      });
    }

    var parentInstance = currentVNode.component && currentVNode.component.parent;
    currentVNode = parentInstance && parentInstance.vnode;
  }

  return normalizedStack;
}
/* istanbul ignore next */


function formatTrace(trace) {
  var logs = [];
  trace.forEach(function (entry, i) {
    logs.push.apply(logs, _toConsumableArray(i === 0 ? [] : ["\n"]).concat(_toConsumableArray(formatTraceEntry(entry))));
  });
  return logs;
}

function formatTraceEntry(_ref2) {
  var vnode = _ref2.vnode,
      recurseCount = _ref2.recurseCount;
  var postfix = recurseCount > 0 ? "... (".concat(recurseCount, " recursive calls)") : "";
  var isRoot = vnode.component ? vnode.component.parent == null : false;
  var open = " at <".concat(formatComponentName(vnode.component, vnode.type, isRoot));
  var close = ">" + postfix;
  return vnode.props ? [open].concat(_toConsumableArray(formatProps(vnode.props)), [close]) : [open + close];
}
/* istanbul ignore next */


function formatProps(props) {
  var res = [];
  var keys = Object.keys(props);
  keys.slice(0, 3).forEach(function (key) {
    res.push.apply(res, _toConsumableArray(formatProp(key, props[key])));
  });

  if (keys.length > 3) {
    res.push(" ...");
  }

  return res;
}
/* istanbul ignore next */


function formatProp(key, value, raw) {
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(value)) {
    value = JSON.stringify(value);
    return raw ? value : ["".concat(key, "=").concat(value)];
  } else if (typeof value === 'number' || typeof value === 'boolean' || value == null) {
    return raw ? value : ["".concat(key, "=").concat(value)];
  } else if ((0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isRef)(value)) {
    value = formatProp(key, (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.toRaw)(value.value), true);
    return raw ? value : ["".concat(key, "=Ref<"), value, ">"];
  } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(value)) {
    return ["".concat(key, "=fn").concat(value.name ? "<".concat(value.name, ">") : "")];
  } else {
    value = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.toRaw)(value);
    return raw ? value : ["".concat(key, "="), value];
  }
}

var ErrorTypeStrings = (_ErrorTypeStrings = {}, _defineProperty(_ErrorTypeStrings, "sp"
/* SERVER_PREFETCH */
, 'serverPrefetch hook'), _defineProperty(_ErrorTypeStrings, "bc"
/* BEFORE_CREATE */
, 'beforeCreate hook'), _defineProperty(_ErrorTypeStrings, "c"
/* CREATED */
, 'created hook'), _defineProperty(_ErrorTypeStrings, "bm"
/* BEFORE_MOUNT */
, 'beforeMount hook'), _defineProperty(_ErrorTypeStrings, "m"
/* MOUNTED */
, 'mounted hook'), _defineProperty(_ErrorTypeStrings, "bu"
/* BEFORE_UPDATE */
, 'beforeUpdate hook'), _defineProperty(_ErrorTypeStrings, "u"
/* UPDATED */
, 'updated'), _defineProperty(_ErrorTypeStrings, "bum"
/* BEFORE_UNMOUNT */
, 'beforeUnmount hook'), _defineProperty(_ErrorTypeStrings, "um"
/* UNMOUNTED */
, 'unmounted hook'), _defineProperty(_ErrorTypeStrings, "a"
/* ACTIVATED */
, 'activated hook'), _defineProperty(_ErrorTypeStrings, "da"
/* DEACTIVATED */
, 'deactivated hook'), _defineProperty(_ErrorTypeStrings, "ec"
/* ERROR_CAPTURED */
, 'errorCaptured hook'), _defineProperty(_ErrorTypeStrings, "rtc"
/* RENDER_TRACKED */
, 'renderTracked hook'), _defineProperty(_ErrorTypeStrings, "rtg"
/* RENDER_TRIGGERED */
, 'renderTriggered hook'), _defineProperty(_ErrorTypeStrings, 0
/* SETUP_FUNCTION */
, 'setup function'), _defineProperty(_ErrorTypeStrings, 1
/* RENDER_FUNCTION */
, 'render function'), _defineProperty(_ErrorTypeStrings, 2
/* WATCH_GETTER */
, 'watcher getter'), _defineProperty(_ErrorTypeStrings, 3
/* WATCH_CALLBACK */
, 'watcher callback'), _defineProperty(_ErrorTypeStrings, 4
/* WATCH_CLEANUP */
, 'watcher cleanup function'), _defineProperty(_ErrorTypeStrings, 5
/* NATIVE_EVENT_HANDLER */
, 'native event handler'), _defineProperty(_ErrorTypeStrings, 6
/* COMPONENT_EVENT_HANDLER */
, 'component event handler'), _defineProperty(_ErrorTypeStrings, 7
/* VNODE_HOOK */
, 'vnode hook'), _defineProperty(_ErrorTypeStrings, 8
/* DIRECTIVE_HOOK */
, 'directive hook'), _defineProperty(_ErrorTypeStrings, 9
/* TRANSITION_HOOK */
, 'transition hook'), _defineProperty(_ErrorTypeStrings, 10
/* APP_ERROR_HANDLER */
, 'app errorHandler'), _defineProperty(_ErrorTypeStrings, 11
/* APP_WARN_HANDLER */
, 'app warnHandler'), _defineProperty(_ErrorTypeStrings, 12
/* FUNCTION_REF */
, 'ref function'), _defineProperty(_ErrorTypeStrings, 13
/* ASYNC_COMPONENT_LOADER */
, 'async component loader'), _defineProperty(_ErrorTypeStrings, 14
/* SCHEDULER */
, 'scheduler flush. This is likely a Vue internals bug. ' + 'Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core'), _ErrorTypeStrings);

function callWithErrorHandling(fn, instance, type, args) {
  var res;

  try {
    res = args ? fn.apply(void 0, _toConsumableArray(args)) : fn();
  } catch (err) {
    handleError(err, instance, type);
  }

  return res;
}

function callWithAsyncErrorHandling(fn, instance, type, args) {
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(fn)) {
    var res = callWithErrorHandling(fn, instance, type, args);

    if (res && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isPromise)(res)) {
      res["catch"](function (err) {
        handleError(err, instance, type);
      });
    }

    return res;
  }

  var values = [];

  for (var i = 0; i < fn.length; i++) {
    values.push(callWithAsyncErrorHandling(fn[i], instance, type, args));
  }

  return values;
}

function handleError(err, instance, type) {
  var throwInDev = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
  var contextVNode = instance ? instance.vnode : null;

  if (instance) {
    var cur = instance.parent; // the exposed instance is the render proxy to keep it consistent with 2.x

    var exposedInstance = instance.proxy; // in production the hook receives only the error code

    var errorInfo =  true ? ErrorTypeStrings[type] : 0;

    while (cur) {
      var errorCapturedHooks = cur.ec;

      if (errorCapturedHooks) {
        for (var i = 0; i < errorCapturedHooks.length; i++) {
          if (errorCapturedHooks[i](err, exposedInstance, errorInfo) === false) {
            return;
          }
        }
      }

      cur = cur.parent;
    } // app-level handling


    var appErrorHandler = instance.appContext.config.errorHandler;

    if (appErrorHandler) {
      callWithErrorHandling(appErrorHandler, null, 10
      /* APP_ERROR_HANDLER */
      , [err, exposedInstance, errorInfo]);
      return;
    }
  }

  logError(err, type, contextVNode, throwInDev);
}

function logError(err, type, contextVNode) {
  var throwInDev = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

  if (true) {
    var info = ErrorTypeStrings[type];

    if (contextVNode) {
      pushWarningContext(contextVNode);
    }

    warn("Unhandled error".concat(info ? " during execution of ".concat(info) : ""));

    if (contextVNode) {
      popWarningContext();
    } // crash in dev by default so it's more noticeable


    if (throwInDev) {
      throw err;
    } else {
      console.error(err);
    }
  } else {}
}

var isFlushing = false;
var isFlushPending = false;
var queue = [];
var flushIndex = 0;
var pendingPreFlushCbs = [];
var activePreFlushCbs = null;
var preFlushIndex = 0;
var pendingPostFlushCbs = [];
var activePostFlushCbs = null;
var postFlushIndex = 0;
var resolvedPromise = /*#__PURE__*/Promise.resolve();
var currentFlushPromise = null;
var currentPreFlushParentJob = null;
var RECURSION_LIMIT = 100;

function nextTick(fn) {
  var p = currentFlushPromise || resolvedPromise;
  return fn ? p.then(this ? fn.bind(this) : fn) : p;
} // #2768
// Use binary-search to find a suitable position in the queue,
// so that the queue maintains the increasing order of job's id,
// which can prevent the job from being skipped and also can avoid repeated patching.


function findInsertionIndex(id) {
  // the start index should be `flushIndex + 1`
  var start = flushIndex + 1;
  var end = queue.length;

  while (start < end) {
    var middle = start + end >>> 1;
    var middleJobId = getId(queue[middle]);
    middleJobId < id ? start = middle + 1 : end = middle;
  }

  return start;
}

function queueJob(job) {
  // the dedupe search uses the startIndex argument of Array.includes()
  // by default the search index includes the current job that is being run
  // so it cannot recursively trigger itself again.
  // if the job is a watch() callback, the search will start with a +1 index to
  // allow it recursively trigger itself - it is the user's responsibility to
  // ensure it doesn't end up in an infinite loop.
  if ((!queue.length || !queue.includes(job, isFlushing && job.allowRecurse ? flushIndex + 1 : flushIndex)) && job !== currentPreFlushParentJob) {
    if (job.id == null) {
      queue.push(job);
    } else {
      queue.splice(findInsertionIndex(job.id), 0, job);
    }

    queueFlush();
  }
}

function queueFlush() {
  if (!isFlushing && !isFlushPending) {
    isFlushPending = true;
    currentFlushPromise = resolvedPromise.then(flushJobs);
  }
}

function invalidateJob(job) {
  var i = queue.indexOf(job);

  if (i > flushIndex) {
    queue.splice(i, 1);
  }
}

function queueCb(cb, activeQueue, pendingQueue, index) {
  if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(cb)) {
    if (!activeQueue || !activeQueue.includes(cb, cb.allowRecurse ? index + 1 : index)) {
      pendingQueue.push(cb);
    }
  } else {
    // if cb is an array, it is a component lifecycle hook which can only be
    // triggered by a job, which is already deduped in the main queue, so
    // we can skip duplicate check here to improve perf
    pendingQueue.push.apply(pendingQueue, _toConsumableArray(cb));
  }

  queueFlush();
}

function queuePreFlushCb(cb) {
  queueCb(cb, activePreFlushCbs, pendingPreFlushCbs, preFlushIndex);
}

function queuePostFlushCb(cb) {
  queueCb(cb, activePostFlushCbs, pendingPostFlushCbs, postFlushIndex);
}

function flushPreFlushCbs(seen) {
  var parentJob = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

  if (pendingPreFlushCbs.length) {
    currentPreFlushParentJob = parentJob;
    activePreFlushCbs = _toConsumableArray(new Set(pendingPreFlushCbs));
    pendingPreFlushCbs.length = 0;

    if (true) {
      seen = seen || new Map();
    }

    for (preFlushIndex = 0; preFlushIndex < activePreFlushCbs.length; preFlushIndex++) {
      if ( true && checkRecursiveUpdates(seen, activePreFlushCbs[preFlushIndex])) {
        continue;
      }

      activePreFlushCbs[preFlushIndex]();
    }

    activePreFlushCbs = null;
    preFlushIndex = 0;
    currentPreFlushParentJob = null; // recursively flush until it drains

    flushPreFlushCbs(seen, parentJob);
  }
}

function flushPostFlushCbs(seen) {
  // flush any pre cbs queued during the flush (e.g. pre watchers)
  flushPreFlushCbs();

  if (pendingPostFlushCbs.length) {
    var deduped = _toConsumableArray(new Set(pendingPostFlushCbs));

    pendingPostFlushCbs.length = 0; // #1947 already has active queue, nested flushPostFlushCbs call

    if (activePostFlushCbs) {
      var _activePostFlushCbs;

      (_activePostFlushCbs = activePostFlushCbs).push.apply(_activePostFlushCbs, _toConsumableArray(deduped));

      return;
    }

    activePostFlushCbs = deduped;

    if (true) {
      seen = seen || new Map();
    }

    activePostFlushCbs.sort(function (a, b) {
      return getId(a) - getId(b);
    });

    for (postFlushIndex = 0; postFlushIndex < activePostFlushCbs.length; postFlushIndex++) {
      if ( true && checkRecursiveUpdates(seen, activePostFlushCbs[postFlushIndex])) {
        continue;
      }

      activePostFlushCbs[postFlushIndex]();
    }

    activePostFlushCbs = null;
    postFlushIndex = 0;
  }
}

var getId = function getId(job) {
  return job.id == null ? Infinity : job.id;
};

function flushJobs(seen) {
  isFlushPending = false;
  isFlushing = true;

  if (true) {
    seen = seen || new Map();
  }

  flushPreFlushCbs(seen); // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child so its render effect will have smaller
  //    priority number)
  // 2. If a component is unmounted during a parent component's update,
  //    its update can be skipped.

  queue.sort(function (a, b) {
    return getId(a) - getId(b);
  }); // conditional usage of checkRecursiveUpdate must be determined out of
  // try ... catch block since Rollup by default de-optimizes treeshaking
  // inside try-catch. This can leave all warning code unshaked. Although
  // they would get eventually shaken by a minifier like terser, some minifiers
  // would fail to do that (e.g. https://github.com/evanw/esbuild/issues/1610)

  var check =  true ? function (job) {
    return checkRecursiveUpdates(seen, job);
  } : 0;

  try {
    for (flushIndex = 0; flushIndex < queue.length; flushIndex++) {
      var job = queue[flushIndex];

      if (job && job.active !== false) {
        if ( true && check(job)) {
          continue;
        } // console.log(`running:`, job.id)


        callWithErrorHandling(job, null, 14
        /* SCHEDULER */
        );
      }
    }
  } finally {
    flushIndex = 0;
    queue.length = 0;
    flushPostFlushCbs(seen);
    isFlushing = false;
    currentFlushPromise = null; // some postFlushCb queued jobs!
    // keep flushing until it drains.

    if (queue.length || pendingPreFlushCbs.length || pendingPostFlushCbs.length) {
      flushJobs(seen);
    }
  }
}

function checkRecursiveUpdates(seen, fn) {
  if (!seen.has(fn)) {
    seen.set(fn, 1);
  } else {
    var count = seen.get(fn);

    if (count > RECURSION_LIMIT) {
      var instance = fn.ownerInstance;
      var componentName = instance && getComponentName(instance.type);
      warn("Maximum recursive updates exceeded".concat(componentName ? " in component <".concat(componentName, ">") : "", ". ") + "This means you have a reactive effect that is mutating its own " + "dependencies and thus recursively triggering itself. Possible sources " + "include component template, render function, updated hook or " + "watcher source function.");
      return true;
    } else {
      seen.set(fn, count + 1);
    }
  }
}
/* eslint-disable no-restricted-globals */


var isHmrUpdating = false;
var hmrDirtyComponents = new Set(); // Expose the HMR runtime on the global object
// This makes it entirely tree-shakable without polluting the exports and makes
// it easier to be used in toolings like vue-loader
// Note: for a component to be eligible for HMR it also needs the __hmrId option
// to be set so that its instances can be registered / removed.

if (true) {
  (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.getGlobalThis)().__VUE_HMR_RUNTIME__ = {
    createRecord: tryWrap(createRecord),
    rerender: tryWrap(rerender),
    reload: tryWrap(reload)
  };
}

var map = new Map();

function registerHMR(instance) {
  var id = instance.type.__hmrId;
  var record = map.get(id);

  if (!record) {
    createRecord(id, instance.type);
    record = map.get(id);
  }

  record.instances.add(instance);
}

function unregisterHMR(instance) {
  map.get(instance.type.__hmrId).instances["delete"](instance);
}

function createRecord(id, initialDef) {
  if (map.has(id)) {
    return false;
  }

  map.set(id, {
    initialDef: normalizeClassComponent(initialDef),
    instances: new Set()
  });
  return true;
}

function normalizeClassComponent(component) {
  return isClassComponent(component) ? component.__vccOpts : component;
}

function rerender(id, newRender) {
  var record = map.get(id);

  if (!record) {
    return;
  } // update initial record (for not-yet-rendered component)


  record.initialDef.render = newRender;

  _toConsumableArray(record.instances).forEach(function (instance) {
    if (newRender) {
      instance.render = newRender;
      normalizeClassComponent(instance.type).render = newRender;
    }

    instance.renderCache = []; // this flag forces child components with slot content to update

    isHmrUpdating = true;
    instance.update();
    isHmrUpdating = false;
  });
}

function reload(id, newComp) {
  var record = map.get(id);
  if (!record) return;
  newComp = normalizeClassComponent(newComp); // update initial def (for not-yet-rendered components)

  updateComponentDef(record.initialDef, newComp); // create a snapshot which avoids the set being mutated during updates

  var instances = _toConsumableArray(record.instances);

  var _iterator = _createForOfIteratorHelper(instances),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var instance = _step.value;
      var oldComp = normalizeClassComponent(instance.type);

      if (!hmrDirtyComponents.has(oldComp)) {
        // 1. Update existing comp definition to match new one
        if (oldComp !== record.initialDef) {
          updateComponentDef(oldComp, newComp);
        } // 2. mark definition dirty. This forces the renderer to replace the
        // component on patch.


        hmrDirtyComponents.add(oldComp);
      } // 3. invalidate options resolution cache


      instance.appContext.optionsCache["delete"](instance.type); // 4. actually update

      if (instance.ceReload) {
        // custom element
        hmrDirtyComponents.add(oldComp);
        instance.ceReload(newComp.styles);
        hmrDirtyComponents["delete"](oldComp);
      } else if (instance.parent) {
        // 4. Force the parent instance to re-render. This will cause all updated
        // components to be unmounted and re-mounted. Queue the update so that we
        // don't end up forcing the same parent to re-render multiple times.
        queueJob(instance.parent.update); // instance is the inner component of an async custom element
        // invoke to reset styles

        if (instance.parent.type.__asyncLoader && instance.parent.ceReload) {
          instance.parent.ceReload(newComp.styles);
        }
      } else if (instance.appContext.reload) {
        // root instance mounted via createApp() has a reload method
        instance.appContext.reload();
      } else if (typeof window !== 'undefined') {
        // root instance inside tree created via raw render(). Force reload.
        window.location.reload();
      } else {
        console.warn('[HMR] Root or manually mounted instance modified. Full reload required.');
      }
    } // 5. make sure to cleanup dirty hmr components after update

  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  queuePostFlushCb(function () {
    var _iterator2 = _createForOfIteratorHelper(instances),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var instance = _step2.value;
        hmrDirtyComponents["delete"](normalizeClassComponent(instance.type));
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  });
}

function updateComponentDef(oldComp, newComp) {
  (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)(oldComp, newComp);

  for (var key in oldComp) {
    if (key !== '__file' && !(key in newComp)) {
      delete oldComp[key];
    }
  }
}

function tryWrap(fn) {
  return function (id, arg) {
    try {
      return fn(id, arg);
    } catch (e) {
      console.error(e);
      console.warn("[HMR] Something went wrong during Vue component hot-reload. " + "Full reload required.");
    }
  };
}

var devtools;
var buffer = [];
var devtoolsNotInstalled = false;

function emit(event) {
  for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    args[_key2 - 1] = arguments[_key2];
  }

  if (devtools) {
    var _devtools;

    (_devtools = devtools).emit.apply(_devtools, [event].concat(args));
  } else if (!devtoolsNotInstalled) {
    buffer.push({
      event: event,
      args: args
    });
  }
}

function setDevtoolsHook(hook, target) {
  var _a, _b;

  devtools = hook;

  if (devtools) {
    devtools.enabled = true;
    buffer.forEach(function (_ref3) {
      var _devtools2;

      var event = _ref3.event,
          args = _ref3.args;
      return (_devtools2 = devtools).emit.apply(_devtools2, [event].concat(_toConsumableArray(args)));
    });
    buffer = [];
  } else if ( // handle late devtools injection - only do this if we are in an actual
  // browser environment to avoid the timer handle stalling test runner exit
  // (#4815)
  typeof window !== 'undefined' && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  !((_b = (_a = window.navigator) === null || _a === void 0 ? void 0 : _a.userAgent) === null || _b === void 0 ? void 0 : _b.includes('jsdom'))) {
    var replay = target.__VUE_DEVTOOLS_HOOK_REPLAY__ = target.__VUE_DEVTOOLS_HOOK_REPLAY__ || [];
    replay.push(function (newHook) {
      setDevtoolsHook(newHook, target);
    }); // clear buffer after 3s - the user probably doesn't have devtools installed
    // at all, and keeping the buffer will cause memory leaks (#4738)

    setTimeout(function () {
      if (!devtools) {
        target.__VUE_DEVTOOLS_HOOK_REPLAY__ = null;
        devtoolsNotInstalled = true;
        buffer = [];
      }
    }, 3000);
  } else {
    // non-browser env, assume not installed
    devtoolsNotInstalled = true;
    buffer = [];
  }
}

function devtoolsInitApp(app, version) {
  emit("app:init"
  /* APP_INIT */
  , app, version, {
    Fragment: Fragment,
    Text: Text,
    Comment: Comment,
    Static: Static
  });
}

function devtoolsUnmountApp(app) {
  emit("app:unmount"
  /* APP_UNMOUNT */
  , app);
}

var devtoolsComponentAdded = /*#__PURE__*/createDevtoolsComponentHook("component:added"
/* COMPONENT_ADDED */
);
var devtoolsComponentUpdated = /*#__PURE__*/createDevtoolsComponentHook("component:updated"
/* COMPONENT_UPDATED */
);
var devtoolsComponentRemoved = /*#__PURE__*/createDevtoolsComponentHook("component:removed"
/* COMPONENT_REMOVED */
);

function createDevtoolsComponentHook(hook) {
  return function (component) {
    emit(hook, component.appContext.app, component.uid, component.parent ? component.parent.uid : undefined, component);
  };
}

var devtoolsPerfStart = /*#__PURE__*/createDevtoolsPerformanceHook("perf:start"
/* PERFORMANCE_START */
);
var devtoolsPerfEnd = /*#__PURE__*/createDevtoolsPerformanceHook("perf:end"
/* PERFORMANCE_END */
);

function createDevtoolsPerformanceHook(hook) {
  return function (component, type, time) {
    emit(hook, component.appContext.app, component.uid, component, type, time);
  };
}

function devtoolsComponentEmit(component, event, params) {
  emit("component:emit"
  /* COMPONENT_EMIT */
  , component.appContext.app, component, event, params);
}

function emit$1(instance, event) {
  if (instance.isUnmounted) return;
  var props = instance.vnode.props || _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ;

  for (var _len3 = arguments.length, rawArgs = new Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
    rawArgs[_key3 - 2] = arguments[_key3];
  }

  if (true) {
    var emitsOptions = instance.emitsOptions,
        _instance$propsOption = _slicedToArray(instance.propsOptions, 1),
        propsOptions = _instance$propsOption[0];

    if (emitsOptions) {
      if (!(event in emitsOptions) && !false) {
        if (!propsOptions || !((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.toHandlerKey)(event) in propsOptions)) {
          warn("Component emitted event \"".concat(event, "\" but it is neither declared in ") + "the emits option nor as an \"".concat((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.toHandlerKey)(event), "\" prop."));
        }
      } else {
        var validator = emitsOptions[event];

        if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(validator)) {
          var isValid = validator.apply(void 0, rawArgs);

          if (!isValid) {
            warn("Invalid event arguments: event validation failed for event \"".concat(event, "\"."));
          }
        }
      }
    }
  }

  var args = rawArgs;
  var isModelListener = event.startsWith('update:'); // for v-model update:xxx events, apply modifiers on args

  var modelArg = isModelListener && event.slice(7);

  if (modelArg && modelArg in props) {
    var modifiersKey = "".concat(modelArg === 'modelValue' ? 'model' : modelArg, "Modifiers");

    var _ref4 = props[modifiersKey] || _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ,
        number = _ref4.number,
        trim = _ref4.trim;

    if (trim) {
      args = rawArgs.map(function (a) {
        return a.trim();
      });
    }

    if (number) {
      args = rawArgs.map(_vue_shared__WEBPACK_IMPORTED_MODULE_1__.toNumber);
    }
  }

  if (true) {
    devtoolsComponentEmit(instance, event, args);
  }

  if (true) {
    var lowerCaseEvent = event.toLowerCase();

    if (lowerCaseEvent !== event && props[(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.toHandlerKey)(lowerCaseEvent)]) {
      warn("Event \"".concat(lowerCaseEvent, "\" is emitted in component ") + "".concat(formatComponentName(instance, instance.type), " but the handler is registered for \"").concat(event, "\". ") + "Note that HTML attributes are case-insensitive and you cannot use " + "v-on to listen to camelCase events when using in-DOM templates. " + "You should probably use \"".concat((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hyphenate)(event), "\" instead of \"").concat(event, "\"."));
    }
  }

  var handlerName;
  var handler = props[handlerName = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.toHandlerKey)(event)] || // also try camelCase event handler (#2249)
  props[handlerName = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.toHandlerKey)((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.camelize)(event))]; // for v-model update:xxx events, also trigger kebab-case equivalent
  // for props passed via kebab-case

  if (!handler && isModelListener) {
    handler = props[handlerName = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.toHandlerKey)((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hyphenate)(event))];
  }

  if (handler) {
    callWithAsyncErrorHandling(handler, instance, 6
    /* COMPONENT_EVENT_HANDLER */
    , args);
  }

  var onceHandler = props[handlerName + "Once"];

  if (onceHandler) {
    if (!instance.emitted) {
      instance.emitted = {};
    } else if (instance.emitted[handlerName]) {
      return;
    }

    instance.emitted[handlerName] = true;
    callWithAsyncErrorHandling(onceHandler, instance, 6
    /* COMPONENT_EVENT_HANDLER */
    , args);
  }
}

function normalizeEmitsOptions(comp, appContext) {
  var asMixin = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var cache = appContext.emitsCache;
  var cached = cache.get(comp);

  if (cached !== undefined) {
    return cached;
  }

  var raw = comp.emits;
  var normalized = {}; // apply mixin/extends props

  var hasExtends = false;

  if (__VUE_OPTIONS_API__ && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(comp)) {
    var extendEmits = function extendEmits(raw) {
      var normalizedFromExtend = normalizeEmitsOptions(raw, appContext, true);

      if (normalizedFromExtend) {
        hasExtends = true;
        (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)(normalized, normalizedFromExtend);
      }
    };

    if (!asMixin && appContext.mixins.length) {
      appContext.mixins.forEach(extendEmits);
    }

    if (comp["extends"]) {
      extendEmits(comp["extends"]);
    }

    if (comp.mixins) {
      comp.mixins.forEach(extendEmits);
    }
  }

  if (!raw && !hasExtends) {
    cache.set(comp, null);
    return null;
  }

  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(raw)) {
    raw.forEach(function (key) {
      return normalized[key] = null;
    });
  } else {
    (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)(normalized, raw);
  }

  cache.set(comp, normalized);
  return normalized;
} // Check if an incoming prop key is a declared emit event listener.
// e.g. With `emits: { click: null }`, props named `onClick` and `onclick` are
// both considered matched listeners.


function isEmitListener(options, key) {
  if (!options || !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isOn)(key)) {
    return false;
  }

  key = key.slice(2).replace(/Once$/, '');
  return (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(options, key[0].toLowerCase() + key.slice(1)) || (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(options, (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hyphenate)(key)) || (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(options, key);
}
/**
 * mark the current rendering instance for asset resolution (e.g.
 * resolveComponent, resolveDirective) during render
 */


var currentRenderingInstance = null;
var currentScopeId = null;
/**
 * Note: rendering calls maybe nested. The function returns the parent rendering
 * instance if present, which should be restored after the render is done:
 *
 * ```js
 * const prev = setCurrentRenderingInstance(i)
 * // ...render
 * setCurrentRenderingInstance(prev)
 * ```
 */

function setCurrentRenderingInstance(instance) {
  var prev = currentRenderingInstance;
  currentRenderingInstance = instance;
  currentScopeId = instance && instance.type.__scopeId || null;
  return prev;
}
/**
 * Set scope id when creating hoisted vnodes.
 * @private compiler helper
 */


function pushScopeId(id) {
  currentScopeId = id;
}
/**
 * Technically we no longer need this after 3.0.8 but we need to keep the same
 * API for backwards compat w/ code generated by compilers.
 * @private
 */


function popScopeId() {
  currentScopeId = null;
}
/**
 * Only for backwards compat
 * @private
 */


var withScopeId = function withScopeId(_id) {
  return withCtx;
};
/**
 * Wrap a slot function to memoize current rendering instance
 * @private compiler helper
 */


function withCtx(fn) {
  var ctx = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : currentRenderingInstance;
  var isNonScopedSlot // false only
  = arguments.length > 2 ? arguments[2] : undefined;
  if (!ctx) return fn; // already normalized

  if (fn._n) {
    return fn;
  }

  var renderFnWithContext = function renderFnWithContext() {
    // If a user calls a compiled slot inside a template expression (#1745), it
    // can mess up block tracking, so by default we disable block tracking and
    // force bail out when invoking a compiled slot (indicated by the ._d flag).
    // This isn't necessary if rendering a compiled `<slot>`, so we flip the
    // ._d flag off when invoking the wrapped fn inside `renderSlot`.
    if (renderFnWithContext._d) {
      setBlockTracking(-1);
    }

    var prevInstance = setCurrentRenderingInstance(ctx);
    var res = fn.apply(void 0, arguments);
    setCurrentRenderingInstance(prevInstance);

    if (renderFnWithContext._d) {
      setBlockTracking(1);
    }

    if (true) {
      devtoolsComponentUpdated(ctx);
    }

    return res;
  }; // mark normalized to avoid duplicated wrapping


  renderFnWithContext._n = true; // mark this as compiled by default
  // this is used in vnode.ts -> normalizeChildren() to set the slot
  // rendering flag.

  renderFnWithContext._c = true; // disable block tracking by default

  renderFnWithContext._d = true;
  return renderFnWithContext;
}
/**
 * dev only flag to track whether $attrs was used during render.
 * If $attrs was used during render then the warning for failed attrs
 * fallthrough can be suppressed.
 */


var accessedAttrs = false;

function markAttrsAccessed() {
  accessedAttrs = true;
}

function renderComponentRoot(instance) {
  var Component = instance.type,
      vnode = instance.vnode,
      proxy = instance.proxy,
      withProxy = instance.withProxy,
      props = instance.props,
      _instance$propsOption2 = _slicedToArray(instance.propsOptions, 1),
      propsOptions = _instance$propsOption2[0],
      slots = instance.slots,
      attrs = instance.attrs,
      emit = instance.emit,
      render = instance.render,
      renderCache = instance.renderCache,
      data = instance.data,
      setupState = instance.setupState,
      ctx = instance.ctx,
      inheritAttrs = instance.inheritAttrs;

  var result;
  var fallthroughAttrs;
  var prev = setCurrentRenderingInstance(instance);

  if (true) {
    accessedAttrs = false;
  }

  try {
    if (vnode.shapeFlag & 4
    /* STATEFUL_COMPONENT */
    ) {
      // withProxy is a proxy with a different `has` trap only for
      // runtime-compiled render functions using `with` block.
      var proxyToUse = withProxy || proxy;
      result = normalizeVNode(render.call(proxyToUse, proxyToUse, renderCache, props, setupState, data, ctx));
      fallthroughAttrs = attrs;
    } else {
      // functional
      var _render = Component; // in dev, mark attrs accessed if optional props (attrs === props)

      if ( true && attrs === props) {
        markAttrsAccessed();
      }

      result = normalizeVNode(_render.length > 1 ? _render(props,  true ? {
        get attrs() {
          markAttrsAccessed();
          return attrs;
        },

        slots: slots,
        emit: emit
      } : 0) : _render(props, null
      /* we know it doesn't need it */
      ));
      fallthroughAttrs = Component.props ? attrs : getFunctionalFallthrough(attrs);
    }
  } catch (err) {
    blockStack.length = 0;
    handleError(err, instance, 1
    /* RENDER_FUNCTION */
    );
    result = createVNode(Comment);
  } // attr merging
  // in dev mode, comments are preserved, and it's possible for a template
  // to have comments along side the root element which makes it a fragment


  var root = result;
  var setRoot = undefined;

  if ( true && result.patchFlag > 0 && result.patchFlag & 2048
  /* DEV_ROOT_FRAGMENT */
  ) {
    var _getChildRoot = getChildRoot(result);

    var _getChildRoot2 = _slicedToArray(_getChildRoot, 2);

    root = _getChildRoot2[0];
    setRoot = _getChildRoot2[1];
  }

  if (fallthroughAttrs && inheritAttrs !== false) {
    var keys = Object.keys(fallthroughAttrs);
    var _root = root,
        shapeFlag = _root.shapeFlag;

    if (keys.length) {
      if (shapeFlag & (1
      /* ELEMENT */
      | 6
      /* COMPONENT */
      )) {
        if (propsOptions && keys.some(_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isModelListener)) {
          // If a v-model listener (onUpdate:xxx) has a corresponding declared
          // prop, it indicates this component expects to handle v-model and
          // it should not fallthrough.
          // related: #1543, #1643, #1989
          fallthroughAttrs = filterModelListeners(fallthroughAttrs, propsOptions);
        }

        root = cloneVNode(root, fallthroughAttrs);
      } else if ( true && !accessedAttrs && root.type !== Comment) {
        var allAttrs = Object.keys(attrs);
        var eventAttrs = [];
        var extraAttrs = [];

        for (var i = 0, l = allAttrs.length; i < l; i++) {
          var key = allAttrs[i];

          if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isOn)(key)) {
            // ignore v-model handlers when they fail to fallthrough
            if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isModelListener)(key)) {
              // remove `on`, lowercase first letter to reflect event casing
              // accurately
              eventAttrs.push(key[2].toLowerCase() + key.slice(3));
            }
          } else {
            extraAttrs.push(key);
          }
        }

        if (extraAttrs.length) {
          warn("Extraneous non-props attributes (" + "".concat(extraAttrs.join(', '), ") ") + "were passed to component but could not be automatically inherited " + "because component renders fragment or text root nodes.");
        }

        if (eventAttrs.length) {
          warn("Extraneous non-emits event listeners (" + "".concat(eventAttrs.join(', '), ") ") + "were passed to component but could not be automatically inherited " + "because component renders fragment or text root nodes. " + "If the listener is intended to be a component custom event listener only, " + "declare it using the \"emits\" option.");
        }
      }
    }
  } // inherit directives


  if (vnode.dirs) {
    if ( true && !isElementRoot(root)) {
      warn("Runtime directive used on component with non-element root node. " + "The directives will not function as intended.");
    } // clone before mutating since the root may be a hoisted vnode


    root = cloneVNode(root);
    root.dirs = root.dirs ? root.dirs.concat(vnode.dirs) : vnode.dirs;
  } // inherit transition data


  if (vnode.transition) {
    if ( true && !isElementRoot(root)) {
      warn("Component inside <Transition> renders non-element root node " + "that cannot be animated.");
    }

    root.transition = vnode.transition;
  }

  if ( true && setRoot) {
    setRoot(root);
  } else {
    result = root;
  }

  setCurrentRenderingInstance(prev);
  return result;
}
/**
 * dev only
 * In dev mode, template root level comments are rendered, which turns the
 * template into a fragment root, but we need to locate the single element
 * root for attrs and scope id processing.
 */


var getChildRoot = function getChildRoot(vnode) {
  var rawChildren = vnode.children;
  var dynamicChildren = vnode.dynamicChildren;
  var childRoot = filterSingleRoot(rawChildren);

  if (!childRoot) {
    return [vnode, undefined];
  }

  var index = rawChildren.indexOf(childRoot);
  var dynamicIndex = dynamicChildren ? dynamicChildren.indexOf(childRoot) : -1;

  var setRoot = function setRoot(updatedRoot) {
    rawChildren[index] = updatedRoot;

    if (dynamicChildren) {
      if (dynamicIndex > -1) {
        dynamicChildren[dynamicIndex] = updatedRoot;
      } else if (updatedRoot.patchFlag > 0) {
        vnode.dynamicChildren = [].concat(_toConsumableArray(dynamicChildren), [updatedRoot]);
      }
    }
  };

  return [normalizeVNode(childRoot), setRoot];
};

function filterSingleRoot(children) {
  var singleRoot;

  for (var i = 0; i < children.length; i++) {
    var child = children[i];

    if (isVNode(child)) {
      // ignore user comment
      if (child.type !== Comment || child.children === 'v-if') {
        if (singleRoot) {
          // has more than 1 non-comment child, return now
          return;
        } else {
          singleRoot = child;
        }
      }
    } else {
      return;
    }
  }

  return singleRoot;
}

var getFunctionalFallthrough = function getFunctionalFallthrough(attrs) {
  var res;

  for (var key in attrs) {
    if (key === 'class' || key === 'style' || (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isOn)(key)) {
      (res || (res = {}))[key] = attrs[key];
    }
  }

  return res;
};

var filterModelListeners = function filterModelListeners(attrs, props) {
  var res = {};

  for (var key in attrs) {
    if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isModelListener)(key) || !(key.slice(9) in props)) {
      res[key] = attrs[key];
    }
  }

  return res;
};

var isElementRoot = function isElementRoot(vnode) {
  return vnode.shapeFlag & (6
  /* COMPONENT */
  | 1
  /* ELEMENT */
  ) || vnode.type === Comment // potential v-if branch switch
  ;
};

function shouldUpdateComponent(prevVNode, nextVNode, optimized) {
  var prevProps = prevVNode.props,
      prevChildren = prevVNode.children,
      component = prevVNode.component;
  var nextProps = nextVNode.props,
      nextChildren = nextVNode.children,
      patchFlag = nextVNode.patchFlag;
  var emits = component.emitsOptions; // Parent component's render function was hot-updated. Since this may have
  // caused the child component's slots content to have changed, we need to
  // force the child to update as well.

  if ( true && (prevChildren || nextChildren) && isHmrUpdating) {
    return true;
  } // force child update for runtime directive or transition on component vnode.


  if (nextVNode.dirs || nextVNode.transition) {
    return true;
  }

  if (optimized && patchFlag >= 0) {
    if (patchFlag & 1024
    /* DYNAMIC_SLOTS */
    ) {
      // slot content that references values that might have changed,
      // e.g. in a v-for
      return true;
    }

    if (patchFlag & 16
    /* FULL_PROPS */
    ) {
      if (!prevProps) {
        return !!nextProps;
      } // presence of this flag indicates props are always non-null


      return hasPropsChanged(prevProps, nextProps, emits);
    } else if (patchFlag & 8
    /* PROPS */
    ) {
      var dynamicProps = nextVNode.dynamicProps;

      for (var i = 0; i < dynamicProps.length; i++) {
        var key = dynamicProps[i];

        if (nextProps[key] !== prevProps[key] && !isEmitListener(emits, key)) {
          return true;
        }
      }
    }
  } else {
    // this path is only taken by manually written render functions
    // so presence of any children leads to a forced update
    if (prevChildren || nextChildren) {
      if (!nextChildren || !nextChildren.$stable) {
        return true;
      }
    }

    if (prevProps === nextProps) {
      return false;
    }

    if (!prevProps) {
      return !!nextProps;
    }

    if (!nextProps) {
      return true;
    }

    return hasPropsChanged(prevProps, nextProps, emits);
  }

  return false;
}

function hasPropsChanged(prevProps, nextProps, emitsOptions) {
  var nextKeys = Object.keys(nextProps);

  if (nextKeys.length !== Object.keys(prevProps).length) {
    return true;
  }

  for (var i = 0; i < nextKeys.length; i++) {
    var key = nextKeys[i];

    if (nextProps[key] !== prevProps[key] && !isEmitListener(emitsOptions, key)) {
      return true;
    }
  }

  return false;
}

function updateHOCHostEl(_ref5, el // HostNode
) {
  var vnode = _ref5.vnode,
      parent = _ref5.parent;

  while (parent && parent.subTree === vnode) {
    (vnode = parent.vnode).el = el;
    parent = parent.parent;
  }
}

var isSuspense = function isSuspense(type) {
  return type.__isSuspense;
}; // Suspense exposes a component-like API, and is treated like a component
// in the compiler, but internally it's a special built-in type that hooks
// directly into the renderer.


var SuspenseImpl = {
  name: 'Suspense',
  // In order to make Suspense tree-shakable, we need to avoid importing it
  // directly in the renderer. The renderer checks for the __isSuspense flag
  // on a vnode's type and calls the `process` method, passing in renderer
  // internals.
  __isSuspense: true,
  process: function process(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, // platform-specific impl passed from renderer
  rendererInternals) {
    if (n1 == null) {
      mountSuspense(n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, rendererInternals);
    } else {
      patchSuspense(n1, n2, container, anchor, parentComponent, isSVG, slotScopeIds, optimized, rendererInternals);
    }
  },
  hydrate: hydrateSuspense,
  create: createSuspenseBoundary,
  normalize: normalizeSuspenseChildren
}; // Force-casted public typing for h and TSX props inference

var Suspense = SuspenseImpl;

function triggerEvent(vnode, name) {
  var eventListener = vnode.props && vnode.props[name];

  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(eventListener)) {
    eventListener();
  }
}

function mountSuspense(vnode, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, rendererInternals) {
  var patch = rendererInternals.p,
      createElement = rendererInternals.o.createElement;
  var hiddenContainer = createElement('div');
  var suspense = vnode.suspense = createSuspenseBoundary(vnode, parentSuspense, parentComponent, container, hiddenContainer, anchor, isSVG, slotScopeIds, optimized, rendererInternals); // start mounting the content subtree in an off-dom container

  patch(null, suspense.pendingBranch = vnode.ssContent, hiddenContainer, null, parentComponent, suspense, isSVG, slotScopeIds); // now check if we have encountered any async deps

  if (suspense.deps > 0) {
    // has async
    // invoke @fallback event
    triggerEvent(vnode, 'onPending');
    triggerEvent(vnode, 'onFallback'); // mount the fallback tree

    patch(null, vnode.ssFallback, container, anchor, parentComponent, null, // fallback tree will not have suspense context
    isSVG, slotScopeIds);
    setActiveBranch(suspense, vnode.ssFallback);
  } else {
    // Suspense has no async deps. Just resolve.
    suspense.resolve();
  }
}

function patchSuspense(n1, n2, container, anchor, parentComponent, isSVG, slotScopeIds, optimized, _ref6) {
  var patch = _ref6.p,
      unmount = _ref6.um,
      createElement = _ref6.o.createElement;
  var suspense = n2.suspense = n1.suspense;
  suspense.vnode = n2;
  n2.el = n1.el;
  var newBranch = n2.ssContent;
  var newFallback = n2.ssFallback;
  var activeBranch = suspense.activeBranch,
      pendingBranch = suspense.pendingBranch,
      isInFallback = suspense.isInFallback,
      isHydrating = suspense.isHydrating;

  if (pendingBranch) {
    suspense.pendingBranch = newBranch;

    if (isSameVNodeType(newBranch, pendingBranch)) {
      // same root type but content may have changed.
      patch(pendingBranch, newBranch, suspense.hiddenContainer, null, parentComponent, suspense, isSVG, slotScopeIds, optimized);

      if (suspense.deps <= 0) {
        suspense.resolve();
      } else if (isInFallback) {
        patch(activeBranch, newFallback, container, anchor, parentComponent, null, // fallback tree will not have suspense context
        isSVG, slotScopeIds, optimized);
        setActiveBranch(suspense, newFallback);
      }
    } else {
      // toggled before pending tree is resolved
      suspense.pendingId++;

      if (isHydrating) {
        // if toggled before hydration is finished, the current DOM tree is
        // no longer valid. set it as the active branch so it will be unmounted
        // when resolved
        suspense.isHydrating = false;
        suspense.activeBranch = pendingBranch;
      } else {
        unmount(pendingBranch, parentComponent, suspense);
      } // increment pending ID. this is used to invalidate async callbacks
      // reset suspense state


      suspense.deps = 0; // discard effects from pending branch

      suspense.effects.length = 0; // discard previous container

      suspense.hiddenContainer = createElement('div');

      if (isInFallback) {
        // already in fallback state
        patch(null, newBranch, suspense.hiddenContainer, null, parentComponent, suspense, isSVG, slotScopeIds, optimized);

        if (suspense.deps <= 0) {
          suspense.resolve();
        } else {
          patch(activeBranch, newFallback, container, anchor, parentComponent, null, // fallback tree will not have suspense context
          isSVG, slotScopeIds, optimized);
          setActiveBranch(suspense, newFallback);
        }
      } else if (activeBranch && isSameVNodeType(newBranch, activeBranch)) {
        // toggled "back" to current active branch
        patch(activeBranch, newBranch, container, anchor, parentComponent, suspense, isSVG, slotScopeIds, optimized); // force resolve

        suspense.resolve(true);
      } else {
        // switched to a 3rd branch
        patch(null, newBranch, suspense.hiddenContainer, null, parentComponent, suspense, isSVG, slotScopeIds, optimized);

        if (suspense.deps <= 0) {
          suspense.resolve();
        }
      }
    }
  } else {
    if (activeBranch && isSameVNodeType(newBranch, activeBranch)) {
      // root did not change, just normal patch
      patch(activeBranch, newBranch, container, anchor, parentComponent, suspense, isSVG, slotScopeIds, optimized);
      setActiveBranch(suspense, newBranch);
    } else {
      // root node toggled
      // invoke @pending event
      triggerEvent(n2, 'onPending'); // mount pending branch in off-dom container

      suspense.pendingBranch = newBranch;
      suspense.pendingId++;
      patch(null, newBranch, suspense.hiddenContainer, null, parentComponent, suspense, isSVG, slotScopeIds, optimized);

      if (suspense.deps <= 0) {
        // incoming branch has no async deps, resolve now.
        suspense.resolve();
      } else {
        var timeout = suspense.timeout,
            pendingId = suspense.pendingId;

        if (timeout > 0) {
          setTimeout(function () {
            if (suspense.pendingId === pendingId) {
              suspense.fallback(newFallback);
            }
          }, timeout);
        } else if (timeout === 0) {
          suspense.fallback(newFallback);
        }
      }
    }
  }
}

var hasWarned = false;

function createSuspenseBoundary(vnode, parent, parentComponent, container, hiddenContainer, anchor, isSVG, slotScopeIds, optimized, rendererInternals) {
  var isHydrating = arguments.length > 10 && arguments[10] !== undefined ? arguments[10] : false;

  /* istanbul ignore if */
  if ( true && !hasWarned) {
    hasWarned = true; // @ts-ignore `console.info` cannot be null error

    console[console.info ? 'info' : 'log']("<Suspense> is an experimental feature and its API will likely change.");
  }

  var patch = rendererInternals.p,
      _move = rendererInternals.m,
      _unmount2 = rendererInternals.um,
      _next = rendererInternals.n,
      _rendererInternals$o = rendererInternals.o,
      parentNode = _rendererInternals$o.parentNode,
      remove = _rendererInternals$o.remove;
  var timeout = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.toNumber)(vnode.props && vnode.props.timeout);
  var suspense = {
    vnode: vnode,
    parent: parent,
    parentComponent: parentComponent,
    isSVG: isSVG,
    container: container,
    hiddenContainer: hiddenContainer,
    anchor: anchor,
    deps: 0,
    pendingId: 0,
    timeout: typeof timeout === 'number' ? timeout : -1,
    activeBranch: null,
    pendingBranch: null,
    isInFallback: true,
    isHydrating: isHydrating,
    isUnmounted: false,
    effects: [],
    resolve: function resolve() {
      var resume = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (true) {
        if (!resume && !suspense.pendingBranch) {
          throw new Error("suspense.resolve() is called without a pending branch.");
        }

        if (suspense.isUnmounted) {
          throw new Error("suspense.resolve() is called on an already unmounted suspense boundary.");
        }
      }

      var vnode = suspense.vnode,
          activeBranch = suspense.activeBranch,
          pendingBranch = suspense.pendingBranch,
          pendingId = suspense.pendingId,
          effects = suspense.effects,
          parentComponent = suspense.parentComponent,
          container = suspense.container;

      if (suspense.isHydrating) {
        suspense.isHydrating = false;
      } else if (!resume) {
        var delayEnter = activeBranch && pendingBranch.transition && pendingBranch.transition.mode === 'out-in';

        if (delayEnter) {
          activeBranch.transition.afterLeave = function () {
            if (pendingId === suspense.pendingId) {
              _move(pendingBranch, container, _anchor, 0
              /* ENTER */
              );
            }
          };
        } // this is initial anchor on mount


        var _anchor = suspense.anchor; // unmount current active tree

        if (activeBranch) {
          // if the fallback tree was mounted, it may have been moved
          // as part of a parent suspense. get the latest anchor for insertion
          _anchor = _next(activeBranch);

          _unmount2(activeBranch, parentComponent, suspense, true);
        }

        if (!delayEnter) {
          // move content from off-dom container to actual container
          _move(pendingBranch, container, _anchor, 0
          /* ENTER */
          );
        }
      }

      setActiveBranch(suspense, pendingBranch);
      suspense.pendingBranch = null;
      suspense.isInFallback = false; // flush buffered effects
      // check if there is a pending parent suspense

      var parent = suspense.parent;
      var hasUnresolvedAncestor = false;

      while (parent) {
        if (parent.pendingBranch) {
          var _parent$effects;

          // found a pending parent suspense, merge buffered post jobs
          // into that parent
          (_parent$effects = parent.effects).push.apply(_parent$effects, _toConsumableArray(effects));

          hasUnresolvedAncestor = true;
          break;
        }

        parent = parent.parent;
      } // no pending parent suspense, flush all jobs


      if (!hasUnresolvedAncestor) {
        queuePostFlushCb(effects);
      }

      suspense.effects = []; // invoke @resolve event

      triggerEvent(vnode, 'onResolve');
    },
    fallback: function fallback(fallbackVNode) {
      if (!suspense.pendingBranch) {
        return;
      }

      var vnode = suspense.vnode,
          activeBranch = suspense.activeBranch,
          parentComponent = suspense.parentComponent,
          container = suspense.container,
          isSVG = suspense.isSVG; // invoke @fallback event

      triggerEvent(vnode, 'onFallback');

      var anchor = _next(activeBranch);

      var mountFallback = function mountFallback() {
        if (!suspense.isInFallback) {
          return;
        } // mount the fallback tree


        patch(null, fallbackVNode, container, anchor, parentComponent, null, // fallback tree will not have suspense context
        isSVG, slotScopeIds, optimized);
        setActiveBranch(suspense, fallbackVNode);
      };

      var delayEnter = fallbackVNode.transition && fallbackVNode.transition.mode === 'out-in';

      if (delayEnter) {
        activeBranch.transition.afterLeave = mountFallback;
      }

      suspense.isInFallback = true; // unmount current active branch

      _unmount2(activeBranch, parentComponent, null, // no suspense so unmount hooks fire now
      true // shouldRemove
      );

      if (!delayEnter) {
        mountFallback();
      }
    },
    move: function move(container, anchor, type) {
      suspense.activeBranch && _move(suspense.activeBranch, container, anchor, type);
      suspense.container = container;
    },
    next: function next() {
      return suspense.activeBranch && _next(suspense.activeBranch);
    },
    registerDep: function registerDep(instance, setupRenderEffect) {
      var isInPendingSuspense = !!suspense.pendingBranch;

      if (isInPendingSuspense) {
        suspense.deps++;
      }

      var hydratedEl = instance.vnode.el;
      instance.asyncDep["catch"](function (err) {
        handleError(err, instance, 0
        /* SETUP_FUNCTION */
        );
      }).then(function (asyncSetupResult) {
        // retry when the setup() promise resolves.
        // component may have been unmounted before resolve.
        if (instance.isUnmounted || suspense.isUnmounted || suspense.pendingId !== instance.suspenseId) {
          return;
        } // retry from this component


        instance.asyncResolved = true;
        var vnode = instance.vnode;

        if (true) {
          pushWarningContext(vnode);
        }

        handleSetupResult(instance, asyncSetupResult, false);

        if (hydratedEl) {
          // vnode may have been replaced if an update happened before the
          // async dep is resolved.
          vnode.el = hydratedEl;
        }

        var placeholder = !hydratedEl && instance.subTree.el;
        setupRenderEffect(instance, vnode, // component may have been moved before resolve.
        // if this is not a hydration, instance.subTree will be the comment
        // placeholder.
        parentNode(hydratedEl || instance.subTree.el), // anchor will not be used if this is hydration, so only need to
        // consider the comment placeholder case.
        hydratedEl ? null : _next(instance.subTree), suspense, isSVG, optimized);

        if (placeholder) {
          remove(placeholder);
        }

        updateHOCHostEl(instance, vnode.el);

        if (true) {
          popWarningContext();
        } // only decrease deps count if suspense is not already resolved


        if (isInPendingSuspense && --suspense.deps === 0) {
          suspense.resolve();
        }
      });
    },
    unmount: function unmount(parentSuspense, doRemove) {
      suspense.isUnmounted = true;

      if (suspense.activeBranch) {
        _unmount2(suspense.activeBranch, parentComponent, parentSuspense, doRemove);
      }

      if (suspense.pendingBranch) {
        _unmount2(suspense.pendingBranch, parentComponent, parentSuspense, doRemove);
      }
    }
  };
  return suspense;
}

function hydrateSuspense(node, vnode, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, rendererInternals, hydrateNode) {
  /* eslint-disable no-restricted-globals */
  var suspense = vnode.suspense = createSuspenseBoundary(vnode, parentSuspense, parentComponent, node.parentNode, document.createElement('div'), null, isSVG, slotScopeIds, optimized, rendererInternals, true
  /* hydrating */
  ); // there are two possible scenarios for server-rendered suspense:
  // - success: ssr content should be fully resolved
  // - failure: ssr content should be the fallback branch.
  // however, on the client we don't really know if it has failed or not
  // attempt to hydrate the DOM assuming it has succeeded, but we still
  // need to construct a suspense boundary first

  var result = hydrateNode(node, suspense.pendingBranch = vnode.ssContent, parentComponent, suspense, slotScopeIds, optimized);

  if (suspense.deps === 0) {
    suspense.resolve();
  }

  return result;
  /* eslint-enable no-restricted-globals */
}

function normalizeSuspenseChildren(vnode) {
  var shapeFlag = vnode.shapeFlag,
      children = vnode.children;
  var isSlotChildren = shapeFlag & 32
  /* SLOTS_CHILDREN */
  ;
  vnode.ssContent = normalizeSuspenseSlot(isSlotChildren ? children["default"] : children);
  vnode.ssFallback = isSlotChildren ? normalizeSuspenseSlot(children.fallback) : createVNode(Comment);
}

function normalizeSuspenseSlot(s) {
  var block;

  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(s)) {
    var trackBlock = isBlockTreeEnabled && s._c;

    if (trackBlock) {
      // disableTracking: false
      // allow block tracking for compiled slots
      // (see ./componentRenderContext.ts)
      s._d = false;
      openBlock();
    }

    s = s();

    if (trackBlock) {
      s._d = true;
      block = currentBlock;
      closeBlock();
    }
  }

  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(s)) {
    var singleChild = filterSingleRoot(s);

    if ( true && !singleChild) {
      warn("<Suspense> slots expect a single root node.");
    }

    s = singleChild;
  }

  s = normalizeVNode(s);

  if (block && !s.dynamicChildren) {
    s.dynamicChildren = block.filter(function (c) {
      return c !== s;
    });
  }

  return s;
}

function queueEffectWithSuspense(fn, suspense) {
  if (suspense && suspense.pendingBranch) {
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(fn)) {
      var _suspense$effects;

      (_suspense$effects = suspense.effects).push.apply(_suspense$effects, _toConsumableArray(fn));
    } else {
      suspense.effects.push(fn);
    }
  } else {
    queuePostFlushCb(fn);
  }
}

function setActiveBranch(suspense, branch) {
  suspense.activeBranch = branch;
  var vnode = suspense.vnode,
      parentComponent = suspense.parentComponent;
  var el = vnode.el = branch.el; // in case suspense is the root node of a component,
  // recursively update the HOC el

  if (parentComponent && parentComponent.subTree === vnode) {
    parentComponent.vnode.el = el;
    updateHOCHostEl(parentComponent, el);
  }
}

function provide(key, value) {
  if (!currentInstance) {
    if (true) {
      warn("provide() can only be used inside setup().");
    }
  } else {
    var provides = currentInstance.provides; // by default an instance inherits its parent's provides object
    // but when it needs to provide values of its own, it creates its
    // own provides object using parent provides object as prototype.
    // this way in `inject` we can simply look up injections from direct
    // parent and let the prototype chain do the work.

    var parentProvides = currentInstance.parent && currentInstance.parent.provides;

    if (parentProvides === provides) {
      provides = currentInstance.provides = Object.create(parentProvides);
    } // TS doesn't allow symbol as index type


    provides[key] = value;
  }
}

function inject(key, defaultValue) {
  var treatDefaultAsFactory = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  // fallback to `currentRenderingInstance` so that this can be called in
  // a functional component
  var instance = currentInstance || currentRenderingInstance;

  if (instance) {
    // #2400
    // to support `app.use` plugins,
    // fallback to appContext's `provides` if the instance is at root
    var provides = instance.parent == null ? instance.vnode.appContext && instance.vnode.appContext.provides : instance.parent.provides;

    if (provides && key in provides) {
      // TS doesn't allow symbol as index type
      return provides[key];
    } else if (arguments.length > 1) {
      return treatDefaultAsFactory && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(defaultValue) ? defaultValue.call(instance.proxy) : defaultValue;
    } else if (true) {
      warn("injection \"".concat(String(key), "\" not found."));
    }
  } else if (true) {
    warn("inject() can only be used inside setup() or functional components.");
  }
} // Simple effect.


function watchEffect(effect, options) {
  return doWatch(effect, null, options);
}

function watchPostEffect(effect, options) {
  return doWatch(effect, null,  true ? Object.assign(Object.assign({}, options), {
    flush: 'post'
  }) : 0);
}

function watchSyncEffect(effect, options) {
  return doWatch(effect, null,  true ? Object.assign(Object.assign({}, options), {
    flush: 'sync'
  }) : 0);
} // initial value for watchers to trigger on undefined initial values


var INITIAL_WATCHER_VALUE = {}; // implementation

function watch(source, cb, options) {
  if ( true && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(cb)) {
    warn("`watch(fn, options?)` signature has been moved to a separate API. " + "Use `watchEffect(fn, options?)` instead. `watch` now only " + "supports `watch(source, cb, options?) signature.");
  }

  return doWatch(source, cb, options);
}

function doWatch(source, cb) {
  var _ref7 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ,
      immediate = _ref7.immediate,
      deep = _ref7.deep,
      flush = _ref7.flush,
      onTrack = _ref7.onTrack,
      onTrigger = _ref7.onTrigger;

  if ( true && !cb) {
    if (immediate !== undefined) {
      warn("watch() \"immediate\" option is only respected when using the " + "watch(source, callback, options?) signature.");
    }

    if (deep !== undefined) {
      warn("watch() \"deep\" option is only respected when using the " + "watch(source, callback, options?) signature.");
    }
  }

  var warnInvalidSource = function warnInvalidSource(s) {
    warn("Invalid watch source: ", s, "A watch source can only be a getter/effect function, a ref, " + "a reactive object, or an array of these types.");
  };

  var instance = currentInstance;
  var getter;
  var forceTrigger = false;
  var isMultiSource = false;

  if ((0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isRef)(source)) {
    getter = function getter() {
      return source.value;
    };

    forceTrigger = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isShallow)(source);
  } else if ((0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isReactive)(source)) {
    getter = function getter() {
      return source;
    };

    deep = true;
  } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(source)) {
    isMultiSource = true;
    forceTrigger = source.some(function (s) {
      return (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isReactive)(s) || (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isShallow)(s);
    });

    getter = function getter() {
      return source.map(function (s) {
        if ((0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isRef)(s)) {
          return s.value;
        } else if ((0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isReactive)(s)) {
          return traverse(s);
        } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(s)) {
          return callWithErrorHandling(s, instance, 2
          /* WATCH_GETTER */
          );
        } else {
           true && warnInvalidSource(s);
        }
      });
    };
  } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(source)) {
    if (cb) {
      // getter with cb
      getter = function getter() {
        return callWithErrorHandling(source, instance, 2
        /* WATCH_GETTER */
        );
      };
    } else {
      // no cb -> simple effect
      getter = function getter() {
        if (instance && instance.isUnmounted) {
          return;
        }

        if (cleanup) {
          cleanup();
        }

        return callWithAsyncErrorHandling(source, instance, 3
        /* WATCH_CALLBACK */
        , [onCleanup]);
      };
    }
  } else {
    getter = _vue_shared__WEBPACK_IMPORTED_MODULE_1__.NOOP;
     true && warnInvalidSource(source);
  }

  if (cb && deep) {
    var baseGetter = getter;

    getter = function getter() {
      return traverse(baseGetter());
    };
  }

  var cleanup;

  var onCleanup = function onCleanup(fn) {
    cleanup = effect.onStop = function () {
      callWithErrorHandling(fn, instance, 4
      /* WATCH_CLEANUP */
      );
    };
  }; // in SSR there is no need to setup an actual effect, and it should be noop
  // unless it's eager


  if (isInSSRComponentSetup) {
    // we will also not call the invalidate callback (+ runner is not set up)
    onCleanup = _vue_shared__WEBPACK_IMPORTED_MODULE_1__.NOOP;

    if (!cb) {
      getter();
    } else if (immediate) {
      callWithAsyncErrorHandling(cb, instance, 3
      /* WATCH_CALLBACK */
      , [getter(), isMultiSource ? [] : undefined, onCleanup]);
    }

    return _vue_shared__WEBPACK_IMPORTED_MODULE_1__.NOOP;
  }

  var oldValue = isMultiSource ? [] : INITIAL_WATCHER_VALUE;

  var job = function job() {
    if (!effect.active) {
      return;
    }

    if (cb) {
      // watch(source, cb)
      var newValue = effect.run();

      if (deep || forceTrigger || (isMultiSource ? newValue.some(function (v, i) {
        return (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasChanged)(v, oldValue[i]);
      }) : (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasChanged)(newValue, oldValue)) || false) {
        // cleanup before running cb again
        if (cleanup) {
          cleanup();
        }

        callWithAsyncErrorHandling(cb, instance, 3
        /* WATCH_CALLBACK */
        , [newValue, // pass undefined as the old value when it's changed for the first time
        oldValue === INITIAL_WATCHER_VALUE ? undefined : oldValue, onCleanup]);
        oldValue = newValue;
      }
    } else {
      // watchEffect
      effect.run();
    }
  }; // important: mark the job as a watcher callback so that scheduler knows
  // it is allowed to self-trigger (#1727)


  job.allowRecurse = !!cb;
  var scheduler;

  if (flush === 'sync') {
    scheduler = job; // the scheduler function gets called directly
  } else if (flush === 'post') {
    scheduler = function scheduler() {
      return queuePostRenderEffect(job, instance && instance.suspense);
    };
  } else {
    // default: 'pre'
    scheduler = function scheduler() {
      return queuePreFlushCb(job);
    };
  }

  var effect = new _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.ReactiveEffect(getter, scheduler);

  if (true) {
    effect.onTrack = onTrack;
    effect.onTrigger = onTrigger;
  } // initial run


  if (cb) {
    if (immediate) {
      job();
    } else {
      oldValue = effect.run();
    }
  } else if (flush === 'post') {
    queuePostRenderEffect(effect.run.bind(effect), instance && instance.suspense);
  } else {
    effect.run();
  }

  return function () {
    effect.stop();

    if (instance && instance.scope) {
      (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.remove)(instance.scope.effects, effect);
    }
  };
} // this.$watch


function instanceWatch(source, value, options) {
  var publicThis = this.proxy;
  var getter = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(source) ? source.includes('.') ? createPathGetter(publicThis, source) : function () {
    return publicThis[source];
  } : source.bind(publicThis, publicThis);
  var cb;

  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(value)) {
    cb = value;
  } else {
    cb = value.handler;
    options = value;
  }

  var cur = currentInstance;
  setCurrentInstance(this);
  var res = doWatch(getter, cb.bind(publicThis), options);

  if (cur) {
    setCurrentInstance(cur);
  } else {
    unsetCurrentInstance();
  }

  return res;
}

function createPathGetter(ctx, path) {
  var segments = path.split('.');
  return function () {
    var cur = ctx;

    for (var i = 0; i < segments.length && cur; i++) {
      cur = cur[segments[i]];
    }

    return cur;
  };
}

function traverse(value, seen) {
  if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(value) || value["__v_skip"
  /* SKIP */
  ]) {
    return value;
  }

  seen = seen || new Set();

  if (seen.has(value)) {
    return value;
  }

  seen.add(value);

  if ((0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isRef)(value)) {
    traverse(value.value, seen);
  } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(value)) {
    for (var i = 0; i < value.length; i++) {
      traverse(value[i], seen);
    }
  } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isSet)(value) || (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isMap)(value)) {
    value.forEach(function (v) {
      traverse(v, seen);
    });
  } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isPlainObject)(value)) {
    for (var key in value) {
      traverse(value[key], seen);
    }
  }

  return value;
}

function useTransitionState() {
  var state = {
    isMounted: false,
    isLeaving: false,
    isUnmounting: false,
    leavingVNodes: new Map()
  };
  onMounted(function () {
    state.isMounted = true;
  });
  onBeforeUnmount(function () {
    state.isUnmounting = true;
  });
  return state;
}

var TransitionHookValidator = [Function, Array];
var BaseTransitionImpl = {
  name: "BaseTransition",
  props: {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    // enter
    onBeforeEnter: TransitionHookValidator,
    onEnter: TransitionHookValidator,
    onAfterEnter: TransitionHookValidator,
    onEnterCancelled: TransitionHookValidator,
    // leave
    onBeforeLeave: TransitionHookValidator,
    onLeave: TransitionHookValidator,
    onAfterLeave: TransitionHookValidator,
    onLeaveCancelled: TransitionHookValidator,
    // appear
    onBeforeAppear: TransitionHookValidator,
    onAppear: TransitionHookValidator,
    onAfterAppear: TransitionHookValidator,
    onAppearCancelled: TransitionHookValidator
  },
  setup: function setup(props, _ref8) {
    var slots = _ref8.slots;
    var instance = getCurrentInstance();
    var state = useTransitionState();
    var prevTransitionKey;
    return function () {
      var children = slots["default"] && getTransitionRawChildren(slots["default"](), true);

      if (!children || !children.length) {
        return;
      }

      var child = children[0];

      if (children.length > 1) {
        var hasFound = false; // locate first non-comment child

        var _iterator3 = _createForOfIteratorHelper(children),
            _step3;

        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var c = _step3.value;

            if (c.type !== Comment) {
              if ( true && hasFound) {
                // warn more than one non-comment child
                warn('<transition> can only be used on a single element or component. ' + 'Use <transition-group> for lists.');
                break;
              }

              child = c;
              hasFound = true;
              if (false) {}
            }
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
      } // there's no need to track reactivity for these props so use the raw
      // props for a bit better perf


      var rawProps = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.toRaw)(props);
      var mode = rawProps.mode; // check mode

      if ( true && mode && mode !== 'in-out' && mode !== 'out-in' && mode !== 'default') {
        warn("invalid <transition> mode: ".concat(mode));
      }

      if (state.isLeaving) {
        return emptyPlaceholder(child);
      } // in the case of <transition><keep-alive/></transition>, we need to
      // compare the type of the kept-alive children.


      var innerChild = getKeepAliveChild(child);

      if (!innerChild) {
        return emptyPlaceholder(child);
      }

      var enterHooks = resolveTransitionHooks(innerChild, rawProps, state, instance);
      setTransitionHooks(innerChild, enterHooks);
      var oldChild = instance.subTree;
      var oldInnerChild = oldChild && getKeepAliveChild(oldChild);
      var transitionKeyChanged = false;
      var getTransitionKey = innerChild.type.getTransitionKey;

      if (getTransitionKey) {
        var key = getTransitionKey();

        if (prevTransitionKey === undefined) {
          prevTransitionKey = key;
        } else if (key !== prevTransitionKey) {
          prevTransitionKey = key;
          transitionKeyChanged = true;
        }
      } // handle mode


      if (oldInnerChild && oldInnerChild.type !== Comment && (!isSameVNodeType(innerChild, oldInnerChild) || transitionKeyChanged)) {
        var leavingHooks = resolveTransitionHooks(oldInnerChild, rawProps, state, instance); // update old tree's hooks in case of dynamic transition

        setTransitionHooks(oldInnerChild, leavingHooks); // switching between different views

        if (mode === 'out-in') {
          state.isLeaving = true; // return placeholder node and queue update when leave finishes

          leavingHooks.afterLeave = function () {
            state.isLeaving = false;
            instance.update();
          };

          return emptyPlaceholder(child);
        } else if (mode === 'in-out' && innerChild.type !== Comment) {
          leavingHooks.delayLeave = function (el, earlyRemove, delayedLeave) {
            var leavingVNodesCache = getLeavingNodesForType(state, oldInnerChild);
            leavingVNodesCache[String(oldInnerChild.key)] = oldInnerChild; // early removal callback

            el._leaveCb = function () {
              earlyRemove();
              el._leaveCb = undefined;
              delete enterHooks.delayedLeave;
            };

            enterHooks.delayedLeave = delayedLeave;
          };
        }
      }

      return child;
    };
  }
}; // export the public type for h/tsx inference
// also to avoid inline import() in generated d.ts files

var BaseTransition = BaseTransitionImpl;

function getLeavingNodesForType(state, vnode) {
  var leavingVNodes = state.leavingVNodes;
  var leavingVNodesCache = leavingVNodes.get(vnode.type);

  if (!leavingVNodesCache) {
    leavingVNodesCache = Object.create(null);
    leavingVNodes.set(vnode.type, leavingVNodesCache);
  }

  return leavingVNodesCache;
} // The transition hooks are attached to the vnode as vnode.transition
// and will be called at appropriate timing in the renderer.


function resolveTransitionHooks(vnode, props, state, instance) {
  var appear = props.appear,
      mode = props.mode,
      _props$persisted = props.persisted,
      persisted = _props$persisted === void 0 ? false : _props$persisted,
      onBeforeEnter = props.onBeforeEnter,
      onEnter = props.onEnter,
      onAfterEnter = props.onAfterEnter,
      onEnterCancelled = props.onEnterCancelled,
      onBeforeLeave = props.onBeforeLeave,
      onLeave = props.onLeave,
      onAfterLeave = props.onAfterLeave,
      onLeaveCancelled = props.onLeaveCancelled,
      onBeforeAppear = props.onBeforeAppear,
      onAppear = props.onAppear,
      onAfterAppear = props.onAfterAppear,
      onAppearCancelled = props.onAppearCancelled;
  var key = String(vnode.key);
  var leavingVNodesCache = getLeavingNodesForType(state, vnode);

  var callHook = function callHook(hook, args) {
    hook && callWithAsyncErrorHandling(hook, instance, 9
    /* TRANSITION_HOOK */
    , args);
  };

  var callAsyncHook = function callAsyncHook(hook, args) {
    var done = args[1];
    callHook(hook, args);

    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(hook)) {
      if (hook.every(function (hook) {
        return hook.length <= 1;
      })) done();
    } else if (hook.length <= 1) {
      done();
    }
  };

  var hooks = {
    mode: mode,
    persisted: persisted,
    beforeEnter: function beforeEnter(el) {
      var hook = onBeforeEnter;

      if (!state.isMounted) {
        if (appear) {
          hook = onBeforeAppear || onBeforeEnter;
        } else {
          return;
        }
      } // for same element (v-show)


      if (el._leaveCb) {
        el._leaveCb(true
        /* cancelled */
        );
      } // for toggled element with same key (v-if)


      var leavingVNode = leavingVNodesCache[key];

      if (leavingVNode && isSameVNodeType(vnode, leavingVNode) && leavingVNode.el._leaveCb) {
        // force early removal (not cancelled)
        leavingVNode.el._leaveCb();
      }

      callHook(hook, [el]);
    },
    enter: function enter(el) {
      var hook = onEnter;
      var afterHook = onAfterEnter;
      var cancelHook = onEnterCancelled;

      if (!state.isMounted) {
        if (appear) {
          hook = onAppear || onEnter;
          afterHook = onAfterAppear || onAfterEnter;
          cancelHook = onAppearCancelled || onEnterCancelled;
        } else {
          return;
        }
      }

      var called = false;

      var done = el._enterCb = function (cancelled) {
        if (called) return;
        called = true;

        if (cancelled) {
          callHook(cancelHook, [el]);
        } else {
          callHook(afterHook, [el]);
        }

        if (hooks.delayedLeave) {
          hooks.delayedLeave();
        }

        el._enterCb = undefined;
      };

      if (hook) {
        callAsyncHook(hook, [el, done]);
      } else {
        done();
      }
    },
    leave: function leave(el, remove) {
      var key = String(vnode.key);

      if (el._enterCb) {
        el._enterCb(true
        /* cancelled */
        );
      }

      if (state.isUnmounting) {
        return remove();
      }

      callHook(onBeforeLeave, [el]);
      var called = false;

      var done = el._leaveCb = function (cancelled) {
        if (called) return;
        called = true;
        remove();

        if (cancelled) {
          callHook(onLeaveCancelled, [el]);
        } else {
          callHook(onAfterLeave, [el]);
        }

        el._leaveCb = undefined;

        if (leavingVNodesCache[key] === vnode) {
          delete leavingVNodesCache[key];
        }
      };

      leavingVNodesCache[key] = vnode;

      if (onLeave) {
        callAsyncHook(onLeave, [el, done]);
      } else {
        done();
      }
    },
    clone: function clone(vnode) {
      return resolveTransitionHooks(vnode, props, state, instance);
    }
  };
  return hooks;
} // the placeholder really only handles one special case: KeepAlive
// in the case of a KeepAlive in a leave phase we need to return a KeepAlive
// placeholder with empty content to avoid the KeepAlive instance from being
// unmounted.


function emptyPlaceholder(vnode) {
  if (isKeepAlive(vnode)) {
    vnode = cloneVNode(vnode);
    vnode.children = null;
    return vnode;
  }
}

function getKeepAliveChild(vnode) {
  return isKeepAlive(vnode) ? vnode.children ? vnode.children[0] : undefined : vnode;
}

function setTransitionHooks(vnode, hooks) {
  if (vnode.shapeFlag & 6
  /* COMPONENT */
  && vnode.component) {
    setTransitionHooks(vnode.component.subTree, hooks);
  } else if (vnode.shapeFlag & 128
  /* SUSPENSE */
  ) {
    vnode.ssContent.transition = hooks.clone(vnode.ssContent);
    vnode.ssFallback.transition = hooks.clone(vnode.ssFallback);
  } else {
    vnode.transition = hooks;
  }
}

function getTransitionRawChildren(children) {
  var keepComment = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var parentKey = arguments.length > 2 ? arguments[2] : undefined;
  var ret = [];
  var keyedFragmentCount = 0;

  for (var i = 0; i < children.length; i++) {
    var child = children[i]; // #5360 inherit parent key in case of <template v-for>

    var key = parentKey == null ? child.key : String(parentKey) + String(child.key != null ? child.key : i); // handle fragment children case, e.g. v-for

    if (child.type === Fragment) {
      if (child.patchFlag & 128
      /* KEYED_FRAGMENT */
      ) keyedFragmentCount++;
      ret = ret.concat(getTransitionRawChildren(child.children, keepComment, key));
    } // comment placeholders should be skipped, e.g. v-if
    else if (keepComment || child.type !== Comment) {
      ret.push(key != null ? cloneVNode(child, {
        key: key
      }) : child);
    }
  } // #1126 if a transition children list contains multiple sub fragments, these
  // fragments will be merged into a flat children array. Since each v-for
  // fragment may contain different static bindings inside, we need to de-op
  // these children to force full diffs to ensure correct behavior.


  if (keyedFragmentCount > 1) {
    for (var _i2 = 0; _i2 < ret.length; _i2++) {
      ret[_i2].patchFlag = -2
      /* BAIL */
      ;
    }
  }

  return ret;
} // implementation, close to no-op


function defineComponent(options) {
  return (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(options) ? {
    setup: options,
    name: options.name
  } : options;
}

var isAsyncWrapper = function isAsyncWrapper(i) {
  return !!i.type.__asyncLoader;
};

function defineAsyncComponent(source) {
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(source)) {
    source = {
      loader: source
    };
  }

  var _source = source,
      loader = _source.loader,
      loadingComponent = _source.loadingComponent,
      errorComponent = _source.errorComponent,
      _source$delay = _source.delay,
      delay = _source$delay === void 0 ? 200 : _source$delay,
      timeout = _source.timeout,
      _source$suspensible = _source.suspensible,
      suspensible = _source$suspensible === void 0 ? true : _source$suspensible,
      userOnError = _source.onError;
  var pendingRequest = null;
  var resolvedComp;
  var retries = 0;

  var retry = function retry() {
    retries++;
    pendingRequest = null;
    return load();
  };

  var load = function load() {
    var thisRequest;
    return pendingRequest || (thisRequest = pendingRequest = loader()["catch"](function (err) {
      err = err instanceof Error ? err : new Error(String(err));

      if (userOnError) {
        return new Promise(function (resolve, reject) {
          var userRetry = function userRetry() {
            return resolve(retry());
          };

          var userFail = function userFail() {
            return reject(err);
          };

          userOnError(err, userRetry, userFail, retries + 1);
        });
      } else {
        throw err;
      }
    }).then(function (comp) {
      if (thisRequest !== pendingRequest && pendingRequest) {
        return pendingRequest;
      }

      if ( true && !comp) {
        warn("Async component loader resolved to undefined. " + "If you are using retry(), make sure to return its return value.");
      } // interop module default


      if (comp && (comp.__esModule || comp[Symbol.toStringTag] === 'Module')) {
        comp = comp["default"];
      }

      if ( true && comp && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(comp) && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(comp)) {
        throw new Error("Invalid async component load result: ".concat(comp));
      }

      resolvedComp = comp;
      return comp;
    }));
  };

  return defineComponent({
    name: 'AsyncComponentWrapper',
    __asyncLoader: load,

    get __asyncResolved() {
      return resolvedComp;
    },

    setup: function setup() {
      var instance = currentInstance; // already resolved

      if (resolvedComp) {
        return function () {
          return createInnerComp(resolvedComp, instance);
        };
      }

      var onError = function onError(err) {
        pendingRequest = null;
        handleError(err, instance, 13
        /* ASYNC_COMPONENT_LOADER */
        , !errorComponent
        /* do not throw in dev if user provided error component */
        );
      }; // suspense-controlled or SSR.


      if (suspensible && instance.suspense || isInSSRComponentSetup) {
        return load().then(function (comp) {
          return function () {
            return createInnerComp(comp, instance);
          };
        })["catch"](function (err) {
          onError(err);
          return function () {
            return errorComponent ? createVNode(errorComponent, {
              error: err
            }) : null;
          };
        });
      }

      var loaded = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
      var error = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.ref)();
      var delayed = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.ref)(!!delay);

      if (delay) {
        setTimeout(function () {
          delayed.value = false;
        }, delay);
      }

      if (timeout != null) {
        setTimeout(function () {
          if (!loaded.value && !error.value) {
            var err = new Error("Async component timed out after ".concat(timeout, "ms."));
            onError(err);
            error.value = err;
          }
        }, timeout);
      }

      load().then(function () {
        loaded.value = true;

        if (instance.parent && isKeepAlive(instance.parent.vnode)) {
          // parent is keep-alive, force update so the loaded component's
          // name is taken into account
          queueJob(instance.parent.update);
        }
      })["catch"](function (err) {
        onError(err);
        error.value = err;
      });
      return function () {
        if (loaded.value && resolvedComp) {
          return createInnerComp(resolvedComp, instance);
        } else if (error.value && errorComponent) {
          return createVNode(errorComponent, {
            error: error.value
          });
        } else if (loadingComponent && !delayed.value) {
          return createVNode(loadingComponent);
        }
      };
    }
  });
}

function createInnerComp(comp, _ref9) {
  var _ref9$vnode = _ref9.vnode,
      ref = _ref9$vnode.ref,
      props = _ref9$vnode.props,
      children = _ref9$vnode.children,
      shapeFlag = _ref9$vnode.shapeFlag,
      parent = _ref9.parent;
  var vnode = createVNode(comp, props, children); // ensure inner component inherits the async wrapper's ref owner

  vnode.ref = ref;
  return vnode;
}

var isKeepAlive = function isKeepAlive(vnode) {
  return vnode.type.__isKeepAlive;
};

var KeepAliveImpl = {
  name: "KeepAlive",
  // Marker for special handling inside the renderer. We are not using a ===
  // check directly on KeepAlive in the renderer, because importing it directly
  // would prevent it from being tree-shaken.
  __isKeepAlive: true,
  props: {
    include: [String, RegExp, Array],
    exclude: [String, RegExp, Array],
    max: [String, Number]
  },
  setup: function setup(props, _ref10) {
    var slots = _ref10.slots;
    var instance = getCurrentInstance(); // KeepAlive communicates with the instantiated renderer via the
    // ctx where the renderer passes in its internals,
    // and the KeepAlive instance exposes activate/deactivate implementations.
    // The whole point of this is to avoid importing KeepAlive directly in the
    // renderer to facilitate tree-shaking.

    var sharedContext = instance.ctx; // if the internal renderer is not registered, it indicates that this is server-side rendering,
    // for KeepAlive, we just need to render its children

    if (!sharedContext.renderer) {
      return function () {
        var children = slots["default"] && slots["default"]();
        return children && children.length === 1 ? children[0] : children;
      };
    }

    var cache = new Map();
    var keys = new Set();
    var current = null;

    if (true) {
      instance.__v_cache = cache;
    }

    var parentSuspense = instance.suspense;
    var _sharedContext$render = sharedContext.renderer,
        patch = _sharedContext$render.p,
        move = _sharedContext$render.m,
        _unmount = _sharedContext$render.um,
        createElement = _sharedContext$render.o.createElement;
    var storageContainer = createElement('div');

    sharedContext.activate = function (vnode, container, anchor, isSVG, optimized) {
      var instance = vnode.component;
      move(vnode, container, anchor, 0
      /* ENTER */
      , parentSuspense); // in case props have changed

      patch(instance.vnode, vnode, container, anchor, instance, parentSuspense, isSVG, vnode.slotScopeIds, optimized);
      queuePostRenderEffect(function () {
        instance.isDeactivated = false;

        if (instance.a) {
          (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.invokeArrayFns)(instance.a);
        }

        var vnodeHook = vnode.props && vnode.props.onVnodeMounted;

        if (vnodeHook) {
          invokeVNodeHook(vnodeHook, instance.parent, vnode);
        }
      }, parentSuspense);

      if (true) {
        // Update components tree
        devtoolsComponentAdded(instance);
      }
    };

    sharedContext.deactivate = function (vnode) {
      var instance = vnode.component;
      move(vnode, storageContainer, null, 1
      /* LEAVE */
      , parentSuspense);
      queuePostRenderEffect(function () {
        if (instance.da) {
          (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.invokeArrayFns)(instance.da);
        }

        var vnodeHook = vnode.props && vnode.props.onVnodeUnmounted;

        if (vnodeHook) {
          invokeVNodeHook(vnodeHook, instance.parent, vnode);
        }

        instance.isDeactivated = true;
      }, parentSuspense);

      if (true) {
        // Update components tree
        devtoolsComponentAdded(instance);
      }
    };

    function unmount(vnode) {
      // reset the shapeFlag so it can be properly unmounted
      resetShapeFlag(vnode);

      _unmount(vnode, instance, parentSuspense, true);
    }

    function pruneCache(filter) {
      cache.forEach(function (vnode, key) {
        var name = getComponentName(vnode.type);

        if (name && (!filter || !filter(name))) {
          pruneCacheEntry(key);
        }
      });
    }

    function pruneCacheEntry(key) {
      var cached = cache.get(key);

      if (!current || cached.type !== current.type) {
        unmount(cached);
      } else if (current) {
        // current active instance should no longer be kept-alive.
        // we can't unmount it now but it might be later, so reset its flag now.
        resetShapeFlag(current);
      }

      cache["delete"](key);
      keys["delete"](key);
    } // prune cache on include/exclude prop change


    watch(function () {
      return [props.include, props.exclude];
    }, function (_ref11) {
      var _ref12 = _slicedToArray(_ref11, 2),
          include = _ref12[0],
          exclude = _ref12[1];

      include && pruneCache(function (name) {
        return matches(include, name);
      });
      exclude && pruneCache(function (name) {
        return !matches(exclude, name);
      });
    }, // prune post-render after `current` has been updated
    {
      flush: 'post',
      deep: true
    }); // cache sub tree after render

    var pendingCacheKey = null;

    var cacheSubtree = function cacheSubtree() {
      // fix #1621, the pendingCacheKey could be 0
      if (pendingCacheKey != null) {
        cache.set(pendingCacheKey, getInnerChild(instance.subTree));
      }
    };

    onMounted(cacheSubtree);
    onUpdated(cacheSubtree);
    onBeforeUnmount(function () {
      cache.forEach(function (cached) {
        var subTree = instance.subTree,
            suspense = instance.suspense;
        var vnode = getInnerChild(subTree);

        if (cached.type === vnode.type) {
          // current instance will be unmounted as part of keep-alive's unmount
          resetShapeFlag(vnode); // but invoke its deactivated hook here

          var da = vnode.component.da;
          da && queuePostRenderEffect(da, suspense);
          return;
        }

        unmount(cached);
      });
    });
    return function () {
      pendingCacheKey = null;

      if (!slots["default"]) {
        return null;
      }

      var children = slots["default"]();
      var rawVNode = children[0];

      if (children.length > 1) {
        if (true) {
          warn("KeepAlive should contain exactly one component child.");
        }

        current = null;
        return children;
      } else if (!isVNode(rawVNode) || !(rawVNode.shapeFlag & 4
      /* STATEFUL_COMPONENT */
      ) && !(rawVNode.shapeFlag & 128
      /* SUSPENSE */
      )) {
        current = null;
        return rawVNode;
      }

      var vnode = getInnerChild(rawVNode);
      var comp = vnode.type; // for async components, name check should be based in its loaded
      // inner component if available

      var name = getComponentName(isAsyncWrapper(vnode) ? vnode.type.__asyncResolved || {} : comp);
      var include = props.include,
          exclude = props.exclude,
          max = props.max;

      if (include && (!name || !matches(include, name)) || exclude && name && matches(exclude, name)) {
        current = vnode;
        return rawVNode;
      }

      var key = vnode.key == null ? comp : vnode.key;
      var cachedVNode = cache.get(key); // clone vnode if it's reused because we are going to mutate it

      if (vnode.el) {
        vnode = cloneVNode(vnode);

        if (rawVNode.shapeFlag & 128
        /* SUSPENSE */
        ) {
          rawVNode.ssContent = vnode;
        }
      } // #1513 it's possible for the returned vnode to be cloned due to attr
      // fallthrough or scopeId, so the vnode here may not be the final vnode
      // that is mounted. Instead of caching it directly, we store the pending
      // key and cache `instance.subTree` (the normalized vnode) in
      // beforeMount/beforeUpdate hooks.


      pendingCacheKey = key;

      if (cachedVNode) {
        // copy over mounted state
        vnode.el = cachedVNode.el;
        vnode.component = cachedVNode.component;

        if (vnode.transition) {
          // recursively update transition hooks on subTree
          setTransitionHooks(vnode, vnode.transition);
        } // avoid vnode being mounted as fresh


        vnode.shapeFlag |= 512
        /* COMPONENT_KEPT_ALIVE */
        ; // make this key the freshest

        keys["delete"](key);
        keys.add(key);
      } else {
        keys.add(key); // prune oldest entry

        if (max && keys.size > parseInt(max, 10)) {
          pruneCacheEntry(keys.values().next().value);
        }
      } // avoid vnode being unmounted


      vnode.shapeFlag |= 256
      /* COMPONENT_SHOULD_KEEP_ALIVE */
      ;
      current = vnode;
      return isSuspense(rawVNode.type) ? rawVNode : vnode;
    };
  }
}; // export the public type for h/tsx inference
// also to avoid inline import() in generated d.ts files

var KeepAlive = KeepAliveImpl;

function matches(pattern, name) {
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(pattern)) {
    return pattern.some(function (p) {
      return matches(p, name);
    });
  } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(pattern)) {
    return pattern.split(',').includes(name);
  } else if (pattern.test) {
    return pattern.test(name);
  }
  /* istanbul ignore next */


  return false;
}

function onActivated(hook, target) {
  registerKeepAliveHook(hook, "a"
  /* ACTIVATED */
  , target);
}

function onDeactivated(hook, target) {
  registerKeepAliveHook(hook, "da"
  /* DEACTIVATED */
  , target);
}

function registerKeepAliveHook(hook, type) {
  var target = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : currentInstance;

  // cache the deactivate branch check wrapper for injected hooks so the same
  // hook can be properly deduped by the scheduler. "__wdc" stands for "with
  // deactivation check".
  var wrappedHook = hook.__wdc || (hook.__wdc = function () {
    // only fire the hook if the target instance is NOT in a deactivated branch.
    var current = target;

    while (current) {
      if (current.isDeactivated) {
        return;
      }

      current = current.parent;
    }

    return hook();
  });

  injectHook(type, wrappedHook, target); // In addition to registering it on the target instance, we walk up the parent
  // chain and register it on all ancestor instances that are keep-alive roots.
  // This avoids the need to walk the entire component tree when invoking these
  // hooks, and more importantly, avoids the need to track child components in
  // arrays.

  if (target) {
    var current = target.parent;

    while (current && current.parent) {
      if (isKeepAlive(current.parent.vnode)) {
        injectToKeepAliveRoot(wrappedHook, type, target, current);
      }

      current = current.parent;
    }
  }
}

function injectToKeepAliveRoot(hook, type, target, keepAliveRoot) {
  // injectHook wraps the original for error handling, so make sure to remove
  // the wrapped version.
  var injected = injectHook(type, hook, keepAliveRoot, true
  /* prepend */
  );
  onUnmounted(function () {
    (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.remove)(keepAliveRoot[type], injected);
  }, target);
}

function resetShapeFlag(vnode) {
  var shapeFlag = vnode.shapeFlag;

  if (shapeFlag & 256
  /* COMPONENT_SHOULD_KEEP_ALIVE */
  ) {
    shapeFlag -= 256
    /* COMPONENT_SHOULD_KEEP_ALIVE */
    ;
  }

  if (shapeFlag & 512
  /* COMPONENT_KEPT_ALIVE */
  ) {
    shapeFlag -= 512
    /* COMPONENT_KEPT_ALIVE */
    ;
  }

  vnode.shapeFlag = shapeFlag;
}

function getInnerChild(vnode) {
  return vnode.shapeFlag & 128
  /* SUSPENSE */
  ? vnode.ssContent : vnode;
}

function injectHook(type, hook) {
  var target = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : currentInstance;
  var prepend = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  if (target) {
    var hooks = target[type] || (target[type] = []); // cache the error handling wrapper for injected hooks so the same hook
    // can be properly deduped by the scheduler. "__weh" stands for "with error
    // handling".

    var wrappedHook = hook.__weh || (hook.__weh = function () {
      if (target.isUnmounted) {
        return;
      } // disable tracking inside all lifecycle hooks
      // since they can potentially be called inside effects.


      (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.pauseTracking)(); // Set currentInstance during hook invocation.
      // This assumes the hook does not synchronously trigger other hooks, which
      // can only be false when the user does something really funky.

      setCurrentInstance(target);

      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }

      var res = callWithAsyncErrorHandling(hook, target, type, args);
      unsetCurrentInstance();
      (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.resetTracking)();
      return res;
    });

    if (prepend) {
      hooks.unshift(wrappedHook);
    } else {
      hooks.push(wrappedHook);
    }

    return wrappedHook;
  } else if (true) {
    var apiName = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.toHandlerKey)(ErrorTypeStrings[type].replace(/ hook$/, ''));
    warn("".concat(apiName, " is called when there is no active component instance to be ") + "associated with. " + "Lifecycle injection APIs can only be used during execution of setup()." + (" If you are using async setup(), make sure to register lifecycle " + "hooks before the first await statement."));
  }
}

var createHook = function createHook(lifecycle) {
  return function (hook) {
    var target = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : currentInstance;
    return (// post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
      (!isInSSRComponentSetup || lifecycle === "sp"
      /* SERVER_PREFETCH */
      ) && injectHook(lifecycle, hook, target)
    );
  };
};

var onBeforeMount = createHook("bm"
/* BEFORE_MOUNT */
);
var onMounted = createHook("m"
/* MOUNTED */
);
var onBeforeUpdate = createHook("bu"
/* BEFORE_UPDATE */
);
var onUpdated = createHook("u"
/* UPDATED */
);
var onBeforeUnmount = createHook("bum"
/* BEFORE_UNMOUNT */
);
var onUnmounted = createHook("um"
/* UNMOUNTED */
);
var onServerPrefetch = createHook("sp"
/* SERVER_PREFETCH */
);
var onRenderTriggered = createHook("rtg"
/* RENDER_TRIGGERED */
);
var onRenderTracked = createHook("rtc"
/* RENDER_TRACKED */
);

function onErrorCaptured(hook) {
  var target = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : currentInstance;
  injectHook("ec"
  /* ERROR_CAPTURED */
  , hook, target);
}
/**
Runtime helper for applying directives to a vnode. Example usage:

const comp = resolveComponent('comp')
const foo = resolveDirective('foo')
const bar = resolveDirective('bar')

return withDirectives(h(comp), [
  [foo, this.x],
  [bar, this.y]
])
*/


function validateDirectiveName(name) {
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isBuiltInDirective)(name)) {
    warn('Do not use built-in directive ids as custom directive id: ' + name);
  }
}
/**
 * Adds directives to a VNode.
 */


function withDirectives(vnode, directives) {
  var internalInstance = currentRenderingInstance;

  if (internalInstance === null) {
     true && warn("withDirectives can only be used inside render functions.");
    return vnode;
  }

  var instance = getExposeProxy(internalInstance) || internalInstance.proxy;
  var bindings = vnode.dirs || (vnode.dirs = []);

  for (var i = 0; i < directives.length; i++) {
    var _directives$i = _slicedToArray(directives[i], 4),
        dir = _directives$i[0],
        value = _directives$i[1],
        arg = _directives$i[2],
        _directives$i$ = _directives$i[3],
        modifiers = _directives$i$ === void 0 ? _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ : _directives$i$;

    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(dir)) {
      dir = {
        mounted: dir,
        updated: dir
      };
    }

    if (dir.deep) {
      traverse(value);
    }

    bindings.push({
      dir: dir,
      instance: instance,
      value: value,
      oldValue: void 0,
      arg: arg,
      modifiers: modifiers
    });
  }

  return vnode;
}

function invokeDirectiveHook(vnode, prevVNode, instance, name) {
  var bindings = vnode.dirs;
  var oldBindings = prevVNode && prevVNode.dirs;

  for (var i = 0; i < bindings.length; i++) {
    var binding = bindings[i];

    if (oldBindings) {
      binding.oldValue = oldBindings[i].value;
    }

    var hook = binding.dir[name];

    if (hook) {
      // disable tracking inside all lifecycle hooks
      // since they can potentially be called inside effects.
      (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.pauseTracking)();
      callWithAsyncErrorHandling(hook, instance, 8
      /* DIRECTIVE_HOOK */
      , [vnode.el, binding, vnode, prevVNode]);
      (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.resetTracking)();
    }
  }
}

var COMPONENTS = 'components';
var DIRECTIVES = 'directives';
/**
 * @private
 */

function resolveComponent(name, maybeSelfReference) {
  return resolveAsset(COMPONENTS, name, true, maybeSelfReference) || name;
}

var NULL_DYNAMIC_COMPONENT = Symbol();
/**
 * @private
 */

function resolveDynamicComponent(component) {
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(component)) {
    return resolveAsset(COMPONENTS, component, false) || component;
  } else {
    // invalid types will fallthrough to createVNode and raise warning
    return component || NULL_DYNAMIC_COMPONENT;
  }
}
/**
 * @private
 */


function resolveDirective(name) {
  return resolveAsset(DIRECTIVES, name);
} // implementation


function resolveAsset(type, name) {
  var warnMissing = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var maybeSelfReference = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var instance = currentRenderingInstance || currentInstance;

  if (instance) {
    var Component = instance.type; // explicit self name has highest priority

    if (type === COMPONENTS) {
      var selfName = getComponentName(Component, false
      /* do not include inferred name to avoid breaking existing code */
      );

      if (selfName && (selfName === name || selfName === (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.camelize)(name) || selfName === (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.capitalize)((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.camelize)(name)))) {
        return Component;
      }
    }

    var res = // local registration
    // check instance[type] first which is resolved for options API
    resolve(instance[type] || Component[type], name) || // global registration
    resolve(instance.appContext[type], name);

    if (!res && maybeSelfReference) {
      // fallback to implicit self-reference
      return Component;
    }

    if ( true && warnMissing && !res) {
      var extra = type === COMPONENTS ? "\nIf this is a native custom element, make sure to exclude it from " + "component resolution via compilerOptions.isCustomElement." : "";
      warn("Failed to resolve ".concat(type.slice(0, -1), ": ").concat(name).concat(extra));
    }

    return res;
  } else if (true) {
    warn("resolve".concat((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.capitalize)(type.slice(0, -1)), " ") + "can only be used in render() or setup().");
  }
}

function resolve(registry, name) {
  return registry && (registry[name] || registry[(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.camelize)(name)] || registry[(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.capitalize)((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.camelize)(name))]);
}
/**
 * Actual implementation
 */


function renderList(source, renderItem, cache, index) {
  var ret;
  var cached = cache && cache[index];

  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(source) || (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(source)) {
    ret = new Array(source.length);

    for (var i = 0, l = source.length; i < l; i++) {
      ret[i] = renderItem(source[i], i, undefined, cached && cached[i]);
    }
  } else if (typeof source === 'number') {
    if ( true && !Number.isInteger(source)) {
      warn("The v-for range expect an integer value but got ".concat(source, "."));
    }

    ret = new Array(source);

    for (var _i3 = 0; _i3 < source; _i3++) {
      ret[_i3] = renderItem(_i3 + 1, _i3, undefined, cached && cached[_i3]);
    }
  } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(source)) {
    if (source[Symbol.iterator]) {
      ret = Array.from(source, function (item, i) {
        return renderItem(item, i, undefined, cached && cached[i]);
      });
    } else {
      var keys = Object.keys(source);
      ret = new Array(keys.length);

      for (var _i4 = 0, _l = keys.length; _i4 < _l; _i4++) {
        var key = keys[_i4];
        ret[_i4] = renderItem(source[key], key, _i4, cached && cached[_i4]);
      }
    }
  } else {
    ret = [];
  }

  if (cache) {
    cache[index] = ret;
  }

  return ret;
}
/**
 * Compiler runtime helper for creating dynamic slots object
 * @private
 */


function createSlots(slots, dynamicSlots) {
  for (var i = 0; i < dynamicSlots.length; i++) {
    var slot = dynamicSlots[i]; // array of dynamic slot generated by <template v-for="..." #[...]>

    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(slot)) {
      for (var j = 0; j < slot.length; j++) {
        slots[slot[j].name] = slot[j].fn;
      }
    } else if (slot) {
      // conditional single slot generated by <template v-if="..." #foo>
      slots[slot.name] = slot.fn;
    }
  }

  return slots;
}
/**
 * Compiler runtime helper for rendering `<slot/>`
 * @private
 */


function renderSlot(slots, name) {
  var props = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var // this is not a user-facing function, so the fallback is always generated by
  // the compiler and guaranteed to be a function returning an array
  fallback = arguments.length > 3 ? arguments[3] : undefined;
  var noSlotted = arguments.length > 4 ? arguments[4] : undefined;

  if (currentRenderingInstance.isCE || currentRenderingInstance.parent && isAsyncWrapper(currentRenderingInstance.parent) && currentRenderingInstance.parent.isCE) {
    return createVNode('slot', name === 'default' ? null : {
      name: name
    }, fallback && fallback());
  }

  var slot = slots[name];

  if ( true && slot && slot.length > 1) {
    warn("SSR-optimized slot function detected in a non-SSR-optimized render " + "function. You need to mark this component with $dynamic-slots in the " + "parent template.");

    slot = function slot() {
      return [];
    };
  } // a compiled slot disables block tracking by default to avoid manual
  // invocation interfering with template-based block tracking, but in
  // `renderSlot` we can be sure that it's template-based so we can force
  // enable it.


  if (slot && slot._c) {
    slot._d = false;
  }

  openBlock();
  var validSlotContent = slot && ensureValidVNode(slot(props));
  var rendered = createBlock(Fragment, {
    key: props.key || "_".concat(name)
  }, validSlotContent || (fallback ? fallback() : []), validSlotContent && slots._ === 1
  /* STABLE */
  ? 64
  /* STABLE_FRAGMENT */
  : -2
  /* BAIL */
  );

  if (!noSlotted && rendered.scopeId) {
    rendered.slotScopeIds = [rendered.scopeId + '-s'];
  }

  if (slot && slot._c) {
    slot._d = true;
  }

  return rendered;
}

function ensureValidVNode(vnodes) {
  return vnodes.some(function (child) {
    if (!isVNode(child)) return true;
    if (child.type === Comment) return false;
    if (child.type === Fragment && !ensureValidVNode(child.children)) return false;
    return true;
  }) ? vnodes : null;
}
/**
 * For prefixing keys in v-on="obj" with "on"
 * @private
 */


function toHandlers(obj) {
  var ret = {};

  if ( true && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(obj)) {
    warn("v-on with no argument expects an object value.");
    return ret;
  }

  for (var key in obj) {
    ret[(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.toHandlerKey)(key)] = obj[key];
  }

  return ret;
}
/**
 * #2437 In Vue 3, functional components do not have a public instance proxy but
 * they exist in the internal parent chain. For code that relies on traversing
 * public $parent chains, skip functional ones and go to the parent instead.
 */


var getPublicInstance = function getPublicInstance(i) {
  if (!i) return null;
  if (isStatefulComponent(i)) return getExposeProxy(i) || i.proxy;
  return getPublicInstance(i.parent);
};

var publicPropertiesMap = // Move PURE marker to new line to workaround compiler discarding it
// due to type annotation

/*#__PURE__*/
(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)(Object.create(null), {
  $: function $(i) {
    return i;
  },
  $el: function $el(i) {
    return i.vnode.el;
  },
  $data: function $data(i) {
    return i.data;
  },
  $props: function $props(i) {
    return  true ? (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.shallowReadonly)(i.props) : 0;
  },
  $attrs: function $attrs(i) {
    return  true ? (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.shallowReadonly)(i.attrs) : 0;
  },
  $slots: function $slots(i) {
    return  true ? (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.shallowReadonly)(i.slots) : 0;
  },
  $refs: function $refs(i) {
    return  true ? (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.shallowReadonly)(i.refs) : 0;
  },
  $parent: function $parent(i) {
    return getPublicInstance(i.parent);
  },
  $root: function $root(i) {
    return getPublicInstance(i.root);
  },
  $emit: function $emit(i) {
    return i.emit;
  },
  $options: function $options(i) {
    return __VUE_OPTIONS_API__ ? resolveMergedOptions(i) : i.type;
  },
  $forceUpdate: function $forceUpdate(i) {
    return i.f || (i.f = function () {
      return queueJob(i.update);
    });
  },
  $nextTick: function $nextTick(i) {
    return i.n || (i.n = nextTick.bind(i.proxy));
  },
  $watch: function $watch(i) {
    return __VUE_OPTIONS_API__ ? instanceWatch.bind(i) : _vue_shared__WEBPACK_IMPORTED_MODULE_1__.NOOP;
  }
});

var isReservedPrefix = function isReservedPrefix(key) {
  return key === '_' || key === '$';
};

var PublicInstanceProxyHandlers = {
  get: function get(_ref13, key) {
    var instance = _ref13._;
    var ctx = instance.ctx,
        setupState = instance.setupState,
        data = instance.data,
        props = instance.props,
        accessCache = instance.accessCache,
        type = instance.type,
        appContext = instance.appContext; // for internal formatters to know that this is a Vue instance

    if ( true && key === '__isVue') {
      return true;
    } // prioritize <script setup> bindings during dev.
    // this allows even properties that start with _ or $ to be used - so that
    // it aligns with the production behavior where the render fn is inlined and
    // indeed has access to all declared variables.


    if ( true && setupState !== _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ && setupState.__isScriptSetup && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(setupState, key)) {
      return setupState[key];
    } // data / props / ctx
    // This getter gets called for every property access on the render context
    // during render and is a major hotspot. The most expensive part of this
    // is the multiple hasOwn() calls. It's much faster to do a simple property
    // access on a plain object, so we use an accessCache object (with null
    // prototype) to memoize what access type a key corresponds to.


    var normalizedProps;

    if (key[0] !== '$') {
      var n = accessCache[key];

      if (n !== undefined) {
        switch (n) {
          case 1
          /* SETUP */
          :
            return setupState[key];

          case 2
          /* DATA */
          :
            return data[key];

          case 4
          /* CONTEXT */
          :
            return ctx[key];

          case 3
          /* PROPS */
          :
            return props[key];
          // default: just fallthrough
        }
      } else if (setupState !== _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(setupState, key)) {
        accessCache[key] = 1
        /* SETUP */
        ;
        return setupState[key];
      } else if (data !== _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(data, key)) {
        accessCache[key] = 2
        /* DATA */
        ;
        return data[key];
      } else if ( // only cache other properties when instance has declared (thus stable)
      // props
      (normalizedProps = instance.propsOptions[0]) && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(normalizedProps, key)) {
        accessCache[key] = 3
        /* PROPS */
        ;
        return props[key];
      } else if (ctx !== _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(ctx, key)) {
        accessCache[key] = 4
        /* CONTEXT */
        ;
        return ctx[key];
      } else if (!__VUE_OPTIONS_API__ || shouldCacheAccess) {
        accessCache[key] = 0
        /* OTHER */
        ;
      }
    }

    var publicGetter = publicPropertiesMap[key];
    var cssModule, globalProperties; // public $xxx properties

    if (publicGetter) {
      if (key === '$attrs') {
        (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.track)(instance, "get"
        /* GET */
        , key);
         true && markAttrsAccessed();
      }

      return publicGetter(instance);
    } else if ( // css module (injected by vue-loader)
    (cssModule = type.__cssModules) && (cssModule = cssModule[key])) {
      return cssModule;
    } else if (ctx !== _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(ctx, key)) {
      // user may set custom properties to `this` that start with `$`
      accessCache[key] = 4
      /* CONTEXT */
      ;
      return ctx[key];
    } else if ( // global properties
    globalProperties = appContext.config.globalProperties, (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(globalProperties, key)) {
      {
        return globalProperties[key];
      }
    } else if ( true && currentRenderingInstance && (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(key) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    key.indexOf('__v') !== 0)) {
      if (data !== _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ && isReservedPrefix(key[0]) && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(data, key)) {
        warn("Property ".concat(JSON.stringify(key), " must be accessed via $data because it starts with a reserved ") + "character (\"$\" or \"_\") and is not proxied on the render context.");
      } else if (instance === currentRenderingInstance) {
        warn("Property ".concat(JSON.stringify(key), " was accessed during render ") + "but is not defined on instance.");
      }
    }
  },
  set: function set(_ref14, key, value) {
    var instance = _ref14._;
    var data = instance.data,
        setupState = instance.setupState,
        ctx = instance.ctx;

    if (setupState !== _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(setupState, key)) {
      setupState[key] = value;
      return true;
    } else if (data !== _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(data, key)) {
      data[key] = value;
      return true;
    } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(instance.props, key)) {
       true && warn("Attempting to mutate prop \"".concat(key, "\". Props are readonly."), instance);
      return false;
    }

    if (key[0] === '$' && key.slice(1) in instance) {
       true && warn("Attempting to mutate public property \"".concat(key, "\". ") + "Properties starting with $ are reserved and readonly.", instance);
      return false;
    } else {
      if ( true && key in instance.appContext.config.globalProperties) {
        Object.defineProperty(ctx, key, {
          enumerable: true,
          configurable: true,
          value: value
        });
      } else {
        ctx[key] = value;
      }
    }

    return true;
  },
  has: function has(_ref15, key) {
    var _ref15$_ = _ref15._,
        data = _ref15$_.data,
        setupState = _ref15$_.setupState,
        accessCache = _ref15$_.accessCache,
        ctx = _ref15$_.ctx,
        appContext = _ref15$_.appContext,
        propsOptions = _ref15$_.propsOptions;
    var normalizedProps;
    return !!accessCache[key] || data !== _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(data, key) || setupState !== _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(setupState, key) || (normalizedProps = propsOptions[0]) && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(normalizedProps, key) || (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(ctx, key) || (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(publicPropertiesMap, key) || (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(appContext.config.globalProperties, key);
  },
  defineProperty: function defineProperty(target, key, descriptor) {
    if (descriptor.get != null) {
      // invalidate key cache of a getter based property #5417
      target._.accessCache[key] = 0;
    } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(descriptor, 'value')) {
      this.set(target, key, descriptor.value, null);
    }

    return Reflect.defineProperty(target, key, descriptor);
  }
};

if (true) {
  PublicInstanceProxyHandlers.ownKeys = function (target) {
    warn("Avoid app logic that relies on enumerating keys on a component instance. " + "The keys will be empty in production mode to avoid performance overhead.");
    return Reflect.ownKeys(target);
  };
}

var RuntimeCompiledPublicInstanceProxyHandlers = /*#__PURE__*/(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)({}, PublicInstanceProxyHandlers, {
  get: function get(target, key) {
    // fast path for unscopables when using `with` block
    if (key === Symbol.unscopables) {
      return;
    }

    return PublicInstanceProxyHandlers.get(target, key, target);
  },
  has: function has(_, key) {
    var has = key[0] !== '_' && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isGloballyWhitelisted)(key);

    if ( true && !has && PublicInstanceProxyHandlers.has(_, key)) {
      warn("Property ".concat(JSON.stringify(key), " should not start with _ which is a reserved prefix for Vue internals."));
    }

    return has;
  }
}); // dev only
// In dev mode, the proxy target exposes the same properties as seen on `this`
// for easier console inspection. In prod mode it will be an empty object so
// these properties definitions can be skipped.

function createDevRenderContext(instance) {
  var target = {}; // expose internal instance for proxy handlers

  Object.defineProperty(target, "_", {
    configurable: true,
    enumerable: false,
    get: function get() {
      return instance;
    }
  }); // expose public properties

  Object.keys(publicPropertiesMap).forEach(function (key) {
    Object.defineProperty(target, key, {
      configurable: true,
      enumerable: false,
      get: function get() {
        return publicPropertiesMap[key](instance);
      },
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: _vue_shared__WEBPACK_IMPORTED_MODULE_1__.NOOP
    });
  });
  return target;
} // dev only


function exposePropsOnRenderContext(instance) {
  var ctx = instance.ctx,
      _instance$propsOption3 = _slicedToArray(instance.propsOptions, 1),
      propsOptions = _instance$propsOption3[0];

  if (propsOptions) {
    Object.keys(propsOptions).forEach(function (key) {
      Object.defineProperty(ctx, key, {
        enumerable: true,
        configurable: true,
        get: function get() {
          return instance.props[key];
        },
        set: _vue_shared__WEBPACK_IMPORTED_MODULE_1__.NOOP
      });
    });
  }
} // dev only


function exposeSetupStateOnRenderContext(instance) {
  var ctx = instance.ctx,
      setupState = instance.setupState;
  Object.keys((0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.toRaw)(setupState)).forEach(function (key) {
    if (!setupState.__isScriptSetup) {
      if (isReservedPrefix(key[0])) {
        warn("setup() return property ".concat(JSON.stringify(key), " should not start with \"$\" or \"_\" ") + "which are reserved prefixes for Vue internals.");
        return;
      }

      Object.defineProperty(ctx, key, {
        enumerable: true,
        configurable: true,
        get: function get() {
          return setupState[key];
        },
        set: _vue_shared__WEBPACK_IMPORTED_MODULE_1__.NOOP
      });
    }
  });
}

function createDuplicateChecker() {
  var cache = Object.create(null);
  return function (type, key) {
    if (cache[key]) {
      warn("".concat(type, " property \"").concat(key, "\" is already defined in ").concat(cache[key], "."));
    } else {
      cache[key] = type;
    }
  };
}

var shouldCacheAccess = true;

function applyOptions(instance) {
  var options = resolveMergedOptions(instance);
  var publicThis = instance.proxy;
  var ctx = instance.ctx; // do not cache property access on public proxy during state initialization

  shouldCacheAccess = false; // call beforeCreate first before accessing other options since
  // the hook may mutate resolved options (#2791)

  if (options.beforeCreate) {
    callHook(options.beforeCreate, instance, "bc"
    /* BEFORE_CREATE */
    );
  }

  var dataOptions = options.data,
      computedOptions = options.computed,
      methods = options.methods,
      watchOptions = options.watch,
      provideOptions = options.provide,
      injectOptions = options.inject,
      created = options.created,
      beforeMount = options.beforeMount,
      mounted = options.mounted,
      beforeUpdate = options.beforeUpdate,
      updated = options.updated,
      activated = options.activated,
      deactivated = options.deactivated,
      beforeDestroy = options.beforeDestroy,
      beforeUnmount = options.beforeUnmount,
      destroyed = options.destroyed,
      unmounted = options.unmounted,
      render = options.render,
      renderTracked = options.renderTracked,
      renderTriggered = options.renderTriggered,
      errorCaptured = options.errorCaptured,
      serverPrefetch = options.serverPrefetch,
      expose = options.expose,
      inheritAttrs = options.inheritAttrs,
      components = options.components,
      directives = options.directives,
      filters = options.filters;
  var checkDuplicateProperties =  true ? createDuplicateChecker() : 0;

  if (true) {
    var _instance$propsOption4 = _slicedToArray(instance.propsOptions, 1),
        propsOptions = _instance$propsOption4[0];

    if (propsOptions) {
      for (var key in propsOptions) {
        checkDuplicateProperties("Props"
        /* PROPS */
        , key);
      }
    }
  } // options initialization order (to be consistent with Vue 2):
  // - props (already done outside of this function)
  // - inject
  // - methods
  // - data (deferred since it relies on `this` access)
  // - computed
  // - watch (deferred since it relies on `this` access)


  if (injectOptions) {
    resolveInjections(injectOptions, ctx, checkDuplicateProperties, instance.appContext.config.unwrapInjectedRef);
  }

  if (methods) {
    for (var _key5 in methods) {
      var methodHandler = methods[_key5];

      if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(methodHandler)) {
        // In dev mode, we use the `createRenderContext` function to define
        // methods to the proxy target, and those are read-only but
        // reconfigurable, so it needs to be redefined here
        if (true) {
          Object.defineProperty(ctx, _key5, {
            value: methodHandler.bind(publicThis),
            configurable: true,
            enumerable: true,
            writable: true
          });
        } else {}

        if (true) {
          checkDuplicateProperties("Methods"
          /* METHODS */
          , _key5);
        }
      } else if (true) {
        warn("Method \"".concat(_key5, "\" has type \"").concat(_typeof(methodHandler), "\" in the component definition. ") + "Did you reference the function correctly?");
      }
    }
  }

  if (dataOptions) {
    (function () {
      if ( true && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(dataOptions)) {
        warn("The data option must be a function. " + "Plain object usage is no longer supported.");
      }

      var data = dataOptions.call(publicThis, publicThis);

      if ( true && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isPromise)(data)) {
        warn("data() returned a Promise - note data() cannot be async; If you " + "intend to perform data fetching before component renders, use " + "async setup() + <Suspense>.");
      }

      if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(data)) {
         true && warn("data() should return an object.");
      } else {
        instance.data = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.reactive)(data);

        if (true) {
          var _loop = function _loop(_key6) {
            checkDuplicateProperties("Data"
            /* DATA */
            , _key6); // expose data on ctx during dev

            if (!isReservedPrefix(_key6[0])) {
              Object.defineProperty(ctx, _key6, {
                configurable: true,
                enumerable: true,
                get: function get() {
                  return data[_key6];
                },
                set: _vue_shared__WEBPACK_IMPORTED_MODULE_1__.NOOP
              });
            }
          };

          for (var _key6 in data) {
            _loop(_key6);
          }
        }
      }
    })();
  } // state initialization complete at this point - start caching access


  shouldCacheAccess = true;

  if (computedOptions) {
    var _loop2 = function _loop2(_key7) {
      var opt = computedOptions[_key7];
      var get = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(opt) ? opt.bind(publicThis, publicThis) : (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(opt.get) ? opt.get.bind(publicThis, publicThis) : _vue_shared__WEBPACK_IMPORTED_MODULE_1__.NOOP;

      if ( true && get === _vue_shared__WEBPACK_IMPORTED_MODULE_1__.NOOP) {
        warn("Computed property \"".concat(_key7, "\" has no getter."));
      }

      var set = !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(opt) && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(opt.set) ? opt.set.bind(publicThis) :  true ? function () {
        warn("Write operation failed: computed property \"".concat(_key7, "\" is readonly."));
      } : 0;
      var c = computed({
        get: get,
        set: set
      });
      Object.defineProperty(ctx, _key7, {
        enumerable: true,
        configurable: true,
        get: function get() {
          return c.value;
        },
        set: function set(v) {
          return c.value = v;
        }
      });

      if (true) {
        checkDuplicateProperties("Computed"
        /* COMPUTED */
        , _key7);
      }
    };

    for (var _key7 in computedOptions) {
      _loop2(_key7);
    }
  }

  if (watchOptions) {
    for (var _key8 in watchOptions) {
      createWatcher(watchOptions[_key8], ctx, publicThis, _key8);
    }
  }

  if (provideOptions) {
    var provides = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(provideOptions) ? provideOptions.call(publicThis) : provideOptions;
    Reflect.ownKeys(provides).forEach(function (key) {
      provide(key, provides[key]);
    });
  }

  if (created) {
    callHook(created, instance, "c"
    /* CREATED */
    );
  }

  function registerLifecycleHook(register, hook) {
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(hook)) {
      hook.forEach(function (_hook) {
        return register(_hook.bind(publicThis));
      });
    } else if (hook) {
      register(hook.bind(publicThis));
    }
  }

  registerLifecycleHook(onBeforeMount, beforeMount);
  registerLifecycleHook(onMounted, mounted);
  registerLifecycleHook(onBeforeUpdate, beforeUpdate);
  registerLifecycleHook(onUpdated, updated);
  registerLifecycleHook(onActivated, activated);
  registerLifecycleHook(onDeactivated, deactivated);
  registerLifecycleHook(onErrorCaptured, errorCaptured);
  registerLifecycleHook(onRenderTracked, renderTracked);
  registerLifecycleHook(onRenderTriggered, renderTriggered);
  registerLifecycleHook(onBeforeUnmount, beforeUnmount);
  registerLifecycleHook(onUnmounted, unmounted);
  registerLifecycleHook(onServerPrefetch, serverPrefetch);

  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(expose)) {
    if (expose.length) {
      var exposed = instance.exposed || (instance.exposed = {});
      expose.forEach(function (key) {
        Object.defineProperty(exposed, key, {
          get: function get() {
            return publicThis[key];
          },
          set: function set(val) {
            return publicThis[key] = val;
          }
        });
      });
    } else if (!instance.exposed) {
      instance.exposed = {};
    }
  } // options that are handled when creating the instance but also need to be
  // applied from mixins


  if (render && instance.render === _vue_shared__WEBPACK_IMPORTED_MODULE_1__.NOOP) {
    instance.render = render;
  }

  if (inheritAttrs != null) {
    instance.inheritAttrs = inheritAttrs;
  } // asset options.


  if (components) instance.components = components;
  if (directives) instance.directives = directives;
}

function resolveInjections(injectOptions, ctx) {
  var checkDuplicateProperties = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _vue_shared__WEBPACK_IMPORTED_MODULE_1__.NOOP;
  var unwrapRef = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(injectOptions)) {
    injectOptions = normalizeInject(injectOptions);
  }

  var _loop3 = function _loop3(key) {
    var opt = injectOptions[key];
    var injected = void 0;

    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(opt)) {
      if ('default' in opt) {
        injected = inject(opt.from || key, opt["default"], true
        /* treat default function as factory */
        );
      } else {
        injected = inject(opt.from || key);
      }
    } else {
      injected = inject(opt);
    }

    if ((0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isRef)(injected)) {
      // TODO remove the check in 3.3
      if (unwrapRef) {
        Object.defineProperty(ctx, key, {
          enumerable: true,
          configurable: true,
          get: function get() {
            return injected.value;
          },
          set: function set(v) {
            return injected.value = v;
          }
        });
      } else {
        if (true) {
          warn("injected property \"".concat(key, "\" is a ref and will be auto-unwrapped ") + "and no longer needs `.value` in the next minor release. " + "To opt-in to the new behavior now, " + "set `app.config.unwrapInjectedRef = true` (this config is " + "temporary and will not be needed in the future.)");
        }

        ctx[key] = injected;
      }
    } else {
      ctx[key] = injected;
    }

    if (true) {
      checkDuplicateProperties("Inject"
      /* INJECT */
      , key);
    }
  };

  for (var key in injectOptions) {
    _loop3(key);
  }
}

function callHook(hook, instance, type) {
  callWithAsyncErrorHandling((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(hook) ? hook.map(function (h) {
    return h.bind(instance.proxy);
  }) : hook.bind(instance.proxy), instance, type);
}

function createWatcher(raw, ctx, publicThis, key) {
  var getter = key.includes('.') ? createPathGetter(publicThis, key) : function () {
    return publicThis[key];
  };

  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(raw)) {
    var handler = ctx[raw];

    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(handler)) {
      watch(getter, handler);
    } else if (true) {
      warn("Invalid watch handler specified by key \"".concat(raw, "\""), handler);
    }
  } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(raw)) {
    watch(getter, raw.bind(publicThis));
  } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(raw)) {
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(raw)) {
      raw.forEach(function (r) {
        return createWatcher(r, ctx, publicThis, key);
      });
    } else {
      var _handler = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(raw.handler) ? raw.handler.bind(publicThis) : ctx[raw.handler];

      if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(_handler)) {
        watch(getter, _handler, raw);
      } else if (true) {
        warn("Invalid watch handler specified by key \"".concat(raw.handler, "\""), _handler);
      }
    }
  } else if (true) {
    warn("Invalid watch option: \"".concat(key, "\""), raw);
  }
}
/**
 * Resolve merged options and cache it on the component.
 * This is done only once per-component since the merging does not involve
 * instances.
 */


function resolveMergedOptions(instance) {
  var base = instance.type;
  var mixins = base.mixins,
      extendsOptions = base["extends"];
  var _instance$appContext = instance.appContext,
      globalMixins = _instance$appContext.mixins,
      cache = _instance$appContext.optionsCache,
      optionMergeStrategies = _instance$appContext.config.optionMergeStrategies;
  var cached = cache.get(base);
  var resolved;

  if (cached) {
    resolved = cached;
  } else if (!globalMixins.length && !mixins && !extendsOptions) {
    {
      resolved = base;
    }
  } else {
    resolved = {};

    if (globalMixins.length) {
      globalMixins.forEach(function (m) {
        return mergeOptions(resolved, m, optionMergeStrategies, true);
      });
    }

    mergeOptions(resolved, base, optionMergeStrategies);
  }

  cache.set(base, resolved);
  return resolved;
}

function mergeOptions(to, from, strats) {
  var asMixin = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var mixins = from.mixins,
      extendsOptions = from["extends"];

  if (extendsOptions) {
    mergeOptions(to, extendsOptions, strats, true);
  }

  if (mixins) {
    mixins.forEach(function (m) {
      return mergeOptions(to, m, strats, true);
    });
  }

  for (var key in from) {
    if (asMixin && key === 'expose') {
       true && warn("\"expose\" option is ignored when declared in mixins or extends. " + "It should only be declared in the base component itself.");
    } else {
      var strat = internalOptionMergeStrats[key] || strats && strats[key];
      to[key] = strat ? strat(to[key], from[key]) : from[key];
    }
  }

  return to;
}

var internalOptionMergeStrats = {
  data: mergeDataFn,
  props: mergeObjectOptions,
  emits: mergeObjectOptions,
  // objects
  methods: mergeObjectOptions,
  computed: mergeObjectOptions,
  // lifecycle
  beforeCreate: mergeAsArray,
  created: mergeAsArray,
  beforeMount: mergeAsArray,
  mounted: mergeAsArray,
  beforeUpdate: mergeAsArray,
  updated: mergeAsArray,
  beforeDestroy: mergeAsArray,
  beforeUnmount: mergeAsArray,
  destroyed: mergeAsArray,
  unmounted: mergeAsArray,
  activated: mergeAsArray,
  deactivated: mergeAsArray,
  errorCaptured: mergeAsArray,
  serverPrefetch: mergeAsArray,
  // assets
  components: mergeObjectOptions,
  directives: mergeObjectOptions,
  // watch
  watch: mergeWatchOptions,
  // provide / inject
  provide: mergeDataFn,
  inject: mergeInject
};

function mergeDataFn(to, from) {
  if (!from) {
    return to;
  }

  if (!to) {
    return from;
  }

  return function mergedDataFn() {
    return (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(to) ? to.call(this, this) : to, (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(from) ? from.call(this, this) : from);
  };
}

function mergeInject(to, from) {
  return mergeObjectOptions(normalizeInject(to), normalizeInject(from));
}

function normalizeInject(raw) {
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(raw)) {
    var res = {};

    for (var i = 0; i < raw.length; i++) {
      res[raw[i]] = raw[i];
    }

    return res;
  }

  return raw;
}

function mergeAsArray(to, from) {
  return to ? _toConsumableArray(new Set([].concat(to, from))) : from;
}

function mergeObjectOptions(to, from) {
  return to ? (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)(Object.create(null), to), from) : from;
}

function mergeWatchOptions(to, from) {
  if (!to) return from;
  if (!from) return to;
  var merged = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)(Object.create(null), to);

  for (var key in from) {
    merged[key] = mergeAsArray(to[key], from[key]);
  }

  return merged;
}

function initProps(instance, rawProps, isStateful) {
  var isSSR = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var props = {};
  var attrs = {};
  (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.def)(attrs, InternalObjectKey, 1);
  instance.propsDefaults = Object.create(null);
  setFullProps(instance, rawProps, props, attrs); // ensure all declared prop keys are present

  for (var key in instance.propsOptions[0]) {
    if (!(key in props)) {
      props[key] = undefined;
    }
  } // validation


  if (true) {
    validateProps(rawProps || {}, props, instance);
  }

  if (isStateful) {
    // stateful
    instance.props = isSSR ? props : (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.shallowReactive)(props);
  } else {
    if (!instance.type.props) {
      // functional w/ optional props, props === attrs
      instance.props = attrs;
    } else {
      // functional w/ declared props
      instance.props = props;
    }
  }

  instance.attrs = attrs;
}

function updateProps(instance, rawProps, rawPrevProps, optimized) {
  var props = instance.props,
      attrs = instance.attrs,
      patchFlag = instance.vnode.patchFlag;
  var rawCurrentProps = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.toRaw)(props);

  var _instance$propsOption5 = _slicedToArray(instance.propsOptions, 1),
      options = _instance$propsOption5[0];

  var hasAttrsChanged = false;

  if ( // always force full diff in dev
  // - #1942 if hmr is enabled with sfc component
  // - vite#872 non-sfc component used by sfc component
  !( true && (instance.type.__hmrId || instance.parent && instance.parent.type.__hmrId)) && (optimized || patchFlag > 0) && !(patchFlag & 16
  /* FULL_PROPS */
  )) {
    if (patchFlag & 8
    /* PROPS */
    ) {
      // Compiler-generated props & no keys change, just set the updated
      // the props.
      var propsToUpdate = instance.vnode.dynamicProps;

      for (var i = 0; i < propsToUpdate.length; i++) {
        var key = propsToUpdate[i]; // skip if the prop key is a declared emit event listener

        if (isEmitListener(instance.emitsOptions, key)) {
          continue;
        } // PROPS flag guarantees rawProps to be non-null


        var value = rawProps[key];

        if (options) {
          // attr / props separation was done on init and will be consistent
          // in this code path, so just check if attrs have it.
          if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(attrs, key)) {
            if (value !== attrs[key]) {
              attrs[key] = value;
              hasAttrsChanged = true;
            }
          } else {
            var camelizedKey = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.camelize)(key);
            props[camelizedKey] = resolvePropValue(options, rawCurrentProps, camelizedKey, value, instance, false
            /* isAbsent */
            );
          }
        } else {
          if (value !== attrs[key]) {
            attrs[key] = value;
            hasAttrsChanged = true;
          }
        }
      }
    }
  } else {
    // full props update.
    if (setFullProps(instance, rawProps, props, attrs)) {
      hasAttrsChanged = true;
    } // in case of dynamic props, check if we need to delete keys from
    // the props object


    var kebabKey;

    for (var _key9 in rawCurrentProps) {
      if (!rawProps || // for camelCase
      !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(rawProps, _key9) && ( // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      (kebabKey = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hyphenate)(_key9)) === _key9 || !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(rawProps, kebabKey))) {
        if (options) {
          if (rawPrevProps && ( // for camelCase
          rawPrevProps[_key9] !== undefined || // for kebab-case
          rawPrevProps[kebabKey] !== undefined)) {
            props[_key9] = resolvePropValue(options, rawCurrentProps, _key9, undefined, instance, true
            /* isAbsent */
            );
          }
        } else {
          delete props[_key9];
        }
      }
    } // in the case of functional component w/o props declaration, props and
    // attrs point to the same object so it should already have been updated.


    if (attrs !== rawCurrentProps) {
      for (var _key10 in attrs) {
        if (!rawProps || !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(rawProps, _key10) && !false) {
          delete attrs[_key10];
          hasAttrsChanged = true;
        }
      }
    }
  } // trigger updates for $attrs in case it's used in component slots


  if (hasAttrsChanged) {
    (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.trigger)(instance, "set"
    /* SET */
    , '$attrs');
  }

  if (true) {
    validateProps(rawProps || {}, props, instance);
  }
}

function setFullProps(instance, rawProps, props, attrs) {
  var _instance$propsOption6 = _slicedToArray(instance.propsOptions, 2),
      options = _instance$propsOption6[0],
      needCastKeys = _instance$propsOption6[1];

  var hasAttrsChanged = false;
  var rawCastValues;

  if (rawProps) {
    for (var key in rawProps) {
      // key, ref are reserved and never passed down
      if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isReservedProp)(key)) {
        continue;
      }

      var value = rawProps[key]; // prop option names are camelized during normalization, so to support
      // kebab -> camel conversion here we need to camelize the key.

      var camelKey = void 0;

      if (options && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(options, camelKey = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.camelize)(key))) {
        if (!needCastKeys || !needCastKeys.includes(camelKey)) {
          props[camelKey] = value;
        } else {
          (rawCastValues || (rawCastValues = {}))[camelKey] = value;
        }
      } else if (!isEmitListener(instance.emitsOptions, key)) {
        if (!(key in attrs) || value !== attrs[key]) {
          attrs[key] = value;
          hasAttrsChanged = true;
        }
      }
    }
  }

  if (needCastKeys) {
    var rawCurrentProps = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.toRaw)(props);
    var castValues = rawCastValues || _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ;

    for (var i = 0; i < needCastKeys.length; i++) {
      var _key11 = needCastKeys[i];
      props[_key11] = resolvePropValue(options, rawCurrentProps, _key11, castValues[_key11], instance, !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(castValues, _key11));
    }
  }

  return hasAttrsChanged;
}

function resolvePropValue(options, props, key, value, instance, isAbsent) {
  var opt = options[key];

  if (opt != null) {
    var hasDefault = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(opt, 'default'); // default values

    if (hasDefault && value === undefined) {
      var defaultValue = opt["default"];

      if (opt.type !== Function && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(defaultValue)) {
        var propsDefaults = instance.propsDefaults;

        if (key in propsDefaults) {
          value = propsDefaults[key];
        } else {
          setCurrentInstance(instance);
          value = propsDefaults[key] = defaultValue.call(null, props);
          unsetCurrentInstance();
        }
      } else {
        value = defaultValue;
      }
    } // boolean casting


    if (opt[0
    /* shouldCast */
    ]) {
      if (isAbsent && !hasDefault) {
        value = false;
      } else if (opt[1
      /* shouldCastTrue */
      ] && (value === '' || value === (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hyphenate)(key))) {
        value = true;
      }
    }
  }

  return value;
}

function normalizePropsOptions(comp, appContext) {
  var asMixin = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var cache = appContext.propsCache;
  var cached = cache.get(comp);

  if (cached) {
    return cached;
  }

  var raw = comp.props;
  var normalized = {};
  var needCastKeys = []; // apply mixin/extends props

  var hasExtends = false;

  if (__VUE_OPTIONS_API__ && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(comp)) {
    var extendProps = function extendProps(raw) {
      hasExtends = true;

      var _normalizePropsOption = normalizePropsOptions(raw, appContext, true),
          _normalizePropsOption2 = _slicedToArray(_normalizePropsOption, 2),
          props = _normalizePropsOption2[0],
          keys = _normalizePropsOption2[1];

      (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)(normalized, props);
      if (keys) needCastKeys.push.apply(needCastKeys, _toConsumableArray(keys));
    };

    if (!asMixin && appContext.mixins.length) {
      appContext.mixins.forEach(extendProps);
    }

    if (comp["extends"]) {
      extendProps(comp["extends"]);
    }

    if (comp.mixins) {
      comp.mixins.forEach(extendProps);
    }
  }

  if (!raw && !hasExtends) {
    cache.set(comp, _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_ARR);
    return _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_ARR;
  }

  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(raw)) {
    for (var i = 0; i < raw.length; i++) {
      if ( true && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(raw[i])) {
        warn("props must be strings when using array syntax.", raw[i]);
      }

      var normalizedKey = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.camelize)(raw[i]);

      if (validatePropName(normalizedKey)) {
        normalized[normalizedKey] = _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ;
      }
    }
  } else if (raw) {
    if ( true && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(raw)) {
      warn("invalid props options", raw);
    }

    for (var key in raw) {
      var _normalizedKey = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.camelize)(key);

      if (validatePropName(_normalizedKey)) {
        var opt = raw[key];
        var prop = normalized[_normalizedKey] = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(opt) || (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(opt) ? {
          type: opt
        } : opt;

        if (prop) {
          var booleanIndex = getTypeIndex(Boolean, prop.type);
          var stringIndex = getTypeIndex(String, prop.type);
          prop[0
          /* shouldCast */
          ] = booleanIndex > -1;
          prop[1
          /* shouldCastTrue */
          ] = stringIndex < 0 || booleanIndex < stringIndex; // if the prop needs boolean casting or default value

          if (booleanIndex > -1 || (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(prop, 'default')) {
            needCastKeys.push(_normalizedKey);
          }
        }
      }
    }
  }

  var res = [normalized, needCastKeys];
  cache.set(comp, res);
  return res;
}

function validatePropName(key) {
  if (key[0] !== '$') {
    return true;
  } else if (true) {
    warn("Invalid prop name: \"".concat(key, "\" is a reserved property."));
  }

  return false;
} // use function string name to check type constructors
// so that it works across vms / iframes.


function getType(ctor) {
  var match = ctor && ctor.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ctor === null ? 'null' : '';
}

function isSameType(a, b) {
  return getType(a) === getType(b);
}

function getTypeIndex(type, expectedTypes) {
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(expectedTypes)) {
    return expectedTypes.findIndex(function (t) {
      return isSameType(t, type);
    });
  } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1;
  }

  return -1;
}
/**
 * dev only
 */


function validateProps(rawProps, props, instance) {
  var resolvedValues = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.toRaw)(props);
  var options = instance.propsOptions[0];

  for (var key in options) {
    var opt = options[key];
    if (opt == null) continue;
    validateProp(key, resolvedValues[key], opt, !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(rawProps, key) && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(rawProps, (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hyphenate)(key)));
  }
}
/**
 * dev only
 */


function validateProp(name, value, prop, isAbsent) {
  var type = prop.type,
      required = prop.required,
      validator = prop.validator; // required!

  if (required && isAbsent) {
    warn('Missing required prop: "' + name + '"');
    return;
  } // missing but optional


  if (value == null && !prop.required) {
    return;
  } // type check


  if (type != null && type !== true) {
    var isValid = false;
    var types = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(type) ? type : [type];
    var expectedTypes = []; // value is valid as long as one of the specified types match

    for (var i = 0; i < types.length && !isValid; i++) {
      var _assertType = assertType(value, types[i]),
          valid = _assertType.valid,
          expectedType = _assertType.expectedType;

      expectedTypes.push(expectedType || '');
      isValid = valid;
    }

    if (!isValid) {
      warn(getInvalidTypeMessage(name, value, expectedTypes));
      return;
    }
  } // custom validator


  if (validator && !validator(value)) {
    warn('Invalid prop: custom validator check failed for prop "' + name + '".');
  }
}

var isSimpleType = /*#__PURE__*/(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.makeMap)('String,Number,Boolean,Function,Symbol,BigInt');
/**
 * dev only
 */

function assertType(value, type) {
  var valid;
  var expectedType = getType(type);

  if (isSimpleType(expectedType)) {
    var t = _typeof(value);

    valid = t === expectedType.toLowerCase(); // for primitive wrapper objects

    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(value);
  } else if (expectedType === 'Array') {
    valid = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(value);
  } else if (expectedType === 'null') {
    valid = value === null;
  } else {
    valid = value instanceof type;
  }

  return {
    valid: valid,
    expectedType: expectedType
  };
}
/**
 * dev only
 */


function getInvalidTypeMessage(name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"".concat(name, "\".") + " Expected ".concat(expectedTypes.map(_vue_shared__WEBPACK_IMPORTED_MODULE_1__.capitalize).join(' | '));
  var expectedType = expectedTypes[0];
  var receivedType = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.toRawType)(value);
  var expectedValue = styleValue(value, expectedType);
  var receivedValue = styleValue(value, receivedType); // check if we need to specify expected value

  if (expectedTypes.length === 1 && isExplicable(expectedType) && !isBoolean(expectedType, receivedType)) {
    message += " with value ".concat(expectedValue);
  }

  message += ", got ".concat(receivedType, " "); // check if we need to specify received value

  if (isExplicable(receivedType)) {
    message += "with value ".concat(receivedValue, ".");
  }

  return message;
}
/**
 * dev only
 */


function styleValue(value, type) {
  if (type === 'String') {
    return "\"".concat(value, "\"");
  } else if (type === 'Number') {
    return "".concat(Number(value));
  } else {
    return "".concat(value);
  }
}
/**
 * dev only
 */


function isExplicable(type) {
  var explicitTypes = ['string', 'number', 'boolean'];
  return explicitTypes.some(function (elem) {
    return type.toLowerCase() === elem;
  });
}
/**
 * dev only
 */


function isBoolean() {
  for (var _len5 = arguments.length, args = new Array(_len5), _key12 = 0; _key12 < _len5; _key12++) {
    args[_key12] = arguments[_key12];
  }

  return args.some(function (elem) {
    return elem.toLowerCase() === 'boolean';
  });
}

var isInternalKey = function isInternalKey(key) {
  return key[0] === '_' || key === '$stable';
};

var normalizeSlotValue = function normalizeSlotValue(value) {
  return (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(value) ? value.map(normalizeVNode) : [normalizeVNode(value)];
};

var normalizeSlot = function normalizeSlot(key, rawSlot, ctx) {
  if (rawSlot._n) {
    // already normalized - #5353
    return rawSlot;
  }

  var normalized = withCtx(function () {
    if ( true && currentInstance) {
      warn("Slot \"".concat(key, "\" invoked outside of the render function: ") + "this will not track dependencies used in the slot. " + "Invoke the slot function inside the render function instead.");
    }

    return normalizeSlotValue(rawSlot.apply(void 0, arguments));
  }, ctx);
  normalized._c = false;
  return normalized;
};

var normalizeObjectSlots = function normalizeObjectSlots(rawSlots, slots, instance) {
  var ctx = rawSlots._ctx;

  for (var key in rawSlots) {
    if (isInternalKey(key)) continue;
    var value = rawSlots[key];

    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(value)) {
      slots[key] = normalizeSlot(key, value, ctx);
    } else if (value != null) {
      (function () {
        if (true) {
          warn("Non-function value encountered for slot \"".concat(key, "\". ") + "Prefer function slots for better performance.");
        }

        var normalized = normalizeSlotValue(value);

        slots[key] = function () {
          return normalized;
        };
      })();
    }
  }
};

var normalizeVNodeSlots = function normalizeVNodeSlots(instance, children) {
  if ( true && !isKeepAlive(instance.vnode) && !false) {
    warn("Non-function value encountered for default slot. " + "Prefer function slots for better performance.");
  }

  var normalized = normalizeSlotValue(children);

  instance.slots["default"] = function () {
    return normalized;
  };
};

var initSlots = function initSlots(instance, children) {
  if (instance.vnode.shapeFlag & 32
  /* SLOTS_CHILDREN */
  ) {
    var type = children._;

    if (type) {
      // users can get the shallow readonly version of the slots object through `this.$slots`,
      // we should avoid the proxy object polluting the slots of the internal instance
      instance.slots = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.toRaw)(children); // make compiler marker non-enumerable

      (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.def)(children, '_', type);
    } else {
      normalizeObjectSlots(children, instance.slots = {});
    }
  } else {
    instance.slots = {};

    if (children) {
      normalizeVNodeSlots(instance, children);
    }
  }

  (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.def)(instance.slots, InternalObjectKey, 1);
};

var updateSlots = function updateSlots(instance, children, optimized) {
  var vnode = instance.vnode,
      slots = instance.slots;
  var needDeletionCheck = true;
  var deletionComparisonTarget = _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ;

  if (vnode.shapeFlag & 32
  /* SLOTS_CHILDREN */
  ) {
    var type = children._;

    if (type) {
      // compiled slots.
      if ( true && isHmrUpdating) {
        // Parent was HMR updated so slot content may have changed.
        // force update slots and mark instance for hmr as well
        (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)(slots, children);
      } else if (optimized && type === 1
      /* STABLE */
      ) {
        // compiled AND stable.
        // no need to update, and skip stale slots removal.
        needDeletionCheck = false;
      } else {
        // compiled but dynamic (v-if/v-for on slots) - update slots, but skip
        // normalization.
        (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)(slots, children); // #2893
        // when rendering the optimized slots by manually written render function,
        // we need to delete the `slots._` flag if necessary to make subsequent updates reliable,
        // i.e. let the `renderSlot` create the bailed Fragment

        if (!optimized && type === 1
        /* STABLE */
        ) {
          delete slots._;
        }
      }
    } else {
      needDeletionCheck = !children.$stable;
      normalizeObjectSlots(children, slots);
    }

    deletionComparisonTarget = children;
  } else if (children) {
    // non slot object children (direct value) passed to a component
    normalizeVNodeSlots(instance, children);
    deletionComparisonTarget = {
      "default": 1
    };
  } // delete stale slots


  if (needDeletionCheck) {
    for (var key in slots) {
      if (!isInternalKey(key) && !(key in deletionComparisonTarget)) {
        delete slots[key];
      }
    }
  }
};

function createAppContext() {
  return {
    app: null,
    config: {
      isNativeTag: _vue_shared__WEBPACK_IMPORTED_MODULE_1__.NO,
      performance: false,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: undefined,
      warnHandler: undefined,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap()
  };
}

var uid = 0;

function createAppAPI(render, hydrate) {
  return function createApp(rootComponent) {
    var rootProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

    if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(rootComponent)) {
      rootComponent = Object.assign({}, rootComponent);
    }

    if (rootProps != null && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(rootProps)) {
       true && warn("root props passed to app.mount() must be an object.");
      rootProps = null;
    }

    var context = createAppContext();
    var installedPlugins = new Set();
    var isMounted = false;
    var app = context.app = {
      _uid: uid++,
      _component: rootComponent,
      _props: rootProps,
      _container: null,
      _context: context,
      _instance: null,
      version: version,

      get config() {
        return context.config;
      },

      set config(v) {
        if (true) {
          warn("app.config cannot be replaced. Modify individual options instead.");
        }
      },

      use: function use(plugin) {
        for (var _len6 = arguments.length, options = new Array(_len6 > 1 ? _len6 - 1 : 0), _key13 = 1; _key13 < _len6; _key13++) {
          options[_key13 - 1] = arguments[_key13];
        }

        if (installedPlugins.has(plugin)) {
           true && warn("Plugin has already been applied to target app.");
        } else if (plugin && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(plugin.install)) {
          installedPlugins.add(plugin);
          plugin.install.apply(plugin, [app].concat(options));
        } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(plugin)) {
          installedPlugins.add(plugin);
          plugin.apply(void 0, [app].concat(options));
        } else if (true) {
          warn("A plugin must either be a function or an object with an \"install\" " + "function.");
        }

        return app;
      },
      mixin: function mixin(_mixin) {
        if (__VUE_OPTIONS_API__) {
          if (!context.mixins.includes(_mixin)) {
            context.mixins.push(_mixin);
          } else if (true) {
            warn('Mixin has already been applied to target app' + (_mixin.name ? ": ".concat(_mixin.name) : ''));
          }
        } else if (true) {
          warn('Mixins are only available in builds supporting Options API');
        }

        return app;
      },
      component: function component(name, _component) {
        if (true) {
          validateComponentName(name, context.config);
        }

        if (!_component) {
          return context.components[name];
        }

        if ( true && context.components[name]) {
          warn("Component \"".concat(name, "\" has already been registered in target app."));
        }

        context.components[name] = _component;
        return app;
      },
      directive: function directive(name, _directive) {
        if (true) {
          validateDirectiveName(name);
        }

        if (!_directive) {
          return context.directives[name];
        }

        if ( true && context.directives[name]) {
          warn("Directive \"".concat(name, "\" has already been registered in target app."));
        }

        context.directives[name] = _directive;
        return app;
      },
      mount: function mount(rootContainer, isHydrate, isSVG) {
        if (!isMounted) {
          // #5571
          if ( true && rootContainer.__vue_app__) {
            warn("There is already an app instance mounted on the host container.\n" + " If you want to mount another app on the same host container," + " you need to unmount the previous app by calling `app.unmount()` first.");
          }

          var vnode = createVNode(rootComponent, rootProps); // store app context on the root VNode.
          // this will be set on the root instance on initial mount.

          vnode.appContext = context; // HMR root reload

          if (true) {
            context.reload = function () {
              render(cloneVNode(vnode), rootContainer, isSVG);
            };
          }

          if (isHydrate && hydrate) {
            hydrate(vnode, rootContainer);
          } else {
            render(vnode, rootContainer, isSVG);
          }

          isMounted = true;
          app._container = rootContainer;
          rootContainer.__vue_app__ = app;

          if (true) {
            app._instance = vnode.component;
            devtoolsInitApp(app, version);
          }

          return getExposeProxy(vnode.component) || vnode.component.proxy;
        } else if (true) {
          warn("App has already been mounted.\n" + "If you want to remount the same app, move your app creation logic " + "into a factory function and create fresh app instances for each " + "mount - e.g. `const createMyApp = () => createApp(App)`");
        }
      },
      unmount: function unmount() {
        if (isMounted) {
          render(null, app._container);

          if (true) {
            app._instance = null;
            devtoolsUnmountApp(app);
          }

          delete app._container.__vue_app__;
        } else if (true) {
          warn("Cannot unmount an app that is not mounted.");
        }
      },
      provide: function provide(key, value) {
        if ( true && key in context.provides) {
          warn("App already provides property with key \"".concat(String(key), "\". ") + "It will be overwritten with the new value.");
        }

        context.provides[key] = value;
        return app;
      }
    };
    return app;
  };
}
/**
 * Function for handling a template ref
 */


function setRef(rawRef, oldRawRef, parentSuspense, vnode) {
  var isUnmount = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(rawRef)) {
    rawRef.forEach(function (r, i) {
      return setRef(r, oldRawRef && ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(oldRawRef) ? oldRawRef[i] : oldRawRef), parentSuspense, vnode, isUnmount);
    });
    return;
  }

  if (isAsyncWrapper(vnode) && !isUnmount) {
    // when mounting async components, nothing needs to be done,
    // because the template ref is forwarded to inner component
    return;
  }

  var refValue = vnode.shapeFlag & 4
  /* STATEFUL_COMPONENT */
  ? getExposeProxy(vnode.component) || vnode.component.proxy : vnode.el;
  var value = isUnmount ? null : refValue;
  var owner = rawRef.i,
      ref = rawRef.r;

  if ( true && !owner) {
    warn("Missing ref owner context. ref cannot be used on hoisted vnodes. " + "A vnode with ref must be created inside the render function.");
    return;
  }

  var oldRef = oldRawRef && oldRawRef.r;
  var refs = owner.refs === _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ ? owner.refs = {} : owner.refs;
  var setupState = owner.setupState; // dynamic ref changed. unset old ref

  if (oldRef != null && oldRef !== ref) {
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(oldRef)) {
      refs[oldRef] = null;

      if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(setupState, oldRef)) {
        setupState[oldRef] = null;
      }
    } else if ((0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isRef)(oldRef)) {
      oldRef.value = null;
    }
  }

  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(ref)) {
    callWithErrorHandling(ref, owner, 12
    /* FUNCTION_REF */
    , [value, refs]);
  } else {
    var _isString = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(ref);

    var _isRef = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isRef)(ref);

    if (_isString || _isRef) {
      var doSet = function doSet() {
        if (rawRef.f) {
          var existing = _isString ? refs[ref] : ref.value;

          if (isUnmount) {
            (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(existing) && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.remove)(existing, refValue);
          } else {
            if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(existing)) {
              if (_isString) {
                refs[ref] = [refValue];

                if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(setupState, ref)) {
                  setupState[ref] = refs[ref];
                }
              } else {
                ref.value = [refValue];
                if (rawRef.k) refs[rawRef.k] = ref.value;
              }
            } else if (!existing.includes(refValue)) {
              existing.push(refValue);
            }
          }
        } else if (_isString) {
          refs[ref] = value;

          if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(setupState, ref)) {
            setupState[ref] = value;
          }
        } else if (_isRef) {
          ref.value = value;
          if (rawRef.k) refs[rawRef.k] = value;
        } else if (true) {
          warn('Invalid template ref type:', ref, "(".concat(_typeof(ref), ")"));
        }
      };

      if (value) {
        doSet.id = -1;
        queuePostRenderEffect(doSet, parentSuspense);
      } else {
        doSet();
      }
    } else if (true) {
      warn('Invalid template ref type:', ref, "(".concat(_typeof(ref), ")"));
    }
  }
}

var hasMismatch = false;

var isSVGContainer = function isSVGContainer(container) {
  return /svg/.test(container.namespaceURI) && container.tagName !== 'foreignObject';
};

var isComment = function isComment(node) {
  return node.nodeType === 8;
}
/* COMMENT */
; // Note: hydration is DOM-specific
// But we have to place it in core due to tight coupling with core - splitting
// it out creates a ton of unnecessary complexity.
// Hydration also depends on some renderer internal logic which needs to be
// passed in via arguments.


function createHydrationFunctions(rendererInternals) {
  var mountComponent = rendererInternals.mt,
      patch = rendererInternals.p,
      _rendererInternals$o2 = rendererInternals.o,
      patchProp = _rendererInternals$o2.patchProp,
      createText = _rendererInternals$o2.createText,
      nextSibling = _rendererInternals$o2.nextSibling,
      parentNode = _rendererInternals$o2.parentNode,
      remove = _rendererInternals$o2.remove,
      insert = _rendererInternals$o2.insert,
      createComment = _rendererInternals$o2.createComment;

  var hydrate = function hydrate(vnode, container) {
    if (!container.hasChildNodes()) {
       true && warn("Attempting to hydrate existing markup but container is empty. " + "Performing full mount instead.");
      patch(null, vnode, container);
      flushPostFlushCbs();
      container._vnode = vnode;
      return;
    }

    hasMismatch = false;
    hydrateNode(container.firstChild, vnode, null, null, null);
    flushPostFlushCbs();
    container._vnode = vnode;

    if (hasMismatch && !false) {
      // this error should show up in production
      console.error("Hydration completed but contains mismatches.");
    }
  };

  var hydrateNode = function hydrateNode(node, vnode, parentComponent, parentSuspense, slotScopeIds) {
    var optimized = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
    var isFragmentStart = isComment(node) && node.data === '[';

    var onMismatch = function onMismatch() {
      return handleMismatch(node, vnode, parentComponent, parentSuspense, slotScopeIds, isFragmentStart);
    };

    var type = vnode.type,
        ref = vnode.ref,
        shapeFlag = vnode.shapeFlag,
        patchFlag = vnode.patchFlag;
    var domType = node.nodeType;
    vnode.el = node;

    if (patchFlag === -2
    /* BAIL */
    ) {
      optimized = false;
      vnode.dynamicChildren = null;
    }

    var nextNode = null;

    switch (type) {
      case Text:
        if (domType !== 3
        /* TEXT */
        ) {
          // #5728 empty text node inside a slot can cause hydration failure
          // because the server rendered HTML won't contain a text node
          if (vnode.children === '') {
            insert(vnode.el = createText(''), parentNode(node), node);
            nextNode = node;
          } else {
            nextNode = onMismatch();
          }
        } else {
          if (node.data !== vnode.children) {
            hasMismatch = true;
             true && warn("Hydration text mismatch:" + "\n- Client: ".concat(JSON.stringify(node.data)) + "\n- Server: ".concat(JSON.stringify(vnode.children)));
            node.data = vnode.children;
          }

          nextNode = nextSibling(node);
        }

        break;

      case Comment:
        if (domType !== 8
        /* COMMENT */
        || isFragmentStart) {
          nextNode = onMismatch();
        } else {
          nextNode = nextSibling(node);
        }

        break;

      case Static:
        if (domType !== 1
        /* ELEMENT */
        && domType !== 3
        /* TEXT */
        ) {
          nextNode = onMismatch();
        } else {
          // determine anchor, adopt content
          nextNode = node; // if the static vnode has its content stripped during build,
          // adopt it from the server-rendered HTML.

          var needToAdoptContent = !vnode.children.length;

          for (var i = 0; i < vnode.staticCount; i++) {
            if (needToAdoptContent) vnode.children += nextNode.nodeType === 1
            /* ELEMENT */
            ? nextNode.outerHTML : nextNode.data;

            if (i === vnode.staticCount - 1) {
              vnode.anchor = nextNode;
            }

            nextNode = nextSibling(nextNode);
          }

          return nextNode;
        }

        break;

      case Fragment:
        if (!isFragmentStart) {
          nextNode = onMismatch();
        } else {
          nextNode = hydrateFragment(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized);
        }

        break;

      default:
        if (shapeFlag & 1
        /* ELEMENT */
        ) {
          if (domType !== 1
          /* ELEMENT */
          || vnode.type.toLowerCase() !== node.tagName.toLowerCase()) {
            nextNode = onMismatch();
          } else {
            nextNode = hydrateElement(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized);
          }
        } else if (shapeFlag & 6
        /* COMPONENT */
        ) {
          // when setting up the render effect, if the initial vnode already
          // has .el set, the component will perform hydration instead of mount
          // on its sub-tree.
          vnode.slotScopeIds = slotScopeIds;
          var container = parentNode(node);
          mountComponent(vnode, container, null, parentComponent, parentSuspense, isSVGContainer(container), optimized); // component may be async, so in the case of fragments we cannot rely
          // on component's rendered output to determine the end of the fragment
          // instead, we do a lookahead to find the end anchor node.

          nextNode = isFragmentStart ? locateClosingAsyncAnchor(node) : nextSibling(node); // #4293 teleport as component root

          if (nextNode && isComment(nextNode) && nextNode.data === 'teleport end') {
            nextNode = nextSibling(nextNode);
          } // #3787
          // if component is async, it may get moved / unmounted before its
          // inner component is loaded, so we need to give it a placeholder
          // vnode that matches its adopted DOM.


          if (isAsyncWrapper(vnode)) {
            var subTree;

            if (isFragmentStart) {
              subTree = createVNode(Fragment);
              subTree.anchor = nextNode ? nextNode.previousSibling : container.lastChild;
            } else {
              subTree = node.nodeType === 3 ? createTextVNode('') : createVNode('div');
            }

            subTree.el = node;
            vnode.component.subTree = subTree;
          }
        } else if (shapeFlag & 64
        /* TELEPORT */
        ) {
          if (domType !== 8
          /* COMMENT */
          ) {
            nextNode = onMismatch();
          } else {
            nextNode = vnode.type.hydrate(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized, rendererInternals, hydrateChildren);
          }
        } else if (shapeFlag & 128
        /* SUSPENSE */
        ) {
          nextNode = vnode.type.hydrate(node, vnode, parentComponent, parentSuspense, isSVGContainer(parentNode(node)), slotScopeIds, optimized, rendererInternals, hydrateNode);
        } else if (true) {
          warn('Invalid HostVNode type:', type, "(".concat(_typeof(type), ")"));
        }

    }

    if (ref != null) {
      setRef(ref, null, parentSuspense, vnode);
    }

    return nextNode;
  };

  var hydrateElement = function hydrateElement(el, vnode, parentComponent, parentSuspense, slotScopeIds, optimized) {
    optimized = optimized || !!vnode.dynamicChildren;
    var type = vnode.type,
        props = vnode.props,
        patchFlag = vnode.patchFlag,
        shapeFlag = vnode.shapeFlag,
        dirs = vnode.dirs; // #4006 for form elements with non-string v-model value bindings
    // e.g. <option :value="obj">, <input type="checkbox" :true-value="1">

    var forcePatchValue = type === 'input' && dirs || type === 'option'; // skip props & children if this is hoisted static nodes
    // #5405 in dev, always hydrate children for HMR

    if (true
    /* HOISTED */
    ) {
      if (dirs) {
        invokeDirectiveHook(vnode, null, parentComponent, 'created');
      } // props


      if (props) {
        if (forcePatchValue || !optimized || patchFlag & (16
        /* FULL_PROPS */
        | 32
        /* HYDRATE_EVENTS */
        )) {
          for (var key in props) {
            if (forcePatchValue && key.endsWith('value') || (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isOn)(key) && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isReservedProp)(key)) {
              patchProp(el, key, null, props[key], false, undefined, parentComponent);
            }
          }
        } else if (props.onClick) {
          // Fast path for click listeners (which is most often) to avoid
          // iterating through props.
          patchProp(el, 'onClick', null, props.onClick, false, undefined, parentComponent);
        }
      } // vnode / directive hooks


      var vnodeHooks;

      if (vnodeHooks = props && props.onVnodeBeforeMount) {
        invokeVNodeHook(vnodeHooks, parentComponent, vnode);
      }

      if (dirs) {
        invokeDirectiveHook(vnode, null, parentComponent, 'beforeMount');
      }

      if ((vnodeHooks = props && props.onVnodeMounted) || dirs) {
        queueEffectWithSuspense(function () {
          vnodeHooks && invokeVNodeHook(vnodeHooks, parentComponent, vnode);
          dirs && invokeDirectiveHook(vnode, null, parentComponent, 'mounted');
        }, parentSuspense);
      } // children


      if (shapeFlag & 16
      /* ARRAY_CHILDREN */
      && // skip if element has innerHTML / textContent
      !(props && (props.innerHTML || props.textContent))) {
        var next = hydrateChildren(el.firstChild, vnode, el, parentComponent, parentSuspense, slotScopeIds, optimized);
        var _hasWarned = false;

        while (next) {
          hasMismatch = true;

          if ( true && !_hasWarned) {
            warn("Hydration children mismatch in <".concat(vnode.type, ">: ") + "server rendered element contains more child nodes than client vdom.");
            _hasWarned = true;
          } // The SSRed DOM contains more nodes than it should. Remove them.


          var cur = next;
          next = next.nextSibling;
          remove(cur);
        }
      } else if (shapeFlag & 8
      /* TEXT_CHILDREN */
      ) {
        if (el.textContent !== vnode.children) {
          hasMismatch = true;
           true && warn("Hydration text content mismatch in <".concat(vnode.type, ">:\n") + "- Client: ".concat(el.textContent, "\n") + "- Server: ".concat(vnode.children));
          el.textContent = vnode.children;
        }
      }
    }

    return el.nextSibling;
  };

  var hydrateChildren = function hydrateChildren(node, parentVNode, container, parentComponent, parentSuspense, slotScopeIds, optimized) {
    optimized = optimized || !!parentVNode.dynamicChildren;
    var children = parentVNode.children;
    var l = children.length;
    var hasWarned = false;

    for (var i = 0; i < l; i++) {
      var vnode = optimized ? children[i] : children[i] = normalizeVNode(children[i]);

      if (node) {
        node = hydrateNode(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized);
      } else if (vnode.type === Text && !vnode.children) {
        continue;
      } else {
        hasMismatch = true;

        if ( true && !hasWarned) {
          warn("Hydration children mismatch in <".concat(container.tagName.toLowerCase(), ">: ") + "server rendered element contains fewer child nodes than client vdom.");
          hasWarned = true;
        } // the SSRed DOM didn't contain enough nodes. Mount the missing ones.


        patch(null, vnode, container, null, parentComponent, parentSuspense, isSVGContainer(container), slotScopeIds);
      }
    }

    return node;
  };

  var hydrateFragment = function hydrateFragment(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized) {
    var fragmentSlotScopeIds = vnode.slotScopeIds;

    if (fragmentSlotScopeIds) {
      slotScopeIds = slotScopeIds ? slotScopeIds.concat(fragmentSlotScopeIds) : fragmentSlotScopeIds;
    }

    var container = parentNode(node);
    var next = hydrateChildren(nextSibling(node), vnode, container, parentComponent, parentSuspense, slotScopeIds, optimized);

    if (next && isComment(next) && next.data === ']') {
      return nextSibling(vnode.anchor = next);
    } else {
      // fragment didn't hydrate successfully, since we didn't get a end anchor
      // back. This should have led to node/children mismatch warnings.
      hasMismatch = true; // since the anchor is missing, we need to create one and insert it

      insert(vnode.anchor = createComment("]"), container, next);
      return next;
    }
  };

  var handleMismatch = function handleMismatch(node, vnode, parentComponent, parentSuspense, slotScopeIds, isFragment) {
    hasMismatch = true;
     true && warn("Hydration node mismatch:\n- Client vnode:", vnode.type, "\n- Server rendered DOM:", node, node.nodeType === 3
    /* TEXT */
    ? "(text)" : isComment(node) && node.data === '[' ? "(start of fragment)" : "");
    vnode.el = null;

    if (isFragment) {
      // remove excessive fragment nodes
      var end = locateClosingAsyncAnchor(node);

      while (true) {
        var _next2 = nextSibling(node);

        if (_next2 && _next2 !== end) {
          remove(_next2);
        } else {
          break;
        }
      }
    }

    var next = nextSibling(node);
    var container = parentNode(node);
    remove(node);
    patch(null, vnode, container, next, parentComponent, parentSuspense, isSVGContainer(container), slotScopeIds);
    return next;
  };

  var locateClosingAsyncAnchor = function locateClosingAsyncAnchor(node) {
    var match = 0;

    while (node) {
      node = nextSibling(node);

      if (node && isComment(node)) {
        if (node.data === '[') match++;

        if (node.data === ']') {
          if (match === 0) {
            return nextSibling(node);
          } else {
            match--;
          }
        }
      }
    }

    return node;
  };

  return [hydrate, hydrateNode];
}
/* eslint-disable no-restricted-globals */


var supported;
var perf;

function startMeasure(instance, type) {
  if (instance.appContext.config.performance && isSupported()) {
    perf.mark("vue-".concat(type, "-").concat(instance.uid));
  }

  if (true) {
    devtoolsPerfStart(instance, type, isSupported() ? perf.now() : Date.now());
  }
}

function endMeasure(instance, type) {
  if (instance.appContext.config.performance && isSupported()) {
    var startTag = "vue-".concat(type, "-").concat(instance.uid);
    var endTag = startTag + ":end";
    perf.mark(endTag);
    perf.measure("<".concat(formatComponentName(instance, instance.type), "> ").concat(type), startTag, endTag);
    perf.clearMarks(startTag);
    perf.clearMarks(endTag);
  }

  if (true) {
    devtoolsPerfEnd(instance, type, isSupported() ? perf.now() : Date.now());
  }
}

function isSupported() {
  if (supported !== undefined) {
    return supported;
  }

  if (typeof window !== 'undefined' && window.performance) {
    supported = true;
    perf = window.performance;
  } else {
    supported = false;
  }

  return supported;
}
/**
 * This is only called in esm-bundler builds.
 * It is called when a renderer is created, in `baseCreateRenderer` so that
 * importing runtime-core is side-effects free.
 *
 * istanbul-ignore-next
 */


function initFeatureFlags() {
  var needWarn = [];

  if (typeof __VUE_OPTIONS_API__ !== 'boolean') {
     true && needWarn.push("__VUE_OPTIONS_API__");
    (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.getGlobalThis)().__VUE_OPTIONS_API__ = true;
  }

  if (typeof __VUE_PROD_DEVTOOLS__ !== 'boolean') {
     true && needWarn.push("__VUE_PROD_DEVTOOLS__");
    (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.getGlobalThis)().__VUE_PROD_DEVTOOLS__ = false;
  }

  if ( true && needWarn.length) {
    var multi = needWarn.length > 1;
    console.warn("Feature flag".concat(multi ? "s" : "", " ").concat(needWarn.join(', '), " ").concat(multi ? "are" : "is", " not explicitly defined. You are running the esm-bundler build of Vue, ") + "which expects these compile-time feature flags to be globally injected " + "via the bundler config in order to get better tree-shaking in the " + "production bundle.\n\n" + "For more details, see https://link.vuejs.org/feature-flags.");
  }
}

var queuePostRenderEffect = queueEffectWithSuspense;
/**
 * The createRenderer function accepts two generic arguments:
 * HostNode and HostElement, corresponding to Node and Element types in the
 * host environment. For example, for runtime-dom, HostNode would be the DOM
 * `Node` interface and HostElement would be the DOM `Element` interface.
 *
 * Custom renderers can pass in the platform specific types like this:
 *
 * ``` js
 * const { render, createApp } = createRenderer<Node, Element>({
 *   patchProp,
 *   ...nodeOps
 * })
 * ```
 */

function createRenderer(options) {
  return baseCreateRenderer(options);
} // Separate API for creating hydration-enabled renderer.
// Hydration logic is only used when calling this function, making it
// tree-shakable.


function createHydrationRenderer(options) {
  return baseCreateRenderer(options, createHydrationFunctions);
} // implementation


function baseCreateRenderer(options, createHydrationFns) {
  // compile-time feature flags check
  {
    initFeatureFlags();
  }
  var target = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.getGlobalThis)();
  target.__VUE__ = true;

  if (true) {
    setDevtoolsHook(target.__VUE_DEVTOOLS_GLOBAL_HOOK__, target);
  }

  var hostInsert = options.insert,
      hostRemove = options.remove,
      hostPatchProp = options.patchProp,
      hostCreateElement = options.createElement,
      hostCreateText = options.createText,
      hostCreateComment = options.createComment,
      hostSetText = options.setText,
      hostSetElementText = options.setElementText,
      hostParentNode = options.parentNode,
      hostNextSibling = options.nextSibling,
      _options$setScopeId = options.setScopeId,
      hostSetScopeId = _options$setScopeId === void 0 ? _vue_shared__WEBPACK_IMPORTED_MODULE_1__.NOOP : _options$setScopeId,
      hostCloneNode = options.cloneNode,
      hostInsertStaticContent = options.insertStaticContent; // Note: functions inside this closure should use `const xxx = () => {}`
  // style in order to prevent being inlined by minifiers.

  var patch = function patch(n1, n2, container) {
    var anchor = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
    var parentComponent = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
    var parentSuspense = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;
    var isSVG = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : false;
    var slotScopeIds = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : null;
    var optimized = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] :  true && isHmrUpdating ? false : !!n2.dynamicChildren;

    if (n1 === n2) {
      return;
    } // patching & not same type, unmount old tree


    if (n1 && !isSameVNodeType(n1, n2)) {
      anchor = getNextHostNode(n1);
      unmount(n1, parentComponent, parentSuspense, true);
      n1 = null;
    }

    if (n2.patchFlag === -2
    /* BAIL */
    ) {
      optimized = false;
      n2.dynamicChildren = null;
    }

    var type = n2.type,
        ref = n2.ref,
        shapeFlag = n2.shapeFlag;

    switch (type) {
      case Text:
        processText(n1, n2, container, anchor);
        break;

      case Comment:
        processCommentNode(n1, n2, container, anchor);
        break;

      case Static:
        if (n1 == null) {
          mountStaticNode(n2, container, anchor, isSVG);
        } else if (true) {
          patchStaticNode(n1, n2, container, isSVG);
        }

        break;

      case Fragment:
        processFragment(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        break;

      default:
        if (shapeFlag & 1
        /* ELEMENT */
        ) {
          processElement(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        } else if (shapeFlag & 6
        /* COMPONENT */
        ) {
          processComponent(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        } else if (shapeFlag & 64
        /* TELEPORT */
        ) {
          type.process(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, internals);
        } else if (shapeFlag & 128
        /* SUSPENSE */
        ) {
          type.process(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, internals);
        } else if (true) {
          warn('Invalid VNode type:', type, "(".concat(_typeof(type), ")"));
        }

    } // set ref


    if (ref != null && parentComponent) {
      setRef(ref, n1 && n1.ref, parentSuspense, n2 || n1, !n2);
    }
  };

  var processText = function processText(n1, n2, container, anchor) {
    if (n1 == null) {
      hostInsert(n2.el = hostCreateText(n2.children), container, anchor);
    } else {
      var el = n2.el = n1.el;

      if (n2.children !== n1.children) {
        hostSetText(el, n2.children);
      }
    }
  };

  var processCommentNode = function processCommentNode(n1, n2, container, anchor) {
    if (n1 == null) {
      hostInsert(n2.el = hostCreateComment(n2.children || ''), container, anchor);
    } else {
      // there's no support for dynamic comments
      n2.el = n1.el;
    }
  };

  var mountStaticNode = function mountStaticNode(n2, container, anchor, isSVG) {
    var _hostInsertStaticCont = hostInsertStaticContent(n2.children, container, anchor, isSVG, n2.el, n2.anchor);

    var _hostInsertStaticCont2 = _slicedToArray(_hostInsertStaticCont, 2);

    n2.el = _hostInsertStaticCont2[0];
    n2.anchor = _hostInsertStaticCont2[1];
  };
  /**
   * Dev / HMR only
   */


  var patchStaticNode = function patchStaticNode(n1, n2, container, isSVG) {
    // static nodes are only patched during dev for HMR
    if (n2.children !== n1.children) {
      var anchor = hostNextSibling(n1.anchor); // remove existing

      removeStaticNode(n1);

      var _hostInsertStaticCont3 = hostInsertStaticContent(n2.children, container, anchor, isSVG);

      var _hostInsertStaticCont4 = _slicedToArray(_hostInsertStaticCont3, 2);

      n2.el = _hostInsertStaticCont4[0];
      n2.anchor = _hostInsertStaticCont4[1];
    } else {
      n2.el = n1.el;
      n2.anchor = n1.anchor;
    }
  };

  var moveStaticNode = function moveStaticNode(_ref16, container, nextSibling) {
    var el = _ref16.el,
        anchor = _ref16.anchor;
    var next;

    while (el && el !== anchor) {
      next = hostNextSibling(el);
      hostInsert(el, container, nextSibling);
      el = next;
    }

    hostInsert(anchor, container, nextSibling);
  };

  var removeStaticNode = function removeStaticNode(_ref17) {
    var el = _ref17.el,
        anchor = _ref17.anchor;
    var next;

    while (el && el !== anchor) {
      next = hostNextSibling(el);
      hostRemove(el);
      el = next;
    }

    hostRemove(anchor);
  };

  var processElement = function processElement(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) {
    isSVG = isSVG || n2.type === 'svg';

    if (n1 == null) {
      mountElement(n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
    } else {
      patchElement(n1, n2, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
    }
  };

  var mountElement = function mountElement(vnode, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) {
    var el;
    var vnodeHook;
    var type = vnode.type,
        props = vnode.props,
        shapeFlag = vnode.shapeFlag,
        transition = vnode.transition,
        patchFlag = vnode.patchFlag,
        dirs = vnode.dirs;

    if (false
    /* HOISTED */
    ) {} else {
      el = vnode.el = hostCreateElement(vnode.type, isSVG, props && props.is, props); // mount children first, since some props may rely on child content
      // being already rendered, e.g. `<select value>`

      if (shapeFlag & 8
      /* TEXT_CHILDREN */
      ) {
        hostSetElementText(el, vnode.children);
      } else if (shapeFlag & 16
      /* ARRAY_CHILDREN */
      ) {
        mountChildren(vnode.children, el, null, parentComponent, parentSuspense, isSVG && type !== 'foreignObject', slotScopeIds, optimized);
      }

      if (dirs) {
        invokeDirectiveHook(vnode, null, parentComponent, 'created');
      } // props


      if (props) {
        for (var key in props) {
          if (key !== 'value' && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isReservedProp)(key)) {
            hostPatchProp(el, key, null, props[key], isSVG, vnode.children, parentComponent, parentSuspense, unmountChildren);
          }
        }
        /**
         * Special case for setting value on DOM elements:
         * - it can be order-sensitive (e.g. should be set *after* min/max, #2325, #4024)
         * - it needs to be forced (#1471)
         * #2353 proposes adding another renderer option to configure this, but
         * the properties affects are so finite it is worth special casing it
         * here to reduce the complexity. (Special casing it also should not
         * affect non-DOM renderers)
         */


        if ('value' in props) {
          hostPatchProp(el, 'value', null, props.value);
        }

        if (vnodeHook = props.onVnodeBeforeMount) {
          invokeVNodeHook(vnodeHook, parentComponent, vnode);
        }
      } // scopeId


      setScopeId(el, vnode, vnode.scopeId, slotScopeIds, parentComponent);
    }

    if (true) {
      Object.defineProperty(el, '__vnode', {
        value: vnode,
        enumerable: false
      });
      Object.defineProperty(el, '__vueParentComponent', {
        value: parentComponent,
        enumerable: false
      });
    }

    if (dirs) {
      invokeDirectiveHook(vnode, null, parentComponent, 'beforeMount');
    } // #1583 For inside suspense + suspense not resolved case, enter hook should call when suspense resolved
    // #1689 For inside suspense + suspense resolved case, just call it


    var needCallTransitionHooks = (!parentSuspense || parentSuspense && !parentSuspense.pendingBranch) && transition && !transition.persisted;

    if (needCallTransitionHooks) {
      transition.beforeEnter(el);
    }

    hostInsert(el, container, anchor);

    if ((vnodeHook = props && props.onVnodeMounted) || needCallTransitionHooks || dirs) {
      queuePostRenderEffect(function () {
        vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
        needCallTransitionHooks && transition.enter(el);
        dirs && invokeDirectiveHook(vnode, null, parentComponent, 'mounted');
      }, parentSuspense);
    }
  };

  var setScopeId = function setScopeId(el, vnode, scopeId, slotScopeIds, parentComponent) {
    if (scopeId) {
      hostSetScopeId(el, scopeId);
    }

    if (slotScopeIds) {
      for (var i = 0; i < slotScopeIds.length; i++) {
        hostSetScopeId(el, slotScopeIds[i]);
      }
    }

    if (parentComponent) {
      var subTree = parentComponent.subTree;

      if ( true && subTree.patchFlag > 0 && subTree.patchFlag & 2048
      /* DEV_ROOT_FRAGMENT */
      ) {
        subTree = filterSingleRoot(subTree.children) || subTree;
      }

      if (vnode === subTree) {
        var parentVNode = parentComponent.vnode;
        setScopeId(el, parentVNode, parentVNode.scopeId, parentVNode.slotScopeIds, parentComponent.parent);
      }
    }
  };

  var mountChildren = function mountChildren(children, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) {
    var start = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : 0;

    for (var i = start; i < children.length; i++) {
      var child = children[i] = optimized ? cloneIfMounted(children[i]) : normalizeVNode(children[i]);
      patch(null, child, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
    }
  };

  var patchElement = function patchElement(n1, n2, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) {
    var el = n2.el = n1.el;
    var patchFlag = n2.patchFlag,
        dynamicChildren = n2.dynamicChildren,
        dirs = n2.dirs; // #1426 take the old vnode's patch flag into account since user may clone a
    // compiler-generated vnode, which de-opts to FULL_PROPS

    patchFlag |= n1.patchFlag & 16
    /* FULL_PROPS */
    ;
    var oldProps = n1.props || _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ;
    var newProps = n2.props || _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ;
    var vnodeHook; // disable recurse in beforeUpdate hooks

    parentComponent && toggleRecurse(parentComponent, false);

    if (vnodeHook = newProps.onVnodeBeforeUpdate) {
      invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
    }

    if (dirs) {
      invokeDirectiveHook(n2, n1, parentComponent, 'beforeUpdate');
    }

    parentComponent && toggleRecurse(parentComponent, true);

    if ( true && isHmrUpdating) {
      // HMR updated, force full diff
      patchFlag = 0;
      optimized = false;
      dynamicChildren = null;
    }

    var areChildrenSVG = isSVG && n2.type !== 'foreignObject';

    if (dynamicChildren) {
      patchBlockChildren(n1.dynamicChildren, dynamicChildren, el, parentComponent, parentSuspense, areChildrenSVG, slotScopeIds);

      if ( true && parentComponent && parentComponent.type.__hmrId) {
        traverseStaticChildren(n1, n2);
      }
    } else if (!optimized) {
      // full diff
      patchChildren(n1, n2, el, null, parentComponent, parentSuspense, areChildrenSVG, slotScopeIds, false);
    }

    if (patchFlag > 0) {
      // the presence of a patchFlag means this element's render code was
      // generated by the compiler and can take the fast path.
      // in this path old node and new node are guaranteed to have the same shape
      // (i.e. at the exact same position in the source template)
      if (patchFlag & 16
      /* FULL_PROPS */
      ) {
        // element props contain dynamic keys, full diff needed
        patchProps(el, n2, oldProps, newProps, parentComponent, parentSuspense, isSVG);
      } else {
        // class
        // this flag is matched when the element has dynamic class bindings.
        if (patchFlag & 2
        /* CLASS */
        ) {
          if (oldProps["class"] !== newProps["class"]) {
            hostPatchProp(el, 'class', null, newProps["class"], isSVG);
          }
        } // style
        // this flag is matched when the element has dynamic style bindings


        if (patchFlag & 4
        /* STYLE */
        ) {
          hostPatchProp(el, 'style', oldProps.style, newProps.style, isSVG);
        } // props
        // This flag is matched when the element has dynamic prop/attr bindings
        // other than class and style. The keys of dynamic prop/attrs are saved for
        // faster iteration.
        // Note dynamic keys like :[foo]="bar" will cause this optimization to
        // bail out and go through a full diff because we need to unset the old key


        if (patchFlag & 8
        /* PROPS */
        ) {
          // if the flag is present then dynamicProps must be non-null
          var propsToUpdate = n2.dynamicProps;

          for (var i = 0; i < propsToUpdate.length; i++) {
            var key = propsToUpdate[i];
            var prev = oldProps[key];
            var next = newProps[key]; // #1471 force patch value

            if (next !== prev || key === 'value') {
              hostPatchProp(el, key, prev, next, isSVG, n1.children, parentComponent, parentSuspense, unmountChildren);
            }
          }
        }
      } // text
      // This flag is matched when the element has only dynamic text children.


      if (patchFlag & 1
      /* TEXT */
      ) {
        if (n1.children !== n2.children) {
          hostSetElementText(el, n2.children);
        }
      }
    } else if (!optimized && dynamicChildren == null) {
      // unoptimized, full diff
      patchProps(el, n2, oldProps, newProps, parentComponent, parentSuspense, isSVG);
    }

    if ((vnodeHook = newProps.onVnodeUpdated) || dirs) {
      queuePostRenderEffect(function () {
        vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
        dirs && invokeDirectiveHook(n2, n1, parentComponent, 'updated');
      }, parentSuspense);
    }
  }; // The fast path for blocks.


  var patchBlockChildren = function patchBlockChildren(oldChildren, newChildren, fallbackContainer, parentComponent, parentSuspense, isSVG, slotScopeIds) {
    for (var i = 0; i < newChildren.length; i++) {
      var oldVNode = oldChildren[i];
      var newVNode = newChildren[i]; // Determine the container (parent element) for the patch.

      var container = // oldVNode may be an errored async setup() component inside Suspense
      // which will not have a mounted element
      oldVNode.el && ( // - In the case of a Fragment, we need to provide the actual parent
      // of the Fragment itself so it can move its children.
      oldVNode.type === Fragment || // - In the case of different nodes, there is going to be a replacement
      // which also requires the correct parent container
      !isSameVNodeType(oldVNode, newVNode) || // - In the case of a component, it could contain anything.
      oldVNode.shapeFlag & (6
      /* COMPONENT */
      | 64
      /* TELEPORT */
      )) ? hostParentNode(oldVNode.el) : // In other cases, the parent container is not actually used so we
      // just pass the block element here to avoid a DOM parentNode call.
      fallbackContainer;
      patch(oldVNode, newVNode, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, true);
    }
  };

  var patchProps = function patchProps(el, vnode, oldProps, newProps, parentComponent, parentSuspense, isSVG) {
    if (oldProps !== newProps) {
      for (var key in newProps) {
        // empty string is not valid prop
        if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isReservedProp)(key)) continue;
        var next = newProps[key];
        var prev = oldProps[key]; // defer patching value

        if (next !== prev && key !== 'value') {
          hostPatchProp(el, key, prev, next, isSVG, vnode.children, parentComponent, parentSuspense, unmountChildren);
        }
      }

      if (oldProps !== _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ) {
        for (var _key14 in oldProps) {
          if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isReservedProp)(_key14) && !(_key14 in newProps)) {
            hostPatchProp(el, _key14, oldProps[_key14], null, isSVG, vnode.children, parentComponent, parentSuspense, unmountChildren);
          }
        }
      }

      if ('value' in newProps) {
        hostPatchProp(el, 'value', oldProps.value, newProps.value);
      }
    }
  };

  var processFragment = function processFragment(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) {
    var fragmentStartAnchor = n2.el = n1 ? n1.el : hostCreateText('');
    var fragmentEndAnchor = n2.anchor = n1 ? n1.anchor : hostCreateText('');
    var patchFlag = n2.patchFlag,
        dynamicChildren = n2.dynamicChildren,
        fragmentSlotScopeIds = n2.slotScopeIds;

    if ( true && ( // #5523 dev root fragment may inherit directives
    isHmrUpdating || patchFlag & 2048
    /* DEV_ROOT_FRAGMENT */
    )) {
      // HMR updated / Dev root fragment (w/ comments), force full diff
      patchFlag = 0;
      optimized = false;
      dynamicChildren = null;
    } // check if this is a slot fragment with :slotted scope ids


    if (fragmentSlotScopeIds) {
      slotScopeIds = slotScopeIds ? slotScopeIds.concat(fragmentSlotScopeIds) : fragmentSlotScopeIds;
    }

    if (n1 == null) {
      hostInsert(fragmentStartAnchor, container, anchor);
      hostInsert(fragmentEndAnchor, container, anchor); // a fragment can only have array children
      // since they are either generated by the compiler, or implicitly created
      // from arrays.

      mountChildren(n2.children, container, fragmentEndAnchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
    } else {
      if (patchFlag > 0 && patchFlag & 64
      /* STABLE_FRAGMENT */
      && dynamicChildren && // #2715 the previous fragment could've been a BAILed one as a result
      // of renderSlot() with no valid children
      n1.dynamicChildren) {
        // a stable fragment (template root or <template v-for>) doesn't need to
        // patch children order, but it may contain dynamicChildren.
        patchBlockChildren(n1.dynamicChildren, dynamicChildren, container, parentComponent, parentSuspense, isSVG, slotScopeIds);

        if ( true && parentComponent && parentComponent.type.__hmrId) {
          traverseStaticChildren(n1, n2);
        } else if ( // #2080 if the stable fragment has a key, it's a <template v-for> that may
        //  get moved around. Make sure all root level vnodes inherit el.
        // #2134 or if it's a component root, it may also get moved around
        // as the component is being moved.
        n2.key != null || parentComponent && n2 === parentComponent.subTree) {
          traverseStaticChildren(n1, n2, true
          /* shallow */
          );
        }
      } else {
        // keyed / unkeyed, or manual fragments.
        // for keyed & unkeyed, since they are compiler generated from v-for,
        // each child is guaranteed to be a block so the fragment will never
        // have dynamicChildren.
        patchChildren(n1, n2, container, fragmentEndAnchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
      }
    }
  };

  var processComponent = function processComponent(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) {
    n2.slotScopeIds = slotScopeIds;

    if (n1 == null) {
      if (n2.shapeFlag & 512
      /* COMPONENT_KEPT_ALIVE */
      ) {
        parentComponent.ctx.activate(n2, container, anchor, isSVG, optimized);
      } else {
        mountComponent(n2, container, anchor, parentComponent, parentSuspense, isSVG, optimized);
      }
    } else {
      updateComponent(n1, n2, optimized);
    }
  };

  var mountComponent = function mountComponent(initialVNode, container, anchor, parentComponent, parentSuspense, isSVG, optimized) {
    var instance = initialVNode.component = createComponentInstance(initialVNode, parentComponent, parentSuspense);

    if ( true && instance.type.__hmrId) {
      registerHMR(instance);
    }

    if (true) {
      pushWarningContext(initialVNode);
      startMeasure(instance, "mount");
    } // inject renderer internals for keepAlive


    if (isKeepAlive(initialVNode)) {
      instance.ctx.renderer = internals;
    } // resolve props and slots for setup context


    {
      if (true) {
        startMeasure(instance, "init");
      }

      setupComponent(instance);

      if (true) {
        endMeasure(instance, "init");
      }
    } // setup() is async. This component relies on async logic to be resolved
    // before proceeding

    if (instance.asyncDep) {
      parentSuspense && parentSuspense.registerDep(instance, setupRenderEffect); // Give it a placeholder if this is not hydration
      // TODO handle self-defined fallback

      if (!initialVNode.el) {
        var placeholder = instance.subTree = createVNode(Comment);
        processCommentNode(null, placeholder, container, anchor);
      }

      return;
    }

    setupRenderEffect(instance, initialVNode, container, anchor, parentSuspense, isSVG, optimized);

    if (true) {
      popWarningContext();
      endMeasure(instance, "mount");
    }
  };

  var updateComponent = function updateComponent(n1, n2, optimized) {
    var instance = n2.component = n1.component;

    if (shouldUpdateComponent(n1, n2, optimized)) {
      if (instance.asyncDep && !instance.asyncResolved) {
        // async & still pending - just update props and slots
        // since the component's reactive effect for render isn't set-up yet
        if (true) {
          pushWarningContext(n2);
        }

        updateComponentPreRender(instance, n2, optimized);

        if (true) {
          popWarningContext();
        }

        return;
      } else {
        // normal update
        instance.next = n2; // in case the child component is also queued, remove it to avoid
        // double updating the same child component in the same flush.

        invalidateJob(instance.update); // instance.update is the reactive effect.

        instance.update();
      }
    } else {
      // no update needed. just copy over properties
      n2.el = n1.el;
      instance.vnode = n2;
    }
  };

  var setupRenderEffect = function setupRenderEffect(instance, initialVNode, container, anchor, parentSuspense, isSVG, optimized) {
    var componentUpdateFn = function componentUpdateFn() {
      if (!instance.isMounted) {
        var vnodeHook;
        var _initialVNode = initialVNode,
            el = _initialVNode.el,
            props = _initialVNode.props;
        var bm = instance.bm,
            m = instance.m,
            parent = instance.parent;
        var isAsyncWrapperVNode = isAsyncWrapper(initialVNode);
        toggleRecurse(instance, false); // beforeMount hook

        if (bm) {
          (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.invokeArrayFns)(bm);
        } // onVnodeBeforeMount


        if (!isAsyncWrapperVNode && (vnodeHook = props && props.onVnodeBeforeMount)) {
          invokeVNodeHook(vnodeHook, parent, initialVNode);
        }

        toggleRecurse(instance, true);

        if (el && hydrateNode) {
          // vnode has adopted host node - perform hydration instead of mount.
          var hydrateSubTree = function hydrateSubTree() {
            if (true) {
              startMeasure(instance, "render");
            }

            instance.subTree = renderComponentRoot(instance);

            if (true) {
              endMeasure(instance, "render");
            }

            if (true) {
              startMeasure(instance, "hydrate");
            }

            hydrateNode(el, instance.subTree, instance, parentSuspense, null);

            if (true) {
              endMeasure(instance, "hydrate");
            }
          };

          if (isAsyncWrapperVNode) {
            initialVNode.type.__asyncLoader().then( // note: we are moving the render call into an async callback,
            // which means it won't track dependencies - but it's ok because
            // a server-rendered async wrapper is already in resolved state
            // and it will never need to change.
            function () {
              return !instance.isUnmounted && hydrateSubTree();
            });
          } else {
            hydrateSubTree();
          }
        } else {
          if (true) {
            startMeasure(instance, "render");
          }

          var subTree = instance.subTree = renderComponentRoot(instance);

          if (true) {
            endMeasure(instance, "render");
          }

          if (true) {
            startMeasure(instance, "patch");
          }

          patch(null, subTree, container, anchor, instance, parentSuspense, isSVG);

          if (true) {
            endMeasure(instance, "patch");
          }

          initialVNode.el = subTree.el;
        } // mounted hook


        if (m) {
          queuePostRenderEffect(m, parentSuspense);
        } // onVnodeMounted


        if (!isAsyncWrapperVNode && (vnodeHook = props && props.onVnodeMounted)) {
          var scopedInitialVNode = initialVNode;
          queuePostRenderEffect(function () {
            return invokeVNodeHook(vnodeHook, parent, scopedInitialVNode);
          }, parentSuspense);
        } // activated hook for keep-alive roots.
        // #1742 activated hook must be accessed after first render
        // since the hook may be injected by a child keep-alive


        if (initialVNode.shapeFlag & 256
        /* COMPONENT_SHOULD_KEEP_ALIVE */
        || parent && isAsyncWrapper(parent.vnode) && parent.vnode.shapeFlag & 256
        /* COMPONENT_SHOULD_KEEP_ALIVE */
        ) {
          instance.a && queuePostRenderEffect(instance.a, parentSuspense);
        }

        instance.isMounted = true;

        if (true) {
          devtoolsComponentAdded(instance);
        } // #2458: deference mount-only object parameters to prevent memleaks


        initialVNode = container = anchor = null;
      } else {
        // updateComponent
        // This is triggered by mutation of component's own state (next: null)
        // OR parent calling processComponent (next: VNode)
        var next = instance.next,
            bu = instance.bu,
            u = instance.u,
            _parent = instance.parent,
            vnode = instance.vnode;
        var originNext = next;

        var _vnodeHook;

        if (true) {
          pushWarningContext(next || instance.vnode);
        } // Disallow component effect recursion during pre-lifecycle hooks.


        toggleRecurse(instance, false);

        if (next) {
          next.el = vnode.el;
          updateComponentPreRender(instance, next, optimized);
        } else {
          next = vnode;
        } // beforeUpdate hook


        if (bu) {
          (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.invokeArrayFns)(bu);
        } // onVnodeBeforeUpdate


        if (_vnodeHook = next.props && next.props.onVnodeBeforeUpdate) {
          invokeVNodeHook(_vnodeHook, _parent, next, vnode);
        }

        toggleRecurse(instance, true); // render

        if (true) {
          startMeasure(instance, "render");
        }

        var nextTree = renderComponentRoot(instance);

        if (true) {
          endMeasure(instance, "render");
        }

        var prevTree = instance.subTree;
        instance.subTree = nextTree;

        if (true) {
          startMeasure(instance, "patch");
        }

        patch(prevTree, nextTree, // parent may have changed if it's in a teleport
        hostParentNode(prevTree.el), // anchor may have changed if it's in a fragment
        getNextHostNode(prevTree), instance, parentSuspense, isSVG);

        if (true) {
          endMeasure(instance, "patch");
        }

        next.el = nextTree.el;

        if (originNext === null) {
          // self-triggered update. In case of HOC, update parent component
          // vnode el. HOC is indicated by parent instance's subTree pointing
          // to child component's vnode
          updateHOCHostEl(instance, nextTree.el);
        } // updated hook


        if (u) {
          queuePostRenderEffect(u, parentSuspense);
        } // onVnodeUpdated


        if (_vnodeHook = next.props && next.props.onVnodeUpdated) {
          queuePostRenderEffect(function () {
            return invokeVNodeHook(_vnodeHook, _parent, next, vnode);
          }, parentSuspense);
        }

        if (true) {
          devtoolsComponentUpdated(instance);
        }

        if (true) {
          popWarningContext();
        }
      }
    }; // create reactive effect for rendering


    var effect = instance.effect = new _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.ReactiveEffect(componentUpdateFn, function () {
      return queueJob(update);
    }, instance.scope // track it in component's effect scope
    );

    var update = instance.update = function () {
      return effect.run();
    };

    update.id = instance.uid; // allowRecurse
    // #1801, #2043 component render effects should allow recursive updates

    toggleRecurse(instance, true);

    if (true) {
      effect.onTrack = instance.rtc ? function (e) {
        return (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.invokeArrayFns)(instance.rtc, e);
      } : void 0;
      effect.onTrigger = instance.rtg ? function (e) {
        return (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.invokeArrayFns)(instance.rtg, e);
      } : void 0;
      update.ownerInstance = instance;
    }

    update();
  };

  var updateComponentPreRender = function updateComponentPreRender(instance, nextVNode, optimized) {
    nextVNode.component = instance;
    var prevProps = instance.vnode.props;
    instance.vnode = nextVNode;
    instance.next = null;
    updateProps(instance, nextVNode.props, prevProps, optimized);
    updateSlots(instance, nextVNode.children, optimized);
    (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.pauseTracking)(); // props update may have triggered pre-flush watchers.
    // flush them before the render update.

    flushPreFlushCbs(undefined, instance.update);
    (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.resetTracking)();
  };

  var patchChildren = function patchChildren(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds) {
    var optimized = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : false;
    var c1 = n1 && n1.children;
    var prevShapeFlag = n1 ? n1.shapeFlag : 0;
    var c2 = n2.children;
    var patchFlag = n2.patchFlag,
        shapeFlag = n2.shapeFlag; // fast path

    if (patchFlag > 0) {
      if (patchFlag & 128
      /* KEYED_FRAGMENT */
      ) {
        // this could be either fully-keyed or mixed (some keyed some not)
        // presence of patchFlag means children are guaranteed to be arrays
        patchKeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        return;
      } else if (patchFlag & 256
      /* UNKEYED_FRAGMENT */
      ) {
        // unkeyed
        patchUnkeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        return;
      }
    } // children has 3 possibilities: text, array or no children.


    if (shapeFlag & 8
    /* TEXT_CHILDREN */
    ) {
      // text children fast path
      if (prevShapeFlag & 16
      /* ARRAY_CHILDREN */
      ) {
        unmountChildren(c1, parentComponent, parentSuspense);
      }

      if (c2 !== c1) {
        hostSetElementText(container, c2);
      }
    } else {
      if (prevShapeFlag & 16
      /* ARRAY_CHILDREN */
      ) {
        // prev children was array
        if (shapeFlag & 16
        /* ARRAY_CHILDREN */
        ) {
          // two arrays, cannot assume anything, do full diff
          patchKeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        } else {
          // no new children, just unmount old
          unmountChildren(c1, parentComponent, parentSuspense, true);
        }
      } else {
        // prev children was text OR null
        // new children is array OR null
        if (prevShapeFlag & 8
        /* TEXT_CHILDREN */
        ) {
          hostSetElementText(container, '');
        } // mount new if array


        if (shapeFlag & 16
        /* ARRAY_CHILDREN */
        ) {
          mountChildren(c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        }
      }
    }
  };

  var patchUnkeyedChildren = function patchUnkeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) {
    c1 = c1 || _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_ARR;
    c2 = c2 || _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_ARR;
    var oldLength = c1.length;
    var newLength = c2.length;
    var commonLength = Math.min(oldLength, newLength);
    var i;

    for (i = 0; i < commonLength; i++) {
      var nextChild = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
      patch(c1[i], nextChild, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
    }

    if (oldLength > newLength) {
      // remove old
      unmountChildren(c1, parentComponent, parentSuspense, true, false, commonLength);
    } else {
      // mount new
      mountChildren(c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, commonLength);
    }
  }; // can be all-keyed or mixed


  var patchKeyedChildren = function patchKeyedChildren(c1, c2, container, parentAnchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) {
    var i = 0;
    var l2 = c2.length;
    var e1 = c1.length - 1; // prev ending index

    var e2 = l2 - 1; // next ending index
    // 1. sync from start
    // (a b) c
    // (a b) d e

    while (i <= e1 && i <= e2) {
      var n1 = c1[i];
      var n2 = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);

      if (isSameVNodeType(n1, n2)) {
        patch(n1, n2, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
      } else {
        break;
      }

      i++;
    } // 2. sync from end
    // a (b c)
    // d e (b c)


    while (i <= e1 && i <= e2) {
      var _n2 = c1[e1];

      var _n3 = c2[e2] = optimized ? cloneIfMounted(c2[e2]) : normalizeVNode(c2[e2]);

      if (isSameVNodeType(_n2, _n3)) {
        patch(_n2, _n3, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
      } else {
        break;
      }

      e1--;
      e2--;
    } // 3. common sequence + mount
    // (a b)
    // (a b) c
    // i = 2, e1 = 1, e2 = 2
    // (a b)
    // c (a b)
    // i = 0, e1 = -1, e2 = 0


    if (i > e1) {
      if (i <= e2) {
        var nextPos = e2 + 1;
        var anchor = nextPos < l2 ? c2[nextPos].el : parentAnchor;

        while (i <= e2) {
          patch(null, c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]), container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
          i++;
        }
      }
    } // 4. common sequence + unmount
    // (a b) c
    // (a b)
    // i = 2, e1 = 2, e2 = 1
    // a (b c)
    // (b c)
    // i = 0, e1 = 0, e2 = -1
    else if (i > e2) {
      while (i <= e1) {
        unmount(c1[i], parentComponent, parentSuspense, true);
        i++;
      }
    } // 5. unknown sequence
    // [i ... e1 + 1]: a b [c d e] f g
    // [i ... e2 + 1]: a b [e d c h] f g
    // i = 2, e1 = 4, e2 = 5
    else {
      var s1 = i; // prev starting index

      var s2 = i; // next starting index
      // 5.1 build key:index map for newChildren

      var keyToNewIndexMap = new Map();

      for (i = s2; i <= e2; i++) {
        var nextChild = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);

        if (nextChild.key != null) {
          if ( true && keyToNewIndexMap.has(nextChild.key)) {
            warn("Duplicate keys found during update:", JSON.stringify(nextChild.key), "Make sure keys are unique.");
          }

          keyToNewIndexMap.set(nextChild.key, i);
        }
      } // 5.2 loop through old children left to be patched and try to patch
      // matching nodes & remove nodes that are no longer present


      var j;
      var patched = 0;
      var toBePatched = e2 - s2 + 1;
      var moved = false; // used to track whether any node has moved

      var maxNewIndexSoFar = 0; // works as Map<newIndex, oldIndex>
      // Note that oldIndex is offset by +1
      // and oldIndex = 0 is a special value indicating the new node has
      // no corresponding old node.
      // used for determining longest stable subsequence

      var newIndexToOldIndexMap = new Array(toBePatched);

      for (i = 0; i < toBePatched; i++) {
        newIndexToOldIndexMap[i] = 0;
      }

      for (i = s1; i <= e1; i++) {
        var prevChild = c1[i];

        if (patched >= toBePatched) {
          // all new children have been patched so this can only be a removal
          unmount(prevChild, parentComponent, parentSuspense, true);
          continue;
        }

        var newIndex = void 0;

        if (prevChild.key != null) {
          newIndex = keyToNewIndexMap.get(prevChild.key);
        } else {
          // key-less node, try to locate a key-less node of the same type
          for (j = s2; j <= e2; j++) {
            if (newIndexToOldIndexMap[j - s2] === 0 && isSameVNodeType(prevChild, c2[j])) {
              newIndex = j;
              break;
            }
          }
        }

        if (newIndex === undefined) {
          unmount(prevChild, parentComponent, parentSuspense, true);
        } else {
          newIndexToOldIndexMap[newIndex - s2] = i + 1;

          if (newIndex >= maxNewIndexSoFar) {
            maxNewIndexSoFar = newIndex;
          } else {
            moved = true;
          }

          patch(prevChild, c2[newIndex], container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
          patched++;
        }
      } // 5.3 move and mount
      // generate longest stable subsequence only when nodes have moved


      var increasingNewIndexSequence = moved ? getSequence(newIndexToOldIndexMap) : _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_ARR;
      j = increasingNewIndexSequence.length - 1; // looping backwards so that we can use last patched node as anchor

      for (i = toBePatched - 1; i >= 0; i--) {
        var nextIndex = s2 + i;
        var _nextChild = c2[nextIndex];

        var _anchor2 = nextIndex + 1 < l2 ? c2[nextIndex + 1].el : parentAnchor;

        if (newIndexToOldIndexMap[i] === 0) {
          // mount new
          patch(null, _nextChild, container, _anchor2, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        } else if (moved) {
          // move if:
          // There is no stable subsequence (e.g. a reverse)
          // OR current node is not among the stable sequence
          if (j < 0 || i !== increasingNewIndexSequence[j]) {
            move(_nextChild, container, _anchor2, 2
            /* REORDER */
            );
          } else {
            j--;
          }
        }
      }
    }
  };

  var move = function move(vnode, container, anchor, moveType) {
    var parentSuspense = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
    var el = vnode.el,
        type = vnode.type,
        transition = vnode.transition,
        children = vnode.children,
        shapeFlag = vnode.shapeFlag;

    if (shapeFlag & 6
    /* COMPONENT */
    ) {
      move(vnode.component.subTree, container, anchor, moveType);
      return;
    }

    if (shapeFlag & 128
    /* SUSPENSE */
    ) {
      vnode.suspense.move(container, anchor, moveType);
      return;
    }

    if (shapeFlag & 64
    /* TELEPORT */
    ) {
      type.move(vnode, container, anchor, internals);
      return;
    }

    if (type === Fragment) {
      hostInsert(el, container, anchor);

      for (var i = 0; i < children.length; i++) {
        move(children[i], container, anchor, moveType);
      }

      hostInsert(vnode.anchor, container, anchor);
      return;
    }

    if (type === Static) {
      moveStaticNode(vnode, container, anchor);
      return;
    } // single nodes


    var needTransition = moveType !== 2
    /* REORDER */
    && shapeFlag & 1
    /* ELEMENT */
    && transition;

    if (needTransition) {
      if (moveType === 0
      /* ENTER */
      ) {
        transition.beforeEnter(el);
        hostInsert(el, container, anchor);
        queuePostRenderEffect(function () {
          return transition.enter(el);
        }, parentSuspense);
      } else {
        var leave = transition.leave,
            delayLeave = transition.delayLeave,
            afterLeave = transition.afterLeave;

        var _remove = function _remove() {
          return hostInsert(el, container, anchor);
        };

        var performLeave = function performLeave() {
          leave(el, function () {
            _remove();

            afterLeave && afterLeave();
          });
        };

        if (delayLeave) {
          delayLeave(el, _remove, performLeave);
        } else {
          performLeave();
        }
      }
    } else {
      hostInsert(el, container, anchor);
    }
  };

  var unmount = function unmount(vnode, parentComponent, parentSuspense) {
    var doRemove = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    var optimized = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
    var type = vnode.type,
        props = vnode.props,
        ref = vnode.ref,
        children = vnode.children,
        dynamicChildren = vnode.dynamicChildren,
        shapeFlag = vnode.shapeFlag,
        patchFlag = vnode.patchFlag,
        dirs = vnode.dirs; // unset ref

    if (ref != null) {
      setRef(ref, null, parentSuspense, vnode, true);
    }

    if (shapeFlag & 256
    /* COMPONENT_SHOULD_KEEP_ALIVE */
    ) {
      parentComponent.ctx.deactivate(vnode);
      return;
    }

    var shouldInvokeDirs = shapeFlag & 1
    /* ELEMENT */
    && dirs;
    var shouldInvokeVnodeHook = !isAsyncWrapper(vnode);
    var vnodeHook;

    if (shouldInvokeVnodeHook && (vnodeHook = props && props.onVnodeBeforeUnmount)) {
      invokeVNodeHook(vnodeHook, parentComponent, vnode);
    }

    if (shapeFlag & 6
    /* COMPONENT */
    ) {
      unmountComponent(vnode.component, parentSuspense, doRemove);
    } else {
      if (shapeFlag & 128
      /* SUSPENSE */
      ) {
        vnode.suspense.unmount(parentSuspense, doRemove);
        return;
      }

      if (shouldInvokeDirs) {
        invokeDirectiveHook(vnode, null, parentComponent, 'beforeUnmount');
      }

      if (shapeFlag & 64
      /* TELEPORT */
      ) {
        vnode.type.remove(vnode, parentComponent, parentSuspense, optimized, internals, doRemove);
      } else if (dynamicChildren && ( // #1153: fast path should not be taken for non-stable (v-for) fragments
      type !== Fragment || patchFlag > 0 && patchFlag & 64
      /* STABLE_FRAGMENT */
      )) {
        // fast path for block nodes: only need to unmount dynamic children.
        unmountChildren(dynamicChildren, parentComponent, parentSuspense, false, true);
      } else if (type === Fragment && patchFlag & (128
      /* KEYED_FRAGMENT */
      | 256
      /* UNKEYED_FRAGMENT */
      ) || !optimized && shapeFlag & 16
      /* ARRAY_CHILDREN */
      ) {
        unmountChildren(children, parentComponent, parentSuspense);
      }

      if (doRemove) {
        remove(vnode);
      }
    }

    if (shouldInvokeVnodeHook && (vnodeHook = props && props.onVnodeUnmounted) || shouldInvokeDirs) {
      queuePostRenderEffect(function () {
        vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
        shouldInvokeDirs && invokeDirectiveHook(vnode, null, parentComponent, 'unmounted');
      }, parentSuspense);
    }
  };

  var remove = function remove(vnode) {
    var type = vnode.type,
        el = vnode.el,
        anchor = vnode.anchor,
        transition = vnode.transition;

    if (type === Fragment) {
      if ( true && vnode.patchFlag > 0 && vnode.patchFlag & 2048
      /* DEV_ROOT_FRAGMENT */
      && transition && !transition.persisted) {
        vnode.children.forEach(function (child) {
          if (child.type === Comment) {
            hostRemove(child.el);
          } else {
            remove(child);
          }
        });
      } else {
        removeFragment(el, anchor);
      }

      return;
    }

    if (type === Static) {
      removeStaticNode(vnode);
      return;
    }

    var performRemove = function performRemove() {
      hostRemove(el);

      if (transition && !transition.persisted && transition.afterLeave) {
        transition.afterLeave();
      }
    };

    if (vnode.shapeFlag & 1
    /* ELEMENT */
    && transition && !transition.persisted) {
      var leave = transition.leave,
          delayLeave = transition.delayLeave;

      var performLeave = function performLeave() {
        return leave(el, performRemove);
      };

      if (delayLeave) {
        delayLeave(vnode.el, performRemove, performLeave);
      } else {
        performLeave();
      }
    } else {
      performRemove();
    }
  };

  var removeFragment = function removeFragment(cur, end) {
    // For fragments, directly remove all contained DOM nodes.
    // (fragment child nodes cannot have transition)
    var next;

    while (cur !== end) {
      next = hostNextSibling(cur);
      hostRemove(cur);
      cur = next;
    }

    hostRemove(end);
  };

  var unmountComponent = function unmountComponent(instance, parentSuspense, doRemove) {
    if ( true && instance.type.__hmrId) {
      unregisterHMR(instance);
    }

    var bum = instance.bum,
        scope = instance.scope,
        update = instance.update,
        subTree = instance.subTree,
        um = instance.um; // beforeUnmount hook

    if (bum) {
      (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.invokeArrayFns)(bum);
    } // stop effects in component scope


    scope.stop(); // update may be null if a component is unmounted before its async
    // setup has resolved.

    if (update) {
      // so that scheduler will no longer invoke it
      update.active = false;
      unmount(subTree, instance, parentSuspense, doRemove);
    } // unmounted hook


    if (um) {
      queuePostRenderEffect(um, parentSuspense);
    }

    queuePostRenderEffect(function () {
      instance.isUnmounted = true;
    }, parentSuspense); // A component with async dep inside a pending suspense is unmounted before
    // its async dep resolves. This should remove the dep from the suspense, and
    // cause the suspense to resolve immediately if that was the last dep.

    if (parentSuspense && parentSuspense.pendingBranch && !parentSuspense.isUnmounted && instance.asyncDep && !instance.asyncResolved && instance.suspenseId === parentSuspense.pendingId) {
      parentSuspense.deps--;

      if (parentSuspense.deps === 0) {
        parentSuspense.resolve();
      }
    }

    if (true) {
      devtoolsComponentRemoved(instance);
    }
  };

  var unmountChildren = function unmountChildren(children, parentComponent, parentSuspense) {
    var doRemove = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    var optimized = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
    var start = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

    for (var i = start; i < children.length; i++) {
      unmount(children[i], parentComponent, parentSuspense, doRemove, optimized);
    }
  };

  var getNextHostNode = function getNextHostNode(vnode) {
    if (vnode.shapeFlag & 6
    /* COMPONENT */
    ) {
      return getNextHostNode(vnode.component.subTree);
    }

    if (vnode.shapeFlag & 128
    /* SUSPENSE */
    ) {
      return vnode.suspense.next();
    }

    return hostNextSibling(vnode.anchor || vnode.el);
  };

  var render = function render(vnode, container, isSVG) {
    if (vnode == null) {
      if (container._vnode) {
        unmount(container._vnode, null, null, true);
      }
    } else {
      patch(container._vnode || null, vnode, container, null, null, null, isSVG);
    }

    flushPostFlushCbs();
    container._vnode = vnode;
  };

  var internals = {
    p: patch,
    um: unmount,
    m: move,
    r: remove,
    mt: mountComponent,
    mc: mountChildren,
    pc: patchChildren,
    pbc: patchBlockChildren,
    n: getNextHostNode,
    o: options
  };
  var hydrate;
  var hydrateNode;

  if (createHydrationFns) {
    var _createHydrationFns = createHydrationFns(internals);

    var _createHydrationFns2 = _slicedToArray(_createHydrationFns, 2);

    hydrate = _createHydrationFns2[0];
    hydrateNode = _createHydrationFns2[1];
  }

  return {
    render: render,
    hydrate: hydrate,
    createApp: createAppAPI(render, hydrate)
  };
}

function toggleRecurse(_ref18, allowed) {
  var effect = _ref18.effect,
      update = _ref18.update;
  effect.allowRecurse = update.allowRecurse = allowed;
}
/**
 * #1156
 * When a component is HMR-enabled, we need to make sure that all static nodes
 * inside a block also inherit the DOM element from the previous tree so that
 * HMR updates (which are full updates) can retrieve the element for patching.
 *
 * #2080
 * Inside keyed `template` fragment static children, if a fragment is moved,
 * the children will always be moved. Therefore, in order to ensure correct move
 * position, el should be inherited from previous nodes.
 */


function traverseStaticChildren(n1, n2) {
  var shallow = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var ch1 = n1.children;
  var ch2 = n2.children;

  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(ch1) && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(ch2)) {
    for (var i = 0; i < ch1.length; i++) {
      // this is only called in the optimized path so array children are
      // guaranteed to be vnodes
      var c1 = ch1[i];
      var c2 = ch2[i];

      if (c2.shapeFlag & 1
      /* ELEMENT */
      && !c2.dynamicChildren) {
        if (c2.patchFlag <= 0 || c2.patchFlag === 32
        /* HYDRATE_EVENTS */
        ) {
          c2 = ch2[i] = cloneIfMounted(ch2[i]);
          c2.el = c1.el;
        }

        if (!shallow) traverseStaticChildren(c1, c2);
      } // also inherit for comment nodes, but not placeholders (e.g. v-if which
      // would have received .el during block patch)


      if ( true && c2.type === Comment && !c2.el) {
        c2.el = c1.el;
      }
    }
  }
} // https://en.wikipedia.org/wiki/Longest_increasing_subsequence


function getSequence(arr) {
  var p = arr.slice();
  var result = [0];
  var i, j, u, v, c;
  var len = arr.length;

  for (i = 0; i < len; i++) {
    var arrI = arr[i];

    if (arrI !== 0) {
      j = result[result.length - 1];

      if (arr[j] < arrI) {
        p[i] = j;
        result.push(i);
        continue;
      }

      u = 0;
      v = result.length - 1;

      while (u < v) {
        c = u + v >> 1;

        if (arr[result[c]] < arrI) {
          u = c + 1;
        } else {
          v = c;
        }
      }

      if (arrI < arr[result[u]]) {
        if (u > 0) {
          p[i] = result[u - 1];
        }

        result[u] = i;
      }
    }
  }

  u = result.length;
  v = result[u - 1];

  while (u-- > 0) {
    result[u] = v;
    v = p[v];
  }

  return result;
}

var isTeleport = function isTeleport(type) {
  return type.__isTeleport;
};

var isTeleportDisabled = function isTeleportDisabled(props) {
  return props && (props.disabled || props.disabled === '');
};

var isTargetSVG = function isTargetSVG(target) {
  return typeof SVGElement !== 'undefined' && target instanceof SVGElement;
};

var resolveTarget = function resolveTarget(props, select) {
  var targetSelector = props && props.to;

  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(targetSelector)) {
    if (!select) {
       true && warn("Current renderer does not support string target for Teleports. " + "(missing querySelector renderer option)");
      return null;
    } else {
      var target = select(targetSelector);

      if (!target) {
         true && warn("Failed to locate Teleport target with selector \"".concat(targetSelector, "\". ") + "Note the target element must exist before the component is mounted - " + "i.e. the target cannot be rendered by the component itself, and " + "ideally should be outside of the entire Vue component tree.");
      }

      return target;
    }
  } else {
    if ( true && !targetSelector && !isTeleportDisabled(props)) {
      warn("Invalid Teleport target: ".concat(targetSelector));
    }

    return targetSelector;
  }
};

var TeleportImpl = {
  __isTeleport: true,
  process: function (_process) {
    function process(_x, _x2, _x3, _x4, _x5, _x6, _x7, _x8, _x9, _x10) {
      return _process.apply(this, arguments);
    }

    process.toString = function () {
      return _process.toString();
    };

    return process;
  }(function (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, internals) {
    var mountChildren = internals.mc,
        patchChildren = internals.pc,
        patchBlockChildren = internals.pbc,
        _internals$o = internals.o,
        insert = _internals$o.insert,
        querySelector = _internals$o.querySelector,
        createText = _internals$o.createText,
        createComment = _internals$o.createComment;
    var disabled = isTeleportDisabled(n2.props);
    var shapeFlag = n2.shapeFlag,
        children = n2.children,
        dynamicChildren = n2.dynamicChildren; // #3302
    // HMR updated, force full diff

    if ( true && isHmrUpdating) {
      optimized = false;
      dynamicChildren = null;
    }

    if (n1 == null) {
      // insert anchors in the main view
      var placeholder = n2.el =  true ? createComment('teleport start') : 0;
      var mainAnchor = n2.anchor =  true ? createComment('teleport end') : 0;
      insert(placeholder, container, anchor);
      insert(mainAnchor, container, anchor);
      var target = n2.target = resolveTarget(n2.props, querySelector);
      var targetAnchor = n2.targetAnchor = createText('');

      if (target) {
        insert(targetAnchor, target); // #2652 we could be teleporting from a non-SVG tree into an SVG tree

        isSVG = isSVG || isTargetSVG(target);
      } else if ( true && !disabled) {
        warn('Invalid Teleport target on mount:', target, "(".concat(_typeof(target), ")"));
      }

      var mount = function mount(container, anchor) {
        // Teleport *always* has Array children. This is enforced in both the
        // compiler and vnode children normalization.
        if (shapeFlag & 16
        /* ARRAY_CHILDREN */
        ) {
          mountChildren(children, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        }
      };

      if (disabled) {
        mount(container, mainAnchor);
      } else if (target) {
        mount(target, targetAnchor);
      }
    } else {
      // update content
      n2.el = n1.el;

      var _mainAnchor = n2.anchor = n1.anchor;

      var _target = n2.target = n1.target;

      var _targetAnchor = n2.targetAnchor = n1.targetAnchor;

      var wasDisabled = isTeleportDisabled(n1.props);
      var currentContainer = wasDisabled ? container : _target;
      var currentAnchor = wasDisabled ? _mainAnchor : _targetAnchor;
      isSVG = isSVG || isTargetSVG(_target);

      if (dynamicChildren) {
        // fast path when the teleport happens to be a block root
        patchBlockChildren(n1.dynamicChildren, dynamicChildren, currentContainer, parentComponent, parentSuspense, isSVG, slotScopeIds); // even in block tree mode we need to make sure all root-level nodes
        // in the teleport inherit previous DOM references so that they can
        // be moved in future patches.

        traverseStaticChildren(n1, n2, true);
      } else if (!optimized) {
        patchChildren(n1, n2, currentContainer, currentAnchor, parentComponent, parentSuspense, isSVG, slotScopeIds, false);
      }

      if (disabled) {
        if (!wasDisabled) {
          // enabled -> disabled
          // move into main container
          moveTeleport(n2, container, _mainAnchor, internals, 1
          /* TOGGLE */
          );
        }
      } else {
        // target changed
        if ((n2.props && n2.props.to) !== (n1.props && n1.props.to)) {
          var nextTarget = n2.target = resolveTarget(n2.props, querySelector);

          if (nextTarget) {
            moveTeleport(n2, nextTarget, null, internals, 0
            /* TARGET_CHANGE */
            );
          } else if (true) {
            warn('Invalid Teleport target on update:', _target, "(".concat(_typeof(_target), ")"));
          }
        } else if (wasDisabled) {
          // disabled -> enabled
          // move into teleport target
          moveTeleport(n2, _target, _targetAnchor, internals, 1
          /* TOGGLE */
          );
        }
      }
    }
  }),
  remove: function remove(vnode, parentComponent, parentSuspense, optimized, _ref19, doRemove) {
    var unmount = _ref19.um,
        hostRemove = _ref19.o.remove;
    var shapeFlag = vnode.shapeFlag,
        children = vnode.children,
        anchor = vnode.anchor,
        targetAnchor = vnode.targetAnchor,
        target = vnode.target,
        props = vnode.props;

    if (target) {
      hostRemove(targetAnchor);
    } // an unmounted teleport should always remove its children if not disabled


    if (doRemove || !isTeleportDisabled(props)) {
      hostRemove(anchor);

      if (shapeFlag & 16
      /* ARRAY_CHILDREN */
      ) {
        for (var i = 0; i < children.length; i++) {
          var child = children[i];
          unmount(child, parentComponent, parentSuspense, true, !!child.dynamicChildren);
        }
      }
    }
  },
  move: moveTeleport,
  hydrate: hydrateTeleport
};

function moveTeleport(vnode, container, parentAnchor, _ref20) {
  var insert = _ref20.o.insert,
      move = _ref20.m;
  var moveType = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 2;

  // move target anchor if this is a target change.
  if (moveType === 0
  /* TARGET_CHANGE */
  ) {
    insert(vnode.targetAnchor, container, parentAnchor);
  }

  var el = vnode.el,
      anchor = vnode.anchor,
      shapeFlag = vnode.shapeFlag,
      children = vnode.children,
      props = vnode.props;
  var isReorder = moveType === 2
  /* REORDER */
  ; // move main view anchor if this is a re-order.

  if (isReorder) {
    insert(el, container, parentAnchor);
  } // if this is a re-order and teleport is enabled (content is in target)
  // do not move children. So the opposite is: only move children if this
  // is not a reorder, or the teleport is disabled


  if (!isReorder || isTeleportDisabled(props)) {
    // Teleport has either Array children or no children.
    if (shapeFlag & 16
    /* ARRAY_CHILDREN */
    ) {
      for (var i = 0; i < children.length; i++) {
        move(children[i], container, parentAnchor, 2
        /* REORDER */
        );
      }
    }
  } // move main view anchor if this is a re-order.


  if (isReorder) {
    insert(anchor, container, parentAnchor);
  }
}

function hydrateTeleport(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized, _ref21, hydrateChildren) {
  var _ref21$o = _ref21.o,
      nextSibling = _ref21$o.nextSibling,
      parentNode = _ref21$o.parentNode,
      querySelector = _ref21$o.querySelector;
  var target = vnode.target = resolveTarget(vnode.props, querySelector);

  if (target) {
    // if multiple teleports rendered to the same target element, we need to
    // pick up from where the last teleport finished instead of the first node
    var targetNode = target._lpa || target.firstChild;

    if (vnode.shapeFlag & 16
    /* ARRAY_CHILDREN */
    ) {
      if (isTeleportDisabled(vnode.props)) {
        vnode.anchor = hydrateChildren(nextSibling(node), vnode, parentNode(node), parentComponent, parentSuspense, slotScopeIds, optimized);
        vnode.targetAnchor = targetNode;
      } else {
        vnode.anchor = nextSibling(node); // lookahead until we find the target anchor
        // we cannot rely on return value of hydrateChildren() because there
        // could be nested teleports

        var targetAnchor = targetNode;

        while (targetAnchor) {
          targetAnchor = nextSibling(targetAnchor);

          if (targetAnchor && targetAnchor.nodeType === 8 && targetAnchor.data === 'teleport anchor') {
            vnode.targetAnchor = targetAnchor;
            target._lpa = vnode.targetAnchor && nextSibling(vnode.targetAnchor);
            break;
          }
        }

        hydrateChildren(targetNode, vnode, target, parentComponent, parentSuspense, slotScopeIds, optimized);
      }
    }
  }

  return vnode.anchor && nextSibling(vnode.anchor);
} // Force-casted public typing for h and TSX props inference


var Teleport = TeleportImpl;
var Fragment = Symbol( true ? 'Fragment' : 0);
var Text = Symbol( true ? 'Text' : 0);
var Comment = Symbol( true ? 'Comment' : 0);
var Static = Symbol( true ? 'Static' : 0); // Since v-if and v-for are the two possible ways node structure can dynamically
// change, once we consider v-if branches and each v-for fragment a block, we
// can divide a template into nested blocks, and within each block the node
// structure would be stable. This allows us to skip most children diffing
// and only worry about the dynamic nodes (indicated by patch flags).

var blockStack = [];
var currentBlock = null;
/**
 * Open a block.
 * This must be called before `createBlock`. It cannot be part of `createBlock`
 * because the children of the block are evaluated before `createBlock` itself
 * is called. The generated code typically looks like this:
 *
 * ```js
 * function render() {
 *   return (openBlock(),createBlock('div', null, [...]))
 * }
 * ```
 * disableTracking is true when creating a v-for fragment block, since a v-for
 * fragment always diffs its children.
 *
 * @private
 */

function openBlock() {
  var disableTracking = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  blockStack.push(currentBlock = disableTracking ? null : []);
}

function closeBlock() {
  blockStack.pop();
  currentBlock = blockStack[blockStack.length - 1] || null;
} // Whether we should be tracking dynamic child nodes inside a block.
// Only tracks when this value is > 0
// We are not using a simple boolean because this value may need to be
// incremented/decremented by nested usage of v-once (see below)


var isBlockTreeEnabled = 1;
/**
 * Block tracking sometimes needs to be disabled, for example during the
 * creation of a tree that needs to be cached by v-once. The compiler generates
 * code like this:
 *
 * ``` js
 * _cache[1] || (
 *   setBlockTracking(-1),
 *   _cache[1] = createVNode(...),
 *   setBlockTracking(1),
 *   _cache[1]
 * )
 * ```
 *
 * @private
 */

function setBlockTracking(value) {
  isBlockTreeEnabled += value;
}

function setupBlock(vnode) {
  // save current block children on the block vnode
  vnode.dynamicChildren = isBlockTreeEnabled > 0 ? currentBlock || _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_ARR : null; // close block

  closeBlock(); // a block is always going to be patched, so track it as a child of its
  // parent block

  if (isBlockTreeEnabled > 0 && currentBlock) {
    currentBlock.push(vnode);
  }

  return vnode;
}
/**
 * @private
 */


function createElementBlock(type, props, children, patchFlag, dynamicProps, shapeFlag) {
  return setupBlock(createBaseVNode(type, props, children, patchFlag, dynamicProps, shapeFlag, true
  /* isBlock */
  ));
}
/**
 * Create a block root vnode. Takes the same exact arguments as `createVNode`.
 * A block root keeps track of dynamic nodes within the block in the
 * `dynamicChildren` array.
 *
 * @private
 */


function createBlock(type, props, children, patchFlag, dynamicProps) {
  return setupBlock(createVNode(type, props, children, patchFlag, dynamicProps, true
  /* isBlock: prevent a block from tracking itself */
  ));
}

function isVNode(value) {
  return value ? value.__v_isVNode === true : false;
}

function isSameVNodeType(n1, n2) {
  if ( true && n2.shapeFlag & 6
  /* COMPONENT */
  && hmrDirtyComponents.has(n2.type)) {
    // HMR only: if the component has been hot-updated, force a reload.
    return false;
  }

  return n1.type === n2.type && n1.key === n2.key;
}

var vnodeArgsTransformer;
/**
 * Internal API for registering an arguments transform for createVNode
 * used for creating stubs in the test-utils
 * It is *internal* but needs to be exposed for test-utils to pick up proper
 * typings
 */

function transformVNodeArgs(transformer) {
  vnodeArgsTransformer = transformer;
}

var createVNodeWithArgsTransform = function createVNodeWithArgsTransform() {
  for (var _len7 = arguments.length, args = new Array(_len7), _key15 = 0; _key15 < _len7; _key15++) {
    args[_key15] = arguments[_key15];
  }

  return _createVNode.apply(void 0, _toConsumableArray(vnodeArgsTransformer ? vnodeArgsTransformer(args, currentRenderingInstance) : args));
};

var InternalObjectKey = "__vInternal";

var normalizeKey = function normalizeKey(_ref22) {
  var key = _ref22.key;
  return key != null ? key : null;
};

var normalizeRef = function normalizeRef(_ref23) {
  var ref = _ref23.ref,
      ref_key = _ref23.ref_key,
      ref_for = _ref23.ref_for;
  return ref != null ? (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(ref) || (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isRef)(ref) || (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(ref) ? {
    i: currentRenderingInstance,
    r: ref,
    k: ref_key,
    f: !!ref_for
  } : ref : null;
};

function createBaseVNode(type) {
  var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var children = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var patchFlag = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  var dynamicProps = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
  var shapeFlag = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : type === Fragment ? 0 : 1;
  var isBlockNode = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : false;
  var needFullChildrenNormalization = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : false;
  var vnode = {
    __v_isVNode: true,
    __v_skip: true,
    type: type,
    props: props,
    key: props && normalizeKey(props),
    ref: props && normalizeRef(props),
    scopeId: currentScopeId,
    slotScopeIds: null,
    children: children,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: shapeFlag,
    patchFlag: patchFlag,
    dynamicProps: dynamicProps,
    dynamicChildren: null,
    appContext: null
  };

  if (needFullChildrenNormalization) {
    normalizeChildren(vnode, children); // normalize suspense children

    if (shapeFlag & 128
    /* SUSPENSE */
    ) {
      type.normalize(vnode);
    }
  } else if (children) {
    // compiled element vnode - if children is passed, only possible types are
    // string or Array.
    vnode.shapeFlag |= (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(children) ? 8
    /* TEXT_CHILDREN */
    : 16
    /* ARRAY_CHILDREN */
    ;
  } // validate key


  if ( true && vnode.key !== vnode.key) {
    warn("VNode created with invalid key (NaN). VNode type:", vnode.type);
  } // track vnode for block tree


  if (isBlockTreeEnabled > 0 && // avoid a block node from tracking itself
  !isBlockNode && // has current parent block
  currentBlock && ( // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  vnode.patchFlag > 0 || shapeFlag & 6
  /* COMPONENT */
  ) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  vnode.patchFlag !== 32
  /* HYDRATE_EVENTS */
  ) {
    currentBlock.push(vnode);
  }

  return vnode;
}

var createVNode =  true ? createVNodeWithArgsTransform : 0;

function _createVNode(type) {
  var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var children = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var patchFlag = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  var dynamicProps = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
  var isBlockNode = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;

  if (!type || type === NULL_DYNAMIC_COMPONENT) {
    if ( true && !type) {
      warn("Invalid vnode type when creating vnode: ".concat(type, "."));
    }

    type = Comment;
  }

  if (isVNode(type)) {
    // createVNode receiving an existing vnode. This happens in cases like
    // <component :is="vnode"/>
    // #2078 make sure to merge refs during the clone instead of overwriting it
    var cloned = cloneVNode(type, props, true
    /* mergeRef: true */
    );

    if (children) {
      normalizeChildren(cloned, children);
    }

    if (isBlockTreeEnabled > 0 && !isBlockNode && currentBlock) {
      if (cloned.shapeFlag & 6
      /* COMPONENT */
      ) {
        currentBlock[currentBlock.indexOf(type)] = cloned;
      } else {
        currentBlock.push(cloned);
      }
    }

    cloned.patchFlag |= -2
    /* BAIL */
    ;
    return cloned;
  } // class component normalization.


  if (isClassComponent(type)) {
    type = type.__vccOpts;
  } // class & style normalization.


  if (props) {
    // for reactive or proxy objects, we need to clone it to enable mutation.
    props = guardReactiveProps(props);
    var _props = props,
        klass = _props["class"],
        style = _props.style;

    if (klass && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(klass)) {
      props["class"] = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.normalizeClass)(klass);
    }

    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(style)) {
      // reactive state objects need to be cloned since they are likely to be
      // mutated
      if ((0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isProxy)(style) && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(style)) {
        style = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)({}, style);
      }

      props.style = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.normalizeStyle)(style);
    }
  } // encode the vnode type information into a bitmap


  var shapeFlag = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(type) ? 1
  /* ELEMENT */
  : isSuspense(type) ? 128
  /* SUSPENSE */
  : isTeleport(type) ? 64
  /* TELEPORT */
  : (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(type) ? 4
  /* STATEFUL_COMPONENT */
  : (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(type) ? 2
  /* FUNCTIONAL_COMPONENT */
  : 0;

  if ( true && shapeFlag & 4
  /* STATEFUL_COMPONENT */
  && (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isProxy)(type)) {
    type = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.toRaw)(type);
    warn("Vue received a Component which was made a reactive object. This can " + "lead to unnecessary performance overhead, and should be avoided by " + "marking the component with `markRaw` or using `shallowRef` " + "instead of `ref`.", "\nComponent that was made reactive: ", type);
  }

  return createBaseVNode(type, props, children, patchFlag, dynamicProps, shapeFlag, isBlockNode, true);
}

function guardReactiveProps(props) {
  if (!props) return null;
  return (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isProxy)(props) || InternalObjectKey in props ? (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)({}, props) : props;
}

function cloneVNode(vnode, extraProps) {
  var mergeRef = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  // This is intentionally NOT using spread or extend to avoid the runtime
  // key enumeration cost.
  var props = vnode.props,
      ref = vnode.ref,
      patchFlag = vnode.patchFlag,
      children = vnode.children;
  var mergedProps = extraProps ? mergeProps(props || {}, extraProps) : props;
  var cloned = {
    __v_isVNode: true,
    __v_skip: true,
    type: vnode.type,
    props: mergedProps,
    key: mergedProps && normalizeKey(mergedProps),
    ref: extraProps && extraProps.ref ? // #2078 in the case of <component :is="vnode" ref="extra"/>
    // if the vnode itself already has a ref, cloneVNode will need to merge
    // the refs so the single vnode can be set on multiple refs
    mergeRef && ref ? (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(ref) ? ref.concat(normalizeRef(extraProps)) : [ref, normalizeRef(extraProps)] : normalizeRef(extraProps) : ref,
    scopeId: vnode.scopeId,
    slotScopeIds: vnode.slotScopeIds,
    children:  true && patchFlag === -1
    /* HOISTED */
    && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(children) ? children.map(deepCloneVNode) : children,
    target: vnode.target,
    targetAnchor: vnode.targetAnchor,
    staticCount: vnode.staticCount,
    shapeFlag: vnode.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: extraProps && vnode.type !== Fragment ? patchFlag === -1 // hoisted node
    ? 16
    /* FULL_PROPS */
    : patchFlag | 16
    /* FULL_PROPS */
    : patchFlag,
    dynamicProps: vnode.dynamicProps,
    dynamicChildren: vnode.dynamicChildren,
    appContext: vnode.appContext,
    dirs: vnode.dirs,
    transition: vnode.transition,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: vnode.component,
    suspense: vnode.suspense,
    ssContent: vnode.ssContent && cloneVNode(vnode.ssContent),
    ssFallback: vnode.ssFallback && cloneVNode(vnode.ssFallback),
    el: vnode.el,
    anchor: vnode.anchor
  };
  return cloned;
}
/**
 * Dev only, for HMR of hoisted vnodes reused in v-for
 * https://github.com/vitejs/vite/issues/2022
 */


function deepCloneVNode(vnode) {
  var cloned = cloneVNode(vnode);

  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(vnode.children)) {
    cloned.children = vnode.children.map(deepCloneVNode);
  }

  return cloned;
}
/**
 * @private
 */


function createTextVNode() {
  var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ' ';
  var flag = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return createVNode(Text, null, text, flag);
}
/**
 * @private
 */


function createStaticVNode(content, numberOfNodes) {
  // A static vnode can contain multiple stringified elements, and the number
  // of elements is necessary for hydration.
  var vnode = createVNode(Static, null, content);
  vnode.staticCount = numberOfNodes;
  return vnode;
}
/**
 * @private
 */


function createCommentVNode() {
  var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var asBlock = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return asBlock ? (openBlock(), createBlock(Comment, null, text)) : createVNode(Comment, null, text);
}

function normalizeVNode(child) {
  if (child == null || typeof child === 'boolean') {
    // empty placeholder
    return createVNode(Comment);
  } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(child)) {
    // fragment
    return createVNode(Fragment, null, // #3666, avoid reference pollution when reusing vnode
    child.slice());
  } else if (_typeof(child) === 'object') {
    // already vnode, this should be the most common since compiled templates
    // always produce all-vnode children arrays
    return cloneIfMounted(child);
  } else {
    // strings and numbers
    return createVNode(Text, null, String(child));
  }
} // optimized normalization for template-compiled render fns


function cloneIfMounted(child) {
  return child.el === null || child.memo ? child : cloneVNode(child);
}

function normalizeChildren(vnode, children) {
  var type = 0;
  var shapeFlag = vnode.shapeFlag;

  if (children == null) {
    children = null;
  } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(children)) {
    type = 16
    /* ARRAY_CHILDREN */
    ;
  } else if (_typeof(children) === 'object') {
    if (shapeFlag & (1
    /* ELEMENT */
    | 64
    /* TELEPORT */
    )) {
      // Normalize slot to plain children for plain element and Teleport
      var slot = children["default"];

      if (slot) {
        // _c marker is added by withCtx() indicating this is a compiled slot
        slot._c && (slot._d = false);
        normalizeChildren(vnode, slot());
        slot._c && (slot._d = true);
      }

      return;
    } else {
      type = 32
      /* SLOTS_CHILDREN */
      ;
      var slotFlag = children._;

      if (!slotFlag && !(InternalObjectKey in children)) {
        children._ctx = currentRenderingInstance;
      } else if (slotFlag === 3
      /* FORWARDED */
      && currentRenderingInstance) {
        // a child component receives forwarded slots from the parent.
        // its slot type is determined by its parent's slot type.
        if (currentRenderingInstance.slots._ === 1
        /* STABLE */
        ) {
          children._ = 1
          /* STABLE */
          ;
        } else {
          children._ = 2
          /* DYNAMIC */
          ;
          vnode.patchFlag |= 1024
          /* DYNAMIC_SLOTS */
          ;
        }
      }
    }
  } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(children)) {
    children = {
      "default": children,
      _ctx: currentRenderingInstance
    };
    type = 32
    /* SLOTS_CHILDREN */
    ;
  } else {
    children = String(children); // force teleport children to array so it can be moved around

    if (shapeFlag & 64
    /* TELEPORT */
    ) {
      type = 16
      /* ARRAY_CHILDREN */
      ;
      children = [createTextVNode(children)];
    } else {
      type = 8
      /* TEXT_CHILDREN */
      ;
    }
  }

  vnode.children = children;
  vnode.shapeFlag |= type;
}

function mergeProps() {
  var ret = {};

  for (var i = 0; i < arguments.length; i++) {
    var toMerge = i < 0 || arguments.length <= i ? undefined : arguments[i];

    for (var key in toMerge) {
      if (key === 'class') {
        if (ret["class"] !== toMerge["class"]) {
          ret["class"] = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.normalizeClass)([ret["class"], toMerge["class"]]);
        }
      } else if (key === 'style') {
        ret.style = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.normalizeStyle)([ret.style, toMerge.style]);
      } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isOn)(key)) {
        var existing = ret[key];
        var incoming = toMerge[key];

        if (incoming && existing !== incoming && !((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(existing) && existing.includes(incoming))) {
          ret[key] = existing ? [].concat(existing, incoming) : incoming;
        }
      } else if (key !== '') {
        ret[key] = toMerge[key];
      }
    }
  }

  return ret;
}

function invokeVNodeHook(hook, instance, vnode) {
  var prevVNode = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  callWithAsyncErrorHandling(hook, instance, 7
  /* VNODE_HOOK */
  , [vnode, prevVNode]);
}

var emptyAppContext = createAppContext();
var uid$1 = 0;

function createComponentInstance(vnode, parent, suspense) {
  var type = vnode.type; // inherit parent app context - or - if root, adopt from root vnode

  var appContext = (parent ? parent.appContext : vnode.appContext) || emptyAppContext;
  var instance = {
    uid: uid$1++,
    vnode: vnode,
    type: type,
    parent: parent,
    appContext: appContext,
    root: null,
    next: null,
    subTree: null,
    effect: null,
    update: null,
    scope: new _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.EffectScope(true
    /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: parent ? parent.provides : Object.create(appContext.provides),
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: normalizePropsOptions(type, appContext),
    emitsOptions: normalizeEmitsOptions(type, appContext),
    // emit
    emit: null,
    emitted: null,
    // props default value
    propsDefaults: _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ,
    // inheritAttrs
    inheritAttrs: type.inheritAttrs,
    // state
    ctx: _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ,
    data: _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ,
    props: _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ,
    attrs: _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ,
    slots: _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ,
    refs: _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ,
    setupState: _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ,
    setupContext: null,
    // suspense related
    suspense: suspense,
    suspenseId: suspense ? suspense.pendingId : 0,
    asyncDep: null,
    asyncResolved: false,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: false,
    isUnmounted: false,
    isDeactivated: false,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };

  if (true) {
    instance.ctx = createDevRenderContext(instance);
  } else {}

  instance.root = parent ? parent.root : instance;
  instance.emit = emit$1.bind(null, instance); // apply custom element special handling

  if (vnode.ce) {
    vnode.ce(instance);
  }

  return instance;
}

var currentInstance = null;

var getCurrentInstance = function getCurrentInstance() {
  return currentInstance || currentRenderingInstance;
};

var setCurrentInstance = function setCurrentInstance(instance) {
  currentInstance = instance;
  instance.scope.on();
};

var unsetCurrentInstance = function unsetCurrentInstance() {
  currentInstance && currentInstance.scope.off();
  currentInstance = null;
};

var isBuiltInTag = /*#__PURE__*/(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.makeMap)('slot,component');

function validateComponentName(name, config) {
  var appIsNativeTag = config.isNativeTag || _vue_shared__WEBPACK_IMPORTED_MODULE_1__.NO;

  if (isBuiltInTag(name) || appIsNativeTag(name)) {
    warn('Do not use built-in or reserved HTML elements as component id: ' + name);
  }
}

function isStatefulComponent(instance) {
  return instance.vnode.shapeFlag & 4
  /* STATEFUL_COMPONENT */
  ;
}

var isInSSRComponentSetup = false;

function setupComponent(instance) {
  var isSSR = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  isInSSRComponentSetup = isSSR;
  var _instance$vnode = instance.vnode,
      props = _instance$vnode.props,
      children = _instance$vnode.children;
  var isStateful = isStatefulComponent(instance);
  initProps(instance, props, isStateful, isSSR);
  initSlots(instance, children);
  var setupResult = isStateful ? setupStatefulComponent(instance, isSSR) : undefined;
  isInSSRComponentSetup = false;
  return setupResult;
}

function setupStatefulComponent(instance, isSSR) {
  var _a;

  var Component = instance.type;

  if (true) {
    if (Component.name) {
      validateComponentName(Component.name, instance.appContext.config);
    }

    if (Component.components) {
      var names = Object.keys(Component.components);

      for (var i = 0; i < names.length; i++) {
        validateComponentName(names[i], instance.appContext.config);
      }
    }

    if (Component.directives) {
      var _names = Object.keys(Component.directives);

      for (var _i5 = 0; _i5 < _names.length; _i5++) {
        validateDirectiveName(_names[_i5]);
      }
    }

    if (Component.compilerOptions && isRuntimeOnly()) {
      warn("\"compilerOptions\" is only supported when using a build of Vue that " + "includes the runtime compiler. Since you are using a runtime-only " + "build, the options should be passed via your build tool config instead.");
    }
  } // 0. create render proxy property access cache


  instance.accessCache = Object.create(null); // 1. create public instance / render proxy
  // also mark it raw so it's never observed

  instance.proxy = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.markRaw)(new Proxy(instance.ctx, PublicInstanceProxyHandlers));

  if (true) {
    exposePropsOnRenderContext(instance);
  } // 2. call setup()


  var setup = Component.setup;

  if (setup) {
    var setupContext = instance.setupContext = setup.length > 1 ? createSetupContext(instance) : null;
    setCurrentInstance(instance);
    (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.pauseTracking)();
    var setupResult = callWithErrorHandling(setup, instance, 0
    /* SETUP_FUNCTION */
    , [ true ? (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.shallowReadonly)(instance.props) : 0, setupContext]);
    (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.resetTracking)();
    unsetCurrentInstance();

    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isPromise)(setupResult)) {
      setupResult.then(unsetCurrentInstance, unsetCurrentInstance);

      if (isSSR) {
        // return the promise so server-renderer can wait on it
        return setupResult.then(function (resolvedResult) {
          handleSetupResult(instance, resolvedResult, isSSR);
        })["catch"](function (e) {
          handleError(e, instance, 0
          /* SETUP_FUNCTION */
          );
        });
      } else {
        // async setup returned Promise.
        // bail here and wait for re-entry.
        instance.asyncDep = setupResult;

        if ( true && !instance.suspense) {
          var name = (_a = Component.name) !== null && _a !== void 0 ? _a : 'Anonymous';
          warn("Component <".concat(name, ">: setup function returned a promise, but no ") + "<Suspense> boundary was found in the parent component tree. " + "A component with async setup() must be nested in a <Suspense> " + "in order to be rendered.");
        }
      }
    } else {
      handleSetupResult(instance, setupResult, isSSR);
    }
  } else {
    finishComponentSetup(instance, isSSR);
  }
}

function handleSetupResult(instance, setupResult, isSSR) {
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(setupResult)) {
    // setup returned an inline render function
    if (instance.type.__ssrInlineRender) {
      // when the function's name is `ssrRender` (compiled by SFC inline mode),
      // set it as ssrRender instead.
      instance.ssrRender = setupResult;
    } else {
      instance.render = setupResult;
    }
  } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(setupResult)) {
    if ( true && isVNode(setupResult)) {
      warn("setup() should not return VNodes directly - " + "return a render function instead.");
    } // setup returned bindings.
    // assuming a render function compiled from template is present.


    if (true) {
      instance.devtoolsRawSetupState = setupResult;
    }

    instance.setupState = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.proxyRefs)(setupResult);

    if (true) {
      exposeSetupStateOnRenderContext(instance);
    }
  } else if ( true && setupResult !== undefined) {
    warn("setup() should return an object. Received: ".concat(setupResult === null ? 'null' : _typeof(setupResult)));
  }

  finishComponentSetup(instance, isSSR);
}

var compile;
var installWithProxy;
/**
 * For runtime-dom to register the compiler.
 * Note the exported method uses any to avoid d.ts relying on the compiler types.
 */

function registerRuntimeCompiler(_compile) {
  compile = _compile;

  installWithProxy = function installWithProxy(i) {
    if (i.render._rc) {
      i.withProxy = new Proxy(i.ctx, RuntimeCompiledPublicInstanceProxyHandlers);
    }
  };
} // dev only


var isRuntimeOnly = function isRuntimeOnly() {
  return !compile;
};

function finishComponentSetup(instance, isSSR, skipOptions) {
  var Component = instance.type; // template / render function normalization
  // could be already set when returned from setup()

  if (!instance.render) {
    // only do on-the-fly compile if not in SSR - SSR on-the-fly compilation
    // is done by server-renderer
    if (!isSSR && compile && !Component.render) {
      var template = Component.template;

      if (template) {
        if (true) {
          startMeasure(instance, "compile");
        }

        var _instance$appContext$ = instance.appContext.config,
            isCustomElement = _instance$appContext$.isCustomElement,
            compilerOptions = _instance$appContext$.compilerOptions;
        var delimiters = Component.delimiters,
            componentCompilerOptions = Component.compilerOptions;
        var finalCompilerOptions = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)({
          isCustomElement: isCustomElement,
          delimiters: delimiters
        }, compilerOptions), componentCompilerOptions);
        Component.render = compile(template, finalCompilerOptions);

        if (true) {
          endMeasure(instance, "compile");
        }
      }
    }

    instance.render = Component.render || _vue_shared__WEBPACK_IMPORTED_MODULE_1__.NOOP; // for runtime-compiled render functions using `with` blocks, the render
    // proxy used needs a different `has` handler which is more performant and
    // also only allows a whitelist of globals to fallthrough.

    if (installWithProxy) {
      installWithProxy(instance);
    }
  } // support for 2.x options


  if (__VUE_OPTIONS_API__ && !false) {
    setCurrentInstance(instance);
    (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.pauseTracking)();
    applyOptions(instance);
    (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.resetTracking)();
    unsetCurrentInstance();
  } // warn missing template/render
  // the runtime compilation of template in SSR is done by server-render


  if ( true && !Component.render && instance.render === _vue_shared__WEBPACK_IMPORTED_MODULE_1__.NOOP && !isSSR) {
    /* istanbul ignore if */
    if (!compile && Component.template) {
      warn("Component provided template option but " + "runtime compilation is not supported in this build of Vue." + " Configure your bundler to alias \"vue\" to \"vue/dist/vue.esm-bundler.js\"."
      /* should not happen */
      );
    } else {
      warn("Component is missing template or render function.");
    }
  }
}

function createAttrsProxy(instance) {
  return new Proxy(instance.attrs,  true ? {
    get: function get(target, key) {
      markAttrsAccessed();
      (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.track)(instance, "get"
      /* GET */
      , '$attrs');
      return target[key];
    },
    set: function set() {
      warn("setupContext.attrs is readonly.");
      return false;
    },
    deleteProperty: function deleteProperty() {
      warn("setupContext.attrs is readonly.");
      return false;
    }
  } : 0);
}

function createSetupContext(instance) {
  var expose = function expose(exposed) {
    if ( true && instance.exposed) {
      warn("expose() should be called only once per setup().");
    }

    instance.exposed = exposed || {};
  };

  var attrs;

  if (true) {
    // We use getters in dev in case libs like test-utils overwrite instance
    // properties (overwrites should not be done in prod)
    return Object.freeze({
      get attrs() {
        return attrs || (attrs = createAttrsProxy(instance));
      },

      get slots() {
        return (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.shallowReadonly)(instance.slots);
      },

      get emit() {
        return function (event) {
          for (var _len8 = arguments.length, args = new Array(_len8 > 1 ? _len8 - 1 : 0), _key16 = 1; _key16 < _len8; _key16++) {
            args[_key16 - 1] = arguments[_key16];
          }

          return instance.emit.apply(instance, [event].concat(args));
        };
      },

      expose: expose
    });
  } else {}
}

function getExposeProxy(instance) {
  if (instance.exposed) {
    return instance.exposeProxy || (instance.exposeProxy = new Proxy((0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.proxyRefs)((0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.markRaw)(instance.exposed)), {
      get: function get(target, key) {
        if (key in target) {
          return target[key];
        } else if (key in publicPropertiesMap) {
          return publicPropertiesMap[key](instance);
        }
      }
    }));
  }
}

var classifyRE = /(?:^|[-_])(\w)/g;

var classify = function classify(str) {
  return str.replace(classifyRE, function (c) {
    return c.toUpperCase();
  }).replace(/[-_]/g, '');
};

function getComponentName(Component) {
  var includeInferred = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  return (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(Component) ? Component.displayName || Component.name : Component.name || includeInferred && Component.__name;
}
/* istanbul ignore next */


function formatComponentName(instance, Component) {
  var isRoot = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var name = getComponentName(Component);

  if (!name && Component.__file) {
    var match = Component.__file.match(/([^/\\]+)\.\w+$/);

    if (match) {
      name = match[1];
    }
  }

  if (!name && instance && instance.parent) {
    // try to infer the name based on reverse resolution
    var inferFromRegistry = function inferFromRegistry(registry) {
      for (var key in registry) {
        if (registry[key] === Component) {
          return key;
        }
      }
    };

    name = inferFromRegistry(instance.components || instance.parent.type.components) || inferFromRegistry(instance.appContext.components);
  }

  return name ? classify(name) : isRoot ? "App" : "Anonymous";
}

function isClassComponent(value) {
  return (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(value) && '__vccOpts' in value;
}

var computed = function computed(getterOrOptions, debugOptions) {
  // @ts-ignore
  return (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.computed)(getterOrOptions, debugOptions, isInSSRComponentSetup);
}; // dev only


var warnRuntimeUsage = function warnRuntimeUsage(method) {
  return warn("".concat(method, "() is a compiler-hint helper that is only usable inside ") + "<script setup> of a single file component. Its arguments should be " + "compiled away and passing it at runtime has no effect.");
}; // implementation


function defineProps() {
  if (true) {
    warnRuntimeUsage("defineProps");
  }

  return null;
} // implementation


function defineEmits() {
  if (true) {
    warnRuntimeUsage("defineEmits");
  }

  return null;
}
/**
 * Vue `<script setup>` compiler macro for declaring a component's exposed
 * instance properties when it is accessed by a parent component via template
 * refs.
 *
 * `<script setup>` components are closed by default - i.e. variables inside
 * the `<script setup>` scope is not exposed to parent unless explicitly exposed
 * via `defineExpose`.
 *
 * This is only usable inside `<script setup>`, is compiled away in the
 * output and should **not** be actually called at runtime.
 */


function defineExpose(exposed) {
  if (true) {
    warnRuntimeUsage("defineExpose");
  }
}
/**
 * Vue `<script setup>` compiler macro for providing props default values when
 * using type-based `defineProps` declaration.
 *
 * Example usage:
 * ```ts
 * withDefaults(defineProps<{
 *   size?: number
 *   labels?: string[]
 * }>(), {
 *   size: 3,
 *   labels: () => ['default label']
 * })
 * ```
 *
 * This is only usable inside `<script setup>`, is compiled away in the output
 * and should **not** be actually called at runtime.
 */


function withDefaults(props, defaults) {
  if (true) {
    warnRuntimeUsage("withDefaults");
  }

  return null;
}

function useSlots() {
  return getContext().slots;
}

function useAttrs() {
  return getContext().attrs;
}

function getContext() {
  var i = getCurrentInstance();

  if ( true && !i) {
    warn("useContext() called without active instance.");
  }

  return i.setupContext || (i.setupContext = createSetupContext(i));
}
/**
 * Runtime helper for merging default declarations. Imported by compiled code
 * only.
 * @internal
 */


function mergeDefaults(raw, defaults) {
  var props = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(raw) ? raw.reduce(function (normalized, p) {
    return normalized[p] = {}, normalized;
  }, {}) : raw;

  for (var key in defaults) {
    var opt = props[key];

    if (opt) {
      if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(opt) || (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(opt)) {
        props[key] = {
          type: opt,
          "default": defaults[key]
        };
      } else {
        opt["default"] = defaults[key];
      }
    } else if (opt === null) {
      props[key] = {
        "default": defaults[key]
      };
    } else if (true) {
      warn("props default key \"".concat(key, "\" has no corresponding declaration."));
    }
  }

  return props;
}
/**
 * Used to create a proxy for the rest element when destructuring props with
 * defineProps().
 * @internal
 */


function createPropsRestProxy(props, excludedKeys) {
  var ret = {};

  var _loop4 = function _loop4(key) {
    if (!excludedKeys.includes(key)) {
      Object.defineProperty(ret, key, {
        enumerable: true,
        get: function get() {
          return props[key];
        }
      });
    }
  };

  for (var key in props) {
    _loop4(key);
  }

  return ret;
}
/**
 * `<script setup>` helper for persisting the current instance context over
 * async/await flows.
 *
 * `@vue/compiler-sfc` converts the following:
 *
 * ```ts
 * const x = await foo()
 * ```
 *
 * into:
 *
 * ```ts
 * let __temp, __restore
 * const x = (([__temp, __restore] = withAsyncContext(() => foo())),__temp=await __temp,__restore(),__temp)
 * ```
 * @internal
 */


function withAsyncContext(getAwaitable) {
  var ctx = getCurrentInstance();

  if ( true && !ctx) {
    warn("withAsyncContext called without active current instance. " + "This is likely a bug.");
  }

  var awaitable = getAwaitable();
  unsetCurrentInstance();

  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isPromise)(awaitable)) {
    awaitable = awaitable["catch"](function (e) {
      setCurrentInstance(ctx);
      throw e;
    });
  }

  return [awaitable, function () {
    return setCurrentInstance(ctx);
  }];
} // Actual implementation


function h(type, propsOrChildren, children) {
  var l = arguments.length;

  if (l === 2) {
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(propsOrChildren) && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(propsOrChildren)) {
      // single vnode without props
      if (isVNode(propsOrChildren)) {
        return createVNode(type, null, [propsOrChildren]);
      } // props without children


      return createVNode(type, propsOrChildren);
    } else {
      // omit props
      return createVNode(type, null, propsOrChildren);
    }
  } else {
    if (l > 3) {
      children = Array.prototype.slice.call(arguments, 2);
    } else if (l === 3 && isVNode(children)) {
      children = [children];
    }

    return createVNode(type, propsOrChildren, children);
  }
}

var ssrContextKey = Symbol( true ? "ssrContext" : 0);

var useSSRContext = function useSSRContext() {
  {
    var ctx = inject(ssrContextKey);

    if (!ctx) {
      warn("Server rendering context not provided. Make sure to only call " + "useSSRContext() conditionally in the server build.");
    }

    return ctx;
  }
};

function isShallow(value) {
  return !!(value && value["__v_isShallow"
  /* IS_SHALLOW */
  ]);
}

function initCustomFormatter() {
  /* eslint-disable no-restricted-globals */
  if ( false || typeof window === 'undefined') {
    return;
  }

  var vueStyle = {
    style: 'color:#3ba776'
  };
  var numberStyle = {
    style: 'color:#0b1bc9'
  };
  var stringStyle = {
    style: 'color:#b62e24'
  };
  var keywordStyle = {
    style: 'color:#9d288c'
  }; // custom formatter for Chrome
  // https://www.mattzeunert.com/2016/02/19/custom-chrome-devtools-object-formatters.html

  var formatter = {
    header: function header(obj) {
      // TODO also format ComponentPublicInstance & ctx.slots/attrs in setup
      if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(obj)) {
        return null;
      }

      if (obj.__isVue) {
        return ['div', vueStyle, "VueInstance"];
      } else if ((0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isRef)(obj)) {
        return ['div', {}, ['span', vueStyle, genRefFlag(obj)], '<', formatValue(obj.value), ">"];
      } else if ((0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isReactive)(obj)) {
        return ['div', {}, ['span', vueStyle, isShallow(obj) ? 'ShallowReactive' : 'Reactive'], '<', formatValue(obj), ">".concat((0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isReadonly)(obj) ? " (readonly)" : "")];
      } else if ((0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isReadonly)(obj)) {
        return ['div', {}, ['span', vueStyle, isShallow(obj) ? 'ShallowReadonly' : 'Readonly'], '<', formatValue(obj), '>'];
      }

      return null;
    },
    hasBody: function hasBody(obj) {
      return obj && obj.__isVue;
    },
    body: function body(obj) {
      if (obj && obj.__isVue) {
        return ['div', {}].concat(_toConsumableArray(formatInstance(obj.$)));
      }
    }
  };

  function formatInstance(instance) {
    var blocks = [];

    if (instance.type.props && instance.props) {
      blocks.push(createInstanceBlock('props', (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.toRaw)(instance.props)));
    }

    if (instance.setupState !== _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ) {
      blocks.push(createInstanceBlock('setup', instance.setupState));
    }

    if (instance.data !== _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ) {
      blocks.push(createInstanceBlock('data', (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.toRaw)(instance.data)));
    }

    var computed = extractKeys(instance, 'computed');

    if (computed) {
      blocks.push(createInstanceBlock('computed', computed));
    }

    var injected = extractKeys(instance, 'inject');

    if (injected) {
      blocks.push(createInstanceBlock('injected', injected));
    }

    blocks.push(['div', {}, ['span', {
      style: keywordStyle.style + ';opacity:0.66'
    }, '$ (internal): '], ['object', {
      object: instance
    }]]);
    return blocks;
  }

  function createInstanceBlock(type, target) {
    target = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)({}, target);

    if (!Object.keys(target).length) {
      return ['span', {}];
    }

    return ['div', {
      style: 'line-height:1.25em;margin-bottom:0.6em'
    }, ['div', {
      style: 'color:#476582'
    }, type], ['div', {
      style: 'padding-left:1.25em'
    }].concat(_toConsumableArray(Object.keys(target).map(function (key) {
      return ['div', {}, ['span', keywordStyle, key + ': '], formatValue(target[key], false)];
    })))];
  }

  function formatValue(v) {
    var asRaw = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    if (typeof v === 'number') {
      return ['span', numberStyle, v];
    } else if (typeof v === 'string') {
      return ['span', stringStyle, JSON.stringify(v)];
    } else if (typeof v === 'boolean') {
      return ['span', keywordStyle, v];
    } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(v)) {
      return ['object', {
        object: asRaw ? (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.toRaw)(v) : v
      }];
    } else {
      return ['span', stringStyle, String(v)];
    }
  }

  function extractKeys(instance, type) {
    var Comp = instance.type;

    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(Comp)) {
      return;
    }

    var extracted = {};

    for (var key in instance.ctx) {
      if (isKeyOfType(Comp, key, type)) {
        extracted[key] = instance.ctx[key];
      }
    }

    return extracted;
  }

  function isKeyOfType(Comp, key, type) {
    var opts = Comp[type];

    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(opts) && opts.includes(key) || (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(opts) && key in opts) {
      return true;
    }

    if (Comp["extends"] && isKeyOfType(Comp["extends"], key, type)) {
      return true;
    }

    if (Comp.mixins && Comp.mixins.some(function (m) {
      return isKeyOfType(m, key, type);
    })) {
      return true;
    }
  }

  function genRefFlag(v) {
    if (isShallow(v)) {
      return "ShallowRef";
    }

    if (v.effect) {
      return "ComputedRef";
    }

    return "Ref";
  }

  if (window.devtoolsFormatters) {
    window.devtoolsFormatters.push(formatter);
  } else {
    window.devtoolsFormatters = [formatter];
  }
}

function withMemo(memo, render, cache, index) {
  var cached = cache[index];

  if (cached && isMemoSame(cached, memo)) {
    return cached;
  }

  var ret = render(); // shallow clone

  ret.memo = memo.slice();
  return cache[index] = ret;
}

function isMemoSame(cached, memo) {
  var prev = cached.memo;

  if (prev.length != memo.length) {
    return false;
  }

  for (var i = 0; i < prev.length; i++) {
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasChanged)(prev[i], memo[i])) {
      return false;
    }
  } // make sure to let parent block track it when returning cached


  if (isBlockTreeEnabled > 0 && currentBlock) {
    currentBlock.push(cached);
  }

  return true;
} // Core API ------------------------------------------------------------------


var version = "3.2.37";
var _ssrUtils = {
  createComponentInstance: createComponentInstance,
  setupComponent: setupComponent,
  renderComponentRoot: renderComponentRoot,
  setCurrentRenderingInstance: setCurrentRenderingInstance,
  isVNode: isVNode,
  normalizeVNode: normalizeVNode
};
/**
 * SSR utils for \@vue/server-renderer. Only exposed in ssr-possible builds.
 * @internal
 */

var ssrUtils = _ssrUtils;
/**
 * @internal only exposed in compat builds
 */

var resolveFilter = null;
/**
 * @internal only exposed in compat builds.
 */

var compatUtils = null;


/***/ }),

/***/ "./node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseTransition": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.BaseTransition),
/* harmony export */   "Comment": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.Comment),
/* harmony export */   "EffectScope": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.EffectScope),
/* harmony export */   "Fragment": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.Fragment),
/* harmony export */   "KeepAlive": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.KeepAlive),
/* harmony export */   "ReactiveEffect": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.ReactiveEffect),
/* harmony export */   "Static": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.Static),
/* harmony export */   "Suspense": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.Suspense),
/* harmony export */   "Teleport": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.Teleport),
/* harmony export */   "Text": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.Text),
/* harmony export */   "Transition": () => (/* binding */ Transition),
/* harmony export */   "TransitionGroup": () => (/* binding */ TransitionGroup),
/* harmony export */   "VueElement": () => (/* binding */ VueElement),
/* harmony export */   "callWithAsyncErrorHandling": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.callWithAsyncErrorHandling),
/* harmony export */   "callWithErrorHandling": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.callWithErrorHandling),
/* harmony export */   "camelize": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.camelize),
/* harmony export */   "capitalize": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.capitalize),
/* harmony export */   "cloneVNode": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.cloneVNode),
/* harmony export */   "compatUtils": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.compatUtils),
/* harmony export */   "computed": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.computed),
/* harmony export */   "createApp": () => (/* binding */ createApp),
/* harmony export */   "createBlock": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.createBlock),
/* harmony export */   "createCommentVNode": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode),
/* harmony export */   "createElementBlock": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.createElementBlock),
/* harmony export */   "createElementVNode": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.createElementVNode),
/* harmony export */   "createHydrationRenderer": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.createHydrationRenderer),
/* harmony export */   "createPropsRestProxy": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.createPropsRestProxy),
/* harmony export */   "createRenderer": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.createRenderer),
/* harmony export */   "createSSRApp": () => (/* binding */ createSSRApp),
/* harmony export */   "createSlots": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.createSlots),
/* harmony export */   "createStaticVNode": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode),
/* harmony export */   "createTextVNode": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.createTextVNode),
/* harmony export */   "createVNode": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.createVNode),
/* harmony export */   "customRef": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.customRef),
/* harmony export */   "defineAsyncComponent": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent),
/* harmony export */   "defineComponent": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.defineComponent),
/* harmony export */   "defineCustomElement": () => (/* binding */ defineCustomElement),
/* harmony export */   "defineEmits": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.defineEmits),
/* harmony export */   "defineExpose": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.defineExpose),
/* harmony export */   "defineProps": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.defineProps),
/* harmony export */   "defineSSRCustomElement": () => (/* binding */ defineSSRCustomElement),
/* harmony export */   "devtools": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.devtools),
/* harmony export */   "effect": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.effect),
/* harmony export */   "effectScope": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.effectScope),
/* harmony export */   "getCurrentInstance": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.getCurrentInstance),
/* harmony export */   "getCurrentScope": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.getCurrentScope),
/* harmony export */   "getTransitionRawChildren": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.getTransitionRawChildren),
/* harmony export */   "guardReactiveProps": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.guardReactiveProps),
/* harmony export */   "h": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.h),
/* harmony export */   "handleError": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.handleError),
/* harmony export */   "hydrate": () => (/* binding */ hydrate),
/* harmony export */   "initCustomFormatter": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.initCustomFormatter),
/* harmony export */   "initDirectivesForSSR": () => (/* binding */ initDirectivesForSSR),
/* harmony export */   "inject": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.inject),
/* harmony export */   "isMemoSame": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.isMemoSame),
/* harmony export */   "isProxy": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.isProxy),
/* harmony export */   "isReactive": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.isReactive),
/* harmony export */   "isReadonly": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.isReadonly),
/* harmony export */   "isRef": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.isRef),
/* harmony export */   "isRuntimeOnly": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.isRuntimeOnly),
/* harmony export */   "isShallow": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.isShallow),
/* harmony export */   "isVNode": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.isVNode),
/* harmony export */   "markRaw": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.markRaw),
/* harmony export */   "mergeDefaults": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.mergeDefaults),
/* harmony export */   "mergeProps": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.mergeProps),
/* harmony export */   "nextTick": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.nextTick),
/* harmony export */   "normalizeClass": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.normalizeClass),
/* harmony export */   "normalizeProps": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.normalizeProps),
/* harmony export */   "normalizeStyle": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle),
/* harmony export */   "onActivated": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.onActivated),
/* harmony export */   "onBeforeMount": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.onBeforeMount),
/* harmony export */   "onBeforeUnmount": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.onBeforeUnmount),
/* harmony export */   "onBeforeUpdate": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.onBeforeUpdate),
/* harmony export */   "onDeactivated": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.onDeactivated),
/* harmony export */   "onErrorCaptured": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.onErrorCaptured),
/* harmony export */   "onMounted": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.onMounted),
/* harmony export */   "onRenderTracked": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.onRenderTracked),
/* harmony export */   "onRenderTriggered": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.onRenderTriggered),
/* harmony export */   "onScopeDispose": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.onScopeDispose),
/* harmony export */   "onServerPrefetch": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.onServerPrefetch),
/* harmony export */   "onUnmounted": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.onUnmounted),
/* harmony export */   "onUpdated": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.onUpdated),
/* harmony export */   "openBlock": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.openBlock),
/* harmony export */   "popScopeId": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.popScopeId),
/* harmony export */   "provide": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.provide),
/* harmony export */   "proxyRefs": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.proxyRefs),
/* harmony export */   "pushScopeId": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.pushScopeId),
/* harmony export */   "queuePostFlushCb": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.queuePostFlushCb),
/* harmony export */   "reactive": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.reactive),
/* harmony export */   "readonly": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.readonly),
/* harmony export */   "ref": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.ref),
/* harmony export */   "registerRuntimeCompiler": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.registerRuntimeCompiler),
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "renderList": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.renderList),
/* harmony export */   "renderSlot": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.renderSlot),
/* harmony export */   "resolveComponent": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.resolveComponent),
/* harmony export */   "resolveDirective": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.resolveDirective),
/* harmony export */   "resolveDynamicComponent": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.resolveDynamicComponent),
/* harmony export */   "resolveFilter": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.resolveFilter),
/* harmony export */   "resolveTransitionHooks": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.resolveTransitionHooks),
/* harmony export */   "setBlockTracking": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.setBlockTracking),
/* harmony export */   "setDevtoolsHook": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.setDevtoolsHook),
/* harmony export */   "setTransitionHooks": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.setTransitionHooks),
/* harmony export */   "shallowReactive": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.shallowReactive),
/* harmony export */   "shallowReadonly": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.shallowReadonly),
/* harmony export */   "shallowRef": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.shallowRef),
/* harmony export */   "ssrContextKey": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.ssrContextKey),
/* harmony export */   "ssrUtils": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.ssrUtils),
/* harmony export */   "stop": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.stop),
/* harmony export */   "toDisplayString": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.toDisplayString),
/* harmony export */   "toHandlerKey": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.toHandlerKey),
/* harmony export */   "toHandlers": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.toHandlers),
/* harmony export */   "toRaw": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.toRaw),
/* harmony export */   "toRef": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.toRef),
/* harmony export */   "toRefs": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.toRefs),
/* harmony export */   "transformVNodeArgs": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.transformVNodeArgs),
/* harmony export */   "triggerRef": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.triggerRef),
/* harmony export */   "unref": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.unref),
/* harmony export */   "useAttrs": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.useAttrs),
/* harmony export */   "useCssModule": () => (/* binding */ useCssModule),
/* harmony export */   "useCssVars": () => (/* binding */ useCssVars),
/* harmony export */   "useSSRContext": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.useSSRContext),
/* harmony export */   "useSlots": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.useSlots),
/* harmony export */   "useTransitionState": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.useTransitionState),
/* harmony export */   "vModelCheckbox": () => (/* binding */ vModelCheckbox),
/* harmony export */   "vModelDynamic": () => (/* binding */ vModelDynamic),
/* harmony export */   "vModelRadio": () => (/* binding */ vModelRadio),
/* harmony export */   "vModelSelect": () => (/* binding */ vModelSelect),
/* harmony export */   "vModelText": () => (/* binding */ vModelText),
/* harmony export */   "vShow": () => (/* binding */ vShow),
/* harmony export */   "version": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.version),
/* harmony export */   "warn": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.warn),
/* harmony export */   "watch": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.watch),
/* harmony export */   "watchEffect": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.watchEffect),
/* harmony export */   "watchPostEffect": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.watchPostEffect),
/* harmony export */   "watchSyncEffect": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.watchSyncEffect),
/* harmony export */   "withAsyncContext": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.withAsyncContext),
/* harmony export */   "withCtx": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.withCtx),
/* harmony export */   "withDefaults": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.withDefaults),
/* harmony export */   "withDirectives": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.withDirectives),
/* harmony export */   "withKeys": () => (/* binding */ withKeys),
/* harmony export */   "withMemo": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.withMemo),
/* harmony export */   "withModifiers": () => (/* binding */ withModifiers),
/* harmony export */   "withScopeId": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.withScopeId)
/* harmony export */ });
/* harmony import */ var _vue_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vue/shared */ "./node_modules/@vue/shared/dist/shared.esm-bundler.js");
/* harmony import */ var _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue/runtime-core */ "./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js");
/* harmony import */ var _vue_runtime_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vue/runtime-core */ "./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }




var svgNS = 'http://www.w3.org/2000/svg';
var doc = typeof document !== 'undefined' ? document : null;
var templateContainer = doc && /*#__PURE__*/doc.createElement('template');
var nodeOps = {
  insert: function insert(child, parent, anchor) {
    parent.insertBefore(child, anchor || null);
  },
  remove: function remove(child) {
    var parent = child.parentNode;

    if (parent) {
      parent.removeChild(child);
    }
  },
  createElement: function createElement(tag, isSVG, is, props) {
    var el = isSVG ? doc.createElementNS(svgNS, tag) : doc.createElement(tag, is ? {
      is: is
    } : undefined);

    if (tag === 'select' && props && props.multiple != null) {
      el.setAttribute('multiple', props.multiple);
    }

    return el;
  },
  createText: function createText(text) {
    return doc.createTextNode(text);
  },
  createComment: function createComment(text) {
    return doc.createComment(text);
  },
  setText: function setText(node, text) {
    node.nodeValue = text;
  },
  setElementText: function setElementText(el, text) {
    el.textContent = text;
  },
  parentNode: function parentNode(node) {
    return node.parentNode;
  },
  nextSibling: function nextSibling(node) {
    return node.nextSibling;
  },
  querySelector: function querySelector(selector) {
    return doc.querySelector(selector);
  },
  setScopeId: function setScopeId(el, id) {
    el.setAttribute(id, '');
  },
  cloneNode: function cloneNode(el) {
    var cloned = el.cloneNode(true); // #3072
    // - in `patchDOMProp`, we store the actual value in the `el._value` property.
    // - normally, elements using `:value` bindings will not be hoisted, but if
    //   the bound value is a constant, e.g. `:value="true"` - they do get
    //   hoisted.
    // - in production, hoisted nodes are cloned when subsequent inserts, but
    //   cloneNode() does not copy the custom property we attached.
    // - This may need to account for other custom DOM properties we attach to
    //   elements in addition to `_value` in the future.

    if ("_value" in el) {
      cloned._value = el._value;
    }

    return cloned;
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent: function insertStaticContent(content, parent, anchor, isSVG, start, end) {
    // <parent> before | first ... last | anchor </parent>
    var before = anchor ? anchor.previousSibling : parent.lastChild; // #5308 can only take cached path if:
    // - has a single root node
    // - nextSibling info is still available

    if (start && (start === end || start.nextSibling)) {
      // cached
      while (true) {
        parent.insertBefore(start.cloneNode(true), anchor);
        if (start === end || !(start = start.nextSibling)) break;
      }
    } else {
      // fresh insert
      templateContainer.innerHTML = isSVG ? "<svg>".concat(content, "</svg>") : content;
      var template = templateContainer.content;

      if (isSVG) {
        // remove outer svg wrapper
        var wrapper = template.firstChild;

        while (wrapper.firstChild) {
          template.appendChild(wrapper.firstChild);
        }

        template.removeChild(wrapper);
      }

      parent.insertBefore(template, anchor);
    }

    return [// first
    before ? before.nextSibling : parent.firstChild, // last
    anchor ? anchor.previousSibling : parent.lastChild];
  }
}; // compiler should normalize class + :class bindings on the same element
// into a single binding ['staticClass', dynamic]

function patchClass(el, value, isSVG) {
  // directly setting className should be faster than setAttribute in theory
  // if this is an element during a transition, take the temporary transition
  // classes into account.
  var transitionClasses = el._vtc;

  if (transitionClasses) {
    value = (value ? [value].concat(_toConsumableArray(transitionClasses)) : _toConsumableArray(transitionClasses)).join(' ');
  }

  if (value == null) {
    el.removeAttribute('class');
  } else if (isSVG) {
    el.setAttribute('class', value);
  } else {
    el.className = value;
  }
}

function patchStyle(el, prev, next) {
  var style = el.style;
  var isCssString = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(next);

  if (next && !isCssString) {
    for (var key in next) {
      setStyle(style, key, next[key]);
    }

    if (prev && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(prev)) {
      for (var _key in prev) {
        if (next[_key] == null) {
          setStyle(style, _key, '');
        }
      }
    }
  } else {
    var currentDisplay = style.display;

    if (isCssString) {
      if (prev !== next) {
        style.cssText = next;
      }
    } else if (prev) {
      el.removeAttribute('style');
    } // indicates that the `display` of the element is controlled by `v-show`,
    // so we always keep the current `display` value regardless of the `style`
    // value, thus handing over control to `v-show`.


    if ('_vod' in el) {
      style.display = currentDisplay;
    }
  }
}

var importantRE = /\s*!important$/;

function setStyle(style, name, val) {
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(val)) {
    val.forEach(function (v) {
      return setStyle(style, name, v);
    });
  } else {
    if (val == null) val = '';

    if (name.startsWith('--')) {
      // custom property definition
      style.setProperty(name, val);
    } else {
      var prefixed = autoPrefix(style, name);

      if (importantRE.test(val)) {
        // !important
        style.setProperty((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hyphenate)(prefixed), val.replace(importantRE, ''), 'important');
      } else {
        style[prefixed] = val;
      }
    }
  }
}

var prefixes = ['Webkit', 'Moz', 'ms'];
var prefixCache = {};

function autoPrefix(style, rawName) {
  var cached = prefixCache[rawName];

  if (cached) {
    return cached;
  }

  var name = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.camelize)(rawName);

  if (name !== 'filter' && name in style) {
    return prefixCache[rawName] = name;
  }

  name = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.capitalize)(name);

  for (var i = 0; i < prefixes.length; i++) {
    var prefixed = prefixes[i] + name;

    if (prefixed in style) {
      return prefixCache[rawName] = prefixed;
    }
  }

  return rawName;
}

var xlinkNS = 'http://www.w3.org/1999/xlink';

function patchAttr(el, key, value, isSVG, instance) {
  if (isSVG && key.startsWith('xlink:')) {
    if (value == null) {
      el.removeAttributeNS(xlinkNS, key.slice(6, key.length));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    // note we are only checking boolean attributes that don't have a
    // corresponding dom prop of the same name here.
    var isBoolean = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isSpecialBooleanAttr)(key);

    if (value == null || isBoolean && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.includeBooleanAttr)(value)) {
      el.removeAttribute(key);
    } else {
      el.setAttribute(key, isBoolean ? '' : value);
    }
  }
} // __UNSAFE__
// functions. The user is responsible for using them with only trusted content.


function patchDOMProp(el, key, value, // the following args are passed only due to potential innerHTML/textContent
// overriding existing VNodes, in which case the old tree must be properly
// unmounted.
prevChildren, parentComponent, parentSuspense, unmountChildren) {
  if (key === 'innerHTML' || key === 'textContent') {
    if (prevChildren) {
      unmountChildren(prevChildren, parentComponent, parentSuspense);
    }

    el[key] = value == null ? '' : value;
    return;
  }

  if (key === 'value' && el.tagName !== 'PROGRESS' && // custom elements may use _value internally
  !el.tagName.includes('-')) {
    // store value as _value as well since
    // non-string values will be stringified.
    el._value = value;
    var newValue = value == null ? '' : value;

    if (el.value !== newValue || // #4956: always set for OPTION elements because its value falls back to
    // textContent if no value attribute is present. And setting .value for
    // OPTION has no side effect
    el.tagName === 'OPTION') {
      el.value = newValue;
    }

    if (value == null) {
      el.removeAttribute(key);
    }

    return;
  }

  var needRemove = false;

  if (value === '' || value == null) {
    var type = _typeof(el[key]);

    if (type === 'boolean') {
      // e.g. <select multiple> compiles to { multiple: '' }
      value = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.includeBooleanAttr)(value);
    } else if (value == null && type === 'string') {
      // e.g. <div :id="null">
      value = '';
      needRemove = true;
    } else if (type === 'number') {
      // e.g. <img :width="null">
      // the value of some IDL attr must be greater than 0, e.g. input.size = 0 -> error
      value = 0;
      needRemove = true;
    }
  } // some properties perform value validation and throw,
  // some properties has getter, no setter, will error in 'use strict'
  // eg. <select :type="null"></select> <select :willValidate="null"></select>


  try {
    el[key] = value;
  } catch (e) {
    if (true) {
      (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.warn)("Failed setting prop \"".concat(key, "\" on <").concat(el.tagName.toLowerCase(), ">: ") + "value ".concat(value, " is invalid."), e);
    }
  }

  needRemove && el.removeAttribute(key);
} // Async edge case fix requires storing an event listener's attach timestamp.


var _ref = /*#__PURE__*/function () {
  var _getNow = Date.now;
  var skipTimestampCheck = false;

  if (typeof window !== 'undefined') {
    // Determine what event timestamp the browser is using. Annoyingly, the
    // timestamp can either be hi-res (relative to page load) or low-res
    // (relative to UNIX epoch), so in order to compare time we have to use the
    // same timestamp type when saving the flush timestamp.
    if (Date.now() > document.createEvent('Event').timeStamp) {
      // if the low-res timestamp which is bigger than the event timestamp
      // (which is evaluated AFTER) it means the event is using a hi-res timestamp,
      // and we need to use the hi-res version for event listeners as well.
      _getNow = performance.now.bind(performance);
    } // #3485: Firefox <= 53 has incorrect Event.timeStamp implementation
    // and does not fire microtasks in between event propagation, so safe to exclude.


    var ffMatch = navigator.userAgent.match(/firefox\/(\d+)/i);
    skipTimestampCheck = !!(ffMatch && Number(ffMatch[1]) <= 53);
  }

  return [_getNow, skipTimestampCheck];
}(),
    _ref2 = _slicedToArray(_ref, 2),
    _getNow = _ref2[0],
    skipTimestampCheck = _ref2[1]; // To avoid the overhead of repeatedly calling performance.now(), we cache
// and use the same timestamp for all event listeners attached in the same tick.


var cachedNow = 0;
var p = /*#__PURE__*/Promise.resolve();

var reset = function reset() {
  cachedNow = 0;
};

var getNow = function getNow() {
  return cachedNow || (p.then(reset), cachedNow = _getNow());
};

function addEventListener(el, event, handler, options) {
  el.addEventListener(event, handler, options);
}

function removeEventListener(el, event, handler, options) {
  el.removeEventListener(event, handler, options);
}

function patchEvent(el, rawName, prevValue, nextValue) {
  var instance = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
  // vei = vue event invokers
  var invokers = el._vei || (el._vei = {});
  var existingInvoker = invokers[rawName];

  if (nextValue && existingInvoker) {
    // patch
    existingInvoker.value = nextValue;
  } else {
    var _parseName = parseName(rawName),
        _parseName2 = _slicedToArray(_parseName, 2),
        name = _parseName2[0],
        options = _parseName2[1];

    if (nextValue) {
      // add
      var invoker = invokers[rawName] = createInvoker(nextValue, instance);
      addEventListener(el, name, invoker, options);
    } else if (existingInvoker) {
      // remove
      removeEventListener(el, name, existingInvoker, options);
      invokers[rawName] = undefined;
    }
  }
}

var optionsModifierRE = /(?:Once|Passive|Capture)$/;

function parseName(name) {
  var options;

  if (optionsModifierRE.test(name)) {
    options = {};
    var m;

    while (m = name.match(optionsModifierRE)) {
      name = name.slice(0, name.length - m[0].length);
      options[m[0].toLowerCase()] = true;
    }
  }

  return [(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hyphenate)(name.slice(2)), options];
}

function createInvoker(initialValue, instance) {
  var invoker = function invoker(e) {
    // async edge case #6566: inner click event triggers patch, event handler
    // attached to outer element during patch, and triggered again. This
    // happens because browsers fire microtask ticks between event propagation.
    // the solution is simple: we save the timestamp when a handler is attached,
    // and the handler would only fire if the event passed to it was fired
    // AFTER it was attached.
    var timeStamp = e.timeStamp || _getNow();

    if (skipTimestampCheck || timeStamp >= invoker.attached - 1) {
      (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.callWithAsyncErrorHandling)(patchStopImmediatePropagation(e, invoker.value), instance, 5
      /* NATIVE_EVENT_HANDLER */
      , [e]);
    }
  };

  invoker.value = initialValue;
  invoker.attached = getNow();
  return invoker;
}

function patchStopImmediatePropagation(e, value) {
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(value)) {
    var originalStop = e.stopImmediatePropagation;

    e.stopImmediatePropagation = function () {
      originalStop.call(e);
      e._stopped = true;
    };

    return value.map(function (fn) {
      return function (e) {
        return !e._stopped && fn && fn(e);
      };
    });
  } else {
    return value;
  }
}

var nativeOnRE = /^on[a-z]/;

var patchProp = function patchProp(el, key, prevValue, nextValue) {
  var isSVG = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  var prevChildren = arguments.length > 5 ? arguments[5] : undefined;
  var parentComponent = arguments.length > 6 ? arguments[6] : undefined;
  var parentSuspense = arguments.length > 7 ? arguments[7] : undefined;
  var unmountChildren = arguments.length > 8 ? arguments[8] : undefined;

  if (key === 'class') {
    patchClass(el, nextValue, isSVG);
  } else if (key === 'style') {
    patchStyle(el, prevValue, nextValue);
  } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isOn)(key)) {
    // ignore v-model listeners
    if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isModelListener)(key)) {
      patchEvent(el, key, prevValue, nextValue, parentComponent);
    }
  } else if (key[0] === '.' ? (key = key.slice(1), true) : key[0] === '^' ? (key = key.slice(1), false) : shouldSetAsProp(el, key, nextValue, isSVG)) {
    patchDOMProp(el, key, nextValue, prevChildren, parentComponent, parentSuspense, unmountChildren);
  } else {
    // special case for <input v-model type="checkbox"> with
    // :true-value & :false-value
    // store value as dom properties since non-string values will be
    // stringified.
    if (key === 'true-value') {
      el._trueValue = nextValue;
    } else if (key === 'false-value') {
      el._falseValue = nextValue;
    }

    patchAttr(el, key, nextValue, isSVG);
  }
};

function shouldSetAsProp(el, key, value, isSVG) {
  if (isSVG) {
    // most keys must be set as attribute on svg elements to work
    // ...except innerHTML & textContent
    if (key === 'innerHTML' || key === 'textContent') {
      return true;
    } // or native onclick with function values


    if (key in el && nativeOnRE.test(key) && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(value)) {
      return true;
    }

    return false;
  } // these are enumerated attrs, however their corresponding DOM properties
  // are actually booleans - this leads to setting it with a string "false"
  // value leading it to be coerced to `true`, so we need to always treat
  // them as attributes.
  // Note that `contentEditable` doesn't have this problem: its DOM
  // property is also enumerated string values.


  if (key === 'spellcheck' || key === 'draggable' || key === 'translate') {
    return false;
  } // #1787, #2840 form property on form elements is readonly and must be set as
  // attribute.


  if (key === 'form') {
    return false;
  } // #1526 <input list> must be set as attribute


  if (key === 'list' && el.tagName === 'INPUT') {
    return false;
  } // #2766 <textarea type> must be set as attribute


  if (key === 'type' && el.tagName === 'TEXTAREA') {
    return false;
  } // native onclick with string value, must be set as attribute


  if (nativeOnRE.test(key) && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(value)) {
    return false;
  }

  return key in el;
}

function defineCustomElement(options, hydrate) {
  var Comp = (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.defineComponent)(options);

  var VueCustomElement = /*#__PURE__*/function (_VueElement) {
    _inherits(VueCustomElement, _VueElement);

    var _super = _createSuper(VueCustomElement);

    function VueCustomElement(initialProps) {
      _classCallCheck(this, VueCustomElement);

      return _super.call(this, Comp, initialProps, hydrate);
    }

    return _createClass(VueCustomElement);
  }(VueElement);

  VueCustomElement.def = Comp;
  return VueCustomElement;
}

var defineSSRCustomElement = function defineSSRCustomElement(options) {
  // @ts-ignore
  return defineCustomElement(options, hydrate);
};

var BaseClass = typeof HTMLElement !== 'undefined' ? HTMLElement : /*#__PURE__*/function () {
  function _class() {
    _classCallCheck(this, _class);
  }

  return _createClass(_class);
}();

var VueElement = /*#__PURE__*/function (_BaseClass) {
  _inherits(VueElement, _BaseClass);

  var _super2 = _createSuper(VueElement);

  function VueElement(_def) {
    var _this;

    var _props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var hydrate = arguments.length > 2 ? arguments[2] : undefined;

    _classCallCheck(this, VueElement);

    _this = _super2.call(this);
    _this._def = _def;
    _this._props = _props;
    /**
     * @internal
     */

    _this._instance = null;
    _this._connected = false;
    _this._resolved = false;
    _this._numberProps = null;

    if (_this.shadowRoot && hydrate) {
      hydrate(_this._createVNode(), _this.shadowRoot);
    } else {
      if ( true && _this.shadowRoot) {
        (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.warn)("Custom element has pre-rendered declarative shadow root but is not " + "defined as hydratable. Use `defineSSRCustomElement`.");
      }

      _this.attachShadow({
        mode: 'open'
      });
    }

    return _this;
  }

  _createClass(VueElement, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this._connected = true;

      if (!this._instance) {
        this._resolveDef();
      }
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      var _this2 = this;

      this._connected = false;
      (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.nextTick)(function () {
        if (!_this2._connected) {
          render(null, _this2.shadowRoot);
          _this2._instance = null;
        }
      });
    }
    /**
     * resolve inner component definition (handle possible async component)
     */

  }, {
    key: "_resolveDef",
    value: function _resolveDef() {
      var _this3 = this;

      if (this._resolved) {
        return;
      }

      this._resolved = true; // set initial attrs

      for (var i = 0; i < this.attributes.length; i++) {
        this._setAttr(this.attributes[i].name);
      } // watch future attr changes


      new MutationObserver(function (mutations) {
        var _iterator = _createForOfIteratorHelper(mutations),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var m = _step.value;

            _this3._setAttr(m.attributeName);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }).observe(this, {
        attributes: true
      });

      var resolve = function resolve(def) {
        var props = def.props,
            styles = def.styles;
        var hasOptions = !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(props);
        var rawKeys = props ? hasOptions ? Object.keys(props) : props : []; // cast Number-type props set before resolve

        var numberProps;

        if (hasOptions) {
          for (var key in _this3._props) {
            var opt = props[key];

            if (opt === Number || opt && opt.type === Number) {
              _this3._props[key] = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.toNumber)(_this3._props[key]);
              (numberProps || (numberProps = Object.create(null)))[key] = true;
            }
          }
        }

        _this3._numberProps = numberProps; // check if there are props set pre-upgrade or connect

        for (var _i2 = 0, _Object$keys = Object.keys(_this3); _i2 < _Object$keys.length; _i2++) {
          var _key2 = _Object$keys[_i2];

          if (_key2[0] !== '_') {
            _this3._setProp(_key2, _this3[_key2], true, false);
          }
        } // defining getter/setters on prototype


        var _iterator2 = _createForOfIteratorHelper(rawKeys.map(_vue_shared__WEBPACK_IMPORTED_MODULE_1__.camelize)),
            _step2;

        try {
          var _loop = function _loop() {
            var key = _step2.value;
            Object.defineProperty(_this3, key, {
              get: function get() {
                return this._getProp(key);
              },
              set: function set(val) {
                this._setProp(key, val);
              }
            });
          };

          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            _loop();
          } // apply CSS

        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }

        _this3._applyStyles(styles); // initial render


        _this3._update();
      };

      var asyncDef = this._def.__asyncLoader;

      if (asyncDef) {
        asyncDef().then(resolve);
      } else {
        resolve(this._def);
      }
    }
  }, {
    key: "_setAttr",
    value: function _setAttr(key) {
      var value = this.getAttribute(key);

      if (this._numberProps && this._numberProps[key]) {
        value = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.toNumber)(value);
      }

      this._setProp((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.camelize)(key), value, false);
    }
    /**
     * @internal
     */

  }, {
    key: "_getProp",
    value: function _getProp(key) {
      return this._props[key];
    }
    /**
     * @internal
     */

  }, {
    key: "_setProp",
    value: function _setProp(key, val) {
      var shouldReflect = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var shouldUpdate = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

      if (val !== this._props[key]) {
        this._props[key] = val;

        if (shouldUpdate && this._instance) {
          this._update();
        } // reflect


        if (shouldReflect) {
          if (val === true) {
            this.setAttribute((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hyphenate)(key), '');
          } else if (typeof val === 'string' || typeof val === 'number') {
            this.setAttribute((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hyphenate)(key), val + '');
          } else if (!val) {
            this.removeAttribute((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hyphenate)(key));
          }
        }
      }
    }
  }, {
    key: "_update",
    value: function _update() {
      render(this._createVNode(), this.shadowRoot);
    }
  }, {
    key: "_createVNode",
    value: function _createVNode() {
      var _this4 = this;

      var vnode = (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.createVNode)(this._def, (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)({}, this._props));

      if (!this._instance) {
        vnode.ce = function (instance) {
          _this4._instance = instance;
          instance.isCE = true; // HMR

          if (true) {
            instance.ceReload = function (newStyles) {
              // always reset styles
              if (_this4._styles) {
                _this4._styles.forEach(function (s) {
                  return _this4.shadowRoot.removeChild(s);
                });

                _this4._styles.length = 0;
              }

              _this4._applyStyles(newStyles); // if this is an async component, ceReload is called from the inner
              // component so no need to reload the async wrapper


              if (!_this4._def.__asyncLoader) {
                // reload
                _this4._instance = null;

                _this4._update();
              }
            };
          } // intercept emit


          instance.emit = function (event) {
            for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key3 = 1; _key3 < _len; _key3++) {
              args[_key3 - 1] = arguments[_key3];
            }

            _this4.dispatchEvent(new CustomEvent(event, {
              detail: args
            }));
          }; // locate nearest Vue custom element parent for provide/inject


          var parent = _this4;

          while (parent = parent && (parent.parentNode || parent.host)) {
            if (parent instanceof VueElement) {
              instance.parent = parent._instance;
              break;
            }
          }
        };
      }

      return vnode;
    }
  }, {
    key: "_applyStyles",
    value: function _applyStyles(styles) {
      var _this5 = this;

      if (styles) {
        styles.forEach(function (css) {
          var s = document.createElement('style');
          s.textContent = css;

          _this5.shadowRoot.appendChild(s); // record for HMR


          if (true) {
            (_this5._styles || (_this5._styles = [])).push(s);
          }
        });
      }
    }
  }]);

  return VueElement;
}(BaseClass);

function useCssModule() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '$style';

  /* istanbul ignore else */
  {
    var instance = (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.getCurrentInstance)();

    if (!instance) {
       true && (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.warn)("useCssModule must be called inside setup()");
      return _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ;
    }

    var modules = instance.type.__cssModules;

    if (!modules) {
       true && (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.warn)("Current instance does not have CSS modules injected.");
      return _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ;
    }

    var mod = modules[name];

    if (!mod) {
       true && (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.warn)("Current instance does not have CSS module named \"".concat(name, "\"."));
      return _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ;
    }

    return mod;
  }
}
/**
 * Runtime helper for SFC's CSS variable injection feature.
 * @private
 */


function useCssVars(getter) {
  var instance = (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.getCurrentInstance)();
  /* istanbul ignore next */

  if (!instance) {
     true && (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.warn)("useCssVars is called without current active component instance.");
    return;
  }

  var setVars = function setVars() {
    return setVarsOnVNode(instance.subTree, getter(instance.proxy));
  };

  (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.watchPostEffect)(setVars);
  (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.onMounted)(function () {
    var ob = new MutationObserver(setVars);
    ob.observe(instance.subTree.el.parentNode, {
      childList: true
    });
    (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.onUnmounted)(function () {
      return ob.disconnect();
    });
  });
}

function setVarsOnVNode(vnode, vars) {
  if (vnode.shapeFlag & 128
  /* SUSPENSE */
  ) {
    var suspense = vnode.suspense;
    vnode = suspense.activeBranch;

    if (suspense.pendingBranch && !suspense.isHydrating) {
      suspense.effects.push(function () {
        setVarsOnVNode(suspense.activeBranch, vars);
      });
    }
  } // drill down HOCs until it's a non-component vnode


  while (vnode.component) {
    vnode = vnode.component.subTree;
  }

  if (vnode.shapeFlag & 1
  /* ELEMENT */
  && vnode.el) {
    setVarsOnNode(vnode.el, vars);
  } else if (vnode.type === _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.Fragment) {
    vnode.children.forEach(function (c) {
      return setVarsOnVNode(c, vars);
    });
  } else if (vnode.type === _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.Static) {
    var _vnode = vnode,
        el = _vnode.el,
        anchor = _vnode.anchor;

    while (el) {
      setVarsOnNode(el, vars);
      if (el === anchor) break;
      el = el.nextSibling;
    }
  }
}

function setVarsOnNode(el, vars) {
  if (el.nodeType === 1) {
    var style = el.style;

    for (var key in vars) {
      style.setProperty("--".concat(key), vars[key]);
    }
  }
}

var TRANSITION = 'transition';
var ANIMATION = 'animation'; // DOM Transition is a higher-order-component based on the platform-agnostic
// base Transition component, with DOM-specific logic.

var Transition = function Transition(props, _ref3) {
  var slots = _ref3.slots;
  return (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.h)(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.BaseTransition, resolveTransitionProps(props), slots);
};

Transition.displayName = 'Transition';
var DOMTransitionPropsValidators = {
  name: String,
  type: String,
  css: {
    type: Boolean,
    "default": true
  },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String
};
var TransitionPropsValidators = Transition.props = /*#__PURE__*/(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)({}, _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.BaseTransition.props, DOMTransitionPropsValidators);
/**
 * #3227 Incoming hooks may be merged into arrays when wrapping Transition
 * with custom HOCs.
 */

var callHook = function callHook(hook) {
  var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(hook)) {
    hook.forEach(function (h) {
      return h.apply(void 0, _toConsumableArray(args));
    });
  } else if (hook) {
    hook.apply(void 0, _toConsumableArray(args));
  }
};
/**
 * Check if a hook expects a callback (2nd arg), which means the user
 * intends to explicitly control the end of the transition.
 */


var hasExplicitCallback = function hasExplicitCallback(hook) {
  return hook ? (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(hook) ? hook.some(function (h) {
    return h.length > 1;
  }) : hook.length > 1 : false;
};

function resolveTransitionProps(rawProps) {
  var baseProps = {};

  for (var key in rawProps) {
    if (!(key in DOMTransitionPropsValidators)) {
      baseProps[key] = rawProps[key];
    }
  }

  if (rawProps.css === false) {
    return baseProps;
  }

  var _rawProps$name = rawProps.name,
      name = _rawProps$name === void 0 ? 'v' : _rawProps$name,
      type = rawProps.type,
      duration = rawProps.duration,
      _rawProps$enterFromCl = rawProps.enterFromClass,
      enterFromClass = _rawProps$enterFromCl === void 0 ? "".concat(name, "-enter-from") : _rawProps$enterFromCl,
      _rawProps$enterActive = rawProps.enterActiveClass,
      enterActiveClass = _rawProps$enterActive === void 0 ? "".concat(name, "-enter-active") : _rawProps$enterActive,
      _rawProps$enterToClas = rawProps.enterToClass,
      enterToClass = _rawProps$enterToClas === void 0 ? "".concat(name, "-enter-to") : _rawProps$enterToClas,
      _rawProps$appearFromC = rawProps.appearFromClass,
      appearFromClass = _rawProps$appearFromC === void 0 ? enterFromClass : _rawProps$appearFromC,
      _rawProps$appearActiv = rawProps.appearActiveClass,
      appearActiveClass = _rawProps$appearActiv === void 0 ? enterActiveClass : _rawProps$appearActiv,
      _rawProps$appearToCla = rawProps.appearToClass,
      appearToClass = _rawProps$appearToCla === void 0 ? enterToClass : _rawProps$appearToCla,
      _rawProps$leaveFromCl = rawProps.leaveFromClass,
      leaveFromClass = _rawProps$leaveFromCl === void 0 ? "".concat(name, "-leave-from") : _rawProps$leaveFromCl,
      _rawProps$leaveActive = rawProps.leaveActiveClass,
      leaveActiveClass = _rawProps$leaveActive === void 0 ? "".concat(name, "-leave-active") : _rawProps$leaveActive,
      _rawProps$leaveToClas = rawProps.leaveToClass,
      leaveToClass = _rawProps$leaveToClas === void 0 ? "".concat(name, "-leave-to") : _rawProps$leaveToClas;
  var durations = normalizeDuration(duration);
  var enterDuration = durations && durations[0];
  var leaveDuration = durations && durations[1];

  var _onBeforeEnter = baseProps.onBeforeEnter,
      onEnter = baseProps.onEnter,
      _onEnterCancelled = baseProps.onEnterCancelled,
      _onLeave = baseProps.onLeave,
      _onLeaveCancelled = baseProps.onLeaveCancelled,
      _baseProps$onBeforeAp = baseProps.onBeforeAppear,
      _onBeforeAppear = _baseProps$onBeforeAp === void 0 ? _onBeforeEnter : _baseProps$onBeforeAp,
      _baseProps$onAppear = baseProps.onAppear,
      onAppear = _baseProps$onAppear === void 0 ? onEnter : _baseProps$onAppear,
      _baseProps$onAppearCa = baseProps.onAppearCancelled,
      _onAppearCancelled = _baseProps$onAppearCa === void 0 ? _onEnterCancelled : _baseProps$onAppearCa;

  var finishEnter = function finishEnter(el, isAppear, done) {
    removeTransitionClass(el, isAppear ? appearToClass : enterToClass);
    removeTransitionClass(el, isAppear ? appearActiveClass : enterActiveClass);
    done && done();
  };

  var finishLeave = function finishLeave(el, done) {
    el._isLeaving = false;
    removeTransitionClass(el, leaveFromClass);
    removeTransitionClass(el, leaveToClass);
    removeTransitionClass(el, leaveActiveClass);
    done && done();
  };

  var makeEnterHook = function makeEnterHook(isAppear) {
    return function (el, done) {
      var hook = isAppear ? onAppear : onEnter;

      var resolve = function resolve() {
        return finishEnter(el, isAppear, done);
      };

      callHook(hook, [el, resolve]);
      nextFrame(function () {
        removeTransitionClass(el, isAppear ? appearFromClass : enterFromClass);
        addTransitionClass(el, isAppear ? appearToClass : enterToClass);

        if (!hasExplicitCallback(hook)) {
          whenTransitionEnds(el, type, enterDuration, resolve);
        }
      });
    };
  };

  return (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)(baseProps, {
    onBeforeEnter: function onBeforeEnter(el) {
      callHook(_onBeforeEnter, [el]);
      addTransitionClass(el, enterFromClass);
      addTransitionClass(el, enterActiveClass);
    },
    onBeforeAppear: function onBeforeAppear(el) {
      callHook(_onBeforeAppear, [el]);
      addTransitionClass(el, appearFromClass);
      addTransitionClass(el, appearActiveClass);
    },
    onEnter: makeEnterHook(false),
    onAppear: makeEnterHook(true),
    onLeave: function onLeave(el, done) {
      el._isLeaving = true;

      var resolve = function resolve() {
        return finishLeave(el, done);
      };

      addTransitionClass(el, leaveFromClass); // force reflow so *-leave-from classes immediately take effect (#2593)

      forceReflow();
      addTransitionClass(el, leaveActiveClass);
      nextFrame(function () {
        if (!el._isLeaving) {
          // cancelled
          return;
        }

        removeTransitionClass(el, leaveFromClass);
        addTransitionClass(el, leaveToClass);

        if (!hasExplicitCallback(_onLeave)) {
          whenTransitionEnds(el, type, leaveDuration, resolve);
        }
      });
      callHook(_onLeave, [el, resolve]);
    },
    onEnterCancelled: function onEnterCancelled(el) {
      finishEnter(el, false);
      callHook(_onEnterCancelled, [el]);
    },
    onAppearCancelled: function onAppearCancelled(el) {
      finishEnter(el, true);
      callHook(_onAppearCancelled, [el]);
    },
    onLeaveCancelled: function onLeaveCancelled(el) {
      finishLeave(el);
      callHook(_onLeaveCancelled, [el]);
    }
  });
}

function normalizeDuration(duration) {
  if (duration == null) {
    return null;
  } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(duration)) {
    return [NumberOf(duration.enter), NumberOf(duration.leave)];
  } else {
    var n = NumberOf(duration);
    return [n, n];
  }
}

function NumberOf(val) {
  var res = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.toNumber)(val);
  if (true) validateDuration(res);
  return res;
}

function validateDuration(val) {
  if (typeof val !== 'number') {
    (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.warn)("<transition> explicit duration is not a valid number - " + "got ".concat(JSON.stringify(val), "."));
  } else if (isNaN(val)) {
    (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.warn)("<transition> explicit duration is NaN - " + 'the duration expression might be incorrect.');
  }
}

function addTransitionClass(el, cls) {
  cls.split(/\s+/).forEach(function (c) {
    return c && el.classList.add(c);
  });
  (el._vtc || (el._vtc = new Set())).add(cls);
}

function removeTransitionClass(el, cls) {
  cls.split(/\s+/).forEach(function (c) {
    return c && el.classList.remove(c);
  });
  var _vtc = el._vtc;

  if (_vtc) {
    _vtc["delete"](cls);

    if (!_vtc.size) {
      el._vtc = undefined;
    }
  }
}

function nextFrame(cb) {
  requestAnimationFrame(function () {
    requestAnimationFrame(cb);
  });
}

var endId = 0;

function whenTransitionEnds(el, expectedType, explicitTimeout, resolve) {
  var id = el._endId = ++endId;

  var resolveIfNotStale = function resolveIfNotStale() {
    if (id === el._endId) {
      resolve();
    }
  };

  if (explicitTimeout) {
    return setTimeout(resolveIfNotStale, explicitTimeout);
  }

  var _getTransitionInfo = getTransitionInfo(el, expectedType),
      type = _getTransitionInfo.type,
      timeout = _getTransitionInfo.timeout,
      propCount = _getTransitionInfo.propCount;

  if (!type) {
    return resolve();
  }

  var endEvent = type + 'end';
  var ended = 0;

  var end = function end() {
    el.removeEventListener(endEvent, onEnd);
    resolveIfNotStale();
  };

  var onEnd = function onEnd(e) {
    if (e.target === el && ++ended >= propCount) {
      end();
    }
  };

  setTimeout(function () {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el.addEventListener(endEvent, onEnd);
}

function getTransitionInfo(el, expectedType) {
  var styles = window.getComputedStyle(el); // JSDOM may return undefined for transition properties

  var getStyleProperties = function getStyleProperties(key) {
    return (styles[key] || '').split(', ');
  };

  var transitionDelays = getStyleProperties(TRANSITION + 'Delay');
  var transitionDurations = getStyleProperties(TRANSITION + 'Duration');
  var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
  var animationDelays = getStyleProperties(ANIMATION + 'Delay');
  var animationDurations = getStyleProperties(ANIMATION + 'Duration');
  var animationTimeout = getTimeout(animationDelays, animationDurations);
  var type = null;
  var timeout = 0;
  var propCount = 0;
  /* istanbul ignore if */

  if (expectedType === TRANSITION) {
    if (transitionTimeout > 0) {
      type = TRANSITION;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type = ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type = timeout > 0 ? transitionTimeout > animationTimeout ? TRANSITION : ANIMATION : null;
    propCount = type ? type === TRANSITION ? transitionDurations.length : animationDurations.length : 0;
  }

  var hasTransform = type === TRANSITION && /\b(transform|all)(,|$)/.test(styles[TRANSITION + 'Property']);
  return {
    type: type,
    timeout: timeout,
    propCount: propCount,
    hasTransform: hasTransform
  };
}

function getTimeout(delays, durations) {
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }

  return Math.max.apply(Math, _toConsumableArray(durations.map(function (d, i) {
    return toMs(d) + toMs(delays[i]);
  })));
} // Old versions of Chromium (below 61.0.3163.100) formats floating pointer
// numbers in a locale-dependent way, using a comma instead of a dot.
// If comma is not replaced with a dot, the input will be rounded down
// (i.e. acting as a floor function) causing unexpected behaviors


function toMs(s) {
  return Number(s.slice(0, -1).replace(',', '.')) * 1000;
} // synchronously force layout to put elements into a certain state


function forceReflow() {
  return document.body.offsetHeight;
}

var positionMap = new WeakMap();
var newPositionMap = new WeakMap();
var TransitionGroupImpl = {
  name: 'TransitionGroup',
  props: /*#__PURE__*/(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)({}, TransitionPropsValidators, {
    tag: String,
    moveClass: String
  }),
  setup: function setup(props, _ref4) {
    var slots = _ref4.slots;
    var instance = (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.getCurrentInstance)();
    var state = (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.useTransitionState)();
    var prevChildren;
    var children;
    (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.onUpdated)(function () {
      // children is guaranteed to exist after initial render
      if (!prevChildren.length) {
        return;
      }

      var moveClass = props.moveClass || "".concat(props.name || 'v', "-move");

      if (!hasCSSTransform(prevChildren[0].el, instance.vnode.el, moveClass)) {
        return;
      } // we divide the work into three loops to avoid mixing DOM reads and writes
      // in each iteration - which helps prevent layout thrashing.


      prevChildren.forEach(callPendingCbs);
      prevChildren.forEach(recordPosition);
      var movedChildren = prevChildren.filter(applyTranslation); // force reflow to put everything in position

      forceReflow();
      movedChildren.forEach(function (c) {
        var el = c.el;
        var style = el.style;
        addTransitionClass(el, moveClass);
        style.transform = style.webkitTransform = style.transitionDuration = '';

        var cb = el._moveCb = function (e) {
          if (e && e.target !== el) {
            return;
          }

          if (!e || /transform$/.test(e.propertyName)) {
            el.removeEventListener('transitionend', cb);
            el._moveCb = null;
            removeTransitionClass(el, moveClass);
          }
        };

        el.addEventListener('transitionend', cb);
      });
    });
    return function () {
      var rawProps = (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_2__.toRaw)(props);
      var cssTransitionProps = resolveTransitionProps(rawProps);
      var tag = rawProps.tag || _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.Fragment;
      prevChildren = children;
      children = slots["default"] ? (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.getTransitionRawChildren)(slots["default"]()) : [];

      for (var i = 0; i < children.length; i++) {
        var child = children[i];

        if (child.key != null) {
          (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.setTransitionHooks)(child, (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.resolveTransitionHooks)(child, cssTransitionProps, state, instance));
        } else if (true) {
          (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.warn)("<TransitionGroup> children must be keyed.");
        }
      }

      if (prevChildren) {
        for (var _i3 = 0; _i3 < prevChildren.length; _i3++) {
          var _child = prevChildren[_i3];
          (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.setTransitionHooks)(_child, (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.resolveTransitionHooks)(_child, cssTransitionProps, state, instance));
          positionMap.set(_child, _child.el.getBoundingClientRect());
        }
      }

      return (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.createVNode)(tag, null, children);
    };
  }
};
var TransitionGroup = TransitionGroupImpl;

function callPendingCbs(c) {
  var el = c.el;

  if (el._moveCb) {
    el._moveCb();
  }

  if (el._enterCb) {
    el._enterCb();
  }
}

function recordPosition(c) {
  newPositionMap.set(c, c.el.getBoundingClientRect());
}

function applyTranslation(c) {
  var oldPos = positionMap.get(c);
  var newPos = newPositionMap.get(c);
  var dx = oldPos.left - newPos.left;
  var dy = oldPos.top - newPos.top;

  if (dx || dy) {
    var s = c.el.style;
    s.transform = s.webkitTransform = "translate(".concat(dx, "px,").concat(dy, "px)");
    s.transitionDuration = '0s';
    return c;
  }
}

function hasCSSTransform(el, root, moveClass) {
  // Detect whether an element with the move class applied has
  // CSS transitions. Since the element may be inside an entering
  // transition at this very moment, we make a clone of it and remove
  // all other transition classes applied to ensure only the move class
  // is applied.
  var clone = el.cloneNode();

  if (el._vtc) {
    el._vtc.forEach(function (cls) {
      cls.split(/\s+/).forEach(function (c) {
        return c && clone.classList.remove(c);
      });
    });
  }

  moveClass.split(/\s+/).forEach(function (c) {
    return c && clone.classList.add(c);
  });
  clone.style.display = 'none';
  var container = root.nodeType === 1 ? root : root.parentNode;
  container.appendChild(clone);

  var _getTransitionInfo2 = getTransitionInfo(clone),
      hasTransform = _getTransitionInfo2.hasTransform;

  container.removeChild(clone);
  return hasTransform;
}

var getModelAssigner = function getModelAssigner(vnode) {
  var fn = vnode.props['onUpdate:modelValue'] || false;
  return (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(fn) ? function (value) {
    return (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.invokeArrayFns)(fn, value);
  } : fn;
};

function onCompositionStart(e) {
  e.target.composing = true;
}

function onCompositionEnd(e) {
  var target = e.target;

  if (target.composing) {
    target.composing = false;
    target.dispatchEvent(new Event('input'));
  }
} // We are exporting the v-model runtime directly as vnode hooks so that it can
// be tree-shaken in case v-model is never used.


var vModelText = {
  created: function created(el, _ref5, vnode) {
    var _ref5$modifiers = _ref5.modifiers,
        lazy = _ref5$modifiers.lazy,
        trim = _ref5$modifiers.trim,
        number = _ref5$modifiers.number;
    el._assign = getModelAssigner(vnode);
    var castToNumber = number || vnode.props && vnode.props.type === 'number';
    addEventListener(el, lazy ? 'change' : 'input', function (e) {
      if (e.target.composing) return;
      var domValue = el.value;

      if (trim) {
        domValue = domValue.trim();
      }

      if (castToNumber) {
        domValue = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.toNumber)(domValue);
      }

      el._assign(domValue);
    });

    if (trim) {
      addEventListener(el, 'change', function () {
        el.value = el.value.trim();
      });
    }

    if (!lazy) {
      addEventListener(el, 'compositionstart', onCompositionStart);
      addEventListener(el, 'compositionend', onCompositionEnd); // Safari < 10.2 & UIWebView doesn't fire compositionend when
      // switching focus before confirming composition choice
      // this also fixes the issue where some browsers e.g. iOS Chrome
      // fires "change" instead of "input" on autocomplete.

      addEventListener(el, 'change', onCompositionEnd);
    }
  },
  // set value on mounted so it's after min/max for type="range"
  mounted: function mounted(el, _ref6) {
    var value = _ref6.value;
    el.value = value == null ? '' : value;
  },
  beforeUpdate: function beforeUpdate(el, _ref7, vnode) {
    var value = _ref7.value,
        _ref7$modifiers = _ref7.modifiers,
        lazy = _ref7$modifiers.lazy,
        trim = _ref7$modifiers.trim,
        number = _ref7$modifiers.number;
    el._assign = getModelAssigner(vnode); // avoid clearing unresolved text. #2302

    if (el.composing) return;

    if (document.activeElement === el && el.type !== 'range') {
      if (lazy) {
        return;
      }

      if (trim && el.value.trim() === value) {
        return;
      }

      if ((number || el.type === 'number') && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.toNumber)(el.value) === value) {
        return;
      }
    }

    var newValue = value == null ? '' : value;

    if (el.value !== newValue) {
      el.value = newValue;
    }
  }
};
var vModelCheckbox = {
  // #4096 array checkboxes need to be deep traversed
  deep: true,
  created: function created(el, _, vnode) {
    el._assign = getModelAssigner(vnode);
    addEventListener(el, 'change', function () {
      var modelValue = el._modelValue;
      var elementValue = getValue(el);
      var checked = el.checked;
      var assign = el._assign;

      if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(modelValue)) {
        var index = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.looseIndexOf)(modelValue, elementValue);
        var found = index !== -1;

        if (checked && !found) {
          assign(modelValue.concat(elementValue));
        } else if (!checked && found) {
          var filtered = _toConsumableArray(modelValue);

          filtered.splice(index, 1);
          assign(filtered);
        }
      } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isSet)(modelValue)) {
        var cloned = new Set(modelValue);

        if (checked) {
          cloned.add(elementValue);
        } else {
          cloned["delete"](elementValue);
        }

        assign(cloned);
      } else {
        assign(getCheckboxValue(el, checked));
      }
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: setChecked,
  beforeUpdate: function beforeUpdate(el, binding, vnode) {
    el._assign = getModelAssigner(vnode);
    setChecked(el, binding, vnode);
  }
};

function setChecked(el, _ref8, vnode) {
  var value = _ref8.value,
      oldValue = _ref8.oldValue;
  el._modelValue = value;

  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(value)) {
    el.checked = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.looseIndexOf)(value, vnode.props.value) > -1;
  } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isSet)(value)) {
    el.checked = value.has(vnode.props.value);
  } else if (value !== oldValue) {
    el.checked = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.looseEqual)(value, getCheckboxValue(el, true));
  }
}

var vModelRadio = {
  created: function created(el, _ref9, vnode) {
    var value = _ref9.value;
    el.checked = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.looseEqual)(value, vnode.props.value);
    el._assign = getModelAssigner(vnode);
    addEventListener(el, 'change', function () {
      el._assign(getValue(el));
    });
  },
  beforeUpdate: function beforeUpdate(el, _ref10, vnode) {
    var value = _ref10.value,
        oldValue = _ref10.oldValue;
    el._assign = getModelAssigner(vnode);

    if (value !== oldValue) {
      el.checked = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.looseEqual)(value, vnode.props.value);
    }
  }
};
var vModelSelect = {
  // <select multiple> value need to be deep traversed
  deep: true,
  created: function created(el, _ref11, vnode) {
    var value = _ref11.value,
        number = _ref11.modifiers.number;
    var isSetModel = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isSet)(value);
    addEventListener(el, 'change', function () {
      var selectedVal = Array.prototype.filter.call(el.options, function (o) {
        return o.selected;
      }).map(function (o) {
        return number ? (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.toNumber)(getValue(o)) : getValue(o);
      });

      el._assign(el.multiple ? isSetModel ? new Set(selectedVal) : selectedVal : selectedVal[0]);
    });
    el._assign = getModelAssigner(vnode);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted: function mounted(el, _ref12) {
    var value = _ref12.value;
    setSelected(el, value);
  },
  beforeUpdate: function beforeUpdate(el, _binding, vnode) {
    el._assign = getModelAssigner(vnode);
  },
  updated: function updated(el, _ref13) {
    var value = _ref13.value;
    setSelected(el, value);
  }
};

function setSelected(el, value) {
  var isMultiple = el.multiple;

  if (isMultiple && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(value) && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isSet)(value)) {
     true && (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.warn)("<select multiple v-model> expects an Array or Set value for its binding, " + "but got ".concat(Object.prototype.toString.call(value).slice(8, -1), "."));
    return;
  }

  for (var i = 0, l = el.options.length; i < l; i++) {
    var option = el.options[i];
    var optionValue = getValue(option);

    if (isMultiple) {
      if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(value)) {
        option.selected = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.looseIndexOf)(value, optionValue) > -1;
      } else {
        option.selected = value.has(optionValue);
      }
    } else {
      if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.looseEqual)(getValue(option), value)) {
        if (el.selectedIndex !== i) el.selectedIndex = i;
        return;
      }
    }
  }

  if (!isMultiple && el.selectedIndex !== -1) {
    el.selectedIndex = -1;
  }
} // retrieve raw value set via :value bindings


function getValue(el) {
  return '_value' in el ? el._value : el.value;
} // retrieve raw value for true-value and false-value set via :true-value or :false-value bindings


function getCheckboxValue(el, checked) {
  var key = checked ? '_trueValue' : '_falseValue';
  return key in el ? el[key] : checked;
}

var vModelDynamic = {
  created: function created(el, binding, vnode) {
    callModelHook(el, binding, vnode, null, 'created');
  },
  mounted: function mounted(el, binding, vnode) {
    callModelHook(el, binding, vnode, null, 'mounted');
  },
  beforeUpdate: function beforeUpdate(el, binding, vnode, prevVNode) {
    callModelHook(el, binding, vnode, prevVNode, 'beforeUpdate');
  },
  updated: function updated(el, binding, vnode, prevVNode) {
    callModelHook(el, binding, vnode, prevVNode, 'updated');
  }
};

function resolveDynamicModel(tagName, type) {
  switch (tagName) {
    case 'SELECT':
      return vModelSelect;

    case 'TEXTAREA':
      return vModelText;

    default:
      switch (type) {
        case 'checkbox':
          return vModelCheckbox;

        case 'radio':
          return vModelRadio;

        default:
          return vModelText;
      }

  }
}

function callModelHook(el, binding, vnode, prevVNode, hook) {
  var modelToUse = resolveDynamicModel(el.tagName, vnode.props && vnode.props.type);
  var fn = modelToUse[hook];
  fn && fn(el, binding, vnode, prevVNode);
} // SSR vnode transforms, only used when user includes client-oriented render
// function in SSR


function initVModelForSSR() {
  vModelText.getSSRProps = function (_ref14) {
    var value = _ref14.value;
    return {
      value: value
    };
  };

  vModelRadio.getSSRProps = function (_ref15, vnode) {
    var value = _ref15.value;

    if (vnode.props && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.looseEqual)(vnode.props.value, value)) {
      return {
        checked: true
      };
    }
  };

  vModelCheckbox.getSSRProps = function (_ref16, vnode) {
    var value = _ref16.value;

    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(value)) {
      if (vnode.props && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.looseIndexOf)(value, vnode.props.value) > -1) {
        return {
          checked: true
        };
      }
    } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isSet)(value)) {
      if (vnode.props && value.has(vnode.props.value)) {
        return {
          checked: true
        };
      }
    } else if (value) {
      return {
        checked: true
      };
    }
  };

  vModelDynamic.getSSRProps = function (binding, vnode) {
    if (typeof vnode.type !== 'string') {
      return;
    }

    var modelToUse = resolveDynamicModel( // resolveDynamicModel expects an uppercase tag name, but vnode.type is lowercase
    vnode.type.toUpperCase(), vnode.props && vnode.props.type);

    if (modelToUse.getSSRProps) {
      return modelToUse.getSSRProps(binding, vnode);
    }
  };
}

var systemModifiers = ['ctrl', 'shift', 'alt', 'meta'];
var modifierGuards = {
  stop: function stop(e) {
    return e.stopPropagation();
  },
  prevent: function prevent(e) {
    return e.preventDefault();
  },
  self: function self(e) {
    return e.target !== e.currentTarget;
  },
  ctrl: function ctrl(e) {
    return !e.ctrlKey;
  },
  shift: function shift(e) {
    return !e.shiftKey;
  },
  alt: function alt(e) {
    return !e.altKey;
  },
  meta: function meta(e) {
    return !e.metaKey;
  },
  left: function left(e) {
    return 'button' in e && e.button !== 0;
  },
  middle: function middle(e) {
    return 'button' in e && e.button !== 1;
  },
  right: function right(e) {
    return 'button' in e && e.button !== 2;
  },
  exact: function exact(e, modifiers) {
    return systemModifiers.some(function (m) {
      return e["".concat(m, "Key")] && !modifiers.includes(m);
    });
  }
};
/**
 * @private
 */

var withModifiers = function withModifiers(fn, modifiers) {
  return function (event) {
    for (var i = 0; i < modifiers.length; i++) {
      var guard = modifierGuards[modifiers[i]];
      if (guard && guard(event, modifiers)) return;
    }

    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key4 = 1; _key4 < _len2; _key4++) {
      args[_key4 - 1] = arguments[_key4];
    }

    return fn.apply(void 0, [event].concat(args));
  };
}; // Kept for 2.x compat.
// Note: IE11 compat for `spacebar` and `del` is removed for now.


var keyNames = {
  esc: 'escape',
  space: ' ',
  up: 'arrow-up',
  left: 'arrow-left',
  right: 'arrow-right',
  down: 'arrow-down',
  "delete": 'backspace'
};
/**
 * @private
 */

var withKeys = function withKeys(fn, modifiers) {
  return function (event) {
    if (!('key' in event)) {
      return;
    }

    var eventKey = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hyphenate)(event.key);

    if (modifiers.some(function (k) {
      return k === eventKey || keyNames[k] === eventKey;
    })) {
      return fn(event);
    }
  };
};

var vShow = {
  beforeMount: function beforeMount(el, _ref17, _ref18) {
    var value = _ref17.value;
    var transition = _ref18.transition;
    el._vod = el.style.display === 'none' ? '' : el.style.display;

    if (transition && value) {
      transition.beforeEnter(el);
    } else {
      setDisplay(el, value);
    }
  },
  mounted: function mounted(el, _ref19, _ref20) {
    var value = _ref19.value;
    var transition = _ref20.transition;

    if (transition && value) {
      transition.enter(el);
    }
  },
  updated: function updated(el, _ref21, _ref22) {
    var value = _ref21.value,
        oldValue = _ref21.oldValue;
    var transition = _ref22.transition;
    if (!value === !oldValue) return;

    if (transition) {
      if (value) {
        transition.beforeEnter(el);
        setDisplay(el, true);
        transition.enter(el);
      } else {
        transition.leave(el, function () {
          setDisplay(el, false);
        });
      }
    } else {
      setDisplay(el, value);
    }
  },
  beforeUnmount: function beforeUnmount(el, _ref23) {
    var value = _ref23.value;
    setDisplay(el, value);
  }
};

function setDisplay(el, value) {
  el.style.display = value ? el._vod : 'none';
} // SSR vnode transforms, only used when user includes client-oriented render
// function in SSR


function initVShowForSSR() {
  vShow.getSSRProps = function (_ref24) {
    var value = _ref24.value;

    if (!value) {
      return {
        style: {
          display: 'none'
        }
      };
    }
  };
}

var rendererOptions = /*#__PURE__*/(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)({
  patchProp: patchProp
}, nodeOps); // lazy create the renderer - this makes core renderer logic tree-shakable
// in case the user only imports reactivity utilities from Vue.

var renderer;
var enabledHydration = false;

function ensureRenderer() {
  return renderer || (renderer = (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.createRenderer)(rendererOptions));
}

function ensureHydrationRenderer() {
  renderer = enabledHydration ? renderer : (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.createHydrationRenderer)(rendererOptions);
  enabledHydration = true;
  return renderer;
} // use explicit type casts here to avoid import() calls in rolled-up d.ts


var render = function render() {
  var _ensureRenderer;

  (_ensureRenderer = ensureRenderer()).render.apply(_ensureRenderer, arguments);
};

var hydrate = function hydrate() {
  var _ensureHydrationRende;

  (_ensureHydrationRende = ensureHydrationRenderer()).hydrate.apply(_ensureHydrationRende, arguments);
};

var createApp = function createApp() {
  var _ensureRenderer2;

  var app = (_ensureRenderer2 = ensureRenderer()).createApp.apply(_ensureRenderer2, arguments);

  if (true) {
    injectNativeTagCheck(app);
    injectCompilerOptionsCheck(app);
  }

  var mount = app.mount;

  app.mount = function (containerOrSelector) {
    var container = normalizeContainer(containerOrSelector);
    if (!container) return;
    var component = app._component;

    if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(component) && !component.render && !component.template) {
      // __UNSAFE__
      // Reason: potential execution of JS expressions in in-DOM template.
      // The user must make sure the in-DOM template is trusted. If it's
      // rendered by the server, the template should not contain any user data.
      component.template = container.innerHTML;
    } // clear content before mounting


    container.innerHTML = '';
    var proxy = mount(container, false, container instanceof SVGElement);

    if (container instanceof Element) {
      container.removeAttribute('v-cloak');
      container.setAttribute('data-v-app', '');
    }

    return proxy;
  };

  return app;
};

var createSSRApp = function createSSRApp() {
  var _ensureHydrationRende2;

  var app = (_ensureHydrationRende2 = ensureHydrationRenderer()).createApp.apply(_ensureHydrationRende2, arguments);

  if (true) {
    injectNativeTagCheck(app);
    injectCompilerOptionsCheck(app);
  }

  var mount = app.mount;

  app.mount = function (containerOrSelector) {
    var container = normalizeContainer(containerOrSelector);

    if (container) {
      return mount(container, true, container instanceof SVGElement);
    }
  };

  return app;
};

function injectNativeTagCheck(app) {
  // Inject `isNativeTag`
  // this is used for component name validation (dev only)
  Object.defineProperty(app.config, 'isNativeTag', {
    value: function value(tag) {
      return (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isHTMLTag)(tag) || (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isSVGTag)(tag);
    },
    writable: false
  });
} // dev only


function injectCompilerOptionsCheck(app) {
  if ((0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.isRuntimeOnly)()) {
    var isCustomElement = app.config.isCustomElement;
    Object.defineProperty(app.config, 'isCustomElement', {
      get: function get() {
        return isCustomElement;
      },
      set: function set() {
        (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.warn)("The `isCustomElement` config option is deprecated. Use " + "`compilerOptions.isCustomElement` instead.");
      }
    });
    var compilerOptions = app.config.compilerOptions;
    var msg = "The `compilerOptions` config option is only respected when using " + "a build of Vue.js that includes the runtime compiler (aka \"full build\"). " + "Since you are using the runtime-only build, `compilerOptions` " + "must be passed to `@vue/compiler-dom` in the build setup instead.\n" + "- For vue-loader: pass it via vue-loader's `compilerOptions` loader option.\n" + "- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n" + "- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-dom";
    Object.defineProperty(app.config, 'compilerOptions', {
      get: function get() {
        (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.warn)(msg);
        return compilerOptions;
      },
      set: function set() {
        (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.warn)(msg);
      }
    });
  }
}

function normalizeContainer(container) {
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(container)) {
    var res = document.querySelector(container);

    if ( true && !res) {
      (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.warn)("Failed to mount app: mount target selector \"".concat(container, "\" returned null."));
    }

    return res;
  }

  if ( true && window.ShadowRoot && container instanceof window.ShadowRoot && container.mode === 'closed') {
    (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.warn)("mounting on a ShadowRoot with `{mode: \"closed\"}` may lead to unpredictable bugs");
  }

  return container;
}

var ssrDirectiveInitialized = false;
/**
 * @internal
 */

var initDirectivesForSSR = function initDirectivesForSSR() {
  if (!ssrDirectiveInitialized) {
    ssrDirectiveInitialized = true;
    initVModelForSSR();
    initVShowForSSR();
  }
};



/***/ }),

/***/ "./node_modules/@vue/shared/dist/shared.esm-bundler.js":
/*!*************************************************************!*\
  !*** ./node_modules/@vue/shared/dist/shared.esm-bundler.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EMPTY_ARR": () => (/* binding */ EMPTY_ARR),
/* harmony export */   "EMPTY_OBJ": () => (/* binding */ EMPTY_OBJ),
/* harmony export */   "NO": () => (/* binding */ NO),
/* harmony export */   "NOOP": () => (/* binding */ NOOP),
/* harmony export */   "PatchFlagNames": () => (/* binding */ PatchFlagNames),
/* harmony export */   "camelize": () => (/* binding */ camelize),
/* harmony export */   "capitalize": () => (/* binding */ capitalize),
/* harmony export */   "def": () => (/* binding */ def),
/* harmony export */   "escapeHtml": () => (/* binding */ escapeHtml),
/* harmony export */   "escapeHtmlComment": () => (/* binding */ escapeHtmlComment),
/* harmony export */   "extend": () => (/* binding */ extend),
/* harmony export */   "genPropsAccessExp": () => (/* binding */ genPropsAccessExp),
/* harmony export */   "generateCodeFrame": () => (/* binding */ generateCodeFrame),
/* harmony export */   "getGlobalThis": () => (/* binding */ getGlobalThis),
/* harmony export */   "hasChanged": () => (/* binding */ hasChanged),
/* harmony export */   "hasOwn": () => (/* binding */ hasOwn),
/* harmony export */   "hyphenate": () => (/* binding */ hyphenate),
/* harmony export */   "includeBooleanAttr": () => (/* binding */ includeBooleanAttr),
/* harmony export */   "invokeArrayFns": () => (/* binding */ invokeArrayFns),
/* harmony export */   "isArray": () => (/* binding */ isArray),
/* harmony export */   "isBooleanAttr": () => (/* binding */ isBooleanAttr),
/* harmony export */   "isBuiltInDirective": () => (/* binding */ isBuiltInDirective),
/* harmony export */   "isDate": () => (/* binding */ isDate),
/* harmony export */   "isFunction": () => (/* binding */ isFunction),
/* harmony export */   "isGloballyWhitelisted": () => (/* binding */ isGloballyWhitelisted),
/* harmony export */   "isHTMLTag": () => (/* binding */ isHTMLTag),
/* harmony export */   "isIntegerKey": () => (/* binding */ isIntegerKey),
/* harmony export */   "isKnownHtmlAttr": () => (/* binding */ isKnownHtmlAttr),
/* harmony export */   "isKnownSvgAttr": () => (/* binding */ isKnownSvgAttr),
/* harmony export */   "isMap": () => (/* binding */ isMap),
/* harmony export */   "isModelListener": () => (/* binding */ isModelListener),
/* harmony export */   "isNoUnitNumericStyleProp": () => (/* binding */ isNoUnitNumericStyleProp),
/* harmony export */   "isObject": () => (/* binding */ isObject),
/* harmony export */   "isOn": () => (/* binding */ isOn),
/* harmony export */   "isPlainObject": () => (/* binding */ isPlainObject),
/* harmony export */   "isPromise": () => (/* binding */ isPromise),
/* harmony export */   "isReservedProp": () => (/* binding */ isReservedProp),
/* harmony export */   "isSSRSafeAttrName": () => (/* binding */ isSSRSafeAttrName),
/* harmony export */   "isSVGTag": () => (/* binding */ isSVGTag),
/* harmony export */   "isSet": () => (/* binding */ isSet),
/* harmony export */   "isSpecialBooleanAttr": () => (/* binding */ isSpecialBooleanAttr),
/* harmony export */   "isString": () => (/* binding */ isString),
/* harmony export */   "isSymbol": () => (/* binding */ isSymbol),
/* harmony export */   "isVoidTag": () => (/* binding */ isVoidTag),
/* harmony export */   "looseEqual": () => (/* binding */ looseEqual),
/* harmony export */   "looseIndexOf": () => (/* binding */ looseIndexOf),
/* harmony export */   "makeMap": () => (/* binding */ makeMap),
/* harmony export */   "normalizeClass": () => (/* binding */ normalizeClass),
/* harmony export */   "normalizeProps": () => (/* binding */ normalizeProps),
/* harmony export */   "normalizeStyle": () => (/* binding */ normalizeStyle),
/* harmony export */   "objectToString": () => (/* binding */ objectToString),
/* harmony export */   "parseStringStyle": () => (/* binding */ parseStringStyle),
/* harmony export */   "propsToAttrMap": () => (/* binding */ propsToAttrMap),
/* harmony export */   "remove": () => (/* binding */ remove),
/* harmony export */   "slotFlagsText": () => (/* binding */ slotFlagsText),
/* harmony export */   "stringifyStyle": () => (/* binding */ stringifyStyle),
/* harmony export */   "toDisplayString": () => (/* binding */ toDisplayString),
/* harmony export */   "toHandlerKey": () => (/* binding */ toHandlerKey),
/* harmony export */   "toNumber": () => (/* binding */ toNumber),
/* harmony export */   "toRawType": () => (/* binding */ toRawType),
/* harmony export */   "toTypeString": () => (/* binding */ toTypeString)
/* harmony export */ });
var _PatchFlagNames, _slotFlagsText;

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 * IMPORTANT: all calls of this function must be prefixed with
 * \/\*#\_\_PURE\_\_\*\/
 * So that rollup can tree-shake them if necessary.
 */
function makeMap(str, expectsLowerCase) {
  var map = Object.create(null);
  var list = str.split(',');

  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }

  return expectsLowerCase ? function (val) {
    return !!map[val.toLowerCase()];
  } : function (val) {
    return !!map[val];
  };
}
/**
 * dev only flag -> name mapping
 */


var PatchFlagNames = (_PatchFlagNames = {}, _defineProperty(_PatchFlagNames, 1
/* TEXT */
, "TEXT"), _defineProperty(_PatchFlagNames, 2
/* CLASS */
, "CLASS"), _defineProperty(_PatchFlagNames, 4
/* STYLE */
, "STYLE"), _defineProperty(_PatchFlagNames, 8
/* PROPS */
, "PROPS"), _defineProperty(_PatchFlagNames, 16
/* FULL_PROPS */
, "FULL_PROPS"), _defineProperty(_PatchFlagNames, 32
/* HYDRATE_EVENTS */
, "HYDRATE_EVENTS"), _defineProperty(_PatchFlagNames, 64
/* STABLE_FRAGMENT */
, "STABLE_FRAGMENT"), _defineProperty(_PatchFlagNames, 128
/* KEYED_FRAGMENT */
, "KEYED_FRAGMENT"), _defineProperty(_PatchFlagNames, 256
/* UNKEYED_FRAGMENT */
, "UNKEYED_FRAGMENT"), _defineProperty(_PatchFlagNames, 512
/* NEED_PATCH */
, "NEED_PATCH"), _defineProperty(_PatchFlagNames, 1024
/* DYNAMIC_SLOTS */
, "DYNAMIC_SLOTS"), _defineProperty(_PatchFlagNames, 2048
/* DEV_ROOT_FRAGMENT */
, "DEV_ROOT_FRAGMENT"), _defineProperty(_PatchFlagNames, -1
/* HOISTED */
, "HOISTED"), _defineProperty(_PatchFlagNames, -2
/* BAIL */
, "BAIL"), _PatchFlagNames);
/**
 * Dev only
 */

var slotFlagsText = (_slotFlagsText = {}, _defineProperty(_slotFlagsText, 1
/* STABLE */
, 'STABLE'), _defineProperty(_slotFlagsText, 2
/* DYNAMIC */
, 'DYNAMIC'), _defineProperty(_slotFlagsText, 3
/* FORWARDED */
, 'FORWARDED'), _slotFlagsText);
var GLOBALS_WHITE_LISTED = 'Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,' + 'decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,' + 'Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt';
var isGloballyWhitelisted = /*#__PURE__*/makeMap(GLOBALS_WHITE_LISTED);
var range = 2;

function generateCodeFrame(source) {
  var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var end = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : source.length;
  // Split the content into individual lines but capture the newline sequence
  // that separated each line. This is important because the actual sequence is
  // needed to properly take into account the full line length for offset
  // comparison
  var lines = source.split(/(\r?\n)/); // Separate the lines and newline sequences into separate arrays for easier referencing

  var newlineSequences = lines.filter(function (_, idx) {
    return idx % 2 === 1;
  });
  lines = lines.filter(function (_, idx) {
    return idx % 2 === 0;
  });
  var count = 0;
  var res = [];

  for (var i = 0; i < lines.length; i++) {
    count += lines[i].length + (newlineSequences[i] && newlineSequences[i].length || 0);

    if (count >= start) {
      for (var j = i - range; j <= i + range || end > count; j++) {
        if (j < 0 || j >= lines.length) continue;
        var line = j + 1;
        res.push("".concat(line).concat(' '.repeat(Math.max(3 - String(line).length, 0)), "|  ").concat(lines[j]));
        var lineLength = lines[j].length;
        var newLineSeqLength = newlineSequences[j] && newlineSequences[j].length || 0;

        if (j === i) {
          // push underline
          var pad = start - (count - (lineLength + newLineSeqLength));
          var length = Math.max(1, end > count ? lineLength - pad : end - start);
          res.push("   |  " + ' '.repeat(pad) + '^'.repeat(length));
        } else if (j > i) {
          if (end > count) {
            var _length = Math.max(Math.min(end - count, lineLength), 1);

            res.push("   |  " + '^'.repeat(_length));
          }

          count += lineLength + newLineSeqLength;
        }
      }

      break;
    }
  }

  return res.join('\n');
}
/**
 * On the client we only need to offer special cases for boolean attributes that
 * have different names from their corresponding dom properties:
 * - itemscope -> N/A
 * - allowfullscreen -> allowFullscreen
 * - formnovalidate -> formNoValidate
 * - ismap -> isMap
 * - nomodule -> noModule
 * - novalidate -> noValidate
 * - readonly -> readOnly
 */


var specialBooleanAttrs = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly";
var isSpecialBooleanAttr = /*#__PURE__*/makeMap(specialBooleanAttrs);
/**
 * The full list is needed during SSR to produce the correct initial markup.
 */

var isBooleanAttr = /*#__PURE__*/makeMap(specialBooleanAttrs + ",async,autofocus,autoplay,controls,default,defer,disabled,hidden," + "loop,open,required,reversed,scoped,seamless," + "checked,muted,multiple,selected");
/**
 * Boolean attributes should be included if the value is truthy or ''.
 * e.g. `<select multiple>` compiles to `{ multiple: '' }`
 */

function includeBooleanAttr(value) {
  return !!value || value === '';
}

var unsafeAttrCharRE = /[>/="'\u0009\u000a\u000c\u0020]/;
var attrValidationCache = {};

function isSSRSafeAttrName(name) {
  if (attrValidationCache.hasOwnProperty(name)) {
    return attrValidationCache[name];
  }

  var isUnsafe = unsafeAttrCharRE.test(name);

  if (isUnsafe) {
    console.error("unsafe attribute name: ".concat(name));
  }

  return attrValidationCache[name] = !isUnsafe;
}

var propsToAttrMap = {
  acceptCharset: 'accept-charset',
  className: 'class',
  htmlFor: 'for',
  httpEquiv: 'http-equiv'
};
/**
 * CSS properties that accept plain numbers
 */

var isNoUnitNumericStyleProp = /*#__PURE__*/makeMap("animation-iteration-count,border-image-outset,border-image-slice," + "border-image-width,box-flex,box-flex-group,box-ordinal-group,column-count," + "columns,flex,flex-grow,flex-positive,flex-shrink,flex-negative,flex-order," + "grid-row,grid-row-end,grid-row-span,grid-row-start,grid-column," + "grid-column-end,grid-column-span,grid-column-start,font-weight,line-clamp," + "line-height,opacity,order,orphans,tab-size,widows,z-index,zoom," + // SVG
"fill-opacity,flood-opacity,stop-opacity,stroke-dasharray,stroke-dashoffset," + "stroke-miterlimit,stroke-opacity,stroke-width");
/**
 * Known attributes, this is used for stringification of runtime static nodes
 * so that we don't stringify bindings that cannot be set from HTML.
 * Don't also forget to allow `data-*` and `aria-*`!
 * Generated from https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes
 */

var isKnownHtmlAttr = /*#__PURE__*/makeMap("accept,accept-charset,accesskey,action,align,allow,alt,async," + "autocapitalize,autocomplete,autofocus,autoplay,background,bgcolor," + "border,buffered,capture,challenge,charset,checked,cite,class,code," + "codebase,color,cols,colspan,content,contenteditable,contextmenu,controls," + "coords,crossorigin,csp,data,datetime,decoding,default,defer,dir,dirname," + "disabled,download,draggable,dropzone,enctype,enterkeyhint,for,form," + "formaction,formenctype,formmethod,formnovalidate,formtarget,headers," + "height,hidden,high,href,hreflang,http-equiv,icon,id,importance,integrity," + "ismap,itemprop,keytype,kind,label,lang,language,loading,list,loop,low," + "manifest,max,maxlength,minlength,media,min,multiple,muted,name,novalidate," + "open,optimum,pattern,ping,placeholder,poster,preload,radiogroup,readonly," + "referrerpolicy,rel,required,reversed,rows,rowspan,sandbox,scope,scoped," + "selected,shape,size,sizes,slot,span,spellcheck,src,srcdoc,srclang,srcset," + "start,step,style,summary,tabindex,target,title,translate,type,usemap," + "value,width,wrap");
/**
 * Generated from https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute
 */

var isKnownSvgAttr = /*#__PURE__*/makeMap("xmlns,accent-height,accumulate,additive,alignment-baseline,alphabetic,amplitude," + "arabic-form,ascent,attributeName,attributeType,azimuth,baseFrequency," + "baseline-shift,baseProfile,bbox,begin,bias,by,calcMode,cap-height,class," + "clip,clipPathUnits,clip-path,clip-rule,color,color-interpolation," + "color-interpolation-filters,color-profile,color-rendering," + "contentScriptType,contentStyleType,crossorigin,cursor,cx,cy,d,decelerate," + "descent,diffuseConstant,direction,display,divisor,dominant-baseline,dur,dx," + "dy,edgeMode,elevation,enable-background,end,exponent,fill,fill-opacity," + "fill-rule,filter,filterRes,filterUnits,flood-color,flood-opacity," + "font-family,font-size,font-size-adjust,font-stretch,font-style," + "font-variant,font-weight,format,from,fr,fx,fy,g1,g2,glyph-name," + "glyph-orientation-horizontal,glyph-orientation-vertical,glyphRef," + "gradientTransform,gradientUnits,hanging,height,href,hreflang,horiz-adv-x," + "horiz-origin-x,id,ideographic,image-rendering,in,in2,intercept,k,k1,k2,k3," + "k4,kernelMatrix,kernelUnitLength,kerning,keyPoints,keySplines,keyTimes," + "lang,lengthAdjust,letter-spacing,lighting-color,limitingConeAngle,local," + "marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth," + "mask,maskContentUnits,maskUnits,mathematical,max,media,method,min,mode," + "name,numOctaves,offset,opacity,operator,order,orient,orientation,origin," + "overflow,overline-position,overline-thickness,panose-1,paint-order,path," + "pathLength,patternContentUnits,patternTransform,patternUnits,ping," + "pointer-events,points,pointsAtX,pointsAtY,pointsAtZ,preserveAlpha," + "preserveAspectRatio,primitiveUnits,r,radius,referrerPolicy,refX,refY,rel," + "rendering-intent,repeatCount,repeatDur,requiredExtensions,requiredFeatures," + "restart,result,rotate,rx,ry,scale,seed,shape-rendering,slope,spacing," + "specularConstant,specularExponent,speed,spreadMethod,startOffset," + "stdDeviation,stemh,stemv,stitchTiles,stop-color,stop-opacity," + "strikethrough-position,strikethrough-thickness,string,stroke," + "stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin," + "stroke-miterlimit,stroke-opacity,stroke-width,style,surfaceScale," + "systemLanguage,tabindex,tableValues,target,targetX,targetY,text-anchor," + "text-decoration,text-rendering,textLength,to,transform,transform-origin," + "type,u1,u2,underline-position,underline-thickness,unicode,unicode-bidi," + "unicode-range,units-per-em,v-alphabetic,v-hanging,v-ideographic," + "v-mathematical,values,vector-effect,version,vert-adv-y,vert-origin-x," + "vert-origin-y,viewBox,viewTarget,visibility,width,widths,word-spacing," + "writing-mode,x,x-height,x1,x2,xChannelSelector,xlink:actuate,xlink:arcrole," + "xlink:href,xlink:role,xlink:show,xlink:title,xlink:type,xml:base,xml:lang," + "xml:space,y,y1,y2,yChannelSelector,z,zoomAndPan");

function normalizeStyle(value) {
  if (isArray(value)) {
    var res = {};

    for (var i = 0; i < value.length; i++) {
      var item = value[i];
      var normalized = isString(item) ? parseStringStyle(item) : normalizeStyle(item);

      if (normalized) {
        for (var key in normalized) {
          res[key] = normalized[key];
        }
      }
    }

    return res;
  } else if (isString(value)) {
    return value;
  } else if (isObject(value)) {
    return value;
  }
}

var listDelimiterRE = /;(?![^(]*\))/g;
var propertyDelimiterRE = /:(.+)/;

function parseStringStyle(cssText) {
  var ret = {};
  cssText.split(listDelimiterRE).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiterRE);
      tmp.length > 1 && (ret[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return ret;
}

function stringifyStyle(styles) {
  var ret = '';

  if (!styles || isString(styles)) {
    return ret;
  }

  for (var key in styles) {
    var value = styles[key];
    var normalizedKey = key.startsWith("--") ? key : hyphenate(key);

    if (isString(value) || typeof value === 'number' && isNoUnitNumericStyleProp(normalizedKey)) {
      // only render valid values
      ret += "".concat(normalizedKey, ":").concat(value, ";");
    }
  }

  return ret;
}

function normalizeClass(value) {
  var res = '';

  if (isString(value)) {
    res = value;
  } else if (isArray(value)) {
    for (var i = 0; i < value.length; i++) {
      var normalized = normalizeClass(value[i]);

      if (normalized) {
        res += normalized + ' ';
      }
    }
  } else if (isObject(value)) {
    for (var name in value) {
      if (value[name]) {
        res += name + ' ';
      }
    }
  }

  return res.trim();
}

function normalizeProps(props) {
  if (!props) return null;
  var klass = props["class"],
      style = props.style;

  if (klass && !isString(klass)) {
    props["class"] = normalizeClass(klass);
  }

  if (style) {
    props.style = normalizeStyle(style);
  }

  return props;
} // These tag configs are shared between compiler-dom and runtime-dom, so they
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element


var HTML_TAGS = 'html,body,base,head,link,meta,style,title,address,article,aside,footer,' + 'header,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,' + 'figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,' + 'data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,' + 'time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,' + 'canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,' + 'th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,' + 'option,output,progress,select,textarea,details,dialog,menu,' + 'summary,template,blockquote,iframe,tfoot'; // https://developer.mozilla.org/en-US/docs/Web/SVG/Element

var SVG_TAGS = 'svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,' + 'defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,' + 'feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,' + 'feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,' + 'feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,' + 'fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,' + 'foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,' + 'mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,' + 'polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,' + 'text,textPath,title,tspan,unknown,use,view';
var VOID_TAGS = 'area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr';
/**
 * Compiler only.
 * Do NOT use in runtime code paths unless behind `(process.env.NODE_ENV !== 'production')` flag.
 */

var isHTMLTag = /*#__PURE__*/makeMap(HTML_TAGS);
/**
 * Compiler only.
 * Do NOT use in runtime code paths unless behind `(process.env.NODE_ENV !== 'production')` flag.
 */

var isSVGTag = /*#__PURE__*/makeMap(SVG_TAGS);
/**
 * Compiler only.
 * Do NOT use in runtime code paths unless behind `(process.env.NODE_ENV !== 'production')` flag.
 */

var isVoidTag = /*#__PURE__*/makeMap(VOID_TAGS);
var escapeRE = /["'&<>]/;

function escapeHtml(string) {
  var str = '' + string;
  var match = escapeRE.exec(str);

  if (!match) {
    return str;
  }

  var html = '';
  var escaped;
  var index;
  var lastIndex = 0;

  for (index = match.index; index < str.length; index++) {
    switch (str.charCodeAt(index)) {
      case 34:
        // "
        escaped = '&quot;';
        break;

      case 38:
        // &
        escaped = '&amp;';
        break;

      case 39:
        // '
        escaped = '&#39;';
        break;

      case 60:
        // <
        escaped = '&lt;';
        break;

      case 62:
        // >
        escaped = '&gt;';
        break;

      default:
        continue;
    }

    if (lastIndex !== index) {
      html += str.slice(lastIndex, index);
    }

    lastIndex = index + 1;
    html += escaped;
  }

  return lastIndex !== index ? html + str.slice(lastIndex, index) : html;
} // https://www.w3.org/TR/html52/syntax.html#comments


var commentStripRE = /^-?>|<!--|-->|--!>|<!-$/g;

function escapeHtmlComment(src) {
  return src.replace(commentStripRE, '');
}

function looseCompareArrays(a, b) {
  if (a.length !== b.length) return false;
  var equal = true;

  for (var i = 0; equal && i < a.length; i++) {
    equal = looseEqual(a[i], b[i]);
  }

  return equal;
}

function looseEqual(a, b) {
  if (a === b) return true;
  var aValidType = isDate(a);
  var bValidType = isDate(b);

  if (aValidType || bValidType) {
    return aValidType && bValidType ? a.getTime() === b.getTime() : false;
  }

  aValidType = isSymbol(a);
  bValidType = isSymbol(b);

  if (aValidType || bValidType) {
    return a === b;
  }

  aValidType = isArray(a);
  bValidType = isArray(b);

  if (aValidType || bValidType) {
    return aValidType && bValidType ? looseCompareArrays(a, b) : false;
  }

  aValidType = isObject(a);
  bValidType = isObject(b);

  if (aValidType || bValidType) {
    /* istanbul ignore if: this if will probably never be called */
    if (!aValidType || !bValidType) {
      return false;
    }

    var aKeysCount = Object.keys(a).length;
    var bKeysCount = Object.keys(b).length;

    if (aKeysCount !== bKeysCount) {
      return false;
    }

    for (var key in a) {
      var aHasKey = a.hasOwnProperty(key);
      var bHasKey = b.hasOwnProperty(key);

      if (aHasKey && !bHasKey || !aHasKey && bHasKey || !looseEqual(a[key], b[key])) {
        return false;
      }
    }
  }

  return String(a) === String(b);
}

function looseIndexOf(arr, val) {
  return arr.findIndex(function (item) {
    return looseEqual(item, val);
  });
}
/**
 * For converting {{ interpolation }} values to displayed strings.
 * @private
 */


var toDisplayString = function toDisplayString(val) {
  return isString(val) ? val : val == null ? '' : isArray(val) || isObject(val) && (val.toString === objectToString || !isFunction(val.toString)) ? JSON.stringify(val, replacer, 2) : String(val);
};

var replacer = function replacer(_key, val) {
  // can't use isRef here since @vue/shared has no deps
  if (val && val.__v_isRef) {
    return replacer(_key, val.value);
  } else if (isMap(val)) {
    return _defineProperty({}, "Map(".concat(val.size, ")"), _toConsumableArray(val.entries()).reduce(function (entries, _ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          key = _ref2[0],
          val = _ref2[1];

      entries["".concat(key, " =>")] = val;
      return entries;
    }, {}));
  } else if (isSet(val)) {
    return _defineProperty({}, "Set(".concat(val.size, ")"), _toConsumableArray(val.values()));
  } else if (isObject(val) && !isArray(val) && !isPlainObject(val)) {
    return String(val);
  }

  return val;
};

var EMPTY_OBJ =  true ? Object.freeze({}) : 0;
var EMPTY_ARR =  true ? Object.freeze([]) : 0;

var NOOP = function NOOP() {};
/**
 * Always return false.
 */


var NO = function NO() {
  return false;
};

var onRE = /^on[^a-z]/;

var isOn = function isOn(key) {
  return onRE.test(key);
};

var isModelListener = function isModelListener(key) {
  return key.startsWith('onUpdate:');
};

var extend = Object.assign;

var remove = function remove(arr, el) {
  var i = arr.indexOf(el);

  if (i > -1) {
    arr.splice(i, 1);
  }
};

var hasOwnProperty = Object.prototype.hasOwnProperty;

var hasOwn = function hasOwn(val, key) {
  return hasOwnProperty.call(val, key);
};

var isArray = Array.isArray;

var isMap = function isMap(val) {
  return toTypeString(val) === '[object Map]';
};

var isSet = function isSet(val) {
  return toTypeString(val) === '[object Set]';
};

var isDate = function isDate(val) {
  return toTypeString(val) === '[object Date]';
};

var isFunction = function isFunction(val) {
  return typeof val === 'function';
};

var isString = function isString(val) {
  return typeof val === 'string';
};

var isSymbol = function isSymbol(val) {
  return _typeof(val) === 'symbol';
};

var isObject = function isObject(val) {
  return val !== null && _typeof(val) === 'object';
};

var isPromise = function isPromise(val) {
  return isObject(val) && isFunction(val.then) && isFunction(val["catch"]);
};

var objectToString = Object.prototype.toString;

var toTypeString = function toTypeString(value) {
  return objectToString.call(value);
};

var toRawType = function toRawType(value) {
  // extract "RawType" from strings like "[object RawType]"
  return toTypeString(value).slice(8, -1);
};

var isPlainObject = function isPlainObject(val) {
  return toTypeString(val) === '[object Object]';
};

var isIntegerKey = function isIntegerKey(key) {
  return isString(key) && key !== 'NaN' && key[0] !== '-' && '' + parseInt(key, 10) === key;
};

var isReservedProp = /*#__PURE__*/makeMap( // the leading comma is intentional so empty string "" is also included
',key,ref,ref_for,ref_key,' + 'onVnodeBeforeMount,onVnodeMounted,' + 'onVnodeBeforeUpdate,onVnodeUpdated,' + 'onVnodeBeforeUnmount,onVnodeUnmounted');
var isBuiltInDirective = /*#__PURE__*/makeMap('bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo');

var cacheStringFunction = function cacheStringFunction(fn) {
  var cache = Object.create(null);
  return function (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
};

var camelizeRE = /-(\w)/g;
/**
 * @private
 */

var camelize = cacheStringFunction(function (str) {
  return str.replace(camelizeRE, function (_, c) {
    return c ? c.toUpperCase() : '';
  });
});
var hyphenateRE = /\B([A-Z])/g;
/**
 * @private
 */

var hyphenate = cacheStringFunction(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase();
});
/**
 * @private
 */

var capitalize = cacheStringFunction(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
});
/**
 * @private
 */

var toHandlerKey = cacheStringFunction(function (str) {
  return str ? "on".concat(capitalize(str)) : "";
}); // compare whether a value has changed, accounting for NaN.

var hasChanged = function hasChanged(value, oldValue) {
  return !Object.is(value, oldValue);
};

var invokeArrayFns = function invokeArrayFns(fns, arg) {
  for (var i = 0; i < fns.length; i++) {
    fns[i](arg);
  }
};

var def = function def(obj, key, value) {
  Object.defineProperty(obj, key, {
    configurable: true,
    enumerable: false,
    value: value
  });
};

var toNumber = function toNumber(val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n;
};

var _globalThis;

var getGlobalThis = function getGlobalThis() {
  return _globalThis || (_globalThis = typeof globalThis !== 'undefined' ? globalThis : typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : typeof __webpack_require__.g !== 'undefined' ? __webpack_require__.g : {});
};

var identRE = /^[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*$/;

function genPropsAccessExp(name) {
  return identRE.test(name) ? "__props.".concat(name) : "__props[".concat(JSON.stringify(name), "]");
}



/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/

module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url["default"] : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/vue/dist/vue.esm-bundler.js":
/*!**************************************************!*\
  !*** ./node_modules/vue/dist/vue.esm-bundler.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseTransition": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.BaseTransition),
/* harmony export */   "Comment": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.Comment),
/* harmony export */   "EffectScope": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.EffectScope),
/* harmony export */   "Fragment": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.Fragment),
/* harmony export */   "KeepAlive": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.KeepAlive),
/* harmony export */   "ReactiveEffect": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.ReactiveEffect),
/* harmony export */   "Static": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.Static),
/* harmony export */   "Suspense": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.Suspense),
/* harmony export */   "Teleport": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.Teleport),
/* harmony export */   "Text": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.Text),
/* harmony export */   "Transition": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.Transition),
/* harmony export */   "TransitionGroup": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.TransitionGroup),
/* harmony export */   "VueElement": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.VueElement),
/* harmony export */   "callWithAsyncErrorHandling": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.callWithAsyncErrorHandling),
/* harmony export */   "callWithErrorHandling": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.callWithErrorHandling),
/* harmony export */   "camelize": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.camelize),
/* harmony export */   "capitalize": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.capitalize),
/* harmony export */   "cloneVNode": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.cloneVNode),
/* harmony export */   "compatUtils": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.compatUtils),
/* harmony export */   "compile": () => (/* binding */ compileToFunction),
/* harmony export */   "computed": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.computed),
/* harmony export */   "createApp": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.createApp),
/* harmony export */   "createBlock": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.createBlock),
/* harmony export */   "createCommentVNode": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode),
/* harmony export */   "createElementBlock": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.createElementBlock),
/* harmony export */   "createElementVNode": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.createElementVNode),
/* harmony export */   "createHydrationRenderer": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.createHydrationRenderer),
/* harmony export */   "createPropsRestProxy": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.createPropsRestProxy),
/* harmony export */   "createRenderer": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.createRenderer),
/* harmony export */   "createSSRApp": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.createSSRApp),
/* harmony export */   "createSlots": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.createSlots),
/* harmony export */   "createStaticVNode": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode),
/* harmony export */   "createTextVNode": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.createTextVNode),
/* harmony export */   "createVNode": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.createVNode),
/* harmony export */   "customRef": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.customRef),
/* harmony export */   "defineAsyncComponent": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent),
/* harmony export */   "defineComponent": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.defineComponent),
/* harmony export */   "defineCustomElement": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.defineCustomElement),
/* harmony export */   "defineEmits": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.defineEmits),
/* harmony export */   "defineExpose": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.defineExpose),
/* harmony export */   "defineProps": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.defineProps),
/* harmony export */   "defineSSRCustomElement": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.defineSSRCustomElement),
/* harmony export */   "devtools": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.devtools),
/* harmony export */   "effect": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.effect),
/* harmony export */   "effectScope": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.effectScope),
/* harmony export */   "getCurrentInstance": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.getCurrentInstance),
/* harmony export */   "getCurrentScope": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.getCurrentScope),
/* harmony export */   "getTransitionRawChildren": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.getTransitionRawChildren),
/* harmony export */   "guardReactiveProps": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.guardReactiveProps),
/* harmony export */   "h": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.h),
/* harmony export */   "handleError": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.handleError),
/* harmony export */   "hydrate": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.hydrate),
/* harmony export */   "initCustomFormatter": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.initCustomFormatter),
/* harmony export */   "initDirectivesForSSR": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.initDirectivesForSSR),
/* harmony export */   "inject": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.inject),
/* harmony export */   "isMemoSame": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.isMemoSame),
/* harmony export */   "isProxy": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.isProxy),
/* harmony export */   "isReactive": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.isReactive),
/* harmony export */   "isReadonly": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.isReadonly),
/* harmony export */   "isRef": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.isRef),
/* harmony export */   "isRuntimeOnly": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.isRuntimeOnly),
/* harmony export */   "isShallow": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.isShallow),
/* harmony export */   "isVNode": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.isVNode),
/* harmony export */   "markRaw": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.markRaw),
/* harmony export */   "mergeDefaults": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.mergeDefaults),
/* harmony export */   "mergeProps": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.mergeProps),
/* harmony export */   "nextTick": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.nextTick),
/* harmony export */   "normalizeClass": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.normalizeClass),
/* harmony export */   "normalizeProps": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.normalizeProps),
/* harmony export */   "normalizeStyle": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle),
/* harmony export */   "onActivated": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.onActivated),
/* harmony export */   "onBeforeMount": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.onBeforeMount),
/* harmony export */   "onBeforeUnmount": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.onBeforeUnmount),
/* harmony export */   "onBeforeUpdate": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.onBeforeUpdate),
/* harmony export */   "onDeactivated": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.onDeactivated),
/* harmony export */   "onErrorCaptured": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.onErrorCaptured),
/* harmony export */   "onMounted": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.onMounted),
/* harmony export */   "onRenderTracked": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.onRenderTracked),
/* harmony export */   "onRenderTriggered": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.onRenderTriggered),
/* harmony export */   "onScopeDispose": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.onScopeDispose),
/* harmony export */   "onServerPrefetch": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.onServerPrefetch),
/* harmony export */   "onUnmounted": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.onUnmounted),
/* harmony export */   "onUpdated": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.onUpdated),
/* harmony export */   "openBlock": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.openBlock),
/* harmony export */   "popScopeId": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.popScopeId),
/* harmony export */   "provide": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.provide),
/* harmony export */   "proxyRefs": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.proxyRefs),
/* harmony export */   "pushScopeId": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.pushScopeId),
/* harmony export */   "queuePostFlushCb": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.queuePostFlushCb),
/* harmony export */   "reactive": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.reactive),
/* harmony export */   "readonly": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.readonly),
/* harmony export */   "ref": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.ref),
/* harmony export */   "registerRuntimeCompiler": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.registerRuntimeCompiler),
/* harmony export */   "render": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "renderList": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.renderList),
/* harmony export */   "renderSlot": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.renderSlot),
/* harmony export */   "resolveComponent": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.resolveComponent),
/* harmony export */   "resolveDirective": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.resolveDirective),
/* harmony export */   "resolveDynamicComponent": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.resolveDynamicComponent),
/* harmony export */   "resolveFilter": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.resolveFilter),
/* harmony export */   "resolveTransitionHooks": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.resolveTransitionHooks),
/* harmony export */   "setBlockTracking": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.setBlockTracking),
/* harmony export */   "setDevtoolsHook": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.setDevtoolsHook),
/* harmony export */   "setTransitionHooks": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.setTransitionHooks),
/* harmony export */   "shallowReactive": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.shallowReactive),
/* harmony export */   "shallowReadonly": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.shallowReadonly),
/* harmony export */   "shallowRef": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.shallowRef),
/* harmony export */   "ssrContextKey": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.ssrContextKey),
/* harmony export */   "ssrUtils": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.ssrUtils),
/* harmony export */   "stop": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.stop),
/* harmony export */   "toDisplayString": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.toDisplayString),
/* harmony export */   "toHandlerKey": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.toHandlerKey),
/* harmony export */   "toHandlers": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.toHandlers),
/* harmony export */   "toRaw": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.toRaw),
/* harmony export */   "toRef": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.toRef),
/* harmony export */   "toRefs": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.toRefs),
/* harmony export */   "transformVNodeArgs": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.transformVNodeArgs),
/* harmony export */   "triggerRef": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.triggerRef),
/* harmony export */   "unref": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.unref),
/* harmony export */   "useAttrs": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.useAttrs),
/* harmony export */   "useCssModule": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.useCssModule),
/* harmony export */   "useCssVars": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.useCssVars),
/* harmony export */   "useSSRContext": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.useSSRContext),
/* harmony export */   "useSlots": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.useSlots),
/* harmony export */   "useTransitionState": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.useTransitionState),
/* harmony export */   "vModelCheckbox": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox),
/* harmony export */   "vModelDynamic": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.vModelDynamic),
/* harmony export */   "vModelRadio": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.vModelRadio),
/* harmony export */   "vModelSelect": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.vModelSelect),
/* harmony export */   "vModelText": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.vModelText),
/* harmony export */   "vShow": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.vShow),
/* harmony export */   "version": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.version),
/* harmony export */   "warn": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.warn),
/* harmony export */   "watch": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.watch),
/* harmony export */   "watchEffect": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.watchEffect),
/* harmony export */   "watchPostEffect": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.watchPostEffect),
/* harmony export */   "watchSyncEffect": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.watchSyncEffect),
/* harmony export */   "withAsyncContext": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.withAsyncContext),
/* harmony export */   "withCtx": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.withCtx),
/* harmony export */   "withDefaults": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.withDefaults),
/* harmony export */   "withDirectives": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.withDirectives),
/* harmony export */   "withKeys": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.withKeys),
/* harmony export */   "withMemo": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.withMemo),
/* harmony export */   "withModifiers": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.withModifiers),
/* harmony export */   "withScopeId": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.withScopeId)
/* harmony export */ });
/* harmony import */ var _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue/runtime-dom */ "./node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.js");
/* harmony import */ var _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vue/runtime-dom */ "./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js");
/* harmony import */ var _vue_compiler_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vue/compiler-dom */ "./node_modules/@vue/compiler-dom/dist/compiler-dom.esm-bundler.js");
/* harmony import */ var _vue_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vue/shared */ "./node_modules/@vue/shared/dist/shared.esm-bundler.js");






function initDev() {
  {
    (0,_vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.initCustomFormatter)();
  }
} // This entry is the "full-build" that includes both the runtime


if (true) {
  initDev();
}

var compileCache = Object.create(null);

function compileToFunction(template, options) {
  if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_2__.isString)(template)) {
    if (template.nodeType) {
      template = template.innerHTML;
    } else {
       true && (0,_vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.warn)("invalid template option: ", template);
      return _vue_shared__WEBPACK_IMPORTED_MODULE_2__.NOOP;
    }
  }

  var key = template;
  var cached = compileCache[key];

  if (cached) {
    return cached;
  }

  if (template[0] === '#') {
    var el = document.querySelector(template);

    if ( true && !el) {
      (0,_vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.warn)("Template element not found or is empty: ".concat(template));
    } // __UNSAFE__
    // Reason: potential execution of JS expressions in in-DOM template.
    // The user must make sure the in-DOM template is trusted. If it's rendered
    // by the server, the template should not contain any user data.


    template = el ? el.innerHTML : "";
  }

  var _compile = (0,_vue_compiler_dom__WEBPACK_IMPORTED_MODULE_3__.compile)(template, (0,_vue_shared__WEBPACK_IMPORTED_MODULE_2__.extend)({
    hoistStatic: true,
    onError:  true ? onError : 0,
    onWarn:  true ? function (e) {
      return onError(e, true);
    } : 0
  }, options)),
      code = _compile.code;

  function onError(err) {
    var asWarning = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var message = asWarning ? err.message : "Template compilation error: ".concat(err.message);
    var codeFrame = err.loc && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_2__.generateCodeFrame)(template, err.loc.start.offset, err.loc.end.offset);
    (0,_vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.warn)(codeFrame ? "".concat(message, "\n").concat(codeFrame) : message);
  } // The wildcard import results in a huge object with every export
  // with keys that cannot be mangled, and can be quite heavy size-wise.
  // In the global build we know `Vue` is available globally so we can avoid
  // the wildcard object.


  var render = new Function('Vue', code)(_vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__);
  render._rc = true;
  return compileCache[key] = render;
}

(0,_vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.registerRuntimeCompiler)(compileToFunction);


/***/ }),

/***/ "./src/js/element.js":
/*!***************************!*\
  !*** ./src/js/element.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/style.css */ "./src/css/style.css");
/* harmony import */ var _css_title_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/title.less */ "./src/css/title.less");
/* harmony import */ var _css_image_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/image.css */ "./src/css/image.css");
/* harmony import */ var _font_iconfont_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../font/iconfont.css */ "./src/font/iconfont.css");
/* harmony import */ var _img_2_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/2.jpg */ "./src/img/2.jpg");
 // webpack打包时，不认为css文件是一个模块，需要css-loader去处理一下
// import "css-loader!../css/style.css"
// xxx-loader! 意思是这个css需要用这个loader加载，现在更多是在webpack.config.js中配置





var divEl = document.createElement("div");
divEl.innerHTML = "hello world";
divEl.className = "title";
document.body.appendChild(divEl);
var bgDivEl = document.createElement("div");
bgDivEl.className = "image-bg";
document.body.appendChild(bgDivEl);
var imgEl = document.createElement("img");
imgEl.src = _img_2_jpg__WEBPACK_IMPORTED_MODULE_4__; // 不能写死路径

document.body.appendChild(imgEl);
var iEl = document.createElement("i");
iEl.className = "iconfont icon-ashbin";
document.body.appendChild(iEl);
var appEl = document.createElement("div");
appEl.id = "app";
document.body.appendChild(appEl);

/***/ }),

/***/ "./src/js/format.js":
/*!**************************!*\
  !*** ./src/js/format.js ***!
  \**************************/
/***/ ((module) => {

var priceFormat = function priceFormat() {
  return "$0.00";
}; // Common.js导出


module.exports = {
  priceFormat: priceFormat
};

/***/ }),

/***/ "./src/js/math.js":
/*!************************!*\
  !*** ./src/js/math.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sum": () => (/* binding */ sum)
/* harmony export */ });
// ES module 导出
function sum(a, b) {
  return a + b;
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/css/title.less":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/css/title.less ***!
  \*********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".title {\n  background-color: paleturquoise;\n  text-decoration: underline;\n}\n", "",{"version":3,"sources":["webpack://./src/css/title.less"],"names":[],"mappings":"AAGA;EACC,+BAAA;EACA,0BAAA;AAFD","sourcesContent":["@bgColor: paleturquoise;\n@textDecoration: underline;\n\n.title {\n\tbackground-color: @bgColor;\n\ttext-decoration: @textDecoration;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/image.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/image.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../img/1.png */ "./src/img/1.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".image-bg {\n\twidth: 200px;\n\theight: 200px;\n\tbackground-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n\tbackground-size: contain;\n}\n", "",{"version":3,"sources":["webpack://./src/css/image.css"],"names":[],"mappings":"AAAA;CACC,YAAY;CACZ,aAAa;CACb,yDAAmC;CACnC,wBAAwB;AACzB","sourcesContent":[".image-bg {\n\twidth: 200px;\n\theight: 200px;\n\tbackground-image: url(../img/1.png);\n\tbackground-size: contain;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".title {\n\tfont-size: 40px;\n\tfont-weight: bold;\n\tcolor: darkred;\n}\n", "",{"version":3,"sources":["webpack://./src/css/style.css"],"names":[],"mappings":"AAAA;CACC,eAAe;CACf,iBAAiB;CACjB,cAAc;AACf","sourcesContent":[".title {\n\tfont-size: 40px;\n\tfont-weight: bold;\n\tcolor: darkred;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/font/iconfont.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/font/iconfont.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! iconfont.eot?t=1611048831079 */ "./src/font/iconfont.eot?t=1611048831079"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! iconfont.woff2?t=1611048831079 */ "./src/font/iconfont.woff2?t=1611048831079"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! iconfont.woff?t=1611048831079 */ "./src/font/iconfont.woff?t=1611048831079"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! iconfont.ttf?t=1611048831079 */ "./src/font/iconfont.ttf?t=1611048831079"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___, { hash: "#iefix" });
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {font-family: \"iconfont\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + "); /* IE9 */\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format('embedded-opentype'), /* IE6-IE8 */\n  url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format('woff2'),\n  url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format('woff'),\n  url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") format('truetype')\n}\n\n.iconfont {\n  font-family: \"iconfont\" !important;\n  font-size: 16px;\n  font-style: normal;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.icon-ashbin:before {\n  font-size: 30px;\n  content: \"\\e665\";\n}\n\n.icon-caps-lock:before {\n  content: \"\\e667\";\n}\n\n", "",{"version":3,"sources":["webpack://./src/font/iconfont.css"],"names":[],"mappings":"AAAA,YAAY,uBAAuB;EACjC,4CAAwC,EAAE,QAAQ;EAClD;;;;AAIF;;AAEA;EACE,kCAAkC;EAClC,eAAe;EACf,kBAAkB;EAClB,mCAAmC;EACnC,kCAAkC;AACpC;;AAEA;EACE,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;AAClB","sourcesContent":["@font-face {font-family: \"iconfont\";\n  src: url('iconfont.eot?t=1611048831079'); /* IE9 */\n  src: url('iconfont.eot?t=1611048831079#iefix') format('embedded-opentype'), /* IE6-IE8 */\n  url('iconfont.woff2?t=1611048831079') format('woff2'),\n  url('iconfont.woff?t=1611048831079') format('woff'),\n  url('iconfont.ttf?t=1611048831079') format('truetype')\n}\n\n.iconfont {\n  font-family: \"iconfont\" !important;\n  font-size: 16px;\n  font-style: normal;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.icon-ashbin:before {\n  font-size: 30px;\n  content: \"\\e665\";\n}\n\n.icon-caps-lock:before {\n  content: \"\\e667\";\n}\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/css/title.less":
/*!****************************!*\
  !*** ./src/css/title.less ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_title_less__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/less-loader/dist/cjs.js!./title.less */ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/css/title.less");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_title_less__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_title_less__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_title_less__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_title_less__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/image.css":
/*!***************************!*\
  !*** ./src/css/image.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_image_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./image.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/image.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_image_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_image_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_image_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_image_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/font/iconfont.css":
/*!*******************************!*\
  !*** ./src/font/iconfont.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_iconfont_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./iconfont.css */ "./node_modules/css-loader/dist/cjs.js!./src/font/iconfont.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_iconfont_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_iconfont_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_iconfont_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_iconfont_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/font/iconfont.eot?t=1611048831079":
/*!***********************************************!*\
  !*** ./src/font/iconfont.eot?t=1611048831079 ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "font/iconfont_54752c..eot";

/***/ }),

/***/ "./src/font/iconfont.ttf?t=1611048831079":
/*!***********************************************!*\
  !*** ./src/font/iconfont.ttf?t=1611048831079 ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "font/iconfont_c1191d..ttf";

/***/ }),

/***/ "./src/font/iconfont.woff2?t=1611048831079":
/*!*************************************************!*\
  !*** ./src/font/iconfont.woff2?t=1611048831079 ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "font/iconfont_c79391..woff2";

/***/ }),

/***/ "./src/font/iconfont.woff?t=1611048831079":
/*!************************************************!*\
  !*** ./src/font/iconfont.woff?t=1611048831079 ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "font/iconfont_9a10d9..woff";

/***/ }),

/***/ "./src/img/1.png":
/*!***********************!*\
  !*** ./src/img/1.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/1_42329c.png";

/***/ }),

/***/ "./src/img/2.jpg":
/*!***********************!*\
  !*** ./src/img/2.jpg ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/jpeg;base64,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";

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
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
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
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/math */ "./src/js/math.js");
/* harmony import */ var _js_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/element */ "./src/js/element.js");
/* harmony import */ var vue_dist_vue_esm_bundler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue/dist/vue.esm-bundler */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _require = __webpack_require__(/*! ./js/format */ "./src/js/format.js"),
    priceFormat = _require.priceFormat;

 // import { createApp } from "vue"


console.log((0,_js_math__WEBPACK_IMPORTED_MODULE_0__.sum)(1, 2));
console.log(priceFormat());
var app = (0,vue_dist_vue_esm_bundler__WEBPACK_IMPORTED_MODULE_2__.createApp)({
  template: "<h1>{{ msg }}</h1>",
  data: function data() {
    return {
      msg: "hello world"
    };
  }
});
app.mount("#app");
})();

/******/ })()
;
//# sourceMappingURL=main.js.map