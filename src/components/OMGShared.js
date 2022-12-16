export const options = {
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
}


export const COMPONENT_STANDARD_FAILURE = {
  "$id": "https://example.com/card.schema.json",
  "$schema": "http://json-schema.org/draft-07/schema#",
  "description": "Standard error message",
  "type": "object",
  "properties": {
    "url": {
      "type": "string",
      "format": "uri"
    },
    "xml": {
      "type": "string",
      "format": "xml"
    }
  }
}

export const COMPONENT_SCHEMA_BPMN_BUISSINESSOBJECT = {
  bpmnType: 'string',
  bpmnId: 'string',
  name: 'string',
}

export const COMPONENT_SCHEMA_BPMN_DEFINITION = {
  type: 'object'
}

export const COMPONENT_SCHEMA_CMMN_DEFINITION = {
  type: 'object'
}

export const COMPONENT_SCHEMA_CMMN_FULL = {
  '$id': 'https://example.com/card.schema.json',
  '$schema': 'http://json-schema.org/draft-07/schema#',
  title: 'Diagram full',
  description: 'User saves CMMN',
  type: 'object',
  properties: {
    xml: { type: 'string', format: 'xml' },
    definition: COMPONENT_SCHEMA_CMMN_DEFINITION
  }
}

export const COMPONENT_SCHEMA_BPMN_FULL = {
  '$id': 'https://example.com/card.schema.json',
  '$schema': 'http://json-schema.org/draft-07/schema#',
  title: 'Diagram full',
  description: 'User saves BPMN',
  type: 'object',
  properties: {
    xml: { type: 'string', format: 'xml' },
    definition: COMPONENT_SCHEMA_BPMN_DEFINITION
  }
}


export const COMPONENT_SCHEMA_BPMN_SELECT_DETAIL = {
  '$id': 'https://example.com/card.schema.json',
  '$schema': 'http://json-schema.org/draft-07/schema#',
  title: 'Diagram selection',
  description: 'User selects element in a diagram',
  type: 'object',
  properties: {
    element: COMPONENT_SCHEMA_BPMN_BUISSINESSOBJECT,
    parent: COMPONENT_SCHEMA_BPMN_BUISSINESSOBJECT,
    incoming: {
      type: 'array',
      items: {
        type: 'object',
        properties: COMPONENT_SCHEMA_BPMN_BUISSINESSOBJECT
      }
    },
    outgoing: {
      type: 'array',
      items: {
        type: 'object',
        properties: COMPONENT_SCHEMA_BPMN_BUISSINESSOBJECT
      }
    },
    definition: COMPONENT_SCHEMA_BPMN_DEFINITION
  }
}

export const COMPONENT_SCHEMA_BPMN_SELECT_BASIC = {
  '$id': 'https://example.com/card.schema.json',
  '$schema': 'http://json-schema.org/draft-07/schema#',
  title: 'Diagram selection',
  description: 'User selects element in a diagram',
  type: 'object',
  properties: {
    element: COMPONENT_SCHEMA_BPMN_BUISSINESSOBJECT
  }
}

export const COMPONENT_SCHEMA_BPMN_LOADING = {
  '$id': 'https://example.com/card.schema.json',
  '$schema': 'http://json-schema.org/draft-07/schema#',
  title: 'Diagram loading',
  description: 'XML diagram is loading',
  type: 'object',
  properties: {
    xml: {
      type: 'string',
      format: 'xml'
    }
  }
}

export const COMPONENT_SCHEMA_BPMN_LOADED = {
  '$id': 'https://example.com/card.schema.json',
  '$schema': 'http://json-schema.org/draft-07/schema#',
  title: 'Diagram loading',
  description: 'XML diagram is loading',
  type: 'object',
  properties: {
    xml: {
      type: 'string',
      format: 'xml'
    },
    definition: COMPONENT_SCHEMA_BPMN_DEFINITION
  }
}

export function elementExtractInfo(self_state, buisinessEvent) {

  const definitionRef = buisinessEvent.definitionRef || { name: '', '$type': '' };

  let event_info = {
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
  }

  return event_info;
}

/*
export const eventHandlerSubmitCMMN = (obj) => {
  console.info("TODO: send data");
  const event = {
    definition: this.cmmnViewer.getDefinitions()
  };
  elementSelectCMMN('submitted', this, event, false, this);
}
*/


