'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var modeluiCoreRuntime = require('modelui-core-runtime');
var React = require('react');
var BpmnJS = require('bpmn-js/dist/bpmn-viewer.development.js');
var BpmnJS$1 = require('bpmn-js/dist/bpmn-modeler.production.min.js');
require('bpmn-js/dist/assets/diagram-js.css');
require('bpmn-js/dist/assets/bpmn-font/css/bpmn.css');
var CmmnJS = require('cmmn-js/dist/cmmn-navigated-viewer.production.min.js');
var CmmnJS$1 = require('cmmn-js/dist/cmmn-modeler.production.min.js');
require('cmmn-js/dist/assets/diagram-js.css');
require('cmmn-js/dist/assets/cmmn-font/css/cmmn.css');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var BpmnJS__default = /*#__PURE__*/_interopDefaultLegacy(BpmnJS);
var BpmnJS__default$1 = /*#__PURE__*/_interopDefaultLegacy(BpmnJS$1);
var CmmnJS__default = /*#__PURE__*/_interopDefaultLegacy(CmmnJS);
var CmmnJS__default$1 = /*#__PURE__*/_interopDefaultLegacy(CmmnJS$1);

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }

  return target;
}

function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

var options = {
  "id": "BPMN",
  "$schema": "http://json-schema.org/draft-07/schema#",
  "description": "BPMN options",
  "x-layout": "component",
  "type": "object",
  "version": 0.1,
  "properties": {
    "backgroundColor": {
      "title": "backgroundColor",
      "description": "backgroundColor",
      "type": "string",
      "format": "color",
      "default": "white"
    }
  },
  "required": ["backgroundColor"]
};
function elementExtractInfo(self_state, buisinessEvent) {
  var definitionRef = buisinessEvent.definitionRef || {
    name: '',
    '$type': ''
  };
  var event_info = {
    id: self_state.id,
    selection: {
      bpmnId: buisinessEvent.id,
      bpmnType: buisinessEvent['$type'],
      label: definitionRef.name,
      define: {
        type: definitionRef['$type'],
        autoComplete: definitionRef.autoComplete,
        isBlocking: definitionRef.isBlocking
      }
    },
    selected: []
  };
  return event_info;
}

// event handler
// import EventManager from './Event';

var events$4 = {
  enabled: {
    alias: [],
    info: {
      name: 'Enabled',
      description: 'Enabled input'
    },
    schema: {}
  },
  disabled: {
    alias: [],
    info: {
      name: 'Disabled',
      description: 'Disabled input'
    },
    schema: {}
  },
  populating: {
    alias: [],
    info: {
      name: 'Populating',
      description: 'Populating value'
    },
    schema: {}
  },
  populated: {
    alias: [],
    info: {
      name: 'Populated',
      description: 'Populated value'
    },
    schema: {}
  },
  invalidated: {
    alias: [],
    info: {
      name: 'In-validated',
      description: 'Unselecting item'
    },
    schema: {}
  },
  validated: {
    alias: [],
    info: {
      name: 'De-Selected',
      description: 'Unselecting item'
    },
    schema: {}
  },
  /// here we have specific OMG
  changed: {
    alias: ['changed'],
    info: {
      name: 'changed',
      description: 'Diagram changed by user'
    },
    schema: {}
  },

  /*
  loading: {
    alias: ['opening', 'fetching', 'streaming'],
    info: {
      name: 'loading',
      description: 'Loading diagram'
    },
    schema: {}
  },
  loaded: {
    alias: ['opened', 'fetched', 'streamed'],
    info: {
      name: 'loaded',
      description: 'Loaded diagram'
    },
    schema: {}
  },
  */
  selected: {
    alias: [],
    info: {
      name: 'Selected',
      description: 'Selecting item'
    },
    schema: {}
  },
  tap: {
    alias: ['dblclick'],
    info: {
      name: 'Tap',
      description: 'Diagram element tapped'
    },
    schema: {}
  },
  'hover-over': {
    alias: [],
    info: {
      name: 'Hover over',
      description: 'Hover over element'
    },
    schema: {}
  },
  'hover-exit': {
    alias: [],
    info: {
      name: 'Hover exit',
      description: 'Hover exists element'
    },
    schema: {}
  },
  press: {
    alias: ['mouse-down'],
    info: {
      name: 'Press',
      description: 'Pressed element'
    },
    schema: {}
  },
  release: {
    alias: ['mouse-release'],
    info: {
      name: 'Release',
      description: 'Diagram element released'
    },
    schema: {}
  },
  cleared: {
    alias: ['removed', 'reset'],
    info: {
      name: 'cleared',
      description: 'Diagram area cleared'
    },
    schema: {}
  },
  submitted: {
    alias: ['exported', 'saved'],
    info: {
      name: 'submitted',
      description: 'Saved diagram'
    },
    schema: {}
  },
  failure: {
    alias: ['error', 'exception'],
    info: {
      name: 'failure',
      description: 'Error occured'
    },
    schema: {}
  }
};
var triggers$4 = {
  submit: {
    info: {
      name: 'Submit',
      description: 'Submits the form data'
    },
    schema: {},
    alias: []
  },
  enable: {
    info: {
      name: 'Enables',
      description: 'Enables the form so that we can change form inputs'
    },
    schema: {},
    alias: []
  },
  disable: {
    info: {
      name: 'Disable',
      description: 'Disables the form so that we can not change input value'
    },
    schema: {},
    alias: []
  },
  // change: { info: { name: 'Change', description: 'Changes' }, schema: {}, alias: [] },
  select: {
    info: {
      name: 'Select',
      description: 'Selects item by id'
    },
    schema: {},
    alias: []
  },
  clear: {
    info: {
      name: 'Clear',
      description: 'Removes all input values clearing the form'
    },
    schema: {},
    alias: []
  },
  populate: {
    info: {
      name: 'Populate',
      description: 'Fillls the form with specified data'
    },
    schema: {},
    alias: []
  }
};

