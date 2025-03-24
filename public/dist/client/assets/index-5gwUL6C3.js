import { v as getAugmentedNamespace, w as requireReact, x as requireReactDom, y as requirePropTypes, z as getDefaultExportFromCjs } from "./index-DOKwj8w9.js";
function _mergeNamespaces(n, m) {
  for (var i = 0; i < m.length; i++) {
    const e = m[i];
    if (typeof e !== "string" && !Array.isArray(e)) {
      for (const k in e) {
        if (k !== "default" && !(k in n)) {
          const d = Object.getOwnPropertyDescriptor(e, k);
          if (d) {
            Object.defineProperty(n, k, d.get ? d : {
              enumerable: true,
              get: () => e[k]
            });
          }
        }
      }
    }
  }
  return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }));
}
var lib = {};
var CSSTransition = { exports: {} };
var addClass = { exports: {} };
var interopRequireDefault = { exports: {} };
var hasRequiredInteropRequireDefault;
function requireInteropRequireDefault() {
  if (hasRequiredInteropRequireDefault) return interopRequireDefault.exports;
  hasRequiredInteropRequireDefault = 1;
  (function(module) {
    function _interopRequireDefault(e) {
      return e && e.__esModule ? e : {
        "default": e
      };
    }
    module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;
  })(interopRequireDefault);
  return interopRequireDefault.exports;
}
var hasClass = { exports: {} };
var hasRequiredHasClass;
function requireHasClass() {
  if (hasRequiredHasClass) return hasClass.exports;
  hasRequiredHasClass = 1;
  (function(module, exports) {
    exports.__esModule = true;
    exports.default = hasClass2;
    function hasClass2(element, className) {
      if (element.classList) return !!className && element.classList.contains(className);
      else return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
    }
    module.exports = exports["default"];
  })(hasClass, hasClass.exports);
  return hasClass.exports;
}
var hasRequiredAddClass;
function requireAddClass() {
  if (hasRequiredAddClass) return addClass.exports;
  hasRequiredAddClass = 1;
  (function(module, exports) {
    var _interopRequireDefault = requireInteropRequireDefault();
    exports.__esModule = true;
    exports.default = addClass2;
    var _hasClass = _interopRequireDefault(requireHasClass());
    function addClass2(element, className) {
      if (element.classList) element.classList.add(className);
      else if (!(0, _hasClass.default)(element, className)) if (typeof element.className === "string") element.className = element.className + " " + className;
      else element.setAttribute("class", (element.className && element.className.baseVal || "") + " " + className);
    }
    module.exports = exports["default"];
  })(addClass, addClass.exports);
  return addClass.exports;
}
var removeClass;
var hasRequiredRemoveClass;
function requireRemoveClass() {
  if (hasRequiredRemoveClass) return removeClass;
  hasRequiredRemoveClass = 1;
  function replaceClassName(origClass, classToRemove) {
    return origClass.replace(new RegExp("(^|\\s)" + classToRemove + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "");
  }
  removeClass = function removeClass2(element, className) {
    if (element.classList) element.classList.remove(className);
    else if (typeof element.className === "string") element.className = replaceClassName(element.className, className);
    else element.setAttribute("class", replaceClassName(element.className && element.className.baseVal || "", className));
  };
  return removeClass;
}
var Transition = {};
function componentWillMount() {
  var state = this.constructor.getDerivedStateFromProps(this.props, this.state);
  if (state !== null && state !== void 0) {
    this.setState(state);
  }
}
function componentWillReceiveProps(nextProps) {
  function updater(prevState) {
    var state = this.constructor.getDerivedStateFromProps(nextProps, prevState);
    return state !== null && state !== void 0 ? state : null;
  }
  this.setState(updater.bind(this));
}
function componentWillUpdate(nextProps, nextState) {
  try {
    var prevProps = this.props;
    var prevState = this.state;
    this.props = nextProps;
    this.state = nextState;
    this.__reactInternalSnapshotFlag = true;
    this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(
      prevProps,
      prevState
    );
  } finally {
    this.props = prevProps;
    this.state = prevState;
  }
}
componentWillMount.__suppressDeprecationWarning = true;
componentWillReceiveProps.__suppressDeprecationWarning = true;
componentWillUpdate.__suppressDeprecationWarning = true;
function polyfill(Component) {
  var prototype = Component.prototype;
  if (!prototype || !prototype.isReactComponent) {
    throw new Error("Can only polyfill class components");
  }
  if (typeof Component.getDerivedStateFromProps !== "function" && typeof prototype.getSnapshotBeforeUpdate !== "function") {
    return Component;
  }
  var foundWillMountName = null;
  var foundWillReceivePropsName = null;
  var foundWillUpdateName = null;
  if (typeof prototype.componentWillMount === "function") {
    foundWillMountName = "componentWillMount";
  } else if (typeof prototype.UNSAFE_componentWillMount === "function") {
    foundWillMountName = "UNSAFE_componentWillMount";
  }
  if (typeof prototype.componentWillReceiveProps === "function") {
    foundWillReceivePropsName = "componentWillReceiveProps";
  } else if (typeof prototype.UNSAFE_componentWillReceiveProps === "function") {
    foundWillReceivePropsName = "UNSAFE_componentWillReceiveProps";
  }
  if (typeof prototype.componentWillUpdate === "function") {
    foundWillUpdateName = "componentWillUpdate";
  } else if (typeof prototype.UNSAFE_componentWillUpdate === "function") {
    foundWillUpdateName = "UNSAFE_componentWillUpdate";
  }
  if (foundWillMountName !== null || foundWillReceivePropsName !== null || foundWillUpdateName !== null) {
    var componentName = Component.displayName || Component.name;
    var newApiName = typeof Component.getDerivedStateFromProps === "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
    throw Error(
      "Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n" + componentName + " uses " + newApiName + " but also contains the following legacy lifecycles:" + (foundWillMountName !== null ? "\n  " + foundWillMountName : "") + (foundWillReceivePropsName !== null ? "\n  " + foundWillReceivePropsName : "") + (foundWillUpdateName !== null ? "\n  " + foundWillUpdateName : "") + "\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks"
    );
  }
  if (typeof Component.getDerivedStateFromProps === "function") {
    prototype.componentWillMount = componentWillMount;
    prototype.componentWillReceiveProps = componentWillReceiveProps;
  }
  if (typeof prototype.getSnapshotBeforeUpdate === "function") {
    if (typeof prototype.componentDidUpdate !== "function") {
      throw new Error(
        "Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype"
      );
    }
    prototype.componentWillUpdate = componentWillUpdate;
    var componentDidUpdate = prototype.componentDidUpdate;
    prototype.componentDidUpdate = function componentDidUpdatePolyfill(prevProps, prevState, maybeSnapshot) {
      var snapshot = this.__reactInternalSnapshotFlag ? this.__reactInternalSnapshot : maybeSnapshot;
      componentDidUpdate.call(this, prevProps, prevState, snapshot);
    };
  }
  return Component;
}
const reactLifecyclesCompat_es = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  polyfill
}, Symbol.toStringTag, { value: "Module" }));
const require$$3 = /* @__PURE__ */ getAugmentedNamespace(reactLifecyclesCompat_es);
var hasRequiredTransition;
function requireTransition() {
  if (hasRequiredTransition) return Transition;
  hasRequiredTransition = 1;
  Transition.__esModule = true;
  Transition.default = Transition.EXITING = Transition.ENTERED = Transition.ENTERING = Transition.EXITED = Transition.UNMOUNTED = void 0;
  var PropTypes = _interopRequireWildcard(/* @__PURE__ */ requirePropTypes());
  var _react = _interopRequireDefault(requireReact());
  var _reactDom = _interopRequireDefault(requireReactDom());
  var _reactLifecyclesCompat = require$$3;
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};
      if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};
            if (desc.get || desc.set) {
              Object.defineProperty(newObj, key, desc);
            } else {
              newObj[key] = obj[key];
            }
          }
        }
      }
      newObj.default = obj;
      return newObj;
    }
  }
  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }
    return target;
  }
  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }
  var UNMOUNTED = "unmounted";
  Transition.UNMOUNTED = UNMOUNTED;
  var EXITED = "exited";
  Transition.EXITED = EXITED;
  var ENTERING = "entering";
  Transition.ENTERING = ENTERING;
  var ENTERED = "entered";
  Transition.ENTERED = ENTERED;
  var EXITING = "exiting";
  Transition.EXITING = EXITING;
  var Transition$1 = /* @__PURE__ */ function(_React$Component) {
    _inheritsLoose(Transition2, _React$Component);
    function Transition2(props, context) {
      var _this;
      _this = _React$Component.call(this, props, context) || this;
      var parentGroup = context.transitionGroup;
      var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
      var initialStatus;
      _this.appearStatus = null;
      if (props.in) {
        if (appear) {
          initialStatus = EXITED;
          _this.appearStatus = ENTERING;
        } else {
          initialStatus = ENTERED;
        }
      } else {
        if (props.unmountOnExit || props.mountOnEnter) {
          initialStatus = UNMOUNTED;
        } else {
          initialStatus = EXITED;
        }
      }
      _this.state = {
        status: initialStatus
      };
      _this.nextCallback = null;
      return _this;
    }
    var _proto = Transition2.prototype;
    _proto.getChildContext = function getChildContext() {
      return {
        transitionGroup: null
        // allows for nested Transitions
      };
    };
    Transition2.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
      var nextIn = _ref.in;
      if (nextIn && prevState.status === UNMOUNTED) {
        return {
          status: EXITED
        };
      }
      return null;
    };
    _proto.componentDidMount = function componentDidMount() {
      this.updateStatus(true, this.appearStatus);
    };
    _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
      var nextStatus = null;
      if (prevProps !== this.props) {
        var status = this.state.status;
        if (this.props.in) {
          if (status !== ENTERING && status !== ENTERED) {
            nextStatus = ENTERING;
          }
        } else {
          if (status === ENTERING || status === ENTERED) {
            nextStatus = EXITING;
          }
        }
      }
      this.updateStatus(false, nextStatus);
    };
    _proto.componentWillUnmount = function componentWillUnmount() {
      this.cancelNextCallback();
    };
    _proto.getTimeouts = function getTimeouts() {
      var timeout2 = this.props.timeout;
      var exit, enter, appear;
      exit = enter = appear = timeout2;
      if (timeout2 != null && typeof timeout2 !== "number") {
        exit = timeout2.exit;
        enter = timeout2.enter;
        appear = timeout2.appear !== void 0 ? timeout2.appear : enter;
      }
      return {
        exit,
        enter,
        appear
      };
    };
    _proto.updateStatus = function updateStatus(mounting, nextStatus) {
      if (mounting === void 0) {
        mounting = false;
      }
      if (nextStatus !== null) {
        this.cancelNextCallback();
        var node = _reactDom.default.findDOMNode(this);
        if (nextStatus === ENTERING) {
          this.performEnter(node, mounting);
        } else {
          this.performExit(node);
        }
      } else if (this.props.unmountOnExit && this.state.status === EXITED) {
        this.setState({
          status: UNMOUNTED
        });
      }
    };
    _proto.performEnter = function performEnter(node, mounting) {
      var _this2 = this;
      var enter = this.props.enter;
      var appearing = this.context.transitionGroup ? this.context.transitionGroup.isMounting : mounting;
      var timeouts = this.getTimeouts();
      var enterTimeout = appearing ? timeouts.appear : timeouts.enter;
      if (!mounting && !enter) {
        this.safeSetState({
          status: ENTERED
        }, function() {
          _this2.props.onEntered(node);
        });
        return;
      }
      this.props.onEnter(node, appearing);
      this.safeSetState({
        status: ENTERING
      }, function() {
        _this2.props.onEntering(node, appearing);
        _this2.onTransitionEnd(node, enterTimeout, function() {
          _this2.safeSetState({
            status: ENTERED
          }, function() {
            _this2.props.onEntered(node, appearing);
          });
        });
      });
    };
    _proto.performExit = function performExit(node) {
      var _this3 = this;
      var exit = this.props.exit;
      var timeouts = this.getTimeouts();
      if (!exit) {
        this.safeSetState({
          status: EXITED
        }, function() {
          _this3.props.onExited(node);
        });
        return;
      }
      this.props.onExit(node);
      this.safeSetState({
        status: EXITING
      }, function() {
        _this3.props.onExiting(node);
        _this3.onTransitionEnd(node, timeouts.exit, function() {
          _this3.safeSetState({
            status: EXITED
          }, function() {
            _this3.props.onExited(node);
          });
        });
      });
    };
    _proto.cancelNextCallback = function cancelNextCallback() {
      if (this.nextCallback !== null) {
        this.nextCallback.cancel();
        this.nextCallback = null;
      }
    };
    _proto.safeSetState = function safeSetState(nextState, callback) {
      callback = this.setNextCallback(callback);
      this.setState(nextState, callback);
    };
    _proto.setNextCallback = function setNextCallback(callback) {
      var _this4 = this;
      var active = true;
      this.nextCallback = function(event) {
        if (active) {
          active = false;
          _this4.nextCallback = null;
          callback(event);
        }
      };
      this.nextCallback.cancel = function() {
        active = false;
      };
      return this.nextCallback;
    };
    _proto.onTransitionEnd = function onTransitionEnd(node, timeout2, handler) {
      this.setNextCallback(handler);
      var doesNotHaveTimeoutOrListener = timeout2 == null && !this.props.addEndListener;
      if (!node || doesNotHaveTimeoutOrListener) {
        setTimeout(this.nextCallback, 0);
        return;
      }
      if (this.props.addEndListener) {
        this.props.addEndListener(node, this.nextCallback);
      }
      if (timeout2 != null) {
        setTimeout(this.nextCallback, timeout2);
      }
    };
    _proto.render = function render() {
      var status = this.state.status;
      if (status === UNMOUNTED) {
        return null;
      }
      var _this$props = this.props, children = _this$props.children, childProps = _objectWithoutPropertiesLoose(_this$props, ["children"]);
      delete childProps.in;
      delete childProps.mountOnEnter;
      delete childProps.unmountOnExit;
      delete childProps.appear;
      delete childProps.enter;
      delete childProps.exit;
      delete childProps.timeout;
      delete childProps.addEndListener;
      delete childProps.onEnter;
      delete childProps.onEntering;
      delete childProps.onEntered;
      delete childProps.onExit;
      delete childProps.onExiting;
      delete childProps.onExited;
      if (typeof children === "function") {
        return children(status, childProps);
      }
      var child = _react.default.Children.only(children);
      return _react.default.cloneElement(child, childProps);
    };
    return Transition2;
  }(_react.default.Component);
  Transition$1.contextTypes = {
    transitionGroup: PropTypes.object
  };
  Transition$1.childContextTypes = {
    transitionGroup: function transitionGroup() {
    }
  };
  Transition$1.propTypes = {};
  function noop() {
  }
  Transition$1.defaultProps = {
    in: false,
    mountOnEnter: false,
    unmountOnExit: false,
    appear: false,
    enter: true,
    exit: true,
    onEnter: noop,
    onEntering: noop,
    onEntered: noop,
    onExit: noop,
    onExiting: noop,
    onExited: noop
  };
  Transition$1.UNMOUNTED = 0;
  Transition$1.EXITED = 1;
  Transition$1.ENTERING = 2;
  Transition$1.ENTERED = 3;
  Transition$1.EXITING = 4;
  var _default = (0, _reactLifecyclesCompat.polyfill)(Transition$1);
  Transition.default = _default;
  return Transition;
}
var hasRequiredCSSTransition;
function requireCSSTransition() {
  if (hasRequiredCSSTransition) return CSSTransition.exports;
  hasRequiredCSSTransition = 1;
  (function(module, exports) {
    exports.__esModule = true;
    exports.default = void 0;
    _interopRequireWildcard(/* @__PURE__ */ requirePropTypes());
    var _addClass = _interopRequireDefault(requireAddClass());
    var _removeClass = _interopRequireDefault(requireRemoveClass());
    var _react = _interopRequireDefault(requireReact());
    var _Transition = _interopRequireDefault(/* @__PURE__ */ requireTransition());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) {
        return obj;
      } else {
        var newObj = {};
        if (obj != null) {
          for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
              var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};
              if (desc.get || desc.set) {
                Object.defineProperty(newObj, key, desc);
              } else {
                newObj[key] = obj[key];
              }
            }
          }
        }
        newObj.default = obj;
        return newObj;
      }
    }
    function _extends() {
      _extends = Object.assign || function(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      };
      return _extends.apply(this, arguments);
    }
    function _inheritsLoose(subClass, superClass) {
      subClass.prototype = Object.create(superClass.prototype);
      subClass.prototype.constructor = subClass;
      subClass.__proto__ = superClass;
    }
    var addClass2 = function addClass22(node, classes) {
      return node && classes && classes.split(" ").forEach(function(c) {
        return (0, _addClass.default)(node, c);
      });
    };
    var removeClass2 = function removeClass22(node, classes) {
      return node && classes && classes.split(" ").forEach(function(c) {
        return (0, _removeClass.default)(node, c);
      });
    };
    var CSSTransition2 = /* @__PURE__ */ function(_React$Component) {
      _inheritsLoose(CSSTransition22, _React$Component);
      function CSSTransition22() {
        var _this;
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
        _this.onEnter = function(node, appearing) {
          var _this$getClassNames = _this.getClassNames(appearing ? "appear" : "enter"), className = _this$getClassNames.className;
          _this.removeClasses(node, "exit");
          addClass2(node, className);
          if (_this.props.onEnter) {
            _this.props.onEnter(node, appearing);
          }
        };
        _this.onEntering = function(node, appearing) {
          var _this$getClassNames2 = _this.getClassNames(appearing ? "appear" : "enter"), activeClassName = _this$getClassNames2.activeClassName;
          _this.reflowAndAddClass(node, activeClassName);
          if (_this.props.onEntering) {
            _this.props.onEntering(node, appearing);
          }
        };
        _this.onEntered = function(node, appearing) {
          var appearClassName = _this.getClassNames("appear").doneClassName;
          var enterClassName = _this.getClassNames("enter").doneClassName;
          var doneClassName = appearing ? appearClassName + " " + enterClassName : enterClassName;
          _this.removeClasses(node, appearing ? "appear" : "enter");
          addClass2(node, doneClassName);
          if (_this.props.onEntered) {
            _this.props.onEntered(node, appearing);
          }
        };
        _this.onExit = function(node) {
          var _this$getClassNames3 = _this.getClassNames("exit"), className = _this$getClassNames3.className;
          _this.removeClasses(node, "appear");
          _this.removeClasses(node, "enter");
          addClass2(node, className);
          if (_this.props.onExit) {
            _this.props.onExit(node);
          }
        };
        _this.onExiting = function(node) {
          var _this$getClassNames4 = _this.getClassNames("exit"), activeClassName = _this$getClassNames4.activeClassName;
          _this.reflowAndAddClass(node, activeClassName);
          if (_this.props.onExiting) {
            _this.props.onExiting(node);
          }
        };
        _this.onExited = function(node) {
          var _this$getClassNames5 = _this.getClassNames("exit"), doneClassName = _this$getClassNames5.doneClassName;
          _this.removeClasses(node, "exit");
          addClass2(node, doneClassName);
          if (_this.props.onExited) {
            _this.props.onExited(node);
          }
        };
        _this.getClassNames = function(type) {
          var classNames = _this.props.classNames;
          var isStringClassNames = typeof classNames === "string";
          var prefix = isStringClassNames && classNames ? classNames + "-" : "";
          var className = isStringClassNames ? prefix + type : classNames[type];
          var activeClassName = isStringClassNames ? className + "-active" : classNames[type + "Active"];
          var doneClassName = isStringClassNames ? className + "-done" : classNames[type + "Done"];
          return {
            className,
            activeClassName,
            doneClassName
          };
        };
        return _this;
      }
      var _proto = CSSTransition22.prototype;
      _proto.removeClasses = function removeClasses(node, type) {
        var _this$getClassNames6 = this.getClassNames(type), className = _this$getClassNames6.className, activeClassName = _this$getClassNames6.activeClassName, doneClassName = _this$getClassNames6.doneClassName;
        className && removeClass2(node, className);
        activeClassName && removeClass2(node, activeClassName);
        doneClassName && removeClass2(node, doneClassName);
      };
      _proto.reflowAndAddClass = function reflowAndAddClass(node, className) {
        if (className) {
          node && node.scrollTop;
          addClass2(node, className);
        }
      };
      _proto.render = function render() {
        var props = _extends({}, this.props);
        delete props.classNames;
        return _react.default.createElement(_Transition.default, _extends({}, props, {
          onEnter: this.onEnter,
          onEntered: this.onEntered,
          onEntering: this.onEntering,
          onExit: this.onExit,
          onExiting: this.onExiting,
          onExited: this.onExited
        }));
      };
      return CSSTransition22;
    }(_react.default.Component);
    CSSTransition2.defaultProps = {
      classNames: ""
    };
    CSSTransition2.propTypes = {};
    var _default = CSSTransition2;
    exports.default = _default;
    module.exports = exports["default"];
  })(CSSTransition, CSSTransition.exports);
  return CSSTransition.exports;
}
var hasRequiredLib;
function requireLib() {
  if (hasRequiredLib) return lib;
  hasRequiredLib = 1;
  Object.defineProperty(lib, "__esModule", {
    value: true
  });
  var _createClass = /* @__PURE__ */ function() {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    return function(Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();
  var _react = requireReact();
  var _react2 = _interopRequireDefault(_react);
  var _CSSTransition = /* @__PURE__ */ requireCSSTransition();
  var _CSSTransition2 = _interopRequireDefault(_CSSTransition);
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }
  var ModalVideo = function(_React$Component) {
    _inherits(ModalVideo2, _React$Component);
    function ModalVideo2(props) {
      _classCallCheck(this, ModalVideo2);
      var _this = _possibleConstructorReturn(this, (ModalVideo2.__proto__ || Object.getPrototypeOf(ModalVideo2)).call(this, props));
      _this.state = {
        isOpen: false,
        modalVideoWidth: "100%"
      };
      _this.closeModal = _this.closeModal.bind(_this);
      _this.updateFocus = _this.updateFocus.bind(_this);
      _this.timeout;
      return _this;
    }
    _createClass(ModalVideo2, [{
      key: "openModal",
      value: function openModal() {
        this.setState({ isOpen: true });
      }
    }, {
      key: "closeModal",
      value: function closeModal() {
        this.setState({ isOpen: false });
        if (typeof this.props.onClose === "function") {
          this.props.onClose();
        }
      }
    }, {
      key: "keydownHandler",
      value: function keydownHandler(e) {
        if (e.keyCode === 27) {
          this.closeModal();
        }
      }
    }, {
      key: "componentDidMount",
      value: function componentDidMount() {
        document.addEventListener("keydown", this.keydownHandler.bind(this));
        window.addEventListener("resize", this.resizeModalVideoWhenHeightGreaterThanWindowHeight.bind(this));
        this.setState({
          modalVideoWidth: this.getWidthFulfillAspectRatio(this.props.ratio, window.innerHeight, window.innerWidth)
        });
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        document.removeEventListener("keydown", this.keydownHandler.bind(this));
        window.removeEventListener("resize", this.resizeModalVideoWhenHeightGreaterThanWindowHeight.bind(this));
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate() {
        if (this.state.isOpen && this.modal) {
          this.modal.focus();
        }
      }
    }, {
      key: "updateFocus",
      value: function updateFocus(e) {
        if (e.keyCode === 9) {
          e.preventDefault();
          e.stopPropagation();
          if (this.modal === document.activeElement) {
            this.modalbtn.focus();
          } else {
            this.modal.focus();
          }
        }
      }
      /**
       * Resize modal-video-iframe-wrap when window size changed when the height of the video is greater than the height of the window.
       */
    }, {
      key: "resizeModalVideoWhenHeightGreaterThanWindowHeight",
      value: function resizeModalVideoWhenHeightGreaterThanWindowHeight() {
        var _this2 = this;
        clearTimeout(this.timeout);
        this.timeout = setTimeout(function() {
          var width = _this2.getWidthFulfillAspectRatio(_this2.props.ratio, window.innerHeight, window.innerWidth);
          if (_this2.state.modalVideoWidth != width) {
            _this2.setState({
              modalVideoWidth: width
            });
          }
        }, 10);
      }
    }, {
      key: "getQueryString",
      value: function getQueryString(obj) {
        var url = "";
        for (var key in obj) {
          if (obj.hasOwnProperty(key)) {
            if (obj[key] !== null) {
              url += key + "=" + obj[key] + "&";
            }
          }
        }
        return url.substr(0, url.length - 1);
      }
    }, {
      key: "getYoutubeUrl",
      value: function getYoutubeUrl(youtube, videoId) {
        var query = this.getQueryString(youtube);
        return "//www.youtube.com/embed/" + videoId + "?" + query;
      }
    }, {
      key: "getVimeoUrl",
      value: function getVimeoUrl(vimeo, videoId) {
        var query = this.getQueryString(vimeo);
        return "//player.vimeo.com/video/" + videoId + "?" + query;
      }
    }, {
      key: "getYoukuUrl",
      value: function getYoukuUrl(youku, videoId) {
        var query = this.getQueryString(youku);
        return "//player.youku.com/embed/" + videoId + "?" + query;
      }
    }, {
      key: "getVideoUrl",
      value: function getVideoUrl(opt, videoId) {
        if (opt.channel === "youtube") {
          return this.getYoutubeUrl(opt.youtube, videoId);
        } else if (opt.channel === "vimeo") {
          return this.getVimeoUrl(opt.vimeo, videoId);
        } else if (opt.channel === "youku") {
          return this.getYoukuUrl(opt.youku, videoId);
        } else if (opt.channel === "custom") {
          return opt.url;
        }
      }
    }, {
      key: "getPadding",
      value: function getPadding(ratio) {
        var arr = ratio.split(":");
        var width = Number(arr[0]);
        var height = Number(arr[1]);
        var padding = height * 100 / width;
        return padding + "%";
      }
      /**
       * Calculate the width of the video fulfill aspect ratio.
       * When the height of the video is greater than the height of the window,
       * this function return the width that fulfill the aspect ratio for the height of the window.
       * In other cases, this function return '100%'(the height relative to the width is determined by css).
       * 
       * @param string ratio
       * @param number maxWidth
       * @returns number | '100%'
       */
    }, {
      key: "getWidthFulfillAspectRatio",
      value: function getWidthFulfillAspectRatio(ratio, maxHeight, maxWidth) {
        var arr = ratio.split(":");
        var width = Number(arr[0]);
        var height = Number(arr[1]);
        var videoHeight = maxWidth * (height / width);
        if (maxHeight < videoHeight) {
          return Math.floor(width / height * maxHeight);
        }
        return "100%";
      }
    }, {
      key: "render",
      value: function render() {
        var _this3 = this;
        var modalVideoInnerStyle = {
          width: this.state.modalVideoWidth
        };
        var modalVideoIframeWrapStyle = {
          paddingBottom: this.getPadding(this.props.ratio)
        };
        return _react2.default.createElement(
          _CSSTransition2.default,
          {
            classNames: this.props.classNames.modalVideoEffect,
            timeout: this.props.animationSpeed
          },
          function() {
            if (!_this3.state.isOpen) {
              return null;
            }
            return _react2.default.createElement(
              "div",
              {
                className: _this3.props.classNames.modalVideo,
                tabIndex: "-1",
                role: "dialog",
                "aria-label": _this3.props.aria.openMessage,
                onClick: _this3.closeModal,
                ref: function ref(node) {
                  _this3.modal = node;
                },
                onKeyDown: _this3.updateFocus
              },
              _react2.default.createElement(
                "div",
                { className: _this3.props.classNames.modalVideoBody },
                _react2.default.createElement(
                  "div",
                  { className: _this3.props.classNames.modalVideoInner, style: modalVideoInnerStyle },
                  _react2.default.createElement(
                    "div",
                    { className: _this3.props.classNames.modalVideoIframeWrap, style: modalVideoIframeWrapStyle },
                    _react2.default.createElement("button", { className: _this3.props.classNames.modalVideoCloseBtn, "aria-label": _this3.props.aria.dismissBtnMessage, ref: function ref(node) {
                      _this3.modalbtn = node;
                    }, onKeyDown: _this3.updateFocus }),
                    _this3.props.children || _react2.default.createElement("iframe", { width: "460", height: "230", src: _this3.getVideoUrl(_this3.props, _this3.props.videoId), frameBorder: "0", allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture", allowFullScreen: _this3.props.allowFullScreen, tabIndex: "-1" })
                  )
                )
              )
            );
          }
        );
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function getDerivedStateFromProps(props) {
        return { isOpen: props.isOpen };
      }
    }]);
    return ModalVideo2;
  }(_react2.default.Component);
  lib.default = ModalVideo;
  ModalVideo.defaultProps = {
    channel: "youtube",
    isOpen: false,
    youtube: {
      autoplay: 1,
      cc_load_policy: 1,
      color: null,
      controls: 1,
      disablekb: 0,
      enablejsapi: 0,
      end: null,
      fs: 1,
      h1: null,
      iv_load_policy: 1,
      list: null,
      listType: null,
      loop: 0,
      modestbranding: null,
      origin: null,
      playlist: null,
      playsinline: null,
      rel: 0,
      showinfo: 1,
      start: 0,
      wmode: "transparent",
      theme: "dark",
      mute: 0
    },
    ratio: "16:9",
    vimeo: {
      api: false,
      autopause: true,
      autoplay: true,
      byline: true,
      callback: null,
      color: null,
      height: null,
      loop: false,
      maxheight: null,
      maxwidth: null,
      player_id: null,
      portrait: true,
      title: true,
      width: null,
      xhtml: false
    },
    youku: {
      autoplay: 1,
      show_related: 0
    },
    allowFullScreen: true,
    animationSpeed: 300,
    classNames: {
      modalVideoEffect: "modal-video-effect",
      modalVideo: "modal-video",
      modalVideoClose: "modal-video-close",
      modalVideoBody: "modal-video-body",
      modalVideoInner: "modal-video-inner",
      modalVideoIframeWrap: "modal-video-movie-wrap",
      modalVideoCloseBtn: "modal-video-close-btn"
    },
    aria: {
      openMessage: "You just opened the modal video",
      dismissBtnMessage: "Close the modal by clicking here"
    }
  };
  return lib;
}
var libExports = requireLib();
const index = /* @__PURE__ */ getDefaultExportFromCjs(libExports);
const index$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: index
}, [libExports]);
export {
  index$1 as i
};