/*
export const commonEventsOMG = {
  failure: {
    alias: [],
    info: {
      name: 'Failure',
      description: 'Returns issues this component detects when executing actions'
    },
    schema: COMPONENT_STANDARD_FAILURE,
    handler: (obj) => {
      debugger;
    }
  },
  
  loading: {
    alias: [],
    info: {
      name: 'Loading',
      description: 'Loaded BPMN XML string'
    },
    schema: COMPONENT_SCHEMA_BPMN_LOADING
  },
  loaded: {
    alias: ['open', 'fetch', 'streamed'],
    info: {
      name: 'Loaded',
      description: 'XML diagram has been loaded'
    },
    schema: COMPONENT_SCHEMA_BPMN_LOADED
  }, 
  selected: {
    alias: ['click', 'choose'],
    info: {
      name: 'Select',
      description: 'Diagram element selected'
    },
    schema: COMPONENT_SCHEMA_BPMN_SELECT_DETAIL
  },
  
  tap: {
    alias: ['dblclick'],
    info: {
      name: 'Tap',
      description: 'Diagram element tapped'
    },
    schema: COMPONENT_SCHEMA_BPMN_SELECT_DETAIL
  },
  press: {
    alias: ['mouse-pressed'],
    info: {
      name: 'Press',
      description: 'Diagram element pressed'
    },
    schema: COMPONENT_SCHEMA_BPMN_SELECT_BASIC
  },
  release: {
    alias: ['mouse-release'],
    info: {
      name: 'Release',
      description: 'Diagram element released after being pressed'
    },
    schema: COMPONENT_SCHEMA_BPMN_SELECT_BASIC
  },
  'hover-over': {
    alias: ['hover'],
    info: {
      name: 'Hover Over',
      description: 'Mouse hovering over element'
    },
    schema: COMPONENT_SCHEMA_BPMN_SELECT_BASIC
  },
  'hover-exit': {
    alias: ['out'],
    info: {
      name: 'Hover Exit',
      description: 'Mouse moved from hovering over element'
    },
    schema: COMPONENT_SCHEMA_BPMN_SELECT_BASIC
  },
  submitted: {
    alias: ['save', 'export'],
    info: {
      name: 'Submitted',
      description: 'User submitting diagram'
    },
    schema: COMPONENT_SCHEMA_BPMN_FULL
  },
  edited: {}
  
  ,editing: {},
  'enabling': {},
  'enabled': {},
  'disabling': {},
  'disabled': {}
  
}
*/

/*
export function getCommonTriggers(self, omgInst) {
  return {
    enable: {
      alias: [],
      info: {
        name: 'Enable',
        description: 'Allows user to interact with the diagram when selecting the diagram elemements'
      },
      schema: {},
      handler: (obj) => {
        console.info("TODO: enable ", obj);
      }
    },
    disable: {
      alias: [],
      info: {
        name: 'Disable',
        description: 'Allows user to interact with the diagram when selecting the diagram elemements'
      },
      schema: {},
      handler: (obj) => {
        console.info("TODO: Disable button");
      }
    },

    load: {
      alias: [],
      info: {
        name: 'Load',
        description: 'Allows user to interact with the diagram when selecting the diagram elemements'
      },
      schema: {},
      handler: (obj) => {
        self.setState({
          diagramXML: obj.xml,
          url: obj.url,
          id: obj.id
        });

        if (obj.xml) {
          self.loadDiagram(obj.xml);
        } else if (obj.url) {
          self.fetchDiagram(obj.url);
        }
      }
    },
    submit: {
      alias: [],
      info: {
        name: 'Submit',
        description: 'Submits diagram'
      },
      schema: {},
      handler: (obj) => {
        omgInst.saveXML({ format: true }, function (err, xml) {

          const event_data = {
            id: self.state.id,
            definition: omgInst.getDefinitions(),
            xml: xml,
            error: err
          };

          // Share event - loaded
          EventManager.getInstance().addEvent(self.config.id, self.eventDD['submitted'].id, event_data, {});

        });
      }
    },
    select: {
      alias: [],
      info: {
        name: 'SELECT',
        description: 'Allows user to interact with the diagram when selecting the diagram elemements'
      },
      schema: {},
      handler: (obj) => {
        if (obj.bpmnId) {
          let selectionInst = omgInst.get("selection");
          try {
            selectionInst.select(obj.bpmnId);
          } catch (e) {
            // TODO: throw common error notifying that the selection could not be done (missing content)
          }
        }
      }
    },
    clear: {
      alias: [],
      info: {
        name: 'Enable',
        description: 'Allows user to interact with the diagram when selecting the diagram elemements'
      },
      schema: {},
      handler: (obj) => {
        try {
          omgInst.clear();
          obj.id = this.state.id;
          EventManager.getInstance().addEvent(self.config.id, self.eventDD['cleared'].id, obj, {});
        } catch (e) {
          // TODO: throw common error
        }
      }
    }
  }
}
*/
export const triggers = () => {
  return {
    enable: {
      alias: [],
      info: {
        name: 'Enable',
        description: 'Enable'
      },
      schema: {}
    },
    disable: {
      alias: [],
      info: {
        name: 'Disable',
        description: 'Disable'
      },
      schema: {}
    },
    load: {
      alias: [],
      info: {
        name: 'Load',
        description: 'Load data'
      },
      schema: {}
    },
    submit: {
      alias: ['save', 'export'],
      info: {
        name: 'Submit',
        description: 'Submit diagram'
      },
      schema: {}
    },
    select: {
      alias: [],
      info: {
        name: 'Select item',
        description: 'Selects the data item'
      },
      schema: {}
    },
    clear: {
      alias: [],
      info: {
        name: 'Clear items',
        description: 'Removes all items from list'
      },
      schema: {}
    }
  }
}