var StateOMG = /*#__PURE__*/function (_structs$StateBase$St) {
  _inherits(StateOMG, _structs$StateBase$St);

  var _super = _createSuper(StateOMG);

  function StateOMG(props) {
    var _this;

    _classCallCheck(this, StateOMG);

    _this = _super.call(this, props);

    _this.triggerEvent = function (action, obj, evt) {
      _this.eventManager.addEvent(_this.props.id, action, obj, evt);
    };

    _this.registerComponent = function (actionHandlers, eventHandlers, component_info) {
      var self = _assertThisInitialized(_this);

      actionHandlers = actionHandlers || {};
      eventHandlers = eventHandlers || {}; // add our known handlers
      // register componenet overiding or adding new event handlers

      var dataActionHandlers = {
        submit: {
          schema: {},
          handler: function handler(obj) {
            self.triggerEvent('submitting', obj, null);
            self.getActionState('submit', function (change) {
              var update = self.alterState(change);
              self.triggerEvent('submitted', update.data, null);
            });
          }
        },
        enable: {
          schema: {},
          handler: function handler(obj) {
            var change = {
              disabled: false
            };
            self.triggerEvent('enabled', change, null);
            self.alterState(change);

            if (self.updateView("enable", obj, obj, self.state.data)) {
              self.triggerEvent('enabled', change, null);
            }
          }
        },
        disable: {
          schema: {},
          handler: function handler(obj) {
            var change = {
              disabled: true
            };
            self.alterState(change);

            if (self.updateView("disable", obj, obj, _this.state.data)) {
              self.triggerEvent('disabled', change, null);
            }
          }
        },
        select: {
          schema: {},
          handler: function handler(obj) {
            var selected = obj.ids; // TODO: handle this generically 

            var change = {
              selected: selected
            };
            var update = self.alterState(change);
            self.triggerEvent('selecting', change, {});

            if (self.updateView("select", obj, change, update)) {
              self.triggerEvent('selected', update.selected, null);
            }

            self.triggerEvent('changed', update.selected, null);
          }
        },
        clear: {
          schema: {},
          handler: function handler(obj) {
            var change = {
              selected: [],
              data: {
                xml: ""
              }
            };
            var update = self.alterState(change);
            self.triggerEvent('clearing', update, {});

            if (self.updateView("clear", obj, change, update)) {
              self.triggerEvent('cleared', update.data, null);
            }

            self.triggerEvent('changed', update.data, null);
          }
        },
        populate: {
          schema: {},
          handler: function handler(obj) {
            var change = {
              data: obj
            };
            self.triggerEvent('populating', change.data, null);
            var update = self.alterState(change);

            if (self.updateView("populate", obj, update, update.data)) {
              self.triggerEvent('populated', update.data, null);
            }

            self.triggerEvent('changed', update.data, null);
          }
        }
      }; // register componenet overiding or adding new event handlers

      _this.ddEvent = _this.eventManager.register(_this.props.id, _objectSpread2(_objectSpread2({}, dataActionHandlers), actionHandlers), _objectSpread2(_objectSpread2({}, events$4), eventHandlers), component_info);
      return _this.ddEvent;
    };

    _this.props = props; // ensure array

    var _data = [];

    if (props.data) {
      if (Array.isArray(props.data)) {
        _data = props.data;
      } else {
        // check if this is an empty object
        if (_typeof(props.data) === 'object') {
          // objects should not be empty
          if (props.data.length) {
            _data = [props.data];
          }
        } else {
          _data = [props.data];
        }
      }
    } // apply default values


    _this.state = {
      data: _data || [],
      selectedIndex: 0,
      selectedId: null
    };

    if (!_this.props.manager) {
      throw new Error('Manager was not passed through StateList props');
    }

    _this.eventManager = _this.props.manager.getEventManager();
    return _this;
  }

  return _createClass(StateOMG);
}(modeluiCoreRuntime.structs.StateBase.StateInstance);
var OMGBase = /*#__PURE__*/function (_structs$StateBaseCom) {
  _inherits(OMGBase, _structs$StateBaseCom);

  var _super2 = _createSuper(OMGBase);

  /**
   * Used to manage internal state of avatars
   */
  function OMGBase(props) {
    var _this2;

    _classCallCheck(this, OMGBase);

    if (!props.config.options) {
      props.config.options = {};
    }

    _this2 = _super2.call(this, props);

    _this2.updateView = function (action, arr, updated, data) {
      // extend by parent
      return true;
    };

    _this2.exceptionCatched = function (action_name, event_object) {
      debugger;
      console.info("OMG: " + action_name + " --> ", event_object);
    };

    _this2.props = props;
    return _this2;
  }

  _createClass(OMGBase, [{
    key: "render",
    value:
    /*  
      getData = () => {
        return this.state.data;
      }
    
      showSelected = (id, idx) => {
        // parent implementation to update the visual representation
        return true; // returns true to update state. Else do not update state.
      }
    
      setSelectedId = (id, evt, selected) => {
        EventManager.getInstance().addAction(this.props.id, 'select', { id: id });
      }
    
      handleSelect = (key, data, index, evt) => {
    
        if (!evt) { this.setSelectedId(data.id, evt); }
    
      }
      */
    function render() {
      return null;
    }
  }]);

  return OMGBase;
}(modeluiCoreRuntime.structs.StateBaseComponent.StateBaseComponent);

var events$3 = events$4;
var triggers$3 = triggers$4;
var config$3 = {
  name: 'BPMN Viewer',
  type: 'bpmn-viewer',
  author: 'Kjartan Jonsson',
  version: 0.1,
  description: 'View Buisness Process Model Notation (BPMN) Diagrams as specified by the OMG group.',
  relation: {
    contains: [],
    within: "component" // parent

  },
  options: _objectSpread2(_objectSpread2({}, options), {}, {
    id: 'bpmn-viewer'
  }),
  state: StateOMG
};
var BPMNViewerComponent = /*#__PURE__*/function (_OMGBase) {
  _inherits(BPMNViewerComponent, _OMGBase);

  var _super = _createSuper(BPMNViewerComponent);

  function BPMNViewerComponent(props) {
    var _this;

    _classCallCheck(this, BPMNViewerComponent);

    _this = _super.call(this, props);

    _this.getInstance = function (container) {
      if (!_this.omgInstance) {
        _this.omgInstance = new BpmnJS__default["default"]({
          container: container
        });
      }

      return _this.omgInstance;
    };

    _this.updateView = function (action, arr, updated, data) {
      // extend by parent
      if (this.omgInstance) {
        if (action === 'populate') {
          this.renderDiagram(updated);
        }

        if (action === 'select') {
          if (updated.selected) {
            var selectionInst = this.omgInstance.get("selection");

            try {
              selectionInst.select(updated.selected);
            } catch (e) {// TODO: throw common error notifying that the selection could not be done (missing content)
            }
          }
        }

        if (action === 'clear') {
          this.omgInstance.clear();
        }
      }

      return true;
    };

    _this.componentDidMount = function () {
      if (_this.stateManager) {
        _this.stateManager.doMount(_assertThisInitialized(_this));
      }

      _this.renderDiagram();
    };

    _this.containerRef = /*#__PURE__*/React__default["default"].createRef();
    return _this;
  }

  _createClass(BPMNViewerComponent, [{
    key: "getActionState",
    value: function getActionState(action, callback) {
      var self = this;

      if (this.omgInstance) {
        if (action === 'submit') {
          this.omgInstance.saveXML({
            format: true
          }).then(function (result) {
            /* TODO: see if this is really used, if so restore it by adding missing properties to initial state
            const event_data = {
              definition: self.omgInstance.getDefinitions(),
              xml: xml,
              id: self.state.data.id,
              warnings: "warnings",
              error: "error"
            };
            */
            callback({
              data: {
                xml: result.xml
              }
            });
          }).catch(function (error) {
            callback(); // do nothing regarding update

            self.handleError(error); // handle error
          });
        } else {
          callback();
        }
      } else {
        callback();
      }
    }
  }, {
    key: "renderDiagram",
    value: function renderDiagram(_data_diagrams) {
      var data_diagrams = _data_diagrams || this.state;
      var container = this.containerRef.current;

      if (data_diagrams && data_diagrams.data && data_diagrams.data.length) {
        var diagram = data_diagrams.data[0]; // always show the top most in array of diagrams (for each view)

        if (container && diagram) {
          // const commonTriggersOMG = getCommonTriggers(this, this.omgInstance);
          this.registerCommonEvenHandlers(this.getInstance(container));

          if (diagram.xml) {
            return this.loadDiagram(diagram.xml);
          }
        }
      } // TODO: share event - imported

    }
  }, {
    key: "elementSelect",
    value: function elementSelect(dd_event, self, event, detailed, inst, config, include_selected) {
      // TODO: share event - select
      var omgInst = inst;
      var elementIncoming = [];
      var elementOutgoing = [];
      var buisinessEvent = event.element.businessObject;

      if (!buisinessEvent) {
        // TODO: react to error
        return;
      }

      var event_info = elementExtractInfo(self.state, buisinessEvent);

      if (include_selected && !!omgInst) {
        // get selection
        var selectionInstance = omgInst.get("selection");
        var selected = selectionInstance.get("selection");
        selected.forEach(function (itm, idx) {
          event_info.selected.push({
            bpmnId: itm.id,
            bpmnType: itm.type
          });
        });
      }

      if (detailed) {
        if (buisinessEvent.incoming) {
          buisinessEvent.incoming.forEach(function (item, idx) {
            elementIncoming.push({
              bpmnId: item.id,
              bpmnType: item['$type']
            });
          });
        }

        if (buisinessEvent.outgoing) {
          buisinessEvent.outgoing.forEach(function (item, idx) {
            elementOutgoing.push({
              bpmnId: item.id,
              bpmnType: item['$type']
            });
          });
        }

        event_info.incoming = elementIncoming;
        event_info.outgoing = elementOutgoing; // event_info.definition = omgInst.getDefinitions();

        event_info.parent = null;

        if (event.element.parent) {
          event_info.parent = {
            bpmnId: event.element.parent.id,
            bpmnType: event.element.parent['type'] || event.element.parent['$type']
          };
        }
      }

      this.triggerEvent(dd_event, event_info, self);
    }
  }, {
    key: "registerCommonEvenHandlers",
    value: function registerCommonEvenHandlers(bpmnInstance) {
      var _this2 = this;

      bpmnInstance.on('element.changed', function (event) {
        // Share event - diagram changed
        // TODO: save this change to internal state
        var event_element = event.element;
        var event_data = {};

        if (event_element.buisinessEvent) {
          event_data = elementExtractInfo(event_element.buisinessEvent);
        }

        _this2.triggerEvent('changed', event_data, {});
      }); // bpmnInstance.on('element.hover', (event, detailEvent) => { this.elementSelect('hover-over', this, event, false, bpmnInstance, this.props); });
      // bpmnInstance.on('element.out', (event, detailEvent) => { this.elementSelect('hover-exit', this, event, false, bpmnInstance, this.props); });

      bpmnInstance.on('element.click', function (event, detailEvent) {
        _this2.elementSelect('selected', _this2, event, true, bpmnInstance, _this2.props, true);
      });
      bpmnInstance.on('element.dblclick', function (event, detailEvent) {
        _this2.elementSelect('tap', _this2, event, true, bpmnInstance, _this2.props, true);
      });
      bpmnInstance.on('element.mousedown', function (event, detailEvent) {
        _this2.elementSelect('press', _this2, event, false, bpmnInstance, _this2.props);
      });
      bpmnInstance.on('element.mouseup', function (event, detailEvent) {
        _this2.elementSelect('release', _this2, event, false, bpmnInstance, _this2.props);
      });
      bpmnInstance.on('import.done', function (event, detailEvent) {
        var error = event.error,
            warnings = event.warnings;

        if (error) {
          // TODO: share event - import-error
          return _this2.handleError(error);
        }

        bpmnInstance.get('canvas').zoom('fit-viewport');
        return _this2.handleShown(warnings);
      });
    }
  }, {
    key: "loadDiagram",
    value: function loadDiagram(xml) {
      var self = this; // Share event - loading

      this.triggerEvent('loading', {
        xml: xml,
        id: self.state.data.id
      }, {}); // Do the import

      this.omgInstance.importXML(xml);
      /* TODO: use promisess
        function (err) {
        if (err) {
          self.handleError(err);
          return;
        } else {
          // TODO: notify loaded
        }
      });
      */
    }
  }, {
    key: "handleLoading",
    value: function handleLoading() {
      var onLoading = this.props.onLoading;

      if (onLoading) {
        onLoading();
      }
    }
  }, {
    key: "handleError",
    value: function handleError(err) {
      // TODO: refactor following to this -> this.eventDD('failure', err);
      this.triggerEvent('failure', {
        code: 12012,
        detail: 'asdf'
      }, err);
    }
  }, {
    key: "handleShown",
    value: function handleShown(warnings) {
      var onShown = this.props.onShown;

      if (onShown) {
        onShown(warnings);
      }
    }
  }, {
    key: "render",
    value: function render() {
      // this.renderDiagram();
      return /*#__PURE__*/React__default["default"].createElement("div", {
        className: "react-bpmn-diagram-container",
        ref: this.containerRef,
        style: {
          flex: 1,
          height: '100vh'
        }
      }, " ");
    }
  }]);

  return BPMNViewerComponent;
}(OMGBase);