export const events = () => {
  return {
    enabled: {
      alias: ['enabled'],
      info: {
        name: 'enabled',
        description: 'Diagram enabled by user'
      },
      schema: COMPONENT_SCHEMA_BPMN_LOADING
    },
    disabled: {
      alias: [],
      info: {
        name: 'disabled',
        description: 'Disabled diagram'
      },
      schema: COMPONENT_SCHEMA_BPMN_LOADING
    },
    changed: {
      alias: ['changed'],
      info: {
        name: 'changed',
        description: 'Diagram changed by user'
      },
      schema: COMPONENT_SCHEMA_BPMN_LOADING
    },
    loading: {
      alias: ['opening', 'fetching', 'streaming'],
      info: {
        name: 'loading',
        description: 'Loading diagram'
      },
      schema: COMPONENT_SCHEMA_BPMN_LOADING
    },
    loaded: {
      alias: ['opened', 'fetched', 'streamed'],
      info: {
        name: 'loaded',
        description: 'Loaded diagram'
      },
      schema: COMPONENT_SCHEMA_BPMN_LOADED
    },
    selected: {
      alias: [],
      info: {
        name: 'Selected',
        description: 'Selecting item'
      },
      schema: COMPONENT_SCHEMA_BPMN_SELECT_DETAIL
    },
    tap: {
      alias: ['dblclick'],
      info: {
        name: 'Tap',
        description: 'Diagram element tapped'
      },
      schema: COMPONENT_SCHEMA_BPMN_SELECT_DETAIL
    },
    'hover-over': {
      alias: [],
      info: {
        name: 'Hover over',
        description: 'Hover over element'
      },
      schema: COMPONENT_SCHEMA_BPMN_SELECT_DETAIL
    },
    'hover-exit': {
      alias: [],
      info: {
        name: 'Hover exit',
        description: 'Hover exists element'
      },
      schema: COMPONENT_SCHEMA_BPMN_SELECT_DETAIL
    },
    press: {
      alias: ['mouse-down'],
      info: {
        name: 'Press',
        description: 'Pressed element'
      },
      schema: COMPONENT_SCHEMA_BPMN_SELECT_DETAIL
    },
    release: {
      alias: ['mouse-release'],
      info: {
        name: 'Release',
        description: 'Diagram element released'
      },
      schema: COMPONENT_SCHEMA_BPMN_SELECT_DETAIL
    },
    cleared: {
      alias: ['removed', 'reset'],
      info: {
        name: 'cleared',
        description: 'Diagram area cleared'
      },
      schema: COMPONENT_SCHEMA_BPMN_SELECT_DETAIL
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
  }
}