var events$2 = events$4;
var triggers$2 = triggers$4;
var config$2 = {
  name: 'BPMN Editor',
  type: 'bpmn-editor',
  author: 'Kjartan Jonsson',
  version: 0.1,
  description: 'View Buisness Process Model Notation (CMMN) Diagrams as specified by the OMG group.',
  relation: {
    contains: [],
    within: "component" // parent

  },
  options: _objectSpread2(_objectSpread2({}, options), {}, {
    id: 'bpmn-editor'
  }),
  state: StateOMG
};
var BPMNEditorComponent = /*#__PURE__*/function (_BPMNViewerComponent) {
  _inherits(BPMNEditorComponent, _BPMNViewerComponent);

  var _super = _createSuper(BPMNEditorComponent);

  function BPMNEditorComponent() {
    var _this;

    _classCallCheck(this, BPMNEditorComponent);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_this = _super.call.apply(_super, [this].concat(args)), _this.getInstance = function (container) {
      if (!_this.omgInstance) {
        // create the BPMN Editor
        _this.omgInstance = new BpmnJS__default$1["default"]({
          container: container
        });
      }

      return _this.omgInstance;
    }, _assertThisInitialized(_this)));
  }

  return _createClass(BPMNEditorComponent);
}(BPMNViewerComponent);

function BPMNViewer(props) {
  // lets enumerate schema to extract uiSchema and validation
  return /*#__PURE__*/React__default["default"].createElement(BPMNViewerComponent, props);
}
function BPMNEditor(props) {
  // lets enumerate schema to extract uiSchema and validation
  return /*#__PURE__*/React__default["default"].createElement(BPMNEditorComponent, props);
}
function registerViewer$1(component_manager) {
  // self register component to layout manager
  component_manager.registerComponent({
    component: BPMNViewer,
    type: 'bpmn-viewer',
    events: events$3,
    triggers: triggers$3,
    config: config$3
  });
}
function registerEditor$1(component_manager) {
  // self register component to layout manager
  component_manager.registerComponent({
    component: BPMNEditor,
    type: 'bpmn-editor',
    events: events$2,
    triggers: triggers$2,
    config: config$2
  });
}

var events$1 = events$4;
var triggers$1 = triggers$4;
var config$1 = {
  name: 'CMMN Viewer',
  type: 'cmmn-viewer',
  author: 'Kjartan Jonsson',
  version: 0.1,
  description: 'View Buisness Process Model Notation (CMMN) Diagrams as specified by the OMG group.',
  relation: {
    contains: [],
    within: "component" // parent

  },
  options: _objectSpread2(_objectSpread2({}, options), {}, {
    id: 'cmmn-viewer'
  }),
  state: StateOMG
};
var CMMNViewerComponent = /*#__PURE__*/function (_BPMNViewerComponent) {
  _inherits(CMMNViewerComponent, _BPMNViewerComponent);

  var _super = _createSuper(CMMNViewerComponent);

  function CMMNViewerComponent() {
    var _this;

    _classCallCheck(this, CMMNViewerComponent);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_this = _super.call.apply(_super, [this].concat(args)), _this.getInstance = function (container) {
      if (!_this.omgInstance) {
        // create the CMMN Viewer
        _this.omgInstance = new CmmnJS__default["default"]({
          container: container
        });
      }

      return _this.omgInstance;
    }, _assertThisInitialized(_this)));
  }

  _createClass(CMMNViewerComponent, [{
    key: "getActionState",
    value: function getActionState(action, callback) {
      // the CMMN library is different than BPMN
      var self = this;

      if (this.omgInstance) {
        if (action === 'submit') {
          this.omgInstance.saveXML({
            format: true
          }, function (error, xml) {
            if (error) {
              callback(); // do nothing regarding update

              self.handleError(error); // handle error         
            } else {
              /* TODO: see if this is really used, if so restore it by adding missing properties to initial state
              const event_data = {
              id: self.state.id,
              definition: omgInst.getDefinitions(),
              xml: xml,
              error: err
              };
               */
              callback({
                data: {
                  xml: xml
                }
              });
            }
          });
        } else {
          callback();
        }
      } else {
        callback();
      }
    }
  }, {
    key: "criterionChildren",
    value: function criterionChildren(criterion) {
      var children = [];

      if (criterion.sentryRef) {
        criterion.sentryRef.onParts.forEach(function (part) {
          children.push({
            type: part["$type"],
            id: part["id"]
          });
        });
      }

      return children;
    }
  }, {
    key: "elementEdgeConnections",
    value: function elementEdgeConnections(edge, elementIncoming, elementOutgoing) {
      if (edge.cmmnElementRef) {
        elementOutgoing["type"] = edge.cmmnElementRef["$type"];
        elementOutgoing["id"] = edge.cmmnElementRef["id"];
        elementIncoming["parts"] = this.criterionChildren(edge.cmmnElementRef); // incomming into criterion

        elementIncoming["type"] = edge.targetCMMNElementRef["$type"];
        elementIncoming["id"] = edge.targetCMMNElementRef["id"];
        elementIncoming["parts"] = this.criterionChildren(edge.targetCMMNElementRef);
      }
    }
  }, {
    key: "elementSelect",
    value: function elementSelect(dd_event, self, event, detailed, inst, config, include_selected) {
      var _this2 = this;

      var omgInst = inst;
      var elementIncoming = [];
      var elementOutgoing = [];
      var eventElement = event.element;
      var buisinessEvent = event.element.businessObject;

      if (!buisinessEvent) {
        // TODO: react to error
        return;
      }

      var event_info = elementExtractInfo(self.state.data, buisinessEvent);

      if (include_selected && !!omgInst) {
        // get selection
        var selectionInstance = omgInst.get("selection");
        var selected = selectionInstance.get("selection");
        selected.forEach(function (itm, idx) {
          event_info.selected.push({
            bpmnId: itm.id,
            bpmnType: itm.type
          });
        });
      }

      if (detailed) {
        if (buisinessEvent["$type"] === "cmmndi:CMMNEdge") {
          this.elementEdgeConnections(buisinessEvent, elementIncoming, elementOutgoing);
        } else {
          if (buisinessEvent.entryCriteria) {
            buisinessEvent.entryCriteria.forEach(function (item, idx) {
              var criterion = {
                id: item.id,
                type: item['$type'],
                parts: _this2.criterionChildren(item)
              };
              elementIncoming.push(criterion);
            });
          }

          if (eventElement.outgoing) {
            eventElement.outgoing.forEach(function (item, idx) {
              var criterion = {
                id: item.id,
                type: item['type'],
                parts: _this2.criterionChildren(item)
              };
              elementOutgoing.push(criterion);
            });
          }
        }

        event_info.incoming = elementIncoming;
        event_info.outgoing = elementOutgoing;
        event_info.definition = omgInst.getDefinitions();
        event_info.parent = null; // event_info.definition = omgInst.getDefinitions();

        event_info.parent = null;

        if (event.element.parent) {
          event_info.parent = {
            bpmnId: event.element.parent.id,
            bpmnType: event.element.parent['type'] || event.element.parent['$type']
          };
        }
      }

      this.triggerEvent(dd_event, event_info, self);
    }
  }]);

  return CMMNViewerComponent;
}(BPMNViewerComponent);

var events = events$4;
var triggers = triggers$4;
var config = {
  name: 'CMMN Editor',
  type: 'cmmn-editor',
  author: 'Kjartan Jonsson',
  version: 0.1,
  description: 'View Buisness Process Model Notation (CMMN) Diagrams as specified by the OMG group.',
  relation: {
    contains: [],
    within: "component" // parent

  },
  options: _objectSpread2(_objectSpread2({}, options), {}, {
    id: 'cmmn-editor'
  }),
  state: StateOMG
};
var CMMNEditorComponent = /*#__PURE__*/function (_CMMNViewerComponent) {
  _inherits(CMMNEditorComponent, _CMMNViewerComponent);

  var _super = _createSuper(CMMNEditorComponent);

  function CMMNEditorComponent() {
    var _this;

    _classCallCheck(this, CMMNEditorComponent);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_this = _super.call.apply(_super, [this].concat(args)), _this.getInstance = function (container) {
      if (!_this.omgInstance) {
        // create the CMMN Editor
        _this.omgInstance = new CmmnJS__default$1["default"]({
          container: container
        });
      }

      return _this.omgInstance;
    }, _assertThisInitialized(_this)));
  }

  return _createClass(CMMNEditorComponent);
}(CMMNViewerComponent);

function CMMNViewer(props) {
  // lets enumerate schema to extract uiSchema and validation
  return /*#__PURE__*/React__default["default"].createElement(CMMNViewerComponent, props);
}
function CMMNEditor(props) {
  // lets enumerate schema to extract uiSchema and validation
  return /*#__PURE__*/React__default["default"].createElement(CMMNEditorComponent, props);
}
function registerViewer(component_manager) {
  // self register component to layout manager
  component_manager.registerComponent({
    component: CMMNViewer,
    type: 'cmmn-viewer',
    events: events$1,
    triggers: triggers$1,
    config: config$1
  });
}
function registerEditor(component_manager) {
  // self register component to layout manager
  component_manager.registerComponent({
    component: CMMNEditor,
    type: 'cmmn-editor',
    events: events,
    triggers: triggers,
    config: config
  });
}

// Managers and factories
function registerComponents(component_manager) {
  if (!component_manager) {
    component_manager = modeluiCoreRuntime.layout.Manager.ComponentManager.getInstance();
  }
  /*
  if (component_manager.constructor.name !== 'ComponentManager') {
      throw `Constructor must be component manager. Got type ${component_manager.constructor.name}`;
  }
  */


  registerViewer$1(component_manager);
  registerEditor$1(component_manager);
  registerViewer(component_manager);
  registerEditor(component_manager);
}

exports.registerComponents = registerComponents;
//# sourceMappingURL=index.cjs.js.map
